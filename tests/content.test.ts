import { describe, expect, it } from "vitest";
import { portfolio } from "../src/content/portfolio";
import {
  getPublishedProjects,
  getPublishedPublications,
} from "../src/lib/projects";

describe("portfolio content", () => {
  it("describes the research focus in concrete terms", () => {
    expect(portfolio.identity.introduction).toBe(
      "I work on efficient machine learning, with a focus on knowledge distillation, inference systems, and optimization.",
    );
  });

  it("separates the publication from the projects", () => {
    expect(getPublishedPublications().map((project) => project.slug)).toEqual([
      "knowledge-distillation",
    ]);
    expect(getPublishedProjects().map((project) => project.slug)).toEqual([
      "quickserve",
      "racey-car",
      "sophia-g",
      "cpp-cnn-autodiff",
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

  it("keeps unverified claims out of published projects", () => {
    for (const project of [...getPublishedPublications(), ...getPublishedProjects()]) {
      expect(project.verified).toBe(true);
      expect(project.summary).not.toMatch(/TBD|TODO|placeholder/i);
      expect(project.contribution).not.toMatch(/TBD|TODO|placeholder/i);
    }
  });
});
