"use client";

import { useState } from "react";
import { useCollection } from "@/components/kit/useCollection";
import { estimateTrip, formatETB } from "@/lib/trip";
import type { Slip } from "./FuelLogStrip";

export default function SiteCompare() {
  const { items, status } = useCollection<Slip>("slips");
  const last = items[0]?.value;

  const [siteADistance, setSiteADistance] = useState("");
  const [siteBDistance, setSiteBDistance] = useState("");
  const [capacity, setCapacity] = useState(last ? String(last.capacityLitres) : "");
  const [price, setPrice] = useState(last ? String(last.pricePerLitre) : "");

  const numA = Number(siteADistance);
  const numB = Number(siteBDistance);
  const numCap = Number(capacity);
  const numPrice = Number(price);

  const valid =
    siteADistance !== "" &&
    siteBDistance !== "" &&
    capacity !== "" &&
    price !== "" &&
    [numA, numB, numCap, numPrice].every((value) => Number.isFinite(value) && value > 0);

  const siteA = valid
    ? estimateTrip({ distanceKm: numA, capacityL: numCap, pricePerL: numPrice, disruption: 1.0 })
    : null;
  const siteB = valid
    ? estimateTrip({ distanceKm: numB, capacityL: numCap, pricePerL: numPrice, disruption: 1.0 })
    : null;

  const diff = siteA && siteB ? siteA.costPerL - siteB.costPerL : 0;
  const recommendation =
    siteA && siteB
      ? siteA.costPerL < siteB.costPerL
        ? "Site A has the lower logistics cost per litre."
        : siteB.costPerL < siteA.costPerL
          ? "Site B has the lower logistics cost per litre."
          : "Both sites have the same logistics cost per litre."
      : null;

  return (
    <div className="site-compare">
      <div className="site-form">
        <label className="site-field">
          <span className="site-label">Site A distance (km from corridor)</span>
          <input
            type="text"
            inputMode="decimal"
            value={siteADistance}
            onChange={(event) => setSiteADistance(event.target.value)}
            aria-label="Site A distance in kilometres from corridor"
          />
        </label>
        <label className="site-field">
          <span className="site-label">Site B distance (km from corridor)</span>
          <input
            type="text"
            inputMode="decimal"
            value={siteBDistance}
            onChange={(event) => setSiteBDistance(event.target.value)}
            aria-label="Site B distance in kilometres from corridor"
          />
        </label>
        <label className="site-field">
          <span className="site-label">Tanker capacity (litres)</span>
          <input
            type="text"
            inputMode="decimal"
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
            aria-label="Tanker capacity in litres"
          />
        </label>
        <label className="site-field">
          <span className="site-label">Fuel price (ETB per litre)</span>
          <input
            type="text"
            inputMode="decimal"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            aria-label="Fuel price in ETB per litre"
          />
        </label>
      </div>
      {status === "loading" && <p className="site-state">Reading your entries…</p>}
      {status === "error" && <p className="site-state">That value is not a number. Check the field and try again.</p>}
      {!valid && (siteADistance !== "" || siteBDistance !== "" || capacity !== "" || price !== "") && (
        <p className="site-state">That value is not a number. Check the field and try again.</p>
      )}
      {valid && siteA && siteB && (
        <>
          <dl className="site-readout">
            <div className="site-cell">
              <dt>Site A cost per litre</dt>
              <dd>{formatETB(siteA.costPerL)}</dd>
            </div>
            <div className="site-cell">
              <dt>Site B cost per litre</dt>
              <dd>{formatETB(siteB.costPerL)}</dd>
            </div>
            <div className="site-cell site-diff">
              <dt>Δ cost per litre</dt>
              <dd>{formatETB(diff)}</dd>
            </div>
          </dl>
          <p className="site-recommendation">{recommendation}</p>
        </>
      )}
      <p className="site-explainer">
        This is a logistics-cost input for a site decision, not a property listing or real-estate tool. Distances are user-entered; no mapping or route optimisation.
      </p>
    </div>
  );
}
