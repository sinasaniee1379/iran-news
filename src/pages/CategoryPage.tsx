import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { NEWS, CATEGORIES, type Category } from '../data/news'
import { NewsCard } from '../components/NewsCard'
import { CategoryFilterBar } from '../components/CategoryFilterBar'
import { useState } from 'react'
import { sortedNews } from '../data/news'
import { cn } from '../lib/utils'

export function CategoryPage() {
  const { id } = useParams<{ id: Category }>()
  const meta = CATEGORIES.find(c => c.id === id)
  const [active, setActive] = useState<Category | 'all'>((id as Category) ?? 'all')

  if (!meta) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <p className="mt-6 text-lg">Section not found.</p>
      </main>
    )
  }

  const items = sortedNews(NEWS.filter(n => n.category === id))

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <span className={cn('h-3 w-3 rounded-full', meta.color)} />
        <h1 className="text-3xl font-semibold tracking-tight">{meta.label}</h1>
      </div>
      <p className="mt-1 text-sm text-fg-muted">
        {items.length} {items.length === 1 ? 'story' : 'stories'} in this section
      </p>

      <div className="mt-6">
        <CategoryFilterBar active={active} onChange={setActive} />
      </div>

      <section className="mt-6">
        {items.length === 0 ? (
          <p className="rounded-lg border border-dashed border-[color:var(--color-border)] p-8 text-center text-sm text-fg-muted">
            No stories in this section yet.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(i => <NewsCard key={i.id} item={i} />)}
          </div>
        )}
      </section>
    </main>
  )
}
