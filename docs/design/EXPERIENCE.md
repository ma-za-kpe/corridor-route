# Corridor Route experience

## Information architecture

### `/`

The daily corridor slip: record today's route km, tanker litres and price-per-litre, stamp it, and see it kept on this device. Primary task: Fill the Fuel-log strip and stamp today's corridor entry.

| Section | Purpose | Layout | Components | Moment |
| --- | --- | --- | --- | --- |
| Today's corridor slip | The primary task surface: one horizontal Fuel-log strip (route km \| tanker litres \| price per litre) that reads like a depot slip, with the stamp action. | split | Fuel-log strip, Tanker capacity plate, Price-per-litre board, Corridor route slip, Success stamp | load |
| Litre / km tick meter | A live readout of litres per km and estimated cost for the entered figures, so the slip is checked before it is stamped. | band | Litre/km tick meter | change |
| Kept slips | The Route ledger of entries already stamped on this device, newest first, each a Depot entry row. | table | Route ledger, Depot entry row, Success stamp | none |
| Corridor assumptions &amp; device | A plain band stating the corridor assumptions (Djibouti road-tanker context, ETB per litre) and the offline device status. | band | Offline device notice | none |

### `/ledger`

The full Route ledger: every corridor slip kept on this device, filterable and exportable as a plain list. Primary task: Review, filter, and export the kept corridor slips.

| Section | Purpose | Layout | Components | Moment |
| --- | --- | --- | --- | --- |
| Ledger header | States the count of kept slips and the device-local, no-sync nature of the data. | band | Offline device notice | none |
| All kept slips | The complete Route ledger of Depot entry rows, newest first, with a filter by corridor or date. | table | Route ledger, Depot entry row, Success stamp | none |
| Empty ledger | Shown when no slips are kept yet, pointing back to today's slip. | band | Route ledger | empty |

### `/device`

The offline device note: where the data lives, that there is no account or sync, and how to clear it. Primary task: Understand that the data is on this device and manage it.

| Section | Purpose | Layout | Components | Moment |
| --- | --- | --- | --- | --- |
| Device status | Confirms the product is offline-first and the data is stored on this device only. | band | Offline device notice | none |
| What is kept | A short ledger of the slip fields stored locally and their limits. | table | Route ledger, Depot entry row | none |
| Clear this device | A deliberate, confirmable action to remove all kept slips from this device. | band | Error stamp | error |

## Flows

- **Record today's corridor slip**: Open the home page; the Fuel-log strip arrives with today's date and an unmarked slip. → Enter the corridor route distance in km on the Corridor route slip field. → Enter the tanker capacity in litres on the Tanker capacity plate field. → Enter the day's price per litre on the Price-per-litre board field. → Watch the Litre/km tick meter update as the figures change. → Press Stamp slip; the slip is checked and stamped, and a Success stamp appears. → The new Depot entry row lands at the top of the Kept slips ledger.
- **Fix a slip that will not stamp**: Press Stamp slip with a missing or invalid figure. → An Error stamp appears naming the field that will not stamp. → Correct the flagged field (route km, tanker litres, or price per litre). → Press Stamp slip again; the slip is checked and stamped.
- **Review kept slips**: Open the ledger page. → Scan the Route ledger of Depot entry rows, newest first. → Filter by corridor or date to narrow the list. → Export the kept slips as a plain list for the depot record.
- **Confirm the data is on this device**: Open the device page. → Read the Offline device notice confirming offline-first, no account, no sync. → Review the fields kept locally and their limits. → Optionally clear this device after confirming.

## Screen states

| Screen | empty | loading | error | success |
| --- | --- | --- | --- | --- |
| Today's corridor slip | Unmarked slip. Today's date is set; the route km, tanker litres and price-per-litre fields are blank, and the stamp is waiting. | Slip being checked. The strip holds while the figures are read and the tick meter settles before the stamp can land. | Slip will not stamp. An Error stamp names the field that is missing or out of range (route km, tanker litres, or price per litre). | Slip stamped and kept on this device. A Success stamp lands on the strip and the entry appears at the top of the Kept slips ledger. |
| Route ledger | No slips kept yet. The ledger is blank and points back to today's corridor slip. | Ledger being read. The rows hold while the kept slips are pulled from this device. | Ledger will not read. An Error stamp appears if the kept slips cannot be read from this device. | Ledger read. The kept slips are listed as Depot entry rows, newest first. |
| Offline device notice | Device ready. No slips kept yet; the data will live on this device only. | Checking this device. The notice holds while the local store is confirmed. | Device will not confirm. An Error stamp appears if the local store cannot be reached. | On this device. The notice confirms offline-first, no account, no sync. |

## Interactions

| Trigger | Response | Duration |
| --- | --- | --- |
| Page load on the home page | The slip-arrival moment: the headline lands, then the Fuel-log strip's three fields drop in left to right, then the Kept slips ledger rows settle. | `land` |
| A figure is entered or changed on the Fuel-log strip | The change moment: the Litre/km tick meter updates and the affected field ticks. | `tick` |
| Stamp slip is pressed with valid figures | The save moment: the slip is checked, the Success stamp lands, and the new Depot entry row slides to the top of the ledger. | `slide` |
| Stamp slip is pressed with a missing or invalid figure | The error moment: an Error stamp lands on the flagged field and the strip holds. | `hold` |
| A field is focused by keyboard or pointer | The focus moment: a visible focus ring appears on the field. | `press` |
| The Kept slips ledger is empty | The empty moment: the ledger shows its unmarked, no-slips-kept state. | `none` |
