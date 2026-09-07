import { ExperienceList } from "../components/experience-list";
import { Intro } from "../components/intro";
import { ProjectList } from "../components/project-list";
import { portfolio } from "../content/portfolio";
import { getPublishedProjects, getPublishedPublications } from "../lib/projects";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Intro identity={portfolio.identity} />
      <section className="home-section" id="publications" aria-labelledby="publications-heading">
        <div className="home-section-heading">
          <div>
            <p className="section-label">01</p>
            <h2 id="publications-heading" className="section-title">Publications</h2>
          </div>
        </div>
        <ProjectList projects={getPublishedPublications()} />
      </section>
      <section className="home-section" id="work" aria-labelledby="work-heading">
        <div className="home-section-heading">
          <div>
            <p className="section-label">02</p>
            <h2 id="work-heading" className="section-title">Projects</h2>
          </div>
        </div>
        <ProjectList projects={getPublishedProjects()} />
      </section>
      <section className="home-section background-section" id="background" aria-labelledby="background-heading">
        <div className="home-section-heading">
          <div>
            <p className="section-label">03</p>
            <h2 id="background-heading" className="section-title">Experience &amp; education</h2>
          </div>
        </div>
        <ExperienceList experience={portfolio.experience} education={portfolio.education} />
      </section>
      <footer className="site-footer">
        <p>Built as a compact, inspectable record of ongoing work.</p>
        <a href="mailto:vijay.goyal@uwaterloo.ca">vijay.goyal@uwaterloo.ca</a>
      </footer>
    </main>
  );
}
