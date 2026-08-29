import { CATEGORIES } from '../data/news'
import type { Category } from '../data/news'
import { useLocale } from '../i18n/LocaleContext'
import { cn } from '../lib/utils'

export function CategoryFilterBar({
  active,
  onChange,
}: {
  active: Category | 'all'
  onChange: (c: Category | 'all') => void
}) {
  const { t } = useLocale()
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
        {t.shared.viewAll}
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
          {t.category[c.id]}
        </button>
      ))}
    </div>
  )
}
