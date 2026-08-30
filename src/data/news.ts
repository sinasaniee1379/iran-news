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
export const LAST_UPDATED: string = "2026-08-30T12:09:24+03:30"

export const NEWS: NewsItem[] = [
  
  {
    id: "api-2df48945b0e2dbdd",
    title: "Ex-IRGC commander Rezaei outlines conditions for US-Iran agreement",
    summary: "Rezaei's shift towards diplomacy may signal a potential thaw in US-Iran relations, impacting regional stability and future negotiations. The post Ex-IRGC commander Rezaei outlines conditions for US-Iran agreement appeared first on Crypto Briefing.",
    category: "diplomacy",
    publishedAt: "2026-08-29T11:43:09+03:30",
    source: {"name": "Crypto Briefing", "url": "https://cryptobriefing.com/ex-irgc-commander-rezaei-outlines-conditions-for-us-iran-agreement/"},
    imageUrl: "https://static.cryptobriefing.com/wp-content/uploads/2026/08/29041308/iran-taps-longtime-i-r-g-c-commander-mohsen-rezaei-to-top-se-1-800x420.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-8180f2a87d79b6d2",
    title: "As insults fly around trade, negotiators for Canada and the U.S. avoid getting personal in public",
    summary: "Politicians from Canada and the United States have thrown varying degrees of personal insults back and forth across the border this week, but the two governments' trade negotiators avoided getting personal \u2014 at least in public. Experts believe the two trade l\u2026",
    category: "politics",
    publishedAt: "2026-08-29T11:30:00+03:30",
    source: {"name": "CBC News", "url": "https://www.cbc.ca/news/world/canada-united-states-trade-war-mark-carney-donald-trump-doug-ford-dominic-leblanc-jamieson-greer-9.7322974"},
    imageUrl: "https://i.cbc.ca/ais/f5cb4b7e-d100-4287-8d7c-56ed47162bca,1787856728657/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C15%2C1526%2C858%29%3BResize%3D620",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c941a7f97caba442",
    title: "Trump announces deal for US to control 65 billion barrels of Venezuela's oil",
    summary: "Officials said the deal will bring nearly $100 billion in private investment to Venezuela.",
    category: "energy",
    publishedAt: "2026-08-29T10:37:10+03:30",
    source: {"name": "TheJournal.ie", "url": "https://www.thejournal.ie/trump-deal-us-control-65-billion-barrels-venezuelas-oil-7145989-Aug2026/"},
    imageUrl: "https://img2.thejournal.ie/article/7145989/river/?height=400&version=7145990",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-b5c30d4e64283e09",
    title: "\u2018Lake America\u2019, Kim Jong Un and more: Trump\u2019s distraction game heats up as Iran war drags on and midterms loom",
    summary: "From trolling Canada about a lake to suddenly talking about Kim Jong Un, US President Donald Trump's recent distractions speak louder than words. A week earlier, Trump suddenly brought up the prospect of talks with North Korean leader Kim, despite having rare\u2026",
    category: "politics",
    publishedAt: "2026-08-29T10:21:31+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/global-trends/lake-america-kim-jong-un-and-more-trumps-distraction-game-heats-up-as-iran-war-drags-on-and-midterms-loom/articleshow/133605847.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133606024,width-1200,height-630,imgsize-64010,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a7ca7a5807b55ac1",
    title: "Mark Carney\u2019s high-stakes gambit: why Canada walked out on US trade talks and doubled down on retaliatory levies",
    summary: "Canada has exited trade negotiations with US and launched dollar-for-dollar retaliatory tariffs, marking a sharp escalation in middle-power resistance against Washington.&nbsp;",
    category: "economy",
    publishedAt: "2026-08-29T10:05:13+03:30",
    source: {"name": "Livemint", "url": "https://www.livemint.com/opinion/mark-carney-s-high-stakes-gambit-why-canada-walked-out-on-us-trade-talks-and-doubled-down-on-retaliatory-levies-11787983325516.html"},
    imageUrl: "https://www.livemint.com/lm-img/img/2026/08/29/1600x900/logo/Trump-Tariffs-Canada-Timeline-0_1761979543191_1761979556847_1787985804285_9b05ba4d-12b9-4b4c-a4d3-62bcbe3a463c.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-b47a967cf18ff5f6",
    title: "U.S. Strikes in Iran Reported to Cut Water Supply for 20,000",
    summary: "U.S. military strikes that began on June 10 damaged two water reservoirs in Sirik county in Iran\u2019s southern Hormozgan province, according to Iranian state media. The strikes cut off the water supply for 20,000 residents amid temperatures reported between 45 a\u2026",
    category: "energy",
    publishedAt: "2026-08-29T09:30:00+03:30",
    source: {"name": "Naturalnews.com", "url": "https://www.naturalnews.com/2026-08-29-us-strikes-iran-reported-cut-water-supply.html"},
    imageUrl: "https://www.naturalnews.com/wp-content/uploads/sites/91/2026/08/us-strikes-iran-hormozgan-province-3662-original.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-85e83bd9f0105dfb",
    title: "The Sound of the Silenced: Inside the ten-year global fight to keep the internet on",
    summary: "This year marks 10 years of Access Now's #KeepItOn campaign fighting against internet shutdowns. We talked to the campaign lead about what's been done so far and what the next decade has in store.",
    category: "society",
    publishedAt: "2026-08-29T09:30:00+03:30",
    source: {"name": "TechRadar", "url": "https://www.techradar.com/vpn/vpn-privacy-security/the-sound-of-the-silenced-inside-the-ten-year-global-fight-to-keep-the-internet-on"},
    imageUrl: "https://cdn.mos.cms.futurecdn.net/YFudZPq8gUgWQjZPDDcKfR-759-80.png",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-d03c38ea999654d5",
    title: "Ecological cost of US-Iran war: Scientists warn ships stranded for months in the Strait of Hormuz could now carry invasive species, posing an \u2018immense international biosecurity threat\u2019",
    summary: "Ships stranded for months in the Strait of Hormuz now pose a bioinvasion risk. These vessels may carry dense communities of marine organisms to global ports. Scientists warn of a potential super-spreader event as shipping resumes. Affected ships could introdu\u2026",
    category: "energy",
    publishedAt: "2026-08-29T09:06:08+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/us/us-iran-war-scientists-warn-hormuz-ships-could-spread-invasive-species/articleshow/133604631.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133604927,width-1200,height-630,imgsize-242966,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-71d3cc3e122dbff1",
    title: "David McWilliams: Why the US\u2019s deteriorating financial health is bad news for Ireland",
    summary: "Foreign investment in US bond market has been a boon for Americans, but they are vulnerable to a change in sentiment",
    category: "politics",
    publishedAt: "2026-08-29T08:30:00+03:30",
    source: {"name": "The Irish Times", "url": "https://www.irishtimes.com/opinion/2026/08/29/why-the-uss-deteriorating-financial-health-is-bad-news-for-ireland/"},
    imageUrl: "https://www.irishtimes.com/resizer/v2/K2APABF4MJBOREPQO2RKIKLKHU.jpg?smart=true&auth=7522f406fbc04f17f76d30f4608255ef78f400b709eff5f2435d10cf0e0d92d2&width=1200&height=630",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e97d133f180f9bb3",
    title: "US secures majority control of Venezuelan oil reserves \u2013 Trump",
    summary: "President Trump announces a historic deal giving the US majority control of 65 billion barrels of Venezuelan oil reserves, promising investment and lower g Read More: https://punchng.com/us-secures-majority-control-of-venezuelan-oil-reserves-trump/",
    category: "energy",
    publishedAt: "2026-08-29T08:20:33+03:30",
    source: {"name": "The Punch", "url": "https://punchng.com/us-secures-majority-control-of-venezuelan-oil-reserves-trump/"},
    imageUrl: "https://cdn.punchng.com/wp-content/uploads/2026/01/23094151/WhatsApp-Image-2026-01-23-at-09.41.27-1200x630.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-1ba3a8d64496cf0e",
    title: "Iran\u2019s economy reels as US sanctions bite, foreign trade falls 35% amid war",
    summary: "Iran\u2019s foreign trade has fallen nearly 35% amid US sanctions and a naval blockade, while annual inflation reached 66% as economic pressure deepens.",
    category: "energy",
    publishedAt: "2026-08-29T08:19:54+03:30",
    source: {"name": "BusinessLine", "url": "https://www.thehindubusinessline.com/news/world/irans-economy-reels-as-us-sanctions-bite-foreign-trade-falls-35-amid-war/article71403529.ece"},
    imageUrl: "https://bl-i.thgim.com/public/incoming/vp2p3z/article71403544.ece/alternates/LANDSCAPE_1200/2026-08-26T013934Z_1532148388_RC2T5NA8KC6K_RTRMADP_3_IRAN-CRISIS-ECONOMY.JPG",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-9a57b62c26cc9372",
    title: "It's Now Official: We Just Made a Monumental Oil Deal With Venezuela - It's Great for the Country",
    summary: "I reported on Thursday that there was a massive deal in the offing to acquire an interest in Venezuela's oil fields that could help guarantee our energy security. Now, both President Donald Trump and Secretary of State Marco Rubio have weighed in, saying they\u2026",
    category: "energy",
    publishedAt: "2026-08-29T08:02:07+03:30",
    source: {"name": "Freerepublic.com", "url": "https://freerepublic.com/focus/f-news/4393515/posts"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-532c2bca8f53f17a",
    title: "Turkiye: 51% New Vehicles are Electric, 60% Power from Renewables, amid Hormuz Energy Shock",
    summary: "if we take the seven-month period from the beginning of the year until the end of July, about 60% of Turkiye's power was generated by renewables",
    category: "energy",
    publishedAt: "2026-08-29T07:45:20+03:30",
    source: {"name": "Juancole.com", "url": "https://www.juancole.com/2026/08/vehicles-electricity-renewables.html"},
    imageUrl: "https://media.juancole.com/images/2026/08/omer-haktan-bulut-JLU6ESWMnzA-unsplash.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-6b1f4af445fdb6b7",
    title: "The Trump Revolution is Real",
    summary: "Photo Credit:Image: Gage Skidmore via Flickr, CC BY-SA 2.0. Gage SkidmoreBy J.B. Shurk",
    category: "politics",
    publishedAt: "2026-08-29T07:30:00+03:30",
    source: {"name": "Americanthinker.com", "url": "https://www.americanthinker.com/articles/2026/08/the-trump-revolution-is-real/"},
    imageUrl: "https://images.americanthinker.com/ra/rahqs3xmqcxoc4f3b95r_1200.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e235d5991203e07d",
    title: "A Greek Mythical Trojan Horse May Portend An Islamic Reality For America",
    summary: "Photo Credit:ChatGPT ChatGPT for American ThinkerBy James ZumwaltThe citizens of Troy sealed their fate by assuming there was no war. Are we going to make the same mistake?",
    category: "politics",
    publishedAt: "2026-08-29T07:30:00+03:30",
    source: {"name": "Americanthinker.com", "url": "https://www.americanthinker.com/articles/2026/08/a-greek-mythical-trojan-horse-may-portend-an-islamic-reality-for-america/"},
    imageUrl: "https://images.americanthinker.com/ym/yms0kconunroouxpuoxz_1200.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-8af10d1c66087f3f",
    title: "The outer war with Iran and the inner war with wokeness",
    summary: "By Jim DavisIf we keep obsessing over diversity and inclusion, the bad guys are going to conquer us.",
    category: "politics",
    publishedAt: "2026-08-29T07:30:00+03:30",
    source: {"name": "Americanthinker.com", "url": "https://www.americanthinker.com/blog/2026/08/the-outer-war-with-iran-and-the-inner-war-with-wokeness/"},
    imageUrl: "https://images.americanthinker.com/imported/2024-02/252344_1200.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-8b1388e29abbce91",
    title: "Venezuela: Did Trump just make a deal with the devil?",
    summary: "By Monica ShowalterShould Trump be making this deal with a regime as detested as Venezuela's? There's a lot of good in it, but in the long run, can it work?",
    category: "energy",
    publishedAt: "2026-08-29T07:30:00+03:30",
    source: {"name": "Americanthinker.com", "url": "https://www.americanthinker.com/blog/2026/08/venezuela-did-trump-just-make-a-deal-with-the-devil/"},
    imageUrl: "https://images.americanthinker.com/ow/ow3hhhgdjtyupruxj4ks_1200.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e04287af79b3bb96",
    title: "Trump announces 'biggest oil deal in world history' with Venezuela",
    summary: "The landmark agreement with Venezuela will give the US majority control over more than 65 billion barrels of proven crude oil reserves",
    category: "energy",
    publishedAt: "2026-08-29T07:06:14+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/world-news/trump-announces-biggest-oil-deal-in-world-history-with-venezuela-126082900046_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2026-07/03/thumb/featurecrop/1200X628/1783048488-8817.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-aa52e87ea92d0470",
    title: "Multipolar Eurasia? Here is why India sticks with the SCO",
    summary: "Indian PM Narendra Modi is traveling for the Shanghai Cooperation Organization (SCO) summit in Bishkek, Kyrgyzstan. SCO is the only multilateral platform which can facilitate India\u2019s engagement with Pakistan and China.",
    category: "politics",
    publishedAt: "2026-08-29T06:27:52+03:30",
    source: {"name": "RT", "url": "https://www.rt.com/india/644778-multipolar-eurasia-sco-india/"},
    imageUrl: "https://mf.b37mrtl.ru/files/2026.08/article/6a91991e85f54042b2072a39.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-50b7aaf3c5d247a1",
    title: "\u2018Goods Are Not Coming In\u2019: Tehran Braces for Unrest as Trump Intensifies Economic Offensive",
    summary: "Iranian President Masoud Pezeshkian acknowledged Friday that the U.S. blockade has slashed Iran\u2019s trade and left critical imports \u2014 including gasoline \u2014 unable to enter the country, as the Trump administration intensifies an economic offensive aimed at isolat\u2026",
    category: "energy",
    publishedAt: "2026-08-29T06:24:43+03:30",
    source: {"name": "Breitbart News", "url": "https://www.breitbart.com/politics/2026/08/28/goods-not-coming-tehran-braces-unrest-trump-intensifies-economic-offensive/"},
    imageUrl: "https://media.breitbart.com/media/2026/08/Masoud-Pezeshkian-President-of-Iran-Sept-2025-ap-640x335.jpg",
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
