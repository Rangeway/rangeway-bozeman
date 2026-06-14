# Images

The site currently ships with **no photography**. The hero uses a designed golden-hour CSS
gradient and the location section uses an inline SVG map, so the page looks complete without
any image files. Drop real assets here before launch for the strongest result.

## Recommended assets to add
| File | Used by | Notes |
|------|---------|-------|
| `hero-bozeman.jpg` | Hero background | Golden-hour, regional Montana character, warmth. Show a charging canopy at dusk with amber glow, or indoor lounge comfort. Provide a WebP + `srcset`. To enable, uncomment the `.hero__media` block in `index.html`. |
| `og-cover.jpg` | Open Graph / Twitter card | 1200×630. Referenced by the social meta tags in `index.html`. Until added, link previews will have no image. |

## Brand / content guardrails for imagery
- Golden-hour light, warmth, premium materials, people relaxed while vehicles charge.
- Show the indoor driver's lounge comfort.
- **Avoid:** Yellowstone National Park, Big Sky resort, or any national-park framing. Regional
  landscape and big-sky light are fine; park branding is not.
- Optimize: WebP with responsive `srcset`, lazy-load anything below the fold.
