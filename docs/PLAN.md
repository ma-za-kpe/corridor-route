# Plan

## Pages

| Page | Title | Purpose | Facts |
|---|---|---|---|
| `/` | Corridor Route | Introduce the product, its audience, and the attributed research context so a visitor understands what it is before using it. | F1, F2, F3, F4, F5 |

## Tasks

Status as of this commit.

| Issue | Task | Status |
|---|---|---|
| [#2](https://github.com/ma-za-kpe/corridor-route/issues/2) | Design direction: home page and shared style | In progress |

## How the work is planned

Build one feature at a time, in this order, each to its sprint contract: M1 Corridor trip-cost estimate on index; M2 Saved estimate comparison on index; M3 Disruption scenario slider on index; M4 Site logistics cost comparison on index; M5 Estimate history and export on index

## Experience

Corridor Route (index): Introduce the product, its audience, and the attributed research context so a visitor understands what it is before using it.
  1. hero: One-line statement of what Corridor Route does: price a Djibouti-to-Ethiopia tanker trip in under 3 minutes.
  2. problem: State the corridor problem as StartupTribunal describes it, attributed to the source, with the caveat that the research was rejected by the AI Tribunal and published with caveats.
  3. evidence: Show the two evidence points (E1: road-tanker dependency and high logistics costs; E2: the $660M pipeline signal) attributed to StartupTribunal.
  4. feature: List the five MVP features (M1–M5) as the team's own concept, each with a one-line description, so the visitor sees the scope.
  5. caveats: State that this is a working prototype (F1), that all features are the team's concept, that data stays on the device, and that research claims are StartupTribunal's and not established fact.
  6. source: Link to the StartupTribunal research page (F5) and note the research status (F4).
Estimate (estimate): Let P1 enter route distance, tanker capacity, fuel price and disruption factor, see the computed cost per litre, cost per trip and delivery window, and save the estimate on the device.
  1. hero: One line: price a tanker trip from Djibouti to your destination.
  2. form: Four inputs: route distance (km), tanker capacity (litres), fuel price (ETB per litre), disruption factor (1.0–2.0 slider with labelled scenarios: normal, border delay, road closure). A save button.
  3. results: Three computed figures shown live as inputs change: cost per litre (ETB), cost per trip (ETB), and disruption-adjusted delivery window (days).
  4. explainer: Brief note on what the disruption factor means (multiplier on base transit days) and that the tool does not model border fees, security or driver wages (acknowledging the PRD risk).
  5. caveats: Reminder that this is a prototype concept and the figures are estimates from user-entered inputs, not a live feed.
Compare (compare): Let P1 select two saved estimates and see them side by side with the difference in cost per litre and delivery window highlighted.
  1. hero: One line: compare two saved estimates to see which is cheaper.
  2. form: Two dropdowns (or select lists) to pick two saved estimates from the device. A compare button.
  3. results: Side-by-side table: each estimate's inputs and outputs (cost per litre, cost per trip, delivery window), with the difference in cost per litre and delivery window highlighted in a distinct row.
  4. caveats: Note that comparison is between saved estimates on this device only; no cross-device sync.
Scenarios (scenarios): Let P2 adjust the disruption factor from 1.0 to 2.0 and watch the delivered cost per litre and delivery window change in real time, to decide whether to buffer stock.
  1. hero: One line: see how disruption changes your delivered cost.
  2. form: A disruption factor slider (1.0 to 2.0, step 0.1) with labelled scenario markers (normal at 1.0, border delay at 1.5, road closure at 2.0). Pre-filled with the last saved estimate's inputs, or a prompt to save an estimate first.
  3. results: Live-updating figures as the slider moves: delivered cost per litre (ETB) and delivery window (days). A small chart or bar showing the cost at 1.0 vs the current factor.
  4. explainer: One paragraph on how to use this: if the cost at your expected disruption level exceeds your buffer threshold, consider stockpiling or renegotiating.
  5. caveats: The disruption factor is an abstraction; the PRD notes it may need named scenarios if planners cannot map the multiplier to a real event.
Sites (sites): Let P3 enter two candidate site distances from the corridor and see the fuel logistics cost difference per litre for each, to factor into the site decision.
  1. hero: One line: compare the fuel logistics cost of serving two candidate sites.
  2. form: Two distance inputs (km from corridor) for Site A and Site B, plus shared tanker capacity and fuel price inputs (or a link to use the last saved estimate's values).
  3. results: Cost per litre for each site, and the difference highlighted. A one-line recommendation: which site has lower logistics cost per litre.
  4. explainer: Note that this is a logistics-cost input for a site decision, not a property listing or real-estate tool (per PRD non-goals).
  5. caveats: Prototype concept; distances are user-entered, no mapping or route optimization.
History (history): Let P1 browse all saved estimates on the device and export a plain-text summary to share with a customer or colleague.
  1. hero: One line: your saved estimates, ready to share.
  2. list: Chronological list of all saved estimates on the device, each showing destination, cost per litre, cost per trip, delivery window, and save date. A remove button per entry.
  3. form: An export button that generates a plain-text summary of all (or selected) estimates, formatted for pasting into an email or message.
  4. caveats: Data lives only on this device; clearing browser data removes all estimates. No sync or backup.
The design system: docs/design/ and brand/; the tokens: app/tokens.css.
