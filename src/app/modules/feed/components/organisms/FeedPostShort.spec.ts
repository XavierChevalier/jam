import FeedPostShortSeeMoreButton from '../molecules/FeedPostShortSeeMoreButton.vue'
import FeedPostShort from './FeedPostShort.vue'
import * as Stories from '@/app/modules/feed/components/organisms/FeedPostShort.stories'
import { shallowMount } from '@vue/test-utils'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('FeedPostShort', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories).snapshotEachStories()

  it('should contains the button to see all news', () => {
    const wrapper = shallowMount(FeedPostShort)

    expect(
      wrapper.findComponent(FeedPostShortSeeMoreButton).exists()
    ).toBeTrue()
  })
})
