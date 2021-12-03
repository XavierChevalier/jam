import HomeFrequentlyListenedShortcut from './HomeFrequentlyListenedShortcut.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { omit } from 'lodash-es'
import { generateImageUrl } from '@/app/tools/Faker'

export default {
  title: 'Molecules/Home/HomeFrequentlyListenedShortcut',
  component: HomeFrequentlyListenedShortcut,
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
} as Meta

const Template: Story = (args) => ({
  components: { HomeFrequentlyListenedShortcut },
  setup() {
    return { args: omit(args, ['slots']), slots: args.slots }
  },
  template: `<HomeFrequentlyListenedShortcut v-bind="args">{{ slots.default }}</HomeFrequentlyListenedShortcut>`,
})

export const Default = Template.bind({})
Default.args = {
  imageUrl: generateImageUrl(),
  slots: {
    default: 'Liked songs',
  },
}
