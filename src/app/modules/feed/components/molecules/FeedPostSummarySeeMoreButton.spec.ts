import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import FeedPostSummarySeeMoreButton from './FeedPostSummarySeeMoreButton.vue'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/app/modules/feed/components/molecules/FeedPostSummarySeeMoreButton.stories'
import { changeLocale } from '@/plugins/VueI18n'
import AppIcon from '@/app/components/atoms/AppIcon.vue'
import { shallowMountWithPlugins } from '@/tests/tools/MountWithPlugins'

describe('FeedPostSummarySeeMoreButton', () => {
  generateStorybookSnapshotTests({ Default })

  const componentTestsGenerator = new ComponentTestsGenerator(
    FeedPostSummarySeeMoreButton
  )
  componentTestsGenerator.itShouldBeDefined()
  componentTestsGenerator.generateTests()

  it('should contains 2 icons', () => {
    const wrapper = shallowMountWithPlugins(FeedPostSummarySeeMoreButton)

    expect(wrapper.findAllComponents(AppIcon)).toHaveLength(2)
  })

  it.each`
    lang    | expectedDisplayText
    ${'fr'} | ${'Voir toutes les news'}
    ${'en'} | ${'See all news'}
  `(
    'should display a text "$expectedDisplayText" in "$lang"',
    ({ lang, expectedDisplayText }) => {
      changeLocale(lang)
      const wrapper = shallowMountWithPlugins(FeedPostSummarySeeMoreButton)

      expect(wrapper.text()).toContain(expectedDisplayText)
    }
  )
})
