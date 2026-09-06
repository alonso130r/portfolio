# Vijay Goyal Portfolio

A static-first research portfolio built with the Next.js App Router and designed for Vercel.

## Local development

Use the Node version in `.nvmrc`, then install and run the project:

```sh
npm ci
npm run dev
```

The site is available at `http://localhost:3000` by default.

## Verification

```sh
npm run lint
npm run typecheck
npm run test:run
npm run build
```

The focused Vitest suite checks the publication boundary, project ordering, generated routes, and server-rendered page content. The production build is the integration check for all App Router pages and metadata endpoints.

## Content workflow

Publishable content lives in `src/content/portfolio.ts`. Every project must remain explicitly verified before it appears on the homepage or receives a case-study route.

Before adding a claim:

1. Check it against the repository, paper, résumé, or underlying result.
2. Include enough context for a reader to interpret it.
3. State Vijay's contribution separately from a collaborative result.
4. Keep unresolved figures and claims out of the published data.

The original `portfolio-design.md` remains local and intentionally ignored by Git.

## Vercel deployment

1. Import this GitHub repository into Vercel with the Next.js framework preset.
2. Keep the repository root as the Root Directory.
3. Use the Node version declared in `.nvmrc`.
4. Set `NEXT_PUBLIC_SITE_URL` to the canonical URL in Production and the appropriate branch URL in Preview when metadata must be preview-specific.
5. Keep `main` as the Production branch. Other branches receive Preview deployments.

No `vercel.json` is required. Next.js handles the static pages, project routes, sitemap, robots file, icon, social image, and security headers directly.

## Release check

Before promoting a deployment, verify the homepage and each case study at desktop and mobile widths, check the résumé and external links, inspect the social preview, and confirm that the Vercel build reports the pages as static or statically generated.
