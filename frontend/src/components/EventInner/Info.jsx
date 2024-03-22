import React from "react";

const Info = () => {
  return (
    <div className="bg-black max-w-4xl mx-auto my-8 rounded shadow-lg text-white">
      <h2 className="text-lg font-bold mb-4">
        The long-awaited IU finally came to Taipei after 4 years!
      </h2>
      <p className="text-sm mb-8">
        IU fills your heart with sweet singing and music. Mark the date on your calendar for our meeting right now.
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Program Information</h3>
        <p className="font-semibold">[2024 IU HER WORLD TOUR CONCERT IN TAIPEI]</p>
        <p className="my-1">- Starting date and time | April 6, 2024 (Saturday) 7PM</p>
        <p className="my-1">- Performance Venue | Taipei Arena (No. 2, Section 4, Nanjing East Road, Songshan District, Taipei City)</p>
        <p className="my-1">- Ticket price | NT$ 6,800 / 5,800 / 3,800 / 3,200 / 800</p>
        <p className="my-1">- Sales start time | March 6th at 1:00 pm</p>
        <p className="my-1">- Ticket purchasing platform | KKTIX</p>
        <p className="my-1">- Host and produced | Kaunyan International, ELF ASIA, Super Dome, EDAM Entertainment, KONG YEON TEAM</p>
      </div>

      <p className="text-red-600 font-bold">
        For safety reasons, the audience is kindly requested to abide by the rules of the Arena during the event. Audiences on the 2nd and 3rd floors are not allowed to stand and stamp their feet, and they should wave or applaud instead of jumping.
      </p>
    </div>
  );
}

export default Info;
