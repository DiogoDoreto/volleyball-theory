import { useLocale } from './context'
import en from './locales/en.json'
import pt from './locales/pt.json'
import es from './locales/es.json'

const translations = { en, pt, es }

export const useTranslation = () => {
  const { locale } = useLocale()

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.')
    let value: any = translations[locale]

    for (const k of keys) {
      value = value?.[k]
    }

    // Fallback to English if translation is missing
    if (value === undefined && locale !== 'en') {
      let fallback: any = translations.en
      for (const k of keys) {
        fallback = fallback?.[k]
      }
      value = fallback
    }

    if (typeof value === 'string' && params) {
      return value.replace(/\{\{(\w+)\}\}/g, (_, key) => params[key] || '')
    }

    return typeof value === 'string' ? value : key
  }

  return { t, locale }
}
