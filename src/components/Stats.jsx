import React from "react";
import { stats } from "../data/data";

const Stats = () => {
  return (
    <section className="pb-12 other">
      <div className="flex-wrap gap-4 cards flex-center-center">
        {stats.map((stat) => {
          const { id, title, image, number } = stat;
          return (
            <div
              className="gap-4 p-2 bg-white rounded-lg card dark:bg-lightColorDark flex-center-center shadow-light"
              key={id}
            >
              <img src={image} alt={title} width="30" />
              <div className="text-center">
                <h1 className="text-2xl font-extrabold text-primary">
                  {number}+
                </h1>
                <p className="text-[12px] opacity-80 capitalize">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
