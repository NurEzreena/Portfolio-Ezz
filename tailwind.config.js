/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          bowlby: ['"Bowlby One SC"', 'cursive'],roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };