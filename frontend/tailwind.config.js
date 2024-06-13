/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#092341",
        "custom-blue": "#092391",
      },
      backgroundImage: {
        fondo: "url('/background.png')",
        barco: "url('/barquito.gif')",
      },
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   prefix: "daisy-",
  // },
  darkMode: "class",
};
