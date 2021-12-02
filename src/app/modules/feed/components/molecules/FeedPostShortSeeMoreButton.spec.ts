import FeedPostShortSeeMoreButton from './FeedPostShortSeeMoreButton.vue'
import * as Stories from '@/app/modules/feed/components/molecules/FeedPostShortSeeMoreButton.stories'
import { changeLocale } from '@/plugins/VueI18n'
import AppIcon from '@/app/components/atoms/AppIcon.vue'
import { shallowMountWithPlugins } from '@/tests/tools/MountWithPlugins'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('FeedPostShortSeeMoreButton', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories).snapshotEachStories()

  it('should contains 2 icons', () => {
    const wrapper = shallowMountWithPlugins(FeedPostShortSeeMoreButton)

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
      const wrapper = shallowMountWithPlugins(FeedPostShortSeeMoreButton)

      expect(wrapper.text()).toContain(expectedDisplayText)
    }
  )
})
