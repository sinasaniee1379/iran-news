import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** Format a Date like "Aug 29, 2026 · 14:30 IRST" (en) or localized in fa. */
export function formatDateTime(d: Date | string, lang: 'en' | 'fa' = 'en'): string {
  const date = typeof d === 'string' ? new Date(d) : d
  const locale = lang === 'fa' ? 'fa-IR' : 'en-US'
  const stamp = date.toLocaleString(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Tehran',
    hour12: false,
  })
  return lang === 'fa' ? stamp : `${stamp} IRST`
}

/** Locale-aware date, used for big headers (e.g. "Saturday, August 29, 2026"). */
export function formatLongDate(d: Date | string, lang: 'en' | 'fa' = 'en'): string {
  const date = typeof d === 'string' ? new Date(d) : d
  return date.toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/** Short relative time, e.g. "2h ago" / "۲ ساعت پیش". */
export function timeAgo(iso: string, lang: 'en' | 'fa' = 'en', now: Date = new Date()): string {
  const then = new Date(iso)
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000)
  if (seconds < 60) return lang === 'fa' ? 'لحظاتی پیش' : 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return lang === 'fa' ? `${minutes} دقیقه پیش` : `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return lang === 'fa' ? `${hours} ساعت پیش` : `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return lang === 'fa' ? `${days} روز پیش` : `${days}d ago`
  const weeks = Math.floor(days / 7)
  if (weeks < 4) return lang === 'fa' ? `${weeks} هفته پیش` : `${weeks}w ago`
  return then.toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US', { month: 'short', day: 'numeric' })
}
