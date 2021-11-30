import { createI18n } from 'vue-i18n'
import { Ref } from 'vue'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
})

export function changeLocale(locale: 'en' | 'fr') {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
    return
  }

  ;(i18n.global.locale as unknown as Ref<string>).value = locale
}
