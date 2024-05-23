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
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        enterFromRight: {
          "0%": { left: "calc(100vw + 2rem)" },
          "100%": { left: "0" },
        },
      },
      animation: {
        heroHorizontalCard: 'enterFromRight ease-in-out forwards',
      },
      boxShadow:{
        personal: "0px 4px 48px 0px rgba(0,0,0,0.75);"
      }
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   prefix: "daisy-",
  // },
  darkMode: "class",
};
