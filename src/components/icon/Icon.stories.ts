import Icon from './Icon.vue'
import { Story } from '@storybook/vue3'
import '@/assets/styles/index.scss'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { mdiAlert } from '@mdi/js'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Icon>

const Template: Story<typeof Icon> = (args) => ({
  components: { Icon },
  setup() {
    return { args }
  },
  template: '<Icon size="90" v-bind="args" />',
})

export const Alert = Template.bind({})
Alert.args = {
  path: mdiAlert,
}
