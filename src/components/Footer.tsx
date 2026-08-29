import { Link } from 'react-router-dom'
import { Globe2, Code } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--color-border)] bg-bg-soft">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-bg">
              <Globe2 className="h-4 w-4" strokeWidth={2.5} />
            </span>
            Iran Today
          </Link>
          <p className="mt-3 max-w-xs text-sm text-fg-muted">
            A daily summary of the most important news from and about Iran.
            Politics, economy, society, diplomacy, and human rights.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Sections</h4>
          <ul className="mt-3 space-y-2 text-sm text-fg-muted">
            <li><Link to="/" className="hover:text-fg">Home</Link></li>
            <li><Link to="/end-of-day" className="hover:text-fg">End of Day</Link></li>
            <li><Link to="/category/politics" className="hover:text-fg">Politics</Link></li>
            <li><Link to="/category/economy" className="hover:text-fg">Economy</Link></li>
            <li><Link to="/category/society" className="hover:text-fg">Society</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Sources</h4>
          <ul className="mt-3 space-y-2 text-sm text-fg-muted">
            <li><a href="https://www.ncr-iran.org/en/news/" target="_blank" rel="noreferrer" className="hover:text-fg">NCRI — Iran News in Brief</a></li>
            <li><a href="https://www.aljazeera.com/where/iran/" target="_blank" rel="noreferrer" className="hover:text-fg">Al Jazeera — Iran</a></li>
            <li><a href="https://www.iranintl.com/" target="_blank" rel="noreferrer" className="hover:text-fg">Iran International</a></li>
            <li><a href="https://www.tehrantimes.com/" target="_blank" rel="noreferrer" className="hover:text-fg">Tehran Times</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">About</h4>
          <p className="mt-3 text-sm text-fg-muted">
            Built with Vite + React + Tailwind. This is a demo reader; the items shown
            come from a small hand-curated set tied to today's public news briefs.
            In production it would fetch live from the linked sources.
          </p>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-fg-muted">
            © {new Date().getFullYear()} Iran Today. News items belong to their respective publishers.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-fg-muted hover:text-fg"
            aria-label="Source"
          >
            <Code className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
