import { ELEVATOR_SPECS } from "../data/elevatorSpecs";

export const calculateLiftDimensions = (
  specId: string,
  hw: number, // Shaft Width
  hd: number  // Shaft Depth
) => {
  const spec = ELEVATOR_SPECS.find((s) => s.id === specId);
  if (!spec || !hw || !hd) return null;

  return {
    cw: hw - spec.cwDelta, // Car Width
    cd: hd - spec.cdDelta, // Car Depth
    model: spec.model
  };
};
