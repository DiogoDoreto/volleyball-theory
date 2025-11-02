'use client'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { type Locale, isLocale } from './types'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const DEFAULT_LANGUAGE: Locale = 'en'
const LANG_PARAM = 'lang'

const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LANGUAGE,
  setLocale: () => {},
})

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE

    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get(LANG_PARAM)
    if (isLocale(urlLang)) return urlLang

    const savedLocale = localStorage.getItem(LANG_PARAM)
    if (isLocale(savedLocale)) return savedLocale

    const browserLang = navigator.language.split('-')[0]
    if (isLocale(browserLang)) return browserLang

    return DEFAULT_LANGUAGE
  })

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(LANG_PARAM, locale)

    const url = new URL(window.location.href)
    url.searchParams.set(LANG_PARAM, locale)
    window.history.replaceState({}, '', url.toString())
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
