import AppIcon from './AppIcon.vue'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import * as AllMdiExtra from '@/assets/images/icons/MdiExtra'
import { MdiExtra } from '@/assets/images/icons/MdiExtra'
import { mdiAlert } from '@mdi/js'
import { omit } from 'lodash-es'
import { shallowMount } from '@vue/test-utils'

const allIcons: Record<string, MdiExtra> = {
  mdiAlert,
  ...omit(AllMdiExtra, ['MdiExtra']),
}
const icons = Object.keys(allIcons).map((iconName) => ({
  name: iconName,
  path: allIcons[iconName],
}))

describe('AppIcon', () => {
  const componentTestsGenerator = new ComponentTestsGenerator(AppIcon)
  componentTestsGenerator.itShouldBeDefined()

  componentTestsGenerator
    .property<string>('size')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith('sm')
    .itShouldSuccessWith('base')
    .itShouldSuccessWith('lg')
    .itShouldSuccessWith('xl')
    .itShouldFailWith('unknown size type', 'unknown')

  const icon: MdiExtra = {
    viewBox: '0 0 452.000000 452.000000',
    transform: 'translate(0.000000,452.000000)',
    path: 'M2006 4129 c-434 -56 -842',
  }
  const pathPropertyTestsGenerator = componentTestsGenerator
    .property<MdiExtra>('path')
    .itShouldBeDefined()
    .itShouldBeRequired()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(omit(icon, ['viewBox']))
    .itShouldSuccessWith(omit(icon, ['transform']))
    .itShouldFailWith('empty string', '')
    .itShouldFailWith('number', 1)
    .itShouldFailWith('missing path', omit(icon, ['path']))

  icons.forEach((icon) => {
    pathPropertyTestsGenerator.itShouldSuccessWith(
      `icon "${icon.name}"`,
      icon.path
    )

    it(`[snapshot] should render the icon "${icon.name}" correctly`, () => {
      const component = shallowMount({
        components: { AppIcon },
        setup() {
          return { args: { path: icon.path } }
        },
        template: '<AppIcon v-bind="args" />',
      })

      expect(component.element).toMatchSnapshot()
    })
  })

  componentTestsGenerator.generateTests()
})
