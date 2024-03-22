import React from "react";
import styles from "../style";
import { Footer, Navbar, Hero } from "../components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllEvents from "../pages/AllEvents"
import CreateEvent from "../pages/CreateEvent";
import FansMission from "../pages/FansMission";
import EventDetailPage from "../pages/EventDetailPage";

const App = () => (
  <Router>
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        <div className="flex">
          <ConnectButton
            label="Connect" 
            showBalance={false}
            chainStatus="icon"
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#ffffff]"></div>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/fans-mission" element={<FansMission />} />
        <Route path="/event/:id" element={<EventDetailPage />}></Route>
      </Routes>

      <div className="w-full flex justify-between items-center md:flex-row flex-col border-t-[2px] border-t-[#ffffff]"></div>
      
      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
