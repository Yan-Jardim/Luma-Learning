# Luma Learning

Responsive landing page for Luma Learning, a fictional online course platform, built as a Front-End technical challenge for Buzzvel.

The page will present courses, learning categories, teachers and students, a testimonial, a contact form and calls to action. There is no backend, database, real authentication or CMS: all data is local or mocked.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- React
- TypeScript (strict mode)
- Tailwind CSS
- ESLint

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx next typegen` | Generate the Next.js route types without a build or a server |
| `npx tsc --noEmit` | Type-check the project |

On a fresh checkout, run `npx next typegen` before `npx tsc --noEmit`. The route types (for example `LayoutProps`) are generated in `.next/types` and are not committed.

## Known limitations

- **Community paragraph:** the "Meet international students & teachers" section shows placeholder Latin text ("Morbi sit egestas dignissim pharetra…"). It is kept exactly as in both design references, because no final copy was provided and copy is not invented for this project.

## Security audit

Re-evaluated on 2026-11-19 (T-10), with npm 10.9.9 and Node.js 22.23.5, on the installed dependencies and `package-lock.json`. Official sources consulted on that date: the GitHub advisory, the NVD entry and the npm registry. No dependency was changed.

- **`npm audit` (development and production dependencies, 432 packages):** found 0 vulnerabilities.
- **`npm audit --omit=dev` (production dependencies: `next`, `react`, `react-dom` and their dependencies):** found 0 vulnerabilities.
- **Advisory recorded earlier:** [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) (CVE-2026-112366), a ReDoS reported in `picomatch` `<= 4.0.7`, was withdrawn by GitHub on 2026-11-18 as "not a security issue", so `npm audit` no longer reports it. The first audit, dated the same day, still listed it. A withdrawn advisory is not a fixed vulnerability: there is no patched `picomatch` release, and nothing was fixed in this project's dependencies.
- **What is still installed:** `picomatch` 2.3.2 (`eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch`) and 4.0.7 (`eslint-config-next` → `eslint-import-resolver-typescript` → `tinyglobby`, also used by `fdir`), development dependencies only, within the versions named by the withdrawn advisory. 4.0.7 is the latest release, so no newer version exists. The NVD entry for CVE-2026-112366 still reads "Awaiting Analysis" (last modified 2026-10-19), so tools that use the NVD instead of the GitHub advisories may still report it.
- **Exposure in this project:** the reported issue needed a glob pattern supplied by an attacker. Here the npm copies run only in development tooling (ESLint), on globs from the repository's own configuration. Next.js bundles its own `picomatch` (`next/dist/compiled/picomatch`, version not stated). In Next.js 16.4.6, the modules that load it directly are build modules (traces, middleware configuration) and the image matchers used by `server/image-optimizer.js`: `shared/lib/match-local-pattern.js`, whose `hasLocalMatch` returns before calling it when `images.localPatterns` is not set, and `shared/lib/match-remote-pattern.js`, which calls it once per entry of `images.remotePatterns` (empty by default). In those paths the patterns come from `next.config.ts`, which sets neither option, and a visitor only controls the URL tested against them. No input where visitors control glob patterns was identified. This covers the paths analyzed; it does not prove that no other code path inside Next.js uses the bundled copy.
- **Limits of this result:** `npm audit` checks the installed packages against the advisories known to the npm registry on that date. It does not look inside code bundled within packages, such as the compiled dependencies of Next.js, and it cannot report issues that are not yet known. This is not a guarantee that the project is free of vulnerabilities. Run `npm audit` and `npm audit --omit=dev` again before publishing (T-11).
