const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { min: "0px", max: "425px" },
      sm: { min: "425px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    extend: {
      colors: {
        primary: "#08fdd8",
        secondary: colors.rose[800],
        neutral: colors.gray,
        primaryText: colors.white,
        secondaryText: "#909096",
      },
    },
  },
  plugins: [],
};
