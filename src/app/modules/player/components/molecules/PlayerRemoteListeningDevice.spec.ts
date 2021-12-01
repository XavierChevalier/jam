import * as Stories from './PlayerRemoteListeningDevice.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('PlayerRemoteListeningDevice', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<string>('remoteDeviceName', (property) => {
      property.itShouldBeDefined().itShouldBeRequired().itShouldBeTypeOf(String)
    })
})
