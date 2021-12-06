import HomeFrequentlyListenedShortcut from './HomeFrequentlyListenedShortcut.vue'
import { Meta, Story } from '@storybook/vue3'
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
