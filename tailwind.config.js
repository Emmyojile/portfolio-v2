/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#0E8388',
        red: '#CD0404',
        yellow: '#F99417',
        grey: '#2E4F4F',
        "deep-blue": '#010026',
        "dark-gray": '#757575',
        "opaque-black": 'rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #0085ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #F99417 14.53%, #2E4F4F 69.36%)",
      }),
      fontFamily: {
        playfair: ["PlayFair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        frontend: "url('./assets/frontend.png')",
        backend: "url('./assets/backend.png')",
      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}