import NavigationBar from './NavigationBar.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

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
