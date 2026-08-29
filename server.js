// Tiny static SPA server for production on Railway.
// Serves the Vite build in /dist with proper SPA fallback so client-side
// routes like /end-of-day, /article/:id, /category/:id all work.
//
// Why a server at all?  Railway (and most PaaS) expects a long-running
// process.  Vite's `vite preview` is fine for local testing but is not
// meant for production traffic.  Express + compression + SPA fallback
// is the smallest reliable thing.

import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import compression from 'compression'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const distDir = path.join(__dirname, 'dist')
const port = Number(process.env.PORT ?? 3000)

// gzip / brotli-style compression
app.use(compression())

// Long-cache hashed assets emitted by Vite (e.g. /assets/index-*.js)
app.use(
  '/assets',
  express.static(path.join(distDir, 'assets'), {
    immutable: true,
    maxAge: '1y',
  }),
)

// Other static files (favicon.svg, icons.svg) with light caching
app.use(
  express.static(distDir, {
    maxAge: '1h',
    setHeaders(res, file) {
      if (file.endsWith('.html')) {
        // index.html must never be cached aggressively — Vite injects a hash
        res.setHeader('Cache-Control', 'no-cache')
      }
    },
  }),
)

// SPA fallback: any GET that did not match a static file → index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`iran-news listening on http://0.0.0.0:${port}`)
})
