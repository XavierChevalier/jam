import { useVueHorizontalScroll } from '@/app/composable/VueHorizontalScroll'

describe('useVueHorizontalScroll', () => {
  it('should return a templateRef', () => {
    const actual = useVueHorizontalScroll()

    expect(actual).toHaveProperty('horizontalTemplateRef')
    expect(actual.horizontalTemplateRef).toHaveProperty('value')
    expect(actual.horizontalTemplateRef.value).toBeUndefined()
  })

  it('should return a hasPrev', () => {
    const actual = useVueHorizontalScroll()

    expect(actual).toHaveProperty('hasPrev')
    expect(actual.hasPrev).toHaveProperty('value')
    expect(actual.hasPrev.value).toBeFalse()
  })

  it('should return a hasNext', () => {
    const actual = useVueHorizontalScroll()

    expect(actual).toHaveProperty('hasNext')
    expect(actual.hasNext).toHaveProperty('value')
    expect(actual.hasNext.value).toBeTrue()
  })

  it('should return a prev() function', () => {
    const actual = useVueHorizontalScroll()

    expect(actual).toHaveProperty('prev')
    expect(actual.prev).toBeFunction()
  })

  it('should return a next() function', () => {
    const actual = useVueHorizontalScroll()

    expect(actual).toHaveProperty('next')
    expect(actual.next).toBeFunction()
  })

  it('should return a onScroll() function', () => {
    const actual = useVueHorizontalScroll()

    expect(actual).toHaveProperty('onScroll')
    expect(actual.onScroll).toBeFunction()
  })
})
