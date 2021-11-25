import FeedPost from './FeedPost.vue'
import FeedTrack from '@/app/modules/feed/components/FeedTrack.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Feed/FeedPost',
  component: FeedPost,
} as Meta

export const Default: Story = (args) => ({
  components: { FeedPost },
  setup() {
    return { args }
  },
  template: '<FeedPost v-bind="args" />',
})
Default.args = {
  author: {
    name: 'TheBaronless',
    avatar: 'https://picsum.photos/50',
  },
  content:
    "Salut à tous, j'ai découvert un groupe complètement ouf, dites-moi ce que vous en pensez !",
  numberOfLikes: 10,
  numberOfComments: 15,
  publicationDate: new Date(),
}

export const WithTrack: Story = (args) => ({
  components: { FeedPost, FeedTrack },
  setup() {
    return { args }
  },
  template: `
    <FeedPost v-bind="args">
    <FeedTrack
      :track="{
        title: 'G.O.A.T.',
        bands: ['Polyphia'],
        durationMs: 150_000,
        cover: 'https://picsum.photos/50?1'
      }"
    />
    </FeedPost>
  `,
})
WithTrack.args = { ...Default.args }
