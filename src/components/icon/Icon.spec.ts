import { Alert } from '@/components/icon/Icon.stories'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'

describe('Icon', () => {
  generateStorybookSnapshotTests({ Alert })
})
