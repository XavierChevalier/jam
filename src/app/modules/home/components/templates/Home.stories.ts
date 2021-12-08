import Home from './Home.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Templates/Home/Home',
  component: Home,
} as Meta

const Template: Story = (args) => ({
  components: { Home },
  setup() {
    return { args }
  },
  template: `<Home v-bind="args" />`,
})

export const Default = Template.bind({})
