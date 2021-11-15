import { mount } from '@vue/test-utils'
import Icon from './Icon.vue'
import { mdiAlert } from '@mdi/js'

describe('Icon', () => {
  function mountComponent(props: object = {}) {
    return mount(Icon, {
      props: {
        path: mdiAlert,
        ...props,
      },
    })
  }

  it('should render the mdiAlert icon', () => {
    const path = mdiAlert
    const wrapper = mountComponent({ path })

    expect(wrapper.vm.path).toStrictEqual(path)
    expect(wrapper.find('[data-test="iconPath"]').attributes().d).toStrictEqual(
      path
    )
  })
})
