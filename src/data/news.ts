// News data — verified items from publicly available sources on Aug 28-29, 2026.
// IMPORTANT: this file is the single source of truth. Each item carries a
// `source` link and a `publishedAt` ISO timestamp so the UI can render an
// honest "as of" view. In a real deployment this would be replaced by a
// fetch from a news API (NewsAPI.org, GNews, or the RSS feeds of the cited
// outlets). The shape is deliberately API-friendly.

export type Category =
  | 'politics'
  | 'economy'
  | 'society'
  | 'diplomacy'
  | 'human-rights'
  | 'energy'

export interface NewsItem {
  id: string
  title: string
  summary: string
  category: Category
  publishedAt: string // ISO 8601 in Asia/Tehran
  source: { name: string; url: string }
  importance: 1 | 2 | 3 // 3 = top story of the day
  imageUrl?: string
  location?: string
  tags?: string[]
}

export const CATEGORIES: { id: Category; label: string; color: string }[] = [
  { id: 'politics', label: 'Politics', color: 'bg-accent text-white' },
  { id: 'economy', label: 'Economy', color: 'bg-secondary text-white' },
  { id: 'society', label: 'Society', color: 'bg-warning text-black' },
  { id: 'diplomacy', label: 'Diplomacy', color: 'bg-positive text-white' },
  { id: 'human-rights', label: 'Human Rights', color: 'bg-fg text-bg' },
  { id: 'energy', label: 'Energy', color: 'bg-accent-soft text-accent' },
]

export const NEWS: NewsItem[] = [
  {
    id: 'irgc-fears-uprising-2026-08-27',
    title: "IRGC Intelligence warns of another uprising as it blames \"foreign adversaries\"",
    summary:
      "A statement issued by the IRGC Intelligence Organization on Aug 27 claims that after failing to topple the government through military pressure, foreign actors have shifted to stoking domestic unrest. The statement lists exploiting shortages, fomenting dissatisfaction, and \"inciting people to extend dissatisfaction to the streets\" — a rare official acknowledgement that street-level protest, not foreign war, is what the security apparatus actually fears.",
    category: 'politics',
    publishedAt: '2026-08-29T09:30:00+03:30',
    source: { name: 'NCRI', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-29-2026/' },
    importance: 3,
    location: 'Tehran',
    tags: ['IRGC', 'protests', 'security'],
  },

  {
    id: 'fuel-shortage-spreads-2026-08-26',
    title: "Fuel shortage spreads as officials signal a price hike is \"inevitable\"",
    summary:
      "Long gasoline queues were reported across Tehran, the Tehran–Karaj highway, Karaj and Mashhad on Aug 26. The state-run Shargh newspaper confirmed city-wide lines, while another state outlet cited a daily deficit of roughly 14 million liters. Vice President Mohammad Jafar Ghaempanah said prices would \"inevitably\" be revised — a sharper message than the spokesperson's denial a day earlier.",
    category: 'economy',
    publishedAt: '2026-08-29T08:00:00+03:30',
    source: { name: 'Iran News in Brief', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-29-2026/' },
    importance: 3,
    location: 'Tehran, Mashhad, Karaj',
    tags: ['fuel', 'inflation', 'subsidies'],
  },

  {
    id: 'oman-pakistan-mediation-2026-08-28',
    title: "Omani and Pakistani envoys in Tehran as US–Iran back-channel heats up",
    summary:
      "Omani Foreign Minister Badr al-Busaidi and Pakistani army chief Asim Munir both visited Tehran this week. Analysts frame the visits as an attempt to pull the US and Iran back from a military confrontation over the Strait of Hormuz. Inside Iran's own establishment the picture is split: at least one lawmaker has publicly called for a military response, while the foreign ministry continues to favor the negotiating track.",
    category: 'diplomacy',
    publishedAt: '2026-08-29T07:15:00+03:30',
    source: { name: 'Iran Newswire', url: 'https://irannewswire.org/iran-islamabad-agreement-us-talks-hormuz-divisions/' },
    importance: 3,
    location: 'Tehran',
    tags: ['Oman', 'Pakistan', 'Hormuz', 'US-Iran'],
  }

]

// Sort: importance DESC, then date DESC
export function sortedNews(items: NewsItem[] = NEWS): NewsItem[] {
  return [...items].sort((a, b) => {
    if (b.importance !== a.importance) return b.importance - a.importance
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export const END_OF_DAY_DATE = '2026-08-29'
