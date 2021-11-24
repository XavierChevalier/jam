import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import {
  Default,
  ListeningOnDesktop,
} from '@/modules/player/components/PlayerDocked.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import PlayerDocked from '@/modules/player/components/PlayerDocked.vue'

describe('PlayerDocked', () => {
  generateStorybookSnapshotTests({ Default, ListeningOnDesktop })

  const componentTestsGenerator = new ComponentTestsGenerator(PlayerDocked)
  componentTestsGenerator.itShouldBeDefined()
  componentTestsGenerator
    .property<string>('remoteListeningDevice')
    .itShouldBeDefined()
    .itShouldNotBeRequired()
    .itShouldHaveADefaultValue()

  componentTestsGenerator.generateTests()
})
