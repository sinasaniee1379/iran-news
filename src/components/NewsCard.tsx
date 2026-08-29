import { Link } from 'react-router-dom'
import { Clock, MapPin, ArrowUpRight } from 'lucide-react'
import type { NewsItem } from '../data/news'
import { CategoryBadge } from './CategoryBadge'
import { timeAgo } from '../lib/utils'
import { cn } from '../lib/utils'

interface Props {
  item: NewsItem
  variant?: 'default' | 'compact' | 'feature'
}

export function NewsCard({ item, variant = 'default' }: Props) {
  if (variant === 'feature') {
    return (
      <Link
        to={`/article/${item.id}`}
        className={cn(
          'news-card group relative block overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-bg-soft',
        )}
      >
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-2">
            <CategoryBadge category={item.category} size="md" />
            {item.importance === 3 && (
              <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-bg">
                Top story
              </span>
            )}
          </div>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            {item.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-fg-muted sm:text-base">
            {item.summary}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fg-muted">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {timeAgo(item.publishedAt)}
            </span>
            {item.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {item.location}
              </span>
            )}
            <span>{item.source.name}</span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link
        to={`/article/${item.id}`}
        className="group flex items-start gap-3 border-b border-[color:var(--color-border)] py-3 last:border-0"
      >
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <CategoryBadge category={item.category} />
            <span className="text-[11px] text-fg-muted">{timeAgo(item.publishedAt)}</span>
          </div>
          <h3 className="line-clamp-2 text-sm font-medium leading-snug group-hover:text-accent">
            {item.title}
          </h3>
        </div>
      </Link>
    )
  }

  // default
  return (
    <Link
      to={`/article/${item.id}`}
      className="news-card group flex h-full flex-col rounded-xl border border-[color:var(--color-border)] bg-bg p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <CategoryBadge category={item.category} />
        <span className="text-[11px] text-fg-muted">{timeAgo(item.publishedAt)}</span>
      </div>
      <h3 className="line-clamp-2 text-lg font-semibold leading-snug tracking-tight group-hover:text-accent">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-fg-muted">{item.summary}</p>
      <div className="mt-4 flex flex-1 items-end justify-between pt-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fg-muted">
          {item.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {item.location}
            </span>
          )}
          <span>{item.source.name}</span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-fg-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
    </Link>
  )
}
