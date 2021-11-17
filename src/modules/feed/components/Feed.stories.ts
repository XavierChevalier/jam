import Feed from './Feed.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Feed/Components/Feed',
  component: Feed,
} as Meta<typeof Feed>

const Template: Story<typeof Feed> = (args) => ({
  components: { Feed },
  setup() {
    return { args }
  },
  template: '<Feed v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  author: 'TheBaronless',
  content: 'Lorem ipsum',
  numberOfLikes: 10,
  publicationDate: new Date(),
}
