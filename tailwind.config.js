/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#050505',
          card: '#0f0f0f',
          accent: '#00ff87', // Nosso verde neon
          text: '#f5f5f5'
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        baloo: ['"Baloo 2"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}