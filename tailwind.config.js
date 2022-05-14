module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
    theme: {
      colors: {
        Yellow: "#C0FF0D",
      },
    },
  },
  plugins: [],
};
