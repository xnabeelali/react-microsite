/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      bluewood: '#003A48',
      white: '#ffffff',
      black: '#000000',
      green: {
        100:'#48B291',
        200: '#004729',
      },
      bodyBg: '#F0F0EF',
      gray: '#8B8B8B',
      darkGray: '#313131',
    },
    fontFamily: {
      gtamerica: ['GT-America', 'Arial', 'sans-serif'],
      ivarfine: ['IvarFine', 'Arial', 'sans-serif'],
    },
   
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadein: 'fadein 0.75s ease-in-out',
      },
      screens: {
        '3xl': '1920px',
      }
    }
  },
  plugins: [],
}