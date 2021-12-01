import * as Stories from './AppAvatar.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('AppAvatar', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<string>('url', (property) => {
      property
        .itShouldBeDefined()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith('https://picsum.photos/50')
        .itShouldFailWith('empty string', '')
        .itShouldFailWith('null', null)
    })
    .property<string>('size', (property) => {
      property
        .itShouldBeDefined()
        .itShouldHaveADefaultValue()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith('sm')
        .itShouldSuccessWith('base')
        .itShouldSuccessWith('lg')
        .itShouldFailWith('unknown size type', 'unknown')
    })
})
