# Images

## Current
| File | Used by | Notes |
|------|---------|-------|
| `hero-bozeman.png` | Hero background (desktop) + OG/Twitter card | The main site's hero, pulled from `rangeway-pages` (`hero-mountain-waystation.png`). 1672×941, ~2.2MB. A Rangeway location at dusk with sunset-lit mountains, glowing lounge, and a vehicle under the timber canopy. |
| `hero-bozeman-mobile.png` | Hero background (≤720px) | Portrait crop, from `rangeway-pages` (`hero-mountain-waystation-mobile.png`). 941×1672, ~2.3MB. Served via `<picture>` `<source>`. |

## Recommended follow-ups
- **Optimize the hero:** the PNGs are ~2MB each. Export WebP/AVIF for a faster first paint.
- **Dedicated OG card:** 1200×630 at `images/og-cover.jpg`, then point the `og:image` /
  `twitter:image` meta tags back to it (they currently use `hero-bozeman.png`).

## Brand / content guardrails for imagery
- Golden-hour light, warmth, premium materials, people relaxed while vehicles charge.
- Show the indoor driver's lounge comfort.
- **Avoid:** Yellowstone National Park, Big Sky resort, or any national-park framing. Regional
  landscape and big-sky light are fine; park branding is not.
- Optimize: WebP with responsive `srcset`, lazy-load anything below the fold.
