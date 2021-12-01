import { Story as StorybookStory, StoryContext } from '@storybook/vue3'
import { ComponentOptionsWithObjectProps, ComponentPublicInstance } from 'vue'
import { VueWrapper } from '@vue/test-utils'
import { shallowMountWithPlugins } from '@/tests/tools/MountWithPlugins'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StorybookStory<any>
type StoryName = string
type Stories = Record<StoryName, Story>

const componentStoryWrapperId = 'COMPONENT_STORY_WRAPPER'

/**
 * When the component has multiple roots, the Test Utils view mount does not work due to these lines:
 * https://github.com/vuejs/vue-test-utils-next/pull/25/files#diff-d9b07d77210db99e8eeee31f78da22c8176251496ef6a9497a726bddf8f017a1R27-R30
 * Indeed, it tries to access the parent of the element to render it.
 * However, there is no parent in the case of a simple story.
 * To fix it, we wrap the template.
 */
function wrapTemplate(
  component: ComponentOptionsWithObjectProps
): ComponentOptionsWithObjectProps {
  return {
    ...component,
    template: `<div id="${componentStoryWrapperId}">${component.template}</div>`,
  }
}

function createComponentFromStory(story: Story) {
  const component = story(
    story.args,
    {} as StoryContext
  ) as ComponentOptionsWithObjectProps

  return wrapTemplate(component)
}

function getUnwrappedElement(wrapper: VueWrapper<ComponentPublicInstance>) {
  return wrapper.find(`#${componentStoryWrapperId} > *`).element
}

function generateStorybookSnapshotTest(storyName: StoryName, story: Story) {
  test(`[snapshot] should render the "${storyName}" component story correctly`, () => {
    const component = createComponentFromStory(story)
    const wrapper = shallowMountWithPlugins(component, {
      global: { stubs: component.components },
    })

    expect(getUnwrappedElement(wrapper)).toMatchSnapshot()
  })
}

export function generateStorybookSnapshotTests(stories: Stories) {
  Object.keys(stories).forEach((storyName) =>
    generateStorybookSnapshotTest(storyName, stories[storyName])
  )
}
