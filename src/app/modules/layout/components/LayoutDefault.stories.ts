import LayoutDefault from './LayoutDefault.vue'
import { Meta, Story } from '@storybook/vue3'
import Home from '@/app/modules/home/components/templates/Home.vue'

export default {
  title: 'Layouts/LayoutDefault',
  component: LayoutDefault,
  parameters: {
    layout: 'none',
  },
} as Meta

const Template: Story = (args) => ({
  components: { LayoutDefault, Home },
  setup() {
    return { args }
  },
  template: `
    <LayoutDefault v-bind="args">
      <Home />
    </LayoutDefault>
  `,
})

export const Default = Template.bind({})
