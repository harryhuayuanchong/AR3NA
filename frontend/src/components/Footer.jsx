import React from "react";
import styles from "../style";
import { logo2 } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#ffffff]"></div> */}
    <div className="w-full flex flex-col items-center mb-8">
      {/* Logo and description */}
      {/* <img src={logo2} alt="AR3NA" className="w-[266px] h-[72.14px] object-contain mb-4" /> */}
      <img src={logo2} alt="AR3NA" className="mt-4 mb-8 object-contain" />
      <div className="flex flex-wrap justify-center items-center gap-5 mb-5">
        {/* Navigation Links - Assuming 'footerLinks' has a nested 'links' array */}
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="text-center">
            {footerlink.links.map((link, index) => (
              <React.Fragment key={link.name}>
                <span
                  className="font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer"
                >
                  {link.name}
                </span>
                {/* Add separator if not last item */}
                {index !== footerlink.links.length - 1 && (
                  <span className="text-white mx-2">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>

    {/* Copyright Text */}
    <div className="w-full flex justify-center items-center">
      <p className="mt-8 font-poppins font-normal text-[14px] leading-[27px] text-white">
        © 2024 AR3NA. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
