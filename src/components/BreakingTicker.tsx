import { Flame } from 'lucide-react'
import { NEWS } from '../data/news'
import { useLocale } from '../i18n/LocaleContext'
import { Link } from 'react-router-dom'

export function BreakingTicker() {
  const { t, lang } = useLocale()
  // Only items published "recently" go in the ticker
  const tickerItems = NEWS.filter(n => n.importance >= 2).slice(0, 8)
  const loop = [...tickerItems, ...tickerItems]

  const labelFor = (n: typeof NEWS[number]) => (lang === 'fa' && n.titleFa) || n.title

  return (
    <div className="border-b border-[color:var(--color-border)] bg-bg-soft">
      <div className="mx-auto flex max-w-7xl items-stretch gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center gap-2 border-e border-[color:var(--color-border)] py-2 pe-3 text-xs font-semibold uppercase tracking-wider text-accent">
          <Flame className="h-3.5 w-3.5" />
          {t.home.breaking}
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
                {labelFor(it)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
