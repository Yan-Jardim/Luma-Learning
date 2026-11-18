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

### Design assets

These were approved by the owner on 2026-11-18, during T-02.

| ID | Decision | In repository |
| --- | --- | --- |
| D-17 | The final call to action decorations are used as separate SVG files, one per shape, as exported. This is the decorations part of P-18. | Not yet. |
| D-18 | The project copies of the decoration files use the names suggested in [design.md](design.md#final-call-to-action-decorations), and the original exports stay unchanged. `Container-5.svg` and `Container-6.svg` become one asset used in both positions, because the owner approved this if they are visually equivalent, and the agent checked that they are. | Not yet. |
| D-19 | The step illustrations and the contact icons with their tile, received as PNG, are candidates subject to a quality check. SVG is preferred, not a blocker. | Not yet. |

### Visual foundation

These were approved by the owner on 2026-11-18, at the end of T-02.

| ID | Decision | In repository |
| --- | --- | --- |
| D-20 | Fonts are loaded with `next/font/google`: Plus Jakarta Sans 800 and Inter 400, 600 and 700. Each confirmed text style ([design.md](design.md#type-styles)) is used on its own element. Other weights and uses stay pending verification. This consolidates the font part of P-02 and P-08, limited to the confirmed weights and styles. | Not yet. |
| D-21 | The remaining colors sampled from the references are the initial color tokens, with their origin documented in [design.md](design.md#colors). Values confirmed in Figma take priority. This consolidates P-10. | Not yet. |
| D-22 | Desktop container: 1120 px of content with 80 px side margins at the 1280 px reference. Accepted provisionally, and still an estimate. The margins are not fixed for every width, and the responsive behavior must be checked. | Not yet. |

## Proposals

These are not approved. IDs are not reused. Consolidated proposals: P-04 into D-08, P-08 into D-20, P-10 into D-21.

| ID | Proposal | Reason and notes |
| --- | --- | --- |
| P-01 | Mobile-first styling with Tailwind's default breakpoints. The desktop composition starts at `lg` (1024 px). Between 640 and 1023 px, use local adjustments such as two-column cards. | The reference widths are inferred at 1280 and 402 px ([design.md](design.md#reference-files)). |
| P-02 | Use `next/image` for images. | Built into Next.js, so no new dependency. The font part was approved as D-20. |
| P-03 | Keep page content in typed local modules under `src/`, filled only with content from the references. | |
| P-05 | The narrowest supported width is 320 px. | Needs owner confirmation. |
| P-06 | Contact form with native HTML validation (all three fields required, email format checked), no network request, and a confirmation message after a valid submit. The owner provides the message text. | The references show no validation or success states (Q-05). Native validation needs no invented error texts. |
| P-07 | Add a note to `CLAUDE.md` pointing agents to the Next.js docs bundled in `node_modules/next/dist/docs/`. | That guidance came from the generated `AGENTS.md`, which D-14 disables. |
| P-09 | Treat the PNGs as 2x exports: frames 1280 px (desktop) and 402 px (mobile) wide. | The 2x scale was confirmed on 2026-11-18 by comparing dimensions read in Figma with the PNGs, so it is no longer an assumption. The frame widths are inferred from that comparison ([design.md](design.md#reference-files)). |
| P-11 | Step 02 description: use the desktop text on both breakpoints. | Same source as the D-06 normalization (Q-13). |
| P-12 | Step 02 square: use the desktop peach (`#FFCB9F`) on both breakpoints. | The same peach appears in the hero and final call to action shapes (Q-14). |
| P-13 | Community paragraph: use the body paragraph gray (`#656770`) on both breakpoints. | Every other paragraph uses this gray in both references (Q-15). |
| P-14 | Keep the placeholder Latin paragraph as shown in the references, and list it as a known limitation in the README. | No copy may be invented (Q-16). |
| P-15 | Show `contact@luma.com` with the reference styling as plain text, without a `mailto:` link. | The project does not own that domain, and a link would be an invented destination (Q-17). |
| P-16 | Links and actions: point to an in-page section where one clearly matches. Matches: "Courses", "Categories", "Explore courses", "Browse all courses" and "Explore all courses" go to Learning categories; "See how it works" to How it works; "Community" to Community; the footer "Contact" to Contact. Destinations without a matching section stay pending. | No other pages, login, sign-up or course details are in scope (Q-02, Q-03, Q-04). The owner rejected placeholder destinations (`#`) on 2026-11-18. |
| P-17 | Mobile menu: the menu button opens a panel below the header with the four nav links, "Log in" and "Start learning". The panel closes with Escape, with the menu button, or after a link is chosen, and reuses the header colors and border. | The references show only the closed state (Q-06). This is the minimum accessible behavior. |
| P-18 | Export the community collage as one image with a transparent background, and the step illustrations as SVG. | The final call to action part was approved as D-17. The collage arrived as one image and the steps as PNG candidates (D-19), but this proposal stays open (Q-18). |
| P-19 | The header scrolls with the page (not sticky). | The references show no scroll behavior (Q-19). |

## Open questions

"Needed before" is the first task that cannot start without an answer or an approved proposal.

| ID | Question | Proposal | Needed before |
| --- | --- | --- | --- |
| Q-01 | Exact values from the Figma file. The PNG exports were examined on 2026-11-18, but direct Figma access is unavailable. Screenshots of the Figma inspect panel cover part of the values. | P-09 (confirmed); D-21 for colors | Not blocking the visual analysis (owner decision, 2026-11-18) |
| Q-02 | Destinations of navigation links, buttons, calls to action and footer links. | P-16 | T-04 |
| Q-03 | What login and sign-up do, given there is no real authentication. | P-16 | T-04 |
| Q-04 | What the course actions do. | P-16 | T-05 |
| Q-05 | Contact form validation rules, submit behavior and messages. The fields are known ([design.md](design.md#contact)). | P-06 | T-07 |
| Q-06 | Mobile menu behavior. The references show only the closed state. | P-17 | T-04 |
| Q-07 | Metadata content: description, social preview image and favicon. Not in the references. | | T-11 |
| Q-08 | Test tooling. The `test` commit type is approved, but no test runner is installed, and adding one needs a dependency decision. | | Before any test is written |
| Q-09 | Publishing target for the delivery. | | T-11 |
| Q-10 | Remaining text styles. Families and weights are decided (D-20) and six styles are confirmed ([design.md](design.md#type-styles)). Pending: the mobile overline and button label (T-04), the section headings and card titles (T-05), and the step titles, quote, metrics and small texts (their sections). | | T-04 |
| Q-11 | Narrowest supported width, the breakpoint where the desktop composition starts, and how the D-22 margins change between widths. The 2x scale was confirmed on 2026-11-18, and the frame widths (1280 and 402) are inferred from it. | P-05, P-01 | T-04 |
| Q-13 | The step 02 description differs between the references. | P-11 | T-05 |
| Q-14 | The step 02 square color differs between the references. | P-12 | T-05 |
| Q-15 | The community paragraph color differs between the references. | P-13 | T-06 |
| Q-16 | The community paragraph is placeholder text in both references. | P-14 | T-06 |
| Q-17 | Whether the contact email is a link. | P-15 | T-07 |
| Q-18 | Remaining asset exports and their formats: the two photos without embedded elements and the missing assets, which the owner will provide ([design.md](design.md#missing-or-to-re-export)). | P-18 | T-04 (hero photo, star, hero avatars, menu icon), T-05 (featured photo, arrow), T-06 (quote mark) |
| Q-19 | Header behavior on scroll. | P-19 | T-04 |
| Q-20 | Whether `Container-2.svg` (about 1 px visible in the reference) is needed. It is not omitted automatically. | | T-07, in the visual comparison |

Resolved on 2026-11-18: Q-12 (color values), by D-21.
