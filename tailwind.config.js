const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      screens:{
        "lg1":"1200px",
        "md1":"975px",
        "txt":"1380px",
      },
      fontFamily:{
        "header-anton": ['"Anton"', 'sans-serif'], // Define the font
        "secondary-unbounded": ['"Unbounded"', 'sans-serif'], 
      },
      fontWeight:{
        "mid":"400px"
      },
      colors:{
        "bg2":"#F1ECE7",
        "bg3":"#252525",
        "primary":"#2DF4A1",
        "primary-hover":"#28db90",
        "subtle":"#5A5A5A",
        "subtle2":"#A3A3A3", 
      },
      boxShadow: {
        'top': '0 -4px 6px rgba(0, 0, 0, 0.1)', // Customize the shadow as needed
        'top2': '0 -1px 20px #2DF4A1', // Customize the shadow as needed
      },
      backgroundImage:{
        "bg-svg":"url('/bg.png')",
        "bg-svg2":"url('/bg-2.png')",
      }
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}