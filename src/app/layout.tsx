import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vijay Goyal | ML Research & Systems",
    template: "%s | Vijay Goyal",
  },
  description:
    "Machine learning research and systems work by Vijay Goyal, focused on efficient models, inference scheduling, and first-principles implementations.",
  authors: [{ name: "Vijay Goyal" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Vijay Goyal | ML Research & Systems",
    description: "Research and systems work focused on making machine learning more efficient.",
    url: "/",
    siteName: "Vijay Goyal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Goyal | ML Research & Systems",
    description: "Research and systems work focused on making machine learning more efficient.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
