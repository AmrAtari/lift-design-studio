export interface SpecAttribute {
  id: string;
  category: string;
  unit?: string;
  isCalculated?: boolean;
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
  { id: "brand", category: "General" },
  { id: "model", category: "General" },
  { id: "type", category: "General" },
  { id: "category", category: "General" },
  { id: "compliance", category: "General" },
  { id: "speed", category: "Performance", unit: "m/s" },
  { id: "load", category: "Performance", unit: "kg" },
  { id: "persons", category: "Performance" },
  { id: "rise", category: "Performance", unit: "m" },
  { id: "stops", category: "Performance", isCalculated: true },
  { id: "floors_served", category: "Performance" },
  { id: "openings", category: "Performance" },
  { id: "machine", category: "Technical" },
  { id: "traction_machine", category: "Technical" },
  { id: "drive", category: "Technical" },
  { id: "roping", category: "Technical" },
  { id: "belt_type", category: "Technical" },
  { id: "controller", category: "Technical" },
  { id: "door_type", category: "Doors" },
  { id: "door_operator", category: "Doors" },
  { id: "door_width", category: "Doors", unit: "mm" },
  { id: "door_height", category: "Doors", unit: "mm" },
  { id: "door_protection", category: "Doors" },
  { id: "car_width", category: "Cabin", unit: "mm" },
  { id: "car_depth", category: "Cabin", unit: "mm" },
  { id: "car_height", category: "Cabin", unit: "mm" },
  { id: "decoration_model", category: "Cabin" },
  { id: "front_wall", category: "Finishes" },
  { id: "rear_wall", category: "Finishes" },
  { id: "side_wall", category: "Finishes" },
  { id: "ceiling", category: "Finishes" },
  { id: "lighting", category: "Finishes" },
  { id: "floor_finish", category: "Finishes" },
  { id: "handrail", category: "Finishes" },
  { id: "cop", category: "Finishes" },
  { id: "lop", category: "Finishes" },
  { id: "shaft_width", category: "Shaft", unit: "mm" },
  { id: "shaft_depth", category: "Shaft", unit: "mm" },
  { id: "pit_depth", category: "Shaft", unit: "mm" },
  { id: "overhead", category: "Shaft", unit: "mm" },
  { id: "power", category: "Electrical" },
  { id: "ard", category: "Safety" },
  { id: "intercom", category: "Safety" },
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
      brand: "XIZI",
      model: "i520 Pro-II",
      type: "Passenger",
      category: "Home Lift",
      speed: "0.4",
      load: "250-400",
      rise: "15",
      machine: "Gearless MRL",
      traction_machine: "PM Synchronous Gearless",
      drive: "VVVF",
      controller: "U-CON",
      door_type: "Automatic Centre Opening",
      door_operator: "Jarless-con",
      door_protection: "Light Curtains",
      decoration_model: "U-CR235-B (Minimalist Geometry)",
      ceiling: "Mirror Stainless Steel Frame + Track Light",
      lighting: "Recessed LED Strip",
      front_wall: "Hairline Stainless Steel",
      side_wall: "Wood Grain Art Panels",
      rear_wall: "Wood Grain Art Panels + Stainless Steel Trim",
      floor_finish: "Grey Slate Tile",
      cop: "U-CF3000 Glass Panel Touch Buttons",
      lop: "U-ZW4200 Glass + Aluminum Frame",
      power: "220V / Single Phase",
      belt_type: "Steel Belt (Megadyne Composite)",
      ard: "Standard (Built-in Lithium Battery)",
      intercom: "One-click Distress Function",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "speed", "load", "rise", "stops", "floors_served",
      "machine", "traction_machine", "drive", "controller", "belt_type",
      "door_type", "door_operator", "door_protection",
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
      brand: "XIZI",
      model: "i520S-G",
      type: "Passenger",
      category: "Sightseeing Home Lift",
      speed: "0.4",
      load: "250-400",
      rise: "15",
      machine: "Gearless MRL",
      traction_machine: "PM Synchronous Gearless",
      drive: "VVVF",
      controller: "U-CON",
      door_type: "Automatic Centre Opening",
      door_operator: "Jarless-con",
      door_protection: "Light Curtains",
      decoration_model: "U-CR935-A (Std Glass Cabin)",
      ceiling: "White Transparent Acrylic",
      front_wall: "Champagne Gold Sheet Metal Painted",
      side_wall: "Champagne Gold Aluminium + Laminated Tempered Glass",
      rear_wall: "Black Titanium on Both Sides",
      floor_finish: "Jazz White Marble",
      cop: "U-CF3700 13.3\" Touchscreen Monitor",
      power: "220V / Single Phase",
      belt_type: "Steel Belt (Megadyne Composite)",
      ard: "Standard (Built-in Lithium Battery)",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "speed", "load", "rise", "stops", "floors_served",
      "machine", "drive", "controller",
      "door_type", "door_operator",
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
      brand: "XIZI",
      model: "i520 Plus-G",
      type: "Passenger",
      category: "Shaft Frame Home Lift",
      speed: "0.4",
      load: "250-400",
      machine: "PM Synchronous Gearless (Wall Mount)",
      traction_machine: "Rare Earth PM Synchronous Gearless",
      drive: "VVVF",
      decoration_model: "U-CR939 (Leather + Mirror SS)",
      ceiling: "Mirror Stainless Steel + Linear Light",
      rear_wall: "Orange Leather + Off-white Leather Hard Roll",
      handrail: "Orange Leather + Mirror Stainless Steel",
      floor_finish: "Plastic Carpet",
      cop: "U-CF3700 13.3\" White Touchscreen",
      door_protection: "Anti-pinch Protection",
      ard: "Standard ARD Module",
      power: "220V / Single Phase",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "speed", "load", "rise", "stops", "floors_served",
      "machine", "traction_machine", "drive",
      "door_type", "door_protection",
      "car_width", "car_depth", "car_height",
      "decoration_model", "ceiling", "rear_wall", "handrail", "floor_finish",
      "cop",
      "shaft_width", "shaft_depth", "pit_depth", "overhead",
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
      brand: "XIZI",
      model: "UN-Victor G3",
      type: "Passenger",
      category: "Commercial MRL",
      speed: "1.0-4.0",
      load: "400-1600",
      machine: "Gearless MRL",
      traction_machine: "Vito / GETM",
      drive: "VVVF",
      controller: "U-CON",
      door_operator: "Jarless-con",
      door_protection: "Light Curtains",
      belt_type: "Composite Steel Belt (Megadyne / ContiTech)",
      decoration_model: "U-CR126 (Standard)",
      ceiling: "Hairline SS + Acrylic + Downlight (U-CL046)",
      front_wall: "Hairline Stainless Steel",
      side_wall: "Hairline Stainless Steel",
      rear_wall: "Hairline Stainless Steel",
      floor_finish: "PVC (U-FL012)",
      handrail: "Circle Brushed SS Round Tube (U-HR001)",
      cop: "U-CF6000 4.3\" TFT + Mechanical Buttons",
      lop: "U-ZW6000 4.3\" LED Segment Display",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "compliance", "speed", "load", "persons", "rise", "stops", "floors_served", "openings",
      "machine", "traction_machine", "drive", "controller", "belt_type",
      "door_type", "door_operator", "door_width", "door_height", "door_protection",
      "car_width", "car_depth", "car_height",
      "decoration_model", "ceiling", "front_wall", "side_wall", "rear_wall", "floor_finish", "handrail",
      "cop", "lop",
      "shaft_width", "shaft_depth", "pit_depth", "overhead",
      "power", "ard", "intercom",
    ],
  },
  {
    id: "xizi-mrl-passenger",
    name: "XIZI UN-Victor MRL",
    brand: "XIZI",
    description: "MRL passenger & panoramic — 630–1600 kg, 1.0–1.75 m/s",
    descriptionAr: "مصعد ركاب بدون غرفة ماكينة — 630-1600 كجم، 1.0-1.75 م/ث",
    defaultSpecs: {
      brand: "XIZI",
      model: "UN-Victor MRL",
      type: "Passenger",
      category: "MRL Passenger / Panoramic",
      speed: "1.0-1.75",
      load: "630-1600",
      machine: "Gearless MRL",
      traction_machine: "Vito / GETM",
      drive: "VVVF",
      controller: "U-CON",
      door_operator: "Jarless-con",
      door_protection: "Light Curtains",
      decoration_model: "U-CR901-1 (Standard)",
      ceiling: "Painting Steel (Pearl Silver) + Acrylic",
      front_wall: "Hairline Stainless Steel",
      rear_wall: "Hairline Stainless Steel",
      floor_finish: "PVC (U-FL012)",
      handrail: "Circle Brushed SS Round Tube (U-HR001)",
    },
    defaultAttributes: [
      "brand", "model", "type", "category", "compliance", "speed", "load", "persons", "rise", "stops", "floors_served", "openings",
      "machine", "traction_machine", "drive", "controller",
      "door_type", "door_operator", "door_width", "door_height", "door_protection",
      "car_width", "car_depth", "car_height",
      "decoration_model", "ceiling", "front_wall", "rear_wall", "floor_finish", "handrail",
      "cop", "lop",
      "shaft_width", "shaft_depth", "pit_depth", "overhead",
      "power", "ard", "intercom",
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
