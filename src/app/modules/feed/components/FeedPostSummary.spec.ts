import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import FeedPostSummarySeeMoreButton from './FeedPostSummarySeeMoreButton.vue'
import FeedPostSummary from './FeedPostSummary.vue'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { With3Items } from '@/app/modules/feed/components/FeedPostSummary.stories'
import { shallowMount } from '@vue/test-utils'

describe('FeedPostSummary', () => {
  generateStorybookSnapshotTests({ With3Items })

  const componentTestsGenerator = new ComponentTestsGenerator(FeedPostSummary)
  componentTestsGenerator.itShouldBeDefined()
  componentTestsGenerator.generateTests()

  it('should contains the button to see all news', () => {
    const wrapper = shallowMount(FeedPostSummary)

    expect(
      wrapper.findComponent(FeedPostSummarySeeMoreButton).exists()
    ).toBeTrue()
  })
})
