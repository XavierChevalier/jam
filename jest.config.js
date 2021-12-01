const sourceNameMapper = {
  '@/(.*)$': '<rootDir>/src/$1',
}
const nodeModulesMapper = {
  '^lodash-es$': 'lodash',
}
const styleNameMapper = {
  '\\.(css|less|scss|sass)$': '<rootDir>/src/tests/mocks/EmptyObjectMock.js',
}

module.exports = {
  moduleNameMapper: {
    ...styleNameMapper,
    ...nodeModulesMapper,
    ...sourceNameMapper,
  },
  setupFiles: ['./src/tests/jest.setup.ts'],
  setupFilesAfterEnv: ['./src/tests/jest.setup.after-env.ts'],
  moduleFileExtensions: ['vue', 'ts', 'js', 'json'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  globals: {
    'vue-jest': {
      transform: {
        // TODO: use 'vue-i18n-jest' instead when version 5 of vue-jest is supported.
        //  See https://github.com/intlify/vue-i18n-jest/pull/43
        i18n: require('./build/VueJestTransformCustomBlocks'),
      },
    },
  },
}
;(function assertSourceNameMapperAliases() {
  const assert = require('assert')
  const aliases = require('./build/aliases')

  assert.strictEqual(
    Object.keys(sourceNameMapper).length,
    Object.keys(aliases).length,
    'There are more aliases in the build configuration than in the test configuration with Jest. ' +
      'Did you forget to add an equivalent alias in the Jest configuration?'
  )
})()
