import Icon from './Icon.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { mdiAlert } from '@mdi/js'
import { mdiMusicVideo, mdiSpeechOutline } from '@/assets/images/icons/MdiExtra'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { Icon },
  setup() {
    return { args }
  },
  template: '<Icon v-bind="args" />',
})

export const Alert = Template.bind({})
Alert.args = {
  path: mdiAlert,
}

export const SpeechOutline = Template.bind({})
SpeechOutline.args = {
  path: mdiSpeechOutline,
}

export const SmallSpeechOutline = Template.bind({})
SmallSpeechOutline.args = {
  path: mdiSpeechOutline,
  size: 'sm',
}

export const MusicVideo = Template.bind({})
MusicVideo.args = {
  path: mdiMusicVideo,
}
