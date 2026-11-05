# Corridor Route design system: shape and depth (U1, U2)

The tokens live in `app/tokens.css` (and `brand/tokens.css`); pages use them only.

## Spacing

| Token | Value |
| --- | --- |
| `--space-1` | 0.25rem |
| `--space-2` | 0.5rem |
| `--space-3` | 0.75rem |
| `--space-4` | 1rem |
| `--space-5` | 1.5rem |
| `--space-6` | 2rem |
| `--space-7` | 3rem |
| `--space-8` | 4rem |

## Radius

| Token | Value |
| --- | --- |
| `--radius-slip` | 2px |
| `--radius-field` | 4px |
| `--radius-panel` | 6px |
| `--radius-stamp` | 999px |

## Elevation

| Token | Offset | Blur | Opacity |
| --- | --- | --- | --- |
| `--shadow-rest` | 0px | 0px | 0 |
| `--shadow-lift` | 1px | 2px | 0.08 |
| `--shadow-slip` | 2px | 6px | 0.12 |

## Widths and grid

- Content reaches 1200px (`--content-max`) in a 12-column grid from 960px, 6 columns from 640px and one column on a phone.
- Prose keeps a measure of 68ch (`--measure`).
- Nothing is wider than the viewport: the browser check fails any sideways scroll at 320px.

Type: Fraunces Variable for display, IBM Plex Sans Variable for body and IBM Plex Mono for figures; see brand/BRAND.md.
