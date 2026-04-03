export interface SpecAttribute {
  id: string;
  labelEn: string;
  labelAr: string;
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
  { id: "brand", labelEn: "Brand", labelAr: "العلامة التجارية", category: "General" },
  { id: "model", labelEn: "Model", labelAr: "الموديل", category: "General" },
  { id: "type", labelEn: "Lift Type", labelAr: "نوع المصعد", category: "General" },
  { id: "category", labelEn: "Category", labelAr: "الفئة", category: "General" },
  { id: "compliance", labelEn: "Compliance", labelAr: "الامتثال", category: "General" },
  { id: "speed", labelEn: "Rated Speed", labelAr: "السرعة المقدرة", category: "Performance", unit: "m/s" },
  { id: "load", labelEn: "Rated Load", labelAr: "الحمولة المقدرة", category: "Performance", unit: "kg" },
  { id: "persons", labelEn: "Persons", labelAr: "عدد الأشخاص", category: "Performance" },
  { id: "rise", labelEn: "Travel / Rise", labelAr: "ارتفاع السفر", category: "Performance", unit: "m" },
  { id: "stops", labelEn: "Stops", labelAr: "المحطات", category: "Performance", isCalculated: true },
  { id: "floors_served", labelEn: "Floors Served", labelAr: "الطوابق المخدومة", category: "Performance" },
  { id: "openings", labelEn: "Openings", labelAr: "الفتحات", category: "Performance" },
  { id: "machine", labelEn: "Machine Type", labelAr: "نوع الماكينة", category: "Technical" },
  { id: "drive", labelEn: "Drive System", labelAr: "نظام التشغيل", category: "Technical" },
  { id: "roping", labelEn: "Roping", labelAr: "نظام الحبال", category: "Technical" },
  { id: "controller", labelEn: "Controller", labelAr: "وحدة التحكم", category: "Technical" },
  { id: "door_type", labelEn: "Door Type", labelAr: "نوع الباب", category: "Doors" },
  { id: "door_width", labelEn: "Door Width", labelAr: "عرض الباب", category: "Doors", unit: "mm" },
  { id: "door_height", labelEn: "Door Height", labelAr: "ارتفاع الباب", category: "Doors", unit: "mm" },
  { id: "car_width", labelEn: "Car Width (CW)", labelAr: "عرض الكابينة", category: "Cabin", unit: "mm" },
  { id: "car_depth", labelEn: "Car Depth (CD)", labelAr: "عمق الكابينة", category: "Cabin", unit: "mm" },
  { id: "car_height", labelEn: "Car Height (CH)", labelAr: "ارتفاع الكابينة", category: "Cabin", unit: "mm" },
  { id: "shaft_width", labelEn: "Shaft Width", labelAr: "عرض البئر", category: "Shaft", unit: "mm" },
  { id: "shaft_depth", labelEn: "Shaft Depth", labelAr: "عمق البئر", category: "Shaft", unit: "mm" },
  { id: "pit_depth", labelEn: "Pit Depth", labelAr: "عمق الحفرة", category: "Shaft", unit: "mm" },
  { id: "overhead", labelEn: "Overhead", labelAr: "الارتفاع العلوي", category: "Shaft", unit: "mm" },
  { id: "power", labelEn: "Power Supply", labelAr: "مصدر الطاقة", category: "Electrical" },
  { id: "lighting", labelEn: "Car Lighting", labelAr: "إضاءة الكابينة", category: "Finishes" },
  { id: "floor_finish", labelEn: "Floor Finish", labelAr: "تشطيب الأرضية", category: "Finishes" },
  { id: "wall_finish", labelEn: "Wall Finish", labelAr: "تشطيب الجدران", category: "Finishes" },
  { id: "ceiling", labelEn: "Ceiling Type", labelAr: "نوع السقف", category: "Finishes" },
];

export interface Template {
  id: string;
  name: string;
  brand: string;
  description: string;
  defaultSpecs: Record<string, string>;
  defaultAttributes: string[];
}

export const TEMPLATES: Template[] = [
  {
    id: "xizi-i520",
    name: "XIZI i520 Home Lift",
    brand: "XIZI",
    description: "Premium home elevator — 0.4 m/s, 250–400 kg",
    defaultSpecs: {
      brand: "XIZI",
      model: "i520",
      type: "Passenger",
      category: "Home Lift",
      speed: "0.4",
      load: "250-400",
      rise: "15",
      machine: "Gearless MRL",
      drive: "VVVF",
      door_type: "Automatic Telescopic",
      power: "220V / Single Phase",
    },
    defaultAttributes: ["brand", "model", "type", "category", "speed", "load", "rise", "stops", "floors_served", "machine", "drive", "door_type", "car_width", "car_depth", "car_height", "shaft_width", "shaft_depth", "pit_depth", "overhead", "power"],
  },
  {
    id: "doppler-focus",
    name: "Doppler Focus 2:1",
    brand: "Doppler",
    description: "EN81-20/50 compliant, Gearless MRL, 2:1 roping",
    defaultSpecs: {
      brand: "Doppler",
      model: "Focus",
      compliance: "EN81-20/50",
      machine: "Gearless MRL",
      roping: "2:1",
      drive: "VVVF",
      type: "Passenger",
      controller: "Microprocessor",
      door_type: "Automatic Centre Opening",
    },
    defaultAttributes: ["brand", "model", "compliance", "type", "speed", "load", "persons", "rise", "stops", "floors_served", "openings", "machine", "roping", "drive", "controller", "door_type", "door_width", "door_height", "car_width", "car_depth", "car_height", "shaft_width", "shaft_depth", "pit_depth", "overhead", "power"],
  },
  {
    id: "doppler-nano",
    name: "Doppler NANO",
    brand: "Doppler",
    description: "Dumbwaiter — 250/300 kg capacity",
    defaultSpecs: {
      brand: "Doppler",
      model: "NANO",
      category: "Dumbwaiter",
      type: "Service",
      load: "250/300",
      machine: "Geared",
      drive: "VVVF",
    },
    defaultAttributes: ["brand", "model", "category", "type", "speed", "load", "rise", "stops", "floors_served", "machine", "drive", "door_type", "car_width", "car_depth", "car_height", "shaft_width", "shaft_depth", "pit_depth", "overhead", "power"],
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
