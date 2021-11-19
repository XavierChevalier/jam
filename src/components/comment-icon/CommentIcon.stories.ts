import CommentIcon from './CommentIcon.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Components/CommentIcon',
  component: CommentIcon,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { CommentIcon },
  setup() {
    return { args }
  },
  template: '<CommentIcon v-bind="args" />',
})

export const JustCommentIcon = Template.bind({})
JustCommentIcon.args = {}

export const CommentIconWithCounter = Template.bind({})
CommentIconWithCounter.args = {
  showCounter: true,
  counter: 10,
}
