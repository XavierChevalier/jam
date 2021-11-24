import FeedTrack from './FeedTrack.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { Track } from '@/modules/track/models/Track'

export default {
  title: 'Feed/FeedTrack',
  component: FeedTrack,
} as Meta

export const Default: Story = (args) => ({
  components: { FeedTrack },
  setup() {
    return { args }
  },
  template: '<FeedTrack v-bind="args" />',
})
Default.args = {
  track: {
    cover: 'https://picsum.photos/50',
    title: 'G.O.A.T.',
    bands: ['Polyphia'],
    durationMs: 125_000,
  } as Track,
}
