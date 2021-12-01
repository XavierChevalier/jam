import FeedPostSummaryItem from './FeedPostSummaryItem.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { AvailableFeedPostType } from '@/app/modules/feed/models/FeedPostType'

export default {
  title: 'Feed/FeedPostSummaryItem',
  component: FeedPostSummaryItem,
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
} as Meta

export const Default: Story = (args) => ({
  components: { FeedPostSummaryItem },
  setup() {
    return { args }
  },
  template: '<FeedPostSummaryItem v-bind="args" />',
})
Default.args = {
  author: {
    name: 'TheBaronless',
    avatar: 'https://picsum.photos/50',
  },
  postType: AvailableFeedPostType.userShareSong,
}
