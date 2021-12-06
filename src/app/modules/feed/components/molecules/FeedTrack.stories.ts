import FeedTrack from './FeedTrack.vue'
import { Meta, Story } from '@storybook/vue3'
import { Track } from '@/app/modules/track/models/Track'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Molecules/Feed/FeedTrack',
  component: FeedTrack,
} as Meta

export const OneBand: Story = (args) => ({
  components: { FeedTrack },
  setup() {
    return { args }
  },
  template: '<FeedTrack v-bind="args" />',
})
OneBand.args = {
  track: {
    cover: generateImageUrl(),
    title: 'G.O.A.T.',
    bands: ['Polyphia'],
    durationMs: 125_000,
  } as Track,
}
