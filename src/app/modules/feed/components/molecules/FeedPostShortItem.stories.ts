import FeedPostShortItem from './FeedPostShortItem.vue'
import { Meta, Story } from '@storybook/vue3'
import { AvailableFeedPostType } from '@/app/modules/feed/models/FeedPostType'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Molecules/Feed/FeedPostShortItem',
  component: FeedPostShortItem,
} as Meta

const Template: Story = (args) => ({
  components: { FeedPostShortItem },
  setup() {
    return { args }
  },
  template: '<FeedPostShortItem v-bind="args" />',
})
const commonProps = {
  publicationDate: new Date(),
  author: {
    name: 'TheBaronless',
    avatar: generateImageUrl(),
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
