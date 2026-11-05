"use client";

import { useState } from "react";
import { useCollection } from "@/components/kit/useCollection";
import { estimateTrip, formatETB, formatDays } from "@/lib/trip";

export interface Slip {
  destination: string;
  distanceKm: number;
  capacityLitres: number;
  pricePerLitre: number;
  disruptionFactor: number;
  costPerLitre: number;
  costPerTrip: number;
  deliveryWindowDays: number;
  savedAt: string;
}

export default function FuelLogStrip() {
  const { items, status, add, remove } = useCollection<Slip>("slips");
  const [distance, setDistance] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const numbers = [distance, capacity, price].map((value) => Number(value));
  const valid =
    distance !== "" &&
    capacity !== "" &&
    price !== "" &&
    numbers.every((value) => Number.isFinite(value) && value > 0);

  const stamp = () => {
    if (!valid) {
      setMessage("That value is not a number. Check the field and try again.");
      return;
    }
    const [km, litres, etb] = numbers;
    const result = estimateTrip({ distanceKm: km, capacityL: litres, pricePerL: etb, disruption: 1.0 });
    const slip: Slip = {
      destination: "Djibouti to destination",
      distanceKm: km,
      capacityLitres: litres,
      pricePerLitre: etb,
      disruptionFactor: 1.0,
      costPerLitre: result.costPerL,
      costPerTrip: result.costPerTrip,
      deliveryWindowDays: result.windowDays,
      savedAt: new Date().toISOString(),
    };
    void add(slip);
    setMessage(`Stamped: ${formatETB(result.costPerL)} per litre, ${formatETB(result.costPerTrip)} per trip, ${formatDays(result.windowDays)}.`);
  };

  return (
    <div className="fuel-log-strip" role="group" aria-label="Fuel-log strip">
      <div className="strip-row">
        <label className="strip-field">
          <span className="strip-label">Route km</span>
          <input
            type="text"
            inputMode="decimal"
            value={distance}
            onChange={(event) => setDistance(event.target.value)}
            aria-label="Route distance in kilometres"
          />
        </label>
        <label className="strip-field">
          <span className="strip-label">Tanker litres</span>
          <input
            type="text"
            inputMode="decimal"
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
            aria-label="Tanker capacity in litres"
          />
        </label>
        <label className="strip-field">
          <span className="strip-label">ETB per litre</span>
          <input
            type="text"
            inputMode="decimal"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            aria-label="Fuel price in ETB per litre"
          />
        </label>
        <button type="button" className="stamp" onClick={stamp} disabled={status === "loading"}>
          Stamp slip
        </button>
      </div>
      {status === "loading" && <p className="strip-state">Reading your entries…</p>}
      {status === "error" && <p className="strip-state">That value is not a number. Check the field and try again.</p>}
      {status === "ready" && items.length === 0 && (
        <p className="strip-state">No run entered yet. Add the route distance, tanker capacity, and price per litre to begin.</p>
      )}
      {status === "ready" && items.length > 0 && (
        <p className="strip-state">{items.length} slip{items.length === 1 ? "" : "s"} kept on this device.</p>
      )}
      {message && <p className="strip-state">{message}</p>}
    </div>
  );
}
