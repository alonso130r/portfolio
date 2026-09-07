import type { Project } from "../content/types";

export function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-entry">
      <div className="project-heading">
        <p className="project-eyebrow">
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")} · </span>
          {project.eyebrow}
        </p>
        <h3>
          <a href={project.repositoryUrl}>{project.title}</a>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="technology-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.supportingLinks?.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
          <a href={project.repositoryUrl}>GitHub</a>
        </div>
      </div>
    </article>
  );
}
