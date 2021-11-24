import PlayerDocked from './PlayerDocked.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Player/PlayerDocked',
  component: PlayerDocked,
} as Meta

const Template: Story = (args) => ({
  components: { PlayerDocked },
  setup() {
    return { args }
  },
  template: '<PlayerDocked v-bind="args" />',
})

const track = {
  cover: 'https://picsum.photos/50',
  title: 'ANSI.SYS',
  bands: ['MASTER BOOT RECORD'],
  durationMs: 186_000,
}
export const Default = Template.bind({})
Default.args = { track }

export const ListeningOnDesktop = Template.bind({})
ListeningOnDesktop.args = {
  track,
  remoteListeningDevice: 'Desktop-B9M8G7J',
}
