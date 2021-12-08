import FeedPostShortSeeMoreButton from './FeedPostShortSeeMoreButton.vue'
import { Meta, Story } from '@storybook/vue3'
import { omit } from 'lodash-es'

export default {
  title: 'Molecules/Feed/FeedPostShortSeeMoreButton',
  component: FeedPostShortSeeMoreButton,
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
