import { TrendingUp, TrendingDown, Bitcoin, Coins } from 'lucide-react'
import { MARKETS } from '../data/markets'

function formatInt(n: number): string {
  return new Intl.NumberFormat('en-US').format(Math.round(n))
}

function formatUsd(n: number): string {
  if (n >= 1000) {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)
  }
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
}

function relativeTime(iso: string): string {
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return ''
  const diffMs = Date.now() - then
  const min = Math.floor(diffMs / 60000)
  if (min < 1) return 'just now'
  if (min < 60) return `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}h ago`
  const d = Math.floor(hr / 24)
  return `${d}d ago`
}

export function MarketsSidebar() {
  const m = MARKETS
  const noData = m.crypto.length === 0 && m.fx.length === 0

  return (
    <aside className="rounded-lg border border-[color:var(--color-border)] bg-bg-soft p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Markets
        </h3>
        <span className="text-[10px] text-fg-muted">
          {noData ? 'no data' : relativeTime(m.fetchedAt)}
        </span>
      </div>

      {noData ? (
        <p className="text-xs text-fg-muted">
          Markets will appear after the next daily refresh.
        </p>
      ) : (
        <>
          {m.fx.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                Iranian Rial (IRR)
              </p>
              <ul className="space-y-2">
                {m.fx.map(fx => {
                  const up = (fx.change24h ?? 0) >= 0
                  return (
                    <li
                      key={fx.code}
                      className="flex items-center justify-between gap-2 rounded-md border border-[color:var(--color-border)] bg-bg px-3 py-2"
                    >
                      <div>
                        <p className="text-xs font-semibold">{fx.code}</p>
                        <p className="text-[10px] text-fg-muted">{fx.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold tabular-nums">
                          {formatInt(fx.irrPerUnit)}
                        </p>
                        <p
                          className={`flex items-center justify-end gap-0.5 text-[10px] tabular-nums ${
                            up ? 'text-positive' : 'text-accent'
                          }`}
                        >
                          {up ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {up ? '+' : ''}
                          {(fx.change24h ?? 0).toFixed(2)}%
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-1.5 text-[10px] text-fg-muted">
                Source: tgju.org (Iran free-market)
              </p>
            </div>
          )}

          {m.crypto.length > 0 && (
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                Crypto (USD)
              </p>
              <ul className="space-y-2">
                {m.crypto.map(c => {
                  const up = c.change24h >= 0
                  return (
                    <li
                      key={c.id}
                      className="flex items-center justify-between gap-2 rounded-md border border-[color:var(--color-border)] bg-bg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        {c.symbol === 'BTC' ? (
                          <Bitcoin className="h-4 w-4 text-warning" />
                        ) : (
                          <Coins className="h-4 w-4 text-accent" />
                        )}
                        <div>
                          <p className="text-xs font-semibold">{c.symbol}</p>
                          <p className="text-[10px] text-fg-muted">{c.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold tabular-nums">
                          ${formatUsd(c.priceUsd)}
                        </p>
                        <p
                          className={`flex items-center justify-end gap-0.5 text-[10px] tabular-nums ${
                            up ? 'text-positive' : 'text-accent'
                          }`}
                        >
                          {up ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {up ? '+' : ''}
                          {c.change24h.toFixed(2)}%
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-1.5 text-[10px] text-fg-muted">
                Source: CoinGecko
              </p>
            </div>
          )}
        </>
      )}
    </aside>
  )
}
