const path = require('path')
const aliases = require('./../build/aliases')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.ts'],
  addons: [
    'storybook-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    useSass(config)
    registerAliases(config)
    useI18nLoader(config);

    return config
  },
}

/**
 * @see https://vue-i18n.intlify.dev/guide/advanced/sfc.html#vue-i18n-loader
 */
function useI18nLoader(config) {
  config.module.rules.push({
    resourceQuery: /blockType=i18n/,
    type: 'javascript/auto',
    loader: '@intlify/vue-i18n-loader',
  })
  config.module.rules.push({
    test: /\.(json5?|ya?ml)$/,
    type: 'javascript/auto',
    // Use `Rule.include` to specify the files of locale messages to be pre-compiled
    include: [
      path.resolve(__dirname, './../src/locales'),
    ],
    loader: '@intlify/vue-i18n-loader'
  })
}

function registerAliases(config) {
  Object.keys(aliases).forEach(
    (alias) => (config.resolve.alias[alias] = aliases[alias])
  )
}

function useSass(config) {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })
}
