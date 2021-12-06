import AppIconLike from './AppIconLike.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Molecules/AppIconLike',
  component: AppIconLike,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { AppIconLike },
  setup() {
    return { args }
  },
  template: '<AppIconLike v-bind="args" />',
})

export const JustUnlikedIcon = Template.bind({})
JustUnlikedIcon.args = {}

export const JustLikedIcon = Template.bind({})
JustLikedIcon.args = {
  liked: true,
}

export const UnlikedIconWithCounter = Template.bind({})
UnlikedIconWithCounter.args = {
  liked: false,
  showCounter: true,
  counter: 10,
}

export const LikedIconWithCounter = Template.bind({})
LikedIconWithCounter.args = {
  liked: true,
  showCounter: true,
  counter: 10,
}
