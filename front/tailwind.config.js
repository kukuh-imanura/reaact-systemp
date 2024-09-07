/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.5rem',
      // base: '1rem',
      lg: '2rem',
      xl: '3rem',
    },
    spacing: {
      0: 0,
      sm: '0.5rem',
      base: '1rem',
      lg: '2rem',
      xl: '4rem',
      '2xl': '8rem',
      '3xl': '16rem',
      '4xl': '32rem',
      600: '600px',
      '5xl': '64rem',
    },
    fontWeight: {
      light: '200',
      // DEFAULT: '400',
      bold: '600',
      black: '800',
    },
    borderRadius: {
      DEFAULT: '0.5rem',
      lg: '1rem',
      xl: '2rem',
      full: '9999px',
    },
    extend: {
      colors: {
        light: '#DDE',
        dark: '#112',
        brand: '#09E',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
