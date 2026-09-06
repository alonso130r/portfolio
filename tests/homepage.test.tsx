import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomePage from "../src/app/page";
import { CaseStudy } from "../src/components/case-study";
import { getProject } from "../src/lib/projects";

describe("portfolio pages", () => {
  it("renders the homepage narrative and primary links in project order", () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).toContain("Vijay Goyal");
    expect(html).toContain("Résumé");
    expect(html).toContain("mailto:vijay.goyal@uwaterloo.ca");
    expect(html.indexOf("Knowledge Distillation")).toBeLessThan(
      html.indexOf("QuickServe"),
    );
    expect(html.indexOf("QuickServe")).toBeLessThan(
      html.indexOf("multiNN-cpu"),
    );
  });

  it("renders evidence and limitations in a case study", () => {
    const project = getProject("quickserve");
    expect(project).toBeDefined();

    const html = renderToStaticMarkup(<CaseStudy project={project!} />);
    expect(html).toContain("Evidence");
    expect(html).toContain("Limitations");
    expect(html).toContain(project!.repositoryUrl);
  });
});
