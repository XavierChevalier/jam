import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { PicsumPhoto } from '@/components/UserAvatar.stories'
import UserAvatar from './UserAvatar.vue'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('UserAvatar', () => {
  generateStorybookSnapshotTests({ PicsumPhoto })

  const componentTestsGenerator = new ComponentTestsGenerator(UserAvatar)
  componentTestsGenerator.itShouldBeDefined()

  componentTestsGenerator
    .property<string>('url')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith('https://picsum.photos/50')
    .itShouldFailWith('empty string', '')
    .itShouldFailWith('null', null)

  componentTestsGenerator.generateTests()
})
