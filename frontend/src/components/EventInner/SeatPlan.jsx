import React from "react";
import { seatplan } from "../../assets";

const SeatPlan = () => {
    return (
        <div className="bg-black max-w-4xl mx-auto my-8 rounded shadow-lg text-white">
            <img src={seatplan} alt="Image" className="block mx-auto" />
        </div>
    )
}

export default SeatPlan;