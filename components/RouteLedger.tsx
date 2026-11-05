"use client";

import { useCollection } from "@/components/kit/useCollection";
import { formatETB, formatDays } from "@/lib/trip";
import type { Slip } from "./FuelLogStrip";

export default function RouteLedger() {
  const { items, status, remove } = useCollection<Slip>("slips");

  if (status === "loading") {
    return <p className="ledger-state">Reading your entries…</p>;
  }
  if (status === "error") {
    return <p className="ledger-state">That value is not a number. Check the field and try again.</p>;
  }
  if (items.length === 0) {
    return (
      <p className="ledger-state">
        No run entered yet. Add the route distance, tanker capacity, and price per litre to begin.
      </p>
    );
  }

  return (
    <div className="route-ledger">
      <table className="ledger-table">
        <thead>
          <tr>
            <th scope="col">Destination</th>
            <th scope="col">Route km</th>
            <th scope="col">Tanker L</th>
            <th scope="col">ETB/L</th>
            <th scope="col">Cost per litre</th>
            <th scope="col">Cost per trip</th>
            <th scope="col">Window</th>
            <th scope="col">Saved</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((saved) => {
            const slip = saved.value;
            return (
              <tr key={saved.id}>
                <td>{slip.destination}</td>
                <td>{slip.distanceKm}</td>
                <td>{slip.capacityLitres}</td>
                <td>{slip.pricePerLitre}</td>
                <td>{formatETB(slip.costPerLitre)}</td>
                <td>{formatETB(slip.costPerTrip)}</td>
                <td>{formatDays(slip.deliveryWindowDays)}</td>
                <td>{new Date(slip.savedAt).toLocaleDateString()}</td>
                <td>
                  <button
                    type="button"
                    className="ledger-remove"
                    onClick={() => void remove(saved.id)}
                    aria-label={`Remove slip for ${slip.destination}`}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
