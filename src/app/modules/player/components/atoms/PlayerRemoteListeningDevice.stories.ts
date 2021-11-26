import PlayerRemoteListeningDevice from './PlayerRemoteListeningDevice.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'

export default {
  title: 'Player/Atoms/PlayerRemoteListeningDevice',
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
