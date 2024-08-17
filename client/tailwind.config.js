/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25D366",
        secondary: "#0A0A0B",
        cards: "#051542",
        "custom-dark": "rgb(30, 30, 30)", // Dark gray with a hint of white
        "custom-light": "rgb(220, 220, 220)",
        "custom-start": "rgb(70, 71, 157)",
        "custom-end": "rgb(30, 30, 70)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #FFFF, #FFFF, #FFFF, #FFFF, #FFFF)",
        "custom-green-gradient":
          "linear-gradient(to right, #25D366, #34DC77, #43E088, #52E499, #61E8AA)",
        "white-to-dark-blue":
          "linear-gradient(to right, white, #e6e9f0, #c7cfe3, #a1b3d1, #7a96bf, #4c7aae, #205e9c)",
      },
      boxShadow: {
        custom: "0 7px 100px rgb(255 250 250 / 50%)", // Custom shadow
        "inner-custom": "inset 0 7px 100px rgb(255 250 250 / 50%)",
        customSm: "0 7px 62px 13px rgb(255 250 250 / 50%)", // Custom shadow
        "custom-blue": "0px 4px 32px 17px rgba(25, 85, 255, 0.3)",
        "custom-green": "0px 4px 32px 17px rgba(37, 211, 102, 0.3)",
        "curstom-blue-img": "0px 4px 102px 17px rgba(25, 85, 255, 0.3)",
      },
      screens: {
        slg: "960px",
        mlg: "1200px",
        lgmd: "720px",
        mdsm: "680px",
      },
    },
  },
  plugins: [],
};
