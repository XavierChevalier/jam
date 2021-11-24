import IconComment from './IconComment.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Components/IconComment',
  component: IconComment,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { IconComment },
  setup() {
    return { args }
  },
  template: '<IconComment v-bind="args" />',
})

export const JustIconComment = Template.bind({})
JustIconComment.args = {}

export const IconCommentWithCounter = Template.bind({})
IconCommentWithCounter.args = {
  showCounter: true,
  counter: 10,
}
