import type { Portfolio } from "../content/types";

type IntroProps = {
  identity: Portfolio["identity"];
};

export function Intro({ identity }: IntroProps) {
  return (
    <header className="intro">
      <p className="kicker">Machine learning research &amp; systems</p>
      <h1>{identity.name}</h1>
      <p className="affiliation">{identity.affiliation}</p>
      <p className="lede">{identity.introduction}</p>
      <nav aria-label="Primary links">
        <ul className="primary-links">
          {identity.links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
