import { useState, useCallback, useMemo } from "react";
import { Plus, Trash2, Search, X, FileDown, Columns } from "lucide-react";
import {
  ALL_ATTRIBUTES,
  type SpecAttribute,
  type ElevatorColumn,
  generateFloorString,
  generateId,
} from "@/lib/elevator-types";
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
  const [showAttrSearch, setShowAttrSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
      onUpdateAttributes([...activeAttributes, attrId]);
      setSearchTerm("");
    },
    [activeAttributes, onUpdateAttributes]
  );

  const removeAttribute = useCallback(
    (attrId: string) => {
      onUpdateAttributes(activeAttributes.filter((id) => id !== attrId));
    },
    [activeAttributes, onUpdateAttributes]
  );

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

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border/50">
        <div>
          <h2 className="text-lg font-semibold text-foreground tracking-tight">{projectName}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {elevators.length} {elevators.length !== 1 ? t("grid.lifts") : t("grid.lift")} · {activeAttributes.length} {t("grid.specs")}
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
                <th key={el.id} className="px-3 py-3 min-w-[160px]">
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
            {categories.map((cat) => (
              <>
                <tr key={`cat-${cat.name}`} className="bg-secondary/30">
                  <td
                    colSpan={1 + elevators.length}
                    className="px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-primary"
                  >
                    {getCatLabel(cat.name)}
                  </td>
                </tr>
                {cat.attrs.map((attr) => (
                  <tr
                    key={attr.id}
                    className="group border-b border-border/20 hover:bg-accent/30 transition-colors"
                  >
                    <td className="px-4 py-2.5">
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
                      <td key={el.id} className="px-3 py-2.5">
                        <input
                          value={el.specs[attr.id] || ""}
                          onChange={(e) => handleSpecChange(el.id, attr.id, e.target.value)}
                          placeholder="—"
                          readOnly={attr.id === "floors_served"}
                          className={`w-full bg-secondary/50 border border-border/30 rounded-md px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all ${
                            attr.id === "floors_served" ? "bg-accent/50 cursor-default" : ""
                          }`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

        {/* Add Row */}
        <div className="px-4 py-3 border-t border-border/20">
          {!showAttrSearch ? (
            <button
              onClick={() => setShowAttrSearch(true)}
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
                <button onClick={() => { setShowAttrSearch(false); setSearchTerm(""); }}>
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
