import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import LikedIcon from './LikeIcon.vue'
import {
  JustLikedIcon,
  JustUnlikedIcon,
  LikedIconWithCounter,
  UnlikedIconWithCounter,
} from '@/components/like-icon/LikeIcon.stories'
import { generatePropertyValidationTests } from '@/tests/tools/PropsValidator'
import {
  fcNotPositiveNumber,
  fcPositiveNumber,
} from '@/tests/tools/FastCheckProperties'

describe('LikeIcon', () => {
  generateStorybookSnapshotTests({
    JustUnlikedIcon,
    JustLikedIcon,
    UnlikedIconWithCounter,
    LikedIconWithCounter,
  })

  generatePropertyValidationTests(LikedIcon).forProperty('counter').states({
    valid: fcPositiveNumber,
    invalid: fcNotPositiveNumber,
  })
})
