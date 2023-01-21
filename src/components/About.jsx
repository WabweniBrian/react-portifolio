import React from "react";
import { dummyData } from "../data/data";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="flex flex-wrap items-center text-center sm:text-left">
        <div className="image flex-1 basis-[18rem]">
          <img src="./images/about-banner.png" alt="" className="w-full" />
        </div>
        <div className="content flex-1 basis-[20rem] flex flex-col md:flex-row items-center md:items-start">
          <div className="heading md:rotate-90 md:h-[fit-content] md:w-1/5 mt-12">
            <h1 className="text-sm text-center uppercase opacity-70">
              about me
            </h1>
          </div>
          <div className="info md:w-4/5">
            <h1 className="text-2xl font-bold capitalize">
              need a creative product? <br /> i can help you
            </h1>
            <p className="my-3 text-sm opacity-80">{dummyData.text}</p>
            <p className="my-3 text-sm opacity-80">
              {dummyData.text.slice(0, 150)}
            </p>

            <div className="btns">
              <button className="border btn bg-primary text-lightColor border-primary">
                hire me
              </button>
              <button className="btn border border-primary text-primary ml-2 !px-4">
                download cv
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
