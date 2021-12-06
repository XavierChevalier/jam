import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import * as Stories from '@/app/modules/playlist/components/organisms/PlaylistShortcut.stories'
import { mount } from '@vue/test-utils'
import PlaylistShortcutItem from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.vue'
import { h } from 'vue'
import { Album } from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.stories'

describe('PlaylistShortcut', () => {
  const component =
    StorybookTestsGenerator.fromStoriesExports(Stories).getComponent()

  it('should render the right number of PlaylistShortcutItem passed in slot', () => {
    const expectedNumberOfItems = 3
    const wrapper = mount(component, {
      slots: {
        default: {
          render: () =>
            [...Array(expectedNumberOfItems)].map(() =>
              h(PlaylistShortcutItem, Album.args)
            ),
        },
      },
    })

    expect(wrapper.findAllComponents(PlaylistShortcutItem)).toHaveLength(
      expectedNumberOfItems
    )
  })
})
