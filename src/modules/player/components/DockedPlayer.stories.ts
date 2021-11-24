import DockedPlayer from './DockedPlayer.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Player/DockedPlayer',
  component: DockedPlayer,
} as Meta

const Template: Story = (args) => ({
  components: { DockedPlayer },
  setup() {
    return { args }
  },
  template: '<DockedPlayer v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  track: {
    cover: 'https://picsum.photos/50',
    title: 'ANSI.SYS',
    bands: ['MASTER BOOT RECORD'],
    durationMs: 186_000,
  },
}
