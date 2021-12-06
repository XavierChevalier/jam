import PlayerRemoteListeningDevice from './PlayerRemoteListeningDevice.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Molecules/Player/PlayerRemoteListeningDevice',
  component: PlayerRemoteListeningDevice,
} as Meta

const Template: Story = (args) => ({
  components: { PlayerRemoteListeningDevice },
  setup() {
    return { args }
  },
  template: '<PlayerRemoteListeningDevice v-bind="args" />',
})

export const ListeningOnDesktop = Template.bind({})
ListeningOnDesktop.args = {
  remoteDeviceName: 'Desktop-B9M8G7J',
}
