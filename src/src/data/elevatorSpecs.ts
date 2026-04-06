export interface ElevatorSpec {
  id: string;
  category: "PASSENGER LIFT" | "HOME LIFT";
  model: string;
  cwDelta: number;
  cdDelta: number;
  note?: string;
}

export const ELEVATOR_SPECS: ElevatorSpec[] = [
  {
    id: "spec-1",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 630KG-680KG counterweight rear",
    cwDelta: 450,
    cdDelta: 650,
    note: "The width and depth of the car are 50 times"
  },
  {
    id: "spec-2",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 800KG-1050KG, rear counterweight, speed ≤1.75",
    cwDelta: 450,
    cdDelta: 600,
    note: ""
  },
  {
    id: "spec-3",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 800KG-1050KG counterweight rear-mounted, speed ≤2.0-3.0",
    cwDelta: 550,
    cdDelta: 700,
    note: ""
  },
  {
    id: "spec-4",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 1150KG-1600KG, rear counterweight, speed ≤1.75",
    cwDelta: 550,
    cdDelta: 750,
    note: ""
  },
  {
    id: "spec-5",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 1150KG-1600KG, rear counterweight, speed ≤2.0-3.0",
    cwDelta: 550,
    cdDelta: 750,
    note: ""
  },
  {
    id: "spec-6",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 630KG-680KG side-mounted counterweight",
    cwDelta: 750,
    cdDelta: 400,
    note: "The width and depth of the car are 50 times"
  },
  {
    id: "spec-7",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 800KG-1050KG sideways counterweight, speed ≤1.75",
    cwDelta: 750,
    cdDelta: 400,
    note: ""
  },
  {
    id: "spec-8",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 800KG-1050KG counterweight sideways, speed ≤2.0-3.0",
    cwDelta: 900,
    cdDelta: 450,
    note: ""
  },
  {
    id: "spec-9",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 1150KG-1600KG sideways counterweight, speed ≤1.75",
    cwDelta: 750,
    cdDelta: 450,
    note: ""
  },
  {
    id: "spec-10",
    category: "PASSENGER LIFT",
    model: "UN-Victor R 1150KG-1600KG sideways counterweight, speed ≤2.0-3.0",
    cwDelta: 900,
    cdDelta: 450,
    note: ""
  },
  {
    id: "spec-11",
    category: "PASSENGER LIFT",
    model: "UN-Victor mrl Ⅲ 1050KG and below",
    cwDelta: 650,
    cdDelta: 400,
    note: ""
  },
  {
    id: "spec-12",
    category: "PASSENGER LIFT",
    model: "UN-Victor mrl Ⅲ 1150KG-2500KG",
    cwDelta: 800,
    cdDelta: 400,
    note: ""
  },
  {
    id: "spec-13",
    category: "PASSENGER LIFT",
    model: "UN-Victor mrl T",
    cwDelta: 550,
    cdDelta: 0,
    note: "Min T-type depth 1700mm, width 1050mm"
  },
  {
    id: "spec-14",
    category: "PASSENGER LIFT",
    model: "UN-Victor mrl Ⅰ 1150KG-1600KG",
    cwDelta: 900,
    cdDelta: 500,
    note: ""
  },
  {
    id: "spec-15",
    category: "PASSENGER LIFT",
    model: "Passenger elevator center through door",
    cwDelta: 570,
    cdDelta: 0,
    note: ""
  },
  {
    id: "spec-16",
    category: "PASSENGER LIFT",
    model: "Passenger elevator side door",
    cwDelta: 650,
    cdDelta: 0,
    note: ""
  },
  {
    id: "spec-19",
    category: "HOME LIFT",
    model: "Villa i520Pro-Ⅱ/i520S-G 250KG-400KG, side-mounted CW, 0.4-0.63m/s",
    cwDelta: 500,
    cdDelta: 250,
    note: ""
  },
  {
    id: "spec-20",
    category: "HOME LIFT",
    model: "Villa i520Pro-Ⅱ 250KG-400KG, side-mounted CW, speed 1.0m/s",
    cwDelta: 550,
    cdDelta: 300,
    note: ""
  },
  {
    id: "spec-21",
    category: "HOME LIFT",
    model: "Villa i520Pro-Ⅱ/i520S-G 250KG-400KG, rear CW, 0.4-0.63m/s",
    cwDelta: 350,
    cdDelta: 500,
    note: ""
  },
  {
    id: "spec-22",
    category: "HOME LIFT",
    model: "Villa elevator i520Pro-Ⅱ 250KG-400KG, rear CW, speed 1.0m/s",
    cwDelta: 400,
    cdDelta: 500,
    note: ""
  },
  {
    id: "spec-23",
    category: "HOME LIFT",
    model: "Villa staircase center through door",
    cwDelta: 370,
    cdDelta: 0,
    note: ""
  },
  {
    id: "spec-24",
    category: "HOME LIFT",
    model: "Villa staircase side opening / center split double fold",
    cwDelta: 530,
    cdDelta: 0,
    note: ""
  }
];
