import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { PicsumPhoto } from './AppUserAvatar.stories'
import AppUserAvatar from './AppUserAvatar.vue'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('AppUserAvatar', () => {
  generateStorybookSnapshotTests({ PicsumPhoto })

  const componentTestsGenerator = new ComponentTestsGenerator(AppUserAvatar)
  componentTestsGenerator.itShouldBeDefined()

  componentTestsGenerator
    .property<string>('url')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith('https://picsum.photos/50')
    .itShouldFailWith('empty string', '')
    .itShouldFailWith('null', null)

  componentTestsGenerator
    .property<string>('size')
    .itShouldBeDefined()
    .itShouldHaveADefaultValue()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith('sm')
    .itShouldSuccessWith('base')
    .itShouldSuccessWith('lg')
    .itShouldFailWith('unknown size type', 'unknown')

  componentTestsGenerator.generateTests()
})
