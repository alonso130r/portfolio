import type { MetadataRoute } from "next";
import { portfolio } from "../content/portfolio";

export function getPublishedProjects() {
  return portfolio.projects.filter((project) => project.verified);
}

export function getProject(slug: string) {
  return getPublishedProjects().find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return getPublishedProjects().map((project) => project.slug);
}

export function getSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");

  return [
    { url: normalizedBaseUrl, changeFrequency: "monthly", priority: 1 },
    ...getProjectSlugs().map((slug) => ({
      url: `${normalizedBaseUrl}/work/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
