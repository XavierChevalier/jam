import Icon from './Icon.vue'
import { Alert, SpeechOutline } from '@/components/icon/Icon.stories'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { generatePropertyValidationTests } from '@/tests/tools/PropsValidator'
import fc from 'fast-check'
import { fcNotString } from '@/tests/tools/FastCheckProperties'

describe('Icon', () => {
  generateStorybookSnapshotTests({ Alert, SpeechOutline })

  generatePropertyValidationTests(Icon)
    .forProperty('path')
    .states({
      valid: fc.oneof(
        fc.string(),
        fc.record(
          {
            viewBox: fc.string(),
            transform: fc.string(),
            path: fc.string(),
          },
          { requiredKeys: ['path'] }
        )
      ),
      invalid: fc.oneof(
        fcNotString,
        fc.record({
          viewBox: fcNotString,
          transform: fcNotString,
          path: fcNotString,
        })
      ),
    })
})
