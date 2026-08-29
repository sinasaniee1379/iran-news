# Iran Today — Daily News

A modern, responsive news reader focused on Iran. Built with **Vite + React 19 + TypeScript + Tailwind 4**, served as a static SPA.

## Live

Deployed on Railway at the URL Railway generated for the project (see *Settings → Networking* in the Railway dashboard).

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
```

## Production build

```bash
npm run build        # outputs to ./dist
npm start            # serves ./dist on $PORT (default 3000) with SPA fallback
```

## Deploy on Railway

This repo is set up to deploy on Railway out of the box:

1. Push the repo to GitHub.
2. In Railway: **New Project → Deploy from GitHub repo → select this repo**.
3. Railway will detect `nixpacks.toml` and run `npm ci` → `npm run build` → `npm start`.
4. **Settings → Networking → Generate Domain** to get a `*.up.railway.app` URL.

No environment variables are required for the static build.

## News content

Items in `src/data/news.ts` are paraphrases of public news briefs published
on **2026-08-29**. Each item links to its source. The current set is a
**hand-curated demo**. To go live, replace that file with a fetch from a
news API (NewsAPI.org, GNews, RSS-to-JSON, etc.) — the `NewsItem` shape is
deliberately API-friendly.

## Project layout

```
src/
  components/   Header, Footer, NewsCard, BreakingTicker, …
  pages/        HomePage, ArticlePage, CategoryPage, EndOfDayPage, SearchPage
  data/news.ts  The single source of truth for items shown
  hooks/        useTheme, useNewsFilter
  lib/          utils (cn, formatDateTime, timeAgo)
  index.css     Tailwind v4 entry + design tokens
server.js       Tiny Express static server with SPA fallback
railway.json    Railway deploy config
nixpacks.toml   Build instructions for Nixpacks
```

## Notes on sourcing

News items are short summaries; for full context, follow the *Read at {Source}*
link inside each article. The application does not endorse any single
political reading of the events it surfaces.
