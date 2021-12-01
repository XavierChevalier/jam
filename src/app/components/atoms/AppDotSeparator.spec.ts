import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from './AppDotSeparator.stories'

describe('AppDotSeparator', () => {
  generateStorybookSnapshotTests({ Default })
})
