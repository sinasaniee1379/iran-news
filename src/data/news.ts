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
  titleFa?: string
  summary: string
  summaryFa?: string
  category: Category
  publishedAt: string // ISO 8601 in Asia/Tehran
  source: { name: string; url: string }
  importance: 1 | 2 | 3 // 3 = top story of the day
  imageUrl?: string
  location?: string
  locationFa?: string
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

export const LAST_UPDATED: string = "2026-08-29T13:38:47+03:30"

// How many items to surface on the home page and in the End-of-Day TL;DR.
// The full NEWS array (and the category / search pages) can have more;
// this is the "what's recent" cap. The 3-hour cron refills NEWS with
// fresh items, and the home view always shows the 20 most recent.
export const LATEST_LIMIT = 20

export const NEWS: NewsItem[] = [
  {
    id: 'irgc-fears-uprising-2026-08-27',
    title: "IRGC Intelligence warns of another uprising as it blames \"foreign adversaries\"",
    titleFa: 'هشدار اطلاعات سپاه درباره‌ی اعتراضات تازه؛ «دشمنان خارجی» مقصر اعلام شدند',
    summary:
      "A statement issued by the IRGC Intelligence Organization on Aug 27 claims that after failing to topple the government through military pressure, foreign actors have shifted to stoking domestic unrest. The statement lists exploiting shortages, fomenting dissatisfaction, and \"inciting people to extend dissatisfaction to the streets\" — a rare official acknowledgement that street-level protest, not foreign war, is what the security apparatus actually fears.",
    summaryFa: 'بیانیه‌ی ۶ شهریور سازمان اطلاعات سپاه مدعی است که پس از ناکامی در سرنگونی حکومت از طریق فشار نظامی، بازیگران خارجی رویکرد خود را به سمت دامن‌زدن به نارضایتی داخلی تغییر داده‌اند. این بیانیه به «استفاده از کمبودها» و «کشاندن نارضایتی به خیابان‌ها» اشاره می‌کند — اعترافی کم‌سابقه که نه جنگ خارجی، بلکه اعتراض خیابانی همان چیزی است که دستگاه امنیتی واقعاً از آن می‌هراسد.',
    category: 'politics',
    publishedAt: '2026-08-29T09:30:00+03:30',
    source: { name: 'NCRI', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-29-2026/' },
    importance: 3,
    location: 'Tehran',
    locationFa: 'تهران',
    tags: ['IRGC', 'protests', 'security'],
  },

  {
    id: 'fuel-shortage-spreads-2026-08-26',
    title: "Fuel shortage spreads as officials signal a price hike is \"inevitable\"",
    titleFa: 'گسترش بحران سوخت؛ مقامات: افزایش قیمت «اجتناب‌ناپذیر» است',
    summary:
      "Long gasoline queues were reported across Tehran, the Tehran–Karaj highway, Karaj and Mashhad on Aug 26. The state-run Shargh newspaper confirmed city-wide lines, while another state outlet cited a daily deficit of roughly 14 million liters. Vice President Mohammad Jafar Ghaempanah said prices would \"inevitably\" be revised — a sharper message than the spokesperson's denial a day earlier.",
    summaryFa: 'در ۵ شهریور صف‌های طولانی بنزین در تهران، اتوبان تهران–کرج، کرج و مشهد گزارش شد. روزنامه‌ی دولتی شرق وجود صف در سطح شهر را تأیید کرد و یک رسانه‌ی دولتی دیگر از کسری روزانه‌ی حدود ۱۴ میلیون لیتری خبر داد. معاون اجرایی رئیس‌جمهور، محمدجعفر قائم‌پناه، گفت قیمت‌ها «به‌ناچار» بازنگری خواهند شد — لحنی تندتر از تکذیب سخنگوی دولت یک روز پیش از آن.',
    category: 'economy',
    publishedAt: '2026-08-29T08:00:00+03:30',
    source: { name: 'Iran News in Brief', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-29-2026/' },
    importance: 3,
    location: 'Tehran, Mashhad, Karaj',
    locationFa: 'تهران، مشهد، کرج',
    tags: ['fuel', 'inflation', 'subsidies'],
  },

  {
    id: 'oman-pakistan-mediation-2026-08-28',
    title: "Omani and Pakistani envoys in Tehran as US–Iran back-channel heats up",
    titleFa: 'سفر فرستادگان عمان و پاکستان به تهران؛ کانال پشتی آمریکا و ایران فعال‌تر شد',
    summary:
      "Omani Foreign Minister Badr al-Busaidi and Pakistani army chief Asim Munir both visited Tehran this week. Analysts frame the visits as an attempt to pull the US and Iran back from a military confrontation over the Strait of Hormuz. Inside Iran's own establishment the picture is split: at least one lawmaker has publicly called for a military response, while the foreign ministry continues to favor the negotiating track.",
    summaryFa: 'وزیر خارجه‌ی عمان بدر البوسعیدی و رئیس ستاد ارتش پاکستان اسیم منیر این هفته به تهران سفر کردند. تحلیلگران این سفرها را تلاشی برای عقب‌کشاندن آمریکا و ایران از رویارویی نظامی بر سر تنگه‌ی هرمز می‌خوانند. در درون حاکمیت ایران اما اختلاف وجود دارد: دست‌کم یک نماینده‌ی مجلس خواستار واکنش نظامی شده، در حالی که وزارت خارجه همچنان مسیر مذاکره را ترجیح می‌دهد.',
    category: 'diplomacy',
    publishedAt: '2026-08-29T07:15:00+03:30',
    source: { name: 'Iran Newswire', url: 'https://irannewswire.org/iran-islamabad-agreement-us-talks-hormuz-divisions/' },
    importance: 3,
    location: 'Tehran',
    locationFa: 'تهران',
    tags: ['Oman', 'Pakistan', 'Hormuz', 'US-Iran'],
  },

  {
    id: 'treasury-banque-misr-2026-08-28',
    title: "US Treasury moves to sanction UAE branch of Egyptian bank over Iran ties",
    titleFa: 'اقدام خزانه‌داری آمریکا برای تحریم شعبه‌ی اماراتی بانک مصری به‌دلیل ارتباط با ایران',
    summary:
      "The US Treasury announced plans to cut off Banque Misr UAE from the US financial system, saying the branch processed roughly $1.8 billion over the past two years for around 100 companies identified as part of Iran's shadow-banking network. The action comes ahead of a US-hosted G20 finance meeting that is expected to press other jurisdictions to wind down Iran-related business.",
    summaryFa: 'خزانه‌داری آمریکا از قصد خود برای قطع دسترسی بانک مصر (امارات) به نظام مالی آمریکا خبر داد و اعلام کرد این شعبه در دو سال گذشته حدود ۱.۸ میلیارد دلار برای نزدیک به ۱۰۰ شرکت متعلق به شبکه‌ی بانکی پنهان ایران جابه‌جا کرده است. این اقدام در آستانه‌ی نشست وزیران دارایی G20 به میزبانی آمریکا صورت می‌گیرد که قرار است دیگر کشورها را برای کاهش روابط تجاری با ایران تحت فشار بگذارد.',
    category: 'diplomacy',
    publishedAt: '2026-08-28T22:00:00+03:30',
    source: { name: 'CNBC', url: 'https://www.cnbc.com/2026/08/28/treasury-uae-banque-misr-sanctions-iran.html' },
    importance: 2,
    tags: ['sanctions', 'Treasury', 'UAE'],
  },

  {
    id: 'executions-shahrivar-2026-08-26',
    title: "23 executions in four days, including a philanthropist from the January protests",
    titleFa: '۲۳ اعدام در چهار روز؛ از جمله یک نیکوکار بازداشت‌شده در اعتراضات دی‌ماه',
    summary:
      "Between Aug 23 and Aug 26 — the first four days of the Iranian month of Shahrivar — authorities carried out at least 23 executions, an average of roughly one every four hours. Among them was Majid Adineh, a Karaj-based philanthropist detained during the January 2026 nationwide protests. His family was informed of the execution only hours beforehand, and his case file is reported to contain serious evidentiary gaps.",
    summaryFa: 'بین ۱ تا ۴ شهریور (۲۳ تا ۲۶ اوت) مقامات دست‌کم ۲۳ نفر را اعدام کردند — به‌طور متوسط تقریباً هر چهار ساعت یک اعدام. در میان اعدام‌شدگان، مجید آدینه، نیکوکار ساکن کرج که در جریان اعتراضات سراسری دی‌ماه ۱۴۰۴ بازداشت شده بود نیز به چشم می‌خورد. خانواده‌ی او تنها چند ساعت پیش از اجرای حکم باخبر شدند و گفته می‌شود پرونده‌ی او دارای خلأهای جدی است.',
    category: 'human-rights',
    publishedAt: '2026-08-28T18:30:00+03:30',
    source: { name: 'NCRI', url: 'https://www.ncr-iran.org/en/news/iran-news-in-brief-august-29-2026/' },
    importance: 3,
    location: 'Karaj',
    locationFa: 'کرج',
    tags: ['executions', 'January 2026 protests', 'death penalty'],
  },

  // ── Auto-fetched from NewsAPI every 3 hours ──
  {
    id: "api-ce8468fdc5124030",
    title: "US, South Korea and Japan to hold trilateral drill as North Korea ramps up pressure on US",
    summary: "South Korea, the U.S., and Japan will conduct a joint military drill next month. This exercise aims to counter North Korean nuclear and missile threats effectively. North Korea previously condemned such drills as a confrontational stance. The U.S. and Sout\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-28T13:37:13+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/us-south-korea-and-japan-to-conduct-trilateral-military-drill-amid-rising-north-korean-tensions/articleshow/133588203.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133589048,width-1200,height-630,imgsize-35533,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-42602c9ca314202d",
    title: "Russia\u2019s Arctic Route",
    summary: "Welcome to the world\u2019s newest chokepoint, the Arctic passage. No dollars required.",
    category: "energy",
    publishedAt: "2026-08-28T13:30:54+03:30",
    source: {"name": "Nakedcapitalism.com", "url": "https://www.nakedcapitalism.com/2026/08/russias-arctic-route.html"},
    imageUrl: "https://www.nakedcapitalism.com/wp-content/uploads/2026/08/oo-arctic-route.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-87d6ea5b642eba42",
    title: "The long afterlife of QAnon conspiracy theories haunting American politics",
    summary: "Amid the U.S. war with Iran, some government officials have turned to QAnon for inspiration",
    category: "politics",
    publishedAt: "2026-08-28T13:30:41+03:30",
    source: {"name": "Salon", "url": "https://www.salon.com/2026/08/28/the-long-afterlife-of-qanon-conspiracy-theories-haunting-american-politics-partner/"},
    imageUrl: "https://www.salon.com/app/uploads/2026/08/qanon-GettyImages-1294904312.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c54f5dc7abdb626b",
    title: "Why the Editor of Stars and Stripes Is Suing the Pentagon",
    summary: "Journalist Erik Slavin speaks about his firing, the paper\u2019s reporting on the USS Abraham Lincoln, and how covering the military has \u201cfundamentally changed.\u201d",
    category: "politics",
    publishedAt: "2026-08-28T13:30:15+03:30",
    source: {"name": "New York Magazine", "url": "http://nymag.com/intelligencer/article/erik-slavin-stars-and-stripes-pentagon-suit.html"},
    imageUrl: "https://pyxis.nymag.com/v1/imgs/00f/0aa/38d09fe91b15ab88ae9f58720ba3592eba-jaq-slavin.1x.rsocial.w1200.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-3eb5a859568e4513",
    title: "Right-Wing Trans Hate Comes for the WNBA",
    summary: "How the right\u2019s attacks on trans people have infiltrated a sports league with no trans women. The post Right-Wing Trans Hate Comes for the WNBA appeared first on The Intercept.",
    category: "society",
    publishedAt: "2026-08-28T13:30:00+03:30",
    source: {"name": "The Intercept", "url": "https://theintercept.com/2026/08/28/wnba-women-basketball-sports-trans/"},
    imageUrl: "https://theintercept.com/wp-content/uploads/2026/08/LIB__Article_8-27-26_WNBA-copy.jpg?fit=2000%2C1000&w=1200&h=800",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-477880be0e3e9473",
    title: "Transcript: Trump Wrecks GOP Midterm Strategy in Dumbest Self-Own Ever",
    summary: "The following is a lightly edited transcript of the August 29 episode of the Daily Blast podcast. Listen to it here.Greg Sargent: This is The Daily Blast from The New Republic, produced and presented by the DSR Network. I\u2019m your host, Greg Sargent.This week, \u2026",
    category: "politics",
    publishedAt: "2026-08-28T13:29:06+03:30",
    source: {"name": "The New Republic", "url": "https://newrepublic.com/article/214865/transcript-trump-wrecks-gop-midterm-strategy-dumbest-self-own-ever"},
    imageUrl: "https://images.newrepublic.com/8fb1098b449130ff71ab296718c900b53ad36f5c.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-ff75ce1be7b4c16a",
    title: "THE CEUTA CROSSING: Anatomy of a Manufactured Crisis",
    summary: "Freddie Ponton21st Century Wire On the African side of the Strait of Gibraltar, a narrow border separates Morocco from a piece of Spain. On the night of July 29, that border gave way. Tens of thousands of young men surged into Ceuta by land and sea, following\u2026",
    category: "human-rights",
    publishedAt: "2026-08-28T13:26:00+03:30",
    source: {"name": "Activistpost.com", "url": "https://www.activistpost.com/the-ceuta-crossing-anatomy-of-a-manufactured-crisis/"},
    imageUrl: "https://www.activistpost.com/wp-content/uploads/2026/08/The-CEUTA-CROSSING-MAIN-768x432-1.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-d28000c3ceb5847d",
    title: "South Korea says will hold joint military drills with US, Japan",
    summary: "South Korea said on Aug. 28 that it will hold joint military exercises with the United States and Japan in September, after Washington scaled back annual drills with Seoul in an apparent bid to encourage dialogue with North Korea.",
    category: "human-rights",
    publishedAt: "2026-08-28T13:25:10+03:30",
    source: {"name": "Hurriyet Daily News", "url": "https://www.hurriyetdailynews.com/south-korea-says-will-hold-joint-military-drills-with-us-japan-226176"},
    imageUrl: "https://image.hurimg.com/i/hurriyet/75/200x200/6a915add9858e588ff03e9ec.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e74988c2ad230566",
    title: "Exorbitant privilege: how dollar dominance deployed for statecraft could extract a diplomatic price",
    summary: "Amid a geopolitical upheaval, America seems ever more keen to use its financial heft, never mind that the dollar derives its power partly from the Fed\u2019s credibility and independence. But arbitrary decisions\u2014on swap lines, say\u2014show how wrong it could go.",
    category: "economy",
    publishedAt: "2026-08-28T13:15:38+03:30",
    source: {"name": "Livemint", "url": "https://www.livemint.com/opinion/online-views/exorbitant-privilege-how-dollar-dominance-deployed-for-statecraft-extract-diplomatic-price-11787909010022.html"},
    imageUrl: "https://www.livemint.com/lm-img/img/2026/08/28/1600x900/logo/im-28741974_1786451481403_1787909566136_38c39d01-714d-46f3-8222-4447e9bd01fd.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e5127896beba8e82",
    title: "Iranians Say SIM Card Cutoffs Have Become A Tool To Punish Critics",
    summary: "Cutting off SIM cards has emerged as one of the more effective tools available to Iranian authorities seeking to punish critics and civil society activists, with consequences that go well beyond losing phone service.",
    category: "society",
    publishedAt: "2026-08-28T13:15:07+03:30",
    source: {"name": "Radio Free Europe/ Radio Liberty", "url": "https://www.rferl.org/a/iran-sim-ban-punish-activists-disrupt-life/33841790.html"},
    imageUrl: "https://gdb.rferl.org/f01fd7ee-86ed-4278-925f-a5326280b22b_cx0_cy10_cw0_w1200_h630.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-958558b7d62a444c",
    title: "Japan's finance minister, BOJ chief to attend G20 gathering next week",
    summary: "Japan's finance minister and central bank governor will attend the upcoming G20 meeting. Policymakers will discuss the global economic fallout and the persistently weak yen. Financial markets are watching for potential meetings with U.S. Treasury Secretary Sc\u2026",
    category: "economy",
    publishedAt: "2026-08-28T13:14:29+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/japans-finance-minister-boj-chief-to-attend-g20-gathering-next-week/articleshow/133588355.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133588441,width-1200,height-630,imgsize-118686,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-24a780353baea980",
    title: "Who will give Donald Trump the desperately needed victory?",
    summary: "President Trump\u2019s easy victory in Venezuela contrasts sharply with the ongoing struggle in Iran. Can economic sanctions deliver the desperately needed win? Read More: https://punchng.com/who-will-give-donald-trump-the-desperately-needed-victory/",
    category: "energy",
    publishedAt: "2026-08-28T13:06:22+03:30",
    source: {"name": "The Punch", "url": "https://punchng.com/who-will-give-donald-trump-the-desperately-needed-victory/"},
    imageUrl: "https://punchng.com/wp-content/uploads/2026/07/AFP__20260715__2286275847__v1__MidRes__PresidentTrumpAddressesPennsylvaniaDefenseAnd_1784226990-1200x630.webp",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-39e724609ebff68c",
    title: "6 Months Into The Iran War, These 4 Issues Could Shape What's Next",
    summary: "Six months after US-Israeli strikes, the Iran conflict remains unresolved. Despite military losses, Iran retains leverage over the Strait of Hormuz. Experts say key questions involve economic pressure, diplomacy, shipping, and support from Russia and China.",
    category: "energy",
    publishedAt: "2026-08-28T12:57:32+03:30",
    source: {"name": "Radio Free Europe/ Radio Liberty", "url": "https://www.rferl.org/a/iran-war-six-months-four-issues-experts/33842411.html"},
    imageUrl: "https://gdb.rferl.org/e1c965b9-7433-4bbb-a320-23be1cf03447_cx0_cy10_cw0_w1200_h630.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-d1f4a4b4068cc7b9",
    title: "Pipelines and ports: Iran war spurs Gulf infrastructure investment",
    summary: "Gulf nations are investing billions in infrastructure to bypass the Strait of Hormuz. Ports, pipelines, and railways are top priorities as trade routes face disruption. This strategic shift aims to future-proof economies against ongoing geopolitical challen\u2026",
    category: "energy",
    publishedAt: "2026-08-28T12:46:38+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/pipelines-and-ports-iran-war-spurs-gulf-infrastructure-investment/articleshow/133588003.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133588011,width-1200,height-630,imgsize-70564,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a5d7e10c65489ffd",
    title: "Fed, BOJ, AI Boom and Elections: What markets are watching next",
    summary: "As traders emerge from their holiday break, global markets brace for fluctuations. The ongoing geopolitical tensions keep energy prices in focus, while decisions from the Fed and BOJ will be scrutinized closely. Additionally, the rise of artificial intelligen\u2026",
    category: "energy",
    publishedAt: "2026-08-28T12:42:46+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/markets/us-stocks/news/fed-boj-ai-boom-and-elections-what-markets-are-watching-next/articleshow/133587880.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133587988,width-1200,height-630,imgsize-2727452,overlay-etmarkets/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-39b9cc634a160efa",
    title: "Lawfare Daily: Israel's Most Consequential Election, with Natan Sachs",
    summary: "Lawfare Foreign Policy Editor Daniel Byman sits down with Natan Sachs, a senior fellow at the Middle East Institute, to discuss who is likely to win the October 27 Israeli elections and what the consequences might be for wars in Gaza and Iran as well as Israe\u2026",
    category: "politics",
    publishedAt: "2026-08-28T12:30:00+03:30",
    source: {"name": "Acast.com", "url": "https://shows.acast.com/lawfare/episodes/lawfare-daily-israels-most-consequential-election-with-natan"},
    imageUrl: "https://open-images.acast.com/shows/60518a52f69aa815d2dba41c/1713733058272-bcd7ae96f1d1bd6b44800b014a4087b2.jpeg?height=315",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-2ac941b01a9f0277",
    title: "U.S. says pipelines will make Strait of Hormuz be irrelevant. Energy experts disagree",
    summary: "Treasure Secretary Scott Bessent said oil pipelines will make Strait of Hormuz irrelevant in two years. Energy experts say that is unlikely to happen.",
    category: "energy",
    publishedAt: "2026-08-28T12:30:00+03:30",
    source: {"name": "NPR", "url": "https://www.npr.org/2026/08/28/g-s1-140309/us-iran-middle-east-oil-pipelines-hormuz"},
    imageUrl: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8640x4858+0+366/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fcd%2F99%2Fff09e3134dfdb75af48f34f0da90%2Fap26203741978326.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-ff42ebe8949c0a1f",
    title: "Turkish drone flies between Samothraki and Limnos as Greek F-16s scramble to intercept",
    summary: "Ankara's warning over a possible Rhodes UAV base and its two new marine parks reflect Turkey's broader push to encircle Greece in the Aegean, as Athens weighs whether Ankara is signalling or shifting strategy entirely The post Turkish drone flies between Samo\u2026",
    category: "energy",
    publishedAt: "2026-08-28T12:24:15+03:30",
    source: {"name": "Protothema.gr", "url": "https://en.protothema.gr/2026/08/28/turkish-drone-flies-between-samothraki-and-limnos-as-greek-f-16s-scramble-to-intercept/"},
    imageUrl: "https://en.protothema.gr/wp-content/uploads/2026/08/f16_maketa-1.jpg-1.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-bbfb54d8fefbbc0f",
    title: "CENTCOM: U.S. Clears Iranian Mines from Hormuz Lanes; Iran Oil Exports at Zero -- Trump Says Tehran \u2018Begging to Make a Deal\u2019",
    summary: "U.S. Central Command confirmed Thursday that American forces have cleared Iranian sea mines from the Strait of Hormuz\u2019s internationally recognized shipping lanes, opening the critical waterway to growing commercial traffic while a U.S. naval blockade has stop\u2026",
    category: "energy",
    publishedAt: "2026-08-28T12:12:52+03:30",
    source: {"name": "Breitbart News", "url": "https://www.breitbart.com/politics/2026/08/28/centcom-u-s-clears-iranian-mines-from-hormuz-lanes-iran-oil-exports-at-zero-trump-says-tehran-begging-to-make-a-deal/"},
    imageUrl: "https://media.breitbart.com/media/2026/08/strait-of-hormuz-is-clear-640x335.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c01f6880629fe7aa",
    title: "Sensex, Nifty trade marginally higher; European mrkt advance",
    summary: "Market participants remained focused on the upcoming speech by Kevin Warsh, who is set to deliver his first major address as Federal Reserve chair at the annual Kansas City Fed economic symposium in Jackson Hole, Wyoming. The address is being closely watched \u2026",
    category: "energy",
    publishedAt: "2026-08-28T11:50:07+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/markets/capital-market-news/sensex-nifty-trade-marginally-higher-european-mrkt-advance-126082800589_1.html"},
    imageUrl: "https://www.business-standard.com/assets/web-assets/images/Business_Standard_1_685x385.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-fa649e55ccf16156",
    title: "Nikkei Rebounds as IT Shares Rise Before Jackson Hole",
    summary: "Tokyo stocks rose on August 28, with the Nikkei 225 closing at 66,405.56, up 273.58 points, or 0.41%, as information-technology, software, automaker and selected semiconductor-related shares gained after a U.S. technology rally, while investors remained cauti\u2026",
    category: "energy",
    publishedAt: "2026-08-28T11:24:30+03:30",
    source: {"name": "Newsonjapan.com", "url": "https://newsonjapan.com/article/150538.php"},
    imageUrl: "https://i2.ytimg.com/vi/fbec4nqVh4U/maxresdefault.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-fc9fd936713e554e",
    title: "Iran's FM Abbas Araghchi says returning to diplomacy 'isn't impossible' but depends on US",
    summary: "Iran's foreign minister stated diplomacy is possible if the US abandons coercion and builds trust. He also held productive discussions with Qatar's prime minister and foreign minister. US President Donald Trump ruled out immediate talks with Tehran, citing Ir\u2026",
    category: "energy",
    publishedAt: "2026-08-28T11:22:08+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/defence/irans-fm-abbas-araghchi-says-returning-to-diplomacy-isnt-impossible-but-depends-on-us/articleshow/133586589.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133586588,width-1200,height-630,imgsize-129582,overlay-etdefence/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-3f363d5901db00d3",
    title: "French economy stagnated in Q2, lagging estimates",
    summary: "France's economy remained stable in the second quarter, final data from statistics office INSEE showed today, below the preliminary reading of a 0.2% rise for the euro zone's second-largest economy.",
    category: "energy",
    publishedAt: "2026-08-28T11:21:43+03:30",
    source: {"name": "RTE", "url": "https://www.rte.ie/news/business/2026/0828/1589544-french-economy-stagnated-in-q2-lagging-estimates/"},
    imageUrl: "https://www.rte.ie/images/00232087-1600.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-5593a6e2757b0dca",
    title: "Iran's wounded supreme leader remains unseen six months into existential war",
    summary: "Mojtaba Khamenei's absence raises questions about Iran's leadership after six months of war. Officials state he governs from shadows for security while recovering from wounds. His health and role are subjects of growing uncertainty among the populace. The \u2026",
    category: "energy",
    publishedAt: "2026-08-28T11:10:33+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/global-trends/mojtaba-khameneis-vanishing-act-irans-supreme-leader-hidden-amidst-escalating-war-troubles/articleshow/133586369.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133586554,width-1200,height-630,imgsize-126150,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-3fdb9458ad71ac37",
    title: "Hormuz crisis adds $22 bn to India's fossil fuel import costs: CREA",
    summary: "In terms of economic impact, India's net additional cost across all fossil fuels was estimated at $14.4 billion, equivalent to 0.38 per cent of its GDP, or about 1.4 days of national income",
    category: "energy",
    publishedAt: "2026-08-28T10:54:17+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/economy/news/hormuz-crisis-adds-22-bn-to-india-s-fossil-fuel-import-costs-crea-126082800530_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2026-07/21/thumb/fitandfill/1200X628/1784607811-7163.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-b2ebda9585c457a6",
    title: "Gold outlook hinges on Warsh speech as hawkish Fed stance may weigh",
    summary: "A hawkish signal from Warsh could trigger further correction in gold towards the $4,500-$4,520 support zone, although downside may remain limited ahead of next week's US nonfarm payroll data.",
    category: "economy",
    publishedAt: "2026-08-28T10:25:45+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/markets/news/gold-outlook-hinges-on-warsh-speech-as-hawkish-fed-stance-may-weigh-126082800481_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-04/09/thumb/fitandfill/1200X628/1744194371-4152.JPG",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-20d12591b9ccf206",
    title: "Stock Market: Will S&P 500 Open Up or Down Today?",
    summary: "U.S. stock futures are slightly mixed early Friday as investors digest a broadening AI spending boom and escalating economic warfare rhetoric against Iran. T...",
    category: "energy",
    publishedAt: "2026-08-28T10:13:21+03:30",
    source: {"name": "Benzinga", "url": "https://www.benzinga.com/markets/prediction-markets/26/08/61486034/stock-market-will-sp-500-open-up-or-down-today-26?utm_source=yahooFinance&amp;utm_campaign=partner_feed&amp;utm_medium=referral"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/67f4c79e0a820d9dbd1a4a03e3711c3ccd572fd8f058492153dd04758cf38291/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fbenzinga_prediction_markets_613%2F96e3498902435c4e89fdfec136293a8c.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-f85e2b0bd19413a4",
    title: "D\u00e1il returns to defer fuel price rises",
    summary: "Special sitting today will see TDs debate and vote on changes to fuel excise increases",
    category: "politics",
    publishedAt: "2026-08-28T10:06:56+03:30",
    source: {"name": "The Irish Times", "url": "https://www.irishtimes.com/politics/2026/08/28/blink-and-youll-miss-it-brief-dail-sitting-will-see-fuel-price-rises-deferred/"},
    imageUrl: "https://www.irishtimes.com/resizer/v2/A5DFUSRVL5HXXKCEZC4Q2PZO5U.JPG?smart=true&auth=4391fd077740453acc5de5e2f5e67f0e1e46369a4d6213f2ea3c510b75df4484&width=1200&height=630",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-4d87c2338674fc3c",
    title: "Six months on, Iran is still standing, but survival is becoming more costly",
    summary: "Economic pressure is testing Iran where it is weakest and sharpening divisions within its leadership.",
    category: "diplomacy",
    publishedAt: "2026-08-28T10:05:08+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/opinions/2026/8/28/six-months-on-iran-is-still-standing-but-survival-is-becoming-more-costly"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/08/getty_6a912bedb4-1787898861.jpg?resize=1920%2C1440",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-fbbb46635979db9a",
    title: "Six months on, Trump\u2019s Iran strategy is starting to pay off",
    summary: "The US has not won the war, but sustained pressure is weakening Tehran and giving Washington a stronger hand.",
    category: "economy",
    publishedAt: "2026-08-28T10:01:47+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/opinions/2026/8/28/six-months-on-trumps-iran-strategy-is-starting-to-pay-off"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/08/ap_6a912b311b043-1787898673.jpg?resize=1920%2C1440",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-2b4a386b17e74283",
    title: "As midterm elections approach, Republican candidates weigh how closely to align with Trump",
    summary: "Some Republican candidates are quietly distancing themselves from President Donald Trump ahead of the midterm elections that will determine control of Congress",
    category: "politics",
    publishedAt: "2026-08-28T10:00:23+03:30",
    source: {"name": "Abcnews.com", "url": "https://abcnews.com/Politics/wireStory/midterm-elections-approach-republican-candidates-weigh-closely-align-136013650"},
    imageUrl: "https://i.abcnewsfe.com/a/0c5ff9aa-d018-41dd-8312-93c1a680238d/wirestory_95f59e3ab09f5ee0e68349530ff8c8ea_16x9.jpg?w=1600",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-365062788504bc80",
    title: "Larry Donnelly: The battle for the Democratic Party\u2019s soul is playing out in Boston",
    summary: "The Boston congressional primary pits a working-class incumbent against a progressive challenger, but the Democrats risk alienating the voters who once saw the party as their political home.",
    category: "human-rights",
    publishedAt: "2026-08-28T09:30:39+03:30",
    source: {"name": "TheJournal.ie", "url": "https://www.thejournal.ie/readme/boston-7143573-Aug2026/"},
    imageUrl: "https://img2.thejournal.ie/article/7143573/river/?height=400&version=7143589",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-f0c792d6041ba76a",
    title: "U.S. Formally Removes Syria from State Sponsor of Terrorism List",
    summary: "The Trump administration formally removed Syria from the State Sponsors of Terrorism (SST) blacklist on Monday, Aug. 24 \u2013 a landmark decision that lifts export restrictions and allows the United States to supply military aid to the country. Secretary of State\u2026",
    category: "economy",
    publishedAt: "2026-08-28T09:30:00+03:30",
    source: {"name": "Naturalnews.com", "url": "https://www.naturalnews.com/2026-08-28-us-formally-removes-syria-from-terrorism-blacklist.html"},
    imageUrl: "https://www.naturalnews.com/wp-content/uploads/sites/91/2026/08/Ameria-Syria-Flag.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e13c3ed49a88297a",
    title: "Why a Third Party Won\u2019t Save America, But It Might Help Manage the Reboot",
    summary: "The Temptation of a Third Party For anyone who has watched the last decade of American politics unfold, the appeal of a third party is understandable. When figures with genuine integrity like Tucker Carlson, Marjorie Taylor Greene, and Joe Kent stand up and d\u2026",
    category: "human-rights",
    publishedAt: "2026-08-28T09:30:00+03:30",
    source: {"name": "Naturalnews.com", "url": "https://www.naturalnews.com/2026-08-28-why-a-third-party-wont-save-america.html"},
    imageUrl: "https://www.naturalnews.com/wp-content/uploads/sites/91/2026/08/third-party-politics-political-corruption-bureaucratic-tyranny-3710-original.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-bd99bd17cbfe0998",
    title: "Russia strikes nine Ukrainian cities in massive overnight barrage, targeting critical infrastructure",
    summary: "Russia launched a coordinated missile and drone strike on nine Ukrainian cities, targeting military infrastructure, energy facilities and industrial sites. The attack killed at least two civilians and wounded 14 others across multiple regions, including Zapor\u2026",
    category: "energy",
    publishedAt: "2026-08-28T09:30:00+03:30",
    source: {"name": "Naturalnews.com", "url": "https://www.naturalnews.com/2026-08-28-russia-strikes-nine-ukrainian-cities-targeting-critical-infrastructure.html"},
    imageUrl: "https://www.naturalnews.com/wp-content/uploads/sites/91/2026/08/ukraine-russia-ballistic-missiles-3243-original.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-16cb156b35d4883e",
    title: "EU\u2019s energy ban blamed for soaring prices as bloc faces winter crisis",
    summary: "The EU\u2019s self-imposed sanctions have left European energy prices two to three times higher than in the United States and China. Natural gas storage levels are at their worst in 15 years heading into winter, with prices potentially needing to exceed 100 euros \u2026",
    category: "energy",
    publishedAt: "2026-08-28T09:30:00+03:30",
    source: {"name": "Naturalnews.com", "url": "https://www.naturalnews.com/2026-08-28-eus-energy-ban-blamed-for-soaring-cost.html"},
    imageUrl: "https://www.naturalnews.com/wp-content/uploads/sites/91/2026/08/european-union-flag-grunge.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-52c916a03b638d15",
    title: "Oil falls for fourth day as traders eye Hormuz talks",
    summary: "Oil prices fell for a fourth consecutive session on Aug. 27 as talks between Iran and Oman raised hopes that more energy shipments could move through the Strait of Hormuz.",
    category: "energy",
    publishedAt: "2026-08-28T09:21:13+03:30",
    source: {"name": "Hurriyet Daily News", "url": "https://www.hurriyetdailynews.com/oil-falls-for-fourth-day-as-traders-eye-hormuz-talks-226157"},
    imageUrl: "https://image.hurimg.com/i/hurriyet/75/200x200/6a9121cede691a4aa8c67857.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-87f64a5eaa65c031",
    title: "Bombing Iran Is Not a Strategy",
    summary: "The limits of deterrence in the Iran war On August 17, the 60-day deadline set by the June U.S.-Iran agreement expired without a final peace settlement. Tehran, meanwhile, warned that it was preparing to adopt a fully offensive posture in the Strait of Hormuz\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-28T09:11:15+03:30",
    source: {"name": "CounterPunch", "url": "https://www.counterpunch.org/2026/08/28/bombing-iran-is-not-a-strategy/"},
    imageUrl: "https://www.counterpunch.org/wp-content/uploads/2026/04/Frank_E_Petersen_Jr_Supports_Operation_Epic_Fury_9542622.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-6772131f5303c221",
    title: "September risks are stacking up hard and fast for world markets",
    summary: "LONDON, Aug 28 : Traders will return from their August breaks to a host of risks for markets, including rising concern about high government debt and prolonged inflation. Here are some key things to watch.1/ HOW MUCH LONGER?The war with Iran has been a big dr\u2026",
    category: "energy",
    publishedAt: "2026-08-28T09:08:14+03:30",
    source: {"name": "CNA", "url": "https://www.channelnewsasia.com/business/september-risks-are-stacking-up-hard-and-fast-world-markets-6347136"},
    imageUrl: "https://dam.mediacorp.sg/image/upload/s--Vvuk0utk--/c_fill,g_auto,h_676,w_1200/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/v1/one-cms/core/2026-08-28T053814Z_1_LYNXMPEM7R0BD_RTROPTP_3_USA-STOCKS.JPG?itok=mK9hGhDy",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-12f57dd9faebce52",
    title: "Six months into the Iran war: Markets become accustomed to stalemate with no end in sight",
    summary: "The war has far exceeded the four to six weeks the Trump administration estimated it would take to meet its objectives in Iran.",
    category: "economy",
    publishedAt: "2026-08-28T08:32:16+03:30",
    source: {"name": "CNBC", "url": "https://www.cnbc.com/2026/08/28/us-iran-war-six-months-trump.html"},
    imageUrl: "https://image.cnbcfm.com/api/v1/image/108344615-1785859153538-gettyimages-2288027701-AFP_C3TD2KF.jpeg?v=1785859202&w=1920&h=1080",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-6897655651ad1c01",
    title: "Trump used to say he saw a quick end to his Iran war. Six months later, he claims he's in no hurry",
    summary: "President Trump faces criticism as the six-month war against Iran continues unexpectedly. The administration now focuses on economic pressure and sanctions to achieve its goals. This strategy shift comes amid concerns about diminished military stockpiles an\u2026",
    category: "economy",
    publishedAt: "2026-08-28T07:58:05+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/trump-used-to-say-he-saw-a-quick-end-to-his-iran-war-six-months-later-he-claims-hes-in-no-hurry/articleshow/133583073.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133583091,width-1200,height-630,imgsize-75730,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-77fcc11079e721e1",
    title: "Six months on, the Iran war has changed the Middle East, but not in the way its architects had hoped",
    summary: "It's been six months since the United States and Israel attacked Iran with the perennial goal of transforming the Middle East through military force. The Is...",
    category: "economy",
    publishedAt: "2026-08-28T07:44:35+03:30",
    source: {"name": "Yahoo Entertainment", "url": "https://www.yahoo.com/news/world/articles/six-months-iran-war-changed-041435283.html"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/cbee852932f95c57dea39d77a2dd0b90bde52cba738ce3f4ad94c32b02e3f504/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_jpg/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fap.org%2Ffd3c5079298202b94d61d45d96db9a6e.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-96720d9bc96a3573",
    title: "Six Months\u2014and Counting",
    summary: "There\u2019s no obvious end to the Iran War close at hand. The post Six Months\u2014and Counting appeared first on The American Conservative.",
    category: "diplomacy",
    publishedAt: "2026-08-28T07:35:00+03:30",
    source: {"name": "The American Conservative", "url": "https://www.theamericanconservative.com/six-months-and-counting/"},
    imageUrl: "https://www.theamericanconservative.com/wp-content/uploads/2026/08/GettyImages-2291286736-scaled.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-bd673e8be6822006",
    title: "Trump used to say he saw a quick end to his Iran war. Six months later, he claims he's in no hurry",
    summary: "President Donald Trump arrives at an awkward moment for his presidency on Friday as the U.S.-Israel war against Iran reaches the six-month mark, a notable mi...",
    category: "economy",
    publishedAt: "2026-08-28T07:31:28+03:30",
    source: {"name": "Yahoo Entertainment", "url": "https://www.yahoo.com/news/politics/articles/trump-used-saw-quick-end-040128957.html"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/3635e094e46d75abd4812fe8fd0ec4fef3687f208d4fdc77d2cdb6df55b1597b/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_jpg/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fap.org%2F1d14e913b5ea47d25f1a432712f81c81.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-cb1551bfd57da779",
    title: "Saul Williams opens a portal between politics and possibility",
    summary: "The unflinching multidisciplinary artist has long welcomed new challenges. With the release of a new album and a new book, he embraces the role his career has been building toward: investigative poet.",
    category: "politics",
    publishedAt: "2026-08-28T07:31:00+03:30",
    source: {"name": "NPR", "url": "https://www.npr.org/2026/08/28/nx-s1-5945135/saul-williams-opens-a-portal-between-politics-and-possibility"},
    imageUrl: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2048x1152+0+103/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F1d%2F3e%2F8a0f21414782b7a080cf64e6e9d9%2Fhi-res-image-saul-williams-by-sam-lee.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-be96d333f5397788",
    title: "Will WAR Bankrupt the West?",
    summary: "War and sovereign debt are merging into a vicious spiral that will determine which nations survive the coming monetary crisis. Governments entered the conflicts in Ukraine and Iran, along with the escalating confrontation between the United States and China, \u2026",
    category: "economy",
    publishedAt: "2026-08-28T07:31:00+03:30",
    source: {"name": "Lewrockwell.com", "url": "https://www.lewrockwell.com/2026/08/martin-armstrong/will-war-bankrupt-the-west/"},
    imageUrl: "https://lrc-cdn.s3.amazonaws.com/assets/2021/02/LRC-share.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-3040519783b900f8",
    title: "Is Donald Trump stoking another 2008-style debt crisis?",
    summary: "Ireland stands uncomfortably close to front line if US\u2019s $40tn indebtedness proves too much",
    category: "politics",
    publishedAt: "2026-08-28T07:30:00+03:30",
    source: {"name": "The Irish Times", "url": "https://www.irishtimes.com/business/economy/2026/08/28/is-donald-trump-stoking-another-2008-style-debt-crisis/"},
    imageUrl: "https://www.irishtimes.com/resizer/v2/XLQ7LYSNIRASPPQFT2MVLHPGYQ.jpg?smart=true&auth=03fc4f890b14ee435e4b17d9e77bfe245b7927450e2d0fc85dcc4b3f814030bc&width=1200&height=630",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-24a84e70529334a4",
    title: "The Mohammunist Manifesto\u2014Punishment of Apostasy and Defection",
    summary: "Photo Credit: American Thinker AIBy Milli SandsOne ideology is premised on faith in Allah, and the other on faith in government, but what they share is that once you check in, only death gets you out.",
    category: "human-rights",
    publishedAt: "2026-08-28T07:30:00+03:30",
    source: {"name": "Americanthinker.com", "url": "https://www.americanthinker.com/articles/2026/08/the-mohammunist-manifesto-punishment-of-apostasy-and-defection/"},
    imageUrl: "https://images.americanthinker.com/3l/3leunl78urk58zw0hnkx_1200.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-ad2a7c0b69fb9468",
    title: "What was the CIA doing in Moscow?",
    summary: "Central Intelligence Agency Director John Ratcliffe paid an unannounced visit to Moscow yesterday, spending eight hours in the Russian capital before returning to the US. Though he visited the Kremlin, Vladimir Putin\u2019s spokesman Dmitry Peskov denied that they\u2026",
    category: "economy",
    publishedAt: "2026-08-28T06:46:27+03:30",
    source: {"name": "Freerepublic.com", "url": "https://freerepublic.com/focus/f-news/4393383/posts"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-102b24522bb480d6",
    title: "Loss of cheap energy harmed EU economy \u2013 Von der Leyen",
    summary: "European Commission President Ursula von der Leyen has acknowledged that the loss of cheap energy imports has harmed the EU economy Read Full Article at RT.com",
    category: "economy",
    publishedAt: "2026-08-28T06:11:29+03:30",
    source: {"name": "RT", "url": "https://www.rt.com/business/644742-energy-loss-eu-economy-leyen/"},
    imageUrl: "https://mf.b37mrtl.ru/files/2026.08/article/6a90833a203027564c799eff.jpg",
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
