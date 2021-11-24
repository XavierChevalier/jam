import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import LikedIcon from './IconLike.vue'
import {
  JustLikedIcon,
  JustUnlikedIcon,
  LikedIconWithCounter,
  UnlikedIconWithCounter,
} from '@/components/IconLike.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('IconLike', () => {
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
