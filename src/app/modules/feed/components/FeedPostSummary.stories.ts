import FeedPostSummary from './FeedPostSummary.vue'
import FeedPostSummaryItem from './FeedPostSummaryItem.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { AvailableFeedPostType } from '@/app/modules/feed/models/FeedPostType'
import { omit } from 'lodash-es'

export default {
  title: 'Feed/FeedPostSummary',
  component: FeedPostSummary,
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
} as Meta

const Template: Story = (args) => ({
  components: { FeedPostSummary, FeedPostSummaryItem },
  setup() {
    return { args, omit }
  },
  template: `
    <FeedPostSummary v-bind="omit(args, ['feedSummaryItems'])">
      <FeedPostSummaryItem v-for="feedSummary in args.feedSummaryItems" v-bind="feedSummary" />
    </FeedPostSummary>
  `,
})

const now = new Date()
const oneHourBefore = new Date()
oneHourBefore.setHours(oneHourBefore.getHours() - 1)
const threeDaysBefore = new Date()
threeDaysBefore.setDate(threeDaysBefore.getDate() - 3)

export const With3Items = Template.bind({})
With3Items.args = {
  feedSummaryItems: [
    {
      publicationDate: now,
      postType: AvailableFeedPostType.userShareSong,
      author: {
        name: 'TheBaronless',
        avatar: 'https://picsum.photos/50',
      },
    },
    {
      publicationDate: oneHourBefore,
      postType: AvailableFeedPostType.artistReleaseAlbum,
      author: {
        name: 'John Gomm',
        avatar: 'https://picsum.photos/50?1',
      },
    },
    {
      publicationDate: threeDaysBefore,
      postType: AvailableFeedPostType.userSharePlaylist,
      author: {
        name: 'John Gomm',
        avatar: 'https://picsum.photos/50?2',
      },
    },
  ],
}
