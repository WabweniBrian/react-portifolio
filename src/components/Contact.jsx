/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { inputData, socialIcons } from "../data/data";

const Contact = () => {
  return (
    <section className="pb-4 contact" id="contact">
      <div className="flex flex-wrap gap-4 sm:text-left">
        <div className="info flex-1 basis-[18rem]">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="heading md:rotate-90 md:h-[fit-content] md:w-1/5 mt-12">
              <h1 className="text-sm text-center uppercase opacity-70">
                my works
              </h1>
            </div>
            <div className="w-4/5">
              <h1 className="text-2xl font-bold">
                haveyou any project? <br /> please drop a message.
              </h1>
              <p className="my-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam perspiciatis magnam blanditiis iusto dolorem soluta?
              </p>
              <div className="flex gap-3 mb-2">
                <i className="feather-map-pin"></i>
                <div>
                  <h1 className="text-sm">address:</h1>
                  <p>Kampala, Luwumu Street Plot 122, Floor 5</p>
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <i className="feather-phone"></i>
                <div>
                  <h1 className="text-sm">phone:</h1>
                  <p>
                    (256) 775 358738 <br /> (256) 752 870867
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <i className="feather-mail"></i>
                <div>
                  <h1 className="text-sm">email:</h1>
                  <p>
                    wabwenib66@gmail.com <br /> wabzbraize66@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                {socialIcons.map((icon) => (
                  <a
                    href="#"
                    className="grid w-8 h-8 rounded-full shadow-lg place-items-center border-light dark:bg-lightColorDark"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="form flex-1 basis-[18rem]">
          <form>
            <div className="p-4 placeholder-gray-300 rounded shadow border-light bg-lightColor dark:bg-lightColorDark dark:placeholder-gray-600 dark:border-none">
              {inputData.map((data) => {
                const { id, fields } = data;
                return (
                  <div className="mb-2 input" key={id}>
                    <label for="email">Email</label>
                    <input
                      {...fields}
                      className="placeholder-gray-300 form-control dark:bg-inputBgDark dark:placeholder-gray-600 dark:border-none"
                    />
                  </div>
                );
              })}
              <div className="input">
                <label for="message">Message</label>
                <textarea
                  name=""
                  id="message"
                  className="placeholder-gray-300 form-control dark:bg-inputBgDark dark:placeholder-gray-600 dark:border-none"
                  placeholder="Write Message..."
                ></textarea>
              </div>
              <button className="w-full my-2 text-white rounded-lg btn bg-primary hover:bg-orange-500">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
