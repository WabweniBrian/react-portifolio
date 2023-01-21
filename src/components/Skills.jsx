import React from "react";
import { useState } from "react";
import { dummyData, skills, skillsTabButtons } from "../data/data";

const Skills = () => {
  const [index, setIndex] = useState(0);

  const { images } = skills[index];
  return (
    <section className="pt-12 pb-12 skills" id="skills">
      <div className="flex-wrap gap-4 text-center flex-center-center sm:text-left">
        <div className="content flex-1 basis-[20rem] flex flex-col md:flex-row items-center md:items-start">
          <div className="heading md:rotate-90 md:h-[fit-content] md:w-1/5 mt-12">
            <h1 className="text-sm text-center uppercase opacity-70">
              my skills
            </h1>
          </div>
          <div className="w-4/5 info">
            <h1 className="text-2xl font-bold capitalize">
              what my <br /> programming <br />
              skills include{" "}
            </h1>
            <p className="my-3 text-sm opacity-80">{dummyData.text}</p>

            <div className="flex gap-2 px-4 py-1 mx-auto bg-white rounded-full sm:cursor-pointer tab-btns shadow-light w-36 dark:bg-lightColorDark">
              {skillsTabButtons.map((btnText, btnIndex) => (
                <div
                  className={`px-3 py-1 text-sm capitalize rounded-full ${
                    btnIndex === index && "active"
                  }`}
                  onClick={() => setIndex(btnIndex)}
                  key={btnIndex}
                >
                  {btnText}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 basis-[16rem]">
          <div className="flex-wrap gap-4 cursor-pointer flex-center-center">
            {images.map((image, skillIndex) => {
              return (
                <img
                  src={image}
                  alt=""
                  className="p-2 bg-white rounded-lg shadow-xl dark:bg-lightColorDark"
                  key={skillIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
