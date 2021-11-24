import DotSeparator from './DotSeparator.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Components/DotSeparator',
  component: DotSeparator,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: {DotSeparator},
  setup() {
    return {args}
  },
  template: '<DotSeparator v-bind="args" />',
})

export const Default = Template.bind({})
