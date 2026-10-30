# CAGos website frontend

Standalone public website from Cagos-main/apps/marketing. Original project unchanged.
Includes homepage, pricing, contact, products, solutions, resources, comparisons,
public login/registration screens, styles and images. No department dashboards,
backend API, database or workspace package dependencies are included.

## Run locally

Install Node.js 22.13+ and PNPM 9. Open a terminal in this folder:

```powershell
pnpm install
pnpm dev
```

Open http://localhost:3004. Use pnpm build to build, pnpm serve to preview,
and pnpm typecheck to check TypeScript.
Uses React, TanStack Start/Router, TypeScript and Tailwind CSS.
TanStack Start retains website server rendering; no business backend is included.

## Edit

- src/routes/index.tsx: homepage
- src/routes/: website pages
- src/components/: navbar, footer, website sections
- src/styles/ and src/styles.css: styling
- src/lib/static-blog-posts.ts: bundled blog articles
- public/: images, icons and SEO files

## Frontend-only behavior

The blog uses bundled articles only. CMS posts and view counts are disconnected.
Registration is a UI preview and reports that accounts cannot be created.
Login forwards the workspace name to the existing external admin site;
set VITE_ADMIN_URL in .env to change the destination. No admin UI is included.
Required shared theme CSS is copied locally to src/styles/base.css.
Cloudflare deployment configuration and monorepo dependencies are removed.
Original Google Tag Manager, external fonts, links and remote blog images remain.
Review those and SEO URLs before publishing under another brand.

## Light redesign

The public website now uses a warm ivory and forest-green design.
Homepage: src/components/cagos/WebsiteHome.tsx
Design system: src/styles/redesign.css
Navigation: src/components/cagos/Navbar.tsx

On Windows, double-click start-website.cmd and keep its terminal open, then visit
http://127.0.0.1:3004.
