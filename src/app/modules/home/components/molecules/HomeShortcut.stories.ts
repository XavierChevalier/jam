import HomeShortcut from './HomeShortcut.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { omit } from 'lodash-es'

export default {
  title: 'Molecules/Home/HomeShortcut',
  component: HomeShortcut,
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
} as Meta

const Template: Story = (args) => ({
  components: { HomeShortcut },
  setup() {
    return { args: omit(args, ['slots']), slots: args.slots }
  },
  template: `<HomeShortcut v-bind="args">{{ slots.default }}</HomeShortcut>`,
})

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://picsum.photos/50',
  slots: {
    default: 'Liked songs',
  },
}
