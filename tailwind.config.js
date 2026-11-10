/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfafd',
          100: '#cff2f9',
          300: '#6fd3e6',
          400: '#2ec0db',
          500: '#0898b7',
          600: '#077d98',
          700: '#0b6479',
          800: '#0d4a5c',
          900: '#0a3442',
          950: '#06212b',
        },
        earth: {
          100: '#f6ede4',
          400: '#d98c4f',
          600: '#a5552a',
        },
      },
      fontFamily: {
        sans: ['"Montserrat Variable"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
