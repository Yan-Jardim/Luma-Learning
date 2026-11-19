# Decisions

Last updated: 2026-11-19.

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
| D-06 | The contact form is in English on desktop and mobile, normalizing the divergence between the references. | Yes. `src/components/Contact/` and `src/components/ContactForm/` (T-07). |
| D-07 | AI usage is declared in the README, with human review. | Draft in the README, section "AI usage" (T-11), pending the owner's review. |
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
| D-16 | No `npm audit fix --force` and no downgrades for the `picomatch` advisory. The issue is documented and must be re-evaluated before delivery. | Yes. Re-evaluated in T-10 (2026-11-19): the advisory was withdrawn on 2026-11-18 (withdrawn, not fixed: no patched release exists), `npm audit` and `npm audit --omit=dev` report 0 vulnerabilities, and no fix, downgrade or override was applied. README, "Security audit". |

### Design assets

These were approved by the owner on 2026-11-18, during T-02.

| ID | Decision | In repository |
| --- | --- | --- |
| D-17 | The final call to action decorations are used as separate SVG files, one per shape, as exported. This is the decorations part of P-18. | Yes. 12 files for the 13 exports in `public/images/cta/`, placed by `src/components/FinalCta/` ([design.md](design.md#contact-call-to-action-and-footer-measurements-estimate)). |
| D-18 | The project copies of the decoration files use the names suggested in [design.md](design.md#final-call-to-action-decorations), and the original exports stay unchanged. `Container-5.svg` and `Container-6.svg` become one asset used in both positions, because the owner approved this if they are visually equivalent, and the agent checked that they are. | Yes. The copies in `public/images/cta/` use the suggested names and are identical to the originals, which are unchanged; `cta-circle-outline-small.svg` is used in both positions. |
| D-19 | The step illustrations and the contact icons with their tile, received as PNG, are candidates subject to a quality check. SVG is preferred, not a blocker. | Replaced in T-09 by SVG files (D-61): the step illustrations and the contact icons. The email icon includes its tile; the clock tile is drawn in CSS with the same size, radius and color. |

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
| D-23 | Link destinations in the header and hero. Logo: `/`. "Courses", "Start learning" and "Explore courses": `#categories`. "Community": `#community`. "See how it works": `#how-it-works`. "About" (`#how-it-works`) and "For Teams" (`#contact`) are adaptations approved by the owner, not destinations given by the design. The target sections are built in T-05 to T-07: until then the anchors have no target, no empty sections are created to simulate them, and each link is checked when its section is built. This consolidates P-16 for the header and hero. | Yes. `src/content/navigation.ts`, used by `Header`, `MobileMenu`, `Hero`, `Categories` and `HowItWorks`. `#categories` and `#how-it-works` have their sections since T-05, `#community` since T-06 and `#contact` since T-07, so every header and hero anchor has its target. |
| D-24 | "Log in" is a button that presents the accessible message "This is a demo. Sign-in is not available." There is no authentication, network request or new page. | Yes. `src/components/LoginButton/`, built on `src/components/DemoMessageButton/` since T-05: the message appears in a `role="status"` region and stays until Escape or a click outside. Since D-38, a message that opens partly outside the window is scrolled into view; at the normal text size this does not happen for "Log in". |
| D-25 | The header scrolls with the page (not fixed). The mobile menu is a panel below the header, closed at first. Its button has the accessible name "Menu" and uses `aria-expanded` and `aria-controls`. The panel closes with the button, with Escape and when a link is chosen; after Escape, focus returns to the button. When the layout switches to desktop, the panel closes and focus is not left on a hidden element. This consolidates P-19 and the behavior part of P-17. | Yes. `src/components/Header/` and `src/components/MobileMenu/`. Checked with the keyboard in Chrome: Enter, Tab, Escape, link selection and the switch to desktop. Choosing a link moves focus to its target, or to the menu button while the target does not exist yet. The panel content is rendered only while the panel is open. |
| D-26 | The page supports widths from 320 px. 1024 px is the starting point for evaluating breakpoints, and the header and hero may switch at different widths, according to their content. This consolidates P-05 and replaces P-01. | Yes. Checked at 320, 402, 768, 1024, 1280 and 1440 px without horizontal scrolling. The header and the hero both switch at 1024 px, where their desktop composition fits; below it the hero is one column, at most 560 px wide. |
| D-27 | Photos use `next/image`. Shared data modules are created only for repeated content, such as the navigation items. This consolidates P-02 and replaces P-03 with a narrower rule. | Yes. `next/image` for the photos, avatars, logos, icons and illustrations; since T-09 the hero photo and the collage use `getImageProps` with `<picture>` for their mobile versions (D-62). The SVG files and the small avatar PNGs skip optimization. Shared data in `src/content/navigation.ts` and, for the course message used by "Explore" and "View course", `src/content/messages.ts`. |
| D-28 | The mobile overline and the hero button labels use the confirmed desktop styles (`Desktop/Overline`, `Desktop/body 1`). This is an inference: their pixel boxes are equal in both references, which does not prove every typographic property. The other small texts of the header and hero use estimates from the references, marked as estimates and subject to the visual comparison. | Yes. In `src/components/Header/` and `src/components/Hero/`; the estimates are listed in [design.md](design.md#header-and-hero-measurements-estimate). |
| D-29 | The agent drafts the hero photo text alternative in English from the visible content, without inventing an identity or other information about the person. | Yes. Draft in [design.md](design.md#text-alternatives), used on the hero photo. |
| D-30 | The mobile menu panel contains "Courses", "For Teams", "Community", "About", "Log in" and "Start learning", with the same destinations and behaviors as on desktop (D-23, D-24). This consolidates the content part of P-17. | Yes. `src/components/MobileMenu/`. |
| D-39 | The hero keeps its composition at the normal text size and adapts to enlarged text: the heading and the cards adapt to the text, without reducing the font size and without hiding the excess. This resolves Q-23. | Yes. `src/components/Hero/`: words break only when they do not fit their line, the card texts may wrap, and when the photo column is narrower than 11em the cards stack below the photo. At the normal text size the rendering is pixel-identical to the validated T-04 version. |

### Courses and how it works

These were approved by the owner on 2026-11-18, before the T-05 implementation.

| ID | Decision | In repository |
| --- | --- | --- |
| D-31 | The T-05 text styles estimated on the references are used and recorded as estimates in [design.md](design.md#estimated-styles-t-05): section headings, card and step titles, card and step descriptions, the featured paragraph and instructor line, step labels and number badges, pills, and link and button labels. Existing styles are reused where the values coincide. The estimates are refined in the visual comparison and are not Figma values. | Yes. `type-section-heading-mobile`, `type-section-heading-desktop`, `type-card-title`, `type-body-sm` and `type-body-md` in `src/app/globals.css`, used by `Categories`, `FeaturedCourse` and `HowItWorks`. The comparison changed no text style; only the pill padding was refined (6 / 14 inside the border). |
| D-32 | Plus Jakarta Sans 700 is also loaded, for the card and step titles. This extends D-20. | Yes. `src/app/layout.tsx` loads Plus Jakarta Sans 700 and 800. |
| D-33 | The T-05 measurements are the initial layout reference. Card and section heights follow their content, so text is never cut when the font is enlarged, and columns and spacing adapt at intermediate widths. | Yes, for categories and "How it works". The refined measurements and the intermediate layouts (approved in D-37) are in [design.md](design.md#courses-and-how-it-works-measurements-estimate). Heights follow the content; with text at 150%, 175%, 200% and 250%, no text is cut in these sections from 320 to 1440 px. |
| D-34 | The three step PNGs are used as candidates (D-19). The existing white arrow is used as a CSS mask that follows the text color; the original file is unchanged. Their sharpness is checked in T-09. The featured photo with the embedded badge is not used as a substitute: the featured section is finished only after the photo without the badge arrives (Q-18). | Yes. Since T-09 the step illustrations are SVG files and the mask is `icon-arrow-right.svg` (D-61), in the `icon-arrow-right` utility of `src/app/globals.css`: placed in the former 14 × 12 px box and drawn 1 px further left, where the references have it. The featured photo is the 2x export `featured-course-photo@2x.png`. `src/components/FeaturedCourse/` draws the badge as text over the photo. |
| D-35 | "Explore" (one per category card) and "View course" are buttons that present the accessible message "This is a demo. Course pages are not available." Each "Explore" names its category in its accessible name. "Browse all courses" goes to `#categories`. Badges, pills and steps have no interaction. The "Log in" message behavior is reused where it fits. This consolidates P-16 for "Browse all courses". | Yes. "Explore" in `src/components/Categories/`, with accessible names such as "Explore Product Design"; "View course" and "Browse all courses" in `src/components/FeaturedCourse/`. Both buttons use `src/components/DemoMessageButton/`, shared with "Log in", under the conditions of D-38. The "View course" message opens above its button, so it never covers "Browse all courses". |
| D-36 | Step 02 uses the desktop text on both breakpoints ("Follow concise lessons created by professionals who use these skills."), the peach square `#FFCB9F` and the circle `#FF704D`. The steps stay numbered 01, 02 and 03 (D-05). This consolidates P-11 and P-12. | Yes. `src/components/HowItWorks/`; `step-02.png` already has the desktop colors. |
| D-37 | The intermediate layouts of the categories and the steps are approved. They stay documented as implementation choices, not as design values: [design.md](design.md#courses-and-how-it-works-measurements-estimate). | Yes. `src/components/Categories/` and `src/components/HowItWorks/`. |
| D-38 | The "Explore" message is shown as a bubble over the content, on four conditions: it stays inside the window; its full text can be read, also with enlarged text; it does not prevent access to the other controls; and it keeps the approved accessible behavior (D-24, D-35). | Yes. The message is at most as wide as its card; when it opens partly outside the window, the page scrolls just enough to show it; it lets pointer events through, so a click on what is under it reaches that control and closes the message. It is still a `role="status"` region, hidden by Escape or a click outside, and it takes no part in the Tab order. |
| D-40 | The featured section uses one column, at most 560 px wide, below 1024 px, as the hero does. The "View course" message opens above its button, within the window, under the conditions of D-38. | Yes. `src/components/FeaturedCourse/`. |
| D-41 | The featured photo text alternative is "Person working at a table with papers, tools and trays of colored material samples.", provided by the owner. It describes what is visible, without inferring what the person is doing. This replaces the agent draft. | Yes. `src/components/FeaturedCourse/`. |
| D-42 | Accessibility adaptation approved by the owner: the text and arrow of "Browse all courses" are white instead of the reference `#E7E7EC`, whose contrast on `primary-blue` (4.46:1) is below the 4.5:1 that WCAG AA asks for. White reaches 5.49:1. This resolves Q-25. | Yes. `src/components/FeaturedCourse/`; the arrow follows the text color through the mask (D-34). |

### Testimonial and community

| ID | Decision | In repository |
| --- | --- | --- |
| D-43 | The community paragraph keeps the placeholder Latin text of the references exactly, and the README lists it as a known limitation. It uses `text-secondary` (`#656770`) on both breakpoints. This consolidates P-13 and P-14 and resolves Q-15 and Q-16. | Yes. `src/components/Community/` and README, "Known limitations". |
| D-44 | The community collage is used as one image that already includes the light circle; the circle is not drawn again in CSS. This consolidates the collage part of P-18. | Yes. Since T-09 `public/images/community-collage@2x.png` from 1024 px and `community-collage-mobile@2x.png` below it (D-62), both with the light circle, in `src/components/Community/`. |
| D-45 | "Explore teachers and students" is a button that presents the accessible message "This is a demo. Teacher and student profiles are not available.", with the conditions of D-38 (keyboard, focus, closing, full reading, position inside the window). | Yes. `src/components/Community/`, with `DemoMessageButton`. Its label may wrap when the text is enlarged, so the button never leaves the window. |
| D-46 | T-06 text styles, estimates measured on the references and not Figma values: the quote in Plus Jakarta Sans 600, 30 / 44 px with -0.75 px tracking on desktop and 20 / 32 px on mobile; the author name in Inter 700, 16 / 24 px; the role in Inter 400, 14 / 24 px, `text-secondary`. The weight 600 was chosen in the visual comparison among 500, 600 and 700, and it is the only weight added to the loaded fonts. The metric numbers reuse the `Desktop/H1` and `Mobile/H1` values as an inference (equal sizes in the references); they are not `h1` elements. The other texts reuse existing styles. This extends D-20 and D-32. | Yes. `type-quote-desktop` and `type-quote-mobile` in `src/app/globals.css`; Plus Jakarta Sans 600, 700 and 800 in `src/app/layout.tsx`; `src/components/Testimonial/`. |
| D-47 | The metrics may be reorganized to avoid cut text: on mobile they form one row of three, and they stack in one column when their container is narrower than 19em (a 320 px screen, or enlarged text). Below 1024 px the testimonial is one centered column at most 560 px wide, as the other sections with two columns are (D-37, D-40). | Yes. `src/components/Testimonial/`. |
| D-48 | The community collage text alternative is "Collage of people reading, working at laptops, talking in a group and holding books.", approved by the owner. It replaces the agent draft. | Yes. `src/components/Community/`. |
| D-49 | The quote mark is decorative: it has an empty text alternative and is not exposed to assistive technologies, so the quote is read once. The asset received on 2026-11-19 is `icon-quote.png` (PNG, 24 × 22); it was announced as an SVG, and its content matches the reference mark. | Yes. Since T-09 `public/icons/icon-quote.svg` (D-61), in `src/components/Testimonial/`. |

### Contact, call to action and footer

D-50 to D-55 were approved by the owner on 2026-11-19, before the T-07 implementation, and D-56 the same day, during the review.

| ID | Decision | In repository |
| --- | --- | --- |
| D-50 | The contact form uses native validation: the three fields are required, and the email field has `type="email"`. Submitting sends, stores and logs nothing. After a valid submit, the message "This is a demo. Your message was not sent." appears in a `role="status"` region; the fields keep their values, and the message is removed when the user edits again. This consolidates P-06 and resolves Q-05. | Yes. `src/components/ContactForm/`. An invalid submit moves focus to the first invalid field, with the browser's own message. When the demo message opens partly outside the window, the page scrolls just enough to show it, as in D-38. |
| D-51 | `contact@luma.com` is plain text with the reference appearance (`primary-blue`): no `mailto:`, no Tab stop and no link cursor. This consolidates P-15 and resolves Q-17. | Yes. `src/components/Contact/`. |
| D-52 | "Explore all courses" goes to `#categories`. "Join Luma" uses the shared demo message behavior (D-24, D-38) with "This is a demo. Sign-up is not available." This resolves Q-03 and the call to action part of Q-02. | Yes. `src/components/FinalCta/`, with `DemoMessageButton`. The message opens below the button, at most as wide as the button row. |
| D-53 | Footer destinations: "Courses" and "Categories" go to `#categories`, "For Teams" and "Contact" to `#contact`, and "About" to `#how-it-works`, as in the header (D-23). "Instructors", "Careers", "Journal", "Help Center", "Terms" and "Privacy" are buttons that present "This is a demo. This page is not available." The optional adaptations suggested for "Instructors" (`#community`) and "Help Center" (`#contact`) are not applied. This completes P-16 and resolves the footer part of Q-02. | Yes. `src/components/Footer/`. Each message opens above its button, at most as wide as its column, and also closes when focus leaves the button, so it never covers the next focused control. That closing is an option of `DemoMessageButton` (`closeOnFocusOut`); the buttons approved earlier keep their behavior. While a message is open, the controls it covers stay usable: a click goes through the message to them and closes it, and moving focus closes it before they receive focus. Controls use a white focus outline on the dark background. |
| D-54 | The T-07 text styles and measurements are estimates measured on the references, coherent with the existing styles, and not Figma values. Local spacing adjustments and the intermediate widths are implementation choices. Both are recorded in [design.md](design.md#estimated-styles-t-07) with their origin. This resolves Q-10. | Yes. `type-cta-heading-mobile` and `type-cta-heading-desktop` in `src/app/globals.css`; the other texts reuse existing styles. No font weight was added. |
| D-55 | The T-07 assets are copied from the authorized folder, preserving the originals and following D-18: 17 source files become 16 project files, because `Container-5.svg` and `Container-6.svg` are one asset. The transparent area of `cta-avatars.png` is cropped by CSS, without distorting or cutting the faces. `Container-2.svg` is included, and the visual comparison decides Q-20: the reference shows the top 1.5 px of that circle at x 1064 to 1104, and the implementation shows the same part. This resolves Q-20. | Yes. `public/brand/logo-light.svg` and `public/images/cta/` (T-07, identical to the originals). Since T-09 the contact icons are SVG files (D-61) and the avatars are the 2x export `cta-avatars@2x.png` (1312 × 80, not trimmed), drawn at 656 × 40 inside the same 136 × 40 px window. |
| D-56 | The copyright "© 2026 Luma Learning" uses `#E7E7EC` (`footer-heading`) on desktop and mobile. The mobile reference shows it in white; using the desktop color on both is an adaptation approved by the owner. This resolves Q-27. | Yes. `src/components/Footer/`. |

### Integrated review

On 2026-11-19 the owner authorized the interaction and accessibility corrections found in T-08, including Q-24 and Q-28, preserving the approved visual at the normal size. The solutions below were drafted by the agent and approved by the owner with T-08 on 2026-11-19, including the contrast adaptation of D-59.

| ID | Decision | In repository |
| --- | --- | --- |
| D-57 | Enlarged text in the header and the hero buttons. The header bar heights (68 px mobile, 69 px desktop) become minimums with 8 px of vertical padding, so the bar grows with its content; the desktop links may wrap onto more lines, "Log in" stays on one line and the logo keeps its 54 px. The hero button labels may wrap inside their buttons, using the existing button styles that allow it. At the normal size nothing changes. This resolves Q-24. | Yes. `src/components/Header/`, `src/components/Hero/` and `src/styles/buttons.styles.ts` (the unused `secondaryButton` was removed). With the root font size at 200% the desktop links wrap onto two lines at 1024 to 1440 px, and nothing leaves the window; with text at 200% the "Menu" focus outline stays inside the window. |
| D-58 | The testimonial author name and role may wrap when the text is very large, instead of leaving the window. This resolves Q-28. | Yes. `src/components/Testimonial/` (`min-w-0` on the name and role). |
| D-59 | Accessibility adaptation of a color, approved by the owner: `label-gray` goes from the sampled `#6D7384` to `#6C7283`, one level darker per channel. On `cream` the sampled color reaches 4.45:1, below the 4.5:1 that WCAG AA asks for the "STEP 01" to "STEP 03" labels, the "Up to 24 hours on business days" value and the field placeholders; the adapted color reaches 4.52:1 on `cream` and 4.80:1 on white. This extends D-21. | Yes. `--color-label-gray` in `src/app/globals.css`. In full-page captures at the normal size, every changed pixel is at most 1 level darker per channel. |
| D-60 | The community placeholder paragraph (D-43) is marked as Latin (`lang="la"`), so screen readers do not read it with English pronunciation (WCAG 3.1.2). The text is unchanged. | Yes. `src/components/Community/`. |

### Visual check

D-61 and D-62 were approved by the owner on 2026-11-19, during T-09, with the exports listed in [design.md](design.md#missing-or-to-re-export). The implementation details were drafted by the agent and approved with T-09.

| ID | Decision | In repository |
| --- | --- | --- |
| D-61 | The 2x exports and SVG files received on 2026-11-19 replace the 1x PNGs at the approved display sizes: hero photo (desktop), hero avatars, featured photo, testimonial avatar, collage (desktop) and call to action avatars in 2x; stars, menu icon, arrow, quote mark, step illustrations, and email and clock icons in SVG. The menu icon SVG draws solid bars, as in the reference. This resolves Q-18 and Q-22. | Yes. `public/images/` and `public/icons/`, copies identical to the originals (SHA-256); the 1x copies were removed from `public/` (the files remain in the asset folder and in the Git history). The clock SVG came without its tile, which is drawn in CSS like the email tile (40 × 40 px, radius 8, `blue-tint`); the star SVG has a 14 px box, placed with negative margins in the former 10 × 10 place; the arrow SVG has a 20 px box, placed in the 14 × 12 place; the hero avatars are served without optimization, so their box keeps its exact proportion. |
| D-62 | Below 1024 px the hero photo and the community collage use their mobile exports, which reproduce the mobile reference; from 1024 px, the desktop exports. This resolves Q-21 and Q-26. | Yes. `src/components/Hero/` and `src/components/Community/`: `<picture>` with the `srcSet` of `getImageProps`, one text alternative for both files, and the aspect ratio of each layout set in CSS. The mobile collage is 10 px wider than the column (372 × 330 at 402 px), centered, 22 px below the button and 10 px into the bottom padding, as in the mobile reference; the mobile page is now as tall as the reference (7,799 px). |

### Delivery

These were approved by the owner on 2026-11-19, for T-11. D-66 followed the owner's local review.

| ID | Decision | In repository |
| --- | --- | --- |
| D-63 | The delivery has no versioned automated test suite, and no dependency is added for tests. The README keeps this distinct from the automated checks already run, which used scripts outside the repository. This resolves Q-08. | Yes. README, "Verification". No test runner in `package.json`. |
| D-64 | Metadata: the title "Luma Learning — Build skills that actually move you forward" and the hero paragraph as the description; a favicon with a white "l." on a `primary-blue` rounded square, from the logo's own "l" and dot; and the hero of the page without the header (1200 × 630) as the sharing image, also used for Twitter. This resolves Q-07. | Yes. `src/app/layout.tsx` (title, description, Open Graph and Twitter); `src/app/icon.svg`, `favicon.ico` (16, 32 and 48 px), `apple-icon.png` (180 px, square, since iOS rounds the corners) and `opengraph-image.png` with `opengraph-image.alt.txt`. The "l" and the dot are rounded to the pixel grid (4 × 20 and 4 × 4 in a 32 px box), so they stay sharp at 16 px. Twitter reuses the Open Graph image. `metadataBase` waits for the final URL. |
| D-65 | Publishing on Vercel, in the owner's personal account, connected to the existing GitHub repository, with production from `main`. Desired project name `luma-learning-yan-jardim`, subject to availability; no paid domain. This resolves Q-09. | Not yet. No Vercel configuration file is needed (Next.js defaults). The project, its URL and the deployment are pending. |
| D-66 | Every enabled button shows the pointer cursor: "Log in", the menu button, "Explore", "View course", "Explore teachers and students", "Send message", "Join Luma" and the footer buttons. Links keep the browser default, which is already the pointer; text, images, labels and form fields keep their cursor. Demo messages, validation and behaviors do not change. Requested by the owner after the local review on 2026-11-19. | Yes. `button:not(:disabled)` in the base layer of `src/app/globals.css`. |

## Proposals

These are not approved. IDs are not reused. Consolidated proposals: P-04 into D-08, P-08 into D-20, P-10 into D-21, P-19 into D-25, P-01 and P-05 into D-26, P-02 and P-03 into D-27, P-17 into D-25 and D-30, P-11 and P-12 into D-36, P-13 and P-14 into D-43, P-06 into D-50, P-15 into D-51, and P-16 into D-23, D-35, D-52 and D-53. P-18 is partly consolidated (D-17, D-44).

| ID | Proposal | Reason and notes |
| --- | --- | --- |
| P-07 | Add a note to `CLAUDE.md` pointing agents to the Next.js docs bundled in `node_modules/next/dist/docs/`. | That guidance came from the generated `AGENTS.md`, which D-14 disables. |
| P-09 | Treat the PNGs as 2x exports: frames 1280 px (desktop) and 402 px (mobile) wide. | The 2x scale was confirmed on 2026-11-18 by comparing dimensions read in Figma with the PNGs, so it is no longer an assumption. The frame widths are inferred from that comparison ([design.md](design.md#reference-files)). |
| P-18 | Export the community collage as one image with a transparent background, and the step illustrations as SVG. | The final call to action part was approved as D-17 and the collage part as D-44 (one image, as received). The step illustrations arrived as PNG candidates (D-19), so the SVG part stays open (Q-18). |

## Open questions

"Needed before" is the first task that cannot start without an answer or an approved proposal. "Before T-09 is completed" means the item can stay open while T-09 runs, but must be resolved before T-09 is completed.

| ID | Question | Proposal | Needed before |
| --- | --- | --- | --- |
| Q-01 | Exact values from the Figma file. The PNG exports were examined on 2026-11-18, but direct Figma access is unavailable. Screenshots of the Figma inspect panel cover part of the values. | P-09 (confirmed); D-21 for colors | Not blocking the visual analysis (owner decision, 2026-11-18) |

Resolved on 2026-11-18: Q-12 (color values) by D-21, Q-11 (narrowest width and breakpoints) by D-26, Q-19 (header scroll behavior) by D-25, Q-06 (mobile menu) by D-25 and D-30, Q-04 (course actions) by D-35, Q-13 and Q-14 (step 02 text and color) by D-36, Q-23 (hero text with enlarged text) by D-39, Q-25 (contrast of "Browse all courses") by D-42. Resolved on 2026-11-19: Q-15 and Q-16 (community paragraph) by D-43; Q-05 (contact form) by D-50; Q-17 (contact email) by D-51; Q-03 (sign-up) by D-52; Q-02 (remaining link destinations) by D-52 and D-53; Q-10 (remaining text styles) by D-54; Q-20 (`Container-2.svg`) by D-55; Q-27 (copyright color) by D-56; Q-24 (enlarged text in the header and the hero buttons) by D-57; Q-28 (testimonial at 250%) by D-58; Q-18 (asset exports) and Q-22 (menu icon opacity) by D-61; Q-21 (mobile hero framing) and Q-26 (mobile collage) by D-62; Q-08 (test tooling) by D-63; Q-07 (metadata) by D-64; Q-09 (publishing target) by D-65.
