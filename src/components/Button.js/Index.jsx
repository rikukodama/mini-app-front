import { BtnEffectSvg } from "../../assets/svgs/BtnEffectSvg";
import { BtnInner } from "../../assets/svgs/BtnInner";
import { BtnInnerXl } from "../../assets/svgs/BtnInnerXl";
import { BtnOutter } from "../../assets/svgs/BtnOutter";
import { BtnOutterXl } from "../../assets/svgs/BtnOutterXl";

export function Button({ title, Icon, txtSize, xl, active }) {
  return (
    <button className={`flex items-center justify-center relative sca`}>
      {active && (
        <span className="absolute w-[42px] h-[74px] bg-[#35FFFC] z-0 rounded-full blur-[30px]"></span>
      )}
      <div className="relative w-[60px] h-20 flex items-center justify-center ">
        <div className={`absolute ${xl && "scale-[120%]"}`}>
          {xl ? <BtnOutterXl /> : <BtnOutter />}
        </div>
        <div className={`absolute ${xl && "scale-[120%]"}`}>
          {xl ? <BtnInnerXl /> : <BtnInner />}
        </div>

        {active && (
          <div className="absolute rotate-1">
            <BtnEffectSvg />
          </div>
        )}

        <div className="flex flex-col items-center justify-center z-20">
          <div className="absolute top-[21px]">{Icon && <Icon />}</div>
          <p
            className={`${xl && "translate-y-1"} ${
              active ? "text-[#35FFFC]" : "text-[#868387]"
            } text-[6px] font-[600] absolute bottom-[19px]`}
            style={{ fontSize: txtSize }}
          >
            {title}
          </p>
        </div>
      </div>
    </button>
  );
}
