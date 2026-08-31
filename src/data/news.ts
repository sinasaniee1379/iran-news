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
export const LAST_UPDATED: string = "2026-08-31T14:38:46+03:30"

export const NEWS: NewsItem[] = [
  
  {
    id: "api-4c39414b52fefc14",
    title: "Links 8/30/2026",
    summary: "Our strategic daily links: mother and child, Viking dating, Nepal disaster, great leap forward, Mideast horrors, Ukraine burning, vanishing privacy, Trumpishness, Musk world, hapless Democrats, immigration troubles, Mr. market, AI, and wretched excess",
    category: "energy",
    publishedAt: "2026-08-30T14:25:07+03:30",
    source: {"name": "Nakedcapitalism.com", "url": "https://www.nakedcapitalism.com/2026/08/links-8-30-2026.html"},
    imageUrl: "https://www.nakedcapitalism.com/wp-content/uploads/2026/08/WIYW-Hummingbird-1-1024x819-1.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-f3204c47a137be8d",
    title: "US Treasury's Bessent faces G20 diplomacy test amid tariffs, Iran war",
    summary: "The unresolved conflict has kept the Strait of Hormuz closed, sapping growth from nearly all G20 economies",
    category: "energy",
    publishedAt: "2026-08-30T14:07:00+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/world-news/us-treasury-s-bessent-faces-g20-diplomacy-test-amid-tariffs-iran-war-126083000399_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-10/18/thumb/fitandfill/1200X628/1760757582-3791.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-63e366addd5e83bb",
    title: "No, Tehran is not winning | CNN Politics",
    summary: "As the latest phase of the war unfolds, Iran is losing its leverage in Hormuz",
    category: "energy",
    publishedAt: "2026-08-30T14:00:29+03:30",
    source: {"name": "CNN", "url": "https://www.cnn.com/2026/08/30/politics/iran-losing-leverage-hormuz-mcgurk"},
    imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2270538685-20260829170145430.jpg?c=16x9&q=w_800,c_fill",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-bf9ae4878272b107",
    title: "Turkey, Saudi Arabia, Pakistan to hold first defence pact meeting, source says",
    summary: "Top officials from Turkey, Saudi Arabia, and Pakistan met Monday for a defense accord. This joint defense agreement aims to strengthen collective deterrence against aggression. Discussions will cover enhancing defense capabilities and interoperability among\u2026",
    category: "energy",
    publishedAt: "2026-08-30T13:38:12+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/defence/turkey-saudi-arabia-pakistan-to-hold-first-defence-pact-meeting-source-says/articleshow/133627350.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133627360,width-1200,height-630,imgsize-181062,overlay-etdefence/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-2f30a7aa0f19b669",
    title: "US Treasury's Bessent faces G20 diplomacy test amid tariffs, Iran war, bond turmoil",
    summary: "US Treasury Secretary Scott Bessent will push G20 economies to reduce trade imbalances, boost growth and cut ties with Iran at meetings in North Carolina. The talks come amid tariff tensions, high energy prices and growing concerns over US debt, which recentl\u2026",
    category: "energy",
    publishedAt: "2026-08-30T13:36:22+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/business/us-treasurys-bessent-faces-g20-diplomacy-test-amid-tariffs-iran-war-bond-turmoil/articleshow/133627316.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133627346,width-1200,height-630,imgsize-105044,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-da94d6cbb40302eb",
    title: "Mapping Iran war\u2019s strikes on Gulf energy \u2013 and what comes next for oil",
    summary: "Six months into the war on Iran, the largest US oil companies have posted their biggest profits since 2022, selling less oil at far higher prices. But the conflict is also putting their longstanding Gulf investments at risk, exposing the industry\u2019s uneasy bal\u2026",
    category: "energy",
    publishedAt: "2026-08-30T13:35:22+03:30",
    source: {"name": "Biztoc.com", "url": "https://biztoc.com/x/f3a6ea3fd67e7017"},
    imageUrl: "https://biztoc.com/cdn/f3a6ea3fd67e7017_s.webp",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-aea23bba074b0778",
    title: "US Treasury's Bessent faces G20 diplomacy test amid tariffs, Iran war, bond turmoil",
    summary: "ASHEVILLE, North Carolina, Aug 30 (Reuters) - U. Treasury Secretary Scott Bessent faces a major test of his economic diplomacy skills this week as he presses...",
    category: "energy",
    publishedAt: "2026-08-30T13:34:22+03:30",
    source: {"name": "Yahoo Entertainment", "url": "https://finance.yahoo.com/economy/policy/articles/us-treasurys-bessent-faces-g20-100422244.html"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/ea5cbecb305a01ab3c2f634c2b456dd5767ac74e9560866a64388893fbb7def0/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Freuters.com%2F778c8e2c1d33c65e07de5140af3d4619.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-5224db36791c33bd",
    title: "Iran sentences 10 protesters to death amid Isfahan crackdown",
    summary: "The harsh sentencing may escalate unrest, challenge regime stability, and influence international responses, hinting at potential regime change. The post Iran sentences 10 protesters to death amid Isfahan crackdown appeared first on Crypto Briefing.",
    category: "human-rights",
    publishedAt: "2026-08-30T13:31:57+03:30",
    source: {"name": "Crypto Briefing", "url": "https://cryptobriefing.com/iran-sentences-10-protesters-to-death-amid-isfahan-crackdown/"},
    imageUrl: "https://static.cryptobriefing.com/wp-content/uploads/2026/08/30060156/iran-charges-more-than-750-over-riots-issues-first-death-sen-1-800x420.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-485e7923ec84ac31",
    title: "Nuclear Safeguards Are Gone \u2013 Former Canadian Foreign Minister Pt. 1/2",
    summary: "Lloyd Axworthy, the former Canadian Foreign Minister who led the campaign to ban landmines, traces how the memory of nuclear danger has faded even as more countries flirt with joining the club.",
    category: "human-rights",
    publishedAt: "2026-08-30T13:30:33+03:30",
    source: {"name": "Nakedcapitalism.com", "url": "https://www.nakedcapitalism.com/2026/08/nuclear-safeguards-are-gone-former-canadian-foreign-minister-pt-1-2.html"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a0974447e963651c",
    title: "Democrats: Make Peace With Becoming a Little Radical",
    summary: "As I said a few weeks ago, I don\u2019t really believe a lot of the hype about the Democratic primaries this year. I don\u2019t think that the United States is in the throes of a socialist revolution that will decimate the moderates. What I do see is a lot of voter ent\u2026",
    category: "politics",
    publishedAt: "2026-08-30T13:30:00+03:30",
    source: {"name": "The New Republic", "url": "https://newrepublic.com/post/214852/democrats-make-peace-becoming-little-radical"},
    imageUrl: "https://images.newrepublic.com/c8105cb8b0b6d642ac00d5cbc0e582472158b1b5.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-856e1c36ca2fbe2e",
    title: "Canada and Iran Defy Trump Economic Offensives",
    summary: "New York Magazine: \u201cn terms of their relations with the U.S. Canada, and Iran have very little in common. One is America\u2019s closest neighbor and second-largest trade partner, sharing the world\u2019s longest international border, extensive economic and cultural tie\u2026",
    category: "politics",
    publishedAt: "2026-08-30T13:30:00+03:30",
    source: {"name": "Politicalwire.com", "url": "https://politicalwire.com/2026/08/30/canada-and-iran-defy-trump-economic-offensives/"},
    imageUrl: "https://politicalwire.com/wp-content/uploads/2018/02/PW-podcast-logo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-17ca054f15786a22",
    title: "Israel says Netanyahu\u2019s son \u2018urgently evacuated\u2019 from the US after threat",
    summary: "Right-wing activist and podcaster Yair Netanyahu lived in the US for several years before his hasty departure.",
    category: "politics",
    publishedAt: "2026-08-30T13:17:56+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/news/2026/8/30/israel-says-netanyahus-son-urgently-evacuated-from-the-us-after-threat"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/08/13090453-1788077532.jpg?resize=1920%2C1440",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a204ff41b1a49dfa",
    title: "The home front: How Israel, Iran, and US leaders have been hit by the war",
    summary: "Six months into the US-Israel war on Iran, the governments in the three countries are fighting political wars at home.",
    category: "economy",
    publishedAt: "2026-08-30T13:02:26+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/news/2026/8/30/the-home-front-how-israel-iran-and-us-leaders-have-been-hit-by-the-war"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/04/epa_69d2981fac8e-1775409183.jpg?resize=1920%2C1440",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-2013c7600f7ca4f3",
    title: "Iran war at 6 months: Who gained, who lost the most economically",
    summary: "Six months into the war, global economic fears have not fully materialized. Oil prices surged initially but have since eased from their peak. Financial markets have recovered strongly, boosted by artificial intelligence optimism. Airlines and farmers face inc\u2026",
    category: "energy",
    publishedAt: "2026-08-30T12:50:55+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/business/international-business/iran-war-at-6-months-who-gained-who-lost-the-most-economically/articleshow/133626634.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133626721,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c45cdcf0f6a7e07d",
    title: "Healey could hit oil firms and banks with 'windfall tax' in 'low key' Budget as he tries to avoid unpopular tax rises for workers",
    summary: "The Chancellor is said to be eying up a fresh levy on firms as the Treasury seeks to meet commitments including \u00a34.7billion for the Armed Forces inherited from Keir Starmer.",
    category: "energy",
    publishedAt: "2026-08-30T12:33:43+03:30",
    source: {"name": "Dailymail.com", "url": "https://www.dailymail.com/news/article-16090887/Healey-hit-oil-firms-banks-windfall-tax-Budget.html"},
    imageUrl: "https://i.dailymail.com/1s/2026/08/30/09/110936483-0-image-m-19_1788078462812.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-0db580c029c3d896",
    title: "Trump Loses His War to Make ZIRP Great Again",
    summary: "Trump's new Fed Chair signaled to markets that he will do the opposite of what Trump has long wanted and raise interest rates.",
    category: "energy",
    publishedAt: "2026-08-30T12:30:54+03:30",
    source: {"name": "Jezebel", "url": "https://www.jezebel.com/trump-loses-his-war-to-make-zirp-great-again"},
    imageUrl: "https://img.pastemagazine.com/wp-content/juploads/2026/08/main-Swearing-in_ceremony_for_Federal_Reserve_Chair_Kevin_Warsh_at_the_White_House_Friday_May_22_2026_-_8.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-378dbc5e3a66ed64",
    title: "Why Trump Won\u2019t Win His New Economic Wars, Either",
    summary: "President Trump is trying to use economic weapons to overpower Canada and Iran, but both are far tougher opponents than he seems to realize. These are more wars he can\u2019t win, writes Jonah Shepp.",
    category: "energy",
    publishedAt: "2026-08-30T12:30:18+03:30",
    source: {"name": "New York Magazine", "url": "http://nymag.com/intelligencer/article/trump-cant-win-economic-wars-against-canada-and-iran.html"},
    imageUrl: "https://pyxis.nymag.com/v1/imgs/4d1/de3/bbbbbe75207c440c8da2cebc489ad7a0a6-trump-oval-office-la-p.1x.rsocial.w1200.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a699fc7d5ede480d",
    title: "Iran\u2019s Mojtaba Khamenei urges Gulf rulers in written message to confront \u2018real enemy\u2019",
    summary: "Iran\u2019s Supreme Leader \u200bMojtaba Khamenei urged Muslim countries, particularly those in the Gulf, to unite against what he called their \u201creal enemy\u201d and said divisions among Muslims served the interests of their adversaries.",
    category: "energy",
    publishedAt: "2026-08-30T12:09:35+03:30",
    source: {"name": "NBC News", "url": "https://www.nbcnews.com/world/iran/irans-mojtaba-khamenei-urges-gulf-rulers-message-rcna595092"},
    imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2026-08/260829-iran-nd-3b84b5.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-6815e97ee867fdaf",
    title: "Security Affairs newsletter Round 592 by Pierluigi Paganini \u2013 INTERNATIONAL EDITION",
    summary: "A new round of the weekly Security Affairs newsletter has arrived! Every week, the best security articles from Security Affairs are free in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including international press. Hack One Rob\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-30T12:08:01+03:30",
    source: {"name": "Securityaffairs.com", "url": "https://securityaffairs.com/198124/security/security-affairs-newsletter-round-592-by-pierluigi-paganini-international-edition.html"},
    imageUrl: "https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-1940321a018246bc",
    title: "Mapping the Iran war\u2019s strikes on Gulf energy \u2013 and what comes next for oil - Al Jazeera",
    summary: "Mapping the Iran war\u2019s strikes on Gulf energy \u2013 and what comes next for oilAl Jazeera A power struggle in Iran could decide when Trump\u2019s war endsCNN Investors prosper and consumers pay as the Iran war exacts an uneven economic toll 6 months inAP News After 6 \u2026",
    category: "energy",
    publishedAt: "2026-08-30T12:02:54+03:30",
    source: {"name": "Slashdot.org", "url": "https://slashdot.org/firehose.pl?op=view&amp;id=185293252"},
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
