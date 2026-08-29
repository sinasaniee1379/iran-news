import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search as SearchIcon, ArrowLeft } from 'lucide-react'
import { NEWS } from '../data/news'
import { NewsCard } from '../components/NewsCard'
import { useLocale } from '../i18n/LocaleContext'

export function SearchPage() {
  const [params] = useSearchParams()
  const { t } = useLocale()
  const initial = params.get('q') ?? ''
  const [query, setQuery] = useState(initial)

  useEffect(() => {
    setQuery(params.get('q') ?? '')
  }, [params])

  const q = query.trim().toLowerCase()
  const filtered = q
    ? NEWS.filter(n => {
        const haystack = [
          n.title, n.summary, n.location ?? '',
          ...(n.titleFa ? [n.titleFa] : []),
          ...(n.summaryFa ? [n.summaryFa] : []),
          ...(n.locationFa ? [n.locationFa] : []),
          ...(n.tags ?? []),
        ].join(' ').toLowerCase()
        return haystack.includes(q)
      })
    : NEWS

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg">
        <ArrowLeft className="h-4 w-4" /> {t.article.back}
      </Link>

      <div className="mt-4 flex items-center gap-2">
        <SearchIcon className="h-5 w-5 text-accent" />
        <h1 className="text-2xl font-semibold">{t.search.title}</h1>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-md border border-[color:var(--color-border)] bg-bg-soft px-3 py-2 focus-within:border-accent">
        <SearchIcon className="h-4 w-4 text-fg-muted" />
        <input
          autoFocus
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t.search.placeholder}
          className="w-full bg-transparent text-sm focus:outline-none"
        />
      </div>

      <p className="mt-3 text-xs text-fg-muted">
        {t.search.results(filtered.length)}
        {q ? t.search.for(query) : ''}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(i => <NewsCard key={i.id} item={i} />)}
      </div>
    </main>
  )
}
