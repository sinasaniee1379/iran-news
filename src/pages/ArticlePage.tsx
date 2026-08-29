import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Clock, MapPin, Tag } from 'lucide-react'
import { NEWS } from '../data/news'
import { CategoryBadge } from '../components/CategoryBadge'
import { NewsCard } from '../components/NewsCard'
import { sortedNews } from '../data/news'
import { useLocale } from '../i18n/LocaleContext'
import { formatDateTime } from '../lib/utils'

export function ArticlePage() {
  const { id } = useParams<{ id: string }>()
  const { t, lang } = useLocale()
  const item = NEWS.find(n => n.id === id)

  if (!item) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg">
          <ArrowLeft className="h-4 w-4" /> {t.article.back}
        </Link>
        <p className="mt-6 text-lg">{t.article.notFound}</p>
      </main>
    )
  }

  const title = (lang === 'fa' && item.titleFa) || item.title
  const summary = (lang === 'fa' && item.summaryFa) || item.summary
  const location = (lang === 'fa' && item.locationFa) || item.location

  const related = sortedNews(NEWS.filter(n => n.id !== item.id && n.category === item.category)).slice(0, 3)

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg">
        <ArrowLeft className="h-4 w-4" /> {t.article.back}
      </Link>

      <article className="mt-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <CategoryBadge category={item.category} size="md" />
          {item.importance === 3 && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-bg">
              {t.shared.topStory}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fg-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {formatDateTime(item.publishedAt, lang)}
          </span>
          {location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </span>
          )}
          <span>{t.article.sourceLabel}: {item.source.name}</span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-fg">
          {summary}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2" aria-label={t.article.tagAria}>
            <Tag className="h-3.5 w-3.5 text-fg-muted" />
            {item.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-[color:var(--color-border)] px-2.5 py-0.5 text-xs text-fg-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={item.source.url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] px-3.5 py-2 text-sm font-medium hover:border-accent hover:text-accent"
        >
          {t.article.readAt(item.source.name)} <ExternalLink className="h-3.5 w-3.5" />
        </a>

        <div className="mt-10 rounded-lg border border-[color:var(--color-border)] bg-bg-soft p-4 text-sm text-fg-muted">
          <strong className="text-fg">{t.article.sourcingNote.title}</strong>{' '}
          {t.article.sourcingNote.body}
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold">
            {t.article.moreIn(t.category[item.category])}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(r => <NewsCard key={r.id} item={r} />)}
          </div>
        </section>
      )}
    </main>
  )
}
