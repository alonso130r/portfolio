import { describe, expect, it } from "vitest";
import { portfolio } from "../src/content/portfolio";
import { getProject, getPublishedProjects } from "../src/lib/projects";

describe("portfolio content", () => {
  it("publishes the selected work in the approved order", () => {
    expect(getPublishedProjects().map((project) => project.slug)).toEqual([
      "knowledge-distillation",
      "quickserve",
      "multinn-cpu",
    ]);
  });

  it("uses unique project slugs and valid public links", () => {
    const slugs = portfolio.projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    for (const project of portfolio.projects) {
      expect(() => new URL(project.repositoryUrl)).not.toThrow();
    }
  });

  it("finds a published case study and rejects an unknown slug", () => {
    expect(getProject("quickserve")?.title).toBe("QuickServe");
    expect(getProject("does-not-exist")).toBeUndefined();
  });

  it("keeps unverified claims out of published projects", () => {
    for (const project of getPublishedProjects()) {
      expect(project.verified).toBe(true);
      expect(project.summary).not.toMatch(/TBD|TODO|placeholder/i);
      expect(project.contribution).not.toMatch(/TBD|TODO|placeholder/i);
    }
  });
});
