import AppIcon from './AppIcon.vue'
import {
  Alert,
  MusicVideo,
  SmallSpeechOutline,
  SpeechOutline,
} from '@/app/components/AppIcon.stories'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import { MdiExtra, mdiSpeechOutline } from '@/assets/images/icons/MdiExtra'
import { mdiAlert } from '@mdi/js'
import { omit } from 'lodash-es'

describe('AppIcon', () => {
  generateStorybookSnapshotTests({
    Alert,
    SpeechOutline,
    SmallSpeechOutline,
    MusicVideo,
  })

  const componentTestsGenerator = new ComponentTestsGenerator(AppIcon)
  componentTestsGenerator.itShouldBeDefined()

  const icon: MdiExtra = {
    viewBox: '0 0 452.000000 452.000000',
    transform: 'translate(0.000000,452.000000)',
    path: 'M2006 4129 c-434 -56 -842',
  }
  componentTestsGenerator
    .property<MdiExtra>('path')
    .itShouldBeDefined()
    .itShouldBeRequired()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(mdiAlert)
    .itShouldSuccessWith(mdiSpeechOutline)
    .itShouldSuccessWith(omit(icon, ['viewBox']))
    .itShouldSuccessWith(omit(icon, ['transform']))
    .itShouldFailWith('empty string', '')
    .itShouldFailWith('number', 1)
    .itShouldFailWith('missing path', omit(icon, ['path']))

  componentTestsGenerator
    .property<string>('size')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith('sm')
    .itShouldSuccessWith('base')
    .itShouldSuccessWith('lg')
    .itShouldSuccessWith('xl')
    .itShouldFailWith('unknown size type', 'unknown')

  componentTestsGenerator.generateTests()
})
