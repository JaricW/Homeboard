module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        PermanentMarker: ['Permanent Marker'],
        Playfair: ['Playfair Display'],
        Merriweather: ['Merriweather Sans'],
        Bubblegum: ['Bubblegum Sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
