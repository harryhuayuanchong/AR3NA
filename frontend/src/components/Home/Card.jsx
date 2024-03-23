import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, title, date, location, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyles = isHovered ? 'text-hover' : 'text-white';

  return (
    <Link to={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="max-w-sm overflow-hidden shadow-lg rounded-3xl">
          <div>
            <img className="w-[285px] h-[335px]" src={imageUrl} alt="Event"/>
          </div>
        </div>
        <div className="text-center py-8">
          <div className={`font-bold text-xl mb-2 ${hoverStyles}`}>{title}</div>
          <p className="text-gray-400 text-base">
            {date} | {location}
          </p>
        </div>
    </Link>
  );
};
  
export default Card;
  