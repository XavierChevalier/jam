import * as Stories from './PlayerProgressBar.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('PlayerProgressBar', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<number>('progress', (property) => {
      property
        .itShouldBeDefined()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith(0)
        .itShouldSuccessWith(1)
        .itShouldFailWith('negative number', -1)
    })
})
