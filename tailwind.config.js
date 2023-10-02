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
        blue: '#2cbce9',
        red: '#dc4492',
        yellow: '#fdcc49',
        grey: '#ededed',
        "deep-blue": '#010026',
        "dark-gray": '#757575',
        "opaque-black": 'rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #0085ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)",
      }),
      fontFamily: {
        playfair: ["PlayFair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/')",
        person2: "url('./assets/')",
        person3: "url('./assets/')",
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