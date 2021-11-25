import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import {
  Progress0,
  Progress100,
  Progress42,
  Progress50,
} from './PlayerProgressBar.stories'
import PlayerProgressBar from './PlayerProgressBar.vue'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('PlayerProgressBar', () => {
  generateStorybookSnapshotTests({
    Progress0,
    Progress42,
    Progress50,
    Progress100,
  })

  const componentTests = new ComponentTestsGenerator(PlayerProgressBar)
  componentTests.itShouldBeDefined()

  componentTests
    .property<number>('progress')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(0)
    .itShouldSuccessWith(1)
    .itShouldFailWith('negative number', -1)

  componentTests.generateTests()
})
