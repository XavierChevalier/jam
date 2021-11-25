import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import AppIconLike from './AppIconLike.vue'
import {
  JustLikedIcon,
  JustUnlikedIcon,
  LikedIconWithCounter,
  UnlikedIconWithCounter,
} from '@/app/components/AppIconLike.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('AppIconLike', () => {
  generateStorybookSnapshotTests({
    JustUnlikedIcon,
    JustLikedIcon,
    UnlikedIconWithCounter,
    LikedIconWithCounter,
  })

  const componentTestsGenerator = new ComponentTestsGenerator(AppIconLike)
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
