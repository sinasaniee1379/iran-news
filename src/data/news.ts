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
  | 'sport'

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
  { id: 'sport', label: 'Sport', color: 'bg-positive text-bg' },
]

// Last refresh timestamp (Asia/Tehran ISO). Updated by the auto-refresh
// cron job (see /home/sina/.local/bin/refresh_iran_news.py). Before the
// first cron run, this falls back to the build time.
export const LAST_UPDATED: string = "2026-08-29T20:15:57+03:30"

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
  },

  // ── Auto-fetched from NewsAPI daily at 12:00 IRST ──
  {
    id: "api-4d84a455eec9a641",
    title: "\u2018Dangerous Bet\u2019: How Candidates Are Grappling With The Redistricting War",
    summary: "Nearly a dozen states across the country have redrawn congressional districts, moving the partisan goalposts for many incumbents.",
    category: "politics",
    publishedAt: "2026-08-28T19:49:56+03:30",
    source: {"name": "The Daily Caller", "url": "https://dailycaller.com/2026/08/28/trump-candidates-texas-california-face-redistricting-war"},
    imageUrl: "https://images.dailycaller.com/image/width=1280,height=549,fit=cover,format=webp,f=auto/https://cdn01.dailycaller.com/wp-content/uploads/2026/08/GettyImages-2290241750.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-9ca82ae1df0ed479",
    title: "Warsh Says Fed Has \u201cWork to Do\u201d If Prices Don\u2019t Fall. They Won\u2019t. Rate Hikes Are Coming",
    summary: "Fed Chair Kevin Warsh just signaled that policymakers may have no choice but to act, and several forces already building in the economy suggest inflation is...",
    category: "energy",
    publishedAt: "2026-08-28T19:45:02+03:30",
    source: {"name": "24/7 Wall St.", "url": "https://247wallst.com/investing/2026/08/28/warsh-says-fed-has-work-to-do-if-prices-dont-fall-they-wont-rate-hikes-are-coming/"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/c77cded6239b0480798b03c7ad5b0e29d66b1ac1181f25bf9c02f0e545e844c0/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2F24_7_wall_st__718%2Fad4701c255d785e8f5b57f67b3abd133",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e80fd27025436055",
    title: "Oil Shrugs Off Trump\u2019s \u2018Toughest Sanctions in History\u2019",
    summary: "Oil holds near $90 despite sweeping Iran sanctions as uncertainty over Hormuz transits keeps markets on edge.",
    category: "energy",
    publishedAt: "2026-08-28T19:25:22+03:30",
    source: {"name": "Yahoo Entertainment", "url": "https://finance.yahoo.com/energy/articles/oil-shrugs-off-trump-toughest-155522337.html"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/44ad520364e79c83fb93971a8d2e227097f4140aa193af266cc0f3f040c4a2e4/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Foilprice.com%2Fb361592fbaa8f47c98abbce4602479c9.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c50e4ac77d490128",
    title: "Oil Shrugs Off Trump\u2019s \u2018Toughest Sanctions in History\u2019",
    summary: "Oil holds near $90 despite sweeping Iran sanctions as uncertainty over Hormuz transits keeps markets on edge. Friday, August 28, 2026 The US announcement of \u2018toughest sanctions in history\u2019 against Iran did relatively little to push oil prices away from their \u2026",
    category: "energy",
    publishedAt: "2026-08-28T19:25:22+03:30",
    source: {"name": "OilPrice.com", "url": "https://oilprice.com/Energy/Crude-Oil/Oil-Shrugs-Off-Trumps-Toughest-Sanctions-in-History.html"},
    imageUrl: "https://d32r1sh890xpii.cloudfront.net/article/1200x675/2026-08-28_u9qszqrv87.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-bcf2632d59e10dfa",
    title: "Netanyahu: The Philadelphia Years",
    summary: "In 1963, Benzion Netanyahu \u2014 a Jewish history academic and editor \u2014 and his wife, Tzila, packed up their three sons and moved across a [\u2026]",
    category: "politics",
    publishedAt: "2026-08-28T19:18:14+03:30",
    source: {"name": "phillymag.com", "url": "https://www.phillymag.com/news/2026/08/28/benjamin-netanyahu-elkins-park/"},
    imageUrl: "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2026/08/1200-PM2609_F_Netanyahu_03.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-f45d1a09c13be782",
    title: "People Are LOVING the Faces a CNN Panel Makes As Scott Jennings Explains Trump's WIN in Iran (WATCH)",
    summary: "CNN\u2019s chyron was already doing the heavy lifting for the narrative \u2014 treating Trump\u2019s victory talk like some embarrassing rerun of 2003 \u2014 when Scott Jennings decided to ignore the script and talk about results instead. Let's not pretend Jennings ever gives on\u2026",
    category: "politics",
    publishedAt: "2026-08-28T19:08:11+03:30",
    source: {"name": "Freerepublic.com", "url": "https://freerepublic.com/focus/f-bloggers/4393444/posts"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-84bfd4f7a1d4810b",
    title: "Trump Allies Allege Foreign Interference As Host At Israeli-Funded Media Outlet Repeatedly Targets Vance",
    summary: "Trump allies allege foreign interference as a host at an Israeli-funded media outlet has set its sights on targeting Vice President JD Vance.",
    category: "human-rights",
    publishedAt: "2026-08-28T19:00:34+03:30",
    source: {"name": "The Daily Caller", "url": "https://dailycaller.com/2026/08/28/jd-vance-emily-schrader-jns-adelson-israeli-influence-iltv"},
    imageUrl: "https://images.dailycaller.com/image/width=1280,height=549,fit=cover,format=webp,f=auto/https://cdn01.dailycaller.com/wp-content/uploads/2026/08/Untitled%20(7%20x%203%20in)-35.png",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-92b889e37d20bdc2",
    title: "Education Got There First? Plus OBC Vibes, AI, & Fish Porn!",
    summary: "My colleague Marisa Mission and I sat down with Ben Kornell to talk AI and ed tech for his Ed Tech Insiders podcast. We ranged across a few things including my belief that human aspects this work, not tools, will ultimately be the differentiator and best comp\u2026",
    category: "human-rights",
    publishedAt: "2026-08-28T18:43:46+03:30",
    source: {"name": "Eduwonk.com", "url": "https://www.eduwonk.com/2026/08/education-got-there-first.html"},
    imageUrl: "https://www.eduwonk.com/wp-content/uploads/2026/08/IMG_5446-2-768x1024.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-ab140144658ff397",
    title: "The numbers of the War in Iran: 7,900 dead, oil up 22%, only 7 ships a day passing through the Strait of Hormuz, $37.5 billion cost for the US",
    summary: "Six months after the US & Israeli attack on Tehran, the figures from the conflict, which still has no visible end, reveal the scale of the consequences for the parties involved The post The numbers of the War in Iran: 7,900 dead, oil up 22%, only 7 ships a da\u2026",
    category: "energy",
    publishedAt: "2026-08-28T18:24:00+03:30",
    source: {"name": "Protothema.gr", "url": "https://en.protothema.gr/2026/08/28/the-numbers-of-the-war-in-iran-7900-dead-oil-up-22-only-7-ships-a-day-passing-through-the-strait-of-hormuz-37-5-billion-cost-for-the-us/"},
    imageUrl: "https://en.protothema.gr/wp-content/uploads/2026/08/iran_missiles_mk-2.jpg-2.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a5c5cc9e1e500da4",
    title: "Progressive Leader Describes How the Left Is Going to Use a Number of \u201cWargames\u201d Before Midterm Election to Take Over Congress \u2013 Plan Involves Marc Elias and Norm Eisen",
    summary: "Progressive leader, Ian Bassin, tells how the left is running wargames against Republicans before the election. The enemy of the left is always Republicans and ordinary Americans. ===============================================================================\u2026",
    category: "politics",
    publishedAt: "2026-08-28T18:22:55+03:30",
    source: {"name": "Freerepublic.com", "url": "https://freerepublic.com/focus/f-bloggers/4393437/posts"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-0e33ed086d2e4c3b",
    title: "How Did the World Get to Be Held Hostage by Two Malevolent Cretins?",
    summary: "Today is the six-month anniversary of President Trump\u2019s war in Iran, which as any non-brainwashed human can see has been a failure in every sense. Meanwhile, with diplomacy stalled, Russian insiders tell Bloomberg News that Vladimir Putin is frustrated (poor \u2026",
    category: "diplomacy",
    publishedAt: "2026-08-28T18:19:45+03:30",
    source: {"name": "The New Republic", "url": "https://newrepublic.com/post/214884/trump-putin-world-hostage-two-cretins"},
    imageUrl: "https://images.newrepublic.com/33572535f5ad616595c60cf756ac5817b7757ff8.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-d556481ebefd65dd",
    title: "US seeking a deal to make Venezuela its gas pump \u2013 media",
    summary: "Venezuela is weighing an OPEC exit as Washington seeks a 100-year oil deal that could give US firms access to 90 billion barrels of reserves and secure crude for American refineries",
    category: "energy",
    publishedAt: "2026-08-28T17:54:44+03:30",
    source: {"name": "RT", "url": "https://www.rt.com/news/644774-venezuela-us-oil-deal/"},
    imageUrl: "https://mf.b37mrtl.ru/files/2026.08/article/6a91934420302735162e5e85.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-ac522beaeb0ccdca",
    title: "Venezuela weighs OPEC exit as U.S. discusses oil stake",
    summary: "Venezuela is considering whether it should quit OPEC, potentially delivering a fresh blow to the oil cartel it helped create. Read more.",
    category: "energy",
    publishedAt: "2026-08-28T17:26:55+03:30",
    source: {"name": "Financial Post", "url": "https://financialpost.com/commodities/energy/oil-gas/venezuela-opec-exit-us-oil-stake"},
    imageUrl: "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2026/08/0829-bc-oil-.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-b95517130b294f32",
    title: "Europe Heads Into Winter With Gas Storage at a Two-Decade Low",
    summary: "Another look at an expected shortfall for states in Europe meeting targets for gas reserves and what the consequences might be.",
    category: "energy",
    publishedAt: "2026-08-28T17:25:15+03:30",
    source: {"name": "Nakedcapitalism.com", "url": "https://www.nakedcapitalism.com/2026/08/europe-heads-into-winter-with-gas-storage-at-a-two-decade-low.html"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e947a4840439d9ad",
    title: "What the CIA director\u2019s mystery trip to Moscow says about Putin's next move",
    summary: "An unannounced but highly visible flight to Moscow by CIA Director John Ratcliffe aboard a U.S. Air Force transport plane this week has ignited a fierce debate over Vladimir Putin\u2019s next military move. With Russia\u2019s volunteer recruitment drying up and its eco\u2026",
    category: "economy",
    publishedAt: "2026-08-28T17:16:01+03:30",
    source: {"name": "CBC News", "url": "https://www.cbc.ca/news/world/what-the-cia-directors-mystery-trip-to-moscow-says-about-putin-s-next-move-9.7323838"},
    imageUrl: "https://i.cbc.ca/ais/aa75a1dd-4921-42d4-afd0-fd8dbafca816,1787919552320/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C298%2C5715%2C3214%29%3BResize%3D620",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-df1aa887ed2519d6",
    title: "Gulf oil tanker earnings near $650,000 a day as Iran war reshapes global shipping",
    summary: "The surge in tanker earnings due to geopolitical tensions and market consolidation could lead to increased global oil prices and economic instability. The post Gulf oil tanker earnings near $650,000 a day as Iran war reshapes global shipping appeared first on\u2026",
    category: "energy",
    publishedAt: "2026-08-28T16:55:18+03:30",
    source: {"name": "Crypto Briefing", "url": "https://cryptobriefing.com/gulf-oil-tanker-rates-iran-war/"},
    imageUrl: "https://static.cryptobriefing.com/wp-content/uploads/2026/08/28092515/library-gulf-oil-tanker-earnings-near-650-000-a-day-as-iran-war--800x450.png",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-99981c755204241e",
    title: "Trump looks at Republican midterm hopes and has a message for voters: \u2018Pretend, please, that I\u2019m on the ballot\u2019",
    summary: "From \"TRUMP CONSERVATIVE\" to \"PROVEN CONSERVATIVE\" \u2014 the quiet website edits of Republicans bracing for a Trump-less ballot.",
    category: "politics",
    publishedAt: "2026-08-28T16:53:42+03:30",
    source: {"name": "Fortune", "url": "https://fortune.com/2026/08/28/trump-republicans-distance-midterms-websites/"},
    imageUrl: "https://fortune.com/img-assets/wp-content/uploads/2026/08/AP26228735092714-e1787923304213.jpg?resize=1200,600",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-be1b9042aaa5ffe3",
    title: "\u2018I don\u2019t have to announce everything, do I?\u2019 Trump bristles at questions over blocked Hormuz, sanction-free China",
    summary: "As the Iran War marks its six-month anniversary, Trump insists he's \u201cnot in a hurry\u201d to get back to the negotiating table.",
    category: "economy",
    publishedAt: "2026-08-28T16:43:20+03:30",
    source: {"name": "Fortune", "url": "https://fortune.com/2026/08/28/trump-iran-war-six-months-china-sanctions/"},
    imageUrl: "https://fortune.com/img-assets/wp-content/uploads/2026/08/AP26239646639964-e1787922777262.jpg?resize=1200,600",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-7df890f9b323754e",
    title: "Iran Oil Exports Plunge 80% As Trump\u2019s Powerful Naval Blockade Crushes Crude Shipments",
    summary: "Iran Oil Exports Plunge 80% As Trump\u2019s Powerful Naval Blockade Crushes Crude Shipmentsthecrosswiredaily.com",
    category: "energy",
    publishedAt: "2026-08-28T16:36:04+03:30",
    source: {"name": "Thecrosswiredaily.com", "url": "https://thecrosswiredaily.com/business/energy/iran-oil-exports-plungel/"},
    imageUrl: "https://thecrosswiredaily.com/wp-content/uploads/2026/07/Supreme-Leader-Britannica-White-House-2026-07-19.png",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-dc3044be973fdf26",
    title: "Democrats have a golden opportunity. They\u2019re fighting each other instead",
    summary: "Maybe it's time to focus on dumping Trump first, and working out their internal disputes later",
    category: "politics",
    publishedAt: "2026-08-28T16:30:29+03:30",
    source: {"name": "Salon", "url": "https://www.salon.com/2026/08/28/democrats-have-a-golden-opportunity-theyre-fighting-each-other-instead/"},
    imageUrl: "https://www.salon.com/app/uploads/2025/09/Chuck-Schumer-Hakeem-Jeffries-2219672159.jpg",
    tags: ["iran"],
    importance: 2,
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
