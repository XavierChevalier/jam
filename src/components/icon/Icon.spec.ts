import { mount } from '@vue/test-utils'
import Icon from './Icon.vue'
import { mdiAlert } from '@mdi/js'

describe('Icon', () => {
  it('should render the mdiAlert icon', () => {
    const wrapper = mount(Icon, {
      props: {
        path: mdiAlert,
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
