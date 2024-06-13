/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#222224',
        'custom-gray': '#252527'
      },
      backgroundImage: {
        "fondo":
          "url('/Background.jpg')",
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
