import type { ReactNode } from "react";

type PageSectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

export function PageSection({ id, label, title, children }: PageSectionProps) {
  return (
    <section className="page-section" aria-labelledby={`${id}-heading`}>
      <p className="section-label" aria-hidden="true">
        {label}
      </p>
      <div className="section-content">
        <h2 id={`${id}-heading`} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
