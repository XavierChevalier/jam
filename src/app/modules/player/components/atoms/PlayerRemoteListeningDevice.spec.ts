import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { ListeningOnDesktop } from './PlayerRemoteListeningDevice.stories'
import PlayerRemoteListeningDevice from './PlayerRemoteListeningDevice.vue'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'

describe('PlayerRemoteListeningDevice', () => {
  generateStorybookSnapshotTests({ ListeningOnDesktop })

  const componentTests = new ComponentTestsGenerator(
    PlayerRemoteListeningDevice
  )
  componentTests.itShouldBeDefined()

  componentTests
    .property<string>('remoteDeviceName')
    .itShouldBeDefined()
    .itShouldBeRequired()
    .itShouldBeTypeOf(String)

  componentTests.generateTests()
})
