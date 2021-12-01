import { shallowMount } from '@vue/test-utils'
import { i18n } from '@/plugins/VueI18n'
import { merge } from 'lodash-es'

export const shallowMountWithPlugins: typeof shallowMount = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  options
) => {
  return shallowMount(
    component,
    merge(
      {
        global: {
          plugins: [i18n],
        },
      },
      options || {}
    )
  )
}
