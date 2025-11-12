/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#406008',
        secondary: '#8E9B6D', 
        background: '#F5EEDC',
        text: '#000000'
      }
    },
  },
  plugins: [],
}