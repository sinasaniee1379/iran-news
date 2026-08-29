import type { NewsItem } from '../data/news'
import { CATEGORIES } from '../data/news'
import { cn } from '../lib/utils'

export function CategoryFilterBar({
  active,
  onChange,
}: {
  active: NewsItem['category'] | 'all'
  onChange: (c: NewsItem['category'] | 'all') => void
}) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
      <button
        onClick={() => onChange('all')}
        className={cn(
          'shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors',
          active === 'all'
            ? 'border-accent bg-accent text-bg'
            : 'border-[color:var(--color-border)] text-fg-muted hover:text-fg',
        )}
      >
        All
      </button>
      {CATEGORIES.map(c => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={cn(
            'shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors',
            active === c.id
              ? 'border-accent bg-accent text-bg'
              : 'border-[color:var(--color-border)] text-fg-muted hover:text-fg',
          )}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
