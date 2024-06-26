import React, { useState } from "react";

import { close, AR3NA, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="mr-5">
      <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={AR3NA} alt="" className="w-[124px] h-[40px] ml-[40px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => 
          nav.title.toLowerCase() !== "home" && (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-hover ${
                active === nav.title ? "text-orange-500" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.link}>{nav.title}</Link>
            </li>
          ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-10 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => 
              nav.title.toLowerCase() !== "home" &&(
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;
