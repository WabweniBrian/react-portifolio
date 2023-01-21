import React from "react";
import { FiChevronUp } from "react-icons/fi";

const BackToTopButton = ({ showButton }) => {
  return (
    <button
      className={`fixed bottom-0 right-0 grid mb-4 mr-4 border rounded-full shadow back-to-top-btn w-9 h-9 place-items-center !bg-transparent cursor-none sm:cursor-pointer border-primary shadow-primary/60 !text-primary ${
        showButton && "active"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FiChevronUp />
    </button>
  );
};

export default BackToTopButton;
