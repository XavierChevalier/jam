import { formatDistance, Locale } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'

type AvailableLocales = 'enUS' | 'fr'
const locales: Record<AvailableLocales, Locale> = { enUS, fr }
let currentLocale: AvailableLocales = 'enUS'

export function setCurrentLocale(locale: AvailableLocales) {
  currentLocale = locale
}

export function localeFormatDistance(
  date: Date | number,
  baseDate: Date | number,
  options?: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: Locale
  }
) {
  return formatDistance(date, baseDate, {
    locale: locales[currentLocale],
    addSuffix: true,
    ...options,
  })
}
