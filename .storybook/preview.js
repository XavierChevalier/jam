const tailwindcss = require('../tailwind.config')

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {name: 'light', value: tailwindcss.theme.colors.white.dark},
      {name: 'dark', value: tailwindcss.theme.colors.black.light},
    ],
  },
}
