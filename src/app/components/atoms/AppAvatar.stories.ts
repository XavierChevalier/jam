import AppAvatar from './AppAvatar.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Atoms/AppAvatar',
  component: AppAvatar,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { AppAvatar },
  setup() {
    return { args }
  },
  template: '<AppAvatar v-bind="args" />',
})

export const PicsumPhoto = Template.bind({})
PicsumPhoto.args = {
  userName: 'TheBaronless',
  url: generateImageUrl(),
}
