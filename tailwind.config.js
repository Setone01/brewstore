/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        greyText: "hsla(0, 0%, 81%, 1)",
        whiteText: "#FFFFFF",
        greySecondary: ["#F6F6F6"],
        blackText: "#000000",
      },
      screens: {
        xs: "320px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        SFL: ["SF-light", "sans-serif"],
        SFT: ["SF-thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
