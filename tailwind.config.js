const {
  fontFamily,
  borderRadius,
  borderWidth,
} = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts}', './.storybook/*.{js,html}'],
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
    fontSize: {
      xs: ['12px', { lineHeight: '14px' }],
      sm: ['14px', { lineHeight: '16px' }],
      base: ['16px', { lineHeight: '20px' }],
      lg: ['20px', { lineHeight: '24px' }],
      xl: ['26px', { lineHeight: '30px' }],
      '2xl': ['80px', { lineHeight: '100px' }],
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
    borderWidth: {
      ...borderWidth,
      3: '3px',
    },
  },
}
