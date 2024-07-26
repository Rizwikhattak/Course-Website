/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e8947",
        "custom-dark": "rgb(30, 30, 30)", // Dark gray with a hint of white
        "custom-light": "rgb(220, 220, 220)",
        "custom-start": "rgb(70, 71, 157)",
        "custom-end": "rgb(30, 30, 70)",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(to bottom, rgb(70, 71, 157), rgb(30, 30, 70))",
      }),

      boxShadow: {
        custom: "0 7px 100px rgb(255 250 250 / 50%)", // Custom shadow
        "inner-custom": "inset 0 7px 100px rgb(255 250 250 / 50%)",
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
