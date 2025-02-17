/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"]
      },
      colors:{
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        grey500: 'hsl(234, 12%, 34%)',
        grey400: 'hsl(212, 6%, 44%)',
        White: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

