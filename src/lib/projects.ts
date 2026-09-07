import type { MetadataRoute } from "next";
import { portfolio } from "../content/portfolio";

function getPublishedWork() {
  return portfolio.projects.filter((project) => project.verified);
}

export function getPublishedProjects() {
  return getPublishedWork().filter((project) => project.kind === "project");
}

export function getPublishedPublications() {
  return getPublishedWork().filter((project) => project.kind === "publication");
}

export function getSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");

  return [
    { url: normalizedBaseUrl, changeFrequency: "monthly", priority: 1 },
  ];
}
