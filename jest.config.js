/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert')
const aliases = require('./build/aliases')

const moduleNameMapper = {
  '@/(.*)$': '<rootDir>/src/$1',
}

assert.strictEqual(
  Object.keys(moduleNameMapper).length,
  Object.keys(aliases).length,
  'There are more aliases in the build configuration than in the test configuration with Jest. ' +
    'Did you forget to add an equivalent alias in the Jest configuration?'
)

module.exports = {
  moduleNameMapper,
  moduleFileExtensions: ['vue', 'ts', 'js', 'json'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
}
