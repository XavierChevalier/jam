import TrackCover from './TrackCover.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { TrackOfTrackCover } from '@/app/modules/track/models/TrackCover'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Atoms/Player/TrackCover',
  component: TrackCover,
} as Meta

const Template: Story = (args) => ({
  components: { TrackCover },
  setup() {
    return { args }
  },
  template: '<TrackCover v-bind="args" />',
})

const track: TrackOfTrackCover = {
  cover: generateImageUrl(),
  title: 'G.O.A.T.',
  bands: ['Polyphia'],
}
export const Default = Template.bind({})
Default.args = { track }

export const SmallSize = Template.bind({})
SmallSize.args = {
  track,
  size: 'sm',
}
