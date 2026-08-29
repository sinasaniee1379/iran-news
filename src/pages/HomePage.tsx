import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { sortedNews, NEWS, CATEGORIES, LAST_UPDATED } from '../data/news'
import { NewsCard } from '../components/NewsCard'
import { BreakingTicker } from '../components/BreakingTicker'
import { CategoryFilterBar } from '../components/CategoryFilterBar'
import { useNewsFilter } from '../hooks/useNewsFilter'
import { useLocale } from '../i18n/LocaleContext'
import { formatLongDate, formatDateTime } from '../lib/utils'
import { useEffect, useState } from 'react'

const SEEN_STORAGE_KEY = 'iran-news:last-seen-update'

export function HomePage() {
  const { query, setQuery, category, setCategory, filtered } = useNewsFilter()
  const { t, lang } = useLocale()
  const all = sortedNews()
  const top = all[0]
  const secondary = all.slice(1, 3)

  // Highlight how many items are new since the user's last visit
  const [newCount, setNewCount] = useState(0)
  useEffect(() => {
    try {
      const seen = window.localStorage.getItem(SEEN_STORAGE_KEY)
      if (!seen) {
        setNewCount(0)
        return
      }
      const seenTs = new Date(seen).getTime()
      const count = all.filter(n => new Date(n.publishedAt).getTime() > seenTs).length
      setNewCount(count)
    } catch {
      setNewCount(0)
    }
  }, [all])

  const markAllSeen = () => {
    try {
      window.localStorage.setItem(SEEN_STORAGE_KEY, new Date().toISOString())
      setNewCount(0)
    } catch {}
  }

  return (
    <div>
      <BreakingTicker />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {formatLongDate('2026-08-29', lang)}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.todayInIran}
            </h1>
            <p className="mt-1 text-xs text-fg-muted">
              {lang === 'fa' ? 'آخرین به‌روزرسانی: ' : 'Last refreshed: '}
              <time dateTime={LAST_UPDATED}>{formatDateTime(LAST_UPDATED, lang)}</time>
            </p>
          </div>
          <Link
            to="/end-of-day"
            className="inline-flex w-fit items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-bg hover:opacity-90"
          >
            <Clock className="h-4 w-4" />
            {t.home.endOfDayCta}
          </Link>
        </div>

        {newCount > 0 && (
          <div className="mb-4 flex items-center justify-between gap-3 rounded-lg border border-accent/30 bg-accent-soft px-4 py-2.5 text-sm">
            <span className="text-accent">
              {lang === 'fa'
                ? `${newCount} خبر تازه از آخرین بازدید شما`
                : `${newCount} new ${newCount === 1 ? 'story' : 'stories'} since your last visit`}
            </span>
            <button
              onClick={markAllSeen}
              className="rounded-md border border-accent/40 px-2.5 py-1 text-xs font-medium text-accent hover:bg-accent hover:text-bg"
            >
              {lang === 'fa' ? 'پاک کن' : 'Mark as read'}
            </button>
          </div>
        )}

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NewsCard item={top} variant="feature" />
          </div>
          <div className="grid gap-4">
            {secondary.map(s => (
              <NewsCard key={s.id} item={s} />
            ))}
          </div>
        </section>

        <section className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold">{t.home.allStories}</h2>
          <div className="flex flex-1 items-center gap-3 sm:max-w-md sm:justify-end">
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t.home.searchPlaceholder}
              className="w-full rounded-md border border-[color:var(--color-border)] bg-bg-soft px-3 py-2 text-sm placeholder:text-fg-muted focus:border-accent focus:outline-none"
            />
          </div>
        </section>

        <div className="mt-3">
          <CategoryFilterBar active={category} onChange={setCategory} />
        </div>

        <section className="mt-6">
          {filtered.length === 0 ? (
            <p className="rounded-lg border border-dashed border-[color:var(--color-border)] p-8 text-center text-sm text-fg-muted">
              {t.home.noMatches}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(item => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold">{t.home.bySection}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map(c => {
              const count = NEWS.filter(n => n.category === c.id).length
              return (
                <Link
                  key={c.id}
                  to={`/category/${c.id}`}
                  className="news-card group flex items-center justify-between rounded-lg border border-[color:var(--color-border)] bg-bg-soft px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold">{t.category[c.id]}</p>
                    <p className="text-xs text-fg-muted">{t.home.storiesCount(count)}</p>
                  </div>
                  <span className={c.color + ' rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase'}>
                    {t.shared.view}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
