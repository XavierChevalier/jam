import HomeFrequentlyListenedShortcuts from './HomeFrequentlyListenedShortcuts.vue'
import { Meta, Story } from '@storybook/vue3'
import HomeFrequentlyListenedShortcut from '@/app/modules/home/components/molecules/HomeFrequentlyListenedShortcut.vue'
import { Default as HomeItem } from '@/app/modules/home/components/molecules/HomeFrequentlyListenedShortcut.stories'
import { omit } from 'lodash-es'

export default {
  title: 'Organisms/Home/HomeFrequentlyListenedShortcuts',
  component: HomeFrequentlyListenedShortcuts,
  subcomponents: {
    HomeFrequentlyListenedShortcut,
  },
} as Meta

const Template: Story = (args) => ({
  components: {
    HomeFrequentlyListenedShortcuts,
    HomeFrequentlyListenedShortcut,
  },
  setup() {
    return { args: omit(args, ['items']), items: args.items }
  },
  template: `
    <HomeFrequentlyListenedShortcuts v-bind="args">
      <HomeFrequentlyListenedShortcut v-for="itemArgs in items" :image-url="itemArgs.imageUrl">
        {{ itemArgs.slots.default }}
      </HomeFrequentlyListenedShortcut>  
    </HomeFrequentlyListenedShortcuts>
  `,
})

export const Default = Template.bind({})
Default.args = {
  items: [...Array(4)].map(() => HomeItem.args),
}
