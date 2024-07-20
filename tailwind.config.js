/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e8947",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #1e8947 0%, #34d399 100%)",
      },
      boxShadow: {
        custom: "0 7px 100px rgb(255 250 250 / 50%)", // Custom shadow
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
