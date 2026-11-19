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
| D-20 | Fonts are loaded with `next/font/google`: Plus Jakarta Sans 800 and Inter 400, 600 and 700. Each confirmed text style ([design.md](design.md#type-styles)) is used on its own element. Other weights and uses stay pending verification. This consolidates the font part of P-02 and P-08, limited to the confirmed weights and styles. | Yes. Fonts in `src/app/layout.tsx`; Inter is the default family, and the six `type-*` utilities are in `src/app/globals.css`. |
| D-21 | The remaining colors sampled from the references are the initial color tokens, with their origin documented in [design.md](design.md#colors). Values confirmed in Figma take priority. This consolidates P-10. | Yes. Color tokens in `src/app/globals.css`; names in [design.md](design.md#colors). |
| D-22 | Desktop container: 1120 px of content with 80 px side margins at the 1280 px reference. Accepted provisionally, and still an estimate. The margins are not fixed for every width, and the responsive behavior must be checked. | Yes. `page-container` utility in `src/app/globals.css`. The side gutters grow linearly from 20 px at 402 px to 80 px at 1280 px and stay at 20 or 80 px outside that range. |

### Header and hero

These were approved by the owner on 2026-11-18, before the T-04 implementation.

| ID | Decision | In repository |
| --- | --- | --- |
| D-23 | Link destinations in the header and hero. Logo: `/`. "Courses", "Start learning" and "Explore courses": `#categories`. "Community": `#community`. "See how it works": `#how-it-works`. "About" (`#how-it-works`) and "For Teams" (`#contact`) are adaptations approved by the owner, not destinations given by the design. The target sections are built in T-05 to T-07: until then the anchors have no target, no empty sections are created to simulate them, and each link is checked when its section is built. This consolidates P-16 for the header and hero. | Yes. `src/content/navigation.ts`, used by `Header`, `MobileMenu`, `Hero`, `Categories` and `HowItWorks`. `#categories` and `#how-it-works` have their sections since T-05; `#community` and `#contact` have no target until T-06 and T-07. |
| D-24 | "Log in" is a button that presents the accessible message "This is a demo. Sign-in is not available." There is no authentication, network request or new page. | Yes. `src/components/LoginButton.tsx`, built on `src/components/DemoMessageButton.tsx` since T-05: the message appears in a `role="status"` region and stays until Escape or a click outside. Since D-38, a message that opens partly outside the window is scrolled into view; at the normal text size this does not happen for "Log in". |
| D-25 | The header scrolls with the page (not fixed). The mobile menu is a panel below the header, closed at first. Its button has the accessible name "Menu" and uses `aria-expanded` and `aria-controls`. The panel closes with the button, with Escape and when a link is chosen; after Escape, focus returns to the button. When the layout switches to desktop, the panel closes and focus is not left on a hidden element. This consolidates P-19 and the behavior part of P-17. | Yes. `src/components/Header.tsx` and `src/components/MobileMenu.tsx`. Checked with the keyboard in Chrome: Enter, Tab, Escape, link selection and the switch to desktop. Choosing a link moves focus to its target, or to the menu button while the target does not exist yet. The panel content is rendered only while the panel is open. |
| D-26 | The page supports widths from 320 px. 1024 px is the starting point for evaluating breakpoints, and the header and hero may switch at different widths, according to their content. This consolidates P-05 and replaces P-01. | Yes. Checked at 320, 402, 768, 1024, 1280 and 1440 px without horizontal scrolling. The header and the hero both switch at 1024 px, where their desktop composition fits; below it the hero is one column, at most 560 px wide. |
| D-27 | Photos use `next/image`. Shared data modules are created only for repeated content, such as the navigation items. This consolidates P-02 and replaces P-03 with a narrower rule. | Yes. `next/image` for the hero and featured photos, avatars, logo, stars, menu icon and step illustrations; the small PNG icons and illustrations skip optimization. Shared data in `src/content/navigation.ts` and, for the course message used by "Explore" and "View course", `src/content/messages.ts`. |
| D-28 | The mobile overline and the hero button labels use the confirmed desktop styles (`Desktop/Overline`, `Desktop/body 1`). This is an inference: their pixel boxes are equal in both references, which does not prove every typographic property. The other small texts of the header and hero use estimates from the references, marked as estimates and subject to the visual comparison. | Yes. In `src/components/Header.tsx` and `src/components/Hero.tsx`; the estimates are listed in [design.md](design.md#header-and-hero-measurements-estimate). |
| D-29 | The agent drafts the hero photo text alternative in English from the visible content, without inventing an identity or other information about the person. | Yes. Draft in [design.md](design.md#text-alternatives), used on the hero photo. |
| D-30 | The mobile menu panel contains "Courses", "For Teams", "Community", "About", "Log in" and "Start learning", with the same destinations and behaviors as on desktop (D-23, D-24). This consolidates the content part of P-17. | Yes. `src/components/MobileMenu.tsx`. |
| D-39 | The hero keeps its composition at the normal text size and adapts to enlarged text: the heading and the cards adapt to the text, without reducing the font size and without hiding the excess. This resolves Q-23. | Yes. `src/components/Hero.tsx`: words break only when they do not fit their line, the card texts may wrap, and when the photo column is narrower than 11em the cards stack below the photo. At the normal text size the rendering is pixel-identical to the validated T-04 version. |

### Courses and how it works

These were approved by the owner on 2026-11-18, before the T-05 implementation.

| ID | Decision | In repository |
| --- | --- | --- |
| D-31 | The T-05 text styles estimated on the references are used and recorded as estimates in [design.md](design.md#estimated-styles-t-05): section headings, card and step titles, card and step descriptions, the featured paragraph and instructor line, step labels and number badges, pills, and link and button labels. Existing styles are reused where the values coincide. The estimates are refined in the visual comparison and are not Figma values. | Yes. `type-section-heading-mobile`, `type-section-heading-desktop`, `type-card-title`, `type-body-sm` and `type-body-md` in `src/app/globals.css`, used by `Categories`, `FeaturedCourse` and `HowItWorks`. The comparison changed no text style; only the pill padding was refined (6 / 14 inside the border). |
| D-32 | Plus Jakarta Sans 700 is also loaded, for the card and step titles. This extends D-20. | Yes. `src/app/layout.tsx` loads Plus Jakarta Sans 700 and 800. |
| D-33 | The T-05 measurements are the initial layout reference. Card and section heights follow their content, so text is never cut when the font is enlarged, and columns and spacing adapt at intermediate widths. | Yes, for categories and "How it works". The refined measurements and the intermediate layouts (approved in D-37) are in [design.md](design.md#courses-and-how-it-works-measurements-estimate). Heights follow the content; with text at 150%, 175%, 200% and 250%, no text is cut in these sections from 320 to 1440 px. |
| D-34 | The three step PNGs are used as candidates (D-19). The existing white arrow is used as a CSS mask that follows the text color; the original file is unchanged. Their sharpness is checked in T-09. The featured photo with the embedded badge is not used as a substitute: the featured section is finished only after the photo without the badge arrives (Q-18). | Yes. The step PNGs and `featured-course-photo.png` (received on 2026-11-18, without the badge) are in `public/images/`, and the arrow in `public/icons/` (copies checked by hash; the originals are unchanged). The mask is the `icon-arrow-right` utility in `src/app/globals.css`. `src/components/FeaturedCourse.tsx` draws the badge as text over the photo. |
| D-35 | "Explore" (one per category card) and "View course" are buttons that present the accessible message "This is a demo. Course pages are not available." Each "Explore" names its category in its accessible name. "Browse all courses" goes to `#categories`. Badges, pills and steps have no interaction. The "Log in" message behavior is reused where it fits. This consolidates P-16 for "Browse all courses". | Yes. "Explore" in `src/components/Categories.tsx`, with accessible names such as "Explore Product Design"; "View course" and "Browse all courses" in `src/components/FeaturedCourse.tsx`. Both buttons use `src/components/DemoMessageButton.tsx`, shared with "Log in", under the conditions of D-38. The "View course" message opens above its button, so it never covers "Browse all courses". |
| D-36 | Step 02 uses the desktop text on both breakpoints ("Follow concise lessons created by professionals who use these skills."), the peach square `#FFCB9F` and the circle `#FF704D`. The steps stay numbered 01, 02 and 03 (D-05). This consolidates P-11 and P-12. | Yes. `src/components/HowItWorks.tsx`; `step-02.png` already has the desktop colors. |
| D-37 | The intermediate layouts of the categories and the steps are approved. They stay documented as implementation choices, not as design values: [design.md](design.md#courses-and-how-it-works-measurements-estimate). | Yes. `src/components/Categories.tsx` and `src/components/HowItWorks.tsx`. |
| D-38 | The "Explore" message is shown as a bubble over the content, on four conditions: it stays inside the window; its full text can be read, also with enlarged text; it does not prevent access to the other controls; and it keeps the approved accessible behavior (D-24, D-35). | Yes. The message is at most as wide as its card; when it opens partly outside the window, the page scrolls just enough to show it; it lets pointer events through, so a click on what is under it reaches that control and closes the message. It is still a `role="status"` region, hidden by Escape or a click outside, and it takes no part in the Tab order. |
| D-40 | The featured section uses one column, at most 560 px wide, below 1024 px, as the hero does. The "View course" message opens above its button, within the window, under the conditions of D-38. | Yes. `src/components/FeaturedCourse.tsx`. |
| D-41 | The featured photo text alternative is "Person working at a table with papers, tools and trays of colored material samples.", provided by the owner. It describes what is visible, without inferring what the person is doing. This replaces the agent draft. | Yes. `src/components/FeaturedCourse.tsx`. |
| D-42 | Accessibility adaptation approved by the owner: the text and arrow of "Browse all courses" are white instead of the reference `#E7E7EC`, whose contrast on `primary-blue` (4.46:1) is below the 4.5:1 that WCAG AA asks for. White reaches 5.49:1. This resolves Q-25. | Yes. `src/components/FeaturedCourse.tsx`; the arrow follows the text color through the mask (D-34). |

## Proposals

These are not approved. IDs are not reused. Consolidated proposals: P-04 into D-08, P-08 into D-20, P-10 into D-21, P-19 into D-25, P-01 and P-05 into D-26, P-02 and P-03 into D-27, P-17 into D-25 and D-30, P-11 and P-12 into D-36. P-16 is partly consolidated (D-23, D-35).

| ID | Proposal | Reason and notes |
| --- | --- | --- |
| P-06 | Contact form with native HTML validation (all three fields required, email format checked), no network request, and a confirmation message after a valid submit. The owner provides the message text. | The references show no validation or success states (Q-05). Native validation needs no invented error texts. |
| P-07 | Add a note to `CLAUDE.md` pointing agents to the Next.js docs bundled in `node_modules/next/dist/docs/`. | That guidance came from the generated `AGENTS.md`, which D-14 disables. |
| P-09 | Treat the PNGs as 2x exports: frames 1280 px (desktop) and 402 px (mobile) wide. | The 2x scale was confirmed on 2026-11-18 by comparing dimensions read in Figma with the PNGs, so it is no longer an assumption. The frame widths are inferred from that comparison ([design.md](design.md#reference-files)). |
| P-13 | Community paragraph: use the body paragraph gray (`#656770`) on both breakpoints. | Every other paragraph uses this gray in both references (Q-15). |
| P-14 | Keep the placeholder Latin paragraph as shown in the references, and list it as a known limitation in the README. | No copy may be invented (Q-16). |
| P-15 | Show `contact@luma.com` with the reference styling as plain text, without a `mailto:` link. | The project does not own that domain, and a link would be an invented destination (Q-17). |
| P-16 | Remaining links: "Categories" (footer) and "Explore all courses" go to `#categories`; the footer "Contact" goes to `#contact`. Destinations without a matching section stay pending. | The header and hero links were approved as D-23, and "Browse all courses" as D-35. No other pages, login, sign-up or course details are in scope (Q-02). The owner rejected placeholder destinations (`#`) on 2026-11-18. |
| P-18 | Export the community collage as one image with a transparent background, and the step illustrations as SVG. | The final call to action part was approved as D-17. The collage arrived as one image and the steps as PNG candidates (D-19), but this proposal stays open (Q-18). |

## Open questions

"Needed before" is the first task that cannot start without an answer or an approved proposal. "Before T-09 is completed" means the item can stay open while T-09 runs, but must be resolved before T-09 is completed.

| ID | Question | Proposal | Needed before |
| --- | --- | --- | --- |
| Q-01 | Exact values from the Figma file. The PNG exports were examined on 2026-11-18, but direct Figma access is unavailable. Screenshots of the Figma inspect panel cover part of the values. | P-09 (confirmed); D-21 for colors | Not blocking the visual analysis (owner decision, 2026-11-18) |
| Q-02 | Destinations of the remaining links: the final call to action and the footer links. The header and hero links are decided in D-23, and the T-05 links in D-35. | P-16 | T-07 |
| Q-03 | What sign-up ("Join Luma") does, given there is no real authentication. "Log in" is decided in D-24. | | T-07 |
| Q-05 | Contact form validation rules, submit behavior and messages. The fields are known ([design.md](design.md#contact)). | P-06 | T-07 |
| Q-07 | Metadata content: description, social preview image and favicon. Not in the references. | | T-11 |
| Q-08 | Test tooling. The `test` commit type is approved, but no test runner is installed, and adding one needs a dependency decision. | | Before any test is written |
| Q-09 | Publishing target for the delivery. | | T-11 |
| Q-10 | Remaining text styles: the quote, metrics and small texts of the T-06 and T-07 sections. Families and weights are decided (D-20, D-32), six styles are confirmed ([design.md](design.md#type-styles)), the header and hero texts are covered by D-28, and the T-05 texts by D-31. | | T-06 |
| Q-15 | The community paragraph color differs between the references. | P-13 | T-06 |
| Q-16 | The community paragraph is placeholder text in both references. | P-14 | T-06 |
| Q-17 | Whether the contact email is a link. | P-15 | T-07 |
| Q-18 | Remaining asset exports and their formats: the quote mark, which the owner will provide. The featured photo without the badge arrived on 2026-11-18, and the dark arrow is no longer needed: the white arrow is used as a CSS mask (D-34). A 2x export (or SVG) of the hero photo, avatars, star and menu icon would remove the softness observed at a device pixel ratio of 2 ([design.md](design.md#raster-resolution)); the featured photo is also 1x at its desktop size (538 × 408). | P-18 | T-06 (quote mark); the 2x exports before T-09 is completed |
| Q-20 | Whether `Container-2.svg` (about 1 px visible in the reference) is needed. It is not omitted automatically. | | T-07, in the visual comparison |
| Q-21 | The mobile reference frames the hero photo differently from the exported file (person smaller, hair cut at the top). Keep the centered crop of the exported file on mobile, or provide a mobile export of the photo. | | Before T-09 is completed |
| Q-22 | The exported `icon-menu.png` draws its bars at 75% opacity (`#171B2C`, alpha 191), while the reference shows solid `#171B2C`. The code adds no opacity. An SVG export of the same layer would keep the 75%, so the layer opacity and the export settings in Figma need checking. | | Before T-09 is completed |
| Q-24 | Found during the enlarged-text checks of D-39, outside the hero. (1) When the root font size is enlarged but the breakpoints do not change with it (the root font size set to 200% in the page), the desktop header at 1024 px pushes "Start learning" out of the window and causes horizontal scrolling; at 1280 px "Log in" wraps onto two lines. With the browser's default font size at 32 px, the breakpoints scale too, the header switches to its mobile layout and nothing is cut. (2) At 250% text and 320 px, beyond the 200% target, the "See how it works" label is about 5 px wider than its button on each side, because the shared button style keeps labels on one line; it stays readable. | | T-08 |

Resolved on 2026-11-18: Q-12 (color values) by D-21, Q-11 (narrowest width and breakpoints) by D-26, Q-19 (header scroll behavior) by D-25, Q-06 (mobile menu) by D-25 and D-30, Q-04 (course actions) by D-35, Q-13 and Q-14 (step 02 text and color) by D-36, Q-23 (hero text with enlarged text) by D-39, Q-25 (contrast of "Browse all courses") by D-42.
