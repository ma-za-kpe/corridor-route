# Corridor Route components (U4, U5)

## Fuel-log strip

The brand's single bold moment: one horizontal depot slip where the operator enters route distance (km), tanker capacity (litres), and price per litre, then the

Anatomy: Left slip header (corridor name + day stamp), Three ruled input cells: route km | tanker litres | price /L, Computed readout cell (litres per km, cost) in mono, Right stamp zone (success/error stamp lands here), Baseline rule and perforated edge.

| State | Treatment |
| --- | --- |
| default | Plain paper surface, three empty ruled cells, muted placeholder labels, no stamp. |
| hover | Hovered cell lifts its baseline rule 1px and warms to surface; no motion. |
| focus | Focused cell shows a 2px focus #2e5e9e outline and a caret; focus moment, land 260ms. |
| active | Pressed cell presses 1px down, press 180ms; typed value ticks in, tick 120ms. |
| disabled | Cells grey to muted, inputs inert, readout shows a dash. |
| loading | Readout cell shows a thin mono shimmer while the computation settles, hold 480ms. |
| empty | Empty state: cells blank, readout reads 'no figures entered', empty moment. |
| error | Invalid cell gets a danger underline and an error stamp in the stamp zone, error moment, land 260ms. |
| success | Valid slip gets a success stamp in the stamp zone, save moment, land 260ms. |
| selected | The active slip is marked with an accent left tab so it reads as the current day's entry. |
| offline | A small offline-device glyph sits in the slip header; the slip still saves to the device. |

## Tanker capacity plate

A stamped plate that shows the selected tanker's rated capacity in litres, so the operator can confirm the vessel before logging a run.

Anatomy: Plate face with riveted corners, Tanker ID in mono, Rated capacity figure (litres) in Fraunces, Unit tag (L), Swap-tanker control.

| State | Treatment |
| --- | --- |
| default | Plate shows the current tanker ID and capacity; swap control idle. |
| hover | Swap control warms to surface and its label darkens to ink. |
| focus | Swap control shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed swap control presses 1px, press 180ms; capacity figure ticks to the new value, tick 120ms. |
| disabled | Plate greys to muted, swap control inert, figure shows a dash. |
| loading | Figure shows a mono shimmer while the tanker record loads, hold 480ms. |
| empty | No tanker chosen: plate reads 'no tanker on the slip', empty moment. |
| error | Unknown tanker: plate edge takes a danger rule and a short note, error moment, land 260ms. |
| success | Confirmed tanker: a small success tick appears beside the ID, save moment, land 260ms. |
| selected | The chosen tanker's plate carries an accent tab; others stay plain. |
| offline | Offline-device glyph in the plate corner; the tanker list is read from the device. |

## Price-per-litre board

The day's price-per-litre board: a plain ledger of fuel prices by depot and date, so the operator can pick the current rate for the strip.

Anatomy: Board header (date + market label), Ledger rows: depot | fuel | price /L, Row select control, Chosen-rate readout in mono, Footer note (source + as-of time).

| State | Treatment |
| --- | --- |
| default | Rows listed in plain ledger form, no row selected, readout blank. |
| hover | Hovered row warms to surface and its price darkens to ink. |
| focus | Focused row shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed row presses 1px, press 180ms; chosen-rate readout ticks in, tick 120ms. |
| disabled | Board greys to muted, rows inert, readout shows a dash. |
| loading | Rows show a thin mono shimmer while the day's board loads, hold 480ms. |
| empty | No prices for the day: board reads 'no rates posted today', empty moment. |
| error | Board failed to load: a danger rule and a plain note, error moment, land 260ms. |
| success | A rate is chosen: the readout takes a success tick, save moment, land 260ms. |
| selected | The chosen row carries an accent left tab and its price in accent. |
| offline | Offline-device glyph in the header; the board shows the last rates stored on the device. |

## Corridor route slip

A route slip that names the corridor (e.g. Djibouti to Addis) and its km figure, so the strip's distance cell can be filled from a known route.

Anatomy: Slip header (corridor name), Origin and destination fields, Corridor km figure in Fraunces, km-tick scale under the figure, Use-this-route control.

| State | Treatment |
| --- | --- |
| default | Slip shows corridor name, endpoints, and km figure; control idle. |
| hover | Use-this-route control warms to surface, label darkens to ink. |
| focus | Control shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed control presses 1px, press 180ms; the km figure slides into the strip, slide 320ms. |
| disabled | Slip greys to muted, control inert, km figure shows a dash. |
| loading | km figure shows a mono shimmer while the route record loads, hold 480ms. |
| empty | No route set: slip reads 'no corridor on file', empty moment. |
| error | Route not found: slip edge takes a danger rule and a short note, error moment, land 260ms. |
| success | Route applied to the strip: a success tick appears, save moment, land 260ms. |
| selected | The active corridor slip carries an accent tab. |
| offline | Offline-device glyph in the header; routes are read from the device. |

## Depot entry row

A single ledger row in the route ledger that records one depot stop: name, time in, litres loaded, and status, so the day's runs read as a running log.

Anatomy: Row index (mono), Depot name field, Time-in field, Litres-loaded field, Status stamp slot.

| State | Treatment |
| --- | --- |
| default | Row shows its fields in plain ledger form, status slot blank. |
| hover | Row warms to surface; editable fields show a faint baseline. |
| focus | Focused field shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed field presses 1px, press 180ms; typed value ticks in, tick 120ms. |
| disabled | Row greys to muted, fields inert. |
| loading | Fields show a thin mono shimmer while the row loads, hold 480ms. |
| empty | Blank row: fields show muted placeholders, status slot reads 'not logged', empty moment. |
| error | Invalid field gets a danger underline and the status slot takes an error stamp, error moment, land 260ms. |
| success | Complete row: status slot takes a success stamp, save moment, land 260ms. |
| selected | The active row carries an accent left tab. |
| offline | Row still edits and saves to the device; a small offline-device glyph marks it. |

## Litre/km tick meter

A small km-tick scale that shows the run's litres-per-km against a corridor norm, giving the operator an at-a-glance efficiency read.

Anatomy: Tick scale (km-tick icon marks), Current value marker, Norm band, Value readout in mono, Unit tag (L/km).

| State | Treatment |
| --- | --- |
| default | Scale shows the norm band; marker sits at the current value. |
| hover | Hovering the scale darkens the ticks to ink and reveals the value readout. |
| focus | Focused meter shows a 2px focus outline; focus moment, land 260ms. |
| active | As the value changes, the marker slides along the scale, slide 320ms. |
| disabled | Scale greys to muted, marker hidden, readout shows a dash. |
| loading | Readout shows a mono shimmer while the figure settles, hold 480ms. |
| empty | No figures: scale shows only the norm band, readout reads 'no run yet', empty moment. |
| error | Out-of-range value: marker takes a danger tint and a short note, error moment, land 260ms. |
| success | Within norm: marker takes a success tint, save moment, land 260ms. |
| selected | The active meter carries an accent tab. |
| offline | Offline-device glyph in the corner; the norm is read from the device. |

## Offline device notice

A plain band that tells the operator the tool is working from the device, so offline is a normal, honest state rather than an alarm.

Anatomy: offline-device glyph, Plain-spoken status line, Last-saved time in mono, Stored-records count.

| State | Treatment |
| --- | --- |
| default | Band shows the glyph and 'working from this device' with the last-saved time. |
| hover | Band warms to surface; the last-saved time darkens to ink. |
| focus | If it carries a control, it shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed control presses 1px, press 180ms; the last-saved time ticks to now, tick 120ms. |
| disabled | Band greys to muted, text inert. |
| loading | Last-saved time shows a mono shimmer while the device store is read, hold 480ms. |
| empty | Nothing saved yet: band reads 'no records on this device', empty moment. |
| error | Device store unavailable: band takes a danger rule and a plain note, error moment, land 260ms. |
| success | A save just landed: the last-saved time takes a success tick, save moment, land 260ms. |
| selected | Not applicable; the band carries no selection. |
| offline | This is the band's native state: the glyph is lit and the line reads 'offline, data on this device'. |

## Error stamp

A stamped mark that lands on a slip or row to flag a problem in the depot's plain language, so failures read like a stamp, not a popup.

Anatomy: Stamp ring in danger, Short reason word, Field pointer (which cell failed), Fix-it hint line.

| State | Treatment |
| --- | --- |
| default | Stamp is hidden until a failure occurs. |
| hover | Hovering the stamp darkens the reason word to ink and reveals the hint line. |
| focus | Focused stamp shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed stamp presses 1px, press 180ms; it lands with a slight settle, land 260ms. |
| disabled | Stamp greys to muted, reason word inert. |
| loading | Reason word shows a mono shimmer while the check runs, hold 480ms. |
| empty | No failure: the stamp slot is blank, empty moment. |
| error | This is the stamp's native state: the danger ring and reason word are shown, error moment, land 260ms. |
| success | Once fixed, the error stamp is replaced by the success stamp, save moment, land 260ms. |
| selected | Not applicable; the stamp carries no selection. |
| offline | A small offline-device glyph sits in the stamp corner if the failure is device-related. |

## Success stamp

A stamped mark that lands on a slip or row to confirm a run is logged and saved to the device, in the depot's plain language.

Anatomy: Stamp ring in success, Confirmation word, Saved-to-device note, Record reference in mono.

| State | Treatment |
| --- | --- |
| default | Stamp is hidden until a save succeeds. |
| hover | Hovering the stamp darkens the confirmation word to ink and reveals the record reference. |
| focus | Focused stamp shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed stamp presses 1px, press 180ms; it lands with a slight settle, land 260ms. |
| disabled | Stamp greys to muted, confirmation word inert. |
| loading | Confirmation word shows a mono shimmer while the save settles, hold 480ms. |
| empty | Nothing saved: the stamp slot is blank, empty moment. |
| error | If the save fails, the success stamp is replaced by the error stamp, error moment, land 260ms. |
| success | This is the stamp's native state: the success ring and confirmation word are shown, save moment, land 260ms. |
| selected | Not applicable; the stamp carries no selection. |
| offline | A small offline-device glyph sits in the stamp corner, noting the save is on-device. |

## Route ledger

The running ledger of the day's depot entry rows, so the whole run reads as one continuous log the operator can scroll and edit.

Anatomy: Ledger header (day + corridor), Column rules (index | depot | time | litres | status), Depot entry rows, Add-row control, Footer totals in mono.

| State | Treatment |
| --- | --- |
| default | Ledger shows its rows under plain column rules, footer totals in mono. |
| hover | Hovered row warms to surface; the add-row control warms to surface. |
| focus | Focused row or control shows a 2px focus outline; focus moment, land 260ms. |
| active | Pressed add-row control presses 1px, press 180ms; a new row slides in, slide 320ms. |
| disabled | Ledger greys to muted, rows and control inert, footer shows a dash. |
| loading | Rows show a thin mono shimmer while the day's ledger loads, hold 480ms. |
| empty | No rows yet: ledger reads 'no depot stops logged today', empty moment. |
| error | Ledger failed to load: a danger rule and a plain note, error moment, land 260ms. |
| success | A row is saved: the footer totals tick and a success tick appears, save moment, land 260ms. |
| selected | The active row carries an accent left tab. |
| offline | Offline-device glyph in the header; the ledger reads and saves to the device. |

## Status

Every status is a word, an icon and a colour, never colour alone.

| Status | Word | Icon | Colour role |
| --- | --- | --- | --- |
| Entered | Entered | `route-slip` | `--color-muted` |
| Checked | Checked | `litre` | `--color-success` |
| Blocked | Blocked | `route` | `--color-danger` |
| Offline | Offline | `offline-device` | `--color-warning` |
| Saved | Saved | `km-tick` | `--color-accent` |
