# Public website handoff

This folder is a separate copy of the latest public website in website-frontend.
It contains all current website source files, styles, public assets, package files,
and the PNPM lockfile. The original Cagos-main project was not modified.

## Run locally

Install Node.js 22.13 or newer and PNPM 9. Open a terminal in this folder:

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3004. To check and build:

```powershell
pnpm typecheck
pnpm build
```

After installing dependencies, Windows users can also run start-website.cmd.
See README.md for the page locations and existing frontend-only behavior.

## Relationship to the original project

The public website originally lives at Cagos-main/apps/marketing. The latest
website design changes were made in the separate website-frontend copy and are
included here. This handoff is a standalone website, not a complete monorepo.

To review the design changes, start with src/ and public/. The package.json,
Vite configuration, and local base CSS have been adapted for standalone use.
If integrating into the monorepo, compare the website source and assets and
preserve or deliberately reconcile its existing backend/auth, workspace,
Cloudflare deployment, and package configuration. This folder should not be
used as a blind replacement for apps/marketing in the full project.

Dependency installs, generated build output, local logs, caches, and design
backups are excluded. Run pnpm install to restore dependencies.

## Verification

The website source passed TypeScript checks (`tsc --noEmit`). All copied
source and asset files were verified byte-for-byte against website-frontend.
The original apps/marketing files were checked and remain unchanged.
