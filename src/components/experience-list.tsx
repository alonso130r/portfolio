import type { Education, Experience } from "../content/types";

export function ExperienceList({
  experience,
  education,
}: {
  experience: Experience[];
  education: Education[];
}) {
  return (
    <div className="background-grid">
      <div>
        <h3 className="subsection-title">Experience</h3>
        <div className="entry-list">
          {experience.map((entry) => (
            <article className="background-entry" key={`${entry.organization}-${entry.role}`}>
              <div className="entry-heading">
                <h4>{entry.role}</h4>
                <span>{entry.period}</span>
              </div>
              <p className="organization">{entry.organization}</p>
              <p>{entry.summary}</p>
            </article>
          ))}
        </div>
      </div>
      <div>
        <h3 className="subsection-title">Education</h3>
        <div className="entry-list">
          {education.map((entry) => (
            <article className="background-entry" key={entry.institution}>
              <div className="entry-heading">
                <h4>{entry.institution}</h4>
                <span>{entry.period}</span>
              </div>
              <p>{entry.program}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
