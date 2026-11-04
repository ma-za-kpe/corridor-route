# Progress: Corridor Route

As of this commit. Trusted code writes this file from the job's journal; every role reads it first (`AGENTS.md`, Start here).

0 of 5 features pass.

## Features

| Feature | Title | Page | Status | Passes |
| --- | --- | --- | --- | --- |
| M1 | Corridor trip-cost estimate | `index` | in-progress | no |
| M2 | Saved estimate comparison | `index` | in-progress | no |
| M3 | Disruption scenario slider | `index` | in-progress | no |
| M4 | Site logistics cost comparison | `index` | in-progress | no |
| M5 | Estimate history and export | `index` | in-progress | no |

## Current sprint

Sprint contract: Design direction: home page and shared style

Done means, for each feature:

- [ ] M1 Corridor trip-cost estimate: P1 enters route distance, tanker capacity, fuel price and disruption factor; sees cost per litre, cost per trip and a disruption-adjusted delivery window; saves the estimate on the device. (on `index`, working offline)
- [ ] M2 Saved estimate comparison: P1 opens two saved estimates side by side, with the difference in cost per litre and delivery window highlighted. (on `index`, working offline)
- [ ] M3 Disruption scenario slider: P2 adjusts the disruption factor from 1.0 to 2.0 and watches the delivered cost per litre and delivery window change, to decide whether to buffer stock. (on `index`, working offline)
- [ ] M4 Site logistics cost comparison: P3 enters two candidate site distances from the corridor and sees the fuel logistics cost difference per litre for each, to factor into the site decision. (on `index`, working offline)
- [ ] M5 Estimate history and export: P1 browses saved estimates on the device and exports a plain-text summary to share with a customer or colleague. (on `index`, working offline)

Checked by the implementer, on the exact head:

- `npm run build`
- `python tests/site_view.py && python -m unittest discover -s tests`
- `node tests/browser/qa.mjs`

Judged by the evaluator, on the rendered product: every criterion (design, originality, depth, craft, functionality) scores at least 7 of 10, and so do its 6 hidden rubric categories. Below that the task holds; it never merges.

## Recent commits

- `4099e00def1b` on `feature/issue-2-home`: docs: product requirements, architecture and design system
- `048977d361eb` on `feature/issue-2-home`: docs: brief, plan, decisions, handoff and run record
