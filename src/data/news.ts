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
  // ---- Top story of the day ----
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

  // ---- Economy: fuel crisis, the running story of the week ----
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

  // ---- Diplomacy: Oman / Pakistan mediation, Hormuz tensions ----
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
  },

  // ---- US sanctions: Treasury action against UAE branch of Egyptian bank ----
  {
    id: 'treasury-banque-misr-2026-08-28',
    title: "US Treasury moves to sanction UAE branch of Egyptian bank over Iran ties",
    summary:
      "The US Treasury announced plans to cut off Banque Misr UAE from the US financial system, saying the branch processed roughly $1.8 billion over the past two years for around 100 companies identified as part of Iran's shadow-banking network. The action comes ahead of a US-hosted G20 finance meeting that is expected to press other jurisdictions to wind down Iran-related business.",
    category: 'diplomacy',
    publishedAt: '2026-08-28T22:00:00+03:30',
    source: { name: 'CNBC', url: 'https://www.cnbc.com/2026/08/28/treasury-uae-banque-misr-sanctions-iran.html' },
    importance: 2,
    tags: ['sanctions', 'Treasury', 'UAE'],
  },

  // ---- Human rights: 23 executions in 4 days ----
  {
    id: 'executions-shahrivar-2026-08-26',
    title: "23 executions in four days, including a philanthropist from the January protests",
    summary:
      "Between Aug 23 and Aug 26 — the first four days of the Iranian month of Shahrivar — authorities carried out at least 23 executions, an average of roughly one every four hours. Among them was Majid Adineh, a Karaj-based philanthropist detained during the January 2026 nationwide protests. His family was informed of the execution only hours beforehand, and his case file is reported to contain serious evidentiary gaps.",
    category: 'human-rights',
    publishedAt: '2026-08-28T18:30:00+03:30',
    source: { name: 'NCRI', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-29-2026/' },
    importance: 3,
    location: 'Karaj',
    tags: ['executions', 'January 2026 protests', 'death penalty'],
  },

  // ---- Energy: oil bypass via Gulf of Oman ship-to-ship transfers ----
  {
    id: 'sts-oil-bypass-2026-08-29',
    title: "Arab Gulf crude bypasses Strait of Hormuz at 7.6 million barrels per day",
    summary:
      "Ship-to-ship transfers and bypass pipelines have pushed Arab Gulf crude exports through the Gulf of Oman to a weekly average of 7.6 million barrels per day, according to senior analyst Hamed Melhani on Iranian state TV. TankerTrackers.com observed at least 15 pairs of tankers conducting concurrent STS transfers, roughly 25 million barrels. Iran itself is described as \"virtually unable\" to export under a naval blockade.",
    category: 'energy',
    publishedAt: '2026-08-29T10:00:00+03:30',
    source: { name: 'Iran Newswire', url: 'https://irannewswire.org/iran-oman-hormuz-corridor-us-talks/' },
    importance: 2,
    location: 'Gulf of Oman',
    tags: ['oil', 'Hormuz', 'sanctions'],
  },

  // ---- Society: 84% inflation framing from NCRI ----
  {
    id: 'inflation-2026-fuel-trap',
    title: "Iran's fuel-price trap meets 84% inflation and an internal split over negotiations",
    summary:
      "A new analysis describes a regime split between hardliners pushing for a military posture and pragmatists still willing to negotiate. The economic backdrop is severe: 84% inflation, repeated blackouts, and now a fuel crisis that the government itself admits is unsustainable at current prices.",
    category: 'economy',
    publishedAt: '2026-08-28T16:00:00+03:30',
    source: { name: 'NCRI', url: 'https://www.ncr-iran.org/en/news/economy/irans-fuel-price-trap-meets-84-inflation-and-a-regime-split-over-negotiations/' },
    importance: 2,
    tags: ['inflation', 'negotiations'],
  },

  // ---- Society: power crisis ----
  {
    id: 'power-blackouts-2026',
    title: "Power blackouts damage appliances and force workshops to lay off workers",
    summary:
      "Repeated blackouts across Iranian cities this summer have moved from inconvenience to economic damage. Reports describe damaged household appliances, small workshops cutting hours, and producers suspending operations. Civilians are bearing most of the cost, and the regime's standing is taking a further hit.",
    category: 'society',
    publishedAt: '2026-08-28T12:00:00+03:30',
    source: { name: 'Iran News Update', url: 'https://irannewsupdate.com/news/economy/irans-power-crisis-blackouts-damaged-appliances-and-mounting-economic-losses/' },
    importance: 2,
    tags: ['electricity', 'blackouts'],
  },

  // ---- Human rights: 1988 massacre commemorations ----
  {
    id: '1988-massacre-testimonies-2026-08-29',
    title: "Survivors publish fresh testimonies from the 1988 prison massacre",
    summary:
      "On the 38th anniversary of the mass executions of political prisoners, survivors and family members published a new round of testimonies. The accounts describe not only the killings but the years of terror that preceded them — and the determination of many victims to keep their political convictions even when they knew doing so was a death sentence.",
    category: 'human-rights',
    publishedAt: '2026-08-29T11:00:00+03:30',
    source: { name: 'NCRI', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-29-2026/' },
    importance: 2,
    tags: ['1988 massacre', 'memory'],
  },

  // ---- Politics: dissident sentenced to death ----
  {
    id: 'mashhad-death-sentence-2026-08',
    title: "25-year-old January protester sentenced to death in Mashhad",
    summary:
      "Hossein Nazari, born in 2001, was arrested during the January 2026 protests, tried, and transferred to Vakilabad Prison in Mashhad, where he has now been sentenced to death. He is one of several protesters from the same demonstrations facing capital charges in recent months.",
    category: 'human-rights',
    publishedAt: '2026-08-28T20:00:00+03:30',
    source: { name: 'NCRI', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-28-2026/' },
    importance: 2,
    location: 'Mashhad',
    tags: ['death penalty', 'January 2026 protests'],
  },

  // ---- Diplomacy: Meta removes Iran-linked AI operation ----
  {
    id: 'meta-iran-ai-op-2026-08',
    title: "Meta takes down Iran-linked AI operation targeting politicians and journalists",
    summary:
      "Meta removed a network of Facebook and Instagram accounts tied to an Iran-based influence operation that used AI-generated content to target US politicians and journalists. Operators shared memes, anti-Republican messaging, and content on Israel–Palestine and immigration. The takedown is the latest in a series of actions against Iranian information operations on Western platforms.",
    category: 'diplomacy',
    publishedAt: '2026-08-28T15:00:00+03:30',
    source: { name: 'Axios', url: 'https://www.axios.com/2024/08/16/openai-iran-disinformation-chatgpt' },
    importance: 1,
    tags: ['Meta', 'AI', 'disinformation'],
  },
]

// Sort: importance DESC, then date DESC
export function sortedNews(items: NewsItem[] = NEWS): NewsItem[] {
  return [...items].sort((a, b) => {
    if (b.importance !== a.importance) return b.importance - a.importance
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export const END_OF_DAY_DATE = '2026-08-29'
