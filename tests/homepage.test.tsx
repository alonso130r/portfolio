import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomePage from "../src/app/page";

describe("portfolio pages", () => {
  it("renders the homepage narrative and primary links in project order", () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).toContain("Vijay Goyal");
    expect(html).toContain("Résumé");
    expect(html).toContain("mailto:vijay.goyal@uwaterloo.ca");
    expect(html).toContain('<a href="#publications">Publications</a>');
    expect(html).toContain('<a href="#work">Projects</a>');
    expect(html).toContain('<a href="#background">Experience</a>');
    expect(html).toContain('aria-label="Page sections"');
    expect(html).toContain('aria-label="External links"');
    expect(html.indexOf("Publications")).toBeLessThan(html.indexOf("Projects"));
    expect(html.indexOf("Knowledge Distillation")).toBeLessThan(html.indexOf("QuickServe"));
    expect(html.indexOf("QuickServe")).toBeLessThan(
      html.indexOf("Racey-Car"),
    );
    expect(html.indexOf("Racey-Car")).toBeLessThan(
      html.indexOf("SOPHIA-G"),
    );
    expect(html.indexOf("SOPHIA-G")).toBeLessThan(
      html.indexOf("C++ CNN + Autodiff Engine"),
    );
    expect(html.indexOf("C++ CNN + Autodiff Engine")).toBeLessThan(
      html.indexOf("multiNN-cpu"),
    );
    expect(html).toContain('href="https://arxiv.org/abs/2412.17846"');
  });

  it("uses the approved split layout and direct section heading", () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).toContain('class="intro intro-grid"');
    expect(html).toContain(">Projects</h2>");
    expect(html).not.toContain("Selected work");
    expect(html).not.toContain("Three lines of inquiry");
    expect(html).toContain('class="home-section background-section"');
  });

  it("omits decorative labels and section blurbs", () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).not.toContain("Research journal");
    expect(html).not.toContain("Published research with direct links");
    expect(html).not.toContain("Systems and implementation work spanning");
    expect(html).not.toContain('class="section-intro"');
  });

  it("links project entries directly to their repositories", () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).not.toContain('href="/work/');
    expect(html).not.toContain("Read case study");
    expect(html).toContain(
      '<a href="https://github.com/alonso130r/QuickServe">QuickServe</a>',
    );
  });

  it("places project descriptions beneath their headings", () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).not.toContain('class="project-details"');
    expect(html).toMatch(
      /QuickServe<\/a><\/h3><p class="project-summary">An experimental C\+\+ inference scheduler/,
    );
  });
});
