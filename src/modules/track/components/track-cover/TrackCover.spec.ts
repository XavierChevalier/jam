import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/modules/track/components/track-cover/TrackCover.stories'

describe('TrackCover', () => {
  generateStorybookSnapshotTests({ Default })
})
