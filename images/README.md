# Images

## Current
| File | Used by | Notes |
|------|---------|-------|
| `hero-bozeman.webp` / `.jpg` | Hero plate (desktop) | Landscape, ~1600×900. WebP primary via `<picture>`, JPEG fallback. |
| `hero-bozeman-mobile.webp` / `.jpg` | Hero plate (≤720px) | Portrait crop. Served via `<picture>` `<source media>`. |
| `whats-coming.webp` / `.jpg` | What's Coming plate | ~1564×1006. WebP + JPEG fallback. |
| `location-map.webp` / `.jpg` | Location survey plate | 1200×800. |
| `og-cover.jpg` | `og:image` / `twitter:image` / apple-touch | 1200×630 social card, cropped from hero. |
| `partners/*` | Partner rows | Resized PNGs (~280–400px wide). |

## Brand / content guardrails for imagery
- Golden-hour light, warmth, premium materials, people relaxed while vehicles charge.
- Show the indoor driver's lounge comfort.
- **Avoid:** Yellowstone National Park, Big Sky resort, or any national-park framing. Regional
  landscape and big-sky light are fine; park branding is not.
- Prefer WebP with JPEG fallbacks; lazy-load anything below the fold.
