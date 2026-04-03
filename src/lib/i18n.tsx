import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "ar";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // App
    "app.name": "ElevatorSpec",
    "app.tagline": "Quotation Configurator",

    // Sidebar
    "sidebar.templates": "Product Templates",
    "sidebar.projects": "Projects",
    "sidebar.newProject": "New Project",

    // Grid
    "grid.specification": "Specification",
    "grid.addLift": "Add Lift",
    "grid.exportWord": "Export Professional Word",
    "grid.addSpecRow": "Add Specification Row",
    "grid.searchAttrs": "Search attributes...",
    "grid.noMore": "No more attributes to add",
    "grid.lifts": "lifts",
    "grid.lift": "lift",
    "grid.specs": "specifications",

    // Categories
    "cat.General": "General",
    "cat.Performance": "Performance",
    "cat.Technical": "Technical",
    "cat.Doors": "Doors",
    "cat.Cabin": "Cabin",
    "cat.Shaft": "Shaft",
    "cat.Electrical": "Electrical",
    "cat.Finishes": "Finishes",
    "cat.Safety": "Safety",
    "cat.Features": "Features",

    // Attributes
    "attr.brand": "Brand",
    "attr.model": "Model",
    "attr.type": "Lift Type",
    "attr.category": "Category",
    "attr.compliance": "Compliance",
    "attr.speed": "Rated Speed",
    "attr.load": "Rated Load",
    "attr.persons": "Persons",
    "attr.rise": "Travel / Rise",
    "attr.stops": "Stops",
    "attr.floors_served": "Floors Served",
    "attr.openings": "Openings",
    "attr.machine": "Machine Type",
    "attr.drive": "Drive System",
    "attr.roping": "Roping",
    "attr.controller": "Controller",
    "attr.door_type": "Door Type",
    "attr.door_width": "Door Width",
    "attr.door_height": "Door Height",
    "attr.door_operator": "Door Operator",
    "attr.car_width": "Car Width (CW)",
    "attr.car_depth": "Car Depth (CD)",
    "attr.car_height": "Car Height (CH)",
    "attr.shaft_width": "Shaft Width (HW)",
    "attr.shaft_depth": "Shaft Depth (HD)",
    "attr.pit_depth": "Pit Depth",
    "attr.overhead": "Overhead",
    "attr.power": "Power Supply",
    "attr.lighting": "Car Lighting",
    "attr.floor_finish": "Floor Finish",
    "attr.wall_finish": "Wall Finish",
    "attr.ceiling": "Ceiling Type",
    "attr.handrail": "Handrail",
    "attr.cop": "COP (Car Operating Panel)",
    "attr.lop": "LOP (Landing Panel)",
    "attr.door_protection": "Door Protection",
    "attr.traction_machine": "Traction Machine",
    "attr.decoration_model": "Decoration Model",
    "attr.front_wall": "Front Wall",
    "attr.rear_wall": "Rear Wall",
    "attr.side_wall": "Side Wall",
    "attr.belt_type": "Belt / Rope Type",
    "attr.ard": "ARD (Auto Rescue)",
    "attr.intercom": "Intercom",

    // Language
    "lang.switch": "العربية",
  },
  ar: {
    "app.name": "ElevatorSpec",
    "app.tagline": "مُعدّ عروض الأسعار",

    "sidebar.templates": "قوالب المنتجات",
    "sidebar.projects": "المشاريع",
    "sidebar.newProject": "مشروع جديد",

    "grid.specification": "المواصفات",
    "grid.addLift": "إضافة مصعد",
    "grid.exportWord": "تصدير مستند احترافي",
    "grid.addSpecRow": "إضافة صف مواصفات",
    "grid.searchAttrs": "البحث في المواصفات...",
    "grid.noMore": "لا توجد مواصفات أخرى للإضافة",
    "grid.lifts": "مصاعد",
    "grid.lift": "مصعد",
    "grid.specs": "مواصفة",

    "cat.General": "عام",
    "cat.Performance": "الأداء",
    "cat.Technical": "تقني",
    "cat.Doors": "الأبواب",
    "cat.Cabin": "الكابينة",
    "cat.Shaft": "البئر",
    "cat.Electrical": "كهربائي",
    "cat.Finishes": "التشطيبات",
    "cat.Safety": "السلامة",
    "cat.Features": "الميزات",

    "attr.brand": "العلامة التجارية",
    "attr.model": "الموديل",
    "attr.type": "نوع المصعد",
    "attr.category": "الفئة",
    "attr.compliance": "الامتثال",
    "attr.speed": "السرعة المقدرة",
    "attr.load": "الحمولة المقدرة",
    "attr.persons": "عدد الأشخاص",
    "attr.rise": "ارتفاع السفر",
    "attr.stops": "المحطات",
    "attr.floors_served": "الطوابق المخدومة",
    "attr.openings": "الفتحات",
    "attr.machine": "نوع الماكينة",
    "attr.drive": "نظام التشغيل",
    "attr.roping": "نظام الحبال",
    "attr.controller": "وحدة التحكم",
    "attr.door_type": "نوع الباب",
    "attr.door_width": "عرض الباب",
    "attr.door_height": "ارتفاع الباب",
    "attr.door_operator": "مُشغّل الباب",
    "attr.car_width": "عرض الكابينة",
    "attr.car_depth": "عمق الكابينة",
    "attr.car_height": "ارتفاع الكابينة",
    "attr.shaft_width": "عرض البئر",
    "attr.shaft_depth": "عمق البئر",
    "attr.pit_depth": "عمق الحفرة",
    "attr.overhead": "الارتفاع العلوي",
    "attr.power": "مصدر الطاقة",
    "attr.lighting": "إضاءة الكابينة",
    "attr.floor_finish": "تشطيب الأرضية",
    "attr.wall_finish": "تشطيب الجدران",
    "attr.ceiling": "نوع السقف",
    "attr.handrail": "الدرابزين",
    "attr.cop": "لوحة تشغيل الكابينة",
    "attr.lop": "لوحة الطابق",
    "attr.door_protection": "حماية الباب",
    "attr.traction_machine": "ماكينة الجر",
    "attr.decoration_model": "موديل الديكور",
    "attr.front_wall": "الجدار الأمامي",
    "attr.rear_wall": "الجدار الخلفي",
    "attr.side_wall": "الجدار الجانبي",
    "attr.belt_type": "نوع الحزام / الحبل",
    "attr.ard": "جهاز الإنقاذ التلقائي",
    "attr.intercom": "الاتصال الداخلي",

    "lang.switch": "English",
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[lang][key] || translations.en[key] || key;
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
