import FeedPost from './FeedPost.vue'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import {
  Default,
  WithTrack,
} from '@/modules/feed/components/feed-post/FeedPost.stories'

describe('FeedPost', () => {
  generateStorybookSnapshotTests({ Default, WithTrack })

  describe('author validation', () => {
    const validator = FeedPost.props.author?.validator
    it('should be defined', () => {
      expect(validator).toBeDefined()
    })

    describe.each`
      description                        | author
      ${'Empty author'}                  | ${{}}
      ${'Author with only a name'}       | ${{ name: 'TheBaronless' }}
      ${'Author with only an avatar'}    | ${{ avatar: 'https://picsum.photos/50' }}
      ${'Author with an integer avatar'} | ${{ avatar: 1 }}
      ${'Author with an non URL avatar'} | ${{ avatar: "it's just a string" }}
    `('$description', ({ author }) => {
      test(`GIVEN ANY invalid author state
        WHEN we validate it
        THEN it SHOULD ALWAYS be invalid
      `, () => {
        expect(validator(author)).toBe(false)
      })
    })

    describe.each`
      description       | author
      ${'Valid author'} | ${{ name: 'TheBaronless', avatar: 'https://picsum.photos/50' }}
    `('$description', ({ author }) => {
      test(`GIVEN ANY valid author state
        WHEN we validate it
        THEN it SHOULD ALWAYS be valid
      `, () => {
        expect(validator(author)).toBe(true)
      })
    })
  })
})
