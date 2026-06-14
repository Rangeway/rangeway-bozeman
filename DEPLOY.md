# Deploy & Ops — rangeway-belgrade (rangewaybelgrade.com)

The Rangeway Bozeman microsite. The public-facing brand name is **Bozeman** (for name
recognition); the actual town is **Belgrade**, used only where geographically precise (the
I-90 Exit 299 interchange and the airport area). The repo and domain are Belgrade.

Intended to be **self-hosted on the Hostinger VPS** (`72.60.71.39`, Nginx + Let's Encrypt),
the same pattern as rangeway-mojave. Served from `/var/www/rangeway-belgrade/`.

## How to deploy
**Push to `main`.** GitHub Actions (`.github/workflows/deploy.yml`) publishes the static files
to the `deploy-dist` branch; the VPS pulls that branch on a timer and rsyncs it into
`/var/www/rangeway-belgrade/`. No build step. Meta files (`.git`, `README.md`, `CLAUDE.md`,
`CNAME`, `DEPLOY.md`, dotfiles) are excluded from what's published.

## First-time server setup (not yet done)
This repo ships the workflow, but the VPS side still needs to be provisioned to match Mojave:
1. Create `/var/www/rangeway-belgrade/` and an Nginx server block for
   `rangewaybelgrade.com www.rangewaybelgrade.com`.
2. Add the repo to the VPS deploy timer that pulls the `deploy-dist` branch.
3. Issue a Let's Encrypt cert (certbot).
4. DNS at Cloudflare, **DNS-only (grey cloud)**: A records `rangewaybelgrade.com` + `www`
   → `72.60.71.39`.

## Local development
Plain static HTML/CSS/JS, no build.
```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Before launch — required edits
- **Social:** confirm the Bluesky handle in `index.html` (currently a best-guess placeholder).
- **Images:** add real golden-hour photography (see `images/README.md`) and an OG/social
  card at `images/og-cover.jpg` (referenced by Open Graph / Twitter meta tags).

The "Stay in the loop" section links out to Field Notes (`fieldnotes.rangeway.co`), matching
the Mojave microsite. There is no on-page email form and no backend or newsletter keys.
