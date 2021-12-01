import * as Stories from './AppDotSeparator.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('AppDotSeparator', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories).snapshotEachStories()
})
