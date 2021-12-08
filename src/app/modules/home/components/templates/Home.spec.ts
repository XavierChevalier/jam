import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import * as Stories from './Home.stories'
import FeedPostShort from '@/app/modules/feed/components/organisms/FeedPostShort.vue'
import FeedPostShortItem from '@/app/modules/feed/components/molecules/FeedPostShortItem.vue'
import HomeFrequentlyListenedShortcut from '@/app/modules/home/components/molecules/HomeFrequentlyListenedShortcut.vue'
import HomeFrequentlyListenedShortcuts from '@/app/modules/home/components/organisms/HomeFrequentlyListenedShortcuts.vue'
import PlaylistShortcut from '@/app/modules/playlist/components/organisms/PlaylistShortcut.vue'
import PlaylistShortcutItem from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.vue'
import { mountWithPlugins } from '@/tests/tools/MountWithPlugins'

describe('Home', () => {
  const component = StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .getComponent()

  const wrapper = mountWithPlugins(component)
  it('should render feed post shorts', () => {
    wrapper.getComponent(FeedPostShort)
    expect(
      wrapper.findAllComponents(FeedPostShortItem).length
    ).toBeGreaterThanOrEqual(1)
  })

  it('should render frequently listened shortcuts', () => {
    wrapper.getComponent(HomeFrequentlyListenedShortcuts)
    expect(
      wrapper.findAllComponents(HomeFrequentlyListenedShortcut).length
    ).toBeGreaterThanOrEqual(1)
  })

  it('should render playlists shortcuts', () => {
    const playlistShortcuts = wrapper.findAllComponents(PlaylistShortcut)
    expect(playlistShortcuts.length).toBeGreaterThanOrEqual(1)
    playlistShortcuts.forEach((playlistShortcut) => {
      expect(
        playlistShortcut.findAllComponents(PlaylistShortcutItem).length
      ).toBeGreaterThanOrEqual(1)
    })
  })
})
