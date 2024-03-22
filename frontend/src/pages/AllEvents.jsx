import React from "react";
import styles from "../style";
import { EventCard } from "../components";
import { one, two, three } from "../assets";

const events = [
  {
    id: 1,
    imageUrl: one,
    title: 'Trending Event 1',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei',
    link: '/event/1'
  },
  {
    id: 2,
    imageUrl: two,
    title: 'Trending Event 2',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei',
    link: '/event/2'
  },
  {
    id: 3,
    imageUrl: one,
    title: 'Trending Event 3',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei',
    link: '/event/3'
  },
  {
    id: 4,
    imageUrl: two,
    title: 'Trending Event 4',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei',
    link: '/event/4'
  },
];

const AllEvents = () => {
  return (
    <div className={`bg-black text-white ${styles.flexStart} ${styles.padding}`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-4xl font-bold">All Events</h1>
        
        <div className="justify-between items-center block mb-8 mt-8">
            <div className="flex">
                <button className="text-white mr-10">Trending Events ▼</button>
                <button className="text-white mr-10">By Date ▼</button>
                <button className="text-white">By Location ▼</button>
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 ml-auto"
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
                </span>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col mt-4 pt-6 border-t-[2px] border-t-[#ffffff]"></div>
        </div>
        <div className="flex flex-wrap gap-16 items-center">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;