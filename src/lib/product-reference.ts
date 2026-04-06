// Product reference data extracted from XIZI PDF catalogs
// Used to provide hints based on shaft dimensions, capacity, and speed

export interface ProductConfig {
  model: string;
  series: string;
  capacity: number;
  speed: number;
  cabinWidth: number;
  cabinDepth: number;
  cabinHeight: number;
  doorWidth: number;
  doorHeight: number;
  doorType: string;
  shaftWidth: number;
  shaftDepth: number;
  pitDepth: number;
  overhead: number;
}

// G3 Steel Belt MRL configurations
const G3_CONFIGS: ProductConfig[] = [
  { model: "UN-Victor G3", series: "G3", capacity: 400, speed: 1.0, cabinWidth: 1000, cabinDepth: 1100, cabinHeight: 2400, doorWidth: 750, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1600, shaftDepth: 1500, pitDepth: 1200, overhead: 3900 },
  { model: "UN-Victor G3", series: "G3", capacity: 450, speed: 1.0, cabinWidth: 1000, cabinDepth: 1250, cabinHeight: 2400, doorWidth: 750, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1600, shaftDepth: 1650, pitDepth: 1200, overhead: 3900 },
  { model: "UN-Victor G3", series: "G3", capacity: 550, speed: 1.0, cabinWidth: 1000, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 750, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1600, shaftDepth: 1800, pitDepth: 1200, overhead: 3900 },
  { model: "UN-Victor G3", series: "G3", capacity: 630, speed: 1.0, cabinWidth: 1150, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 800, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1750, shaftDepth: 1800, pitDepth: 1200, overhead: 3900 },
  { model: "UN-Victor G3", series: "G3", capacity: 800, speed: 1.0, cabinWidth: 1350, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 800, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1950, shaftDepth: 1800, pitDepth: 1350, overhead: 3900 },
  { model: "UN-Victor G3", series: "G3", capacity: 800, speed: 1.5, cabinWidth: 1350, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 800, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1950, shaftDepth: 1800, pitDepth: 1380, overhead: 3970 },
  { model: "UN-Victor G3", series: "G3", capacity: 800, speed: 1.75, cabinWidth: 1350, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 800, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1950, shaftDepth: 1800, pitDepth: 1400, overhead: 4000 },
  { model: "UN-Victor G3", series: "G3", capacity: 1000, speed: 1.0, cabinWidth: 1600, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2200, shaftDepth: 1800, pitDepth: 1350, overhead: 3900 },
  { model: "UN-Victor G3", series: "G3", capacity: 1000, speed: 1.5, cabinWidth: 1600, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2200, shaftDepth: 1800, pitDepth: 1380, overhead: 3970 },
  { model: "UN-Victor G3", series: "G3", capacity: 1000, speed: 1.75, cabinWidth: 1600, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2200, shaftDepth: 1800, pitDepth: 1400, overhead: 4000 },
  { model: "UN-Victor G3", series: "G3", capacity: 1050, speed: 1.0, cabinWidth: 1600, cabinDepth: 1500, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2200, shaftDepth: 1900, pitDepth: 1350, overhead: 3900 },
  { model: "UN-Victor G3", series: "G3", capacity: 1050, speed: 1.5, cabinWidth: 1600, cabinDepth: 1500, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2200, shaftDepth: 1900, pitDepth: 1380, overhead: 3970 },
  { model: "UN-Victor G3", series: "G3", capacity: 1050, speed: 1.75, cabinWidth: 1600, cabinDepth: 1500, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2200, shaftDepth: 1900, pitDepth: 1400, overhead: 4000 },
  { model: "UN-Victor G3", series: "G3", capacity: 1150, speed: 1.0, cabinWidth: 1900, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 1000, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2600, shaftDepth: 1800, pitDepth: 1400, overhead: 4000 },
  { model: "UN-Victor G3", series: "G3", capacity: 1150, speed: 1.5, cabinWidth: 1900, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 1000, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2600, shaftDepth: 1800, pitDepth: 1440, overhead: 4120 },
  { model: "UN-Victor G3", series: "G3", capacity: 1150, speed: 1.75, cabinWidth: 1900, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 1000, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2600, shaftDepth: 1800, pitDepth: 1470, overhead: 4180 },
  { model: "UN-Victor G3", series: "G3", capacity: 1350, speed: 1.0, cabinWidth: 2000, cabinDepth: 1550, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2700, shaftDepth: 1950, pitDepth: 1400, overhead: 4000 },
  { model: "UN-Victor G3", series: "G3", capacity: 1350, speed: 1.5, cabinWidth: 2000, cabinDepth: 1550, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2700, shaftDepth: 1950, pitDepth: 1440, overhead: 4120 },
  { model: "UN-Victor G3", series: "G3", capacity: 1350, speed: 1.75, cabinWidth: 2000, cabinDepth: 1550, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2700, shaftDepth: 1950, pitDepth: 1470, overhead: 4180 },
  { model: "UN-Victor G3", series: "G3", capacity: 1600, speed: 1.0, cabinWidth: 2000, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2700, shaftDepth: 2150, pitDepth: 1400, overhead: 4000 },
  { model: "UN-Victor G3", series: "G3", capacity: 1600, speed: 1.5, cabinWidth: 2000, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2700, shaftDepth: 2150, pitDepth: 1440, overhead: 4120 },
  { model: "UN-Victor G3", series: "G3", capacity: 1600, speed: 1.75, cabinWidth: 2000, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2700, shaftDepth: 2150, pitDepth: 1470, overhead: 4180 },
];

// UN-Victor MRL configurations
const MRL_CONFIGS: ProductConfig[] = [
  { model: "UN-Victor MRL", series: "MRL", capacity: 630, speed: 1.0, cabinWidth: 1050, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 700, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1800, shaftDepth: 1800, pitDepth: 1400, overhead: 4150 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 630, speed: 1.5, cabinWidth: 1050, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 700, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 1800, shaftDepth: 1800, pitDepth: 1450, overhead: 4500 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 800, speed: 1.0, cabinWidth: 1350, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 800, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2000, shaftDepth: 1800, pitDepth: 1400, overhead: 4150 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 800, speed: 1.5, cabinWidth: 1350, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 800, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2000, shaftDepth: 1800, pitDepth: 1450, overhead: 4500 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 800, speed: 1.75, cabinWidth: 1350, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 800, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2000, shaftDepth: 1800, pitDepth: 1450, overhead: 4500 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1000, speed: 1.0, cabinWidth: 1600, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2250, shaftDepth: 1800, pitDepth: 1400, overhead: 4150 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1000, speed: 1.5, cabinWidth: 1600, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2250, shaftDepth: 1800, pitDepth: 1450, overhead: 4500 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1000, speed: 1.75, cabinWidth: 1600, cabinDepth: 1400, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2250, shaftDepth: 1800, pitDepth: 1450, overhead: 4500 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1050, speed: 1.5, cabinWidth: 1600, cabinDepth: 1500, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2250, shaftDepth: 1900, pitDepth: 1450, overhead: 4500 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1150, speed: 1.0, cabinWidth: 1600, cabinDepth: 1650, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2400, shaftDepth: 2050, pitDepth: 1450, overhead: 4450 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1150, speed: 1.5, cabinWidth: 1600, cabinDepth: 1650, cabinHeight: 2400, doorWidth: 900, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2400, shaftDepth: 2050, pitDepth: 1550, overhead: 4600 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1350, speed: 1.0, cabinWidth: 1700, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1000, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2500, shaftDepth: 2150, pitDepth: 1450, overhead: 4450 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1350, speed: 1.5, cabinWidth: 1700, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1000, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2500, shaftDepth: 2150, pitDepth: 1550, overhead: 4600 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1600, speed: 1.0, cabinWidth: 2000, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2800, shaftDepth: 2150, pitDepth: 1450, overhead: 4450 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1600, speed: 1.5, cabinWidth: 2000, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2800, shaftDepth: 2150, pitDepth: 1550, overhead: 4600 },
  { model: "UN-Victor MRL", series: "MRL", capacity: 1600, speed: 1.75, cabinWidth: 2000, cabinDepth: 1750, cabinHeight: 2400, doorWidth: 1100, doorHeight: 2100, doorType: "2P-CO", shaftWidth: 2800, shaftDepth: 2150, pitDepth: 1600, overhead: 4700 },
];

// i520 Plus-G Home Lift configurations
const I520PLUS_CONFIGS: ProductConfig[] = [
  { model: "i520 Plus-G", series: "i520+G", capacity: 250, speed: 0.4, cabinWidth: 830, cabinDepth: 900, cabinHeight: 2150, doorWidth: 820, doorHeight: 2000, doorType: "Single Opening", shaftWidth: 1240, shaftDepth: 1260, pitDepth: 100, overhead: 2850 },
  { model: "i520 Plus-G", series: "i520+G", capacity: 250, speed: 0.4, cabinWidth: 1010, cabinDepth: 900, cabinHeight: 2150, doorWidth: 820, doorHeight: 2000, doorType: "Side Double Opening", shaftWidth: 1310, shaftDepth: 1330, pitDepth: 100, overhead: 2850 },
  { model: "i520 Plus-G", series: "i520+G", capacity: 320, speed: 0.4, cabinWidth: 1130, cabinDepth: 1000, cabinHeight: 2150, doorWidth: 760, doorHeight: 2000, doorType: "Single Opening", shaftWidth: 1410, shaftDepth: 1430, pitDepth: 100, overhead: 2850 },
  { model: "i520 Plus-G", series: "i520+G", capacity: 400, speed: 0.4, cabinWidth: 1380, cabinDepth: 1250, cabinHeight: 2150, doorWidth: 800, doorHeight: 2000, doorType: "Single Opening", shaftWidth: 1480, shaftDepth: 1500, pitDepth: 100, overhead: 2850 },
  { model: "i520 Plus-G", series: "i520+G", capacity: 400, speed: 0.4, cabinWidth: 1480, cabinDepth: 1070, cabinHeight: 2150, doorWidth: 900, doorHeight: 2000, doorType: "Double Opening", shaftWidth: 1480, shaftDepth: 1500, pitDepth: 100, overhead: 2850 },
];

// i520 Pro-II and i520S-G share similar shaft requirements
const I520PRO_CONFIGS: ProductConfig[] = [
  { model: "i520 Pro-II", series: "i520Pro", capacity: 250, speed: 0.4, cabinWidth: 900, cabinDepth: 900, cabinHeight: 2200, doorWidth: 750, doorHeight: 2100, doorType: "Centre Opening", shaftWidth: 1300, shaftDepth: 1350, pitDepth: 300, overhead: 3200 },
  { model: "i520 Pro-II", series: "i520Pro", capacity: 320, speed: 0.4, cabinWidth: 1000, cabinDepth: 1000, cabinHeight: 2200, doorWidth: 800, doorHeight: 2100, doorType: "Centre Opening", shaftWidth: 1400, shaftDepth: 1450, pitDepth: 300, overhead: 3200 },
  { model: "i520 Pro-II", series: "i520Pro", capacity: 400, speed: 0.4, cabinWidth: 1100, cabinDepth: 1100, cabinHeight: 2200, doorWidth: 850, doorHeight: 2100, doorType: "Centre Opening", shaftWidth: 1500, shaftDepth: 1550, pitDepth: 300, overhead: 3200 },
];

export const ALL_PRODUCT_CONFIGS: ProductConfig[] = [
  ...G3_CONFIGS,
  ...MRL_CONFIGS,
  ...I520PLUS_CONFIGS,
  ...I520PRO_CONFIGS,
];

const TOLERANCE = 150; // mm tolerance for shaft matching

export interface ProductHint {
  model: string;
  series: string;
  capacity: number;
  speed: number;
  cabinWidth: number;
  cabinDepth: number;
  doorWidth: number;
  doorHeight: number;
  pitDepth: number;
  overhead: number;
  matchType: "exact" | "close";
}

/**
 * Find matching product configurations based on entered shaft dimensions
 * Returns compatible products with their required specs
 */
export function findMatchingProducts(
  shaftWidth?: number,
  shaftDepth?: number,
  overhead?: number,
  pitDepth?: number,
  capacity?: number,
  speed?: number,
): ProductHint[] {
  if (!shaftWidth && !shaftDepth && !capacity && !speed) return [];

  const results: ProductHint[] = [];

  for (const cfg of ALL_PRODUCT_CONFIGS) {
    let isExact = true;
    let isClose = true;

    if (shaftWidth) {
      if (shaftWidth === cfg.shaftWidth) { /* exact */ }
      else if (Math.abs(shaftWidth - cfg.shaftWidth) <= TOLERANCE) { isExact = false; }
      else { isClose = false; continue; }
    }
    if (shaftDepth) {
      if (shaftDepth === cfg.shaftDepth) { /* exact */ }
      else if (Math.abs(shaftDepth - cfg.shaftDepth) <= TOLERANCE) { isExact = false; }
      else { isClose = false; continue; }
    }
    if (overhead) {
      if (overhead >= cfg.overhead) { /* fits */ }
      else if (overhead >= cfg.overhead - TOLERANCE) { isExact = false; }
      else { isClose = false; continue; }
    }
    if (pitDepth) {
      if (pitDepth >= cfg.pitDepth) { /* fits */ }
      else if (pitDepth >= cfg.pitDepth - TOLERANCE) { isExact = false; }
      else { isClose = false; continue; }
    }
    if (capacity) {
      if (capacity === cfg.capacity) { /* exact */ }
      else { isClose = false; continue; }
    }
    if (speed) {
      if (speed === cfg.speed) { /* exact */ }
      else { isClose = false; continue; }
    }

    if (!isClose) continue;

    results.push({
      model: cfg.model,
      series: cfg.series,
      capacity: cfg.capacity,
      speed: cfg.speed,
      cabinWidth: cfg.cabinWidth,
      cabinDepth: cfg.cabinDepth,
      doorWidth: cfg.doorWidth,
      doorHeight: cfg.doorHeight,
      pitDepth: cfg.pitDepth,
      overhead: cfg.overhead,
      matchType: isExact ? "exact" : "close",
    });
  }

  // Sort: exact first, then by capacity
  results.sort((a, b) => {
    if (a.matchType !== b.matchType) return a.matchType === "exact" ? -1 : 1;
    return a.capacity - b.capacity;
  });

  return results;
}

/**
 * Generate a hint string for a specific attribute based on matching products
 */
export function getAttributeHint(
  attrId: string,
  matches: ProductHint[],
  lang: "en" | "ar"
): string | null {
  if (matches.length === 0) return null;

  const values = new Set<string>();
  for (const m of matches) {
    switch (attrId) {
      case "car_width": values.add(`${m.cabinWidth}`); break;
      case "car_depth": values.add(`${m.cabinDepth}`); break;
      case "door_width": values.add(`${m.doorWidth}`); break;
      case "door_height": values.add(`${m.doorHeight}`); break;
      case "pit_depth": values.add(`${m.pitDepth}`); break;
      case "overhead": values.add(`${m.overhead}`); break;
      case "load": values.add(`${m.capacity}`); break;
      case "speed": values.add(`${m.speed}`); break;
      case "model": values.add(m.model); break;
    }
  }

  if (values.size === 0) return null;
  const valuesArr = Array.from(values).slice(0, 4);
  const prefix = lang === "ar" ? "متوافق: " : "Fits: ";
  return prefix + valuesArr.join(" / ");
}
