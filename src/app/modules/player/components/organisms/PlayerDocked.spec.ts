import * as Stories from '@/app/modules/player/components/organisms/PlayerDocked.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('PlayerDocked', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<string>('remoteListeningDevice', (property) => {
      property
        .itShouldBeDefined()
        .itShouldNotBeRequired()
        .itShouldHaveADefaultValue()
    })
})
