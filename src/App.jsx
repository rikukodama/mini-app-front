import "./common/styles/index.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Settings } from "./components/Settings";
import React, { useState } from "react";
function App() {
  const [jooy, setJooy] = useState(0); // State for jooy
  const [vibe, setVibe] = useState(0); // State for vibe
  
  // update the jooy and vibe
  const updateValues = (newJooy, newVibe) => {
    setJooy(newJooy);
    setVibe(newVibe);
  };
  return (
    <div className="h-full">
      <Settings jooy={jooy} vibe={vibe}/>
      <Header />
 
      <Body updateValues={updateValues} jooy={jooy} vibe={vibe} />

      <div className="fixed bottom-3 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
