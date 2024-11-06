import { LeftSubtractSvg } from "../../assets/svgs/SettingsSvg/LeftSubtractSvg";
import { RightSubtractSvg } from "../../assets/svgs/SettingsSvg/RightSubtractSvg";
import { SettingsSvg } from "../../assets/svgs/SettingsSvg/SettingsSvg";
import { TopOutterRectSvg } from "../../assets/svgs/SettingsSvg/TopOutterRectSvg";
import { TopRectSvg } from "../../assets/svgs/SettingsSvg/TopRectSvg";

export function Settings({jooy,vibe}) {
  return (
    <div className="relative">
      <div className="absolute left-[59%]">
      <div className="relative w-[50px] h-[50px]">
        <div className="absolute inset-0 bg-yellow-300 opacity-50 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute inset-0 bg-yellow-200 opacity-30 rounded-full blur-2xl animate-pulse delay-150"></div>
      </div>
      </div>
      
      <div className="absolute left-[15%] top-[20px]">
      <div className="relative w-[70px] h-[70px]">
        <div className="absolute inset-0 bg-red-600 opacity-70 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute inset-0 bg-red-600 opacity-70 rounded-full blur-2xl animate-pulse delay-150"></div>
      </div>
      </div>
    <div className="fixed left-1/2 -translate-x-1/2 top-0 w-full md:w-[400px] z-50 h-[74px]">
      <div className="flex absolute z-10 h-full w-full justify-between px-4">
        <div className="flex gap-[6px] items-center">
          <img
            className="w-[46px] h-[46px] z-10"
            src="prof-img.png"
            alt="profile"
          />

          <div className="relative">
           <div className="absolute text-center top-[5px] left-[10px] w-[50px] ">
           <ul className="list-none">
              <li className="text-[8px] text-gray-300 leading-none">JOOY</li>
              <li className="text-[18px] font-semibold text-white leading-none">{convertToK(jooy)}</li>
            </ul>
           </div>
            <LeftSubtractSvg />
          </div>
        </div>
        <div className="flex gap-[6px] items-center relative">
          <div className="w-[5px]">
          
          </div>
         <div className="absolute left-[0px]">
         <img
            className="w-[20px] h-[20px] z-10"
            src="pngs/coin.png"
            alt="profile"
          />
         </div>
          <div className="relative">
          <div className="absolute text-center top-[5px] left-[10px] w-[55px]">
           <ul className="list-none">
              <li className="text-[8px] text-gray-300 leading-none">VIBE</li>
              <li className="text-[18px] font-semibold text-white leading-none">{convertToK(vibe)}</li>
            </ul>
           </div>
            <RightSubtractSvg />
          </div>

          <button className="">
            <SettingsSvg />
          </button>
        </div>
      </div>

      <div className="absolute w-full">
        <TopOutterRectSvg />
      </div>

      <div className="absolute w-full">
        <TopRectSvg />
      </div>
    </div>
    </div>

  );
}

const convertToK = (num) => {
  if (num < 1000) {
    return num.toString().padStart(4, '0'); // Pad numbers less than 1000 to 5 digits
  } else if (num >= 1000 && num < 10000) {
    return num.toString(); // Show as-is for numbers between 1000 and 9999
  } else {
    return Math.floor(num / 1000) + 'k'; // Convert to k format for numbers 10,000 and above
  }
};