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

export const LAST_UPDATED: string = "2026-08-29T14:00:48+03:30"

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
    id: "api-a39026cdea353709",
    title: "Barron Trump lives \u2018reclusive\u2019 life amid threats from Iran, assassination attempts on his dad, murder of Charlie Kirk",
    summary: "Barron Trump was also deeply affected by the September 2025 assassination of conservative activist Charlie Kirk, with whom he had become close.",
    category: "politics",
    publishedAt: "2026-08-28T14:00:00+03:30",
    source: {"name": "New York Post", "url": "https://nypost.com/2026/08/28/us-news/barron-trump-lives-reclusive-life-amid-iran-threats-assassination-attempts-on-donald/"},
    imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2026/08/138684891.jpg?quality=75&strip=all&w=1200",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-bc4d8c1d9052344c",
    title: "Trump declares Strait of Hormuz open as commercial traffic tells a different story",
    summary: "The disparity between political claims and actual shipping data highlights ongoing geopolitical tensions, impacting global oil markets significantly. The post Trump declares Strait of Hormuz open as commercial traffic tells a different story appeared first on\u2026",
    category: "energy",
    publishedAt: "2026-08-28T13:58:19+03:30",
    source: {"name": "Crypto Briefing", "url": "https://cryptobriefing.com/trump-strait-hormuz-open-iran-response/"},
    imageUrl: "https://static.cryptobriefing.com/wp-content/uploads/2026/08/28062814/library-trump-declares-strait-of-hormuz-open-as-commercial-traff-800x450.png",
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
    id: "api-102b24522bb480d6",
    title: "Loss of cheap energy harmed EU economy \u2013 Von der Leyen",
    summary: "European Commission President Ursula von der Leyen has acknowledged that the loss of cheap energy imports has harmed the EU economy Read Full Article at RT.com",
    category: "economy",
    publishedAt: "2026-08-28T06:11:29+03:30",
    source: {"name": "RT", "url": "https://www.rt.com/business/644742-energy-loss-eu-economy-leyen/"},
    imageUrl: "https://mf.b37mrtl.ru/files/2026.08/article/6a90833a203027564c799eff.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-4844167e22504c55",
    title: "Venezuela weighs exit from Opec as US discusses stake in oil fields",
    summary: "Venezuela was one of the five oil producers that founded Opec in 1960 and is widely considered the most influential country in the group's creation",
    category: "economy",
    publishedAt: "2026-08-28T05:35:37+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/world-news/venezuela-weighs-exit-from-opec-as-us-discusses-stake-in-oil-fields-126082800085_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2026-08/28/thumb/fitandfill/1200X628/1787882627-4559.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-73697ffc81a918b4",
    title: "Air New Zealand CEO targets return to profit in 2027 financial year - unless jet fuel prices have other ideas",
    summary: "Nikhil Ravishankar says fares, hedging and fewer flights needed to offset fuel costs.",
    category: "politics",
    publishedAt: "2026-08-28T05:30:00+03:30",
    source: {"name": "New Zealand Herald", "url": "https://www.nzherald.co.nz/business/companies/airlines/air-new-zealand-ceo-targets-return-to-profit-in-2027-financial-year-unless-jet-fuel-prices-have-other-ideas/premium/LXALBYP3AJFX7GQNJ7R22XAC6Q/"},
    imageUrl: "https://www.nzherald.co.nz/resizer/v2/H7KWUCL6XBHDFCLA56JK37HLJQ.jpg?auth=8c64487c0cf97f7cdf3a2b7cbe1a0df624f0e29e2d1807e210fefb491fbd4ed4&width=1200&height=675&quality=70&focal=1175%2C601&smart=false",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c844f26dc187fe59",
    title: "Trump admin in talks with Venezuela to take major stake in oil fields",
    summary: "The Venezuela talks follow the January seizure of strongman Nicol\u00e1s Maduro by US forces and the installation of more amenable leadership in Caracas",
    category: "economy",
    publishedAt: "2026-08-28T05:29:23+03:30",
    source: {"name": "Business Standard", "url": "https://www.business-standard.com/world-news/trump-admin-in-talks-with-venezuela-to-take-major-stake-in-oil-fields-126082800084_1.html"},
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2026-08/28/thumb/featurecrop/1200X628/1787882323-776.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e1ca1095cd7f0af9",
    title: "It\u2019s Trump, Stupid",
    summary: "After 10 years of dominating the stage, Trump drives and defines all politics - from the national to the local level.",
    category: "politics",
    publishedAt: "2026-08-28T03:32:00+03:30",
    source: {"name": "Ncspin.com", "url": "https://www.ncspin.com/its-trump-stupid"},
    imageUrl: "https://www.ncspin.com/content/images/1200x628/5dbbf3f3b4663.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e8ef85b7ba65cd3e",
    title: "August 27, 2026",
    summary: "This morning, a headline in the Guardian read: \u201cRFK Jr lied in Senate confirmation hearings, newly revealed documents indicate.\u201d The story by Michelle R. Smith reports that letters, newly obtained by members of the press, contradict Kennedy\u2019s repeated asserti\u2026",
    category: "politics",
    publishedAt: "2026-08-28T03:30:00+03:30",
    source: {"name": "Substack.com", "url": "https://heathercoxrichardson.substack.com/p/august-27-2026"},
    imageUrl: "https://substackcdn.com/image/fetch/$s_!3IWB!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fheathercoxrichardson.substack.com%2Ftwitter%2Fsubscribe-card.jpg%3Fv%3D-503143608%26version%3D9",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-84c62b7faa8a5233",
    title: "Qatar steps in to mediate as Trump says US not talking to Iran",
    summary: "DUBAI: Qatar's prime minister visited Tehran on Thursday (Aug 27) in an effort to revive stalled diplomacy six months into the war, as US President Donald Trump said Washington was not currently talking to Iran.",
    category: "diplomacy",
    publishedAt: "2026-08-28T02:23:58+03:30",
    source: {"name": "CNA", "url": "https://www.channelnewsasia.com/world/qatar-iran-us-mediate-trump-6346481"},
    imageUrl: "https://dam.mediacorp.sg/image/upload/s--L6BhdC2J--/c_crop,h_449,w_799,x_1,y_1/c_fill,g_auto,h_676,w_1200/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/v1/one-cms/core/2026-08-27T184401Z_1_LYNXMPEM7Q1JS_RTROPTP_3_IRAN-CRISIS-QATAR.JPG?itok=sPVdazJI",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-4ed0f40e7772da2e",
    title: "West Point Professor Fired for Refusing to Lie About Climate Change",
    summary: "A science professor says he was fired from the U.S. Military Academy at West Point, New York, for refusing to ignore the human causes of climate change, and is now suing the institution in federal court.Dr. Adam Kalkstein, a professor of geography, told The N\u2026",
    category: "human-rights",
    publishedAt: "2026-08-27T22:52:55+03:30",
    source: {"name": "The New Republic", "url": "https://newrepublic.com/post/214853/west-point-professor-fired-refusing-lie-climate-change"},
    imageUrl: "https://images.newrepublic.com/3c03536f1f4e7a4b6c0bc9aa13474197e9e1df04.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-782582e66dcd96c6",
    title: "When Will Crude Oil Prices Stabilize?",
    summary: "Crude oil prices have declined from the March 2026 high, but they remain highly volatile, driven by uncertainty and hostilities in the Middle East. Crude oil...",
    category: "diplomacy",
    publishedAt: "2026-08-27T22:30:02+03:30",
    source: {"name": "Barchart.com", "url": "https://www.barchart.com/story/news/4235848/when-will-crude-oil-prices-stabilize"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/46c339129e7f8833889175546d7c254f69da6a6c2d60e084a58d197a1dac39da/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fbarchart_com_477%2F9e9a4609211d2a5ea34e169b72b63b2d.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-010c32410fc7bb15",
    title: "Punk rapper Bobby Vylan to face no further action from police over chanting 'death, death to the IDF' at Al Quds Day demonstration in London",
    summary: "Members of the crowd also appeared to join in with the chant, on a day when 12 people were arrested during the protests.",
    category: "human-rights",
    publishedAt: "2026-08-27T21:49:06+03:30",
    source: {"name": "Dailymail.com", "url": "https://www.dailymail.com/news/article-16084963/Punk-rapper-Bobby-Vylan-face-no-action-police.html"},
    imageUrl: "https://i.dailymail.com/1s/2026/08/27/19/107148981-0-image-m-16_1787854061680.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-614307b3955c39a9",
    title: "The Modern West Belongs to Valle-Incl\u00e1n\u2019s Esperpento, Not Nolan\u2019s Odyssey",
    summary: "Nolan distorts classical myth to preserve heroic grandeur; Valle-Incl\u00e1n\u2019s esperpento deforms it to show that the ideal has decayed into satire.",
    category: "human-rights",
    publishedAt: "2026-08-27T21:30:35+03:30",
    source: {"name": "Nakedcapitalism.com", "url": "https://www.nakedcapitalism.com/2026/08/the-modern-west-belongs-to-valle-inclans-esperpento-not-nolans-odyssey.html"},
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e9c5f3be3eedf545",
    title: "Why North Korea Doesn\u2019t Want to Meet With Trump",
    summary: "Kim Jong Un is done talking about denuclearization.",
    category: "diplomacy",
    publishedAt: "2026-08-27T21:04:53+03:30",
    source: {"name": "Foreign Policy", "url": "http://foreignpolicy.com/2026/08/27/north-korea-kim-jong-un-trump-meeting-nuclear/"},
    imageUrl: "https://foreignpolicy.com/wp-content/uploads/2026/08/Trump-Kim.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a5d4e714e248c97c",
    title: "In 2011, NASA tested an antibody on mice during the final shuttle mission; treated mice showed increased bone formation and strength despite microgravity",
    summary: "Mice on Space Shuttle Atlantis exhibited enhanced bone formation and strength in the absence of gravity. Researchers tested an innovative antibody that targets sclerostin, successfully preventing bone deterioration during the mission. The study revealed that \u2026",
    category: "human-rights",
    publishedAt: "2026-08-27T18:18:36+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/science/in-2011-nasa-tested-an-antibody-on-mice-during-the-final-shuttle-mission-their-bones-remained-as-strong-as-those-of-treated-mice-on-earth/articleshow/133508957.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133510010,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-d1fd9f8daab304a4",
    title: "Iran executes over 500 people in 2026: Rights group",
    summary: "In 2023, Iran has seen a grim milestone with over 500 executions, witnessing a notable increase recently. Among those executed, twenty-nine were linked to anti-government protests, including sixteen women and thirteen political activists. Former President Don\u2026",
    category: "human-rights",
    publishedAt: "2026-08-27T18:11:19+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/iran-executes-over-500-people-in-2026-rights-group/articleshow/133571744.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133571757,width-1200,height-630,imgsize-453138,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-8be538e6717c7cb2",
    title: "White House says no negotiations with Iran, all options on table",
    summary: "WASHINGTON: The United States and Iran are not currently in talks to end the war as Washington focuses on pressuring Tehran economically, but all options remain \"on the table\", White House press secretary Karoline Leavitt said in an interview with Fox News on\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-27T17:06:00+03:30",
    source: {"name": "CNA", "url": "https://www.channelnewsasia.com/world/us-iran-war-no-negotiations-all-options-table-6345561"},
    imageUrl: "https://dam.mediacorp.sg/image/upload/s--s2IgvrL_--/c_crop,h_449,w_799,x_1,y_42/c_fill,g_auto,h_676,w_1200/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/v1/one-cms/core/2026-08-07T195510Z_2_LYNXMPEM761ID_RTROPTP_3_USA-TRUMP-LABOR-SENATE.JPG?itok=4ICWpytX",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c40603f13a32287b",
    title: "Putin Moves to Escalate War in Ukraine as Talks at Dead End",
    summary: "Negotiation frameworks have effectively collapsed, leaving the two warring sides back at square one.",
    category: "diplomacy",
    publishedAt: "2026-08-27T17:04:38+03:30",
    source: {"name": "Military.com", "url": "https://military.com/putin-moves-to-escalate-war-in-ukraine-as-talks-at-dead-end"},
    imageUrl: "https://static0.mltimages.com/wordpresshttps://static0.mltimages.com/wordpress/wp-content/uploads/2026/05/ap26129341888484-1.jpg?w=1600&h=900&fit=crop",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-fa361387ab35d808",
    title: "Nepal-Tibet flash flood shows the deadly price of climate delay",
    summary: "A glacial collapse that resulted in a flash flood in the Nepal-Tibet border shows that climate delay is proving to be deadlier and more destructive than world leaders admit, climate groups said. Disasters like this are becoming more frequent and more deadly a\u2026",
    category: "human-rights",
    publishedAt: "2026-08-27T15:55:13+03:30",
    source: {"name": "Common Dreams", "url": "https://www.commondreams.org/newswire/nepal-tibet-flash-flood-shows-the-deadly-price-of-climate-delay"},
    imageUrl: "https://www.commondreams.org/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy82NjgzNzk4My9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTc5MDkzNTA1OH0.c_5GNAUmQqriWpRaCpyvQkVPiRge-RwkqLmh1xNhQ-o/image.png?width=210",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-c42b842bca9a5a54",
    title: "Lest We Forget the Horrors: An Unending Catalog of Trump\u2019s Cruelties, Collusions, Corruptions, and Crimes: July 2026: Atrocities 1117-1207",
    summary: "Early in President Trump\u2019s first term, McSweeney\u2019s editors began to catalog the head-spinning number of misdeeds coming from his administration. We called this list a collection of Trump\u2019s cruelties, collusions, corruptions, and crimes, and it felt urgent to \u2026",
    category: "human-rights",
    publishedAt: "2026-08-27T15:15:00+03:30",
    source: {"name": "Mcsweeneys.net", "url": "https://www.mcsweeneys.net/articles/july-2026-atrocities-1117-1207"},
    imageUrl: "http://tendency-prod.nyc3.cdn.digitaloceanspaces.com/30k8e4cv9kct519xkfcgppvsz8d5",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-fe55045fa7b389f0",
    title: "Malek Bennabi and the End of an Age. The Equation of History. \u201cHow Empires Rise and Fall\u201d",
    summary: "There are moments when the decline of a power can be measured in statistics, military setbacks or shifting alliances. And there are moments when something deeper seems to be happening \u2014 something we recognize before we can fully measure it: \u2026 The post Malek \u2026",
    category: "human-rights",
    publishedAt: "2026-08-27T14:30:23+03:30",
    source: {"name": "Globalresearch.ca", "url": "https://www.globalresearch.ca/malek-bennabi-end-age/5937981"},
    imageUrl: "https://www.globalresearch.ca/wp-content/uploads/2026/04/Malek-Bennabi.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-f6a109e377e860e3",
    title: "Purgatorial Ethics: Sudan, the UAE and Australia\u2019s Arms Trade",
    summary: "Reprehensible as it is, the arms trade is an exercise of purgatorial ethics pursued by all states keen on having a market for the merchants of death: from the perspective of countries and those who represent them, it\u2019s a matter \u2026 The post Purgatorial Ethics: \u2026",
    category: "human-rights",
    publishedAt: "2026-08-27T14:17:15+03:30",
    source: {"name": "Globalresearch.ca", "url": "https://www.globalresearch.ca/sudan-uae-australia-arms-trade/5938167"},
    imageUrl: "https://www.globalresearch.ca/wp-content/uploads/2026/08/australia-uae.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-8b480f17e1cf2b2e",
    title: "Six months of the Iran war \u2013 as told through Trump\u2019s social media posts",
    summary: "How a war was announced, prosecuted, declared won, negotiated and then reopened, all in the president's own words.",
    category: "diplomacy",
    publishedAt: "2026-08-27T14:07:28+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/news/2026/8/27/six-months-of-the-iran-war-as-told-through-trumps-social-media-posts"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/08/INTERACTIVE-Social-Media-Truth-Social-Trump-thumbnail-1787231831.png?resize=1200%2C630",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-5e20d44b3fb4eef7",
    title: "Analysis-After six months, the Iran war has reached its endgame - a costly stalemate",
    summary: "BEIRUT, Aug 27 (Reuters) - The Iran war has reached its endgame: a costly stalemate. and Israeli forces attacked Iran, killing its supreme leader and maiming...",
    category: "diplomacy",
    publishedAt: "2026-08-27T14:01:57+03:30",
    source: {"name": "Yahoo Entertainment", "url": "https://uk.news.yahoo.com/analysis-six-months-iran-war-095659927.html"},
    imageUrl: "https://s.yimg.com/lo/mysterio/api/de0bb0679a09ccbeb9cb3da1cf085c41dc4aee06d9ba8cc6bca158b23f89d929/lightyear_networkapi/resizefill_w800_h533%3Bquality_80%3Bformat_jpg/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Freuters.com%2F9ce1f9f98f9d8dd2814dfba1e4679c92.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-b711e00f5923d0ec",
    title: "After six months, the Iran war has reached its endgame, a costly stalemate",
    summary: "The Iran war has reached a costly stalemate after six months of conflict. The Iranian government faces economic siege but believes it has time on its side. Tehran is betting that China and India will not fully comply with US sanctions. Washington's latest \u2026",
    category: "diplomacy",
    publishedAt: "2026-08-27T13:47:37+03:30",
    source: {"name": "The Times of India", "url": "https://economictimes.indiatimes.com/news/international/world-news/iran-war-stalemate-a-costly-clash-between-resilience-and-sanctions/articleshow/133564947.cms"},
    imageUrl: "https://img.etimg.com/thumb/msid-133564993,width-1200,height-630,imgsize-86266,overlay-economictimes/articleshow.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-0a7ef33ed1b76ce8",
    title: "Iran war reaches costly stalemate after six months as oil markets and global trade absorb the fallout",
    summary: "The prolonged conflict exacerbates global economic instability, heightening energy market volatility and complicating diplomatic resolutions. The post Iran war reaches costly stalemate after six months as oil markets and global trade absorb the fallout appear\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-27T13:39:34+03:30",
    source: {"name": "Crypto Briefing", "url": "https://cryptobriefing.com/iran-war-stalemate-six-months-oil-impact/"},
    imageUrl: "https://static.cryptobriefing.com/wp-content/uploads/2026/08/27060931/library-iran-war-reaches-costly-stalemate-after-six-months-as-oi-800x450.png",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-d7009244535b841e",
    title: "'The Toilet Kid': 9-year-old Washington boy collects toilet seats, tests their flushes and has turned his backyard into a giant toilet testing station",
    summary: "US News: A 9-year-old boy from Washington has become an unlikely social media sensation thanks to a childhood hobby that is anything but ordinary. Known online.",
    category: "diplomacy",
    publishedAt: "2026-08-27T12:02:53+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/world/us/the-toilet-kid-9-year-old-washington-boy-collects-toilet-seats-tests-their-flushes-and-has-turned-his-backyard-into-a-giant-toilet-testing-station/articleshow/133562102.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133562351,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a15eaab5bf0f512a",
    title: "1st photos of suspected killers of Haryanvi singer Ankit Balyan surface",
    summary: "Haryanvi singer Ankit Balyan was shot dead outside a gym in Shamli. Four attackers on two motorcycles allegedly carried out reconnaissance before the incident. Balyan sustained multiple gunshot wounds and was declared dead at the hospital. Police are investig\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-27T11:57:31+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/city/lucknow/1st-photos-of-suspected-killers-of-haryanvi-singer-ankit-balyan-surface/articleshow/133561942.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133562309,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-8dc7b3b60dae98d9",
    title: "'Housing First': How Sweden's Gothenburg is reducing homelessness",
    summary: "News News: Gothenburg, Sweden\u2019s second-largest city, has seen a sharp decline in homelessness after adopting Housing First, a model that puts people into permane.",
    category: "diplomacy",
    publishedAt: "2026-08-27T11:46:19+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/real-estate/news/housing-first-how-swedens-gothenburg-is-reducing-homelessness/articleshow/133561602.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133562024,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-6f9dc2346220512a",
    title: "A severe drought forced Australian scientists to rescue platypuses and keep them in captivity for five months; after being returned to the wild, they rebuilt their home ranges and resumed normal movements within days",
    summary: "Following a five-month recovery from severe drought conditions, platypuses were reintroduced to their original habitats. In an eighteen-month study, researchers tracked their activities as they reintegrated into the wild. The animals displayed quick adaptatio\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-27T11:45:30+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/world/rest-of-world/a-severe-drought-forced-australian-scientists-to-rescue-platypuses-and-keep-them-in-captivity-for-five-months-after-being-returned-to-the-wild-they-rebuilt-their-home-ranges-and-resumed-normal-movements-within-days/articleshow/133561771.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133562037,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-f775681529cdc9e0",
    title: "France heatwave: 10 Nile crocodiles hatch on their own for the first time",
    summary: "Rest of World News: Ten Nile crocodiles have hatched entirely under natural conditions at a wildlife park in southeastern France for the first time, without any human int.",
    category: "diplomacy",
    publishedAt: "2026-08-27T11:44:55+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/world/rest-of-world/france-heatwave-10-nile-crocodiles-hatch-on-their-own-for-the-first-time/articleshow/133557283.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133561993,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-a9e5bb22a97544ad",
    title: "Why did Elon Musk get Ukraine\u2019s Order of Freedom honour?",
    summary: "Elon Musk has been awarded Ukraine's Order of Freedom for his exceptional contributions through Starlink. This prestigious recognition underscores his significant impact on safeguarding human rights and liberty. Following the invasion, Starlink emerged as a v\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-27T11:33:55+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/world/europe/why-did-elon-musk-get-ukraines-order-of-freedom-honour/articleshow/133561095.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133561343,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-bacfd2d338913bef",
    title: "\u20b923 lakh salary, just \u20b915,000 expenses: Why this 27-year-old PSU employee says government jobs beat private careers",
    summary: "A 27-year-old PSU employee\u2019s Reddit post has reignited India\u2019s enduring fascination with government jobs, claiming his \u20b923 lakh package and extensive workplace benefits allow him to save nearly his entire salary. Yet his low-cost life comes with remote postin\u2026",
    category: "diplomacy",
    publishedAt: "2026-08-27T11:30:56+03:30",
    source: {"name": "The Times of India", "url": "https://timesofindia.indiatimes.com/education/news/23-lakh-salary-just-15000-expenses-why-this-27-year-old-psu-employee-says-government-jobs-beat-private-careers/articleshow/133561048.cms"},
    imageUrl: "https://static.toiimg.com/thumb/msid-133561281,width-1280,height-720,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-5eb6b2f73cc55694",
    title: "Understanding Iranian Victory",
    summary: "Iranian strategic logic and why Tehran believes it has already won against the US.",
    category: "society",
    publishedAt: "2026-08-26T13:20:03+03:30",
    source: {"name": "Nakedcapitalism.com", "url": "https://www.nakedcapitalism.com/2026/08/understanding-iranian-victory.html"},
    imageUrl: "https://www.nakedcapitalism.com/wp-content/uploads/2026/08/00-iranian-0.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-5dd054dbb7b6e1da",
    title: "Trump\u2019s Renewed Economic War on Iran Risks Blowback",
    summary: "Ryan Costello, Policy Director with the National Iranian American Council (NIAC), issued the following statement as the Trump administration moves to intensify its economic pressure campaign against Iran following months of war and instability:\u201cPresident Trum\u2026",
    category: "society",
    publishedAt: "2026-08-24T19:43:01+03:30",
    source: {"name": "Common Dreams", "url": "https://www.commondreams.org/newswire/trumps-renewed-economic-war-on-iran-risks-blowback"},
    imageUrl: "https://www.commondreams.org/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy82NjgzNzk4My9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTc5MDkzNTA1OH0.c_5GNAUmQqriWpRaCpyvQkVPiRge-RwkqLmh1xNhQ-o/image.png?width=210",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-fae23986325ac459",
    title: "What one group of Afghan women and their supporters make of international engagement with the Taliban",
    summary: "There were mixed views on engagement, but universal calls for the rights, lives, and dreams of women and girls to be supported and respected.",
    category: "society",
    publishedAt: "2026-08-24T17:05:01+03:30",
    source: {"name": "The New Humanitarian", "url": "https://www.thenewhumanitarian.org/feature/2026/08/24/what-one-group-afghan-women-and-their-supporters-make-international-engagement"},
    imageUrl: "https://assets.thenewhumanitarian.org/s3fs-public/styles/social_large/public/2026-08/003-afghanistan-voxpop.jpg?itok=__MaSJIQ",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-ef3fb6431a151042",
    title: "Who Benefits From America\u2019s Political Bundles?",
    summary: "Photo Credit: American Thinker AIBy Tsahi ShemeshIdentity politics blunts people\u2019s ability to think independently about the myriad issues facing them, leading to contradictory and self-harming viewpoints.",
    category: "society",
    publishedAt: "2026-08-24T07:30:00+03:30",
    source: {"name": "Americanthinker.com", "url": "https://www.americanthinker.com/articles/2026/08/who-benefits-from-america-s-political-bundles/"},
    imageUrl: "https://images.americanthinker.com/rp/rpzzsqu0vezav1bssp3z_1200.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-ba8e3b40738ba813",
    title: "The Subjection Of Feminists",
    summary: "Perhaps the most tragic and consequential failure of Y2KMind happened with feminists in Women\u2019s Studies when, in the spring of 2014, Hoover Institution fellow Ayaan Hirsi Ali would get an honorary degree that year in Feminist/Women\u2019s Studies and rapidly, prof\u2026",
    category: "society",
    publishedAt: "2026-08-24T03:30:00+03:30",
    source: {"name": "Substack.com", "url": "https://rlandes.substack.com/p/the-subjection-of-feminists"},
    imageUrl: "https://substackcdn.com/image/fetch/$s_!DEvJ!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe4a0d482-7e23-44dc-8719-72d8fbbdf33c_550x493.jpeg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-61ffbc6c627cd7e2",
    title: "Iran government signals fuel price hike on eve of new US sanctions",
    summary: "Prices for food and other items are soaring, and there is a history of unrest, so any increase is being considered.",
    category: "society",
    publishedAt: "2026-08-23T19:08:16+03:30",
    source: {"name": "Al Jazeera English", "url": "https://www.aljazeera.com/economy/2026/8/23/iran-government-signals-fuel-price-hike-on-eve-of-new-us-sanctions"},
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2026/08/reuters_6a8b00ff-1787494655.jpg?resize=1920%2C1440",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-6d1688e23e4f130d",
    title: "The Tehran regime hasn\u2019t changed - its old enforcers are back in power",
    summary: "No regime change has taken place in Tehran. America\u2019s longtime enemies and veterans of the Islamic Republic\u2019s machinery of violence are back at the commanding heights of power-and Iran is entering a new age of hard-line rule. Opinion.",
    category: "society",
    publishedAt: "2026-08-23T15:56:06+03:30",
    source: {"name": "Israelnationalnews.com", "url": "https://www.israelnationalnews.com/news/432110"},
    imageUrl: "https://2.a7.org/files/pictures/000/1220635.jpg",
    tags: ["iran"],
    importance: 2,
  },

  {
    id: "api-e175ae787b57748f",
    title: "\u201cPre-Baked Frame-up Operation\u201d: allegations of antisemitism politicization in campus crackdown",
    summary: "Attempts to shield Israel against campus criticism took two blows this summer with a whistleblower and leading opposition politician questioning a government taskforce formed early in Donald Trump\u2019s second term to combat campus antisemitism. Whistleblower Hal\u2026",
    category: "society",
    publishedAt: "2026-08-22T08:25:20+03:30",
    source: {"name": "Muslimmatters.org", "url": "https://muslimmatters.org/2026/08/22/pre-baked-frame-up-operation-allegations-of-antisemitism-politicization-in-campus-crackdown/"},
    imageUrl: "https://c7c8edde.delivery.rocketcdn.me/wp-content/uploads/unsavoury-trio.jpg",
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
