import Link from "next/link";
import type { Project } from "../content/types";

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="case-study">
      <Link className="back-link" href="/#work">
        Back to selected work
      </Link>
      <header className="case-header">
        <p className="kicker">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="case-lede">{project.summary}</p>
        <ul className="technology-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </header>

      <div className="case-grid">
        <section aria-labelledby="problem-heading">
          <p className="section-label">Question</p>
          <div>
            <h2 id="problem-heading">The problem</h2>
            <p>{project.problem}</p>
          </div>
        </section>
        <section aria-labelledby="contribution-heading">
          <p className="section-label">Role</p>
          <div>
            <h2 id="contribution-heading">Contribution</h2>
            <p>{project.contribution}</p>
          </div>
        </section>
        <section aria-labelledby="approach-heading">
          <p className="section-label">Method</p>
          <div>
            <h2 id="approach-heading">Approach</h2>
            <ul className="prose-list">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section aria-labelledby="evidence-heading">
          <p className="section-label">Record</p>
          <div>
            <h2 id="evidence-heading">Evidence</h2>
            <ul className="prose-list">
              {project.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section aria-labelledby="limitations-heading">
          <p className="section-label">Context</p>
          <div>
            <h2 id="limitations-heading">Limitations</h2>
            <p>{project.limitations}</p>
          </div>
        </section>
      </div>

      <footer className="case-footer">
        <a href={project.repositoryUrl}>View repository</a>
        {project.supportingLinks?.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </footer>
    </article>
  );
}
