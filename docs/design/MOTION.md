# Corridor Route motion (U3)

Motion explains change; it never decorates. One orchestrated moment greets the visitor, every other motion answers something they did.

| Token | Duration |
| --- | --- |
| `--motion-press` | 180ms |
| `--motion-land` | 260ms |
| `--motion-tick` | 120ms |
| `--motion-slide` | 320ms |
| `--motion-hold` | 480ms |

| Token | Curve |
| --- | --- |
| `--ease-stamp` | cubic-bezier(0.2, 0.9, 0.3, 1) |
| `--ease-settle` | cubic-bezier(0.33, 0, 0.2, 1) |
| `--ease-drift` | cubic-bezier(0.4, 0, 0.2, 1) |

## Moments

| Moment | Motion | Duration | Easing |
| --- | --- | --- | --- |
| load | the fuel-log strip stamps in, then the price board, ledger rows, and notes drop in one beat apart | `slide` | `drift` |
| save | the slip's stamp corner presses down and the success stamp lands on the slip | `press` | `stamp` |
| change | the edited field's value ticks over to the new figure | `tick` | `settle` |
| empty | the ledger's empty note settles into place where rows would be | `land` | `settle` |
| error | the slip's border and the offending field hold a danger flash | `hold` | `settle` |
| focus | the focus ring stamps around the active field | `press` | `stamp` |

## The load moment

In order, 140ms apart (`--reveal-step`, `components/kit/Reveal.tsx`): slip → board → rows → notes.

- Reduced motion: Under reduced motion, nothing moves and nothing is hidden: the slip, board, rows, and notes appear fully in place with no stagger, and every state change swaps instantly.
- Without JavaScript: With JavaScript off, the page renders the full ledger layout and the fuel-log strip as a plain, readable form with its labels and units, and every state is shown as static text rather than motion.
- Bursts: When many changes arrive at once, the slip settles once and the affected ledger rows tick in a single staggered pass rather than flashing individually.
- Focus: Focus is always visible as a 2px focus ring in the focus color with a 2px paper offset, and every interactive target is at least 44px tall.
