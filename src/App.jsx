import "./common/styles/index.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Settings } from "./components/Settings";
import React, { useState } from "react";
function App() {
  const [jooy, setJooy] = useState(0); // State for jooy
  const [vibe, setVibe] = useState(0); // State for vibe

  const [sad, setSad] = useState(0); // State for jooy
  const [energy, setEngergy] = useState(100); // State for vibe
  const [time, setTime] = useState(600); // 1 minute and 30 seconds in seconds
  const [modeStatus, setModeStatus] = useState('SAD'); // 1 minute and 30 seconds in seconds

  
  // update the jooy and vibe
  const updateValues = (newJooy, newVibe,sadBarPercent,energyPercent,modeStatus) => {
    setJooy(newJooy);
    setVibe(newVibe);
    setSad(sadBarPercent);
    setEngergy(energyPercent);
    setModeStatus(modeStatus);
   
  };
  const updateInactive=(sadBarPercent,energyPercent,modeStatus)=>{
    setEngergy(energyPercent);
    setSad(sadBarPercent);
    setModeStatus(modeStatus);
  }
  const updateOnlyTime=(time_insecond)=>{
    setTime(time_insecond);
    //setSad(sadBarPercent);
    //setEngergy(energyPercent);
  };
  return (
    <div className="h-full">
      <Settings jooy={jooy} vibe={vibe}/>
      <Header sad={sad} energy={energy} timer={time} modeStatus={modeStatus} />
 
      <Body updateValues={updateValues} updateOnlyTime={updateOnlyTime} updateInactive={updateInactive} jooy={jooy} vibe={vibe} sadBarPercent={sad} energyPercent={energy} timer={time} modeStatus={modeStatus}/>

      <div className="fixed bottom-3 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
