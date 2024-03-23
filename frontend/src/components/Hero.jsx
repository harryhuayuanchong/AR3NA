import React, { useState } from "react";
import styles from "../style";
// import Carousels2 from "./Carousels2";
import { Banner1 } from "../assets";
import { Artboard1, Artboard2, Artboard3 } from "../assets";
import Trending from "./Home/Trending";
import ComingSoon from "./Home/ComingSoon";

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

const tabsData = [
  { name: 'Trending Events', component: <Trending /> },
  { name: 'Coming Soon', component: <ComingSoon /> }
]

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Trending Events');

  const renderTabContent = () => {
    const activeTabData = tabsData.find(tab => tab.name === activeTab);
    return activeTabData ? activeTabData.component : null;
  };

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY2}`}>
      <div>
        <div>
          {/* <Carousels2 slides={slides} /> */}
        </div>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="text-white">
            <ul className="flex justify-start list-none px-[12px]">
              {tabsData.map(tab => (
                <li key={tab.name} className={`mr-[50px] last:mr-0 ${activeTab === tab.name ? "border-b-4 border-orange-500" : ""}`}>
                  <button
                    className={`pb-2 ${activeTab === tab.name ? "text-click" : "hover:text-hover hover:border-hover border-b-2 border-transparent"}`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="w-full flex justify-between items-center md:flex-row flex-col border-t-[2px] border-t-[#ffffff] -mt-[3px]"></div>
            
            <div className="tab-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
        
        <div className="relative w-full h-96 bg-black text-white">
          <img src={Banner1} alt="Concert" className="absolute inset-0 w-full h-full object-cover" />

          <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold mb-2">Create Your Own Event</h1>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna aliqua.</p>
            </div>
            <div className="text-center">
              {/* <p>Additional information here</p> */}
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Hero;
