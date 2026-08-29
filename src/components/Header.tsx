import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, Sun, Moon, Globe2 } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { CATEGORIES } from '../data/news'
import { useLocale } from '../i18n/LocaleContext'
import { cn } from '../lib/utils'
import { useState, useEffect } from 'react'

export function Header() {
  const { theme, toggle } = useTheme()
  const { lang, toggle: toggleLang, t } = useLocale()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-colors duration-200',
        scrolled
          ? 'border-[color:var(--color-border)] bg-[color:var(--color-bg)]/85 backdrop-blur-md'
          : 'border-transparent bg-[color:var(--color-bg)]',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-bg">
            <Globe2 className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-base tracking-tight">{t.brand}</span>
        </Link>

        <nav className="ms-4 hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                'rounded-md px-3 py-1.5 text-sm transition-colors',
                isActive
                  ? 'bg-accent-soft text-accent'
                  : 'text-fg-muted hover:text-fg',
              )
            }
          >
            {t.nav.home}
          </NavLink>
          {CATEGORIES.slice(0, 5).map(c => (
            <NavLink
              key={c.id}
              to={`/category/${c.id}`}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-1.5 text-sm transition-colors',
                  isActive
                    ? 'bg-accent-soft text-accent'
                    : 'text-fg-muted hover:text-fg',
                )
              }
            >
              {t.category[c.id]}
            </NavLink>
          ))}
          <NavLink
            to="/end-of-day"
            className={({ isActive }) =>
              cn(
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-accent text-bg'
                  : 'text-fg-muted hover:text-fg',
              )
            }
          >
            {t.nav.endOfDay}
          </NavLink>
        </nav>

        <div className="ms-auto flex items-center gap-1">
          <Link
            to="/search"
            aria-label={t.header.searchAria}
            className={cn(
              'grid h-9 w-9 place-items-center rounded-md transition-colors hover:bg-bg-soft',
              location.pathname === '/search' && 'bg-bg-soft',
            )}
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label={t.header.toggleLanguage}
            onClick={toggleLang}
            className="grid h-9 w-9 place-items-center rounded-md text-sm font-semibold transition-colors hover:bg-bg-soft"
          >
            {lang === 'en' ? 'فا' : 'EN'}
          </button>
          <button
            type="button"
            aria-label={t.header.toggleTheme}
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-md transition-colors hover:bg-bg-soft"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}
