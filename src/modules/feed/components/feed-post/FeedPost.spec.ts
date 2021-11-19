import FeedPost from './FeedPost.vue'
import fc from 'fast-check'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import {
  Default,
  WithTrack,
} from '@/modules/feed/components/feed-post/FeedPost.stories'
import { fcNotString, fcNotUrl } from '@/tests/tools/FastCheckProperties'
import { generatePropertyValidationTests } from '@/tests/tools/PropsValidator'

describe('FeedPost', () => {
  generateStorybookSnapshotTests({ Default, WithTrack })

  generatePropertyValidationTests(FeedPost)
    .forProperty('author')
    .states({
      valid: fc.record({
        name: fc.string(),
        avatar: fc.webUrl(),
      }),
      invalid: fc.record({
        name: fcNotString,
        avatar: fcNotUrl,
      }),
    })
})
