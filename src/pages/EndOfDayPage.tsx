import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sunrise, ExternalLink, ListChecks, Bookmark, Share2 } from 'lucide-react'
import { NEWS, sortedNews, CATEGORIES, END_OF_DAY_DATE } from '../data/news'
import { CategoryBadge } from '../components/CategoryBadge'
import { useLocale } from '../i18n/LocaleContext'
import { formatDateTime, formatLongDate } from '../lib/utils'

export function EndOfDayPage() {
  const { t, lang } = useLocale()
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set())

  const important = useMemo(() => sortedNews().filter(n => n.importance === 3), [])
  const watchNext = useMemo(() => sortedNews().filter(n => n.importance === 2).slice(0, 6), [])

  const grouped = useMemo(() => {
    const groups: Record<string, typeof NEWS> = {}
    for (const item of NEWS) {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    }
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

  const titleFor = (n: typeof NEWS[number]) => (lang === 'fa' && n.titleFa) || n.title
  const summaryFor = (n: typeof NEWS[number]) => (lang === 'fa' && n.summaryFa) || n.summary

  const dateLabel = formatLongDate(END_OF_DAY_DATE, lang)
  const wrapStamp = formatDateTime(new Date(END_OF_DAY_DATE + 'T22:00:00+03:30').toISOString(), lang)

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-gradient-to-br from-bg-soft to-bg p-6 sm:p-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
          <Moon className="h-3.5 w-3.5" />
          {t.eod.eyebrow}
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dateLabel}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-fg-muted sm:text-base">
          {t.eod.lead}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: `${t.brand} — ${t.eod.eyebrow} ${dateLabel}`, url: window.location.href }).catch(() => {})
              } else {
                navigator.clipboard?.writeText(window.location.href)
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
          >
            <Share2 className="h-3.5 w-3.5" />
            {t.eod.share}
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-bg hover:opacity-90"
          >
            <Sunrise className="h-3.5 w-3.5" />
            {t.eod.allToday}
          </Link>
        </div>
      </div>

      <section className="mt-10">
        <div className="mb-4 flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-semibold">{t.eod.tldrTitle}</h2>
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
                  <span className="text-[11px] text-fg-muted">{formatDateTime(item.publishedAt, lang)}</span>
                </div>
                <Link to={`/article/${item.id}`} className="block">
                  <h3 className="text-base font-semibold leading-snug hover:text-accent">
                    {titleFor(item)}
                  </h3>
                </Link>
                <p className="mt-1 text-sm text-fg-muted">{summaryFor(item)}</p>
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
                    aria-label={bookmarked.has(item.id) ? t.eod.unSave : t.eod.saveStory}
                  >
                    <Bookmark
                      className="h-3 w-3"
                      fill={bookmarked.has(item.id) ? 'currentColor' : 'none'}
                    />
                    {bookmarked.has(item.id) ? t.eod.saved : t.eod.save}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">{t.eod.byThemeTitle}</h2>
        <div className="mt-4 space-y-6">
          {grouped.map(([catId, list]) => {
            const meta = CATEGORIES.find(c => c.id === catId)
            if (!meta) return null
            return (
              <div key={catId} className="rounded-xl border border-[color:var(--color-border)] bg-bg-soft p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className={meta.color + ' rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase'}>
                    {t.category[meta.id]}
                  </span>
                  <span className="text-xs text-fg-muted">
                    {t.categoryPage.count(list.length)}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {list.map(item => (
                    <li key={item.id} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div className="min-w-0 flex-1">
                        <Link to={`/article/${item.id}`} className="font-medium hover:text-accent">
                          {titleFor(item)}
                        </Link>
                        <p className="mt-0.5 text-xs text-fg-muted">
                          {item.source.name} · {formatDateTime(item.publishedAt, lang)}
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

      <section className="mt-12">
        <h2 className="text-xl font-semibold">{t.eod.watchNextTitle}</h2>
        <p className="mt-1 text-sm text-fg-muted">
          {t.eod.watchNextLead}
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
                <span className="text-[11px] text-fg-muted">{formatDateTime(item.publishedAt, lang)}</span>
              </div>
              <h3 className="text-sm font-semibold leading-snug">{titleFor(item)}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-fg-muted">{summaryFor(item)}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-12 text-center text-xs text-fg-muted">
        {t.eod.footer(wrapStamp)}
      </p>
    </main>
  )
}
