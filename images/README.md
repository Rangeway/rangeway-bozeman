# Images

## Current
| File | Used by | Notes |
|------|---------|-------|
| `hero-bozeman.jpg` | Hero background + OG/Twitter card | The Basecamp Phase II vision render, pulled from `rangeway-pages` (`basecamp-hero.jpg`). 1024×1024, ~320KB. Golden-hour aerial of a Basecamp with solar canopy, lounge, and mountains. Reads slightly desert (cacti); swap for a Montana-appropriate shot when available. |

## Recommended follow-ups
- **Optimize the hero:** export a WebP + responsive `srcset` (the current file is a 1MP JPEG).
- **Dedicated OG card:** 1200×630 at `images/og-cover.jpg`, then point the `og:image` /
  `twitter:image` meta tags back to it (they currently use `hero-bozeman.jpg`).

## Brand / content guardrails for imagery
- Golden-hour light, warmth, premium materials, people relaxed while vehicles charge.
- Show the indoor driver's lounge comfort.
- **Avoid:** Yellowstone National Park, Big Sky resort, or any national-park framing. Regional
  landscape and big-sky light are fine; park branding is not.
- Optimize: WebP with responsive `srcset`, lazy-load anything below the fold.
