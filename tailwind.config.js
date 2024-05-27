/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('@/assets/backround.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [require('tailwindcss'), require('autoprefixer'), require('@tailwindcss/typography')]
}
