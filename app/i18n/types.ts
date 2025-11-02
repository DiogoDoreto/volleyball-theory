export const AVAILABLE_LOCALES = ['en', 'pt', 'es'] as const

export type Locale = (typeof AVAILABLE_LOCALES)[number]

export function isLocale(value?: string | null): value is Locale {
  return !!value && AVAILABLE_LOCALES.includes(value as Locale)
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇺🇸',
  pt: '🇧🇷',
  es: '🇪🇸',
}

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
}
