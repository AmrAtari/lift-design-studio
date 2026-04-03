import { useState } from "react";
import { Plus, FolderOpen, ChevronDown, Sparkles } from "lucide-react";
import { TEMPLATES, type Project, type Template, generateId } from "@/lib/elevator-types";

interface ProjectSidebarProps {
  projects: Project[];
  activeProjectId: string | null;
  onSelectProject: (id: string) => void;
  onCreateProject: () => void;
  onSelectTemplate: (template: Template) => void;
  activeTemplate: string | null;
}

export function ProjectSidebar({
  projects,
  activeProjectId,
  onSelectProject,
  onCreateProject,
  onSelectTemplate,
  activeTemplate,
}: ProjectSidebarProps) {
  const [templateOpen, setTemplateOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(true);

  return (
    <aside className="w-72 min-w-[288px] bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      {/* Logo */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground tracking-tight">ElevatorSpec</h1>
            <p className="text-[10px] text-muted-foreground">Quotation Configurator</p>
          </div>
        </div>
      </div>

      {/* Templates */}
      <div className="px-3 pt-4">
        <button
          onClick={() => setTemplateOpen(!templateOpen)}
          className="flex items-center justify-between w-full px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          Product Templates
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${templateOpen ? "" : "-rotate-90"}`} />
        </button>
        {templateOpen && (
          <div className="mt-1 space-y-0.5 animate-fade-in">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => onSelectTemplate(t)}
                className={`w-full text-left px-3 py-2.5 rounded-md transition-all group ${
                  activeTemplate === t.id
                    ? "bg-primary/15 border border-primary/30"
                    : "hover:bg-sidebar-accent luxury-border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    t.brand === "XIZI" ? "bg-gold/20 text-gold" : "bg-primary/20 text-primary"
                  }`}>
                    {t.brand}
                  </span>
                  <span className="text-xs font-medium text-foreground">{t.name.replace(`${t.brand} `, "")}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 pl-0.5">{t.description}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Projects */}
      <div className="px-3 pt-5 flex-1 overflow-y-auto scrollbar-thin">
        <button
          onClick={() => setProjectsOpen(!projectsOpen)}
          className="flex items-center justify-between w-full px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          Projects
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${projectsOpen ? "" : "-rotate-90"}`} />
        </button>
        {projectsOpen && (
          <div className="mt-1 space-y-0.5 animate-fade-in">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectProject(p.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md transition-all flex items-center gap-2 ${
                  activeProjectId === p.id
                    ? "bg-primary/15 border border-primary/30"
                    : "hover:bg-sidebar-accent luxury-border border-transparent"
                }`}
              >
                <FolderOpen className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{p.name}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{p.client}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* New Project */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={onCreateProject}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors luxury-border"
        >
          <Plus className="w-3.5 h-3.5" />
          New Project
        </button>
      </div>
    </aside>
  );
}
