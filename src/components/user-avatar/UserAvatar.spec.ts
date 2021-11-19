import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { PicsumPhoto } from '@/components/user-avatar/UserAvatar.stories'
import UserAvatar from './UserAvatar.vue'
import fc from 'fast-check'
import { fcNotUrl } from '@/tests/tools/FastCheckProperties'
import { generatePropertyValidationTests } from '@/tests/tools/PropsValidator'

describe('UserAvatar', () => {
  generateStorybookSnapshotTests({ PicsumPhoto })

  generatePropertyValidationTests(UserAvatar).forProperty('url').states({
    valid: fc.webUrl(),
    invalid: fcNotUrl,
  })
})
