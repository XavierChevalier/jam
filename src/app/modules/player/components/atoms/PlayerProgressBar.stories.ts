import PlayerProgressBar from './PlayerProgressBar.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Atoms/Player/PlayerProgressBar',
  component: PlayerProgressBar,
} as Meta

const Template: Story = (args) => ({
  components: { PlayerProgressBar },
  setup() {
    return { args }
  },
  template: '<PlayerProgressBar v-bind="args" />',
})

export const Progress0 = Template.bind({})
Progress0.args = {
  progress: 0,
}

export const Progress42 = Template.bind({})
Progress42.args = {
  progress: 42,
}

export const Progress50 = Template.bind({})
Progress50.args = {
  progress: 50,
}

export const Progress100 = Template.bind({})
Progress100.args = {
  progress: 100,
}
