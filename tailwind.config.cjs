module.exports = {
  content: ['./common/**/*.{vue,js,ts,jsx,tsx}', './pages/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // https://tailwindcss.com/docs/preflight
  },
}