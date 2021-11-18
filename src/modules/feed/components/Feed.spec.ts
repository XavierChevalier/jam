import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/modules/feed/components/Feed.stories'

describe('Feed', () => {
  generateStorybookSnapshotTests({ Default })
})
