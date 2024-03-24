// import React, { useState } from "react";
// import styles from "../style";
// import { useParams } from "react-router-dom";
// import { Banner, Info, SeatPlan, Ticket } from "../components/EventInner";

// const tabsData = [
//   { name: 'Informations', component: <Info /> },
//   { name: 'Seat Plan', component: <SeatPlan /> },
//   { name: 'Event Tickets', component: <Ticket eventId={eventId}/> },
// ];

// const EventDetailPage = () => {
//   const [activeTab, setActiveTab] = useState('Informations');
//   const { id } = useParams();

//   const renderTabContent = () => {
//     const tabsData = getTabsData(id); 
//     const activeTabData = tabsData.find(tab => tab.name === activeTab);
//     return activeTabData ? activeTabData.component : null;
//   };

//   const getTabsData = (eventId) => [
//     { name: 'Informations', component: <Info /> },
//     { name: 'Seat Plan', component: <SeatPlan /> },
//     { name: 'Event Tickets', component: <Ticket eventId={eventId} /> },
//   ];

//   return (
//     <div className={`bg-black ${styles.flexStart} ${styles.padding}`}>
//       <div className={`${styles.boxWidth}`}>
//         <div>
//           <Banner />
//         </div>

//         <div className="text-white">
//           <ul className="flex justify-start list-none px-[12px]">
//             {tabsData.map(tab => (
//               <li key={tab.name} className={`mr-[50px] last:mr-0 ${activeTab === tab.name ? "border-b-4 border-orange-500" : ""}`}>
//                 <button
//                   className={`pb-2 ${activeTab === tab.name ? "text-click" : "hover:text-hover hover:border-hover border-b-2 border-transparent"}`}
//                   onClick={() => setActiveTab(tab.name)}
//                 >
//                   {tab.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="w-full flex justify-between items-center md:flex-row flex-col border-t-[2px] border-t-[#ffffff] -mt-[3px]"></div>
//           <div className="tab-content">
//             {renderTabContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetailPage;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import { Banner, Info, SeatPlan, Ticket } from "../components/EventInner";

const EventDetailPage = () => {
  const [activeTab, setActiveTab] = useState('Informations');
  const { id } = useParams();

  const getTabsData = (eventId) => [
    { name: 'Informations', component: <Info /> },
    { name: 'Seat Plan', component: <SeatPlan /> },
    { name: 'Event Tickets', component: <Ticket eventId={eventId} /> },
  ];

  const renderTabContent = () => {
    const tabsData = getTabsData(id);
    const activeTabData = tabsData.find(tab => tab.name === activeTab);
    return activeTabData ? activeTabData.component : null;
  };

  return (
    <div className={`bg-black ${styles.flexStart} ${styles.padding}`}>
      <div className={`${styles.boxWidth}`}>
        <div>
          <Banner />
        </div>

        <div className="text-white">
          <ul className="flex justify-start list-none px-[12px]">
            {getTabsData(id).map(tab => (
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
    </div>
  );
};

export default EventDetailPage;
