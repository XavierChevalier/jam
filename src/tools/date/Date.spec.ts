import { localeFormatDistance, setCurrentLocale } from './Date'

describe('Date', () => {
  describe('localeFormatDistance', () => {
    it('should return "2 days" in english US', () => {
      const date = new Date('2021-11-15')
      const baseDate = new Date('2021-11-17')

      const result = localeFormatDistance(date, baseDate)

      expect(result).toBe('2 days ago')
    })

    it('should return "1 day" in english US', () => {
      const date = new Date('2021-11-16')
      const baseDate = new Date('2021-11-17')

      const result = localeFormatDistance(date, baseDate)

      expect(result).toBe('1 day ago')
    })

    it('should be english US by default', () => {
      const date = new Date('2021-11-16')
      const baseDate = new Date('2021-11-17')

      const result = localeFormatDistance(date, baseDate)

      expect(result).toBe('1 day ago')
    })

    it('should return "1 jour plus tôt" in french', () => {
      const date = new Date('2021-11-16')
      const baseDate = new Date('2021-11-17')
      setCurrentLocale('fr')

      const result = localeFormatDistance(date, baseDate)

      expect(result).toBe('il y a 1 jour')
    })
  })
})
