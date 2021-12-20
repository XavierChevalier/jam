import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import * as Stories from './LayoutDefault.stories'
import PlayerDocked from '@/app/modules/player/components/organisms/PlayerDocked.vue'
import { shallowMount } from '@vue/test-utils'
import NavigationBar from '@/app/modules/navigation/components/molecules/NavigationBar.vue'

describe('LayoutDefault', () => {
  const component = StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .getComponent()

  const wrapper = shallowMount(component)
  it('should render the player docked component', () => {
    wrapper.getComponent(PlayerDocked)
  })

  it('should render the navigation bar component', () => {
    wrapper.getComponent(NavigationBar)
  })

  it('should display the text passed in slot', () => {
    const slotContent = 'Titres likés'
    const wrapper = shallowMount(component, {
      slots: { default: slotContent },
    })

    expect(wrapper.text()).toContain(slotContent)
  })
})
