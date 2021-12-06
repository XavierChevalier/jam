import AppDotSeparator from './AppDotSeparator.vue'
import { Meta, Story } from '@storybook/vue3'

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
