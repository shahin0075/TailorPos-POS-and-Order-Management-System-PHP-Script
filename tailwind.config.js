/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#001C30',
        'secondary' : '#313866',
        'highlight' : '#001c3007',
     },
    },
  },
  plugins: [],
}