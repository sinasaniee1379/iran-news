import { useMemo, useState } from 'react'
import type { Category, NewsItem } from '../data/news'
import { NEWS } from '../data/news'

export function useNewsFilter() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')

  const filtered: NewsItem[] = useMemo(() => {
    const q = query.trim().toLowerCase()
    return NEWS.filter(n => {
      if (category !== 'all' && n.category !== category) return false
      if (!q) return true
      return (
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.tags?.some(t => t.toLowerCase().includes(q)) ||
        n.location?.toLowerCase().includes(q)
      )
    })
  }, [query, category])

  return { query, setQuery, category, setCategory, filtered }
}
