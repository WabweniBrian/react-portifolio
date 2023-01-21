/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { FiSun, FiMoon, FiChevronDown } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { navbarLinks } from "../data/data";

const Navbar = ({ darkMode, setLight, setDark, slideNavbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar px-[3%]  py-[0.6rem] fixed w-full top-0 left-0 z-50 md:px-[9%] md:!py-[0.2rem]  dark:bg-mainBgDark ${
        slideNavbar && "scrolled"
      }`}
    >
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="navbar-brand text-xl font-[800] hover:!text-primary transition-all duration-300"
        >
          Brian<span className="!text-primary">.</span>
        </a>
        <div className="flex items-center space-x-4 left-nav md:order-2">
          <div className="relative cursor-pointer dropdown group">
            <div className="gap-2 flex-align-center">
              <span>En</span>
              <FiChevronDown />
            </div>

            <ul className="absolute z-30 hidden w-32 -mr-10 overflow-hidden border rounded-lg shadow-light bg-lightColor dark:bg-mainBgDark dark:border-gray-800 right-full group-hover:block">
              <li className="px-4 py-1 hover:bg-gray-200 dark:hover:bg-lightColorDark">
                Fr
              </li>
              <li className="px-4 py-1 hover:bg-gray-200 dark:hover:bg-lightColorDark">
                Gm
              </li>
              <li className="px-4 py-1 hover:bg-gray-200 dark:hover:bg-lightColorDark">
                Lg
              </li>
            </ul>
          </div>
          <div className="px-2 py-1 rounded-full shadow-inner cursor-pointer flex-align-center shadow-gray-500">
            <div
              className={`px-4 py-1 rounded-full shadow-light ${
                !darkMode && "active"
              }`}
              onClick={setLight}
            >
              <FiSun />
            </div>
            <div
              className={`px-4 py-1 rounded-full shadow-light ${
                darkMode && "active"
              }`}
              onClick={setDark}
            >
              <FiMoon />
            </div>
          </div>
          {/* Toggle Button */}
          <button
            className="p-2 rounded-lg toggle cursor-none sm:cursor-pointer feather-menu hover:bg-gray-100 dark:hover:bg-lightColorDark md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Primary Menu */}
        <ul className="hidden space-x-10 md:flex">
          {navbarLinks.map((link) => (
            <li className="capitalize nav-link" key={link.id}>
              <a href={`#${link.name}`}>{link.name}.</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`absolute left-0 flex flex-col w-full p-0 overflow-hidden transition-all duration-300 mobile-menu md:hidden top-full bg-lightColor dark:bg-lightColorDark max-h-0 shadow-light showMenu:border-top-light ${
            isMenuOpen && "showMenu"
          }`}
        >
          {navbarLinks.map((link) => (
            <li className="capitalize nav-link" key={link.id}>
              <a href={`#${link.name}`}>{link.name}.</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
