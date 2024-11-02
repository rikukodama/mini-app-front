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

export function Header() {
  return (
    // <div className="fixed top-[200px] w-full mx-4">
    <div className="fixed left-1/2 -translate-x-1/2 top-[65px] w-full z-50 flex items-center justify-center">
      <div className="translate-x-5 flex items-center justify-center relative mr-[8px]">
        <TopLeftRectSvg />
        
       <div className="absolute top-0 left-0">
        <div className="absolute left-[37px] top-[12px]">
        <HeaderBadge icon={"😞"} text={"SAD"} />
        </div>
        <div className="absolute top-[28px] left-[13px]">
        <SadProgressbar progress={100} />
       {/* <ProgressBarSvg /> */}
       
        </div>
       
       </div>
      </div>
      
      <div className="-translate-y-2 z-10 flex items-center justify-center">
        <div className="absolute -translate-y-10 z-10">
          <EmojiButton txtSize={24} title={"😞"} active />

        </div>
        <TopCenterOutterSvg />

        <div className="absolute">
          <TopCenterInnerSvg />
        </div>

        <div className="absolute translate-y-[12px] flex flex-col items-center">
          <p className="text-white text-2xl font-[600]">01:30</p>
          <p className="uppercase text-white/50 text-[8px] -translate-y-[3px]">
            SECONDS
          </p>
        </div>
      </div>

      <div className="-translate-x-5 flex items-center justify-center ml-2">
       <TopRightRectSvg />
        <div className="absolute top-0 left-0">
        <div className="absolute left-[27px] top-[13px]">
        <HeaderBadge icon={"⚡"} text={"Energy"} />
        </div>
        <div className="absolute top-[21px] left-[8px]">
       <EnergyProgressBar />
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
