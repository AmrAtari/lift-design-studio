import React, { useState } from "react";
import { ELEVATOR_SPECS } from "@/data/elevatorSpecs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const [hw, setHw] = useState<number | "">("");
  const [hd, setHd] = useState<number | "">("");

  const currentSpec = ELEVATOR_SPECS.find(s => s.id === selectedId);

  const carWidth = currentSpec && hw ? hw - currentSpec.cwDelta : null;
  const carDepth = currentSpec && hd ? hd - currentSpec.cdDelta : null;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Lift Design Studio
          </h1>
          <p className="text-slate-500">
            Professional dimension calculator based on standard engineering formulas.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Inputs */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="model">Elevator Model Type</Label>
                <Select onValueChange={setSelectedId}>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select lift model..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Passenger Lifts</SelectLabel>
                      {ELEVATOR_SPECS.filter(s => s.category === "PASSENGER LIFT").map(spec => (
                        <SelectItem key={spec.id} value={spec.id}>{spec.model}</SelectItem>
                      ))}
                    </SelectGroup>
                    <Separator className="my-2" />
                    <SelectGroup>
                      <SelectLabel>Home / Villa Lifts</SelectLabel>
                      {ELEVATOR_SPECS.filter(s => s.category === "HOME LIFT").map(spec => (
                        <SelectItem key={spec.id} value={spec.id}>{spec.model}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
          <Card className="shadow-lg border-0 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-primary">Car Dimensions Result</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {!currentSpec || !hw || !hd ? (
                <div className="h-40 flex items-center justify-center text-slate-400 italic">
                  Enter shaft dimensions to see calculations
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Car Width (CW)</p>
                      <p className="text-3xl font-bold text-slate-900">{carWidth} mm</p>
                      <p className="text-[10px] text-slate-400 mt-2">Formula: HW - {currentSpec.cwDelta}</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Car Depth (CD)</p>
                      <p className="text-3xl font-bold text-slate-900">{carDepth} mm</p>
                      <p className="text-[10px] text-slate-400 mt-2">Formula: HD - {currentSpec.cdDelta}</p>
                    </div>
                  </div>
                  
                  {currentSpec.note && (
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                      <p className="text-sm text-blue-700 italic">
                        <strong>Note:</strong> {currentSpec.note}
                      </p>
                    </div>
                  )}
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
