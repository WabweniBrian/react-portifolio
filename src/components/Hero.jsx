/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaMouse } from "react-icons/fa";
import { socialIcons } from "../data/data";

const Hero = () => {
  return (
    <section
      className="home !px-[4%] min-h-screen flex justify-between items-center bg-imageSm bg-contain bg-no-repeat bg-center md:bg-imageMd lg:bg-imageLg"
      id="home"
    >
      <div className="self-end mb-40 opacity-50 icons">
        {socialIcons.map((icon) => (
          <a href="#" className="block mt-2">
            {icon}
          </a>
        ))}
      </div>
      <div className="text-center cta">
        <h1 className="text-4xl font-extrabold capitalize text-lightColor text-shadow">
          hi, am brian <br /> a web developer
        </h1>
        <button className="my-4 text-white border rounded btn border-primary">
          get in touch
        </button>
      </div>
      <div
        className="self-end mb-40 scroll-text rotate sm:cursor-pointer"
        onClick={() => window.scrollTo(0, window.innerHeight)}
      >
        <div className="gap-2 flex-align-center">
          <FaMouse className="opacity-50 text-textColor dark:text-textColorDark scroll-icon" />
          <p className="heading after:hidden">scroll</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
