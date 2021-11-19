import Feed from './Feed.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Feed/Components/Feed',
  component: Feed,
} as Meta

const Template: Story = (args) => ({
  components: { Feed },
  setup() {
    return { args }
  },
  template: '<Feed v-bind="args" />',
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
