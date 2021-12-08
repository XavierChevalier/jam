import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import * as Stories from '@/app/modules/home/components/molecules/HomeFrequentlyListenedShortcut.stories'

describe('HomeFrequentlyListenedShortcuts', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .getComponent()
})
