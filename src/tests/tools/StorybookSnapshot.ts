import { Story as StorybookStory, StoryContext } from '@storybook/vue3'
import { ComponentOptionsWithObjectProps } from 'vue'
import { mount } from '@vue/test-utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StorybookStory<any>
type StoryName = string
type Stories = Record<StoryName, Story>

function createComponentFromStory(story: Story) {
  return story(
    story.args,
    {} as StoryContext
  ) as ComponentOptionsWithObjectProps
}

function generateStorybookSnapshotTest(storyName: StoryName, story: Story) {
  it(`should render the "${storyName}" component correctly`, () => {
    const wrapper = mount(createComponentFromStory(story))

    expect(wrapper.element).toMatchSnapshot()
  })
}

export function generateStorybookSnapshotTests(stories: Stories) {
  Object.keys(stories).forEach((storyName) =>
    generateStorybookSnapshotTest(storyName, stories[storyName])
  )
}
