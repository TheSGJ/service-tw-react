module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}