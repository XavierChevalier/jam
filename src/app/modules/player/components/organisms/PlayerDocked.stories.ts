import PlayerDocked from './PlayerDocked.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Organisms/Player/PlayerDocked',
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
  cover: generateImageUrl(),
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
