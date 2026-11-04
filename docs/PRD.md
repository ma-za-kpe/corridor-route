# Corridor Route: product requirements

A fuel logistics planner (P1) can price a tanker delivery from Djibouti to any Ethiopian destination in under 3 minutes, with a defensible cost-per-litre figure and a disruption-adjusted delivery window, instead of guessing from a spreadsheet and phone calls. An operations manager (P2) can see how a

## Problem and evidence

Without a functional petroleum pipeline, Ethiopia depends on road tankers to move fuel from Djibouti, creating high logistics costs, frequent supply disruptions, inflated fuel prices, and a major bottleneck to industrial growth. The need for a $660 million pipeline project signals how severe and long-standing this infrastructure gap has been for the entire region.

- Without a functional petroleum pipeline, Ethiopia depends on road tankers to move fuel from Djibouti, creating high logistics costs, frequent supply disruptions, inflated fuel prices, and a major bottleneck to industrial growth. (StartupTribunal, E1)
- The need for a $660 million pipeline project signals how severe and long-standing this infrastructure gap has been for the entire region. (StartupTribunal, E2)

Who is hurt: Logistics and real estate teams and customers in Ethiopia (F2) who must price, plan or site fuel-dependent operations against a corridor that is expensive, slow and prone to disruption.

## Personas and jobs to be done

### P1 Fuel logistics planner at a mid-size Ethiopian fuel distributor

Runs tanker dispatches from Djibouti port to destinations across Ethiopia; must quote customers before committing trucks and capital.

- Job to be done: When a customer asks for a fuel delivery quote, I want the true cost of moving a tanker load from Djibouti to the destination, so I can price it without losing money on a disrupted trip.
- Today's workaround: Phone calls to drivers and brokers, plus a spreadsheet that cannot model per-litre cost, route disruption risk or how a fuel price change hits the customer's operating cost.

### P2 Operations manager at an Ethiopian industrial customer (factory or cold chain)

Runs fuel-dependent operations and must decide whether to buffer stock or renegotiate supply when the corridor is disrupted.

- Job to be done: When planning a fuel-dependent operation, I want to see how a corridor disruption or a fuel price change changes my delivered cost, so I can decide whether to buffer stock or renegotiate supply.
- Today's workaround: Reactive: wait for the truck to be late or the price to rise, then scramble with the distributor over the phone.

### P3 Real estate developer evaluating a new site in Ethiopia

Choosing between two candidate sites and needs to factor corridor logistics risk into the site decision.

- Job to be done: When choosing between two candidate sites, I want to compare the fuel logistics cost of serving each, so I can factor corridor risk into the site decision.
- Today's workaround: A rough distance estimate and a gut feel about how far the site is from the corridor.

## Alternatives today

- Corridor trip-cost and capacity estimator (chosen): enter a route (Djibouti port to an Ethiopian destination), tanker capacity, fuel price and expected disruption; get cost per litre, cost per trip, and a disruption-risk-adjusted delivery window; save the estimate on the device. It wins for P1 (F2) 

## Value proposition

A fuel logistics planner (P1) can price a tanker delivery from Djibouti to any Ethiopian destination in under 3 minutes, with a defensible cost-per-litre figure and a disruption-adjusted delivery window, instead of guessing from a spreadsheet and phone calls. An operations manager (P2) can see how a

## Solution options and wedge

- O1: Corridor trip-cost and capacity estimator: enter route distance, tanker capacity, fuel price and disruption factor; get cost per litre, cost per trip and a disruption-adjusted delivery window; save on device. Chosen because it directly answers P1's quote question end to end, works offline with a lo
- O2: Fuel price and disruption tracker: track fuel prices and corridor disruption events over time to forecast future costs. Not chosen: needs a live data feed or manual data entry from many sources, which is a non-goal for this offline-first release. It also serves P2 better than P1, so it is not the
- O3: Depot and site location comparison tool: compare candidate depot or real-estate sites by their distance to the corridor and estimated fuel logistics cost. Not chosen: needs mapping data and many users to be useful; it is a natural second release once the estimator has proven the c

Wedge: O1, Corridor trip-cost and capacity estimator: enter route distance, tanker capacity, fuel price and disruption factor; get cost per litre, cost per trip and a disruption-adjusted delivery window; save on device. Chosen because it directly answers P1's quote question end to end, works offline with a lo Why: It directly answers P1's quote question end to end, works offline with a local database, and needs no network or third-party data. It is the smallest feature that beats the spreadsheet-and-phone-call workaround for the first persona.

## Core feature

M1 Corridor trip-cost estimate, for Fuel logistics planner at a mid-size Ethiopian fuel distributor: P1 enters route distance, tanker capacity, fuel price and disruption factor; sees cost per litre, cost per trip and a disruption-adjusted delivery window; saves the estimate on the device.

- Primary action: Enter route distance (km), tanker capacity (litres), fuel pr
- Offline, on the device (indexeddb): yes

## MVP scope

- M1 Corridor trip-cost estimate (P1): P1 enters route distance, tanker capacity, fuel price and disruption factor; sees cost per litre, cost per trip and a disruption-adjusted delivery window; saves the estimate on the device.
- M2 Saved estimate comparison (P1): P1 opens two saved estimates side by side, with the difference in cost per litre and delivery window highlighted.
- M3 Disruption scenario slider (P2): P2 adjusts the disruption factor from 1.0 to 2.0 and watches the delivered cost per litre and delivery window change, to decide whether to buffer stock.
- M4 Site logistics cost comparison (P3): P3 enters two candidate site distances from the corridor and sees the fuel logistics cost difference per litre for each, to factor into the site decision.
- M5 Estimate history and export (P1): P1 browses saved estimates on the device and exports a plain-text summary to share with a customer or colleague.

## Non-goals

- No live fuel price feed or disruption data feed; the user enters current values.
- No account, login, payment or multi-user sync; data stays on one device.
- No mapping or route optimization; the user enters the route distance in km.
- No real-estate transaction tooling; the site comparison is a logistics-cost input, not a property listing.

## Success metrics

- Quote preparation time: Under 3 minutes from opening the estimator to a saved estimate (measured by Timestamp from first interaction in the estimator to the save action, logged locally)
- Estimates saved per session: At least 2 estimates saved per session in the first 10 sessions (measured by Count of saved estimates per browser session, logged locally)
- Disruption scenario usage: At least 40% of sessions that save an estimate also adjust the disruption factor (measured by Count of sessions where the disruption slider moved from 1.0, divided by sessions that saved an estimate)

## Risks

- The planner does not trust a cost figure computed from inputs they enter, because the real corridor has hidden costs (border fees, security, driver wages) that the tool does not model. Test: Interview 3 fuel logistics planners in Addis Ababa; ask them to price a real quote with the tool and compare to their actual cost; measure the gap.
- The disruption factor is too abstract; planners do not know what 1.5 or 2.0 means in practice. Test: Prototype the slider with labelled scenarios (normal, border delay, road closure) and test with 5 planners whether they can pick the right one without explanation.
- The tool is useful only to P1 and does not pull P2 or P3 in, so it stays a niche quote tool. Test: After the first release, measure whether P2 or P3 personas open the tool and save an estimate; if fewer than 10% of sessions are from P2/P3, revisit the wedge.

## Assumptions

- A fuel logistics planner in Ethiopia can state the route distance from Djibouti to their destination in km without looking it up. Check: Ask 5 planners in the first interview round; if more than half need to look it up, add a preset distance list for common routes.
- The fuel price in ETB per litre is available to the planner at quote time, without a live feed. Check: Ask 5 planners where they get the current price; if they rely on a phone call to the port, note it as a friction point but keep the manual entry for this release.
- A disruption factor as a multiplier on days is a meaningful abstraction for planners. Check: Test the slider with 5 planners; if they cannot map it to a real scenario, replace it with named scenarios (normal, border delay, road closure) that map to fixed multipliers.
- P3 (real estate developer) will use the site comparison feature without a dedicated onboarding. Check: After release, measure whether any P3 sessions save a site comparison; if zero in the first 20 sessions, add a one-line example in the empty state.

Research claims are the source's and are attributed; every feature is the team's own concept.
