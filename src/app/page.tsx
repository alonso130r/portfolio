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
      <section className="home-section" id="talks" aria-labelledby="talks-heading">
        <div className="home-section-heading">
          <div>
            <p className="section-label">03</p>
            <h2 id="talks-heading" className="section-title">Talks</h2>
          </div>
        </div>
        <div className="project-list">
          <article className="project-entry">
            <div className="project-heading">
              <p className="project-eyebrow">Talk · ML compilers</p>
              <h3><a href="https://openai-workshop-bice.vercel.app/">Your AI Is Doing Extra Work</a></h3>
              <p className="project-summary">A visual introduction to how ML compilers reduce unnecessary work, covering GPU memory movement, kernel fusion, tiling, and practical evaluation with <code>torch.compile</code>.</p>
              <div className="talk-details">
                <p>Currently a work in progress.</p>
                <p>Given on October 30th, 2026 at the University of Waterloo.</p>
                <p>Co-sponsored by the OpenAI student organization at Waterloo.</p>
              </div>
              <div className="project-links"><a href="https://openai-workshop-bice.vercel.app/">View the presentation</a></div>
            </div>
          </article>
        </div>
      </section>
      <section className="home-section background-section" id="background" aria-labelledby="background-heading">
        <div className="home-section-heading">
          <div>
            <p className="section-label">04</p>
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
