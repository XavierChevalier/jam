import FeedPost from './FeedPost.vue'
import FeedTrack from '@/modules/feed/components/feed-track/FeedTrack.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Feed/Components/FeedPost',
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
  content: 'Lorem ipsum',
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
        title="G.O.A.T."
        :bands="['Polyphia']"
        :duration-ms="150_000"
        cover="https://picsum.photos/50?1"
    />
    </FeedPost>
  `,
})
WithTrack.args = { ...Default.args }
