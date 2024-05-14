/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nunito': '"Nunito Sans", sans-serif;'
      },
      colors:{
        'TextoDarkBlue': 'hsl(200, 15%, 8%)',
        'lightModeElements': 'hsl(0, 0%, 100%)'
      },
      backgroundColor:{
        'lightModeBackground': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}