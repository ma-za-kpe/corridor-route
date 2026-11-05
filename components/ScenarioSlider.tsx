"use client";

import { useState } from "react";
import { useCollection } from "@/components/kit/useCollection";
import { estimateTrip, formatETB, formatDays } from "@/lib/trip";
import type { Slip } from "./FuelLogStrip";

const SCENARIOS = [
  { factor: 1.0, label: "Normal" },
  { factor: 1.5, label: "Border delay" },
  { factor: 2.0, label: "Road closure" },
];

export default function ScenarioSlider() {
  const { items, status } = useCollection<Slip>("slips");
  const [factor, setFactor] = useState(1.0);

  const last = items[0]?.value;

  if (status === "loading") {
    return <p className="scenario-state">Reading your entries…</p>;
  }
  if (status === "error") {
    return <p className="scenario-state">That value is not a number. Check the field and try again.</p>;
  }
  if (!last) {
    return (
      <p className="scenario-state">
        No run entered yet. Add the route distance, tanker capacity, and price per litre to begin. Save an estimate first to use the scenario slider.
      </p>
    );
  }

  const base = estimateTrip({
    distanceKm: last.distanceKm,
    capacityL: last.capacityLitres,
    pricePerL: last.pricePerLitre,
    disruption: 1.0,
  });
  const current = estimateTrip({
    distanceKm: last.distanceKm,
    capacityL: last.capacityLitres,
    pricePerL: last.pricePerLitre,
    disruption: factor,
  });

  const barMax = Math.max(base.costPerL, current.costPerL);
  const basePct = barMax > 0 ? (base.costPerL / barMax) * 100 : 0;
  const currentPct = barMax > 0 ? (current.costPerL / barMax) * 100 : 0;

  return (
    <div className="scenario-slider">
      <div className="slider-controls">
        <label className="slider-label">
          Disruption factor: {factor.toFixed(1)}
          <input
            type="range"
            min={1.0}
            max={2.0}
            step={0.1}
            value={factor}
            onChange={(event) => setFactor(Number(event.target.value))}
            aria-label="Disruption factor"
            aria-valuetext={factor.toFixed(1)}
          />
        </label>
        <div className="slider-markers" aria-hidden="true">
          {SCENARIOS.map((scenario) => (
            <span
              key={scenario.factor}
              className={Math.abs(factor - scenario.factor) < 0.05 ? "marker active" : "marker"}
            >
              {scenario.label} ({scenario.factor.toFixed(1)})
            </span>
          ))}
        </div>
      </div>
      <dl className="scenario-readout">
        <div className="scenario-cell">
          <dt>Delivered cost per litre</dt>
          <dd>{formatETB(current.costPerL)}</dd>
        </div>
        <div className="scenario-cell">
          <dt>Delivery window</dt>
          <dd>{formatDays(current.windowDays)}</dd>
        </div>
      </dl>
      <div className="scenario-bar" aria-label={`Cost at factor 1.0: ${formatETB(base.costPerL)}; at ${factor.toFixed(1)}: ${formatETB(current.costPerL)}`}>
        <div className="bar-track">
          <div className="bar-base" style={{ width: `${basePct}%` }} />
          <div className="bar-current" style={{ width: `${currentPct}%` }} />
        </div>
        <div className="bar-legend">
          <span className="legend-base">Normal (1.0): {formatETB(base.costPerL)}</span>
          <span className="legend-current">Current ({factor.toFixed(1)}): {formatETB(current.costPerL)}</span>
        </div>
      </div>
      <p className="scenario-explainer">
        If the cost at your expected disruption level exceeds your buffer threshold, consider stockpiling or renegotiating. The disruption factor is an abstraction; it may need named scenarios if planners cannot map the multiplier to a real event.
      </p>
    </div>
  );
}
