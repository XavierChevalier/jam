/* eslint-disable @typescript-eslint/no-var-requires */
const sourceNameMapper = {
  '@/(.*)$': '<rootDir>/src/$1',
}

const styleNameMapper = {
  '\\.(css|less|scss|sass)$': '<rootDir>/src/tests/mocks/EmptyObjectMock.js',
}

module.exports = {
  moduleNameMapper: {
    ...styleNameMapper,
    ...sourceNameMapper,
  },
  setupFiles: ['./src/tests/jest.setup.ts'],
  moduleFileExtensions: ['vue', 'ts', 'js', 'json'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
}

assertSourceNameMapperAliases()

function assertSourceNameMapperAliases() {
  const assert = require('assert')
  const aliases = require('./build/aliases')

  assert.strictEqual(
    Object.keys(sourceNameMapper).length,
    Object.keys(aliases).length,
    'There are more aliases in the build configuration than in the test configuration with Jest. ' +
      'Did you forget to add an equivalent alias in the Jest configuration?'
  )
}
