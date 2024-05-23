/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fondo":
          "url('https://w0.peakpx.com/wallpaper/372/501/HD-wallpaper-silhouette-fisherman-fishing-rod-fishing-lake-dark.jpg')",
      },
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   prefix: "daisy-",
  // },
  darkMode: "class",
};
