# Tasks

Last updated: 2026-11-19.

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
| T-06 | Testimonial and community | Validated | T-03 (decisions D-43 to D-49) |
| T-07 | Contact, final call to action and footer | Validated | T-03 (decisions D-50 to D-56) |
| T-08 | Integrated review of interactions and accessibility | Planned | T-04 to T-07 |
| T-09 | Visual check on desktop, mobile and intermediate widths | Planned | T-08; Q-18, Q-21, Q-22 and Q-26 resolved before completion |
| T-10 | Re-evaluate the security issue (README, "Known security issue") | Planned | |
| T-11 | Final README (including D-07), publishing and demo video, as listed in [Delivery requirements](spec.md#delivery-requirements) | Planned | T-09, T-10, Q-07, Q-09 |

Question IDs (Q-xx) and decision IDs (D-xx) refer to [decisions.md](decisions.md).

T-01 was validated by the owner's explicit approval on 2026-11-18. The approval covers the initial documentation only, not the pending proposals or any implementation.

T-02 was validated by the owner's explicit approval on 2026-11-18.

T-03 was validated by the owner's explicit approval on 2026-11-18.

T-04 was validated by the owner's explicit approval on 2026-11-18. Q-18, Q-21, Q-22 and the anchor checks stay open (see [Open items](#open-items)). On 2026-11-18 the owner authorized a change to the hero for Q-23 ([D-39](decisions.md#header-and-hero)); at the normal text size the rendering is pixel-identical to the validated version. The owner reviewed and approved that change together with T-05 on 2026-11-18.

T-05 was validated by the owner's explicit approval on 2026-11-18. The approval covers learning categories, the featured course and "How it works" (D-31 to D-38 and D-40 to D-42), the hero change for Q-23 (D-39) and the shared message behavior (`DemoMessageButton`, used by "Log in", "Explore" and "View course"). It does not resolve the open items below.

T-06 was validated by the owner's explicit approval on 2026-11-19, including the current use of `icon-quote.png` (D-49). The approval does not resolve the open items below.

T-07 was validated by the owner's explicit approval on 2026-11-19, including the avatars fix ([verification record](#t-07-avatars-image-2026-11-19)). It was implemented with D-50 to D-55 ([verification record](#t-07-contact-call-to-action-and-footer-2026-11-19)); during the review the owner approved D-56 (Q-27), moved Q-28 to T-08 ([review follow-up](#t-07-review-follow-up-2026-11-19)) and approved the desktop visual shown in the captures. The approval does not resolve the open items below: Q-24 and Q-28 stay for T-08, and Q-18, Q-21, Q-22 and Q-26 for before T-09 is completed.

## Open items

Validating a task does not resolve the open items below. In particular, validating T-04 to T-07 does not resolve Q-18, Q-21, Q-22, Q-24, Q-26 or Q-28.

### Pending corrections

Changes that need owner input or new exports. Details are in [decisions.md](decisions.md#open-questions).

- [Q-18](decisions.md#open-questions): a 2x export (or SVG) of the hero photo, hero avatars, star and menu icon, to remove the softness observed at a device pixel ratio of 2; the featured photo, the testimonial avatar, the community collage, the quote mark, the contact icons and the call to action avatars are also 1x at their desktop size. Resolve before T-09 is completed.
- [Q-21](decisions.md#open-questions): the mobile framing of the hero photo. Resolve before T-09 is completed.
- [Q-22](decisions.md#open-questions): the 75% opacity of the menu icon in the exported file. Resolve before T-09 is completed.
- [Q-24](decisions.md#open-questions): with enlarged text, the desktop header when the breakpoints do not scale (1024 px), and the hero button labels at 250%. Found during the D-39 checks. To be corrected and verified in T-08 (owner decision, 2026-11-18).
- [Q-26](decisions.md#open-questions): the mobile arrangement of the community collage differs from the exported file. Found during T-06. Resolve before T-09 is completed.
- [Q-28](decisions.md#open-questions): at 250% text and 320 px, beyond the 200% target, the testimonial author name and role leave the window. Found during the T-07 checks, outside T-07. To be corrected and verified in T-08, together with Q-24 (owner decision, 2026-11-19).

### Final verifications

Checks to run when the related work exists.

- T-09: the visual check of the header and hero is repeated after Q-18, Q-21 and Q-22 are resolved. The sharpness of the step PNGs, of the arrow mask, of the featured photo, of the testimonial avatar, of the community collage, of the quote mark, of the contact icons and of the call to action avatars (all 1x) is checked ([D-34](decisions.md#courses-and-how-it-works)).

### Resolved

- 2026-11-19: the T-07 anchor and focus checks. `#community` reaches the top of the window at 1280 and 402 px, and Tab after "Explore teachers and students" reaches "Full name". The "For Teams" links (header, mobile panel and footer) and the footer "Contact" reach `#contact` at the top of the window; from the mobile panel focus moves to `#contact`, and the next Tab reaches "Full name". Checked by the agent ([verification record](#t-07-contact-call-to-action-and-footer-2026-11-19)) and approved with T-07.
- 2026-11-19: Q-27, the copyright color, by D-56: `#E7E7EC` on both breakpoints, an approved adaptation.
- 2026-11-18: the T-05 anchor checks. The links to `#categories` ("Courses" and "Start learning" in the header and the mobile panel, "Explore courses" in the hero, "Browse all courses") and to `#how-it-works` ("About" in the header and the mobile panel, "See how it works" in the hero) reach their sections, and from the mobile panel focus moves to the section ([D-25](decisions.md#header-and-hero)). The Tab order was checked separately for each section. Checked by the agent ([verification record](#t-05-follow-up-and-q-23-2026-11-18), [featured section](#t-05-featured-course-and-the-three-sections-together-2026-11-18)) and approved with T-05.
- 2026-11-19: the T-06 anchor and focus checks. `#how-it-works` reaches the top of the window on desktop and Tab from it reaches "Explore teachers and students"; the "Community" links reach `#community`, focus moves to it from the mobile panel, and the next Tab reaches "Explore teachers and students". The quote mark is in place and the testimonial column keeps the measured positions. Checked by the agent ([verification record](#t-06-testimonial-and-community-2026-11-19), [quote mark](#t-06-quote-mark-2026-11-19)) and approved with T-06.
- 2026-11-19: the T-06 quote mark (part of Q-18). Received as `icon-quote.png`, checked and copied to `public/icons/`.
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

### T-06 testimonial and community, 2026-11-19

The quote mark is not built (Q-18). For the comparison, a test-only empty box of its size (24 × 22, 16 px above the quote) was injected in the browser; nothing is drawn in the code.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Assets: `testimonial-alex-morgan.png` and `community-collage.png` copied to `public/images/`, identical to the originals; the originals are unchanged.
- Quote weight: Plus Jakarta Sans 500, 600 and 700 were compared with a test-only override. At 20 px, 600 reproduces the four mobile line widths within 0.5 px; 500 is narrower and 700 wider. On desktop, 600 at 30 px with -0.75 px tracking in a 600 px box reproduces the three lines, their breaks and their ink height. Only 600 stays loaded.
- Comparison with the references at 402 and 1280 px (2x): 44 text lines within 1.5 px, all but two within 1 px. Section heights: testimonial 526 and 524 px (reference 525 and 523.5), community 722 px on desktop (reference 722). The divider is 1 px longer and the community button 2 px narrower than in the reference. The desktop collage is placed as in the reference; on mobile the reference arranges the photos differently (Q-26).
- Anchors: "About" reaches `#how-it-works` at the top of the window on desktop. "Community" in the header reaches `#community`, which stops 178 px from the top because the page ends there for now; from the mobile panel focus moves to `#community`.
- Keyboard: from `#how-it-works` and from `#community`, Tab reaches "Explore teachers and students" (2 px `primary-blue` outline); Shift+Tab from `#community` reaches "Browse all courses"; after "Explore teachers and students" Tab leaves the page.
- "Explore teachers and students" at 320, 402 and 1280 px, and at 320 px with text at 200%, with the button at the top and at the bottom edge of the window: the message "This is a demo. Teacher and student profiles are not available." is shown inside the window, within its column and in full; no control lies under it; Enter opens it; Escape hides it with focus staying on the button; a click outside closes it.
- Structure: one `h1`; the community heading is an `h2`; the metric numbers are paragraphs, not headings; the quote is a `blockquote` in a `figure` with a `figcaption`; no duplicate `id`; the avatar is decorative; the collage has the drafted text alternative; the community paragraph is `#656770`.
- Metrics layout: one column at 320 px, three columns from 360 px, stacked on desktop. No horizontal scrolling at 320, 360, 402, 768, 1024, 1280 and 1440 px.
- Text at 200% (default font size 32 px) at 320 and 402 px: no text cut, outside the window or covered. "Explore teachers and students" uses a secondary button whose label may wrap, so it no longer overflows; at the normal size the captures are pixel-identical.
- Not verified: screen readers, browsers other than Chrome, physical devices.

### T-06 follow-up: D-48 and the community button, 2026-11-19

Only the checks affected by these changes.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- The collage `alt` is the text approved in D-48.
- "Explore teachers and students" with 29 px horizontal padding: 268 × 54 px at 402 px (x 20–288) and at 1280 px (x 80–348), the reference boxes. With text at 200% at 320 and 402 px, the label wraps inside the button, the button stays in the window and there is no horizontal scrolling.
- Loaded fonts, unchanged by these adjustments: Plus Jakarta Sans 600, 700 and 800; Inter 400, 600 and 700.

### T-06 quote mark, 2026-11-19

Only the checks affected by the quote mark.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Asset: `icon-quote.svg` was announced, and the folder has `icon-quote.png` instead (the only new file, 24 × 22, `#3157F6`). Its content matches the reference mark: mean difference 1.8 of 765 on desktop and 1.9 on mobile (a control shifted by 6 px gives 250). Copied to `public/icons/`, identical to the original.
- Position at 402 and 1280 px (2x): x 80–104 and 137–159 px below the section top on desktop (reference 137.5–159.5), x 20–44 and 60–82 px on mobile (reference identical). Every testimonial and community text line keeps the position measured earlier with the test box; section heights are unchanged (526 and 524 px; community 722 px on desktop).
- Inside the mark box the mean difference is 16.6 (desktop) and 14.9 (mobile) of 765 at 2x, because the PNG is 1x (sharpness check in T-09).
- Accessibility: the mark has an empty `alt`, and the accessibility tree does not expose it; the quote text is exposed once.
- Not verified: screen readers, browsers other than Chrome, physical devices.

### T-07 contact, call to action and footer, 2026-11-19

Chrome headless, production build. Form data in the checks is fictitious and was never printed or logged.

- `npm run lint`, `npx next typegen`, `npx tsc --noEmit` and `npm run build`: passed.
- Assets: the 17 source files became 16 copies (`Container-5.svg` and `Container-6.svg` as one), each identical to its original by SHA-256; the originals were only read. The SVG files contain no scripts and no external references.
- Comparison with the references at 402 and 1280 px (2x), by text lines and element boxes. Desktop: 51 lines, all within 1 px in position; six are 1.5 to 3.5 px wider, from glyph rendering. Mobile: 49 lines within 1.1 px in position; four form lines differ in width because the mobile reference shows them in Portuguese (divergence 2, D-06). Section heights: contact 796 and 1096 px (reference 796 and 1096), call to action 470 and 469 px (reference 469.5 and 469), footer 394 and 622 px (reference 394.5 and 622). During the comparison, the mobile contact paragraph and form subtitle were corrected to 14 px, the footer list items stopped adding 1 px per link, and the copyright was set to 13 px.
- Decorations: the 13 shapes are within 1 px of the reference. Q-20: in the reference the top 1.5 px of `Container-2.svg` is visible at x 1064 to 1104; the implementation shows the same part (8x crops compared). The avatars window shows the four avatars at the reference box (136 × 40), without scaling.
- Raster images: the contact icons match the 2x references (mean difference 8 to 15 of 765; shifted by 6 px, 46 to 50). The call to action avatars are softer (20 to 33), because the file is 1x (Q-18).
- Anchors, with the mouse: "For Teams" (header and footer) and the footer "Contact" reach `#contact`; "Community" reaches `#community`; "Explore all courses" and the footer "Courses" and "Categories" reach `#categories`; the footer "About" reaches `#how-it-works`. Each target is at the top of the window, at 1280 px and, for the footer "Contact" and "Explore all courses", at 402 px. From the mobile panel ("For Teams", "Community"), focus moves to the section.
- Keyboard: after the panel link "For Teams", Tab reaches "Full name" and Shift+Tab "Explore teachers and students"; after the panel link "Community", Tab reaches "Explore teachers and students", then "Full name". After Enter on the header "For Teams" or the footer "Contact", Tab reaches "Full name"; after the footer "About", "Explore teachers and students"; after "Explore all courses", "Explore Product Design". From "Explore teachers and students", Tab goes through "Full name", "Email", "Your question", "Send message", "Explore all courses", "Join Luma" and the eleven footer items in order, then leaves the page; the email address is not a Tab stop.
- Focus indicator: 2 px solid `primary-blue`, 2 px away, on the fields, "Send message", "Explore all courses" and "Join Luma" (on white and `yellow-tint`); 2 px solid white on every footer control. Checked in captures at 402 and 1280 px.
- Form, at 1280 and 402 px: with empty fields, Enter on "Send message" moves focus to "Full name"; then to "Email" (empty, then without "@"), then to "Your question". With valid fields, Enter on "Send message", Enter inside a field and a mouse click show the demo message in the `role="status"` region; the fields keep their values; typing removes the message. The URL does not change, the page makes no network request and writes nothing to the console (CDP network and console events). One browser warning appeared at 402 px: the hero photo preload was not used, because the test reused the tab after the 1280 px run and the browser took a larger cached image; a fresh load at either width gives no warning.
- Form message with "Send message" at the bottom edge of the window, at 320, 402 and 1280 px and with text at 200% at 320 and 1280 px: the message is shown in full inside the window (the page scrolls 36 to 172 px), and the button stays visible and is not covered.
- "Join Luma", at 320, 402 and 1280 px and with text at 200% at 320 and 1280 px, with the button at the top and at the bottom edge of the window: the message "This is a demo. Sign-up is not available." is inside the window, within the button row and in full; it does not cover the focused control; Enter opens it; Escape hides it with focus staying on the button; a click outside closes it. After Tab it stays open, and "Courses" in the footer, now focused, is not covered.
- Footer buttons ("Instructors", "Careers", "Journal", "Help Center", "Terms", "Privacy"), in the same five configurations and at both edges: Enter shows "This is a demo. This page is not available." inside the window, within its column and in full; the focused button stays visible and uncovered; Tab and Shift+Tab close it, and the next focused control is not covered. With the mouse, a click opens it and a click outside closes it.
- Every demo message button visible on the page (13 or 14, in the five configurations above): no message is cut by an ancestor that clips its content, and none scrolls one. This check found that the call to action section clipped the "Join Luma" message and scrolled its own content to show it; now only the decorations layer clips.
- Enlarged text, 48 combinations (default font size 24, 28, 32 and 40 px, root font size 200%, and the normal size; at 320, 360, 375, 402, 768, 1024, 1280 and 1440 px; mobile panel open where it exists): nothing in the T-07 sections is cut, outside the window, wider than its box or covered. Fixed during the checks: the email address left the window at 320 to 375 px with text at 200%; the footer labels and messages did not fit two columns with enlarged text; the footer tagline was squeezed at 1024 px with the root font size at 200%; and some decorations sat behind the text with the root font size at 200% at 1280 and 1440 px, and with the default font size at 32 px at 2560 px. The two remaining findings are outside T-07: the Q-24 items (header at 1024 px with the root font size at 200%, a hero label at 250%) and Q-28 (testimonial at 250% and 320 px).
- No horizontal scrolling at 320, 360, 375, 402, 768, 1024, 1280 and 1440 px, at the normal size and with text at 200%.
- The enlarged-text fixes changed nothing at the normal size: the comparison results are identical before and after them.
- Structure: one `h1` and headings in order; "Get in touch" and "What will you learn next?" are `h2` regions; "Contact us" is an `h3`; the footer is the `contentinfo` landmark, outside `main`, with a navigation named "Footer" and its three headings; no duplicate `id`. Each field has its label, `required` and the `autocomplete` values `name` and `email`; the form has no `action` and no `method`. The contact icons, the avatars and the decorations are not exposed; the footer logo is "Luma".
- Loaded fonts, unchanged: Inter 400, 600 and 700; Plus Jakarta Sans 600, 700 and 800.
- Not verified: screen readers, browsers other than Chrome, physical devices, and the text of the browser's own validation messages.

### T-07 review follow-up, 2026-11-19

No code changed, so only the requested footer check was run; the earlier T-07 records still hold.

- D-56 (Q-27): the copyright was already `#E7E7EC` on both breakpoints; only the documentation changed.
- The question field was already resizable vertically only (`resize-y`); unchanged.
- Footer messages and the controls they cover, in five configurations (320, 402 and 1280 px at the normal size; 320 and 1280 px with text at 200%) and for the six footer buttons: each message was opened with Enter, and the controls under it were listed. A message covers one to three of the links or buttons above its button ("Help Center" covers none at 1280 px). For each of the 49 cases: with the mouse, the covered point belongs to the control, a click activates it (the link changes the address to its anchor; the button shows its own message) and the open message closes; with the keyboard, Shift+Tab from the open button reaches the control, the message closes at the first focus change, the control is not covered when focused, and Enter activates it. No failure, so nothing was changed.
- "Join Luma": no change; its overlap with the footer was checked earlier (message not cut, no control under it).
- Not repeated, because no code changed: lint, type check, build, the reference comparison and the enlarged-text audit.

### T-07 avatars image, 2026-11-19

Only the checks affected by this change.

- Cause: in development, Next.js warned "Image with src `/images/cta-avatars.png` has either width or height modified, but not the other". The image declared 656 × 40 px and was drawn at 136 × 40 with `object-fit: cover`, so only its width changed. The production build does not run this check, so the earlier records did not show it. It appeared at 1280 and 402 px, on clean loads of the development server.
- Found at the same time: with text at 200% (default font size 32 px), the window was 136 × 80 px, because its height was in rem. `object-fit: cover` then enlarged the image 2× and showed only two avatars, with the faces cut.
- Change in `src/components/FinalCta.tsx`: the image is drawn at its own size and proportion (656 × 40), centered in a 136 × 40 px window that clips it. The window shows the same part of the file as before (x 260 to 396), without `object-fit` or scaling. The window is in px, so enlarged text no longer changes the crop.
- Development server: the warning no longer appears, at 1280 and 402 px (two clean loads each) or with text at 200% at 1280 and 320 px. The only other message in these runs, a hydration mismatch, appears only when the test tool sets `loading="eager"` on the images right after load (its diff shows only that attribute); clean loads show no message, before and after the change.
- Production build, full-page captures at 1280 and 402 px (2x), before and after, in the same browser session: identical except 52 pixels inside the avatars (at most 17 of 255 per channel, the same pattern at both widths), from the browser's drawing path; no visible difference. With text at 200% at 1280 and 320 px, the four avatars are now shown whole, at 136 × 40, as at the normal size.
- The image keeps `alt=""` and is not exposed to assistive technologies; the window is a plain `div`.
- No horizontal scrolling at 320, 360, 375, 402, 768, 1024, 1280 and 1440 px, at the normal size and with text at 200%. Enlarged-text audit, 48 combinations: the same two findings outside T-07 (Q-24, Q-28), nothing in T-07.
- `npm run lint`, `npx tsc --noEmit` and `npm run build`: passed.
