import FeedTrack from './FeedTrack.vue'
import fc from 'fast-check'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/modules/feed/components/feed-track/FeedTrack.stories'
import {
  fcNotPositiveNumber,
  fcNotString,
  fcNotUrl,
  fcPositiveNumber,
} from '@/tests/tools/FastCheckProperties'
import { generatePropertyValidationTests } from '@/tests/tools/PropsValidator'

describe('FeedTrack', () => {
  generateStorybookSnapshotTests({ Default })

  generatePropertyValidationTests(FeedTrack)
    .forProperty('cover')
    .states({
      valid: fc.webUrl(),
      invalid: fcNotUrl,
    })
    .forProperty('bands')
    .states({
      valid: fc.array(fc.string()),
      invalid: fc.array(fcNotString, { minLength: 1 }),
    })
    .forProperty('durationMs')
    .states({
      valid: fcPositiveNumber,
      invalid: fcNotPositiveNumber,
    })
})
