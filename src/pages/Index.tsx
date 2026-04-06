import React, { useState } from "react";
import { ELEVATOR_SPECS } from "@/data/elevatorSpecs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [hw, setHw] = useState<number | "">("");
  const [hd, setHd] = useState<number | "">("");

  const currentSpec = ELEVATOR_SPECS.find((s) => s.id === selectedId);

  const carWidth = currentSpec && hw ? hw - currentSpec.cwDelta : null;
  const carDepth = currentSpec && hd ? hd - currentSpec.cdDelta : null;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Lift Design Studio
          </h1>
          <p className="text-slate-500 font-medium">
            Professional dimension calculator for UAE engineering standards.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Inputs */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Searchable Combobox */}
              <div className="space-y-2">
                <Label>Elevator Model (Search by KG, speed, or name)</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between bg-white text-left font-normal"
                    >
                      {selectedId
                        ? ELEVATOR_SPECS.find((s) => s.id === selectedId)?.model
                        : "Search model (e.g. 630)..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Type to search models..." />
                      <CommandList>
                        <CommandEmpty>No lift model found.</CommandEmpty>
                        <CommandGroup heading="Passenger Lifts">
                          {ELEVATOR_SPECS.filter(s => s.category === "PASSENGER LIFT").map((spec) => (
                            <CommandItem
                              key={spec.id}
                              value={spec.model} // Command search looks at this value
                              onSelect={() => {
                                setSelectedId(spec.id);
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedId === spec.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {spec.model}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                        <CommandGroup heading="Home Lifts">
                          {ELEVATOR_SPECS.filter(s => s.category === "HOME LIFT").map((spec) => (
                            <CommandItem
                              key={spec.id}
                              value={spec.model}
                              onSelect={() => {
                                setSelectedId(spec.id);
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedId === spec.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {spec.model}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hw">Shaft Width (HW)</Label>
                  <Input 
                    id="hw" 
                    type="number" 
                    placeholder="mm" 
                    value={hw} 
                    onChange={(e) => setHw(e.target.value === "" ? "" : Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hd">Shaft Depth (HD)</Label>
                  <Input 
                    id="hd" 
                    type="number" 
                    placeholder="mm" 
                    value={hd} 
                    onChange={(e) => setHd(e.target.value === "" ? "" : Number(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Results */}
          <Card className="shadow-xl border-0 bg-primary/5 ring-1 ring-primary/10">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                Calculation Result
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!currentSpec || !hw || !hd ? (
                <div className="h-48 flex flex-col items-center justify-center text-slate-400 text-center p-4">
                  <Search className="h-10 w-10 mb-2 opacity-20" />
                  <p className="text-sm">Select a model and enter shaft dimensions to view the car layout</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Car Width (CW)</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-black text-slate-900">{carWidth}</p>
                        <p className="text-slate-400 font-medium">mm</p>
                      </div>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Car Depth (CD)</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-black text-slate-900">{carDepth}</p>
                        <p className="text-slate-400 font-medium">mm</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded flex gap-3">
                    <div className="text-sm text-amber-800">
                      <span className="font-bold block mb-1 underline">Engineering Formula Applied:</span>
                      <p>CW = HW - {currentSpec.cwDelta}mm</p>
                      <p>CD = HD - {currentSpec.cdDelta}mm</p>
                      {currentSpec.note && <p className="mt-2 text-amber-900 font-medium italic">"{currentSpec.note}"</p>}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
