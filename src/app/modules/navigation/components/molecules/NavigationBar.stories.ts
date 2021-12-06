import NavigationBar from './NavigationBar.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Molecules/Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    backgrounds: { default: 'true-white' },
    viewport: { defaultViewport: 'iphone6' },
  },
} as Meta

const Template: Story = (args) => ({
  components: { NavigationBar },
  setup() {
    return { args }
  },
  template: '<NavigationBar v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}
