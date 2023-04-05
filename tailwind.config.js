/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {      
      colors: {
      bgMain: "#eaeaea",
      primaryText: "#232323",
      },
      animation:{
        shrink: "shrink 0.4s ease-out",
        appear: "appear 1s  ease-out"
      },
      keyframes:{
        shrink:{
          '0%':{transform: 'scale(30) rotate(45deg)', opacity:0.3},
          '100%':{transform: 'scale(1)', opacity:1}
        },
        appear:{
          '0%':{opacity:0},
          '40%':{opacity:0},
          '100%':{opacity:1}
        }
      }
    },
  },
  plugins: [],
};
