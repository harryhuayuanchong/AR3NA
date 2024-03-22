import React, { useState } from "react";
import { Link } from "react-router-dom";

const FansCard = ({ imageUrl, title, date, location, link, participants }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyles = isHovered ? 'text-or' : 'text-white';
  
  return (
    <Link to={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="flex bg-black rounded-3xl overflow-hidden shadow-xl">
        <div className="w-1/2">
          <img className="object-cover h-full" src={imageUrl} alt="Event"/>
        </div>

        {/* Text container */}
        <div className="w-1/2 flex flex-col justify-between p-10 bg-darkred text-white rounded-r-2xl">
          <div className="grid justify-between items-start">
            <div className="text-xs bg-red-800 px-3 py-1 rounded-full w-[fit-content]">{participants} participants</div>
            <h3 className={`text-3xl font-bold leading-tight mt-[revert] ${hoverStyles}`}>{title}</h3>
            <p className="text-gray-400 text-base mt-[10px]">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
  
export default FansCard;
