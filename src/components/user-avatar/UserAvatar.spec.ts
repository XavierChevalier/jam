import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { PicsumPhoto } from '@/components/user-avatar/UserAvatar.stories'
import UserAvatar from './UserAvatar.vue'
import { getPropertyValidator } from '@/tests/tools/PropsValidator'
import fc from 'fast-check'
import { fcNotUrl } from '@/tests/tools/FastCheckProperties'

describe('UserAvatar', () => {
  generateStorybookSnapshotTests({ PicsumPhoto })

  describe('avatar url validation', () => {
    const validator = getPropertyValidator(UserAvatar, 'url')

    test(`GIVEN ANY valid url
    WHEN we validate it
    THEN it SHOULD ALWAYS be valid
    `, () => {
      fc.assert(fc.property(fc.webUrl(), (author) => validator(author)))
    })

    test(`GIVEN ANY invalid url
    WHEN we validate it
    THEN it SHOULD ALWAYS be invalid
    `, () => {
      fc.assert(fc.property(fcNotUrl, (author) => !validator(author)))
    })
  })
})
