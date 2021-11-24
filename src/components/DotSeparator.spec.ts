import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from './DotSeparator.stories'

describe('DotSeparator', () => {
  generateStorybookSnapshotTests({Default})
})
