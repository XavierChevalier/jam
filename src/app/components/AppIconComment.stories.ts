import AppIconComment from './AppIconComment.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Components/AppIconComment',
  component: AppIconComment,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { AppIconComment },
  setup() {
    return { args }
  },
  template: '<AppIconComment v-bind="args" />',
})

export const JustIconComment = Template.bind({})
JustIconComment.args = {}

export const IconCommentWithCounter = Template.bind({})
IconCommentWithCounter.args = {
  showCounter: true,
  counter: 10,
}
