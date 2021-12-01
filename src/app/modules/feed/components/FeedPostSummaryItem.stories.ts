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

const Template: Story = (args) => ({
  components: { FeedPostSummaryItem },
  setup() {
    return { args }
  },
  template: '<FeedPostSummaryItem v-bind="args" />',
})
const commonProps = {
  publicationDate: new Date(),
  author: {
    name: 'TheBaronless',
    avatar: 'https://picsum.photos/50',
  },
}

export const UserShareSong = Template.bind({})
UserShareSong.args = {
  ...commonProps,
  postType: AvailableFeedPostType.userShareSong,
}
export const UserShareAlbum = Template.bind({})
UserShareAlbum.args = {
  ...commonProps,
  postType: AvailableFeedPostType.userShareAlbum,
}
export const UserSharePlaylist = Template.bind({})
UserSharePlaylist.args = {
  ...commonProps,
  postType: AvailableFeedPostType.userSharePlaylist,
}
export const ArtistReleaseSong = Template.bind({})
ArtistReleaseSong.args = {
  ...commonProps,
  postType: AvailableFeedPostType.artistReleaseSong,
}
export const ArtistReleaseAlbum = Template.bind({})
ArtistReleaseAlbum.args = {
  ...commonProps,
  postType: AvailableFeedPostType.artistReleaseAlbum,
}
