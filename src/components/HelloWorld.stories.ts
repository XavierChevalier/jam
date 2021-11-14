import HelloWorld from './HelloWorld.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
}

const Template: Story<typeof HelloWorld> = (args) => ({
  components: { HelloWorld },
  setup() {
    return { args }
  },
  template: '<HelloWorld v-bind="args" />',
})

export const Default = Template.bind({})
