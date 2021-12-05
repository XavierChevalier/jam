import PlaylistShortcutItem from './PlaylistShortcutItem.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Molecules/Playlist/PlaylistShortcutItem',
  component: PlaylistShortcutItem,
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
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
