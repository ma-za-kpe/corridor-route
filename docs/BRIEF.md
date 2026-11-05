# Corridor Route: Enter route distance (km), tanker capacity (litres), fuel pr (first release)

The approved brief, as its issue states it.

## Product

**A fuel logistics planner (P1) can price a tanker delivery from Djibouti to any Ethiopian destination in under 3 minutes, with a defensible cost-per-litre figure and a disruption-adjusted delivery window, instead of guessing from a spreadsheet and phone calls. An operations manager (P2) can see how a**

- For P1 Fuel logistics planner at a mid-size Ethiopian fuel distributor: When a customer asks for a fuel delivery quote, I want the true cost of moving a tanker load from Djibouti to the destination, so I can price it without losing money on a disrupted trip.
- For P2 Operations manager at an Ethiopian industrial customer (factory or cold chain): When planning a fuel-dependent operation, I want to see how a corridor disruption or a fuel price change changes my delivered cost, so I can decide whether to buffer stock or renegotiate supply.
- For P3 Real estate developer evaluating a new site in Ethiopia: When choosing between two candidate sites, I want to compare the fuel logistics cost of serving each, so I can factor corridor risk into the site decision.
- Wedge: Corridor trip-cost and capacity estimator: enter route distance, tanker capacity, fuel price and disruption factor; get cost per litre, cost per trip and a disruption-adjusted delivery window; save on device. Chosen because it directly answers P1's quote question end to end, works offline with a lo Why: It directly answers P1's quote question end to end, works offline with a local database, and needs no network or third-party data. It is the smallest feature that beats the spreadsheet-and-phone-call workaround for the first persona.
- Core feature: M1 Corridor trip-cost estimate, for Fuel logistics planner at a mid-size Ethiopian fuel distributor; works offline (indexeddb).
- The full PRD is `docs/PRD.md`.

## User stories

### R1 Estimate a corridor trip
- [ ] With 1500 km, 30,000 L, 55 ETB/L and factor 1.0, the estimate shows cost per litre, cost per trip and a delivery window; cost per trip equals cost per litre times 30,000.
- [ ] With any input missing or non-positive, no estimate is computed and nothing is saved.
- [ ] After saving, the estimate is still listed after the browser is closed and reopened with no network.
- [ ] From opening the estimator to a saved estimate takes under 3 minutes with no network needed.
Covers: M1 Corridor trip-cost estimate (for Fuel logistics planner at a mid-size Ethiopian fuel distributor)

### R2 Compare two saved estimates
- [ ] Selecting two saved estimates shows both side by side with their cost per litre and delivery window.
- [ ] The difference in cost per litre and in delivery window between the two is computed and visually highlighted.
- [ ] Selecting fewer than two estimates, or the same estimate twice, is prevented or handled with a prompt.
Covers: M2 Saved estimate comparison (for Fuel logistics planner at a mid-size Ethiopian fuel distributor)

### R3 Adjust the disruption scenario
- [ ] The disruption slider is bounded to 1.0 (minimum) and 2.0 (maximum); it cannot be set outside that range.
- [ ] Moving the slider from 1.0 to 1.5 to 2.0 updates delivered cost per litre and delivery window live, each value equal or higher than the previous.
- [ ] The current factor value is visible to the user while adjusting.
- [ ] The adjusted values persist to the saved estimate only after saving.
Covers: M3 Disruption scenario slider (for Operations manager at an Ethiopian industrial customer (factory or cold chain))

### R4 Compare two candidate sites
- [ ] With two site distances (e.g. 800 km and 1200 km) and the same tanker capacity and fuel price, the fuel logistics cost per litre is computed for each site.
- [ ] The difference in cost per litre between the two sites is shown; the longer distance yields the higher cost per litre.
- [ ] With equal distances, the difference in cost per litre is zero.
Covers: M4 Site logistics cost comparison (for Real estate developer evaluating a new site in Ethiopia)

### R5 Browse and export estimate history
- [ ] All estimates saved on this device are listed in history, each showing distance, capacity, price, factor, cost per litre, window and date.
- [ ] Exporting a selected estimate produces a plain-text summary containing its key figures, readable outside the app.
- [ ] On a fresh device with cleared storage, history is empty and fills only as estimates are saved.
- [ ] Browsing history and exporting work fully offline with no network.
Covers: M5 Estimate history and export (for Fuel logistics planner at a mid-size Ethiopian fuel distributor)

## Out of scope

- No live fuel price feed or disruption data feed; the user enters current values.
- No account, login, payment or multi-user sync; data stays on one device.
- No mapping or route optimization; the user enters the route distance in km.
- No real-estate transaction tooling; the site comparison is a logistics-cost input, not a property listing.

## Journeys

- **J1** (visitor) Understand what Corridor Route is, who it is for, and the research it is built on before using it. Observed: The prototype status, the audience, and the attributed research claim with its caveat are visible on a phone without sideways scrolling.
- **J2** (visitor) Price a Djibouti-to-destination tanker trip before quoting a customer. Observed: The saved estimate shows cost per litre, cost per trip and the delivery window, and is still listed after a reload.
- **J3** (visitor) Compare two saved trip estimates to see which is cheaper. Observed: The two estimates are shown side by side with the cost-per-litre and delivery-window difference highlighted.
- **J4** (visitor) See how a corridor disruption or fuel price change changes delivered cost, to decide whether to buffer stock. Observed: Moving the slider updates the delivered cost per litre and delivery window in real time.
- **J5** (visitor) Compare the fuel logistics cost of serving two candidate sites to factor corridor risk into a site decision. Observed: The cost-per-litre difference between the two sites is shown.
- **J6** (visitor) Browse saved estimates and export a summary to share with a customer or colleague. Observed: The saved estimates are listed and a plain-text summary is produced.
- **J7** (owner) Release a change to the product and publish it. Observed: The change is live on the running product after one release.

## Facts the site shows

- `F1`: Status: a working prototype; its features are the team's own concept, and its data stays on this device
- `F2`: Who it is for: Logistics and real estate teams and customers in Ethiopia
- `F3`: StartupTribunal research reports: Without a functional petroleum pipeline, Ethiopia depends on road tankers to move fuel from Djibouti, creating high logistics costs, frequent supply disruptions, inflated fuel prices, and a major bottleneck to industrial growth. The need for a $660 million pipeline project signals how severe and long-standing this infrastructure gap has been for the entire region.
- `F4`: Research status: rejected by the StartupTribunal AI Tribunal, published with caveats.
- `F5`: Research by StartupTribunal: https://startuptribunal.com/catalog/ethiopian-fuel-supply-blocked-without-petroleum-pipeline

## Assumptions

- A public repository and a public site on GitHub Pages; no server or database.
- The frozen tests under `tests/` are the acceptance contract; changing them needs the owner's approval.
- Facts appear exactly as the brief gives them.
