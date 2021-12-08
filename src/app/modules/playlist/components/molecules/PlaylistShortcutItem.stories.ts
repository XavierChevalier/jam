import PlaylistShortcutItem from './PlaylistShortcutItem.vue'
import { Meta, Story } from '@storybook/vue3'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Molecules/Playlist/PlaylistShortcutItem',
  component: PlaylistShortcutItem,
} as Meta

const Template: Story = (args) => ({
  components: { PlaylistShortcutItem },
  setup() {
    return { args }
  },
  template: `<PlaylistShortcutItem v-bind="args" />`,
})

export const Album = Template.bind({})
Album.args = {
  cover: generateImageUrl(160),
  title: 'Polyphia',
  description: 'New levels new devils',
}
