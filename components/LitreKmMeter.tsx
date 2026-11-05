"use client";

import { useState } from "react";
import { estimateTrip, litresPerKm, formatETB, formatDays } from "@/lib/trip";

export default function LitreKmMeter() {
  const [distance, setDistance] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");

  const numbers = [distance, capacity, price].map((value) => Number(value));
  const valid =
    distance !== "" &&
    capacity !== "" &&
    price !== "" &&
    numbers.every((value) => Number.isFinite(value) && value > 0);

  const [km, litres, etb] = numbers;
  const lpk = valid ? litresPerKm(km, litres) : null;
  const result = valid ? estimateTrip({ distanceKm: km, capacityL: litres, pricePerL: etb, disruption: 1.0 }) : null;

  return (
    <div className="litre-km-meter" role="group" aria-label="Litre per kilometre meter">
      <div className="meter-row">
        <label className="meter-field">
          <span className="meter-label">Route km</span>
          <input
            type="text"
            inputMode="decimal"
            value={distance}
            onChange={(event) => setDistance(event.target.value)}
            aria-label="Route distance in kilometres"
          />
        </label>
        <label className="meter-field">
          <span className="meter-label">Tanker litres</span>
          <input
            type="text"
            inputMode="decimal"
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
            aria-label="Tanker capacity in litres"
          />
        </label>
        <label className="meter-field">
          <span className="meter-label">ETB per litre</span>
          <input
            type="text"
            inputMode="decimal"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            aria-label="Fuel price in ETB per litre"
          />
        </label>
      </div>
      <dl className="meter-readout">
        <div className="meter-cell">
          <dt>Litres per km</dt>
          <dd>{lpk === null ? "—" : lpk.toFixed(2)}</dd>
        </div>
        <div className="meter-cell">
          <dt>Cost per litre</dt>
          <dd>{result ? formatETB(result.costPerL) : "—"}</dd>
        </div>
        <div className="meter-cell">
          <dt>Cost per trip</dt>
          <dd>{result ? formatETB(result.costPerTrip) : "—"}</dd>
        </div>
        <div className="meter-cell">
          <dt>Window</dt>
          <dd>{result ? formatDays(result.windowDays) : "—"}</dd>
        </div>
      </dl>
      {!valid && (distance !== "" || capacity !== "" || price !== "") && (
        <p className="meter-state">That value is not a number. Check the field and try again.</p>
      )}
    </div>
  );
}
