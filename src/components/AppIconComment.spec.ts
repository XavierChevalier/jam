import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import AppIconComment from './AppIconComment.vue'
import {
  IconCommentWithCounter,
  JustIconComment,
} from '@/components/AppIconComment.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('AppIconComment', () => {
  generateStorybookSnapshotTests({ JustIconComment, IconCommentWithCounter })

  new ComponentTestsGenerator(AppIconComment)
    .itShouldBeDefined()
    .property<number>('counter')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(0)
    .itShouldSuccessWith(10)
    .itShouldFailWith('negative number', -1)
})
