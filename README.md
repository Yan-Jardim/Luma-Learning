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

## Known security issue

Audit date: 2026-11-18.

- **Advisory:** [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) (CVE-2026-112366), a high severity ReDoS in `picomatch` `<= 4.0.7`.
- **Affected development dependencies:** `picomatch` is pulled in by `eslint-config-next@16.4.6` through `@next/eslint-plugin-next` (`fast-glob` → `micromatch`), `eslint-import-resolver-typescript` and `typescript-eslint` (both via `tinyglobby`). `npm audit` reports 14 high severity entries, all caused by this advisory.
- **`npm audit --omit=dev`:** found 0 vulnerabilities.
- **No compatible fix at the time of the audit:** there is no patched `picomatch` release, `npm audit fix` does not reduce the count, and `npm audit fix --force` would downgrade `eslint-config-next` to 14.2.35, which is incompatible with Next.js 16.
- **Status:** open. This must be re-evaluated before delivery.
