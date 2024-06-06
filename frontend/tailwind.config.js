/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fondo":
          "url('./src/assets/Background.jpg')",
      },
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"],
        playfair: ["Playfair Display", "serif"]

      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   prefix: "daisy-",
  // },
  darkMode: "class",
};
