import React, { useState } from "react";
import styles from "../style";
// import Carousels from "./Carousels";
import { banner } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}></div>
      <div className="relative w-full h-96 bg-black text-white">
        {/* 背景图片 */}
        <img src={banner} alt="Concert" className="absolute inset-0 w-full h-full object-cover opacity-50" />

        {/* 文本内容层 */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          {/* 第一层文本 */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold mb-2">Create Your Own Event</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna aliqua.</p>
            <p className="text-xl">Taiwan, Taipei Arena</p>
          </div>
          {/* 第二层文本，根据需要启用 */}
          <div className="text-center">
            <p>Additional information here</p>
          </div>
        </div>

        {/* 第三层文本，例如赞助商标志等，根据需要启用 */}
        {/* <div className="absolute bottom-0 left-0 p-4">
          <p>Sponsored by EDAM Entertainment</p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
