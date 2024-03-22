import React from "react";
import styles from "../style";
import { one, two, three } from "../assets";
import { FansCard } from "../components";

const events = [
  {
    id: 1,
    imageUrl: one,
    title: '2024 IU H.E.R World Tour',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei',
    participants: "1.06M"
  },
  {
    id: 2,
    imageUrl: two,
    title: 'Trending Event 2',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei',
    participants: "1.0M"
  },
  {
    id: 3,
    imageUrl: one,
    title: 'Trending Event 3',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei',
    participants: "1.9M"
  },
  {
    id: 4,
    imageUrl: two,
    title: 'Trending Event 4',
    date: '2024/04/07 (Sun)',
    location: 'Taiwan, Taipei'
  },
];

const FansMission = () => {
  return (
    <div className={`bg-black ${styles.flexStart} ${styles.padding}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="bg-black p-8 rounded-md">
            <h1 className="text-3xl font-bold mb-6 text-white">Fans Mission</h1>
            <p className="mb-8 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            <div className="justify-between items-center block mt-8">
                <div className="flex">
                    <button className="text-white mr-10">Trending Events ▼</button>
                    <button className="text-white mr-10">By Date ▼</button>
                    <button className="text-white">By Location ▼</button>
                    <span
                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 ml-auto"
                        id="basic-addon2"
                    >
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
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col mt-2 pt-6 border-t-[2px] border-t-[#ffffff]"></div>
            <div className="flex flex-wrap -mx-2">
                {events.map((event) => (
                  <div className="p-2 md:w-1/2 xl:w-1/4 my-[30px]" key={event.id}> {/* This wrapper controls the width */}
                    <FansCard {...event} />
                  </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default FansMission;
