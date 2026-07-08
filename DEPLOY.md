# Deploy & Ops — rangeway-bozeman (rangewaybozeman.com)

The Rangeway Bozeman microsite. Repo, domain, and public-facing name are all **Bozeman**;
the actual town is **Belgrade**, mentioned only where geographically precise (the I-90 Exit 299
interchange and the airport area).

**Self-hosted on the Hostinger VPS** (`72.60.71.39`, Nginx + Let's Encrypt), the same pattern as
rangeway-mojave. Served from `/var/www/rangeway-bozeman/`.

## How to deploy
**Push to `main`.** GitHub Actions (`.github/workflows/deploy.yml`) publishes the static files
to the `deploy-dist` branch; the VPS pulls that branch on a timer and rsyncs it into
`/var/www/rangeway-bozeman/`. No build step. Meta files (`.git`, `README.md`, `CLAUDE.md`,
`CNAME`, `DEPLOY.md`, dotfiles) are excluded from what's published.

## Server setup (done 2026-06-14)
The VPS is provisioned to match Mojave:
1. `/var/www/rangeway-bozeman/` exists, owned by `deploy:deploy`.
2. Nginx server block `/etc/nginx/sites-available/rangeway-bozeman` (enabled) for
   `rangewaybozeman.com www.rangewaybozeman.com`, includes `snippets/rangeway-static.conf`.
3. `rangeway-bozeman /var/www/rangeway-bozeman` added to `/etc/rangeway-deploy.conf`
   (the `rangeway-deploy.timer` pulls the `deploy-dist` branch every 2 min).
4. Let's Encrypt cert issued (certbot --nginx), with HTTP→HTTPS redirect.
5. DNS at Cloudflare, DNS-only: A records `rangewaybozeman.com` + `www` → `72.60.71.39`.

**Auto-deploy requires the GitHub repo to be public.** The VPS pull-deploy clones over
unauthenticated HTTPS (same as every other Rangeway site repo). While the repo is private the
2-min timer cannot fetch it; deploy manually with:
```bash
rsync -az --delete \
  --exclude='.git' --exclude='.github' --exclude='.claude' --exclude='.DS_Store' \
  --exclude='CLAUDE.md' --exclude='README.md' --exclude='.gitignore' \
  --exclude='.gitattributes' --exclude='CNAME' --exclude='DEPLOY.md' \
  ./ rangeway-vps:/var/www/rangeway-bozeman/ && ssh rangeway-vps 'chown -R deploy:deploy /var/www/rangeway-bozeman'
```

## Local development
Plain static HTML/CSS/JS, no build.
```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Notes
- CSS/JS cache-bust with `?v=N` on `index.html` asset links when shipping style or script changes.
- Social preview uses `images/og-cover.jpg` (1200×630). Hero art is WebP + JPEG via `<picture>`.
- Invest CTAs point at `https://climatize.earth` until a campaign-specific URL exists; then deep-link.
- Field Notes (`fieldnotes.rangeway.co`) is the newsletter destination. No on-page email form.
