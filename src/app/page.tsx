import { ExperienceList } from "../components/experience-list";
import { Intro } from "../components/intro";
import { PageSection } from "../components/page-section";
import { ProjectList } from "../components/project-list";
import { portfolio } from "../content/portfolio";
import { getPublishedProjects } from "../lib/projects";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Intro identity={portfolio.identity} />
      <PageSection id="work" label="Work" title="Selected work">
        <p className="section-intro">
          Research and systems projects focused on making models smaller, serving them more thoughtfully, and understanding their mechanics.
        </p>
        <ProjectList projects={getPublishedProjects()} />
      </PageSection>
      <PageSection id="background" label="Background" title="Experience & education">
        <ExperienceList experience={portfolio.experience} education={portfolio.education} />
      </PageSection>
      <footer className="site-footer">
        <p>Built as a compact, inspectable record of ongoing work.</p>
        <a href="mailto:vijay.goyal@uwaterloo.ca">vijay.goyal@uwaterloo.ca</a>
      </footer>
    </main>
  );
}
