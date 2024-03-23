import React from "react";
import { InnerBanner } from "../../assets";

const Banner = () => {
  return (
    <div className="relative">
      <img src={InnerBanner} alt="Concert" className="w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white mb-4 font-anton">2024 IU H.E.R. WORLD TOUR CONCERT IN TAIPEI</h1>
        <p className="text-lg text-white mb-2 font-montserrat">2024/04/07 (Sun.) | 19:00 (+0800)</p>
        <p className="text-lg text-white font-montserrat">Taiwan, Taipei Arena</p>
      </div>
    </div>
  );
};

export default Banner;
