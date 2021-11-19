import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import LikedIcon from './LikeIcon.vue'
import {
  JustLikedIcon,
  JustUnlikedIcon,
  LikedIconWithCounter,
  UnlikedIconWithCounter,
} from '@/components/like-icon/LikeIcon.stories'

describe('LikeIcon', () => {
  generateStorybookSnapshotTests({
    JustUnlikedIcon,
    JustLikedIcon,
    UnlikedIconWithCounter,
    LikedIconWithCounter,
  })

  describe('counter validation', () => {
    const validator = LikedIcon.props.counter?.validator
    it('should be defined', () => {
      expect(validator).toBeDefined()
    })

    describe.each`
      description                       | counter
      ${'With a non positive number'}   | ${-1}
      ${'With a float positive number'} | ${1.2}
      ${'With a string'}                | ${"it's just a string"}
    `('$description', ({ counter }) => {
      test(`GIVEN ANY invalid counter
        WHEN we validate it
        THEN it SHOULD ALWAYS be invalid
      `, () => {
        expect(validator(counter)).toBe(false)
      })
    })

    describe.each`
      description                 | counter
      ${'With a positive number'} | ${10}
    `('$description', ({ counter }) => {
      test(`GIVEN ANY valid counter
        WHEN we validate it
        THEN it SHOULD ALWAYS be valid
      `, () => {
        expect(validator(counter)).toBe(true)
      })
    })
  })
})
