import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import SadMode from '../Mood/SadMode';
import PlayFul from '../Mood/PlayFul';
import HappyMode from '../Mood/HappyMode';
import Confetti from 'react-confetti';

export function CharacterAnimation({ updateValues, updateOnlyTime,updateInactive, jooy, vibe, sadBarPercent, energyPercent, timer, modeStatus }) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  

  // State based on props
  const [newJooy, setJooy] = useState(jooy);
  const [newVibe, setVibe] = useState(vibe);
  const [newSadBarPercent, setSadBarPercent] = useState(sadBarPercent);
  const [newEnergyPercent, setEnergyPercent] = useState(energyPercent);
  const [newModeStatus, setModeStatus] = useState(modeStatus);
  const [time, setTime] = useState(600);
  const [scoreAnimations, setScoreAnimations] = useState([]);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [postDelay,setPostDelay]=useState(true);

  


  // Reference for the container
  const containerRef = useRef(null);

  useEffect(() => {
    if (time <= 0) return;
    const timerId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
      if(postDelay){
       if(newEnergyPercent<400){
        setEnergyPercent((prev) => Math.max(prev + 1, 0));
       }
        if(newSadBarPercent<=100 && newSadBarPercent>0){
          setSadBarPercent((prev) => Math.min(prev - 1, 100));
        }
        updateInactive(newSadBarPercent,newEnergyPercent,newModeStatus);
      }
      if(newSadBarPercent<30){
        setModeStatus("SAD");
        setSelectedCharacter(1);
      }else if(newSadBarPercent>30 && newSadBarPercent<60){
        setModeStatus("Neutral");
        setSelectedCharacter(2);
      }else{
        setModeStatus("HAPPY");
        setSelectedCharacter(3);
      }
      updateOnlyTime(time);
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount or when time reaches 0
  }, [time]);
  useEffect(() => {
    setJooy(jooy);
    setVibe(vibe);
    setSadBarPercent(sadBarPercent);
    setEnergyPercent(energyPercent);
    setModeStatus(modeStatus);
  }, [jooy, vibe, sadBarPercent, energyPercent, modeStatus]);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const delayProgebarUpdate = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setPostDelay(true);
    }, 3000); 
    setTimeoutId(id);
  };

  const handleClick = () => {
    setPostDelay(false);
    handleUpdate();
    setTime(600);
    delayProgebarUpdate();  
  };

  const handleUpdate = () => {
    setVibe((prev) => prev + 100);
    if (newVibe > 1000) {
      setJooy(convertToK(newVibe));
    }
    setEnergyPercent((prev) => Math.max(prev - 1, 0));
    setSadBarPercent((prev) => Math.min(prev + 1, 100));

    // Handle character changes based on sadBarPercent
    if (newSadBarPercent >= 30 && newSadBarPercent < 60) {
      handleCharacterChange(2);
      setModeStatus("Neutral");
    } else if (newSadBarPercent > 60) {
      handleCharacterChange(3);
      setModeStatus("HAPPY");
    } else if (newSadBarPercent < 30) {
      handleCharacterChange(1);
      setModeStatus("SAD");
    }

    if(newSadBarPercent>99){
      setIsCelebrating(true);
    }else{
        // Add a new score animation with random color
    setScoreAnimations((prev) => [
      ...prev,
      { id: Date.now(), value: '+100', x: 0, y: 0, color: getRandomColor() }, // Add random color here
    ]);

    updateValues(newJooy, newVibe, newSadBarPercent, newEnergyPercent, newModeStatus);
    }
  
  };

  const handleCharacterChange = (value) => {
    setSelectedCharacter(value);
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Automatically update score animations for movement
  useEffect(() => {
    if (scoreAnimations.length > 0) {
      const interval = setInterval(() => {
        setScoreAnimations((prev) => {
          const containerHeight = containerRef.current.clientHeight;
          const threshold = -0.35 * containerHeight; // Adjust threshold to be 50% of the container height

          return prev.map((score) => ({
            ...score,
            y: score.y - 5, // Move score up by 5 units
            x: score.x + 2, // Move score to the right by 2 units
          })).filter(score => score.y > threshold); // Remove score if it moves above 50% of the container height
        });
      }, 50); // Adjust interval for speed of movement

      return () => clearInterval(interval);
    }
  }, [scoreAnimations]);
const claim=()=>{

  setVibe((prev) => prev + 1000);
  if (newVibe > 1000) {
    setJooy(convertToK(newVibe));
  }
  updateValues(newJooy, newVibe, newSadBarPercent, newEnergyPercent, newModeStatus);
  setIsCelebrating(false);
}
  return (
    <div className="h-full w-full relative" ref={containerRef}>
       {isCelebrating && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          gravity={0.2}
          recycle={false}
          colors={['#ff6347', '#ffd700', '#adff2f', '#00bfff']}
        />
      )}
      {scoreAnimations.map((score) => (
        <motion.div
          key={score.id}
          initial={{ opacity: 1, y: score.y, x: score.x }}
          animate={{ opacity: 1, y: score.y, x: score.x }}
          exit={{ opacity: 0, y: -50, x: score.x + 50 }} // Adjust exit to also move to the right
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: `translate(${score.x}px, ${score.y}px)`,
            color: 'white',
            pointerEvents: 'none',
            zIndex: 20,
            backgroundColor: score.color, // Apply random color here
          }}
          className="p-1 rounded-lg font-light text-[14px]"
        >
          {score.value}
        </motion.div>
      ))}
      <div className="absolute w-full h-full transition-opacity duration-500"  onClick={handleClick}>
        {selectedCharacter === 1 && <SadMode />}
        {selectedCharacter === 2 && <PlayFul />}
        {selectedCharacter === 3 && <HappyMode />}
      </div>

      {isCelebrating && (
             <div className="absolute w-[100%] h-[90%]  rounded-lg mt-[25px] p-4">
             <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-100 bg-opacity-50 border border-blue-200">
             <h2 className="text-2xl font-semibold text-blue-800 mb-4">Congratulations!</h2>
             <p className="text-lg text-blue-700 mb-4">You made Nino happy and earned 1500 Vibe! 🎉</p>
             <button onClick={claim} className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-green-600 transition duration-300">
               Claim
             </button>
           </div>
             </div>
      )}

    </div>
  );
}

const convertToK = (num) => {
  return num >= 1000 ? Math.floor(num / 1000) : num.toString();
};

