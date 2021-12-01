import * as Stories from '@/app/components/molecules/AppIconLike.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('AppIconLike', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<number>('counter', (property) => {
      property
        .itShouldBeDefined()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith(0)
        .itShouldSuccessWith(1)
        .itShouldFailWith('negative number', -1)
        .itShouldFailWith('null', null)
    })
})
