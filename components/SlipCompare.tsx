"use client";

import { useState } from "react";
import { useCollection } from "@/components/kit/useCollection";
import { formatETB, formatDays } from "@/lib/trip";
import type { Slip } from "./FuelLogStrip";

export default function SlipCompare() {
  const { items, status } = useCollection<Slip>("slips");
  const [leftId, setLeftId] = useState("");
  const [rightId, setRightId] = useState("");
  const [compared, setCompared] = useState(false);

  const left = items.find((item) => item.id === leftId)?.value;
  const right = items.find((item) => item.id === rightId)?.value;
  const canCompare = left && right && left.id !== right.id;

  if (status === "loading") {
    return <p className="compare-state">Reading your entries…</p>;
  }
  if (status === "error") {
    return <p className="compare-state">That value is not a number. Check the field and try again.</p>;
  }
  if (items.length < 2) {
    return (
      <p className="compare-state">
        No run entered yet. Add the route distance, tanker capacity, and price per litre to begin. Save at least two slips to compare.
      </p>
    );
  }

  const diffPerLitre = left && right ? left.costPerLitre - right.costPerLitre : 0;
  const diffWindow = left && right ? left.deliveryWindowDays - right.deliveryWindowDays : 0;

  return (
    <div className="slip-compare">
      <div className="compare-selects">
        <label className="compare-field">
          <span className="compare-label">Left slip</span>
          <select value={leftId} onChange={(event) => setLeftId(event.target.value)} aria-label="Left slip">
            <option value="">Choose a slip…</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.value.destination} · {formatETB(item.value.costPerLitre)}/L
              </option>
            ))}
          </select>
        </label>
        <label className="compare-field">
          <span className="compare-label">Right slip</span>
          <select value={rightId} onChange={(event) => setRightId(event.target.value)} aria-label="Right slip">
            <option value="">Choose a slip…</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.value.destination} · {formatETB(item.value.costPerLitre)}/L
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="compare-btn"
          onClick={() => setCompared(true)}
          disabled={!canCompare}
        >
          Compare
        </button>
      </div>
      {compared && canCompare && left && right && (
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">Figure</th>
              <th scope="col">Left slip</th>
              <th scope="col">Right slip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Route km</td>
              <td>{left.distanceKm}</td>
              <td>{right.distanceKm}</td>
            </tr>
            <tr>
              <td>Tanker litres</td>
              <td>{left.capacityLitres}</td>
              <td>{right.capacityLitres}</td>
            </tr>
            <tr>
              <td>ETB per litre</td>
              <td>{left.pricePerLitre}</td>
              <td>{right.pricePerLitre}</td>
            </tr>
            <tr>
              <td>Cost per litre</td>
              <td>{formatETB(left.costPerLitre)}</td>
              <td>{formatETB(right.costPerLitre)}</td>
            </tr>
            <tr>
              <td>Cost per trip</td>
              <td>{formatETB(left.costPerTrip)}</td>
              <td>{formatETB(right.costPerTrip)}</td>
            </tr>
            <tr>
              <td>Delivery window</td>
              <td>{formatDays(left.deliveryWindowDays)}</td>
              <td>{formatDays(right.deliveryWindowDays)}</td>
            </tr>
            <tr className="compare-diff">
              <td>Δ cost per litre</td>
              <td colSpan={2}>{formatETB(diffPerLitre)}</td>
            </tr>
            <tr className="compare-diff">
              <td>Δ delivery window</td>
              <td colSpan={2}>{formatDays(diffWindow)}</td>
            </tr>
          </tbody>
        </table>
      )}
      {compared && !canCompare && (
        <p className="compare-state">Choose two different slips to compare.</p>
      )}
    </div>
  );
}
