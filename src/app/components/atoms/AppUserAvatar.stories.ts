import AppUserAvatar from './AppUserAvatar.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Atoms/AppUserAvatar',
  component: AppUserAvatar,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { AppUserAvatar },
  setup() {
    return { args }
  },
  template: '<AppUserAvatar v-bind="args" />',
})

export const PicsumPhoto = Template.bind({})
PicsumPhoto.args = {
  userName: 'TheBaronless',
  url: 'https://picsum.photos/50',
}
