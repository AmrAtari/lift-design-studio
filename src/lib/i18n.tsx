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
    "app.name": "ElevatorSpec",
    "app.tagline": "Quotation Configurator",
    "sidebar.templates": "Product Templates",
    "sidebar.projects": "Projects",
    "sidebar.newProject": "New Project",
    "grid.specification": "Specification",
    "grid.addLift": "Add Lift",
    "grid.exportWord": "Export Professional Word",
    "grid.addSpecRow": "Add Specification Row",
    "grid.addToSection": "Add to this section",
    "grid.searchAttrs": "Search attributes...",
    "grid.noMore": "No more attributes to add",
    "grid.lifts": "lifts",
    "grid.lift": "lift",
    "grid.specs": "specifications",
    "grid.selectOption": "Select...",
    "grid.hint": "Hint",

    "cat.Main": "Main",
    "cat.Shaft": "Shaft Dimensions",
    "cat.Cabin": "Lift Car",
    "cat.Doors": "Doors",
    "cat.Landing Doors": "Landing Door Finishes",
    "cat.Signalisation": "Car Signalisation",
    "cat.Landing Call": "Landing Call Station",
    "cat.Hall Indicators": "Hall Lanterns / Indicators",
    "cat.Features": "Extra Features",
    // Keep old ones for backward compat
    "cat.General": "General",
    "cat.Performance": "Performance",
    "cat.Technical": "Technical",
    "cat.Electrical": "Electrical",
    "cat.Finishes": "Finishes",
    "cat.Safety": "Safety",

    "attr.lift_designation": "Lift Designation",
    "attr.quantity": "Quantity of Lift",
    "attr.brand": "Brand",
    "attr.model": "Model",
    "attr.type": "Lift Use",
    "attr.category": "Category",
    "attr.compliance": "Compliance",
    "attr.speed": "Rated Speed",
    "attr.load": "Capacity",
    "attr.persons": "Persons",
    "attr.rise": "Travel / Rise",
    "attr.stops": "Stops",
    "attr.floors_served": "Front Floors Served Name",
    "attr.rear_floors_served": "Rear Floors Served Name",
    "attr.openings": "Openings",
    "attr.machine": "Machine Type",
    "attr.machine_location": "Machine Location",
    "attr.drive": "Drive System",
    "attr.roping": "Roping",
    "attr.controller": "Control System",
    "attr.operation": "Operation",
    "attr.power": "Power Supply",
    "attr.lighting_supply": "Lighting Supply",
    "attr.traction_machine": "Traction Machine",
    "attr.belt_type": "Belt / Rope Type",

    "attr.shaft_width": "Shaft Width (HW)",
    "attr.shaft_depth": "Shaft Depth (HD)",
    "attr.pit_depth": "Pit Depth",
    "attr.overhead": "Overhead Height",
    "attr.travel": "Travel",
    "attr.shaft_materials": "Shaft Materials",

    "attr.car_width": "Car Width (CW)",
    "attr.car_depth": "Car Depth (CD)",
    "attr.car_height": "Car Height (CH)",
    "attr.decoration_model": "Decoration Model",
    "attr.side_wall": "Side Wall Finishes",
    "attr.rear_wall": "Rear Wall Finishes",
    "attr.front_wall": "Front Wall Material",
    "attr.car_door_finish": "Car Door Finish",
    "attr.ceiling": "Car Ceiling Finish",
    "attr.mirror": "Mirror",
    "attr.handrail": "Handrail",
    "attr.floor_finish": "Flooring",
    "attr.fan": "Fan",
    "attr.car_sill": "Car Sill",
    "attr.id_weight": "ID Weight Allowance",
    "attr.lighting": "Car Lighting",

    "attr.door_type": "Door Type",
    "attr.door_width": "Door Width",
    "attr.door_height": "Door Height",
    "attr.door_operator": "Door Operator",
    "attr.door_protection": "Door Protection",

    "attr.landing_door_main": "Main Floor",
    "attr.landing_door_other": "Other Floors",
    "attr.landing_jamb_main": "Jambs - Main Floor",
    "attr.landing_jamb_other": "Jambs - Other Floors",
    "attr.landing_sill": "Landing Sill Material",

    "attr.cop": "Car Operating Panel",
    "attr.cop_location": "COP Location",
    "attr.cop_qty": "Number of COP",
    "attr.cop_faceplate": "COP Faceplate",
    "attr.cop_button_type": "COP Button Type",
    "attr.cop_position_indicator": "Position Indicator",
    "attr.intercom": "Intercom",
    "attr.call_registered_buzzer": "Call Registered Buzzer",
    "attr.overload_indication": "Overload Indication",

    "attr.lop": "Landing Operating Panel",
    "attr.lcs_main_floor": "LCS Main Floor",
    "attr.lcs_other_floors": "LCS Other Floors",
    "attr.lcs_faceplate": "LCS Faceplate",
    "attr.lcs_button_type": "LCS Button Type",

    "attr.hall_lantern_main": "Main Floor Model",
    "attr.hall_lantern_other": "Other Floors Model",
    "attr.hall_faceplate": "Hall Faceplate",

    "attr.arrival_chime": "Arrival Chime",
    "attr.ard": "ARD (Auto Rescue Device)",
    "attr.emergency_lighting": "Emergency Lighting",
    "attr.fireman_switch": "Fireman Switch & Service",
    "attr.voice_announcement": "Voice Announcement",
    "attr.smart_monitoring": "Smart Monitoring System",
    "attr.regenerative_drive": "Regenerative Drive",
    "attr.cmcs": "CMCS",
    "attr.fire_rated_door": "Fire Rating Door",
    "attr.seismic_design": "Seismic Design Category",

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
    "grid.addToSection": "إضافة لهذا القسم",
    "grid.searchAttrs": "البحث في المواصفات...",
    "grid.noMore": "لا توجد مواصفات أخرى للإضافة",
    "grid.lifts": "مصاعد",
    "grid.lift": "مصعد",
    "grid.specs": "مواصفة",
    "grid.selectOption": "اختر...",
    "grid.hint": "تلميح",

    "cat.Main": "رئيسي",
    "cat.Shaft": "أبعاد البئر",
    "cat.Cabin": "كابينة المصعد",
    "cat.Doors": "الأبواب",
    "cat.Landing Doors": "تشطيبات أبواب الطوابق",
    "cat.Signalisation": "إشارات الكابينة",
    "cat.Landing Call": "محطة استدعاء الطوابق",
    "cat.Hall Indicators": "مؤشرات الردهة",
    "cat.Features": "ميزات إضافية",
    "cat.General": "عام",
    "cat.Performance": "الأداء",
    "cat.Technical": "تقني",
    "cat.Electrical": "كهربائي",
    "cat.Finishes": "التشطيبات",
    "cat.Safety": "السلامة",

    "attr.lift_designation": "تسمية المصعد",
    "attr.quantity": "عدد المصاعد",
    "attr.brand": "العلامة التجارية",
    "attr.model": "الموديل",
    "attr.type": "استخدام المصعد",
    "attr.category": "الفئة",
    "attr.compliance": "الامتثال",
    "attr.speed": "السرعة المقدرة",
    "attr.load": "الحمولة",
    "attr.persons": "عدد الأشخاص",
    "attr.rise": "ارتفاع السفر",
    "attr.stops": "المحطات",
    "attr.floors_served": "أسماء الطوابق الأمامية",
    "attr.rear_floors_served": "أسماء الطوابق الخلفية",
    "attr.openings": "الفتحات",
    "attr.machine": "نوع الماكينة",
    "attr.machine_location": "موقع الماكينة",
    "attr.drive": "نظام التشغيل",
    "attr.roping": "نظام الحبال",
    "attr.controller": "نظام التحكم",
    "attr.operation": "التشغيل",
    "attr.power": "مصدر الطاقة",
    "attr.lighting_supply": "مصدر الإضاءة",
    "attr.traction_machine": "ماكينة الجر",
    "attr.belt_type": "نوع الحزام / الحبل",

    "attr.shaft_width": "عرض البئر",
    "attr.shaft_depth": "عمق البئر",
    "attr.pit_depth": "عمق الحفرة",
    "attr.overhead": "الارتفاع العلوي",
    "attr.travel": "مسافة السفر",
    "attr.shaft_materials": "مواد البئر",

    "attr.car_width": "عرض الكابينة",
    "attr.car_depth": "عمق الكابينة",
    "attr.car_height": "ارتفاع الكابينة",
    "attr.decoration_model": "موديل الديكور",
    "attr.side_wall": "تشطيب الجدار الجانبي",
    "attr.rear_wall": "تشطيب الجدار الخلفي",
    "attr.front_wall": "مادة الجدار الأمامي",
    "attr.car_door_finish": "تشطيب باب الكابينة",
    "attr.ceiling": "سقف الكابينة",
    "attr.mirror": "المرآة",
    "attr.handrail": "الدرابزين",
    "attr.floor_finish": "الأرضية",
    "attr.fan": "المروحة",
    "attr.car_sill": "عتبة الكابينة",
    "attr.id_weight": "وزن التشطيبات المسموح",
    "attr.lighting": "إضاءة الكابينة",

    "attr.door_type": "نوع الباب",
    "attr.door_width": "عرض الباب",
    "attr.door_height": "ارتفاع الباب",
    "attr.door_operator": "مُشغّل الباب",
    "attr.door_protection": "حماية الباب",

    "attr.landing_door_main": "الطابق الرئيسي",
    "attr.landing_door_other": "الطوابق الأخرى",
    "attr.landing_jamb_main": "إطارات - الطابق الرئيسي",
    "attr.landing_jamb_other": "إطارات - الطوابق الأخرى",
    "attr.landing_sill": "مادة عتبة الطابق",

    "attr.cop": "لوحة تشغيل الكابينة",
    "attr.cop_location": "موقع لوحة التشغيل",
    "attr.cop_qty": "عدد لوحات التشغيل",
    "attr.cop_faceplate": "واجهة لوحة التشغيل",
    "attr.cop_button_type": "نوع الأزرار",
    "attr.cop_position_indicator": "مؤشر الموضع",
    "attr.intercom": "الاتصال الداخلي",
    "attr.call_registered_buzzer": "جرس تسجيل الاستدعاء",
    "attr.overload_indication": "مؤشر الحمولة الزائدة",

    "attr.lop": "لوحة الطابق",
    "attr.lcs_main_floor": "محطة الطابق الرئيسي",
    "attr.lcs_other_floors": "محطة الطوابق الأخرى",
    "attr.lcs_faceplate": "واجهة محطة الاستدعاء",
    "attr.lcs_button_type": "نوع أزرار الاستدعاء",

    "attr.hall_lantern_main": "موديل الطابق الرئيسي",
    "attr.hall_lantern_other": "موديل الطوابق الأخرى",
    "attr.hall_faceplate": "واجهة مؤشر الردهة",

    "attr.arrival_chime": "جرس الوصول",
    "attr.ard": "جهاز الإنقاذ التلقائي",
    "attr.emergency_lighting": "إضاءة الطوارئ",
    "attr.fireman_switch": "مفتاح رجال الإطفاء",
    "attr.voice_announcement": "الإعلان الصوتي",
    "attr.smart_monitoring": "نظام المراقبة الذكي",
    "attr.regenerative_drive": "نظام الطاقة المرتجعة",
    "attr.cmcs": "محطة القيادة المركزية",
    "attr.fire_rated_door": "تصنيف الباب للحريق",
    "attr.seismic_design": "فئة التصميم الزلزالي",

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
