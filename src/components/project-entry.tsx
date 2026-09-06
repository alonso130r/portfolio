import Link from "next/link";
import type { Project } from "../content/types";

export function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-entry">
      <div className="project-number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">{project.contribution}</p>
        <ul className="technology-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          <Link href={`/work/${project.slug}`}>Read case study</Link>
          <a href={project.repositoryUrl}>View repository</a>
        </div>
      </div>
    </article>
  );
}
