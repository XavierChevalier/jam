import * as Stories from '@/app/modules/home/components/molecules/HomeFrequentlyListenedShortcut.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import { shallowMount } from '@vue/test-utils'
import { generateImageUrl } from '@/app/tools/Faker'

describe('HomeFrequentlyListenedShortcut', () => {
  const component = StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<string>('imageUrl', (property) => {
      property
        .itShouldBeDefined()
        .itShouldBeTypeOf(String)
        .itShouldBeRequired()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith(generateImageUrl())
        .itShouldFailWith('empty string', '')
        .itShouldFailWith('null', null)
    })
    .getComponent()

  it('should display the text passed in slot', () => {
    const slotContent = 'Titres likés'
    const wrapper = shallowMount(component, {
      props: {
        imageUrl: generateImageUrl(),
      },
      slots: {
        default: slotContent,
      },
    })

    expect(wrapper.text()).toContain(slotContent)
  })
})
