import * as Stories from '@/app/modules/home/components/molecules/HomeShortcut.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import { shallowMount } from '@vue/test-utils'

describe('HomeShortcut', () => {
  const component = StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<string>('imageUrl', (property) => {
      property
        .itShouldBeDefined()
        .itShouldBeTypeOf(String)
        .itShouldBeRequired()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith('https://picsum.photos/50')
        .itShouldFailWith('empty string', '')
        .itShouldFailWith('null', null)
    })
    .getComponent()

  it('should display the text passed in slot', () => {
    const slotContent = 'Titres likés'
    const wrapper = shallowMount(component, {
      props: {
        imageUrl: 'https://picsum.photos/50',
      },
      slots: {
        default: slotContent,
      },
    })

    expect(wrapper.text()).toContain(slotContent)
  })
})
