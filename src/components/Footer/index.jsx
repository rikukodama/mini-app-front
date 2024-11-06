import { AwardSvg } from "../../assets/svgs/AwardSvg.jsx";
import { FooterRectSvg } from "../../assets/svgs/FooterRectSvg.jsx";
import { HomeSvg } from "../../assets/svgs/HomeSvg.jsx";
import { NotificationSvg } from "../../assets/svgs/NotificationSvg.jsx";
import { RankSvg } from "../../assets/svgs/RankSvg.jsx";
import { ShopSvg } from "../../assets/svgs/ShopSVg.jsx";
import { SubtractSvg } from "../../assets/svgs/SubtractSvg.jsx";
import { Button } from "../Button.js/Index.jsx";

export function Footer() {
  return (
    <div className="flex items-center justify-center">
      
      <div className="absolute w-full md:w-[400px]">
        <SubtractSvg />
      </div>

      <div className="absolute -bottom-2 z-0 w-full md:w-[400px]">
        <FooterRectSvg />
      </div>

      <div className="w-full flex items-center justify-center gap-[10px] translate-y-1.5">
        <div>
          <Button Icon={HomeSvg} title={"HOME"} active />
        </div>

        <div className="-translate-y-[5px]">
          <Button Icon={AwardSvg} title={"TASKS"} />
        </div>

        <div className="-translate-y-[26px] -translate-x-[1px] mx-3">
          <Button Icon={ShopSvg} title={"SHOP"} txtSize={10} xl />
        </div>

        <div className="-translate-y-[5px]">
          <Button Icon={RankSvg} title={"BOARD"} />
        </div>

        <div>
          <Button Icon={NotificationSvg} title={"POWER UPS"} />
        </div>
      </div>
    </div>
  );
}
