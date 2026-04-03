import { useState } from "react";
import { Plus, FolderOpen, ChevronDown, Sparkles, Globe } from "lucide-react";
import { TEMPLATES, type Project, type Template } from "@/lib/elevator-types";
import { useI18n } from "@/lib/i18n";

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
  const { t, lang, setLang } = useI18n();

  return (
    <aside className="w-72 min-w-[288px] bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      {/* Logo + Lang toggle */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-foreground tracking-tight">{t("app.name")}</h1>
              <p className="text-[10px] text-muted-foreground">{t("app.tagline")}</p>
            </div>
          </div>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1 px-2 py-1.5 rounded-md text-[10px] font-medium text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
            title="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            {t("lang.switch")}
          </button>
        </div>
      </div>

      {/* Templates */}
      <div className="px-3 pt-4">
        <button
          onClick={() => setTemplateOpen(!templateOpen)}
          className="flex items-center justify-between w-full px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("sidebar.templates")}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${templateOpen ? "" : lang === "ar" ? "rotate-90" : "-rotate-90"}`} />
        </button>
        {templateOpen && (
          <div className="mt-1 space-y-0.5 animate-fade-in">
            {TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => onSelectTemplate(tmpl)}
                className={`w-full text-left px-3 py-2.5 rounded-md transition-all group ${
                  activeTemplate === tmpl.id
                    ? "bg-primary/15 border border-primary/30"
                    : "hover:bg-sidebar-accent luxury-border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gold/20 text-gold">
                    {tmpl.brand}
                  </span>
                  <span className="text-xs font-medium text-foreground">{tmpl.name.replace(`${tmpl.brand} `, "")}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 ps-0.5">
                  {lang === "ar" ? tmpl.descriptionAr : tmpl.description}
                </p>
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
          {t("sidebar.projects")}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${projectsOpen ? "" : lang === "ar" ? "rotate-90" : "-rotate-90"}`} />
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
          {t("sidebar.newProject")}
        </button>
      </div>
    </aside>
  );
}
