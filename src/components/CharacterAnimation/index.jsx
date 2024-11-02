// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

// export function CharacterAnimation() {
//   const [frameIndex, setFrameIndex] = useState(0);
//   const frameRate = 1000 / 30;
//   const totalFrames = 168;
//   const intervalRef = useRef(null);

//   const frameArray = Array.from({ length: totalFrames }, (_, i) => {
//     const frameNumber = String(i + 1).padStart(3, "0");
//     return `happy/${frameNumber}.png`;
//   });

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setFrameIndex((prevIndex) => (prevIndex + 1) % totalFrames);
//     }, frameRate);

//     return () => clearInterval(intervalRef.current); // Clean up interval on unmount
//   }, []);

//   return (
//     <img
//       src={frameArray[frameIndex]}
//       alt="character animation"
//       className="w-full h-full object-cover"
//     />
//   );
// }

import { useEffect, useState, useRef } from "react";

export function CharacterAnimation({ updateValues,jooy,vibe } ) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Controls animation state
  const totalFrames = 168;
  const frameArray = Array.from({ length: totalFrames }, (_, i) => {
    const frameNumber = String(i + 1).padStart(3, "0");
    return `happy_webp/${frameNumber}.webp`;
  });

  // Preload images
  useEffect(() => {
    frameArray.forEach((frame) => {
      const img = new Image();
      img.src = frame; // Preload the image
    });
  }, [frameArray]);

  useEffect(() => {
    let animationFrameId;
    let lastFrameTime = 0; // Track time for FPS control

    const animate = (timestamp) => {
      if (!lastFrameTime) lastFrameTime = timestamp;

      // Calculate time since last frame
      const elapsedTime = timestamp - lastFrameTime;

      // Display the next frame if enough time has passed
      if (elapsedTime >= 1000 / 30) { // 30 FPS
        setFrameIndex((prevIndex) => {
          if (prevIndex === totalFrames - 1) {
            setIsAnimating(false); // Stop animation
            return prevIndex;
          }
          return prevIndex + 1;
        });
        lastFrameTime = timestamp; // Update last frame time
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if (isAnimating) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up animation frame on unmount
    };
  }, [isAnimating, totalFrames]);

  const handleClick = () => {
    setFrameIndex(0); // Reset to the first frame
    setIsAnimating(true); // Restart the animation
    handleUpdate();
  };
//>>>>>>>>>>>>>>>>>>>>>>>>.
const handleUpdate = () => {
   setVibe(vibe+100);
   if(newVibe>1000){
    setJooy(convertToK(newVibe));
   }
  updateValues(newJooy, newVibe);
};
const [newJooy, setJooy] = useState(jooy); // State for jooy
const [newVibe, setVibe] = useState(vibe); // State for vibe

  return (
    <div className="h-full w-full">
      <img
        onClick={handleClick}
        src={frameArray[frameIndex]}
        alt="character animation"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
const convertToK = (num) => {
  if (num >= 1000) {
    return Math.floor(num / 1000); // Remove decimals by using Math.floor
  }
  return num.toString();
};