/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2E4A7B',
          dark: '#143363',
        },
        wemake: {
          green: '#89B84C',
          yellow: '#F2C12E',
        },
      },
      backgroundImage: {
        'wemake-gradient': 'linear-gradient(135deg, #89B84C 0%, #F2C12E 100%)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
