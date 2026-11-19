# Luma Learning

Responsive landing page for Luma Learning, a fictional online course platform, built as a Front-End technical challenge for Buzzvel.

The page presents courses, learning categories, a featured course, how the platform works, a testimonial with metrics, the teacher and student community, a contact form, a final call to action and a footer. There is no backend, database, real authentication or CMS: all content is local, and actions that would need a backend show an accessible demo message instead.

## Live project and demo video

- **Live project:** _to be added after publishing._
- **Demo video:** _to be added after recording._

The page will be published on Vercel, from the `main` branch (D-65). The links will be added once the project and the video exist.

## Tech stack

- [Next.js](https://nextjs.org) 16.4.6 (App Router)
- React 19.3.0
- TypeScript 5.9 (strict mode)
- Tailwind CSS 4.3.3
- ESLint 9 with `eslint-config-next`

No other runtime dependency is used. Fonts (Inter and Plus Jakarta Sans) are loaded with `next/font/google`, and images use the Next.js image component.

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). `npm ci` installs the exact versions from `package-lock.json`.

## Build and production

```bash
npm run build
npm run start
```

`npm run build` creates an optimized production build (the page is prerendered as static content), and `npm run start` serves it on [http://localhost:3000](http://localhost:3000).

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

## Project structure

- `src/app/`: root layout (fonts, metadata), the page, `globals.css` (design tokens and text styles), and the icons and sharing image (`icon.svg`, `favicon.ico`, `apple-icon.png`, `opengraph-image.png`).
- `src/components/`: one folder per component, named after it (for example `Header/Header.tsx`): the page sections and the shared pieces (`DemoMessageButton`, `LoginButton`, `MobileMenu`, `ContactForm`). Next to a component, when it needs them: `.data.ts` for static lists, `.styles.ts` for long or repeated Tailwind class sets, `.types.ts` for its own types, and `.utils.ts` for helpers that do not depend on React. Only `DemoMessageButton`, `MobileMenu` and `ContactForm` are client components.
- `src/styles/`: Tailwind class sets shared by several components (buttons, demo messages, section container and headings).
- `src/content/`: shared data (navigation items and section IDs, the demo message of the course actions).
- `public/`: logos, icons and images, as exported from the design file (2x images and SVG files).
- `docs/`: specification, design inputs, decisions and the task list with the verification records.

## Decisions

Every decision was made by the author and is recorded with its status in [docs/decisions.md](docs/decisions.md). The main ones:

- **Demo behaviors instead of invented features:** "Log in", "Join Luma", the course actions ("Explore", "View course"), "Explore teachers and students" and the footer items without a page show an accessible demo message (for example "This is a demo. Sign-in is not available."). In-page links go to the matching sections (D-23, D-24, D-35, D-45, D-52, D-53).
- **Contact form:** native validation of the three required fields; submitting sends, stores and logs nothing and shows "This is a demo. Your message was not sent." (D-50). The email address is plain text, not a `mailto:` link (D-51).
- **Fidelity to the references:** sizes, spacing and text styles not available as Figma values were measured on the 2x PNG exports and are recorded as estimates in [docs/design.md](docs/design.md). The page was compared with the full desktop (1280 px) and mobile (402 px) references.
- **Differences between the desktop and mobile references:** resolved one by one, for example the contact form in English on both (D-06), the step numbering (D-05) and the step 02 text and color (D-36).
- **Intermediate widths and enlarged text:** below 1024 px the sections use one centered column at most 560 px wide; layouts adapt to enlarged text without cutting it (D-37, D-39, D-47, D-54, D-57, D-58).
- **Accessibility adaptations of the design:** "Browse all courses" in white for contrast (D-42), the `label-gray` color one level darker to reach 4.5:1 (D-59), and the copyright color unified on both breakpoints (D-56).
- **Images:** 2x exports and SVG files at the approved display sizes, with mobile versions of the hero photo and the community collage (D-61, D-62).
- **Delivery:** metadata, favicon and sharing image built from the existing identity (D-64), publishing on Vercel (D-65), and no versioned automated test suite (D-63).

## Accessibility

- Semantic landmarks and headings, one `h1`, labelled form fields, and text alternatives for informative images; decorative images are hidden from assistive technology.
- Full keyboard use with a visible focus outline on every control; the mobile menu exposes its state, closes with Escape and moves focus to the chosen section.
- Demo messages are announced through `role="status"` regions and never cover the next focused control.
- Layouts tolerate enlarged text and increased text spacing; the page has no animation, so there is nothing to adapt for reduced motion.
- The community paragraph keeps the placeholder Latin text of the references and is marked `lang="la"`.

## Verification

All checks below were run by the AI agent (see [AI usage](#ai-usage)) in a local Chrome (headless) on the production build, with scripts kept outside the repository; they are recorded in [docs/tasks.md](docs/tasks.md#verification-record). They are not a human review: the author reviewed and approved each task separately.

- **Quality gates:** `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build` pass.
- **Visual comparison** with the full references at 1280 and 402 px (device pixel ratio 2): every section edge within 0.5 px, text lines and elements within 1.5 px (about 1 px relative to their section), images aligned within 0.5 px (the mobile featured photo within about 1 px of its section); the remaining differences are the approved divergences listed in [docs/design.md](docs/design.md#divergences-between-the-references).
- **Widths:** no horizontal scrolling and no cut text at 26 widths from 320 to 2560 px.
- **Keyboard and focus:** the full Tab order on desktop and mobile, a visible outline on every control (contrast at least 4.87:1), and the mobile menu, anchors and demo messages with the keyboard.
- **Automated accessibility rules:** `axe-core` (WCAG 2.0 to 2.2 A and AA, and best practices) in six configurations: no violation.
- **Enlarged text:** 48 combinations (browser text size 150% to 250%, root font size 200%, normal size; 320 to 1440 px), and text spacing (WCAG 1.4.12): no text cut, outside the window or covered.
- **Contact form:** native validation, no network request and no console output when submitting.
- **Hydration:** clean loads of the development server show no hydration or image warning.
- **Metadata:** the production build has the title, the description, the Open Graph and Twitter tags and the three icon links, and their files load; no request fails on page load.
- **Dependencies:** see [Security audit](#security-audit).

Not verified: screen readers (only the accessibility tree exposed by Chrome was checked), browsers other than Chrome, physical devices and touch, screens with a device pixel ratio of 3, forced colors (Windows high contrast), speech input, and the text of the browser's own validation messages. A manual check on real desktop and mobile browsers is still to be done before submission.

There is no automated test suite in the repository, by decision of the author (D-63): no test runner is installed. The automated checks listed above were run with scripts kept outside the repository, so they are not versioned and cannot be run from this repository.

## Known limitations

- **Demo only:** there is no backend. Sign-in, sign-up, course pages, profiles and the footer pages without a section show a demo message, and the contact form does not send anything.
- **Community paragraph:** the "Meet international students & teachers" section shows placeholder Latin text ("Morbi sit egestas dignissim pharetra…"). It is kept exactly as in both design references, because no final copy was provided and copy is not invented for this project.
- **Estimated values:** the Figma file could not be inspected directly. Six text styles and a few colors and sizes are confirmed from screenshots of the file; the rest was measured on the PNG exports and is labelled as an estimate in [docs/design.md](docs/design.md).
- **Metadata:** until the final URL is known, `metadataBase` is not set. On Vercel the sharing image URL is built from the deployment's address; a local production build uses `localhost` and prints a warning.
- **Checks:** only the checks listed in [Verification](#verification) were run.

## Security audit

Re-evaluated on 2026-11-19 (T-10), with npm 10.9.9 and Node.js 22.23.5, on the installed dependencies and `package-lock.json`. Official sources consulted on that date: the GitHub advisory, the NVD entry and the npm registry. No dependency was changed.

- **`npm audit` (development and production dependencies, 432 packages):** found 0 vulnerabilities.
- **`npm audit --omit=dev` (production dependencies: `next`, `react`, `react-dom` and their dependencies):** found 0 vulnerabilities.
- **Advisory recorded earlier:** [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) (CVE-2026-112366), a ReDoS reported in `picomatch` `<= 4.0.7`, was withdrawn by GitHub on 2026-11-18 as "not a security issue", so `npm audit` no longer reports it. The first audit, dated the same day, still listed it. A withdrawn advisory is not a fixed vulnerability: there is no patched `picomatch` release, and nothing was fixed in this project's dependencies.
- **What is still installed:** `picomatch` 2.3.2 (`eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch`) and 4.0.7 (`eslint-config-next` → `eslint-import-resolver-typescript` → `tinyglobby`, also used by `fdir`), development dependencies only, within the versions named by the withdrawn advisory. 4.0.7 is the latest release, so no newer version exists. The NVD entry for CVE-2026-112366 still reads "Awaiting Analysis" (last modified 2026-10-19), so tools that use the NVD instead of the GitHub advisories may still report it.
- **Exposure in this project:** the reported issue needed a glob pattern supplied by an attacker. Here the npm copies run only in development tooling (ESLint), on globs from the repository's own configuration. Next.js bundles its own `picomatch` (`next/dist/compiled/picomatch`, version not stated). In Next.js 16.4.6, the modules that load it directly are build modules (traces, middleware configuration) and the image matchers used by `server/image-optimizer.js`: `shared/lib/match-local-pattern.js`, whose `hasLocalMatch` returns before calling it when `images.localPatterns` is not set, and `shared/lib/match-remote-pattern.js`, which calls it once per entry of `images.remotePatterns` (empty by default). In those paths the patterns come from `next.config.ts`, which sets neither option, and a visitor only controls the URL tested against them. No input where visitors control glob patterns was identified. This covers the paths analyzed; it does not prove that no other code path inside Next.js uses the bundled copy.
- **Limits of this result:** `npm audit` checks the installed packages against the advisories known to the npm registry on that date. It does not look inside code bundled within packages, such as the compiled dependencies of Next.js, and it cannot report issues that are not yet known. This is not a guarantee that the project is free of vulnerabilities. Run `npm audit` and `npm audit --omit=dev` again before publishing (T-11).

## AI usage

This project was built with [Claude Code](https://claude.com/claude-code) (Anthropic) as an AI coding agent, working under the author's direction. The commits made with the agent carry the co-author trailer "Claude Opus 5.5".

- **What the agent did:** it read the design exports and the requirements, proposed plans, implemented the components, styles and documentation, measured the references, and wrote and ran the verification scripts listed in [Verification](#verification).
- **What the author did:** defined the scope and the task order, made every decision recorded in [docs/decisions.md](docs/decisions.md) (including link destinations, demo messages and the accessibility adaptations), provided or approved copy and text alternatives, supplied the design exports, reviewed each task with its captures and checks, and approved it before it was committed and merged.
- **How the output was validated:** each task was checked by the agent with the quality gates and the browser checks above, then reviewed and explicitly approved by the author; the status of every task and its verification record are in [docs/tasks.md](docs/tasks.md). The hero photo text alternative was drafted by the agent from the visible content (D-29); the featured photo and collage alternatives were provided or approved by the author (D-41, D-48). Working rules for the agent are in [CLAUDE.md](CLAUDE.md).

## Time spent

_Approximate time spent: to be added by the author._
