import AppDotSeparator from './AppDotSeparator.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Atoms/AppDotSeparator',
  component: AppDotSeparator,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { AppDotSeparator },
  setup() {
    return { args }
  },
  template: '<AppDotSeparator v-bind="args" />',
})

export const Default = Template.bind({})
