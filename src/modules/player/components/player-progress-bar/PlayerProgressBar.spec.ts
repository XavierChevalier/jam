import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import {
  Progress0,
  Progress100,
  Progress42,
  Progress50,
} from './PlayerProgressBar.stories'
import { generatePropertyValidationTests } from '@/tests/tools/PropsValidator'
import PlayerProgressBar from './PlayerProgressBar.vue'
import {
  fcNotPositiveNumber,
  fcPositiveNumberIncluding0,
} from '@/tests/tools/FastCheckProperties'

describe('PlayerProgressBar', () => {
  generateStorybookSnapshotTests({
    Progress0,
    Progress42,
    Progress50,
    Progress100,
  })

  generatePropertyValidationTests(PlayerProgressBar)
    .forProperty('progress')
    .states({
      valid: fcPositiveNumberIncluding0,
      invalid: fcNotPositiveNumber,
    })
})
