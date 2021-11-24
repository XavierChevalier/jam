import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import IconComment from './IconComment.vue'
import { IconCommentWithCounter, JustIconComment, } from '@/components/IconComment.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('IconComment', () => {
  generateStorybookSnapshotTests({ JustIconComment, IconCommentWithCounter })

  new ComponentTestsGenerator(IconComment)
    .itShouldBeDefined()
    .property<number>('counter')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(0)
    .itShouldSuccessWith(10)
    .itShouldFailWith('negative number', -1)
})
