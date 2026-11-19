# Tasks

Last updated: 2026-11-18.

## Status

Planned → In progress → Ready for review → Validated

- **Planned:** not started.
- **In progress:** being worked on as an approved task.
- **Ready for review:** done and checked by the agent, waiting for the owner's review.
- **Validated:** reviewed and accepted by the owner. The agent records this status only after an explicit instruction from the owner.

## List

| ID | Task | Status | Depends on |
| --- | --- | --- | --- |
| T-01 | Planning and documentation review | Validated | |
| T-02 | Check the Figma file and the assets | Validated | [design.md](design.md) |
| T-03 | Visual foundation | Validated | T-02 (inputs decided in D-20, D-21 and D-22) |
| T-04 | Header and hero | Validated | T-03 (decisions D-23 to D-30) |
| T-05 | Learning categories, featured course and "How it works" | Validated | T-03 (decisions D-31 to D-38 and D-40 to D-42) |
| T-06 | Testimonial and community | Planned | T-03, Q-10, Q-15, Q-16, Q-18 |
| T-07 | Contact, final call to action and footer | Planned | T-03, Q-02, Q-03, Q-05, Q-10, Q-17 |
| T-08 | Integrated review of interactions and accessibility | Planned | T-04 to T-07 |
| T-09 | Visual check on desktop, mobile and intermediate widths | Planned | T-08; Q-18, Q-21 and Q-22 resolved before completion |
| T-10 | Re-evaluate the security issue (README, "Known security issue") | Planned | |
| T-11 | Final README (including D-07), publishing and demo video, as listed in [Delivery requirements](spec.md#delivery-requirements) | Planned | T-09, T-10, Q-07, Q-09 |

Question IDs (Q-xx) and decision IDs (D-xx) refer to [decisions.md](decisions.md).

T-01 was validated by the owner's explicit approval on 2026-11-18. The approval covers the initial documentation only, not the pending proposals or any implementation.

T-02 was validated by the owner's explicit approval on 2026-11-18.

T-03 was validated by the owner's explicit approval on 2026-11-18.

T-04 was validated by the owner's explicit approval on 2026-11-18. Q-18, Q-21, Q-22 and the anchor checks stay open (see [Open items](#open-items)). On 2026-11-18 the owner authorized a change to the hero for Q-23 ([D-39](decisions.md#header-and-hero)); at the normal text size the rendering is pixel-identical to the validated version. The owner reviewed and approved that change together with T-05 on 2026-11-18.

T-05 was validated by the owner's explicit approval on 2026-11-18. The approval covers learning categories, the featured course and "How it works" (D-31 to D-38 and D-40 to D-42), the hero change for Q-23 (D-39) and the shared message behavior (`DemoMessageButton`, used by "Log in", "Explore" and "View course"). It does not resolve the open items below.

## Open items

Validating a task does not resolve the open items below. In particular, validating T-04 and T-05 does not resolve Q-18, Q-21, Q-22, Q-24 or the remaining anchor checks.

### Pending corrections

Changes that need owner input or new exports. Details are in [decisions.md](decisions.md#open-questions).

- [Q-18](decisions.md#open-questions): the remaining asset export, the quote mark (T-06). Separately, a 2x export (or SVG) of the hero photo, hero avatars, star and menu icon, to remove the softness observed at a device pixel ratio of 2; the featured photo is also 1x at its desktop size. Resolve before T-09 is completed.
- [Q-21](decisions.md#open-questions): the mobile framing of the hero photo. Resolve before T-09 is completed.
- [Q-22](decisions.md#open-questions): the 75% opacity of the menu icon in the exported file. Resolve before T-09 is completed.
- [Q-24](decisions.md#open-questions): with enlarged text, the desktop header when the breakpoints do not scale (1024 px), and the hero button labels at 250%. Found during the D-39 checks. To be corrected and verified in T-08 (owner decision, 2026-11-18).

### Final verifications

Checks to run when the related work exists.

- T-06: on desktop, `#how-it-works` stops 273 px below the top of the window, because the page currently ends after that section. Check again that it reaches the top once the sections below exist. Also check that Tab from `#how-it-works` reaches the next control; today there is none, so Tab leaves the page.
- T-06: the "Community" links reach `#community`, with the same focus check.
- T-07: the "For Teams" links reach `#contact`, with the same focus check.
- T-09: the visual check of the header and hero is repeated after Q-18, Q-21 and Q-22 are resolved. The sharpness of the step PNGs, of the arrow mask and of the featured photo is checked ([D-34](decisions.md#courses-and-how-it-works)).

### Resolved

- 2026-11-18: the T-05 anchor checks. The links to `#categories` ("Courses" and "Start learning" in the header and the mobile panel, "Explore courses" in the hero, "Browse all courses") and to `#how-it-works` ("About" in the header and the mobile panel, "See how it works" in the hero) reach their sections, and from the mobile panel focus moves to the section ([D-25](decisions.md#header-and-hero)). The Tab order was checked separately for each section. Checked by the agent ([verification record](#t-05-follow-up-and-q-23-2026-11-18), [featured section](#t-05-featured-course-and-the-three-sections-together-2026-11-18)) and approved with T-05.
- 2026-11-18: Q-25, the contrast of "Browse all courses", by D-42 (white, 5.49:1).
- 2026-11-18: the T-05 featured photo (part of Q-18). The photo without the badge was received, checked and copied to `public/images/`.
- 2026-11-18: the T-04 asset blocker. The four T-04 assets were received, checked and copied to `public/`.
- 2026-11-18: the T-02 blocker. The PNG exports of both frames were received and examined; direct Figma access is still unavailable, and the owner decided it does not block the visual analysis ([design.md](design.md#received)).

## Verification record

Checks run by the agent. They are not a human review.

### T-04, 2026-11-18

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Chrome headless, production build: no horizontal scrolling at 320, 402, 768, 1024, 1280 and 1440 px. One `h1`, all images loaded, and the fonts loaded in Inter 400, 600 and 700 and Plus Jakarta Sans 800.
- Comparison with the references at 402 and 1280 px (2x), by element boxes and by overlay. Layout boxes within about 1 px. The rating card was about 4 px narrower; after the adjustment it measures 1048.1–1257 px (reference 1048.5–1257) on desktop and 184.1–393 px (reference 184–393) on mobile. Line ends of some texts drift 1 to 2 px from font rendering.
- Mobile menu, keyboard and mouse: Enter opens the panel and Tab reaches the first link. Escape closes it and returns focus to "Menu". A link without a target closes the panel and moves focus to "Menu". A link with a target (a temporary element injected in the browser for the test) moves focus to the target. Switching to 1280 px closes the panel without leaving focus on a hidden element.
- "Log in": the message appears on click and on Enter. It is hidden by Escape and by a click outside. In the panel it keeps the panel open, and it starts hidden at every reopening.
- Findings recorded as pending corrections: softness at a device pixel ratio of 2 (Q-18), mobile photo framing (Q-21), menu icon opacity (Q-22).
- Not verified: screen readers, browsers other than Chrome, physical devices.

### T-05 (categories and "How it works"), 2026-11-18

The featured section is not built (Q-18), so these checks do not cover it.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Chrome headless, production build: no horizontal scrolling at 320, 402, 768, 1024, 1280 and 1440 px. One `h1`; the new headings are `h2` and `h3` in order; no duplicate `id`; the three step images load and have empty `alt`.
- Comparison with the references at 402 and 1280 px (2x), by text lines, borders and overlay, with the featured section skipped in the reference. All 70 text lines compared are within 1 px; section heights 720 and 627 px on desktop (reference 720.5 and 627) and 1296 and 1001 px on mobile (reference 1296.5 and 1001). The card and badge corners match the reference. The arrow is 14 × 12 px, drawn in `text-primary` through the mask, 1 px to the right of the reference. The step 02 text and colors differ from the mobile reference on purpose (D-36).
- Anchors at 1280 px, with the mouse and with Enter: "Courses", "Start learning" and "Explore courses" reach `#categories` at the top of the window; "About" and "See how it works" reach `#how-it-works`, which stops 273 px from the top because the page ends there for now. After Enter on "Courses", Tab reaches "Explore Product Design". Corrected on 2026-11-18: this does not apply to `#how-it-works`; after Enter on "See how it works", Tab left the page, as detailed in the follow-up below.
- Anchors at 402 px: "Courses", "About" and "Start learning" in the mobile panel, with the mouse and with the keyboard, and "Explore courses" and "See how it works" in the hero, reach their sections at the top of the window. The panel closes and focus moves to the section, without a visible outline. From `#categories`, Tab reaches "Explore Product Design". From `#how-it-works` there is nothing focusable after it yet.
- "Explore" buttons: accessible names "Explore Product Design", "Explore Technology", "Explore Business" and "Explore Creative". The message "This is a demo. Course pages are not available." appears with the mouse and with Enter. Opening another card's message closes the first one, and Escape or a click outside hides it; focus stays on the button after Escape. At 320, 402 and 1280 px the message stays within the card width and the window.
- "Log in" after the refactor: the message appears and Escape hides it on desktop; in the panel it appears and starts hidden after closing and reopening the panel.
- Text at 200% (default font size 32 px) at 320, 402 and 1280 px: no text cut or outside its card in the new sections, and no horizontal scrolling. Long heading words break at 320 px. The hero cuts text in the same test (Q-23).
- Not verified: screen readers, browsers other than Chrome, physical devices, browser zoom other than the width tests.

### T-05 follow-up and Q-23, 2026-11-18

Checks of D-37 to D-39 and of the anchor focus.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Normal text size unchanged: full-page captures before and after the changes at 320, 402, 768, 1024, 1280 and 1440 px, at 402 and 1280 px with a device pixel ratio of 2, and with the mobile panel open at 320 and 402 px, are pixel-identical. At 402 px with a device pixel ratio of 2, repeated captures alternate between two renderings of the hero photo, in the baseline too; each new capture matches one of the baseline captures. The comparisons with the references were not repeated, because nothing changed at the normal size.
- Enlarged text, 48 combinations: the browser's default font size at 24, 28, 32 and 40 px (150% to 250%; the breakpoints scale too), the root font size set to 200% in the page (the breakpoints do not change) and the normal size, each at 320, 360, 375, 402, 768, 1024, 1280 and 1440 px, with the mobile panel open where it exists. No text is cut, outside the window, wider than its box or covered by another element, and the hero cards never overlap, except the items recorded in Q-24 (header and a button label at 250%). The checks were confirmed to detect an injected overlap and an injected overflowing word.
- Hero with text at 200%: from 320 to 402 px the cards stack below the photo; from 768 px they float as at the normal size. At 320 px the longest heading words break.
- "Explore" message, 48 cases (normal size and 200% by both methods; 320, 402, 768 and 1280 px; four cards), each button first moved to the bottom edge of the window: the message ends up fully inside the window (the page scrolls 60 px at the normal size and up to 284 px at 200%), its full text is shown, no control lies under it, Tab from the first three buttons reaches the next "Explore" without the message covering it, and Escape hides it with focus staying on the button. A click on the message reaches what is under it and closes the message. The last "Explore" was not tested with Tab, because it is the last control of the page for now.
- Focus indicator: every control reached with Tab at 1280 px and at 402 px (panel closed and open) shows a 2 px solid `primary-blue` outline, 2 px away, not clipped and not covered. No element has `tabindex="-1"` at load; after a link in the panel, only the target section has it. A section focused from the panel with the keyboard matches `:focus-visible`, and no outline is drawn.
- Tab order from `#categories`, checked on its own: after the panel link (keyboard and mouse), "Courses" at 1280 px and "Explore courses" at 402 px, Tab goes to "Explore Product Design", "Explore Technology", "Explore Business" and "Explore Creative", then leaves the page. Shift+Tab goes to "See how it works", then "Explore courses".
- Tab order from `#how-it-works`, checked on its own: after the panel link with the keyboard, "About" at 1280 px and "See how it works" at 402 px, Tab leaves the page, because there is no control after the section yet; one more Tab returns to the logo. After the panel link with the mouse, the first Tab went straight to the logo. Shift+Tab goes to "Explore Creative", then "Explore Business".
- After Enter on a link at 1280 px, focus does not move to the section: Chrome moves only the starting point of sequential navigation, and the next Tab continues from there.
- "Log in": the message appears and Escape hides it, on desktop and in the panel; Escape in the panel also closes the panel and returns focus to "Menu". At the normal size the page does not scroll. With text at 200% in a 640 px tall window, the panel message ended up inside the window.
- Not verified: screen readers, browsers other than Chrome, physical devices, text zoom implementations other than the two methods above.

### T-05 featured course and the three sections together, 2026-11-18

The earlier records still hold for the parts this change did not touch; those batteries were not repeated.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Asset: `featured-course-photo.png` found in the authorized folder under the expected name. 538 × 408, fully opaque, no badge; same framing as the photo in `featured-course.png`. Copied with the same SHA-256; the original is unchanged.
- Comparison with the references at 402 and 1280 px (2x), with all three sections in place and no section skipped. The section tops and heights match the references: on desktop, the featured section starts at 1510 px and is 646 px high (reference 1510.5 and 646), and "How it works" starts at 2156 px (reference 2156.5); on mobile they are 2409 and 888 px (reference 2410 and 887.5), and "How it works" starts at 3297 px (reference 3297.5). The photo, the badge and their corners match. All 24 text lines of the featured section are within 1 px. The 70 text lines of categories and "How it works", rechecked at their reference positions, are within 1 px. Mean photo difference 9.4 of 765 on desktop and 12.2 on mobile, so the mobile crop matches the reference.
- "View course" at 320, 402 and 1280 px, with the button first at the top and then at the bottom edge of the window: the message "This is a demo. Course pages are not available." opens above the button, inside the window (the page scrolls when the message would start above it), within the text column and with its full text. It never covers "Browse all courses". Enter opens it; Escape hides it with focus staying on the button; a click outside or on the message closes it. With text at 200% at 320 px, the mouse cases at both edges were repeated, with the same result.
- "Browse all courses" at 402 and 1280 px: the mouse and Enter reach `#categories` at the top of the window, and the next Tab reaches "Explore Product Design".
- Keyboard order: from "Explore Creative", Tab reaches "View course", then "Browse all courses", then leaves the page. From `#how-it-works` (panel link at 402 px, header link at 1280 px), Shift+Tab reaches "Browse all courses", then "View course". Tab from `#how-it-works` still leaves the page. On the blue section the focus outline is 2 px solid white (5.49:1 on `primary-blue`).
- Accessible names: button "View course", link "Browse all courses", heading "Designing products people understand.", image with the drafted text alternative, and the pills as a list.
- No horizontal scrolling at 320, 402, 768, 1024, 1280 and 1440 px. With text at 200% (default font size 32 px) at 320 and 402 px, no text is cut, outside the window or covered. The badge offset was moved to px for this, with no change at the normal size (pixel-identical captures).
- Contrast: white text on `primary-blue` 5.49:1, the dark labels on yellow 14.46:1, "Browse all courses" (`#E7E7EC`) 4.46:1 (Q-25, since resolved by D-42).
- Not verified: screen readers, browsers other than Chrome, physical devices.

### T-05 follow-up: D-40 to D-42, 2026-11-18

Only the checks affected by these changes. D-40 changed no code: the layout below 1024 px and the message placement had already been checked.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Photo text alternative (D-41): the `alt` attribute and the accessibility tree give "Person working at a table with papers, tools and trays of colored material samples."
- "Browse all courses" (D-42), at 402 and 1280 px: computed color white for the text and for the arrow, which follows it through the mask. Contrast on `primary-blue` 5.49:1 for both (AA asks 4.5:1 for this text and 3:1 for the icon). In the 2x capture the label pixels are `#FFFFFF`; the arrow edges are blended, because the mask image is 1x (sharpness check in T-09). Reached with Tab, the link keeps its 2 px solid white focus outline, 2 px away.
- Same-session A/B with a test-only override back to `#E7E7EC`: the change affects only the label and the arrow (3,284 pixels at 1280 px and 3,295 at 402 px, 2x). At 1280 px, 205 more pixels differ in the shadows of the hero cards, which were repainted when the test style was injected. A capture of the same build in the same session is pixel-identical. Comparing with a capture from the earlier build and browser session shows small differences at glyph edges across the page, sections without changes included, so that comparison is not used.
- Not verified: screen readers, browsers other than Chrome, physical devices.
