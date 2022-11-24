/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eerie: "#181818",
        tomato: "#fd2e2e",
        honey: "#f7ab0a",
        beige: "#fffde1",
        corn: "#F2E863",
        gold: "#ffd700",
      },
      fontFamily: {
        Signika: ["Signika Negative", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
