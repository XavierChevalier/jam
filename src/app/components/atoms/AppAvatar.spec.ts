import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { PicsumPhoto } from './AppAvatar.stories'
import AppAvatar from './AppAvatar.vue'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('AppAvatar', () => {
  generateStorybookSnapshotTests({ PicsumPhoto })

  const componentTestsGenerator = new ComponentTestsGenerator(AppAvatar)
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
