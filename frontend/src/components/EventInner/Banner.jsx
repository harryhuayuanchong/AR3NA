import React from "react";
import { InnerBanner } from "../../assets";

const Banner = () => {
  return (
    <div className="relative">
      <img src={InnerBanner} alt="Concert" className="w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div>

        </div>
        <div className="text-left ml-auto w-[590px]">
          <h1 className="text-6xl font-bold text-white mb-4 font-anton leading-snug">2024 IU H.E.R. WORLD TOUR CONCERT IN TAIPEI</h1>
          <p className="text-lg text-white mb-2 font-montserrat leading-relaxed">2024/04/07 (Sun.) | 19:00 (+0800)</p>
          <p className="text-lg text-white font-montserrat leading-relaxed">Taiwan, Taipei Arena</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
