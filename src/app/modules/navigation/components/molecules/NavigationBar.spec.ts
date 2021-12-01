import * as Stories from '@/app/modules/navigation/components/molecules/NavigationBar.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('NavigationBar', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories).snapshotEachStories()
})
