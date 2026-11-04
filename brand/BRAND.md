# Corridor Route brand

Theme: **Corridor Ledger**. The daily paperwork of Ethiopian fuel corridors: the depot route slip, the tanker capacity plate, the litre count, the corridor km figure, and the day's price-per-litre board. The product borrows the look of a stamped fuel-log strip, not a

Boldness, spent in one place: The primary input is a single horizontal fuel-log strip (route km | tanker litres | price per litre) that reads like a depot slip. That one strip is the brand's signature; every other surface stays a

## Essence (B1)

| Tagline | Promise | Personality |
| --- | --- | --- |
| Plan the road tanker run, on your device. | Corridor Route lets Ethiopian logistics and real-estate teams enter route distance, tanker capacity, and fuel price and work through the numbers on-device, with no network and no invented savings. | operational, offline-first, plain-spoken, precise, unhurried, honest about limits |

| It is | It is not |
| --- | --- |
| A working prototype for entering route distance, tanker capacity, and fuel price | Not a claim that the pipeline gap is solved |
| Offline-first: data stays on this device | Not a cloud service or a sync feature |
| A tool for the team doing the run, not a report about the corridor | Not a source of invented performance or savings figures |
| A ledger: numbers you enter, numbers you read back | Not a macro policy briefing |
| Honest that the underlying research was rejected and published with caveats | Not a glossy logistics dashboard |
| Built for cheap phones in sunlight | Not a finished product; it is a prototype and says so |

The decision, with the directions rejected, is in [DECISION.md](DECISION.md).

## Colour (B4)

21 primitives and 11 semantic roles in two themes; use the roles, never a primitive directly.

| Primitive | Value |
| --- | --- |
| `paper` | #f4eee1 |
| `paper-dark` | #1b1813 |
| `surface` | #fbf7ee |
| `surface-dark` | #241f18 |
| `ink` | #211c15 |
| `ink-dark` | #ede5d5 |
| `muted` | #5c5344 |
| `muted-dark` | #a79c88 |
| `line` | #d8cdb8 |
| `line-dark` | #3b342a |
| `accent` | #a63d0c |
| `accent-dark` | #f08a4c |
| `accent-ink` | #ffffff |
| `focus` | #2e5e9e |
| `focus-dark` | #8fb6ee |
| `success` | #2e6b3c |
| `success-dark` | #7fc793 |
| `warning` | #8a5a00 |
| `warning-dark` | #e0a93e |
| `danger` | #a52a22 |
| `danger-dark` | #e5736a |

| Role | Light | Dark |
| --- | --- | --- |
| `--color-ink` | #211c15 | #ede5d5 |
| `--color-paper` | #f4eee1 | #1b1813 |
| `--color-surface` | #fbf7ee | #241f18 |
| `--color-muted` | #5c5344 | #a79c88 |
| `--color-line` | #d8cdb8 | #3b342a |
| `--color-accent` | #a63d0c | #f08a4c |
| `--color-accentInk` | #ffffff | #211c15 |
| `--color-focus` | #2e5e9e | #8fb6ee |
| `--color-success` | #2e6b3c | #7fc793 |
| `--color-warning` | #8a5a00 | #e0a93e |
| `--color-danger` | #a52a22 | #e5736a |

Every text role on every surface is measured in `contrast.json` (WCAG 2.x), and the crew repository's tests recompute it. These pairs are not for body text:

| Pair | Contrast | Use |
| --- | --- | --- |
| light: ink on accent | 2.65:1 | never |
| light: muted on accent | 1.19:1 | never |
| light: accentInk on paper | 1.16:1 | never |
| light: accentInk on surface | 1.07:1 | never |
| light: success on accent | 1.00:1 | never |
| light: warning on accent | 1.08:1 | never |
| light: danger on accent | 1.12:1 | never |
| light: focus on accent | 1.03:1 | never |
| dark: ink on accent | 1.99:1 | never |
| dark: muted on accent | 1.09:1 | never |
| dark: accentInk on paper | 1.05:1 | never |
| dark: accentInk on surface | 1.03:1 | never |
| dark: success on accent | 1.24:1 | never |
| dark: warning on accent | 1.17:1 | never |
| dark: danger on accent | 1.21:1 | never |
| dark: focus on accent | 1.20:1 | never |

Statuses never rely on colour alone: each has a word and an icon (docs/design/COMPONENTS.md), and success, warning and danger differ in lightness, so they read in greyscale.

## Type (B5)

| Role | Face | Package | Licence |
| --- | --- | --- | --- |
| display | Fraunces Variable | @fontsource-variable/fraunces | SIL Open Font License 1.1 (OFL-1.1), self-hosted from the pinned @fontsource package |
| body | IBM Plex Sans Variable | @fontsource-variable/ibm-plex-sans | SIL Open Font License 1.1 (OFL-1.1), self-hosted from the pinned @fontsource package |
| mono | IBM Plex Mono | @fontsource/ibm-plex-mono | SIL Open Font License 1.1 (OFL-1.1), self-hosted from the pinned @fontsource package |

| Token | Min | Max |
| --- | --- | --- |
| `--text-xs` | 12px | 12px |
| `--text-sm` | 14px | 14px |
| `--text-base` | 16px | 16px |
| `--text-lg` | 18px | 18px |
| `--text-xl` | 22px | 22px |
| `--text-2xl` | 30px | 30px |
| `--text-3xl` | 40px | 40px |
| `--text-4xl` | 56px | 56px |

- Display (Fraunces) is for page titles and the strip's section labels only; keep it at 2xl or larger and never set body copy in it.
- Body (IBM Plex Sans) carries all running text, labels and buttons at base (16px) or larger.
- Every figure — route km, tanker litres, price per litre, and any computed total — is set in IBM Plex Mono, tabular, so the numbers align like a ledger.
- The fuel-log strip is the one place the three faces meet: mono numerals, a small-caps Plex Sans label, and a Fraunces heading above it.
- Use weight contrast deliberately: Fraunces at a heavy weight for headings, Plex Sans at regular for body; do not set headings in the same family as body.
- Keep line-height tight on display (1.05–1.15) and open on body (1.5–1.6).

## Logo (B3)

A horizontal depot fuel-log strip: a single rounded rectangle divided by two vertical rules into three zones (route km | tanker litres | price per litre). The left zone holds a small kilometre tick mark, the middle zone a short capacity bar

The mark sits on a 64-unit grid. Keep clear space of a quarter of its width on every side; never show it under 16px (favicon) or the lockup under 120px wide.

| File | Use |
| --- | --- |
| `logo/mark.svg` | the mark on paper; the favicon |
| `logo/mark-on-dark.svg` | the mark on the ink background |
| `logo/mark-mono.svg` | one colour: stamps, embossing, small sizes |
| `logo/mark-state-success.svg` | the mark in the success state |
| `logo/wordmark.svg` | the name alone |
| `logo/lockup.svg`, `logo/lockup-on-dark.svg` | mark and name together |

Don't:

- Do not render the mark as a fuel pump, droplet, or fuel nozzle.
- Do not add a glossy pipeline, tanker, or highway illustration around it.
- Do not set the wordmark in a display face or in all caps; keep it lowercase Plex Sans.
- Do not recolor the strip zones to anything other than paper, ink and the single accent.
- Do not place the mark on a busy or photographic background; keep it on paper or surface.
- Do not scale the mark below 16px, where the three zones stop reading.

## Iconography

Outline icons on a 24 grid, 1.75px strokes, rounded corners, in `icons/ui/`: `route-slip`, `route`, `tanker-capacity`, `litre`, `price-board`, `offline-device`, `km-tick`.

## Pattern (B8)

`patterns/ledger-rule.svg` tiles seamlessly. Use only as a faint background texture on paper/surface and in empty states; keep it at low opacity so it never competes with text. Do not place it behind the fuel-log strip or any figure, and do not

## Voice (B6)

1. **Say what the field is for in the user's own operational words, not in marketing words.** — Route distance (km) — the road distance for this run.
2. **Keep numbers in the user's units and never add a figure that is not in the brief.** — Tanker capacity (litres) — enter the litres this tanker carries.
3. **State the offline, on-device fact once, plainly, where it matters.** — Your entries stay on this device. No network is needed.
4. **Name the research status honestly, in one place, without drama.** — Based on StartupTribunal research, rejected by the AI Tribunal and published with caveats.
5. **Use short, declarative sentences for state copy; no exclamation marks.** — Route saved to this device.
6. **When a value is missing, say which one and what to do, not a generic error.** — Enter the route distance in km to continue.
7. **Treat the result as a read-back of the user's own inputs, not a prediction or a promise.** — At this capacity and price, the run covers the entered distance.
8. **Avoid words that imply the product does more than it does.** — Use 'work through the numbers', not 'optimise your supply chain'.

| Use | Avoid |
| --- | --- |
| route | seamless |
| tanker | unlock |
| litres | empower |
| km | elevate |
| price per litre | next-gen |
| run | optimise your supply chain |
| corridor | real-time |
| on-device | cloud-synced |

Banned words: “seamless”, “revolutionize”, “revolutionise”, “unlock”, “empower”, “next-gen”, “cutting-edge”, “game-changer”, “game changing”, “elevate”, “synergy”, “supercharge”.

Copy for every product state:

| State | Copy |
| --- | --- |
| empty | No run entered yet. Add the route distance, tanker capacity, and price per litre to begin. |
| loading | Reading your entries… |
| error | That value is not a number. Check the field and try again. |
| success | Route saved to this device. |
| offline | You are offline. Your data stays on this device and nothing is lost. |

## Not this product (D21)

- A generic fuel-pump or droplet emblem as the logo
- Glossy pipeline-fantasy or infrastructure-render imagery
- Stock photos of trucks, tankers, or highways
- A centred hero with a purple-to-blue gradient
- Three identical feature cards with emoji icons
- Inter or Roboto with no type contrast
- Glassmorphism panels on a blurred blob background
- Stock 'Get started' and 'Learn more' buttons side by side
- a centred hero with a purple-to-blue gradient
- three identical feature cards with emoji icons
- Inter or Roboto with no type contrast
- glassmorphism panels on a blurred blob background
- stock 'Get started' and 'Learn more' buttons side by side

Never in copy: “seamless”, “revolutionize”, “revolutionise”, “unlock”, “empower”, “next-gen”, “cutting-edge”, “game-changer”, “game changing”, “elevate”, “synergy”, “supercharge”, “leverage”, “world-class”, “effortless”, “unleash”, “harness the power”, “in today's”, “look no further”, “one-stop”.
