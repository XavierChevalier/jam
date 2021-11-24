import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import CommentIcon from './CommentIcon.vue'
import {
  CommentIconWithCounter,
  JustCommentIcon,
} from '@/components/comment-icon/CommentIcon.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('CommentIcon', () => {
  generateStorybookSnapshotTests({ JustCommentIcon, CommentIconWithCounter })

  new ComponentTestsGenerator(CommentIcon)
    .itShouldBeDefined()
    .property<number>('counter')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(0)
    .itShouldSuccessWith(10)
    .itShouldFailWith('negative number', -1)
})
