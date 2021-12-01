import toMatchStructure from '@/tests/extensions/ToMatchStructure'

describe('toMatchStructure', () => {
  it('should be extended by Jest expect', () => {
    const fn = expect({}).toMatchStructure
    expect(fn).toBeFunction()
  })

  describe('pass', () => {
    it.each`
      pass     | received            | expected
      ${true}  | ${{}}               | ${{}}
      ${true}  | ${{ a: 1 }}         | ${{ a: 1 }}
      ${true}  | ${{ a: 1 }}         | ${{ a: 2 }}
      ${true}  | ${{ a: 1 }}         | ${{ a: '2' }}
      ${true}  | ${{ a: { b: {} } }} | ${{ a: { b: 1 } }}
      ${false} | ${{ a: 1 }}         | ${{ b: 1 }}
      ${false} | ${{ a: { b: {} } }} | ${{ a: { c: {} } }}
      ${false} | ${{ a: { b: 1 } }}  | ${{ a: { c: {} } }}
    `(
      'should return $pass with $received and $expected',
      ({ pass, received, expected }) => {
        expect(toMatchStructure(received, expected).pass).toBe(pass)
      }
    )
  })
})
