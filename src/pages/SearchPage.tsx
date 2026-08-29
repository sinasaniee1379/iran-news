import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search as SearchIcon, ArrowLeft } from 'lucide-react'
import { NEWS } from '../data/news'
import { NewsCard } from '../components/NewsCard'
import type { NewsItem } from '../data/news'

export function SearchPage() {
  const [params] = useSearchParams()
  const initial = params.get('q') ?? ''
  const [query, setQuery] = useState(initial)

  // Sync the input if the URL changes (e.g. user navigates with a new ?q=)
  useEffect(() => {
    setQuery(params.get('q') ?? '')
  }, [params])

  const q = query.trim().toLowerCase()
  const filtered: NewsItem[] = q
    ? NEWS.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.tags?.some(t => t.toLowerCase().includes(q)) ||
        n.location?.toLowerCase().includes(q),
      )
    : NEWS

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="mt-4 flex items-center gap-2">
        <SearchIcon className="h-5 w-5 text-accent" />
        <h1 className="text-2xl font-semibold">Search</h1>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-md border border-[color:var(--color-border)] bg-bg-soft px-3 py-2 focus-within:border-accent">
        <SearchIcon className="h-4 w-4 text-fg-muted" />
        <input
          autoFocus
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by title, tag, location…"
          className="w-full bg-transparent text-sm focus:outline-none"
        />
      </div>

      <p className="mt-3 text-xs text-fg-muted">
        {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
        {q ? ` for "${query}"` : ''}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(i => <NewsCard key={i.id} item={i} />)}
      </div>
    </main>
  )
}
