/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { portifolio } from "../data/data";

const Portifolio = () => {
  return (
    <section className="pt-12 pb-4" id="portifolio">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="heading md:before:ml-0 md:before:top-1/2 md:before:w-1/2  md:rotate-90 md:h-[fit-content] md:w-1/12 mt-12">
          <h1 className="text-sm text-center uppercase opacity-70">my works</h1>
        </div>
        <div className="w-4/5">
          <h1 className="text-2xl font-bold capitalize">
            see my
            <br /> works whick will <br />
            amaze you
          </h1>
          <p className="my-2 text-sm text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime
            nostrum at labore, nobis dicta esse facere ullam pariatur corrupti
            nemo quo non veritatis suscipit.
          </p>
        </div>
      </div>

      <div className="flex-wrap gap-4 pb-6 flex-center-center">
        {portifolio.map((image) => {
          return (
            <div className="flex-1 basis-[16rem] ">
              <img
                src={image}
                alt=""
                className="w-full h-[300px] object-cover mt-3 rounded-lg"
              />
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <a href="#" className="underline !text-primary">
          load more work
        </a>
      </div>
    </section>
  );
};

export default Portifolio;
