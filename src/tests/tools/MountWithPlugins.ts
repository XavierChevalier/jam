import { mount, MountingOptions, shallowMount } from '@vue/test-utils'
import { i18n } from '@/plugins/VueI18n'
import { merge } from 'lodash-es'

function getMountingOptions(options: MountingOptions<unknown> = {}) {
  return merge({ global: { plugins: [i18n] } }, options)
}

export const shallowMountWithPlugins: typeof shallowMount = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  options
) => {
  return shallowMount(component, getMountingOptions(options))
}

export const mountWithPlugins: typeof mount = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  options
) => {
  return mount(component, getMountingOptions(options))
}
