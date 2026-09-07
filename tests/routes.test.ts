import { describe, expect, it } from "vitest";
import { getSitemapEntries } from "../src/lib/projects";

describe("static routes", () => {
  it("generates only the canonical homepage", () => {
    const entries = getSitemapEntries("https://vijaygoyal.dev");
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual(["https://vijaygoyal.dev"]);
  });
});
