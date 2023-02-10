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
        paper: "#1d1d1d",
        darkblue: colors.blue[900],
        darkred: colors.red[900],
        darkyellow: colors.yellow[900],
        darkorange: colors.orange[900],
        darkgreen: colors.green[900],
        darkpurple: colors.purple[900]
      },

    },
  },
  plugins: [],
};
