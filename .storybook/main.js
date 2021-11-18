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
    useSass(config);
    registerAliases(config);

    return config;
  }
}

function registerAliases(config) {
  Object.keys(aliases).forEach((alias) => config.resolve.alias[alias] = aliases[alias])
}

function useSass(config) {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })
}
