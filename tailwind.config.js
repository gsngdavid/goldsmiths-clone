/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1c1c1c",
        "gray-primary": "#666",
        "dark-gray": "#333333",
        "yellow-primary": "#fed100",
        "blue-primary": "#376ebe",
        "red-primary": "#a42017",
      }
    },
  },
  plugins: [],
}

