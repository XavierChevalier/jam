import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import * as Stories from '@/app/modules/playlist/components/organisms/PlaylistShortcut.stories'
import { mount } from '@vue/test-utils'
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

  const expectedNumberOfItems = 10
  const wrapper = mount(component, {
    props: { title: 'Test' },
    slots: {
      default: {
        render: () =>
          [...Array(expectedNumberOfItems)].map(() =>
            h(PlaylistShortcutItem, Album.args)
          ),
      },
    },
  })
  it('should render the right number of PlaylistShortcutItem passed in slot', () => {
    expect(wrapper.findAllComponents(PlaylistShortcutItem)).toHaveLength(
      expectedNumberOfItems
    )
  })

  it('should display the title text', () => {
    expect(wrapper.text()).toContain(wrapper.props('title'))
  })

  describe('horizontal navigation', () => {
    it('should have 2 horizontal navigation buttons', () => {
      expect(wrapper.findAll('[data-test^="navigation"]')).toHaveLength(2)
    })

    it('should scroll to the right on click on the next button', async () => {
      const vueHorizontalComponent = wrapper.getComponent(VueHorizontal)
      vueHorizontalComponent.vm.next = jest.fn()

      await wrapper.get('[data-test="navigationNext"]').trigger('click')

      expect(vueHorizontalComponent.vm.next).toHaveBeenCalledOnce()
    })

    it('should scroll to the left on click on the next button', async () => {
      const vueHorizontalComponent = wrapper.getComponent(VueHorizontal)
      vueHorizontalComponent.vm.prev = jest.fn()

      await wrapper.get('[data-test="navigationPrev"]').trigger('click')

      expect(vueHorizontalComponent.vm.prev).toHaveBeenCalledOnce()
    })
  })
})
