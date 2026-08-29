import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { dict, type Dict, type Lang } from './strings'

interface LocaleCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: Dict
}

const Ctx = createContext<LocaleCtx | null>(null)
const STORAGE_KEY = 'iran-news:lang'

function getInitial(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
  if (stored === 'en' || stored === 'fa') return stored
  // Otherwise, try to guess from the browser language
  const browser = window.navigator?.language?.toLowerCase() ?? ''
  return browser.startsWith('fa') ? 'fa' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitial)

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('lang', lang)
    html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr')
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<LocaleCtx>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState(prev => (prev === 'fa' ? 'en' : 'fa')),
      t: dict[lang],
    }),
    [lang],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLocale(): LocaleCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}
