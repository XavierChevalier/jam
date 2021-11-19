import FeedPost from './FeedPost.vue'
import fc from 'fast-check'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import {
  Default,
  WithTrack,
} from '@/modules/feed/components/feed-post/FeedPost.stories'
import { fcNotString, fcNotUrl } from '@/tests/tools/FastCheckProperties'
import { getPropertyValidator } from '@/tests/tools/PropsValidator'

describe('FeedPost', () => {
  generateStorybookSnapshotTests({ Default, WithTrack })

  describe('author validation', () => {
    const validator = getPropertyValidator(FeedPost, 'author')

    test(`GIVEN ANY valid author state
    WHEN we validate it
    THEN it SHOULD ALWAYS be valid
    `, () => {
      const author = fc.record({
        name: fc.string(),
        avatar: fc.webUrl(),
      })
      fc.assert(fc.property(author, (author) => validator(author)))
    })

    test(`GIVEN ANY invalid author state
    WHEN we validate it
    THEN it SHOULD ALWAYS be invalid
    `, () => {
      const author = fc.record({
        name: fcNotString,
        avatar: fcNotUrl,
      })
      fc.assert(fc.property(author, (author) => !validator(author)))
    })
  })
})
