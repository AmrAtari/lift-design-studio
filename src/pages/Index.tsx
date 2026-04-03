import { useState, useCallback } from "react";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { SpecGrid } from "@/components/SpecGrid";
import {
  type Project,
  type ElevatorColumn,
  type Template,
  TEMPLATES,
  generateId,
} from "@/lib/elevator-types";

const createDefaultProject = (name = "New Project", client = "Client"): Project => ({
  id: generateId(),
  name,
  client,
  elevators: [{ id: generateId(), name: "PL01", specs: {} }],
  selectedTemplate: null,
  createdAt: new Date().toISOString(),
});

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([
    createDefaultProject("Al Nakheel Tower", "Gulf Properties LLC"),
  ]);
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [activeAttributes, setActiveAttributes] = useState<string[]>([
    "brand", "model", "type", "speed", "load", "rise", "stops", "floors_served",
    "machine", "drive", "door_type", "car_width", "car_depth", "car_height",
    "shaft_width", "shaft_depth", "pit_depth", "overhead", "power",
  ]);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  const updateProject = useCallback(
    (updates: Partial<Project>) => {
      setProjects((prev) =>
        prev.map((p) => (p.id === activeProjectId ? { ...p, ...updates } : p))
      );
    },
    [activeProjectId]
  );

  const handleCreateProject = useCallback(() => {
    const newProject = createDefaultProject();
    setProjects((prev) => [...prev, newProject]);
    setActiveProjectId(newProject.id);
    setActiveAttributes([
      "brand", "model", "type", "speed", "load", "rise", "stops", "floors_served",
      "machine", "drive", "door_type",
    ]);
  }, []);

  const handleSelectTemplate = useCallback(
    (template: Template) => {
      const newElevators: ElevatorColumn[] = activeProject.elevators.map((el) => ({
        ...el,
        specs: { ...template.defaultSpecs },
      }));
      updateProject({
        selectedTemplate: template.id,
        elevators: newElevators,
      });
      setActiveAttributes(template.defaultAttributes);
    },
    [activeProject.elevators, updateProject]
  );

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <ProjectSidebar
        projects={projects}
        activeProjectId={activeProjectId}
        onSelectProject={setActiveProjectId}
        onCreateProject={handleCreateProject}
        onSelectTemplate={handleSelectTemplate}
        activeTemplate={activeProject.selectedTemplate}
      />
      <SpecGrid
        elevators={activeProject.elevators}
        activeAttributes={activeAttributes}
        onUpdateElevators={(elevators) => updateProject({ elevators })}
        onUpdateAttributes={setActiveAttributes}
        projectName={activeProject.name}
      />
    </div>
  );
};

export default Index;
