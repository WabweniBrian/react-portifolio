import React, { useState } from "react";
import {
  About,
  BackToTopButton,
  Contact,
  Footer,
  Hero,
  Navbar,
  Portifolio,
  Skills,
  Stats,
} from "./components";

const App = () => {
  const rootDoc = document.querySelector(":root");
  const [darkMode, setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [slideNavbar, setSlideNavbar] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    window.scrollY > 0 ? setSlideNavbar(true) : setSlideNavbar(false);
  });

  const setDark = () => {
    setDarkMode(true);
    rootDoc.classList.add("dark");
  };

  const setLight = () => {
    setDarkMode(false);
    rootDoc.classList.remove("dark");
  };

  return (
    <>
      <BackToTopButton showButton={showButton} />
      <Navbar
        setLight={setLight}
        setDark={setDark}
        darkMode={darkMode}
        slideNavbar={slideNavbar}
      />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Portifolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
