'use client'
import { useState, useRef, useEffect } from 'react'
import {
  useLocale,
  useTranslation,
  type Locale,
  AVAILABLE_LOCALES,
  LOCALE_FLAGS,
  LOCALE_LABELS,
} from '../i18n'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-navy w-10 h-10 text-xl"
        title={t('language.current', { language: LOCALE_LABELS[locale] })}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {LOCALE_FLAGS[locale]}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 bg-navy border border-royal rounded shadow-lg z-50">
          {AVAILABLE_LOCALES.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLocaleChange(lang)}
              className={`block w-full text-left px-4 py-2 hover:bg-royal whitespace-nowrap ${
                locale === lang ? 'bg-royal' : ''
              }`}
              aria-label={t('language.switchTo', { language: LOCALE_LABELS[lang] })}
            >
              <span className="mr-2">{LOCALE_FLAGS[lang]}</span>
              {LOCALE_LABELS[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
