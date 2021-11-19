import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { PicsumPhoto } from '@/components/user-avatar/UserAvatar.stories'
import UserAvatar from './UserAvatar.vue'

describe('UserAvatar', () => {
  generateStorybookSnapshotTests({ PicsumPhoto })

  describe('avatar url validation', () => {
    const validator = UserAvatar.props.url?.validator
    it('should be defined', () => {
      expect(validator).toBeDefined()
    })

    describe.each`
      description          | url
      ${'With an integer'} | ${1}
      ${'With an non URL'} | ${"it's just a string"}
    `('$description', ({ url }) => {
      test(`GIVEN ANY invalid url
        WHEN we validate it
        THEN it SHOULD ALWAYS be invalid
      `, () => {
        expect(validator(url)).toBe(false)
      })
    })

    describe.each`
      description         | url
      ${'With valid URL'} | ${'https://picsum.photos/50'}
    `('$description', ({ url }) => {
      test(`GIVEN ANY valid url
        WHEN we validate it
        THEN it SHOULD ALWAYS be valid
      `, () => {
        expect(validator(url)).toBe(true)
      })
    })
  })
})
