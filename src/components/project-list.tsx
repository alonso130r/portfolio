import type { Project } from "../content/types";
import { ProjectEntry } from "./project-entry";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectEntry key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
