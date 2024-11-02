import { MainBtns } from "../MainBtn";
import { HeartsSvg } from "../../assets/svgs/HeartsSvg";
import { MilkSvg } from "../../assets/svgs/MilkSvg";
import { StarSvg } from "../../assets/svgs/StarSvg";
import { ArrowSvg } from "../../assets/svgs/ArrowSvg";
import { CharacterAnimation } from "../CharacterAnimation";

export function Body({ updateValues,jooy,vibe }) {

  return (
    <div className="h-full relative bg-[url('/bg/back2.webp')] bg-cover bg-center">
      <div className="h-full w-full fixed top-0 left-0"></div>

      <div className="fixed w-[400px] h-[65%] left-1/2 -translate-x-1/2 bottom-32">
        <CharacterAnimation updateValues={updateValues} jooy={jooy} vibe={vibe}/>
      </div>

      <div className="fixed bottom-60 px-4 flex w-full justify-between">
        <MainBtns title={"LIFE"} Icon={HeartsSvg} value={"3/3"} />
        <MainBtns title={"STAMINA"} Icon={MilkSvg} value={"30/40"} />
      </div>

      <div className="fixed bottom-[150px] px-9 flex w-full justify-between">
        <MainBtns title={"Bonus"} Icon={StarSvg} value={"Lorem"} />
        <MainBtns title={"Boost"} Icon={ArrowSvg} value={"Lorem"} />
      </div>
    </div>
  );
}
