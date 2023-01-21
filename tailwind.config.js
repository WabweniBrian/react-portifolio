/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#d98049",
        textColor: "#211812",
        lightColor: "#fff",
        mainBg: "#fafcff",
        inputBg: "#e3e3e3",
        mainBgDark: "#0d0907",
        textColorDark: "#d4d0cc",
        lightColorDark: "#151211",
        inputBgDark: "#0d0907",
      },
      backgroundImage: {
        imageLg: "url('../public/images/hero-banner.png')",
        imageMd: "url('../public/images/hero-banner-md.png')",
        imageSm: "url('../public/images/hero-banner-sm.png')",
      },
      gridTemplateColumns: {
        "1fr": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".shadow-light": {
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #fff inset !important",
        },
        ".input-dark-shadow": {
          boxShadow: "0 0 0 1000px #0d0907 inset !important",
        },
        ".inputAutofillColor": {
          "-webkit-text-fill-color": "#ccc",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".border-top-light": {
          borderTop: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".text-shadow": {
          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(function ({ addComponents }) {
      const newComponets = {
        ".form-control": {
          border: "1px solid rgb(174, 200, 206)",
          outline: "none",
          borderRadius: "0.5rem",
          fontFamily: "inherit",
          padding: "0.35rem 0.5rem",
          display: "block",
          fontSize: "1rem",
          width: "100%",
          "&:focus": {
            border: "1px solid rgb(83, 182, 247)",
          },
        },
      };
      addComponents(newComponets);
    }),
  ],
};
