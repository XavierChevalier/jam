import FeedPost from './FeedPost.vue'
import FeedTrack from '@/app/modules/feed/components/molecules/FeedTrack.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { OneBand } from '@/app/modules/feed/components/molecules/FeedTrack.stories'

export default {
  title: 'Organisms/Feed/FeedPost',
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
      <FeedTrack :track="args.track" />
    </FeedPost>
  `,
})
WithTrack.args = { ...Default.args, track: OneBand.args?.track }
