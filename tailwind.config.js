/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // white:'selector'
    }
  },
  plugins: [require('tailwindcss'), require('autoprefixer'), require('@tailwindcss/typography')],
 darkMode: ["class", '[data-mode="white"]'],
}
