/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-gray': '#B4B4B4',
        'custom-gray-dark': '#666666',
        'custom-gray-light': '#CCCCCC',
      },
      spacing: {
        'custom-spacing': '1.5rem',
      },
      fontSize: {
        'custom-font-size': '1.25rem',
      },
    },
  },
  plugins: [],
};