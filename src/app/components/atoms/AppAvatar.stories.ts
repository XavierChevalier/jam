import AppAvatar from './AppAvatar.vue'
import { Meta, Story } from '@storybook/vue3'
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
