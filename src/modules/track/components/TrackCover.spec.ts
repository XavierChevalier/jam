import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/modules/track/components/TrackCover.stories'

describe('TrackCover', () => {
  generateStorybookSnapshotTests({ Default })
})
