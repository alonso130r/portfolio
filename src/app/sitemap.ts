import type { MetadataRoute } from "next";
import { getSitemapEntries } from "../lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries(siteUrl);
}
