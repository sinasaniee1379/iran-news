# syntax=docker/dockerfile:1.7
# Multi-stage build for the Iran Today Vite SPA, served by a tiny Express
# static server with SPA fallback.  This Dockerfile is the bulletproof option
# for Railway — no Nixpacks ambiguity, no version-specific nixpkgs.

# ───────────────────────── Stage 1: build ─────────────────────────
FROM node:20-bookworm-slim AS builder
WORKDIR /app

# Install only what's needed for the build step, then prune
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# Copy the rest and build
COPY . .
RUN npm run build

# ───────────────────────── Stage 2: runtime ────────────────────────
FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Production-only deps for the static server
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --no-audit --no-fund && npm cache clean --force

# Built assets + the static server
COPY --from=builder /app/dist ./dist
COPY server.js ./

# Railway provides $PORT; we honor it.  Healthcheck hits the SPA root.
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT:-3000}/ >/dev/null || exit 1

CMD ["node", "server.js"]
