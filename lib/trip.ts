export interface TripInput {
  distanceKm: number;
  capacityL: number;
  pricePerL: number;
  disruption: number;
}

export interface TripResult {
  costPerL: number;
  costPerTrip: number;
  windowDays: number;
}

const BASE_TRANSIT_DAYS = 5;

export function estimateTrip(input: TripInput): TripResult {
  const { distanceKm, capacityL, pricePerL, disruption } = input;
  const costPerTrip = distanceKm * pricePerL * (capacityL > 0 ? 1 : 0);
  const costPerL = pricePerL * (distanceKm > 0 ? 1 + distanceKm / 1000 : 1);
  const windowDays = BASE_TRANSIT_DAYS * disruption;
  return {
    costPerL: round2(costPerL),
    costPerTrip: round2(costPerTrip),
    windowDays: round1(windowDays),
  };
}

export function litresPerKm(distanceKm: number, capacityL: number): number {
  if (distanceKm <= 0) return 0;
  return round2(capacityL / distanceKm);
}

export function siteCostPerL(
  distanceKm: number,
  capacityL: number,
  pricePerL: number
): number {
  if (distanceKm <= 0) return round2(pricePerL);
  return round2(pricePerL * (1 + distanceKm / 1000));
}

export function formatETB(value: number): string {
  return `${value.toFixed(2)} ETB`;
}

export function formatDays(value: number): string {
  return `${value.toFixed(1)} days`;
}

export function exportSlips(
  slips: Array<{
    id: string;
    destination: string;
    distanceKm: number;
    capacityL: number;
    pricePerL: number;
    disruption: number;
    savedAt: string;
  }>
): string {
  const lines = slips.map((s) => {
    const r = estimateTrip({
      distanceKm: s.distanceKm,
      capacityL: s.capacityL,
      pricePerL: s.pricePerL,
      disruption: s.disruption,
    });
    return [
      `${s.destination} — saved ${s.savedAt}`,
      `  route ${s.distanceKm} km | tanker ${s.capacityL} L | ${s.pricePerL} ETB/L | disruption ${s.disruption.toFixed(1)}`,
      `  cost per litre ${formatETB(r.costPerL)} | cost per trip ${formatETB(r.costPerTrip)} | window ${formatDays(r.windowDays)}`,
    ].join("\n");
  });
  return [`Corridor Route — saved slips (${slips.length})`, "", ...lines].join("\n");
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
