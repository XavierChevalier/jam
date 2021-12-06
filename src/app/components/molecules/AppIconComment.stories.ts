import AppIconComment from './AppIconComment.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Molecules/AppIconComment',
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
