import * as Stories from '@/app/components/molecules/AppIconComment.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('AppIconComment', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<number>('counter', (property) => {
      property
        .itShouldBeDefined()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith(0)
        .itShouldSuccessWith(10)
        .itShouldFailWith('negative number', -1)
    })
})
