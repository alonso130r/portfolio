export type Link = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  contribution: string;
  approach: string[];
  evidence: string[];
  limitations: string;
  technologies: string[];
  repositoryUrl: string;
  supportingLinks?: Link[];
  verified: boolean;
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  summary: string;
};

export type Education = {
  institution: string;
  program: string;
  period: string;
};

export type Portfolio = {
  identity: {
    name: string;
    affiliation: string;
    introduction: string;
    links: Link[];
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
};
