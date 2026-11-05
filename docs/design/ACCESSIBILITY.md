# Corridor Route accessibility (U6)

- Targets are at least 44px in both directions (`--target-min`).
- Focus: A 2px focus ring in the focus colour (#2e5e9e) with a 2px offset, always visible on every interactive field, stamp and row control; never removed or hidden.
- Live regions: A polite live region announces the stamp result (slip stamped and kept on this device, or slip will not stamp with the named field) and ledger changes; an assertive live region announces the Error stamp so it is not missed.
- Every Fuel-log strip field is a labelled input with a visible depot-slip label (route km, tanker litres, price per litre) and a mono value readout.
- The Litre/km tick meter is a text readout, not a decorative gauge, so its value is always available to assistive tech.
- Error stamps are tied to specific fields and announced with the field name, not a generic message.
- The Route ledger is a real table with a header row and one row per kept slip, so screen readers can navigate by row and column.
- The Offline device notice is plain text stating offline-first, no account, no sync; it is not a dismissible banner that hides required information.
- Under reduced motion, the slip-arrival load moment does not stagger and nothing is hidden; all content is present immediately.
- All motion stays at or under the locked durations (press 180ms, land 260ms, tick 120ms, slide 320ms, hold 480ms), well under 1600ms.
- The clear-this-device action requires a confirm step and is announced assertively before it removes any kept slips.
- axe (WCAG 2.1 AA) is clean on every page, at phone and desktop widths, in both themes; the frozen browser check enforces it.
- 30 of 46 measured pairs are fit for body text; the rest are listed in brand/BRAND.md with their limits.
