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
export const LAST_UPDATED: string = "2026-09-04T12:18:56+03:30"

export const NEWS: NewsItem[] = [
  
  {
    id: "api-046ed4870409fd2b",
    title: "Nikkei Falls for Fourth Day as Stronger Yen and Rate Uncertainty Weigh",
    summary: "Tokyo stocks ended mixed on September 3, with the Nikkei 225 closing at 64,214.48, down 111.16 points, as uncertainty over interest rates and currencies kept pressure on risk assets, while the broader TOPIX rose 0.5% to 4,102.04. (News On Japan)",
    category: "energy",
    publishedAt: "2026-09-03T12:15:25+03:30",
    source: {"name": "Newsonjapan.com", "url": "https://newsonjapan.com/article/150612.php"},
    imageUrl: "https://i2.ytimg.com/vi/lHT6w4gptQw/maxresdefault.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-fc5dd6e5f1aedd16",
    title: "Benchmarks trade near the flat line; Europe opens in the green",
    summary: "The benchmark indices traded near the flat line in afternoon trade. The Nifty traded below the 23,950 mark. IT, FMCG and metals shares declined while banks, realty and financial stocks managed to trade in the green.",
    category: "energy",
    publishedAt: "2026-09-03T11:50:01+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/markets/capital-market-news/benchmarks-trade-near-the-flat-line-europe-opens-in-the-green-126090300597_1.html"},
    imageUrl: "https://www.business-standard.com/assets/web-assets/images/Business_Standard_1_685x385.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c199c79aefffd034",
    title: "Germany sees record high petrol prices as Trump's war in Iran drags on",
    summary: "The price of E10 petrol was at the highest point yet seen in Germany on average on Wednesday. Costs are rising due to escalations in Iran as well shipping restrictions on the Rhine.",
    category: "energy",
    publishedAt: "2026-09-03T11:41:07+03:30",
    source: {"name": "The Local Germany", "url": "https://www.thelocal.de/20260903/germany-sees-record-high-petrol-prices-as-trumps-war-in-iran-drags-on"},
    imageUrl: "https://assets.thelocal.com/cdn-cgi/rs:fit:1200/quality:75/plain/https://apiwp.thelocal.com/wp-content/uploads/2026/08/watermarks-logo-planet_fox-gas-station-4978824_1280.jpeg@webp",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-610fab8c3fd42aa6",
    title: "Giorgia Meloni is Italy's longest-serving postwar leader. Will that stability last?",
    summary: "On Friday, Italian Prime Minister Giorgia Meloni's administration will celebrate 1,413 consecutive days in office, overtaking a record set by Silvio Berlusconi's second administration to become the longest-lasting government in the country's postwar history.",
    category: "politics",
    publishedAt: "2026-09-03T11:30:00+03:30",
    source: {"name": "CBC News", "url": "https://www.cbc.ca/news/world/giorgia-meloni-italy-longest-pm-analysis-9.7329936"},
    imageUrl: "https://i.cbc.ca/ais/e4197bf8-e0ee-4358-b333-97d010c30abb,1788376367257/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C524%2C5031%2C2829%29%3BResize%3D620",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-48567609d3518e25",
    title: "Do you know what happens to the human brain when we let AI do the thinking? It might be more worrying than you think",
    summary: "As artificial intelligence becomes deeply embedded in everyday life, concerns are growing over its impact on human thinking. An MIT Media Lab study suggests that excessive dependence on AI tools such as ChatGPT could weaken mental engagement, creativity and o\u2026",
    category: "human-rights",
    publishedAt: "2026-09-03T11:20:53+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/education/news/do-you-know-what-happens-to-the-human-brain-when-we-let-ai-do-the-thinking-it-might-be-more-worrying-than-you-think/articleshow/133729402.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133729402,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-473afaa6953b4d92",
    title: "Iran Red Crescent urges ICC probe into deadly US strike on wedding party",
    summary: "Outrage grows over US strike that killed four people and wounded 67 at a wedding party in Kuhestak.",
    category: "human-rights",
    publishedAt: "2026-09-03T11:11:45+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/news/2026/9/3/iran-red-crescent-urges-icc-probe-into-deadly-us-strike-on-wedding-party"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/09/2026-09-02T184430Z_116037912_RC23BNASDV7N_RTRMADP_3_IRAN-CRISIS-USA-STRIKES-SIRIK-1788419182.jpg?resize=1920%2C1440",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-953e06a5fee8e2fc",
    title: "China\u2019s paper-tiger alliance shows the US can\u2019t isolate Iran",
    summary: "Donald Trump's economic strategy against Iran faces significant global challenges. Treasury Secretary Bessent's with us or against us stance echoes past policies. However, the world in 2026 is different from 2001, with shifting alliances. The Shanghai Co\u2026",
    category: "economy",
    publishedAt: "2026-09-03T10:56:38+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/chinas-paper-tiger-alliance-shows-the-us-cant-isolate-iran/articleshow/133728942.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133728966,width-1200,height-630,imgsize-69912,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-51a701cdf04b4b37",
    title: "India wants tariff edge before signing final US trade deal: Piyush Goyal",
    summary: "India awaits US tariff advantage for trade deal finalization. The agreement was announced on February 3, 2026, reducing US tariffs on Indian goods. New Delhi seeks a clear tariff edge over competing manufacturing economies. India has protected its agricult\u2026",
    category: "energy",
    publishedAt: "2026-09-03T10:42:39+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-wants-tariff-edge-before-signing-final-us-trade-deal-piyush-goyal/articleshow/133728498.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133728508,width-1200,height-630,imgsize-71524,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e92df5e167d1b13b",
    title: "Xi visits Egypt as China seeks deeper influence across the Mideast",
    summary: "China's President Xi Jinping visits Egypt this week for the first time in a decade. The trip illustrates China's growing ambitions at a time when U.S. influence has been weakened by its war in Iran.",
    category: "energy",
    publishedAt: "2026-09-03T10:34:25+03:30",
    source: {"name": "NPR", "url": "https://www.npr.org/2026/09/03/nx-s1-5955295/xi-china-visit-egypt"},
    imageUrl: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3527x1984+0+184/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F48%2Fe9%2F473db85e4eb3a270c726a37cef83%2Fap26245491938108.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-68d5586b1ed7b6a1",
    title: "\u201cPeople have gathered to see the deadly cobra\u201d; Rat trap turns snake trap in Bihar: family finds venomous cobra inside cage in Bettiah",
    summary: "A family in Bihar's West Champaran district found a venomous cobra trapped in their rat cage. The incident occurred after they set the trap to catch troublesome rodents around their home. Villagers gathered to witness the unusual capture, which drew significa\u2026",
    category: "human-rights",
    publishedAt: "2026-09-03T10:31:59+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/city/people-have-gathered-to-see-the-deadly-cobra-rat-trap-turns-snake-trap-in-bihar-family-finds-venomous-cobra-inside-cage-in-bettiah/articleshow/133727904.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133728118,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-63c4dc464c965a2a",
    title: "Dollar index pulls back notably as oil halts recent rally; sharp yen rally weighs",
    summary: "The dollar index pulled back sharply on Thursday as oil halted recent rally on signs of easing geo-political concerns. President Trump said the latest attacks on Iran would be short-lived, easing inflation concerns and reducing safe-haven demand for the green\u2026",
    category: "energy",
    publishedAt: "2026-09-03T10:31:02+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/markets/capital-market-news/dollar-index-pulls-back-notably-as-oil-halts-recent-rally-sharp-yen-rally-weighs-126090300459_1.html"},
    imageUrl: "https://www.business-standard.com/assets/web-assets/images/Business_Standard_1_685x385.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-28a7303b5ea1293b",
    title: "Oil prices dip as markets assess potential US military action against Iran",
    summary: "Market reassessment of geopolitical risks suggests temporary stabilization, impacting future oil price trajectories and supply expectations. The post Oil prices dip as markets assess potential US military action against Iran appeared first on Crypto Briefing.",
    category: "energy",
    publishedAt: "2026-09-03T10:22:33+03:30",
    source: {"name": "Crypto Briefing", "url": "https://cryptobriefing.com/oil-prices-dip-as-markets-assess-potential-us-military-action-against-iran/"},
    imageUrl: "https://static.cryptobriefing.com/wp-content/uploads/2026/06/08093645/pexels-photo-16862261-699x457.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-19255b127c89c7b9",
    title: "European gas prices steady as Trump downplays Iran strike duration",
    summary: "Stabilized gas prices suggest reduced immediate geopolitical risk, but ongoing U.S.-Iran tensions could still impact future energy markets. The post European gas prices steady as Trump downplays Iran strike duration appeared first on Crypto Briefing.",
    category: "energy",
    publishedAt: "2026-09-03T10:20:52+03:30",
    source: {"name": "Crypto Briefing", "url": "https://cryptobriefing.com/european-gas-prices-steady-as-trump-downplays-iran-strike-duration/"},
    imageUrl: "https://static.cryptobriefing.com/wp-content/uploads/2026/06/08093645/pexels-photo-16862261-699x457.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-90a5e9172217dd18",
    title: "China\u2019s support for Iran shows its limits as US ramps up pressure on Tehran",
    summary: "Beijing's support for Tehran is balanced against other relationships in the region, analysts say.",
    category: "energy",
    publishedAt: "2026-09-03T10:18:46+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/economy/2026/9/3/chinas-support-for-iran-shows-its-limits-as-us-ramps-up-pressure-on-tehran"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/09/2023-02-14T071531Z_228206069_RC2PAZ93F7BO_RTRMADP_3_CHINA-IRAN-1788309470_f1257f-1788330806.jpg?resize=1200%2C630&quality=80",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-773b35d179094f19",
    title: "PM Narendra Modi urges auto industry to innovate, pursue excellence and expand global footprint",
    summary: "Prime Minister Narendra Modi encouraged the Indian automobile industry to innovate and excel. He emphasized charting a bold path towards Viksit Bharat by 2047. Recent trade agreements offer greater international market access for Indian vehicles. Governmen\u2026",
    category: "economy",
    publishedAt: "2026-09-03T10:05:21+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/industry/auto/auto-news/pm-narendra-modi-urges-auto-industry-to-innovate-pursue-excellence-and-expand-global-footprint/articleshow/133727593.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133727634,width-1200,height-630,imgsize-222240,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-49ae01626b101560",
    title: "Today in Germany: A roundup of the latest news on Thursday",
    summary: "Russian suspects identified in Germany airport drone 'hybrid attack', energy industry calls for emergency backup system after grid attacks, foreign investment in Germany jumps 50 percent and more news on Thursday, September 3rd.",
    category: "economy",
    publishedAt: "2026-09-03T10:02:13+03:30",
    source: {"name": "The Local Germany", "url": "https://www.thelocal.de/20260903/today-in-germany-a-roundup-of-the-latest-news-on-thursday-134"},
    imageUrl: "https://assets.thelocal.com/cdn-cgi/rs:fit:1200/quality:75/plain/https://apiwp.thelocal.com/wp-content/uploads/2026/09/watermarks-logo-616330186.jpg@webp",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-5efac85f27ece544",
    title: "Oil importers are learning to live with a new reality as old routes of business fall apart",
    summary: "Ongoing tensions involving Iran are pushing major oil importers \u200bto develop alternative supply routes, which increasingly bypass the supply hubs that previously dominated global energy trade.",
    category: "energy",
    publishedAt: "2026-09-03T09:58:08+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/business/oil-importers-are-learning-to-live-with-a-new-reality-as-old-routes-of-business-fall-apart/articleshow/133727444.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133727586,width-1200,height-630,imgsize-92282,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-516d71979208194b",
    title: "Oil importers are learning to live with a new reality as old routes of business fall apart",
    summary: "Ongoing tensions involving Iran are pushing major oil importers \u200bto develop alternative supply routes, which increasingly bypass the supply hubs that previously dominated global energy trade.",
    category: "energy",
    publishedAt: "2026-09-03T09:58:08+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/business/oil-importers-are-learning-to-live-with-a-new-reality-as-old-routes-of-business-fall-apart/articleshow/133727612.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133727586,width-1200,height-630,imgsize-92282,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-be320d11eee75209",
    title: "Iran attacks US targets despite Trump threats",
    summary: "Iran attacked U.S. military bases in Kuwait on Sept. 3, despite President Donald Trump threatening further strikes in a fresh flare-up six months into the war.",
    category: "energy",
    publishedAt: "2026-09-03T09:57:06+03:30",
    source: {"name": "Hurriyet Daily News", "url": "https://www.hurriyetdailynews.com/iran-attacks-us-targets-despite-trump-threats-226394"},
    imageUrl: "https://image.hurimg.com/i/hurriyet/75/200x200/6a99132c5548acce71250ba4.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-78ddec2f9018b2f2",
    title: "'Out of kilter': Harris says Irish workers hit with higher tax rate sooner than other countries",
    summary: "Budget day is just over six weeks away and crunch talks are getting underway.",
    category: "energy",
    publishedAt: "2026-09-03T09:55:42+03:30",
    source: {"name": "TheJournal.ie", "url": "https://www.thejournal.ie/budget-2027-income-tax-cuts-7150471-Sep2026/"},
    imageUrl: "https://img2.thejournal.ie/article/7150471/river/?height=400&version=7150609",
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
