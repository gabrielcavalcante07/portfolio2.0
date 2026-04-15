/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#141414',
        'primary': '#915eff',
        'blueIn': '#0a66c3'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs1': '0.85rem'
      },
      height:{
        'rem': '25rem'
      },
      boxShadow: {
        glass: 
        `-2px -2px 2px 0px rgba(255, 255, 255, 0.28) inset,
        2px 2px 2px 0px rgba(255, 255, 255, 0.28) inset,
        0px 0px 19px 0px rgba(000, 000, 000, 0.25),
        16px 0px 23.1px 0px rgba(0, 0, 0, 0.2)`
      },
    },
  },
  plugins: [],
}

