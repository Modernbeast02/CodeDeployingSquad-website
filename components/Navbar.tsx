import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
import Link from "next/link";
// Assuming you're using React Router for navigation
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import navlinks from "../constants/navlinks";
import { Navlink } from ".";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [dropdownWidth, setDropdownWidth] = useState("w-170");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      viewport={{ once: true }}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 flex justify-center items-center" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain "
        />
        <h2 className="font-bold sm:text-[20px] text-[18px] leading-[30.24px] text-white">
          Code Deploying Squad
        </h2>
        <div className="relative">
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div
              className={`absolute top-full pb-5 bg-black  rounded shadow-lg z-40 w-[200px]  -ml-[180px]`}
            >
              <ul className=" px-2">
                {
                  navlinks.map(e => {
                    return (
                      <Navlink key={e.tag} label={e.label} tag={e.tag} />
                    )
                  })
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
