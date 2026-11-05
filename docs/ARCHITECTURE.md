# Corridor Route: architecture

## Information architecture

| Page | Purpose | Primary task | Features |
| --- | --- | --- | --- |
| `index` Corridor Route | Introduce the product, its audience, and the attributed research context so a visitor understands what it is before using it. | J1 | none |
| `estimate` Estimate | Let P1 enter route distance, tanker capacity, fuel price and disruption factor, see the computed cost per litre, cost per trip and delivery window, and save the estimate on the device. | Corridor trip-cost estimate | M1 Corridor trip-cost estimate |
| `compare` Compare | Let P1 select two saved estimates and see them side by side with the difference in cost per litre and delivery window highlighted. | Saved estimate comparison | M2 Saved estimate comparison |
| `scenarios` Scenarios | Let P2 adjust the disruption factor from 1.0 to 2.0 and watch the delivered cost per litre and delivery window change in real time, to decide whether to buffer stock. | Disruption scenario slider | M3 Disruption scenario slider |
| `sites` Sites | Let P3 enter two candidate site distances from the corridor and see the fuel logistics cost difference per litre for each, to factor into the site decision. | Site logistics cost comparison | M4 Site logistics cost comparison |
| `history` History | Let P1 browse all saved estimates on the device and export a plain-text summary to share with a customer or colleague. | Estimate history and export | M5 Estimate history and export |

## Content per page

### Corridor Route (`index`)

1. hero: One-line statement of what Corridor Route does: price a Djibouti-to-Ethiopia tanker trip in under 3 minutes.
2. problem: State the corridor problem as StartupTribunal describes it, attributed to the source, with the caveat that the research was rejected by the AI Tribunal and published with caveats.
3. evidence: Show the two evidence points (E1: road-tanker dependency and high logistics costs; E2: the $660M pipeline signal) attributed to StartupTribunal.
4. feature: List the five MVP features (M1–M5) as the team's own concept, each with a one-line description, so the visitor sees the scope.
5. caveats: State that this is a working prototype (F1), that all features are the team's concept, that data stays on the device, and that research claims are StartupTribunal's and not established fact.
6. source: Link to the StartupTribunal research page (F5) and note the research status (F4).

### Estimate (`estimate`)

1. hero: One line: price a tanker trip from Djibouti to your destination.
2. form: Four inputs: route distance (km), tanker capacity (litres), fuel price (ETB per litre), disruption factor (1.0–2.0 slider with labelled scenarios: normal, border delay, road closure). A save button.
3. results: Three computed figures shown live as inputs change: cost per litre (ETB), cost per trip (ETB), and disruption-adjusted delivery window (days).
4. explainer: Brief note on what the disruption factor means (multiplier on base transit days) and that the tool does not model border fees, security or driver wages (acknowledging the PRD risk).
5. caveats: Reminder that this is a prototype concept and the figures are estimates from user-entered inputs, not a live feed.

### Compare (`compare`)

1. hero: One line: compare two saved estimates to see which is cheaper.
2. form: Two dropdowns (or select lists) to pick two saved estimates from the device. A compare button.
3. results: Side-by-side table: each estimate's inputs and outputs (cost per litre, cost per trip, delivery window), with the difference in cost per litre and delivery window highlighted in a distinct row.
4. caveats: Note that comparison is between saved estimates on this device only; no cross-device sync.

### Scenarios (`scenarios`)

1. hero: One line: see how disruption changes your delivered cost.
2. form: A disruption factor slider (1.0 to 2.0, step 0.1) with labelled scenario markers (normal at 1.0, border delay at 1.5, road closure at 2.0). Pre-filled with the last saved estimate's inputs, or a prompt to save an estimate first.
3. results: Live-updating figures as the slider moves: delivered cost per litre (ETB) and delivery window (days). A small chart or bar showing the cost at 1.0 vs the current factor.
4. explainer: One paragraph on how to use this: if the cost at your expected disruption level exceeds your buffer threshold, consider stockpiling or renegotiating.
5. caveats: The disruption factor is an abstraction; the PRD notes it may need named scenarios if planners cannot map the multiplier to a real event.

### Sites (`sites`)

1. hero: One line: compare the fuel logistics cost of serving two candidate sites.
2. form: Two distance inputs (km from corridor) for Site A and Site B, plus shared tanker capacity and fuel price inputs (or a link to use the last saved estimate's values).
3. results: Cost per litre for each site, and the difference highlighted. A one-line recommendation: which site has lower logistics cost per litre.
4. explainer: Note that this is a logistics-cost input for a site decision, not a property listing or real-estate tool (per PRD non-goals).
5. caveats: Prototype concept; distances are user-entered, no mapping or route optimization.

### History (`history`)

1. hero: One line: your saved estimates, ready to share.
2. list: Chronological list of all saved estimates on the device, each showing destination, cost per litre, cost per trip, delivery window, and save date. A remove button per entry.
3. form: An export button that generates a plain-text summary of all (or selected) estimates, formatted for pasting into an email or message.
4. caveats: Data lives only on this device; clearing browser data removes all estimates. No sync or backup.

## Content model

- **Estimate** (indexeddb): id (string, generated), routeDistanceKm (number), tankerCapacityLitres (number), fuelPriceEtbPerLitre (number), disruptionFactor (number, 1.0–2.0), costPerLitreEtb (number, computed), costPerTripEtb (number, computed), deliveryWindowDays (number, computed), savedAt (ISO timestamp). The only record type the product creates. One kind in IndexedDB via useCollection<Estimate>('estimates'). All five MVP features read from or write to this single collection: M1 creates, M2 reads two, M3 reads one and recomputes, M4 computes on the fly (no save), M5 lists and exports.

## Decisions

### ADR-1 Store estimates in IndexedDB via the kit's useCollection hook

- Context: The product must work fully offline with no server, no accounts, and no network calls. The stack policy forbids fetch, XMLHttpRequest, and any third-party API. Data must persist across reloads on the same device.
- Decision: Use the kit's useCollection<Estimate>('estimates') hook, which wraps IndexedDB. One collection, one transaction per user action. Handle 'unavailable' and 'quota exceeded' with a visible error message; never lose a record silently.
- Rejected: localStorage: rejected because it has no query capability, a 5 MB limit, and no structured transactions; a single large JSON blob would break on quota.
- Rejected: SQLite-WASM: rejected because the data model is a single flat collection with no relational queries; the overhead of a WASM module is not justified for this scale.
- Rejected: A hosted database (Supabase, Firebase): rejected because the brief mandates offline-first with no server, no accounts, and no network dependency.
- Consequences: Data is device-local only; clearing browser data loses all estimates. No cross-device sync. The export feature (M5) is the only way to move data off the device. IndexedDB is available in all modern browsers; the kit handles the 'unavailable' fallback with a visible message.

### ADR-2 Disruption factor as a continuous slider (1.0–2.0) with labelled scenario marks

- Context: The PRD risk section notes that planners may not understand what 1.5 or 2.0 means in practice. The assumption section says to test with 5 planners and, if they cannot map it, replace with named scenarios. The PRD also says the slider should have labelled scenarios (normal, border delay, road closure
- Decision: Use a continuous slider from 1.0 to 2.0 (step 0.1) with three labelled marks: 'Normal' at 1.0, 'Border delay' at 1.5, 'Road closure' at 2.0. The slider is the primary input; the labels are visual anchors, not discrete buttons. This keeps the interaction continuous (matching the PRD's 'adjust the' ph
- Rejected: Discrete buttons (Normal / Border delay / Road closure): rejected because the PRD explicitly says 'adjust the disruption factor from 1.0 to 2.0' and 'watches the delivered cost change', implying continuous interaction. Discrete buttons would lose the intermediate values (1.2, 1.7) that a planner may
- Rejected: Named scenario dropdown: rejected for the same reason; it removes the continuous adjustment the PRD describes.
- Consequences: If the 5-planner test shows they cannot map the multiplier, the labels can be replaced with more specific scenario names without changing the slider mechanics. The slider value is stored in the Estimate record, so saved estimates retain the exact factor used.

### ADR-3 M4 (site comparison) does not save to IndexedDB

- Context: M4 is a quick comparison tool for P3: enter two distances, see the cost difference. The PRD does not say P3 saves site comparisons; the success metric is 'the cost-per-litre difference between the two sites is shown'. The assumption section says to measure whether any P3 sessions save a site compar
- Decision: M4 computes and displays the comparison in real time but does not persist a record. The inputs (two distances, shared capacity and price) are transient. If P3 wants to keep the result, they can save it as a regular Estimate via the Estimate page.
- Rejected: Save site comparisons as a separate 'SiteComparison' record in IndexedDB: rejected because the PRD does not require it, it adds a second collection and a second useCollection hook, and the non-goal section says 'No real-estate transaction tooling'. A site comparison is a logistics-cost input, not a
- Rejected: Save as a regular Estimate with a 'siteComparison' flag: rejected because it pollutes the Estimate collection with records that do not have a route distance from Djibouti, which would confuse M2 (compare) and M5 (history).
- Consequences: P3 must re-enter distances each time. If the post-release metric shows P3 sessions are saving site comparisons (which they cannot, by design), the team will revisit. The empty-state for M4 should include a one-line example (per the PRD assumption) to reduce friction.

### ADR-4 Cost formula: fuel cost per litre = (fuelPrice × tankerCapacity) / tankerLoad; a

- Context: The PRD says P1 enters route distance, tanker capacity, fuel price and disruption factor, and sees cost per litre, cost per trip and delivery window. The PRD does not specify the exact formula. The tool must produce a defensible figure that a planner can use to price a quote. The risk section notes
- Decision: Cost per trip (ETB) = fuelPriceEtbPerLitre × tankerCapacityLitres × (routeDistanceKm / 100) × disruptionFactor. This models fuel consumption as proportional to distance (a fixed consumption rate of 1 litre per 100 km, which is a placeholder to be validated in the 3-planner interview). Cost per litre
- Rejected: A more complex model with border fees, driver wages, security costs: rejected because the PRD non-goals say 'No live fuel price feed' and the risk section explicitly acknowledges these are hidden costs the tool does not model. Adding them now would make the tool less transparent and harder to trust.
- Rejected: A user-entered consumption rate (litres per 100 km): rejected for this release because the PRD assumption says the planner can state route distance without looking it up, implying the other parameters are also known or standard. The 3-planner interview will validate whether a fixed rate is def
- Rejected: Using tanker capacity as the load (not a separate 'load' input): the PRD says 'tanker capacity (litres)' is the input, so the full capacity is assumed to be the load. If a planner needs to model a partial load, they can enter a smaller capacity.
- Consequences: The 1-litre-per-100-km consumption rate is a placeholder. The 3-planner interview (PRD risk test) will validate or replace it. The formula is in lib/corridorCost.ts so it is typed, testable, and easy to change. The disruption factor multiplies the fuel cost (not just the delivery window), which is a

## Non-functional requirements

- Performance: The estimate results (cost per litre, cost per trip, delivery window) update within 100 ms of any input change, including slider drag. The compare and sites pages show results within 100 ms of selecting or entering values.
- Accessibility: All interactive elements (inputs, slider, buttons, selects) are keyboard-operable and have visible focus states. The disruption slider has an aria-valuetext that announces the current factor and the nearest labelled scenario. Results are announced via aria-live='polite' so screen-read
- Offline behaviour: The product works fully offline after the initial page load. No network call is made after the page is rendered. All data reads and writes go to IndexedDB on the device. If IndexedDB is unavailable (private browsing, storage disabled), a visible message says 'This browser will not
- Motion: Page blocks use crew-reveal with a subtle fade-in (200 ms, 8 px translate). The disruption slider's results update without animation (the numbers change in place). When prefers-reduced-motion is set, all reveal animations are disabled and the slider results update instantly with no trans
- Data integrity: One IndexedDB transaction per user action (save, remove). A save that fails (quota exceeded, unavailable) shows a visible error message and does not clear the form; the user's inputs remain on screen. No record is lost silently. The empty state (no estimates saved) shows a one-line
- Export format: The M5 export produces plain text (no HTML, no markdown) that can be pasted into an email or messaging app. Each estimate in the export shows: destination (route distance), tanker capacity, fuel price, disruption factor, cost per litre, cost per trip, delivery window, and save date.
