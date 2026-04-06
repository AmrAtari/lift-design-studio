import { useState, useCallback, useMemo } from "react";
import { Plus, Trash2, Search, X, FileDown, Columns, ChevronDown, Lightbulb } from "lucide-react";
import {
  ALL_ATTRIBUTES,
  type SpecAttribute,
  type ElevatorColumn,
  generateFloorString,
  generateId,
} from "@/lib/elevator-types";
import { findMatchingProducts, getAttributeHint } from "@/lib/product-reference";
import { useI18n } from "@/lib/i18n";

interface SpecGridProps {
  elevators: ElevatorColumn[];
  activeAttributes: string[];
  onUpdateElevators: (elevators: ElevatorColumn[]) => void;
  onUpdateAttributes: (attrs: string[]) => void;
  projectName: string;
}

export function SpecGrid({
  elevators,
  activeAttributes,
  onUpdateElevators,
  onUpdateAttributes,
  projectName,
}: SpecGridProps) {
  const [sectionSearchOpen, setSectionSearchOpen] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const { t, lang } = useI18n();

  const attrMap = useMemo(() => {
    const map: Record<string, SpecAttribute> = {};
    ALL_ATTRIBUTES.forEach((a) => (map[a.id] = a));
    return map;
  }, []);

  const activeAttrObjects = useMemo(
    () => activeAttributes.map((id) => attrMap[id]).filter(Boolean),
    [activeAttributes, attrMap]
  );

  const getAttrLabel = useCallback((id: string) => t(`attr.${id}`), [t]);
  const getCatLabel = useCallback((cat: string) => t(`cat.${cat}`), [t]);

  // Compute product hints based on first elevator's shaft/capacity/speed values
  const productHints = useMemo(() => {
    if (elevators.length === 0) return [];
    const specs = elevators[0].specs;
    const sw = parseInt(specs.shaft_width);
    const sd = parseInt(specs.shaft_depth);
    const oh = parseInt(specs.overhead);
    const pd = parseInt(specs.pit_depth);
    const cap = parseInt(specs.load);
    const spd = parseFloat(specs.speed);
    return findMatchingProducts(
      isNaN(sw) ? undefined : sw,
      isNaN(sd) ? undefined : sd,
      isNaN(oh) ? undefined : oh,
      isNaN(pd) ? undefined : pd,
      isNaN(cap) ? undefined : cap,
      isNaN(spd) ? undefined : spd,
    );
  }, [elevators]);

  const availableForSection = useCallback(
    (category: string) =>
      ALL_ATTRIBUTES.filter(
        (a) =>
          a.category === category &&
          !activeAttributes.includes(a.id) &&
          (searchTerm === "" ||
            t(`attr.${a.id}`).toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    [activeAttributes, searchTerm, t]
  );

  // Global add (all categories)
  const availableToAdd = useMemo(
    () =>
      ALL_ATTRIBUTES.filter(
        (a) =>
          !activeAttributes.includes(a.id) &&
          (t(`attr.${a.id}`).toLowerCase().includes(searchTerm.toLowerCase()) ||
            a.category.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    [activeAttributes, searchTerm, t]
  );

  const handleSpecChange = useCallback(
    (elevatorId: string, attrId: string, value: string) => {
      const updated = elevators.map((el) => {
        if (el.id !== elevatorId) return el;
        const newSpecs = { ...el.specs, [attrId]: value };
        if (attrId === "stops") {
          const stops = parseInt(value, 10);
          if (!isNaN(stops) && stops > 0) {
            newSpecs.floors_served = generateFloorString(stops);
          }
        }
        return { ...el, specs: newSpecs };
      });
      onUpdateElevators(updated);
    },
    [elevators, onUpdateElevators]
  );

  const addElevator = useCallback(() => {
    const num = elevators.length + 1;
    const prefix = num === 1 ? "PL" : num === 2 ? "FSL" : "SL";
    const newEl: ElevatorColumn = {
      id: generateId(),
      name: `${prefix}0${num}`,
      specs: {},
    };
    onUpdateElevators([...elevators, newEl]);
  }, [elevators, onUpdateElevators]);

  const removeElevator = useCallback(
    (id: string) => {
      if (elevators.length <= 1) return;
      onUpdateElevators(elevators.filter((el) => el.id !== id));
    },
    [elevators, onUpdateElevators]
  );

  const addAttribute = useCallback(
    (attrId: string) => {
      // Insert after the last attribute of the same category
      const attr = attrMap[attrId];
      if (!attr) return;
      const lastIdx = activeAttributes.reduce((last, id, idx) => {
        const a = attrMap[id];
        if (a && a.category === attr.category) return idx;
        return last;
      }, -1);
      if (lastIdx >= 0) {
        const newAttrs = [...activeAttributes];
        newAttrs.splice(lastIdx + 1, 0, attrId);
        onUpdateAttributes(newAttrs);
      } else {
        onUpdateAttributes([...activeAttributes, attrId]);
      }
      setSearchTerm("");
    },
    [activeAttributes, onUpdateAttributes, attrMap]
  );

  const removeAttribute = useCallback(
    (attrId: string) => {
      onUpdateAttributes(activeAttributes.filter((id) => id !== attrId));
    },
    [activeAttributes, onUpdateAttributes]
  );

  const toggleSection = useCallback((catName: string) => {
    setCollapsedSections((prev) => {
      const next = new Set(prev);
      if (next.has(catName)) next.delete(catName);
      else next.add(catName);
      return next;
    });
  }, []);

  const handleExport = () => {
    alert(lang === "ar"
      ? "تصدير إلى مستند Word احترافي — الميزة قادمة قريباً"
      : "Export to Professional Word document — feature coming soon.");
  };

  const categories = useMemo(() => {
    const cats: { name: string; attrs: SpecAttribute[] }[] = [];
    const catMap = new Map<string, SpecAttribute[]>();
    activeAttrObjects.forEach((a) => {
      if (!catMap.has(a.category)) catMap.set(a.category, []);
      catMap.get(a.category)!.push(a);
    });
    catMap.forEach((attrs, name) => cats.push({ name, attrs }));
    return cats;
  }, [activeAttrObjects]);

  const renderInput = (attr: SpecAttribute, el: ElevatorColumn) => {
    const value = el.specs[attr.id] || "";
    const isReadOnly = attr.id === "floors_served";
    const hint = getAttributeHint(attr.id, productHints, lang);

    if (attr.options && attr.options.length > 0) {
      return (
        <div>
          <select
            value={value}
            onChange={(e) => handleSpecChange(el.id, attr.id, e.target.value)}
            className="w-full bg-secondary/50 border border-border/30 rounded-md px-2 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer"
          >
            <option value="">{t("grid.selectOption")}</option>
            {attr.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {hint && (
            <div className="flex items-center gap-1 mt-0.5">
              <Lightbulb className="w-2.5 h-2.5 text-primary/70 flex-shrink-0" />
              <span className="text-[9px] text-primary/70 truncate">{hint}</span>
            </div>
          )}
        </div>
      );
    }

    return (
      <div>
        <input
          value={value}
          onChange={(e) => handleSpecChange(el.id, attr.id, e.target.value)}
          placeholder="—"
          readOnly={isReadOnly}
          className={`w-full bg-secondary/50 border border-border/30 rounded-md px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all ${
            isReadOnly ? "bg-accent/50 cursor-default" : ""
          }`}
        />
        {hint && (
          <div className="flex items-center gap-1 mt-0.5">
            <Lightbulb className="w-2.5 h-2.5 text-primary/70 flex-shrink-0" />
            <span className="text-[9px] text-primary/70 truncate">{hint}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border/50">
        <div>
          <h2 className="text-lg font-semibold text-foreground tracking-tight">{projectName}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {elevators.length} {elevators.length !== 1 ? t("grid.lifts") : t("grid.lift")} · {activeAttributes.length} {t("grid.specs")}
            {productHints.length > 0 && (
              <span className="text-primary ms-2">
                · {productHints.length} {lang === "ar" ? "منتج متوافق" : "matching products"}
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={addElevator}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-colors luxury-border"
          >
            <Columns className="w-3.5 h-3.5" />
            {t("grid.addLift")}
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors luxury-glow"
          >
            <FileDown className="w-3.5 h-3.5" />
            {t("grid.exportWord")}
          </button>
        </div>
      </header>

      {/* Grid */}
      <div className="flex-1 overflow-auto scrollbar-thin">
        <table className="w-full border-collapse min-w-[600px]">
          <thead className="sticky top-0 z-10">
            <tr className="bg-card border-b border-border/50">
              <th className="text-start px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground w-56 min-w-[224px]">
                {t("grid.specification")}
              </th>
              {elevators.map((el) => (
                <th key={el.id} className="px-3 py-3 min-w-[180px]">
                  <div className="flex items-center justify-between">
                    <input
                      value={el.name}
                      onChange={(e) => {
                        const updated = elevators.map((x) =>
                          x.id === el.id ? { ...x, name: e.target.value } : x
                        );
                        onUpdateElevators(updated);
                      }}
                      className="bg-transparent text-xs font-semibold text-foreground border-none outline-none w-24 focus:ring-1 focus:ring-primary/50 rounded px-1 py-0.5"
                    />
                    {elevators.length > 1 && (
                      <button
                        onClick={() => removeElevator(el.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => {
              const isCollapsed = collapsedSections.has(cat.name);
              const sectionAvailable = availableForSection(cat.name);
              const isSectionSearchOpen = sectionSearchOpen === cat.name;

              return (
                <React.Fragment key={`cat-${cat.name}`}>
                  {/* Category Header */}
                  <tr className="bg-secondary/30 cursor-pointer select-none" onClick={() => toggleSection(cat.name)}>
                    <td
                      colSpan={1 + elevators.length}
                      className="px-4 py-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                          {getCatLabel(cat.name)}
                        </span>
                        <div className="flex items-center gap-2">
                          {sectionAvailable.length > 0 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSectionSearchOpen(isSectionSearchOpen ? null : cat.name);
                                setSearchTerm("");
                              }}
                              className="text-muted-foreground hover:text-primary transition-colors p-0.5"
                              title={t("grid.addToSection")}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          )}
                          <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${isCollapsed ? (lang === "ar" ? "rotate-90" : "-rotate-90") : ""}`} />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Section Search */}
                  {isSectionSearchOpen && !isCollapsed && (
                    <tr>
                      <td colSpan={1 + elevators.length} className="px-4 py-2">
                        <div className="max-w-md animate-fade-in">
                          <div className="flex items-center gap-2 bg-secondary/50 border border-border/30 rounded-md px-3 py-1.5 mb-1.5">
                            <Search className="w-3 h-3 text-muted-foreground" />
                            <input
                              autoFocus
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              placeholder={t("grid.searchAttrs")}
                              className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground/50 outline-none flex-1"
                            />
                            <button onClick={() => { setSectionSearchOpen(null); setSearchTerm(""); }}>
                              <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                            </button>
                          </div>
                          <div className="max-h-36 overflow-y-auto scrollbar-thin space-y-0.5">
                            {sectionAvailable.map((a) => (
                              <button
                                key={a.id}
                                onClick={() => { addAttribute(a.id); }}
                                className="w-full text-start px-3 py-1.5 rounded-md hover:bg-accent/50 transition-colors"
                              >
                                <span className="text-xs text-foreground">{getAttrLabel(a.id)}</span>
                              </button>
                            ))}
                            {sectionAvailable.length === 0 && (
                              <p className="text-xs text-muted-foreground text-center py-2">{t("grid.noMore")}</p>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}

                  {/* Attributes */}
                  {!isCollapsed && cat.attrs.map((attr) => (
                    <tr
                      key={attr.id}
                      className="group border-b border-border/20 hover:bg-accent/30 transition-colors"
                    >
                      <td className="px-4 py-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-medium text-foreground">{getAttrLabel(attr.id)}</span>
                            {attr.unit && (
                              <span className="text-[10px] text-muted-foreground ms-1">({attr.unit})</span>
                            )}
                          </div>
                          <button
                            onClick={() => removeAttribute(attr.id)}
                            className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all p-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      {elevators.map((el) => (
                        <td key={el.id} className="px-3 py-2">
                          {renderInput(attr, el)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>

        {/* Global Add Row */}
        <div className="px-4 py-3 border-t border-border/20">
          {sectionSearchOpen !== "__global" ? (
            <button
              onClick={() => { setSectionSearchOpen("__global"); setSearchTerm(""); }}
              className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              {t("grid.addSpecRow")}
            </button>
          ) : (
            <div className="max-w-md animate-fade-in">
              <div className="flex items-center gap-2 bg-secondary/50 border border-border/30 rounded-md px-3 py-2 mb-2">
                <Search className="w-3.5 h-3.5 text-muted-foreground" />
                <input
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t("grid.searchAttrs")}
                  className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground/50 outline-none flex-1"
                />
                <button onClick={() => { setSectionSearchOpen(null); setSearchTerm(""); }}>
                  <X className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
                </button>
              </div>
              <div className="max-h-48 overflow-y-auto scrollbar-thin space-y-0.5">
                {availableToAdd.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => addAttribute(a.id)}
                    className="w-full text-start px-3 py-2 rounded-md hover:bg-accent/50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-xs text-foreground">{getAttrLabel(a.id)}</span>
                    <span className="text-[10px] text-muted-foreground">{getCatLabel(a.category)}</span>
                  </button>
                ))}
                {availableToAdd.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-3">{t("grid.noMore")}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
