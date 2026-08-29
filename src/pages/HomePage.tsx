import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { sortedNews, NEWS, CATEGORIES, LAST_UPDATED } from '../data/news'
import { formatDateTime } from '../lib/utils'
import { NewsCard } from '../components/NewsCard'
import { BreakingTicker } from '../components/BreakingTicker'
import { CategoryFilterBar } from '../components/CategoryFilterBar'
import { useNewsFilter } from '../hooks/useNewsFilter'

export function HomePage() {
  const { query, setQuery, category, setCategory, filtered } = useNewsFilter()
  const all = sortedNews()
  const top = all[0]
  const secondary = all.slice(1, 3)

  return (
    <div>
      <BreakingTicker />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Date strip + intro */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {new Date('2026-08-29').toLocaleDateString('en-US', {
                weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
              })}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              Today in Iran
            </h1>
            <p className="mt-1 text-xs text-fg-muted">
              Last updated:{' '}
              <time dateTime={LAST_UPDATED}>{formatDateTime(LAST_UPDATED)}</time>
            </p>
          </div>
          <Link
            to="/end-of-day"
            className="inline-flex w-fit items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-bg hover:opacity-90"
          >
            <Clock className="h-4 w-4" />
            End-of-day summary
          </Link>
        </div>

        {/* Hero + secondary */}
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

        {/* Filter bar + search */}
        <section className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold">All stories</h2>
          <div className="flex flex-1 items-center gap-3 sm:max-w-md sm:justify-end">
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search titles, tags, locations…"
              className="w-full rounded-md border border-[color:var(--color-border)] bg-bg-soft px-3 py-2 text-sm placeholder:text-fg-muted focus:border-accent focus:outline-none"
            />
          </div>
        </section>

        <div className="mt-3">
          <CategoryFilterBar active={category} onChange={setCategory} />
        </div>

        {/* Grid */}
        <section className="mt-6">
          {filtered.length === 0 ? (
            <p className="rounded-lg border border-dashed border-[color:var(--color-border)] p-8 text-center text-sm text-fg-muted">
              No stories match that filter.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(item => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        {/* By category shortcut */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold">By section</h2>
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
                    <p className="text-sm font-semibold">{c.label}</p>
                    <p className="text-xs text-fg-muted">{count} {count === 1 ? 'story' : 'stories'} today</p>
                  </div>
                  <span className={c.color + ' rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase'}>
                    View
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
