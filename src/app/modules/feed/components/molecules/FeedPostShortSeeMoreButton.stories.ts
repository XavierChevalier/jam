import FeedPostShortSeeMoreButton from './FeedPostShortSeeMoreButton.vue'
import { Story } from '@storybook/vue3'
import { Meta } from '@storybook/vue3/dist/ts3.9/client/preview/types-6-0'
import { omit } from 'lodash-es'

export default {
  title: 'Molecules/Feed/FeedPostShortSeeMoreButton',
  component: FeedPostShortSeeMoreButton,
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
} as Meta

const Template: Story = (args) => ({
  components: { FeedPostShortSeeMoreButton },
  setup() {
    return { args, omit }
  },
  template: `<FeedPostShortSeeMoreButton v-bind="args"/>`,
})

export const Default = Template.bind({})
Default.args = {}
