# Decisions

Last updated: 2026-11-18.

Only the owner approves decisions. Proposals and open questions are not approved: do not act on them until the owner decides. When the owner approves a proposal, move it to the approved list.

## Approved

The "In repository" column was checked against the repository on 2026-11-18. "Not yet" means the decision applies to work that has not started.

### Project and workflow

| ID | Decision | In repository |
| --- | --- | --- |
| D-01 | npm is the package manager, and `package-lock.json` is the only lockfile. | Yes. Only `package-lock.json` is present. |
| D-02 | Application code lives in `src/`. | Yes. `src/app/` exists, and the `@/*` alias points to `./src/*` in `tsconfig.json`. |
| D-03 | ESLint is kept. | Yes. `eslint.config.mjs` uses `eslint-config-next`, run with `npm run lint`. |
| D-04 | The interface language is English. | Partly. `<html lang="en">` is set in `src/app/layout.tsx`, but the UI is not built yet. |
| D-05 | The "How it works" steps are numbered 01, 02 and 03. | Not yet. |
| D-06 | The contact form is in English on desktop and mobile, normalizing the divergence between the references. | Not yet. |
| D-07 | AI usage is declared in the README, with human review. | Not yet. The README has no such section. |
| D-08 | Git flow: `main` plus a short-lived branch per delivery, named `<type>/<short-description>`. | In use: `main` and `docs/project-plan`. |
| D-09 | Commit messages use types such as `chore`, `docs`, `feat`, `fix` and `test`. | In use: `chore: initialize Next.js project`. |

### Technical setup

These were approved by the owner during the project setup.

| ID | Decision | In repository |
| --- | --- | --- |
| D-10 | The installed versions are kept for now: Next.js 16.4.6, React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.3 and ESLint 9. Changes need owner approval. | Yes. `package.json` and `package-lock.json`. |
| D-11 | TypeScript runs in strict mode. | Yes. `"strict": true` in `tsconfig.json`. |
| D-12 | Tailwind CSS uses the integration from the official template: the `@tailwindcss/turbopack` loader in `next.config.ts`, with no PostCSS config. | Yes. |
| D-13 | `cacheComponents` and `partialPrefetching` are not enabled, since they are not needed in the current scope. | Yes. Both are absent from `next.config.ts`. |
| D-14 | `agentRules: false` prevents `next dev` from generating `AGENTS.md`. | Yes. Set in `next.config.ts`. |
| D-15 | Line endings are LF, normalized by `.gitattributes`. `.bat` and `.cmd` files use CRLF. | Yes. `.gitattributes`. |
| D-16 | No `npm audit fix --force` and no downgrades for the `picomatch` advisory. The issue is documented and must be re-evaluated before delivery. | Yes. "Known security issue" section in `README.md`. |

## Proposals

These are not approved. IDs are not reused: P-04 was approved and consolidated into D-08.

| ID | Proposal | Notes |
| --- | --- | --- |
| P-01 | Mobile-first styling with Tailwind's default breakpoints, adjusted once the reference widths are known. | Depends on [design.md](design.md). |
| P-02 | Use `next/font` for fonts and `next/image` for images. | Built into Next.js, so no new dependency. |
| P-03 | Keep page content in typed local modules under `src/`, filled only with content from the references. | |
| P-05 | The narrowest supported width is 320 px. | Needs owner confirmation. |
| P-06 | Contact form with client-side validation and a simulated submission that makes no network request. | Final behavior depends on Q-05. |
| P-07 | Add a note to `CLAUDE.md` pointing agents to the Next.js docs bundled in `node_modules/next/dist/docs/`. | That guidance came from the generated `AGENTS.md`, which D-14 disables. |

## Open questions

| ID | Question | Affects |
| --- | --- | --- |
| Q-01 | Figma file and desktop and mobile references (see [design.md](design.md)). | All UI tasks |
| Q-02 | Destinations of navigation links, buttons, calls to action and footer links. | Header, CTA, footer |
| Q-03 | What login and sign-up do, given there is no real authentication. | Header |
| Q-04 | What the course actions do. | Categories, featured course |
| Q-05 | Contact form fields, validation rules, submit behavior and messages. | Contact |
| Q-06 | Mobile menu behavior. | Header |
| Q-07 | Metadata content: description, social preview image and favicon. | Delivery |
| Q-08 | Test tooling. The `test` commit type is approved, but no test runner is installed, and adding one needs a dependency decision. | Testing |
| Q-09 | Publishing target for the delivery. | Delivery |
