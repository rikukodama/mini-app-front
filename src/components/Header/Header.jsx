import { BtnInner } from "../../assets/svgs/BtnInner";
import { BtnOutter } from "../../assets/svgs/BtnOutter";
import { ColoredBtnBgSvg } from "../../assets/svgs/HeaderSvg/ColoredBtnBgSvg";
import { TopCenterInnerSvg } from "../../assets/svgs/HeaderSvg/TopCenterInnerSvg";
import { TopCenterOutterSvg } from "../../assets/svgs/HeaderSvg/TopCenterOutterSvg";
import { TopLeftRectSvg } from "../../assets/svgs/HeaderSvg/TopLeftRectSvg";
import { TopRightRectSvg } from "../../assets/svgs/HeaderSvg/TopRightRectSvg";
import { ProgressBarSvg } from "../../assets/svgs/ProgressBarSvg";
import { EnergyProgressBar } from "../../assets/svgs/EnergyProgressBar";
import { HeaderBadge } from "./HeaderBadge";
import SadProgressbar from "../SadProgressbar";
import EngergyProgressbar from "../EnergyProgressBar";

export function Header({sad,energy,timer,modeStatus}) {
  energy=energy/100*100;
  if(sad<100){
    sad=sad/100*100;
  }else{
    sad=100;
  }
  
 
  return (
    // <div className="fixed top-[200px] w-full mx-4">
    <div className="fixed left-1/2 -translate-x-1/2 top-[65px] w-full z-50 flex items-center justify-center">
      <div className="translate-x-5 flex items-center justify-center relative mr-[8px]">
        <TopLeftRectSvg />
        
       <div className="absolute top-0 left-0">
        <div className="absolute left-[17px] top-[12px] bg-red-400 w-[100px]">
        <HeaderBadge icon={getEmoji(modeStatus)} text={modeStatus} />
        </div>
        <div className="absolute top-[28px] left-[13px]">
        <SadProgressbar progress={sad} />
       {/* <ProgressBarSvg /> */}
       
        </div>
       
       </div>
      </div>
      
      <div className="-translate-y-2 z-10 flex items-center justify-center">
        <div className="absolute -translate-y-10 z-10">
          <EmojiButton txtSize={24} title={getEmoji(modeStatus)} active />

        </div>
        <TopCenterOutterSvg />

        <div className="absolute">
          <TopCenterInnerSvg />
        </div>

        <div className="absolute translate-y-[12px] flex flex-col items-center top-[25px]">
          <p className="uppercase text-white/50 text-[8px] -translate-y-[3px] m-0">
           MOOD DECAY IN
          </p>
          <p className="text-white text-2xl font-[600] m-0">{formatTime(timer)}</p>
          
        </div>
      </div>

      <div className="-translate-x-5 flex items-center justify-center ml-2">
       <TopRightRectSvg />
        <div className="absolute top-0 left-0">
        <div className="absolute left-[15px] top-[13px]">
        <HeaderBadge icon={"⚡"} text={"Energy"} />
        </div>
        <div className="absolute top-[29px] left-[14px]">
       {/* <EnergyProgressBar />*/}
       <div className="relative">
       <EngergyProgressbar progress={energy}/>
       <div className="bg-gray-200 absolute w-[1px] h-[7px] top-0 left-[30px]"></div>
       <div className="bg-gray-200 absolute w-[1px] h-[7px] top-0 left-[60px]"></div>
       </div>
        </div>
       
       </div>
       
      </div>
    </div>
  );
}

function EmojiButton({ title, Icon, txtSize, xl, active }) {
  return (
    <button
      className={`flex items-center justify-center relative scale-[102%]`}
    >
      <div className="relative w-[60px] h-20 flex items-center justify-center ">
        <div className={`absolute z-10`}>
          <BtnOutter />
        </div>
        <div className={`absolute `}>
          <BtnInner />
        </div>

        <div className="absolute z-10">
          <ColoredBtnBgSvg />
        </div>

        <div
          className="flex flex-col items-center justify-center z-20"
          style={{ fontSize: txtSize }}
        >
          {title}
        </div>
      </div>
    </button>
  );
}
const formatTime = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};
function getEmoji(mood) {
  switch (mood) {
    case 'HAPPY':
      return '😊'; // Happy emoji
    case 'SAD':
      return '😔'; // Sad emoji
    default:
      return '🙂'; // Normal emoji
  }
}