import { mount } from '@vue/test-utils'
import Feed from './Feed.vue'
import { subDays } from 'date-fns'

describe('Feed', () => {
  function mountComponent(props: object = {}) {
    return mount(Feed, {
      props: {
        author: 'TheBaronless',
        content: 'Lorem ipsum',
        numberOfLikes: 10,
        publicationDate: new Date(),
        ...props,
      },
    })
  }

  it('should render correctly', () => {
    const wrapper = mountComponent()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render the author name text', () => {
    const author = 'TheBaronless'
    const wrapper = mountComponent({ author })

    expect(wrapper.vm.author).toStrictEqual(author)
    expect(wrapper.find('[data-test="author"]').text()).toStrictEqual(author)
  })

  it('should render the feed content text', () => {
    const content = 'Lorem ipsum'
    const wrapper = mountComponent({ content })

    expect(wrapper.vm.content).toStrictEqual(content)
    expect(wrapper.find('[data-test="content"]').text()).toStrictEqual(content)
  })

  it('should render the publication date', () => {
    const publicationDate = subDays(new Date(), 2)
    const wrapper = mountComponent({ publicationDate })

    expect(wrapper.vm.publicationDate).toStrictEqual(publicationDate)
    expect(wrapper.find('[data-test="publicationDate"]').text()).toStrictEqual(
      '2 days ago'
    )
  })

  describe('likes', () => {
    it('should render the number of likes', () => {
      const numberOfLikes = 15
      const wrapper = mountComponent({ numberOfLikes })

      expect(wrapper.vm.numberOfLikes).toStrictEqual(numberOfLikes)
      expect(wrapper.find('[data-test="numberOfLikes"]').text()).toStrictEqual(
        numberOfLikes.toString()
      )
    })

    it('should render the heart icon', () => {
      const wrapper = mountComponent()

      expect(wrapper.find('[data-test="heart"]').exists()).toBeTruthy()
    })
  })
})
