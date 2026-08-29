import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sunrise, ExternalLink, ListChecks, Bookmark, Share2 } from 'lucide-react'
import { NEWS, sortedNews, CATEGORIES, END_OF_DAY_DATE } from '../data/news'
import { CategoryBadge } from '../components/CategoryBadge'
import { formatDateTime } from '../lib/utils'

/**
 * End-of-Day page
 * ──────────────────────────────────────────────────────────────
 * This is the page the user specifically asked for. It collects
 * the most important items of the day into a single "wrap-up"
 * view, grouped by theme, with a TL;DR at the top.
 */
export function EndOfDayPage() {
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set())

  const important = useMemo(() => sortedNews().filter(n => n.importance === 3), [])
  const watchNext = useMemo(() => sortedNews().filter(n => n.importance === 2).slice(0, 6), [])

  const grouped = useMemo(() => {
    const groups: Record<string, typeof NEWS> = {}
    for (const item of NEWS) {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    }
    // keep groups with at least 1 item
    return Object.entries(groups).filter(([, list]) => list.length > 0)
  }, [])

  const toggleBookmark = (id: string) => {
    setBookmarked(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const date = new Date(END_OF_DAY_DATE).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  })

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-gradient-to-br from-bg-soft to-bg p-6 sm:p-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
          <Moon className="h-3.5 w-3.5" />
          End of Day
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {date}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-fg-muted sm:text-base">
          The most important Iran-related stories of the day, with a short
          summary of each, what to watch next, and a thread you can read in
          under five minutes. Updated nightly.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: `Iran Today — End of Day ${date}`, url: window.location.href }).catch(() => {})
              } else {
                navigator.clipboard?.writeText(window.location.href)
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
          >
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-bg hover:opacity-90"
          >
            <Sunrise className="h-3.5 w-3.5" />
            All today's stories
          </Link>
        </div>
      </div>

      {/* TL;DR */}
      <section className="mt-10">
        <div className="mb-4 flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-semibold">TL;DR — the day in 90 seconds</h2>
        </div>
        <ol className="space-y-3">
          {important.map((item, i) => (
            <li
              key={item.id}
              className="flex gap-4 rounded-lg border border-[color:var(--color-border)] bg-bg p-4"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-bg">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <CategoryBadge category={item.category} />
                  <span className="text-[11px] text-fg-muted">{formatDateTime(item.publishedAt)}</span>
                </div>
                <Link to={`/article/${item.id}`} className="block">
                  <h3 className="text-base font-semibold leading-snug hover:text-accent">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-1 text-sm text-fg-muted">{item.summary}</p>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <a
                    href={item.source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-fg-muted hover:text-fg"
                  >
                    {item.source.name} <ExternalLink className="h-3 w-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => toggleBookmark(item.id)}
                    className="inline-flex items-center gap-1 text-fg-muted hover:text-fg"
                    aria-label={bookmarked.has(item.id) ? 'Unsave story' : 'Save story'}
                  >
                    <Bookmark
                      className="h-3 w-3"
                      fill={bookmarked.has(item.id) ? 'currentColor' : 'none'}
                    />
                    {bookmarked.has(item.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* By theme */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">What happened, by theme</h2>
        <div className="mt-4 space-y-6">
          {grouped.map(([catId, list]) => {
            const meta = CATEGORIES.find(c => c.id === catId)
            if (!meta) return null
            return (
              <div key={catId} className="rounded-xl border border-[color:var(--color-border)] bg-bg-soft p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className={meta.color + ' rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase'}>
                    {meta.label}
                  </span>
                  <span className="text-xs text-fg-muted">
                    {list.length} {list.length === 1 ? 'story' : 'stories'}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {list.map(item => (
                    <li key={item.id} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div className="min-w-0 flex-1">
                        <Link to={`/article/${item.id}`} className="font-medium hover:text-accent">
                          {item.title}
                        </Link>
                        <p className="mt-0.5 text-xs text-fg-muted">
                          {item.source.name} · {formatDateTime(item.publishedAt)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Watch next */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">What to watch next</h2>
        <p className="mt-1 text-sm text-fg-muted">
          Developing stories that are likely to evolve overnight or early tomorrow.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {watchNext.map(item => (
            <Link
              key={item.id}
              to={`/article/${item.id}`}
              className="news-card block rounded-lg border border-[color:var(--color-border)] bg-bg p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <CategoryBadge category={item.category} />
                <span className="text-[11px] text-fg-muted">{formatDateTime(item.publishedAt)}</span>
              </div>
              <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-fg-muted">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-12 text-center text-xs text-fg-muted">
        Wrap published at {formatDateTime(new Date(END_OF_DAY_DATE + 'T22:00:00+03:30').toISOString())}.
        {' '}Sources are linked inline; please follow them for the most current reporting.
      </p>
    </main>
  )
}
