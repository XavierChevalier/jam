// noinspection NpmUsedModulesInstalled
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import tailwindcss from '../tailwind.config'
import './../src/assets/styles/index.scss'
import { app } from '@storybook/vue3'
import { i18n } from '../src/plugins/VueI18n'

app.use(i18n)

export const parameters = {
  options: {
    storySort: {
      order: [
        'Layouts',
        'Pages',
        'Templates',
        'Organisms',
        'Molecules',
        'Atoms',
      ],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'mobile2',
    viewports: {
      ...MINIMAL_VIEWPORTS,
      desktop: {
        name: 'Desktop',
        styles: {
          height: '1080px',
          width: '1920px',
        },
        type: 'desktop',
      },
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'true-white', value: '#FFF' },
      { name: 'light', value: tailwindcss.theme.colors.white.dark },
      { name: 'dark', value: tailwindcss.theme.colors.black.light },
    ],
  },
}

export const decorators = [
  (story) => ({
    components: { story },
    template: '<story class="text-base" />',
  }),
]
