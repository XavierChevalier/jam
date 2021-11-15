module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  fontFamily: {
    sans: ['Noto Sans'],
  },
  theme: {
    extend: {},
    colors: {
      neutral: '#cecece',
      primary: '#03BE68',
      black: {
        light: '#252525',
        DEFAULT: '#000',
      },
      white: {
        DEFAULT: '#fff',
        dark: '#f9f9f9',
      },
    },
  },
}
