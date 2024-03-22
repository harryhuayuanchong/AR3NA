import React, { useState } from "react";
import styles from "../style";
import Carousels2 from "./Carousels";
import { Banner1 } from "../assets";
import { Artboard1, Artboard2, Artboard3 } from "../assets";

const slides = [
  {
    id: 1,
    imageUrl: Artboard1,
  },
  {
    id: 2,
    imageUrl: Artboard2,
  },
  {
    id: 3,
    imageUrl: Artboard3,
  },
]

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div>
          <Carousels2 slides={slides} />
        </div>
        
        <div className="relative w-full h-96 bg-black text-white">
          <img src={Banner1} alt="Concert" className="absolute inset-0 w-full h-full object-cover" />

          <div className="absolute inset-0 flex flex-col justify-center items-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold mb-2">Create Your Own Event</h1>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna aliqua.</p>
              <p className="text-xl">Taiwan, Taipei Arena</p>
            </div>
            <div className="text-center">
              <p>Additional information here</p>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  );
};

export default Hero;
