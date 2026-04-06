import React, { useState, useMemo } from "react";
import { ELEVATOR_SPECS } from "@/data/elevatorSpecs";
import { calculateLiftDimensions } from "@/lib/lift-math";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const CalculatorPage = () => {
  const [selectedSpecId, setSelectedSpecId] = useState<string>("");
  const [hw, setHw] = useState<number>(0);
  const [hd, setHd] = useState<number>(0);

  const results = useMemo(() => {
    return calculateLiftDimensions(selectedSpecId, hw, hd);
  }, [selectedSpecId, hw, hd]);

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Lift Dimension Studio</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Select Elevator Model</Label>
            <Select onValueChange={setSelectedSpecId}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a model from Excel reference" />
              </SelectTrigger>
              <SelectContent>
                {ELEVATOR_SPECS.map((spec) => (
                  <SelectItem key={spec.id} value={spec.id}>
                    {spec.model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Shaft Width (HW) mm</Label>
              <Input 
                type="number" 
                placeholder="e.g. 1800" 
                onChange={(e) => setHw(Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2">
              <Label>Shaft Depth (HD) mm</Label>
              <Input 
                type="number" 
                placeholder="e.g. 2000" 
                onChange={(e) => setHd(Number(e.target.value))} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {results && (
        <Card className="bg-primary/5 border-primary">
          <CardHeader>
            <CardTitle className="text-primary">Calculated Dimensions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">Car Width (CW)</p>
                <p className="text-3xl font-bold">{results.cw} mm</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">Car Depth (CD)</p>
                <p className="text-3xl font-bold">{results.cd} mm</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">
              Formula: HW - {ELEVATOR_SPECS.find(s => s.id === selectedSpecId)?.cwDelta} / 
              HD - {ELEVATOR_SPECS.find(s => s.id === selectedSpecId)?.cdDelta}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CalculatorPage;
