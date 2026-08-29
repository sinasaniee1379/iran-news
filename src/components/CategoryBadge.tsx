import { CATEGORIES, type Category } from '../data/news'
import { cn } from '../lib/utils'

export function CategoryBadge({
  category,
  size = 'sm',
  className,
}: {
  category: Category
  size?: 'sm' | 'md'
  className?: string
}) {
  const meta = CATEGORIES.find(c => c.id === category)
  if (!meta) return null
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium uppercase tracking-wide',
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs',
        meta.color,
        className,
      )}
    >
      {meta.label}
    </span>
  )
}
