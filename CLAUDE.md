# CLAUDE.md — rangeway-belgrade

Single-page marketing microsite for **Rangeway Bozeman** (domain: rangewaybelgrade.com).
Part of the Rangeway multi-repo workspace; shares the Rangeway brand system and is modeled
structurally on the rangeway-mojave microsite.

## Naming (important)
- Public-facing brand name is **"Bozeman"** for name recognition.
- The actual town is **Belgrade** (where the airport, the I-90 Exit 299 interchange, and the
  site sit). Use "Belgrade" only where it is geographically precise (the location section).
- The repo and domain are **Belgrade**; never present the page as "Rangeway Belgrade" in
  headlines or SEO.

## Stack
Static HTML/CSS/JS, no build. Serve locally with `python3 -m http.server 8000`.
- `index.html` — the whole page (nav, hero, promise, location, experience, what's coming, DNA, stay in the loop, footer).
- `css/style.css` — design system tokens cloned from rangeway.co + Belgrade components.
- `js/main.js` — sticky nav, mobile menu, reveal-on-scroll. The "Stay in the loop" section
  links out to Field Notes (`fieldnotes.rangeway.co`); there is no on-page email form.

## Brand system
- Colors: Warm `#f4a855`, Secondary `#e8923a`, Charcoal `#2d2d2d`, Sage `#4a5d52`, Cream `#f5f1eb`.
- Type: Raleway (headings), Source Sans 3 (body) via Google Fonts.
- Logo: the Path Mark SVG (inline in nav/footer and in `favicon.svg`).

## Voice rules (enforce on any copy change)
- No em dashes. No sentences starting with "And". Complete sentences only. No hashtags.
- "driver's lounge" lowercase. "hotel operators," never "hoteliers". "drivers"/"guests," not "customers".
- No partner/vendor/lender names (Red Canyon Roasting Company is the only allowed name, and only
  for the future Basecamp cafe). No financials, capital, or investor language.
- No off-grid / "100% solar" claims (this site is grid-connected with solar support).
- No Yellowstone National Park / Big Sky / national-park framing. No kW/battery/uptime specs.
- No "Lite"/"budget" framing. No "Summit" phase.

## Deploy
Push to `main` → GitHub Actions publishes to `deploy-dist` → VPS pulls. See `DEPLOY.md`.
Pre-launch TODOs (Bluesky handle, real images) are listed in `DEPLOY.md`.
