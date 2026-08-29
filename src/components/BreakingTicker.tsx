import { Flame } from 'lucide-react'
import { NEWS } from '../data/news'
import { Link } from 'react-router-dom'

export function BreakingTicker() {
  // Only items published "recently" go in the ticker
  const tickerItems = NEWS.filter(n => n.importance >= 2).slice(0, 8)
  // Duplicate the list to make the marquee loop seamlessly
  const loop = [...tickerItems, ...tickerItems]

  return (
    <div className="border-b border-[color:var(--color-border)] bg-bg-soft">
      <div className="mx-auto flex max-w-7xl items-stretch gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center gap-2 border-r border-[color:var(--color-border)] py-2 pr-3 text-xs font-semibold uppercase tracking-wider text-accent">
          <Flame className="h-3.5 w-3.5" />
          Breaking
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-track flex w-max gap-8 whitespace-nowrap py-2 text-sm">
            {loop.map((it, i) => (
              <Link
                key={`${it.id}-${i}`}
                to={`/article/${it.id}`}
                className="inline-flex items-center gap-2 text-fg-muted hover:text-fg"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {it.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
