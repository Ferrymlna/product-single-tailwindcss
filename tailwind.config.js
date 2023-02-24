/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    conrainer: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        Poppins: 'Poppins'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
