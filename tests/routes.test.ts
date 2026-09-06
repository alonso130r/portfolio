import { describe, expect, it } from "vitest";
import { getProjectSlugs, getSitemapEntries } from "../src/lib/projects";

describe("static routes", () => {
  it("generates one case-study route per published project", () => {
    expect(getProjectSlugs()).toEqual([
      "knowledge-distillation",
      "quickserve",
      "multinn-cpu",
    ]);
  });

  it("generates a canonical homepage and unique case-study URLs", () => {
    const entries = getSitemapEntries("https://vijaygoyal.dev");
    const urls = entries.map((entry) => entry.url);

    expect(urls[0]).toBe("https://vijaygoyal.dev");
    expect(new Set(urls).size).toBe(4);
    expect(urls).toContain("https://vijaygoyal.dev/work/quickserve");
  });
});
