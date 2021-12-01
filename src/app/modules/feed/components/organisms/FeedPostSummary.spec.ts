import FeedPostSummarySeeMoreButton from '../molecules/FeedPostSummarySeeMoreButton.vue'
import FeedPostSummary from './FeedPostSummary.vue'
import * as Stories from '@/app/modules/feed/components/organisms/FeedPostSummary.stories'
import { shallowMount } from '@vue/test-utils'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('FeedPostSummary', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories).snapshotEachStories()

  it('should contains the button to see all news', () => {
    const wrapper = shallowMount(FeedPostSummary)

    expect(
      wrapper.findComponent(FeedPostSummarySeeMoreButton).exists()
    ).toBeTrue()
  })
})
