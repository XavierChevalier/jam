import PlaylistShortcut from './PlaylistShortcut.vue'
import PlaylistShortcutItem from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.vue'
import { Meta, Story } from '@storybook/vue3'
import { Album } from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.stories'

export default {
  title: 'Organisms/Playlist/PlaylistShortcut',
  component: PlaylistShortcut,
  subcomponents: { PlaylistShortcutItem },
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
} as Meta

const Template: Story = (args) => ({
  components: { PlaylistShortcut, PlaylistShortcutItem },
  setup() {
    return { args }
  },
  template: `
    <PlaylistShortcut>
      <PlaylistShortcutItem v-for="itemArgs in args.items" v-bind="itemArgs" />
    </PlaylistShortcut>
  `,
})

export const Albums = Template.bind({})
Albums.args = {
  items: [...Array(6)].map(() => Album.args),
}
