import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ imageUrl, title, date, location, link }) => {
    return (
      <Link to={link}>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-3xl">
            <div>
              <img className="w-[450px] h-[360px]" src={imageUrl} alt="Event"/>
            </div>
          </div>
          <div className="text-center py-8">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-400 text-base">
              {date} | {location}
            </p>
          </div>
      </Link>
    );
};
  
export default EventCard;
  