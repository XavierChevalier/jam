import UserAvatar from './UserAvatar.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Components/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { UserAvatar },
  setup() {
    return { args }
  },
  template: '<UserAvatar v-bind="args" />',
})

export const PicsumPhoto = Template.bind({})
PicsumPhoto.args = {
  userName: 'TheBaronless',
  url: 'https://picsum.photos/50',
}
