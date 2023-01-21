import React from "react";

const Footer = () => {
  return (
    <footer className="px-20 mt-20">
      <div className="pt-4 pb-2  text-center border-t dark:border-slate-600">
        <p className="text-sm">
          All rights reserved. | Created by{" "}
          <span className="text-primary">Wabweni Brian </span> &copy;
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
