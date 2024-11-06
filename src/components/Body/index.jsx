import { MainBtns } from "../MainBtn";
import { HeartsSvg } from "../../assets/svgs/HeartsSvg";
import { MilkSvg } from "../../assets/svgs/MilkSvg";
import { StarSvg } from "../../assets/svgs/StarSvg";
import { ArrowSvg } from "../../assets/svgs/ArrowSvg";
import { CharacterAnimation } from "../CharacterAnimation";
import {Ellips} from '../../assets/svgs/Ellips'


export function Body({ updateValues,updateOnlyTime,updateInactive,jooy,vibe,sadBarPercent,energyPercent,time,modeStatus}) {

  return (
<div className="h-full relative bg-[url('/bg/back2.webp')] bg-cover bg-center md:w-[400px]">
      <div className="h-full w-full  fixed top-0 left-0"></div>

      <div className="fixed w-[400px] h-[65%] left-1/2 -translate-x-1/2 bottom-32">
        <CharacterAnimation updateValues={updateValues} updateOnlyTime={updateOnlyTime} updateInactive={updateInactive} jooy={jooy} vibe={vibe} sadBarPercent={sadBarPercent} energyPercent={energyPercent} timer={time} modeStatus={modeStatus}/>
      </div>

      <div className="flex justify-center">
      <div className="fixed bottom-60 px-4 flex w-full md:w-[400px] justify-between">
        <MainBtns title={"LIFE"} Icon={HeartsSvg} value={"3/3"} />
        <MainBtns title={"STAMINA"} Icon={MilkSvg} value={"30/40"} />
      </div>
      </div>

      <div className="flex justify-center">
      <div className="fixed bottom-[150px] px-9 flex w-full md:w-[400px] justify-between">
        <MainBtns title={"Bonus"} Icon={StarSvg} value={"Lorem"} />
        <MainBtns title={"Boost"} Icon={ArrowSvg} value={"Lorem"} />
      </div>
      </div>

      <div className="absolute bottom-[12%] left-[13%]">
        <Ellips/>
      </div>
    </div>
  );
}
