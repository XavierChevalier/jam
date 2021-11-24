import Icon from './Icon.vue'
import { Alert, SpeechOutline } from '@/components/Icon.stories'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import { MdiExtra, mdiSpeechOutline } from '@/assets/images/icons/MdiExtra'
import { mdiAlert } from '@mdi/js'
import { omit } from 'lodash-es'

describe('Icon', () => {
  generateStorybookSnapshotTests({ Alert, SpeechOutline })

  const componentTestsGenerator = new ComponentTestsGenerator(Icon)
  componentTestsGenerator.itShouldBeDefined()

  const icon = {
    viewBox: '0 0 452.000000 452.000000',
    transform: 'translate(0.000000,452.000000)',
    path: 'M2006 4129 c-434 -56 -842',
  }
  componentTestsGenerator
    .property<MdiExtra>('path')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(mdiAlert)
    .itShouldSuccessWith(mdiSpeechOutline)
    .itShouldSuccessWith(omit(icon, ['viewBox']))
    .itShouldSuccessWith(omit(icon, ['transform']))
    .itShouldFailWith('empty string', '')
    .itShouldFailWith('number', 1)
    .itShouldFailWith('missing path', omit(icon, ['path']))

  componentTestsGenerator.generateTests()
})
