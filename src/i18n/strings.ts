// All UI strings, in English and Farsi.
//
// Convention: every key is camelCase.  When in doubt, prefer a longer
// descriptive key over an abbreviation.  Comments are used to group
// strings by where they appear in the UI.
//
// News CONTENT strings (titles, summaries, source names) live in
// src/data/news.ts so that future API-fed content can stay in its
// own language and the UI chrome is independent.

export type Lang = 'en' | 'fa'

export const dict = {
  en: {
    // ── brand ──
    brand: 'Iran Today',
    brandTagline: 'A daily summary of the most important news from and about Iran.',

    // ── nav ──
    nav: {
      home: 'Home',
      endOfDay: 'End of Day',
      search: 'Search',
      sections: 'Sections',
      sources: 'Sources',
      about: 'About',
    },

    // ── header ──
    header: {
      searchAria: 'Search',
      toggleLanguage: 'Switch language',
      toggleTheme: 'Toggle theme',
    },

    // ── footer ──
    footer: {
      lead: 'A daily summary of the most important news from and about Iran. Politics, economy, society, diplomacy, and human rights.',
      about: 'Built with Vite + React + Tailwind. This is a demo reader; the items shown come from a small hand-curated set tied to today\'s public news briefs. In production it would fetch live from the linked sources.',
      copyright: (year: number) => `© ${year} Iran Today. News items belong to their respective publishers.`,
      viewSource: 'View source',
    },

    // ── categories ──
    category: {
      politics: 'Politics',
      economy: 'Economy',
      society: 'Society',
      diplomacy: 'Diplomacy',
      'human-rights': 'Human Rights',
      energy: 'Energy',
    },

    // ── home page ──
    home: {
      todayInIran: 'Today in Iran',
      endOfDayCta: 'End-of-day summary',
      allStories: 'All stories',
      searchPlaceholder: 'Search titles, tags, locations…',
      noMatches: 'No stories match that filter.',
      bySection: 'By section',
      storiesCount: (n: number) => `${n} ${n === 1 ? 'story' : 'stories'} today`,
      breaking: 'Breaking',
    },

    // ── article page ──
    article: {
      back: 'Back',
      notFound: 'Story not found.',
      readAt: (source: string) => `Read at ${source}`,
      sourceLabel: 'Source',
      moreIn: (cat: string) => `More in ${cat}`,
      tagAria: 'Tags',
      sourcingNote: {
        title: 'A note on sourcing.',
        body: 'This summary is a brief rephrasing of the linked public report. For the full context, the named source, and any updates since publication, follow the link above. The Iran Today team does not endorse any single political reading of these events; we aim to surface what is being reported.',
      },
    },

    // ── category page ──
    categoryPage: {
      notFound: 'Section not found.',
      count: (n: number) => `${n} ${n === 1 ? 'story' : 'stories'} in this section`,
      empty: 'No stories in this section yet.',
    },

    // ── end-of-day page ──
    eod: {
      eyebrow: 'End of Day',
      date: (d: string) => d,
      lead: "The most important Iran-related stories of the day, with a short summary of each, what to watch next, and a thread you can read in under five minutes. Updated nightly.",
      share: 'Share',
      allToday: "All today's stories",
      tldrTitle: 'TL;DR — the day in 90 seconds',
      byThemeTitle: 'What happened, by theme',
      watchNextTitle: 'What to watch next',
      watchNextLead: 'Developing stories that are likely to evolve overnight or early tomorrow.',
      save: 'Save',
      saved: 'Saved',
      unSave: 'Unsave story',
      saveStory: 'Save story',
      footer: (when: string) => `Wrap published at ${when}. Sources are linked inline; please follow them for the most current reporting.`,
    },

    // ── search page ──
    search: {
      title: 'Search',
      placeholder: 'Search by title, tag, location…',
      results: (n: number) => `${n} ${n === 1 ? 'result' : 'results'}`,
      for: (q: string) => ` for "${q}"`,
    },

    // ── shared labels ──
    shared: {
      topStory: 'Top story',
      view: 'View',
      viewAll: 'View all',
    },
  },

  fa: {
    // ── brand ──
    brand: 'ایران امروز',
    brandTagline: 'خلاصه‌ای روزانه از مهم‌ترین خبرهای ایران.',

    // ── nav ──
    nav: {
      home: 'خانه',
      endOfDay: 'پایان روز',
      search: 'جستجو',
      sections: 'بخش‌ها',
      sources: 'منابع',
      about: 'درباره',
    },

    // ── header ──
    header: {
      searchAria: 'جستجو',
      toggleLanguage: 'تغییر زبان',
      toggleTheme: 'تغییر پوسته',
    },

    // ── footer ──
    footer: {
      lead: 'خلاصه‌ای روزانه از مهم‌ترین خبرهای ایران در حوزه‌های سیاست، اقتصاد، جامعه، دیپلماسی و حقوق بشر.',
      about: 'ساخته‌شده با Vite + React + Tailwind. این یک نمونه است و خبرهای نمایش‌داده‌شده از گزارش‌های عمومی امروز گردآوری شده‌اند. در نسخه‌ی نهایی، محتوا به‌صورت زنده از منابع پیوندشده بارگذاری می‌شود.',
      copyright: (year: number) => `© ${year} ایران امروز. مالکیت خبرها متعلق به ناشران آن‌هاست.`,
      viewSource: 'مشاهده منبع',
    },

    // ── categories ──
    category: {
      politics: 'سیاست',
      economy: 'اقتصاد',
      society: 'جامعه',
      diplomacy: 'دیپلماسی',
      'human-rights': 'حقوق بشر',
      energy: 'انرژی',
    },

    // ── home page ──
    home: {
      todayInIran: 'امروز در ایران',
      endOfDayCta: 'خلاصه‌ی پایان روز',
      allStories: 'همه‌ی خبرها',
      searchPlaceholder: 'جستجو در عنوان، برچسب، مکان…',
      noMatches: 'خبری با این فیلتر پیدا نشد.',
      bySection: 'به تفکیک بخش',
      storiesCount: (n: number) => `${n} خبر امروز`,
      breaking: 'فوری',
    },

    // ── article page ──
    article: {
      back: 'بازگشت',
      notFound: 'خبر پیدا نشد.',
      readAt: (source: string) => `خواندن در ${source}`,
      sourceLabel: 'منبع',
      moreIn: (cat: string) => `بیشتر در ${cat}`,
      tagAria: 'برچسب‌ها',
      sourcingNote: {
        title: 'نکته‌ای درباره‌ی منابع.',
        body: 'این متن بازنویسی کوتاهی از گزارش عمومی پیوندشده است. برای متن کامل و به‌روزرسانی‌های پس از انتشار، به لینک منبع مراجعه کنید. تیم ایران امروز هیچ قرائت سیاسی خاصی از این رویدادها را تأیید نمی‌کند؛ هدف ما ارائه‌ی آن چیزی است که گزارش شده است.',
      },
    },

    // ── category page ──
    categoryPage: {
      notFound: 'بخش پیدا نشد.',
      count: (n: number) => `${n} خبر در این بخش`,
      empty: 'هنوز خبری در این بخش نیست.',
    },

    // ── end-of-day page ──
    eod: {
      eyebrow: 'پایان روز',
      date: (d: string) => d,
      lead: 'مهم‌ترین خبرهای امروز ایران، هرکدام در چند جمله، همراه با نکته‌هایی برای پیگیری فردا. هر شب به‌روزرسانی می‌شود.',
      share: 'اشتراک‌گذاری',
      allToday: 'همه‌ی خبرهای امروز',
      tldrTitle: 'در ۹۰ ثانیه — خلاصه‌ی روز',
      byThemeTitle: 'به تفکیک موضوع',
      watchNextTitle: 'برای پیگیری',
      watchNextLead: 'خبرهای در حال توسعه که احتمالاً امشب یا فردای صبح تحولات تازه‌ای خواهند داشت.',
      save: 'ذخیره',
      saved: 'ذخیره شد',
      unSave: 'حذف از ذخیره‌ها',
      saveStory: 'ذخیره‌ی خبر',
      footer: (when: string) => `این جمع‌بندی در ${when} منتشر شده است. برای آخرین گزارش‌ها به منابع پیوندشده مراجعه کنید.`,
    },

    // ── search page ──
    search: {
      title: 'جستجو',
      placeholder: 'جستجو بر اساس عنوان، برچسب، مکان…',
      results: (n: number) => `${n} نتیجه`,
      for: (q: string) => ` برای «${q}»`,
    },

    // ── shared labels ──
    shared: {
      topStory: 'خبر مهم',
      view: 'مشاهده',
      viewAll: 'همه',
    },
  },
} as const

export type Dict = typeof dict.en | typeof dict.fa
