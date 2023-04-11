// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {      
      colors: {
        bgMain: "#eaeaea",
        primaryText: "#232323",
        link: "#1289AE"
      },
      animation: {
        shrink: "shrink 0.4s ease-out",
        appear: "appear 1s  ease-out",
        moveBigStar: "moveBigStar 0.25s 0.4s ease-in-out forwards",
        moveSmallStar: "moveSmallStar 0.25s 0.4s ease-in-out forwards",
      },
      
      keyframes: {
        shrink: {
          '0%':{transform: 'scale(30) rotate(45deg)', opacity:0.3},
          '100%':{transform: 'scale(1)', opacity:1},
        },
        appear: {
          '0%':{opacity:0},
          '40%':{opacity:0},
          '100%':{opacity:1},
        },
        moveBigStar: {
          'from': { transform: 'translateY(75px) translateX(30px)'},
          'to': { transform: 'translateY(0px) translateX(0)', opacity: 1 },
        },
        moveSmallStar: {
          'from': { transform: 'translateY(-55px) translatex(-45px)'},
          'to': { transform: 'translateY(0px) translateX(0)', opacity: 1 } 
        },
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        'input[type="radio"]:checked::after': {
          content: '""',
          display: 'block',
          width: '17px',
          height: '17px',
          borderRadius: '50%',
          backgroundColor: '#232323',
          position: 'relative',
          top: "2px",
          left: "2px",
        },
      });
    },
  ],
};