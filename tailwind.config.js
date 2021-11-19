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
      neutral: '#999999',
      primary: '#03BE68',
      black: {
        light: '#252525',
        DEFAULT: '#000',
      },
      white: {
        DEFAULT: '#FFF',
        dark: '#F8F8F8',
      },
    },
  },
}
