export interface SpecAttribute {
  id: string;
  category: string;
  unit?: string;
  isCalculated?: boolean;
  /** If set, renders as a dropdown select with these options */
  options?: string[];
}

export interface ElevatorColumn {
  id: string;
  name: string;
  specs: Record<string, string>;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  elevators: ElevatorColumn[];
  selectedTemplate: string | null;
  createdAt: string;
}

export const ALL_ATTRIBUTES: SpecAttribute[] = [
  // ── MAIN ──
  { id: "lift_designation", category: "Main" },
  { id: "quantity", category: "Main" },
  { id: "type", category: "Main", options: ["Passenger", "Freight", "Panoramic / Observation", "Bed / Stretcher", "Dumbwaiter", "Car Lift"] },
  { id: "brand", category: "Main" },
  { id: "model", category: "Main" },
  { id: "category", category: "Main", options: ["Home Lift", "Sightseeing Home Lift", "Shaft Frame Home Lift", "Commercial MRL", "MRL Passenger / Panoramic", "Machine Room Passenger", "Stretcher Elevator"] },
  { id: "load", category: "Main", unit: "kg" },
  { id: "persons", category: "Main" },
  { id: "speed", category: "Main", unit: "m/s", options: ["0.4", "1.0", "1.5", "1.6", "1.75", "2.0", "2.5", "3.0", "3.5", "4.0"] },
  { id: "stops", category: "Main", isCalculated: true },
  { id: "openings", category: "Main" },
  { id: "floors_served", category: "Main", isCalculated: true },
  { id: "rear_floors_served", category: "Main" },
  { id: "machine", category: "Main", options: ["Gearless MRL", "Geared Machine Room", "PM Synchronous Gearless (Wall Mount)"] },
  { id: "machine_location", category: "Main", options: ["Machine Room", "Machine Room Less"] },
  { id: "compliance", category: "Main", options: ["EN81-20/50", "EN81-70", "ASME A17.1", "GB7588"] },
  { id: "drive", category: "Main", options: ["VVVF", "VF"] },
  { id: "controller", category: "Main", options: ["U-CON", "iCON"] },
  { id: "operation", category: "Main", options: ["Simplex", "Duplex", "Group (3-8)"] },
  { id: "power", category: "Main", options: ["220V / Single Phase", "380V / 3 Phase / 50Hz", "400V / 3 Phase / 50Hz", "415V / 3 Phase / 50Hz"] },
  { id: "lighting_supply", category: "Main" },
  { id: "traction_machine", category: "Main", options: ["Vito / GETM", "PM Synchronous Gearless", "Rare Earth PM Synchronous Gearless"] },
  { id: "belt_type", category: "Main", options: ["Steel Belt (Megadyne Composite)", "Composite Steel Belt (Megadyne / ContiTech)", "Wire Rope"] },
  { id: "roping", category: "Main", options: ["1:1", "2:1"] },
  { id: "rise", category: "Main", unit: "m" },

  // ── SHAFT DIMENSIONS ──
  { id: "shaft_width", category: "Shaft", unit: "mm" },
  { id: "shaft_depth", category: "Shaft", unit: "mm" },
  { id: "pit_depth", category: "Shaft", unit: "mm" },
  { id: "overhead", category: "Shaft", unit: "mm" },
  { id: "travel", category: "Shaft", unit: "m" },
  { id: "shaft_materials", category: "Shaft", options: ["Concrete", "Brick", "Steel Structure", "Aluminum Shaft Frame"] },

  // ── LIFT CAR ──
  { id: "car_width", category: "Cabin", unit: "mm" },
  { id: "car_depth", category: "Cabin", unit: "mm" },
  { id: "car_height", category: "Cabin", unit: "mm" },
  { id: "decoration_model", category: "Cabin" },
  { id: "side_wall", category: "Cabin", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Wood Grain Art Panels", "Laminated Glass", "Etched Stainless Steel"] },
  { id: "rear_wall", category: "Cabin", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Wood Grain Art Panels + SS Trim", "Laminated Glass", "Leather Panel"] },
  { id: "front_wall", category: "Cabin", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Champagne Gold Sheet Metal Painted", "Black Titanium"] },
  { id: "car_door_finish", category: "Cabin", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Painted Steel"] },
  { id: "ceiling", category: "Cabin", options: [
    "Mirror SS Frame + Track Light (U-CL046)",
    "Hairline SS + Acrylic + Downlight (U-CL046)",
    "White Transparent Acrylic",
    "Mirror SS + Linear Light",
    "Painting Steel (Pearl Silver) + Acrylic",
    "Starry Sky Ceiling",
    "Round & Square Ceiling",
  ]},
  { id: "mirror", category: "Cabin", options: ["Half Height Rear Wall", "Full Height Rear Wall", "None"] },
  { id: "handrail", category: "Cabin", options: [
    "Circle Brushed SS Round Tube (U-HR001)",
    "Mirror SS Round Tube Floor Handrail (U-HR022)",
    "Flat Handrail (U-HR027)",
    "Orange Leather + Mirror SS",
    "None",
  ]},
  { id: "floor_finish", category: "Cabin", options: [
    "PVC (U-FL012)", "PVC (U-FL013)", "Grey Slate Tile", "Jazz White Marble", "Marble", "Plastic Carpet",
  ]},
  { id: "fan", category: "Cabin", options: ["Yes", "No"] },
  { id: "car_sill", category: "Cabin", options: ["Aluminum", "Stainless Steel"] },
  { id: "id_weight", category: "Cabin", unit: "kg" },
  { id: "lighting", category: "Cabin", options: ["Recessed LED Strip", "LED Downlight", "LED Panel"] },

  // ── DOORS ──
  { id: "door_width", category: "Doors", unit: "mm" },
  { id: "door_height", category: "Doors", unit: "mm" },
  { id: "door_type", category: "Doors", options: ["Automatic Centre Opening (2P-CO)", "Automatic Side Opening (2P-SO)", "Automatic Centre Opening 4-Panel", "Manual Sliding", "Telescopic"] },
  { id: "door_operator", category: "Doors", options: ["Jarless-con", "VVVF Door Operator"] },
  { id: "door_protection", category: "Doors", options: ["Light Curtains", "Safety Edge", "Light Curtains + Safety Edge", "Anti-pinch Protection"] },

  // ── LANDING DOOR FINISHES ──
  { id: "landing_door_main", category: "Landing Doors", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Painted Steel (RAL)", "Champagne Gold", "Black Titanium", "Rose Gold"] },
  { id: "landing_door_other", category: "Landing Doors", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Painted Steel (RAL)", "Champagne Gold", "Black Titanium"] },
  { id: "landing_jamb_main", category: "Landing Doors", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Marble Surround", "Painted Steel"] },
  { id: "landing_jamb_other", category: "Landing Doors", options: ["Hairline Stainless Steel", "Mirror Stainless Steel", "Painted Steel"] },
  { id: "landing_sill", category: "Landing Doors", options: ["Aluminum", "Stainless Steel"] },

  // ── CAR SIGNALISATION ──
  { id: "cop", category: "Signalisation" },
  { id: "cop_location", category: "Signalisation", options: ["Side Mounted", "Front Return Panel"] },
  { id: "cop_qty", category: "Signalisation", options: ["1", "2"] },
  { id: "cop_faceplate", category: "Signalisation", options: ["Hairline Stainless Steel", "Glass Panel", "Glass + Aluminum Frame"] },
  { id: "cop_button_type", category: "Signalisation", options: ["Touch Buttons", "Mechanical Buttons", "Braille Buttons"] },
  { id: "cop_position_indicator", category: "Signalisation", options: ["4.3\" TFT Display", "LED Segment Display", "13.3\" Touchscreen Monitor", "3\" LED Segment Code"] },
  { id: "intercom", category: "Signalisation", options: ["Emergency Intercom", "One-click Distress Function", "Video Intercom"] },
  { id: "call_registered_buzzer", category: "Signalisation", options: ["Yes", "No"] },
  { id: "overload_indication", category: "Signalisation", options: ["Flashing Light + Buzzer", "Buzzer Only", "Light Only"] },

  // ── LANDING CALL STATION ──
  { id: "lop", category: "Landing Call" },
  { id: "lcs_main_floor", category: "Landing Call" },
  { id: "lcs_other_floors", category: "Landing Call" },
  { id: "lcs_faceplate", category: "Landing Call", options: ["Hairline Stainless Steel", "Glass Panel", "Glass + Aluminum Frame"] },
  { id: "lcs_button_type", category: "Landing Call", options: ["Touch Buttons", "Mechanical Buttons", "Microswitch Buttons"] },

  // ── HALL LANTERNS / INDICATORS ──
  { id: "hall_lantern_main", category: "Hall Indicators" },
  { id: "hall_lantern_other", category: "Hall Indicators" },
  { id: "hall_faceplate", category: "Hall Indicators", options: ["Hairline Stainless Steel", "Glass Panel", "Mirror Stainless Steel"] },

  // ── EXTRA FEATURES ──
  { id: "arrival_chime", category: "Features", options: ["Yes", "No"] },
  { id: "ard", category: "Features", options: ["Standard ARD Module", "Standard (Built-in Lithium Battery)", "None"] },
  { id: "emergency_lighting", category: "Features", options: ["Yes", "No"] },
  { id: "fireman_switch", category: "Features", options: ["Yes", "No"] },
  { id: "voice_announcement", category: "Features", options: ["Yes", "No"] },
  { id: "smart_monitoring", category: "Features", options: ["Yes", "No"] },
  { id: "regenerative_drive", category: "Features", options: ["Yes", "No"] },
  { id: "cmcs", category: "Features", options: ["Yes", "No"] },
  { id: "fire_rated_door", category: "Features", options: ["120 min", "90 min", "60 min", "None"] },
  { id: "seismic_design", category: "Features", options: ["SDC 'C' / EN81-77 Cat 2", "None"] },
];

export interface Template {
  id: string;
  name: string;
  brand: string;
  description: string;
  descriptionAr: string;
  defaultSpecs: Record<string, string>;
  defaultAttributes: string[];
}

export const TEMPLATES: Template[] = [
  {
    id: "xizi-i520pro",
    name: "XIZI i520 Pro-II",
    brand: "XIZI",
    description: "Home elevator — 0.4 m/s, 250–400 kg, max 15m rise, 6 floors",
    descriptionAr: "مصعد منزلي — 0.4 م/ث، 250-400 كجم، ارتفاع 15 م، 6 طوابق",
    defaultSpecs: {
      brand: "XIZI", model: "i520 Pro-II", type: "Passenger", category: "Home Lift",
      speed: "0.4", load: "250-400", rise: "15",
      machine: "Gearless MRL", machine_location: "Machine Room Less",
      traction_machine: "PM Synchronous Gearless", drive: "VVVF", controller: "U-CON",
      door_type: "Automatic Centre Opening (2P-CO)", door_operator: "Jarless-con",
      door_protection: "Light Curtains",
      decoration_model: "U-CR235-B (Minimalist Geometry)",
      ceiling: "Mirror SS Frame + Track Light (U-CL046)",
      lighting: "Recessed LED Strip",
      front_wall: "Hairline Stainless Steel", side_wall: "Wood Grain Art Panels",
      rear_wall: "Wood Grain Art Panels + SS Trim", floor_finish: "Grey Slate Tile",
      cop: "U-CF3000 Glass Panel Touch Buttons", lop: "U-ZW4200 Glass + Aluminum Frame",
      power: "220V / Single Phase", belt_type: "Steel Belt (Megadyne Composite)",
      ard: "Standard (Built-in Lithium Battery)", intercom: "One-click Distress Function",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "speed", "load", "rise", "stops", "floors_served",
      "machine", "machine_location", "traction_machine", "drive", "controller", "belt_type",
      "door_type", "door_operator", "door_protection", "door_width", "door_height",
      "car_width", "car_depth", "car_height",
      "decoration_model", "ceiling", "lighting", "front_wall", "side_wall", "rear_wall", "floor_finish",
      "cop", "lop",
      "shaft_width", "shaft_depth", "pit_depth", "overhead",
      "power", "ard",
    ],
  },
  {
    id: "xizi-i520s-g",
    name: "XIZI i520S-G",
    brand: "XIZI",
    description: "Glass sightseeing home lift — 250–400 kg, panoramic view",
    descriptionAr: "مصعد منزلي زجاجي بانورامي — 250-400 كجم، إطلالة شاملة",
    defaultSpecs: {
      brand: "XIZI", model: "i520S-G", type: "Passenger", category: "Sightseeing Home Lift",
      speed: "0.4", load: "250-400", rise: "15",
      machine: "Gearless MRL", machine_location: "Machine Room Less",
      traction_machine: "PM Synchronous Gearless", drive: "VVVF", controller: "U-CON",
      door_type: "Automatic Centre Opening (2P-CO)", door_operator: "Jarless-con",
      door_protection: "Light Curtains",
      decoration_model: "U-CR935-A (Std Glass Cabin)",
      ceiling: "White Transparent Acrylic",
      front_wall: "Champagne Gold Sheet Metal Painted",
      side_wall: "Laminated Glass", rear_wall: "Mirror Stainless Steel",
      floor_finish: "Jazz White Marble",
      cop: "U-CF3700 13.3\" Touchscreen Monitor",
      power: "220V / Single Phase", belt_type: "Steel Belt (Megadyne Composite)",
      ard: "Standard (Built-in Lithium Battery)",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "speed", "load", "rise", "stops", "floors_served",
      "machine", "machine_location", "drive", "controller",
      "door_type", "door_operator", "door_width", "door_height",
      "car_width", "car_depth", "car_height",
      "decoration_model", "ceiling", "front_wall", "side_wall", "rear_wall", "floor_finish",
      "cop",
      "shaft_width", "shaft_depth", "pit_depth", "overhead",
      "power", "ard",
    ],
  },
  {
    id: "xizi-i520plus-g",
    name: "XIZI i520 Plus-G",
    brand: "XIZI",
    description: "Aluminum shaft home lift — 250–400 kg, integrated shaft frame",
    descriptionAr: "مصعد منزلي بإطار ألومنيوم — 250-400 كجم، هيكل متكامل",
    defaultSpecs: {
      brand: "XIZI", model: "i520 Plus-G", type: "Passenger", category: "Shaft Frame Home Lift",
      speed: "0.4", load: "250-400",
      machine: "PM Synchronous Gearless (Wall Mount)", machine_location: "Machine Room Less",
      traction_machine: "Rare Earth PM Synchronous Gearless", drive: "VVVF",
      shaft_materials: "Aluminum Shaft Frame",
      decoration_model: "U-CR939 (Leather + Mirror SS)",
      ceiling: "Mirror SS + Linear Light",
      rear_wall: "Leather Panel", handrail: "Orange Leather + Mirror SS",
      floor_finish: "Plastic Carpet",
      cop: "U-CF3700 13.3\" White Touchscreen",
      door_protection: "Anti-pinch Protection",
      ard: "Standard ARD Module", power: "220V / Single Phase",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "speed", "load", "rise", "stops", "floors_served",
      "machine", "machine_location", "traction_machine", "drive",
      "door_type", "door_protection", "door_width", "door_height",
      "car_width", "car_depth", "car_height",
      "decoration_model", "ceiling", "rear_wall", "handrail", "floor_finish",
      "cop",
      "shaft_width", "shaft_depth", "shaft_materials", "pit_depth", "overhead",
      "power", "ard",
    ],
  },
  {
    id: "xizi-g3-passenger",
    name: "XIZI UN-Victor G3",
    brand: "XIZI",
    description: "Steel belt passenger elevator — 400–1600 kg, 1.0–4.0 m/s",
    descriptionAr: "مصعد ركاب بحزام فولاذي — 400-1600 كجم، 1.0-4.0 م/ث",
    defaultSpecs: {
      brand: "XIZI", model: "UN-Victor G3", type: "Passenger", category: "Commercial MRL",
      speed: "1.0-4.0", load: "400-1600",
      machine: "Gearless MRL", machine_location: "Machine Room Less",
      traction_machine: "Vito / GETM", drive: "VVVF", controller: "U-CON",
      door_operator: "Jarless-con", door_protection: "Light Curtains",
      belt_type: "Composite Steel Belt (Megadyne / ContiTech)",
      decoration_model: "U-CR126 (Standard)",
      ceiling: "Hairline SS + Acrylic + Downlight (U-CL046)",
      front_wall: "Hairline Stainless Steel", side_wall: "Hairline Stainless Steel",
      rear_wall: "Hairline Stainless Steel", floor_finish: "PVC (U-FL012)",
      handrail: "Circle Brushed SS Round Tube (U-HR001)",
      cop: "U-CF6000 4.3\" TFT + Mechanical Buttons",
      lop: "U-ZW6000 4.3\" LED Segment Display",
    },
    defaultAttributes: [
      "lift_designation", "quantity", "type", "brand", "model", "category", "compliance",
      "load", "persons", "speed", "rise", "stops", "floors_served", "openings",
      "machine", "machine_location", "traction_machine", "drive", "controller", "belt_type", "operation",
      "power", "lighting_supply",
      "shaft_width", "shaft_depth", "pit_depth", "overhead", "travel", "shaft_materials",
      "car_width", "car_depth", "car_height",
      "decoration_model", "side_wall", "rear_wall", "front_wall", "car_door_finish",
      "ceiling", "mirror", "handrail", "floor_finish", "fan", "car_sill",
      "door_width", "door_height", "door_type", "door_operator", "door_protection",
      "landing_door_main", "landing_door_other", "landing_jamb_main", "landing_jamb_other", "landing_sill",
      "cop", "cop_location", "cop_qty", "cop_faceplate", "cop_button_type", "cop_position_indicator",
      "intercom", "call_registered_buzzer", "overload_indication",
      "lop", "lcs_main_floor", "lcs_other_floors", "lcs_faceplate", "lcs_button_type",
      "hall_lantern_main", "hall_lantern_other", "hall_faceplate",
      "arrival_chime", "ard", "emergency_lighting", "fireman_switch",
      "fire_rated_door", "seismic_design",
    ],
  },
  {
    id: "xizi-mrl-passenger",
    name: "XIZI UN-Victor MRL",
    brand: "XIZI",
    description: "MRL passenger & panoramic — 630–1600 kg, 1.0–1.75 m/s",
    descriptionAr: "مصعد ركاب بدون غرفة ماكينة — 630-1600 كجم، 1.0-1.75 م/ث",
    defaultSpecs: {
      brand: "XIZI", model: "UN-Victor MRL", type: "Passenger",
      category: "MRL Passenger / Panoramic",
      speed: "1.0-1.75", load: "630-1600",
      machine: "Gearless MRL", machine_location: "Machine Room Less",
      traction_machine: "Vito / GETM", drive: "VVVF", controller: "U-CON",
      door_operator: "Jarless-con", door_protection: "Light Curtains",
      decoration_model: "U-CR901-1 (Standard)",
      ceiling: "Painting Steel (Pearl Silver) + Acrylic",
      front_wall: "Hairline Stainless Steel", rear_wall: "Hairline Stainless Steel",
      floor_finish: "PVC (U-FL012)",
      handrail: "Circle Brushed SS Round Tube (U-HR001)",
    },
    defaultAttributes: [
      "lift_designation", "quantity", "type", "brand", "model", "category", "compliance",
      "load", "persons", "speed", "rise", "stops", "floors_served", "openings",
      "machine", "machine_location", "traction_machine", "drive", "controller", "operation",
      "power", "lighting_supply",
      "shaft_width", "shaft_depth", "pit_depth", "overhead", "travel", "shaft_materials",
      "car_width", "car_depth", "car_height",
      "decoration_model", "side_wall", "rear_wall", "front_wall",
      "ceiling", "handrail", "floor_finish",
      "door_width", "door_height", "door_type", "door_operator", "door_protection",
      "landing_door_main", "landing_door_other",
      "cop", "cop_faceplate", "cop_button_type",
      "lop", "lcs_faceplate", "lcs_button_type",
      "ard", "emergency_lighting", "fireman_switch", "intercom",
    ],
  },
];

export function generateFloorString(stops: number): string {
  if (stops <= 0 || isNaN(stops)) return "";
  const floors = ["G"];
  for (let i = 1; i < stops; i++) {
    floors.push(String(i));
  }
  return floors.join(", ");
}

let idCounter = 0;
export function generateId(): string {
  return `${Date.now()}-${++idCounter}`;
}
