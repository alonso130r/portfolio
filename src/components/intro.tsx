import type { Portfolio } from "../content/types";

type IntroProps = {
  identity: Portfolio["identity"];
};

export function Intro({ identity }: IntroProps) {
  const sectionLinks = identity.links.filter((link) => link.href.startsWith("#"));
  const externalLinks = identity.links.filter((link) => !link.href.startsWith("#"));

  return (
    <header className="intro intro-grid">
      <div className="intro-identity">
        <h1>{identity.name}</h1>
        <div className="header-links">
          <nav aria-label="Page sections">
            <ul className="section-links">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="External links">
            <ul className="primary-links">
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="intro-positioning">
        <p className="lede">{identity.introduction}</p>
        <p className="affiliation">{identity.affiliation}</p>
      </div>
    </header>
  );
}
