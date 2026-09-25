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
export const LAST_UPDATED: string = "2026-09-25T12:00:21+03:30"

export const NEWS: NewsItem[] = [
  
  {
    id: "api-f5965d82c3580ebd",
    title: "Why Canada's rolling out the red carpet for Vietnamese President T\u00f4 L\u00e2m",
    summary: "Vietnam and Canada can deepen their relationships on trade, energy and academia, say experts \u2014 but some say the Southeast Asian country's track record on human rights shouldn't be ignored.",
    category: "diplomacy",
    publishedAt: "2026-09-24T11:30:00+03:30",
    source: {"name": "CBC News", "url": "https://www.cbc.ca/news/politics/canada-vietnam-state-visit-trade-relationship-tariffs-9.7356179"},
    imageUrl: "https://i.cbc.ca/ais/317d7f88-fc90-4078-a893-e0d9affeaf5c,1790209268356/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C287%2C5500%2C3093%29%3BResize%3D620",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-4f437da19eeb4fc1",
    title: "DAILY CURRENT AFFAIRS IAS | UPSC Prelims and Mains Exam \u2013 24th September 2026",
    summary: "Archives (PRELIMS Focus) (MAINS Focus) The post DAILY CURRENT AFFAIRS IAS | UPSC Prelims and Mains Exam \u2013 24th September 2026 appeared first on IASbaba.",
    category: "human-rights",
    publishedAt: "2026-09-24T11:19:24+03:30",
    source: {"name": "Iasbaba.com", "url": "https://iasbaba.com/2026/09/daily-current-affairs-ias-upsc-prelims-and-mains-exam-24th-september-2026/"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-beb5d565dce2529b",
    title: "Power, Prudence, and Restraint in F\u00e9nelon\u2019s Telemachus",
    summary: "\u201cIf one is to judge by the fire and ardor with which this book is sought after, it is the most excellent of all books. Never were so many copies printed of any work; never were so many editions made of a single book; never has any writing been read by so many\u2026",
    category: "human-rights",
    publishedAt: "2026-09-24T11:00:45+03:30",
    source: {"name": "War on the Rocks", "url": "https://warontherocks.com/power-prudence-and-restraint-in-fenelons-telemachus/"},
    imageUrl: "https://warontherocks.com/wp-content/uploads/wotr-og-images/wotr-og-46978-de5aba703c44.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a8cb742d59759152",
    title: "Mr. Olympia schedule 2026: Dates, times, live stream to watch men's, women's bodybuilding events",
    summary: "Here's everything you need to know about Mr. Olympia 2026, including a full schedule and participant list for the annual bodybuilding competition.",
    category: "sport",
    publishedAt: "2026-09-24T10:30:01+03:30",
    source: {"name": "Sporting News", "url": "https://www.sportingnews.com/us/tsn/news/mr-olympia-schedule-2026-times-live-stream-watch-bodybuilding/1f0b6628afa9a07020047700"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/b706cefc7ca9e754bb49d8f4fd8012748e8fc624282cf2eb1cf5ddc98896b06f/lightyear_networkapi/resizefill_w1200_h675%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fthe_sporting_news_articles_584%2Fef9e2c4e088884983bc5a0e3783d1672",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c169d6a6d8ca9e1c",
    title: "Economics is humanities or mathematics? UP Police DSP\u2019s post sparks debate over where the subject really belongs",
    summary: "A post by UP Police DSP Anjali Kataria has sparked debate over whether Economics belongs with humanities or is better understood through its mathematical and quantitative foundations. Drawing on her Economics degree from Hindu College, Kataria highlighted sub\u2026",
    category: "human-rights",
    publishedAt: "2026-09-24T10:27:31+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/education/news/economics-is-humanities-or-mathematics-up-police-dsps-post-sparks-debate-over-where-the-subject-really-belongs/articleshow/134454095.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-134454144,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-d89ded30977cb268",
    title: "Asiad 2026: Indian men's kabaddi team tops Group A to reach semifinals",
    summary: "Defending champions India stormed into the men's kabaddi semi-finals following a 3721 win over Chinese Taipei in their final Group A fixture here on Thursday. The victory was India's fourth consecutive in the group stage, where the side earlier defeated South\u2026",
    category: "sport",
    publishedAt: "2026-09-24T10:06:50+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/sports/asian-games/asiad-2026-indian-men-s-kabaddi-team-tops-group-a-to-reach-semifinals-126092400337_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2026-09/21/thumb/resize/1200X628/1789972478-7128.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-719c74277b8eda21",
    title: "Gulf nations have found ways to keep oil flowing through the Iran war, but the costs are mounting",
    summary: "Gulf nations navigate costly oil transport challenges amid the Iran war, maintaining supply but facing escalating expenses and vulnerabilities.",
    category: "economy",
    publishedAt: "2026-09-24T09:33:23+03:30",
    source: {"name": "BusinessLine", "url": "https://www.thehindubusinessline.com/markets/commodities/gulf-nations-have-found-ways-to-keep-oil-flowing-through-the-iran-war-but-the-costs-are-mounting/article71502877.ece"},
    imageUrl: "https://bl-i.thgim.com/public/incoming/33hdrx/article71502954.ece/alternates/LANDSCAPE_1200/2026-09-05T073806Z_1899417788_RC2SCNA6876X_RTRMADP_3_IRAN-CRISIS-HORMUZ.JPG",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-474503fc37638e1e",
    title: "Asian Games Kabaddi: Indian men's team tops group; enters semis",
    summary: "India's men's kabaddi team secured a convincing victory against Chinese Taipei, advancing to the semi-finals. They dominated the match, leading comfortably at halftime and maintaining their performance in the second half. This win marked India's fourth consec\u2026",
    category: "sport",
    publishedAt: "2026-09-24T09:18:31+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/sports/other-sports/asian-games-kabaddi-indian-mens-team-tops-group-enters-semis/articleshow/134452827.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-134452947,width-1200,height-630,imgsize-158476,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-5ccb91e37dda933c",
    title: "Kabaddi: India Advances To Semi-Finals",
    summary: "Defending champions India's men's kabaddi team secured a dominant 37-21 victory over Chinese Taipei, advancing to the semi-finals of the Asian Games with an unbeaten record in Group A. This win marks their fourth consecutive victory, assuring them of at least\u2026",
    category: "sport",
    publishedAt: "2026-09-24T09:07:30+03:30",
    source: {"name": "Rediff.com", "url": "https://www.rediff.com/sports/report/indian-mens-kabaddi-team-tops-group-enters-asiad-semis/20260924.htm"},
    imageUrl: "https://im.rediff.com/1200-630/sports/2026/sep/21kabaddi2.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-8e42eb493a01cfbe",
    title: "Gulf nations have found ways to keep oil flowing",
    summary: "At the start of the Iran war, many feared that Tehran's closure of the Strait of Hormuz would send oil prices through the roof and throttle the global economy",
    category: "economy",
    publishedAt: "2026-09-24T08:52:24+03:30",
    source: {"name": "Abcnews.com", "url": "https://abcnews.com/US/wireStory/gulf-nations-found-ways-oil-flowing-iran-war-136708375"},
    imageUrl: "https://i.abcnewsfe.com/a/472ceca1-7f3a-497b-b345-b391f5d70ac1/wirestory_3aa72ed92a4e38ffd1dd4003e0c3ed49_16x9.jpg?w=1600",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c674722336514c62",
    title: "Gulf nations have found ways to keep oil flowing through the Iran war, but the costs are mounting",
    summary: "At the start of the Iran war, many feared that Tehran's closure of the Strait of Hormuz would send oil prices through the roof and throttle the global economy",
    category: "economy",
    publishedAt: "2026-09-24T08:50:37+03:30",
    source: {"name": "Abcnews.com", "url": "https://abcnews.com/International/wireStory/gulf-nations-found-ways-oil-flowing-iran-war-136708380"},
    imageUrl: "https://i.abcnewsfe.com/a/472ceca1-7f3a-497b-b345-b391f5d70ac1/wirestory_3aa72ed92a4e38ffd1dd4003e0c3ed49_16x9.jpg?w=1600",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-f53e3c95d67adb5b",
    title: "Gulf nations keep oil flowing through Iran war, but costs are mounting",
    summary: "When Iran shut down the Strait of Hormuz at the start of the war, choking off sea passage for some 15 million barrels of oil a day, many feared that prices would skyrocket, cratering the world economy. Instead, nearly seven months on, oil is expensive but not\u2026",
    category: "economy",
    publishedAt: "2026-09-24T08:36:36+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/world-news/gulf-nations-keep-oil-flowing-through-iran-war-but-costs-are-mounting-126092400297_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2026-09/16/thumb/fitandfill/1200X628/1789530519-2842.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-93a3136efc800296",
    title: "Opinion: Trump media boycott will hurt him most of all. There are bigger threats to press freedom",
    summary: "There\u2019s plenty of solidarity for the White House press pool, while far more urgent threats to journalists are being ignored",
    category: "politics",
    publishedAt: "2026-09-24T08:30:01+03:30",
    source: {"name": "The Irish Times", "url": "https://www.irishtimes.com/opinion/2026/09/24/opinion-trump-is-the-big-loser-from-media-boycott-but-threats-to-the-press-are-real/"},
    imageUrl: "https://www.irishtimes.com/resizer/v2/56KD5CDDE2ZKW6KCXD3ASZEHSI.jpg?smart=true&auth=25ddb51bfd788cc0798a06bb6ab12be9faf3c4dce5725c04d4600f3e438878e9&width=1200&height=630",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-56874f5db3d0161d",
    title: "Crude oil price falls as Iran signals diplomacy to end war",
    summary: "At 9:31 AM on Thursday, November Brent oil futures were at $102.07, down 0.98%, while November WTI crude oil futures were at $91.39, down 0.84%",
    category: "diplomacy",
    publishedAt: "2026-09-24T07:53:53+03:30",
    source: {"name": "BusinessLine", "url": "https://www.thehindubusinessline.com/markets/commodities/crude-oil-futures-decline-on-report-of-iran-favouring-diplomacy-to-end-war/article71502732.ece"},
    imageUrl: "https://bl-i.thgim.com/public/incoming/wb9zmz/article71502752.ece/alternates/LANDSCAPE_1200/iStock-959381934.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-b3eb122d52ee8104",
    title: "Report: Senior IRGC Commander Taken Out in Armed Attack - by Iranians",
    summary: "The Iranian regime is teetering on the brink. Their exports and imports have been cut off by the U.S. naval blockade. Their economy is in the dumper, with incredibly high inflation and long lines for whatever fuel people can obtain. On top of all that, the U.\u2026",
    category: "economy",
    publishedAt: "2026-09-24T07:53:45+03:30",
    source: {"name": "Freerepublic.com", "url": "https://freerepublic.com/focus/f-news/4396688/posts"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-75f2948585705d93",
    title: "Gulf nations have found ways to keep oil flowing through the Iran war, but the costs are mounting",
    summary: "Iran's closure of the Strait of Hormuz initially raised concerns about soaring oil prices impacting the global economy. However, Gulf producers adapted quickly by utilizing alternative pipeline routes and increasing their oil exports. These adjustments helped\u2026",
    category: "economy",
    publishedAt: "2026-09-24T07:51:07+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/gulf-nations-have-found-ways-to-keep-oil-flowing-through-the-iran-war-but-the-costs-are-mounting/articleshow/134451290.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-134451285,width-1200,height-630,imgsize-8154577,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-dd1791d6d62c5fb8",
    title: "US and Indian top diplomats discuss Russia sanctions bill signed by Trump",
    summary: "US and Indian diplomats discuss Trump's Russia sanctions bill, addressing concerns over economic impacts on bilateral relations and energy supplies.",
    category: "economy",
    publishedAt: "2026-09-24T07:45:59+03:30",
    source: {"name": "BusinessLine", "url": "https://www.thehindubusinessline.com/news/us-and-indian-top-diplomats-discuss-russia-sanctions-bill-signed-by-trump/article71502708.ece"},
    imageUrl: "https://bl-i.thgim.com/public/incoming/aoltp/article71502739.ece/alternates/LANDSCAPE_1200/TH23-Suhasini-JG16GIOFPF.3.jpg.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-2ac7d09980af103f",
    title: "On the AI-Driven Targeting System in Gaza",
    summary: "How \"Lavender\" as an AI-Driven Targeting System became an inevitable appurtenance in the Gaza Conflict. And why. Op-ed.",
    category: "human-rights",
    publishedAt: "2026-09-24T07:39:06+03:30",
    source: {"name": "Israelnationalnews.com", "url": "https://www.israelnationalnews.com/news/433575"},
    imageUrl: "https://2.a7.org/files/pictures/000/1050344.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-4d42a4e4455c424f",
    title: "Roseanne Barr calls costar Michael Fishman a 'little f***ing worm' for calling out racism scandal that led to namesake show's cancellation",
    summary: "An outraged Roseanne Barr launched into a foul-mouthed rant against her former costar Michael Fishman in a recent podcast appearance.",
    category: "politics",
    publishedAt: "2026-09-24T07:24:18+03:30",
    source: {"name": "Dailymail.com", "url": "https://www.dailymail.com/tvshowbiz/article-16156119/Roseanne-Barr-Michael-Fishman-worm-racist-canceled.html"},
    imageUrl: "https://i.dailymail.com/1s/2026/09/24/04/111435913-0-image-m-27_1790219042334.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-3aefe3bfb72c78cf",
    title: "Mamdani faces backlash over silence on Iranian president\u2019s New York visit",
    summary: "NYC Mayor Zohran Mamdani faces criticism for his silence on Iran\u2019s president while repeatedly calling Netanyahu a \u201cwar criminal.\"",
    category: "human-rights",
    publishedAt: "2026-09-24T07:24:09+03:30",
    source: {"name": "Israelnationalnews.com", "url": "https://www.israelnationalnews.com/news/433573"},
    imageUrl: "https://2.a7.org/files/pictures/000/1207271.jpg",
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
