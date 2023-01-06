/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
       "./*.html",
      "./src/**/*.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
       screens: {
       '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '939px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
      },
      extend: {
        fontFamily: {
          leadfont: "Poppins,Ubuntu,  ,sans"
        },
        color: {
          leadblack: "#f000f0",
          leadwhite: "#FFFFFF",
          fomobrown: "#ffc107"
        },
        backgroundColor: {
          leadash: "#EDF4EF",
          leadyellow: "#FDC500",
          leadgreen: "#3A7D44"
        },
        shadow: {
          fomoshadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f",
          fomotextshadow: "0 0 10px #38f000, 0 0 10px #008020"
        }
      },
    },
    plugins: [],
  }