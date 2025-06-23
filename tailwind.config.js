/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1a1a1a',
        'primary': '#915eff',
      },
      fontFamily: {
        'Beau-Rival': 'beau rivage, sans-serif',
      }
    },
  },
  plugins: [],
}

