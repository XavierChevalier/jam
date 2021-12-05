import * as Stories from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.stories'
import { Album } from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.stories'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import { shallowMount } from '@vue/test-utils'

describe('PlaylistShortcutItem', () => {
  const component = StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<string>('cover', (property) => {
      property.itShouldBeDefined().itShouldBeRequired().itShouldBeTypeOf(String)
    })
    .property<string>('title', (property) => {
      property.itShouldBeDefined().itShouldBeRequired().itShouldBeTypeOf(String)
    })
    .property<string>('description', (property) => {
      property.itShouldBeDefined().itShouldBeRequired().itShouldBeTypeOf(String)
    })
    .getComponent()

  const wrapper = shallowMount(component, { props: Album.args })
  it('should display the cover image', () => {
    const coverElement = wrapper.find('img')
    expect(coverElement.attributes('src')).toContain(wrapper.props('cover'))
    expect(coverElement.attributes('alt')).toContain(wrapper.props('title'))
  })

  it('should display the title text', () => {
    expect(wrapper.text()).toContain(wrapper.props('title'))
  })

  it('should display the description text', () => {
    expect(wrapper.text()).toContain(wrapper.props('description'))
  })
})
