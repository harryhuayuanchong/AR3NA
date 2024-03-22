import React from "react";
import { Link } from "react-router-dom";

const FansCard = ({ imageUrl, title, date, location, link, participants }) => {
    return (
      <Link to={link}>
        {/* Image container */}
        <div className="flex bg-black rounded-3xl overflow-hidden shadow-xl">
          <div className="w-1/4">
            <img className="object-cover h-full" src={imageUrl} alt="Event"/>
          </div>

          {/* Text container */}
          <div className="w-1/4 flex flex-col justify-between p-6 bg-gray-600 text-white rounded-r-2xl">
            {/* <div className="my-2 text-white">{participants}</div> */}
            <div className="flex justify-between items-start">
              <div className="text-xs bg-red-800 px-3 py-1 rounded-full">{participants} participants</div>
            </div>
            <div>
              <h3 className="text-3xl font-bold leading-tight">{title}</h3>
              <p className="text-gray-400 text-base">{date} | {location}</p>
            </div>
          </div>
        </div>
      </Link>
    );
};
  
export default FansCard;
  


// import React from "react";
// import styles from "../style";

// const FansCard = ({ imageUrl, title, date, location }) => {
//   return (
//     <div className={`bg-black min-h-screen ${styles.flexStart} ${styles.padding}`}>
//       <div className={`${styles.boxWidth}`}>
//         <div className="bg-black p-8 rounded-md">
//           <img className="w-full" src={imageUrl} alt="Event"/>
//         </div>
//         <div className="bg-black p-8 rounded-md">
//           <h1 className="text-3xl font-bold mb-6 text-white">{title}</h1>
//           <p className="mb-8 text-gray-400">{date}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FansCard;
