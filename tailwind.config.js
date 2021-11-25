/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily, borderRadius } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  fontFamily: {
    ...fontFamily,
    sans: fontFamily.sans.sort((font) => (font === '"Noto Sans"' ? -1 : 1)),
  },
  theme: {
    extend: {
      width: {
        4.5: '1.065rem',
      },
    },
    colors: {
      neutral: {
        light: '#CECECE',
        DEFAULT: '#999999',
      },
      primary: {
        DEFAULT: '#03BE68',
        light: '#F4FCF7',
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
    borderRadius: {
      ...borderRadius,
      DEFAULT: '.35rem',
    },
  },
}
