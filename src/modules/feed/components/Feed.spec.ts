import { mount } from '@vue/test-utils'
import Feed from './Feed.vue'

describe('Feed', () => {
  it('should render correctly', () => {
    const wrapper = mount(Feed, {
      props: {
        author: 'TheBaronless',
        content: 'Lorem ipsum',
        numberOfLikes: 10,
        publicationDate: new Date(),
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
