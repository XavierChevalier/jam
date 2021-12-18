import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import * as Stories from '@/app/modules/playlist/components/organisms/PlaylistShortcut.stories'
import { mount, shallowMount, VueWrapper } from '@vue/test-utils'
import PlaylistShortcutItem from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.vue'
import { h } from 'vue'
import { Album } from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.stories'
import VueHorizontal from 'vue-horizontal'

describe('PlaylistShortcut', () => {
  const component = StorybookTestsGenerator.fromStoriesExports(Stories)
    .property<string>('title', (property) => {
      property.itShouldBeDefined().itShouldBeTypeOf(String).itShouldBeRequired()
    })
    .getComponent()

  const getComponentOptions = (numberOfItems: number) => ({
    props: { title: 'Test' },
    slots: {
      default: {
        render: () =>
          [...Array(numberOfItems)].map(() =>
            h(PlaylistShortcutItem as never, Album.args)
          ),
      },
    },
  })

  it('should render the right number of PlaylistShortcutItem passed in slot', () => {
    const expectedNumberOfItems = 10
    const wrapper = mount(component, getComponentOptions(expectedNumberOfItems))

    expect(wrapper.findAllComponents(PlaylistShortcutItem)).toHaveLength(
      expectedNumberOfItems
    )
  })

  it('should display the title text', () => {
    const wrapper = shallowMount(component, getComponentOptions(10))

    expect(wrapper.text()).toContain(wrapper.props('title'))
  })

  describe('horizontal navigation', () => {
    let wrapper: VueWrapper<typeof component>
    beforeEach(() => {
      wrapper = shallowMount(component, getComponentOptions(10))
    })

    it('should have 2 horizontal navigation buttons', () => {
      expect(wrapper.findAll('[data-test^="navigation"]')).toHaveLength(2)
    })

    it('should scroll to the right on click on the next button', async () => {
      const vueHorizontalComponent = wrapper.getComponent(VueHorizontal)
      vueHorizontalComponent.vm.next = jest.fn()

      await wrapper.get('[data-test="navigationNext"]').trigger('click')

      expect(vueHorizontalComponent.vm.next).toHaveBeenCalledOnce()
    })

    it('should scroll to the left on click on the previous button', async () => {
      const vueHorizontalComponent = wrapper.getComponent(VueHorizontal)
      vueHorizontalComponent.vm.prev = jest.fn()

      await wrapper.get('[data-test="navigationPrev"]').trigger('click')

      expect(vueHorizontalComponent.vm.prev).toHaveBeenCalledOnce()
    })

    it('should add "inactive" class on previous button if it stuck to the left', async () => {
      expect(
        wrapper.get('[data-test="navigationPrev"]').classes('inactive')
      ).toBeTrue()
    })
  })
})
