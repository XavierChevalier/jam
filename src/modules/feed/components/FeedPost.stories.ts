import FeedPost from './FeedPost.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Feed/Components/FeedPost',
  component: FeedPost,
} as Meta

const Template: Story = (args) => ({
  components: { FeedPost },
  setup() {
    return { args }
  },
  template: '<FeedPost v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  author: {
    name: 'TheBaronless',
    avatar: 'https://picsum.photos/50',
  },
  content: 'Lorem ipsum',
  numberOfLikes: 10,
  publicationDate: new Date(),
}
