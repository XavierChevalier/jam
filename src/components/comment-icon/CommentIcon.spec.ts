import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import CommentIcon from './CommentIcon.vue'
import {
  CommentIconWithCounter,
  JustCommentIcon,
} from '@/components/comment-icon/CommentIcon.stories'
import { generatePropertyValidationTests } from '@/tests/tools/PropsValidator'
import {
  fcNotPositiveNumber,
  fcPositiveNumber,
} from '@/tests/tools/FastCheckProperties'

describe('CommentIcon', () => {
  generateStorybookSnapshotTests({ JustCommentIcon, CommentIconWithCounter })

  generatePropertyValidationTests(CommentIcon).forProperty('counter').states({
    valid: fcPositiveNumber,
    invalid: fcNotPositiveNumber,
  })
})
