module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  fontFamily: {
    sans: ['Noto Sans', 'ui-sans-serif', 'system-ui'],
  },
  theme: {
    extend: {},
    colors: {
      neutral: {
        light: '#CECECE',
        DEFAULT: '#999999',
      },
      primary: {
        DEFAULT: '#03BE68',
        light: '#cef1df',
      },
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
