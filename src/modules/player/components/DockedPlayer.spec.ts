import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/modules/player/components/DockedPlayer.stories'

describe('DockedPlayer', () => {
  generateStorybookSnapshotTests({ Default })
})
