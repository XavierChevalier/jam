import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'
import { number, object, string } from 'yup'

describe('PropertyValidator', () => {
  describe('#isPropertyValid', () => {
    const extraKeyWithCircularReference = { a: 'test' }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    extraKeyWithCircularReference.b = extraKeyWithCircularReference

    describe.each`
      description                                 | schema                            | input
      ${'with positive number'}                   | ${number().required().positive()} | ${1}
      ${'with extra keys'}                        | ${object({ a: string() })}        | ${{ a: 'test', extraKey: 'test' }}
      ${'with extra key with circular reference'} | ${object({ a: string() })}        | ${extraKeyWithCircularReference}
    `('$description', ({ schema, input }) => {
      test('GIVEN ANY schema and valid input data WHEN we validate THEN it SHOULD ALWAYS be valid', () => {
        expect(isPropertyValid(schema)(input)).toBe(true)
      })
    })
    describe.each`
      description                                                | schema                                                  | input
      ${'with negative number'}                                  | ${number().required().positive()}                       | ${-1}
      ${'with undefined'}                                        | ${number().required().positive()}                       | ${undefined}
      ${'with extra key in strict mode'}                         | ${object().shape({ a: string() }).noUnknown().strict()} | ${{ a: 'test', extraKey: 'test' }}
      ${'with extra key with circular reference in strict mode'} | ${object().shape({ a: string() }).noUnknown().strict()} | ${extraKeyWithCircularReference}
    `('$description', ({ schema, input }) => {
      test('GIVEN ANY schema and invalid input data WHEN we validate THEN it SHOULD ALWAYS be invalid', () => {
        expect(isPropertyValid(schema)(input)).toBe(false)
      })
    })
  })
})
