import LikeIcon from './LikeIcon.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Components/LikeIcon',
  component: LikeIcon,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { LikeIcon },
  setup() {
    return { args }
  },
  template: '<LikeIcon v-bind="args" />',
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
