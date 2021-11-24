import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import LikedIcon from './LikeIcon.vue'
import {
  JustLikedIcon,
  JustUnlikedIcon,
  LikedIconWithCounter,
  UnlikedIconWithCounter,
} from '@/components/like-icon/LikeIcon.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('LikeIcon', () => {
  generateStorybookSnapshotTests({
    JustUnlikedIcon,
    JustLikedIcon,
    UnlikedIconWithCounter,
    LikedIconWithCounter,
  })

  const componentTestsGenerator = new ComponentTestsGenerator(LikedIcon)
  componentTestsGenerator.itShouldBeDefined()

  componentTestsGenerator
    .property<number>('counter')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(0)
    .itShouldSuccessWith(1)
    .itShouldFailWith('negative number', -1)
    .itShouldFailWith('null', null)

  componentTestsGenerator.generateTests()
})
