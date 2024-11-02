import { BtnInnerBody } from "../../assets/svgs/BtnInnerBody";
import { BtnOutterXl } from "../../assets/svgs/BtnOutterXl";

export function MainBtns({ title, Icon, value }) {
  return (
    <button className={`flex items-center justify-center relative`}>
      <div className="relative w-[60px] h-20 flex items-center justify-center ">
        <div className={`absolute scale-125`}>
          <BtnOutterXl />
        </div>
        <div className={`absolute scale-125`}>
          <BtnInnerBody />
        </div>

        <div className="flex flex-col items-center z-20 justify-between h-[68%] w-full">
          <p
            className={`text-[6px] font-[600] text-white opacity-50 uppercase`}
          >
            {title}
          </p>
          <div className="absolute top-[48%] -translate-y-1/2">
            {Icon && <Icon />}
          </div>
          <p
            className={`text-[10px] font-[600] text-white bottom-[19px] uppercase`}
          >
            {value}
          </p>
        </div>
      </div>
    </button>
  );
}
