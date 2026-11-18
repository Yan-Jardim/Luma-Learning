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
| T-05 | Learning categories, featured course and "How it works" | Planned | T-03, Q-02, Q-04, Q-10, Q-13, Q-14, Q-18 |
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

T-04 was validated by the owner's explicit approval on 2026-11-18. Q-18, Q-21, Q-22 and the anchor checks stay open (see [Open items](#open-items)).

## Open items

Validating a task does not resolve the open items below. In particular, validating T-04 does not resolve Q-18, Q-21, Q-22 or the anchor checks.

### Pending corrections

Changes that need owner input or new exports. Details are in [decisions.md](decisions.md#open-questions).

- [Q-18](decisions.md#open-questions): the remaining asset exports, needed by T-05 and T-06. Separately, a 2x export (or SVG) of the hero photo, hero avatars, star and menu icon, to remove the softness observed at a device pixel ratio of 2. Resolve before T-09 is completed.
- [Q-21](decisions.md#open-questions): the mobile framing of the hero photo. Resolve before T-09 is completed.
- [Q-22](decisions.md#open-questions): the 75% opacity of the menu icon in the exported file. Resolve before T-09 is completed.

### Final verifications

Checks to run when the related work exists.

- T-05: the links to `#categories` ("Courses" and "Start learning" in the header and the mobile panel, "Explore courses" in the hero) and to `#how-it-works` ("About" in the header and the mobile panel, "See how it works" in the hero) reach their sections. From the mobile panel, focus moves to the section ([D-25](decisions.md#header-and-hero)).
- T-06: the "Community" links reach `#community`, with the same focus check.
- T-07: the "For Teams" links reach `#contact`, with the same focus check.
- T-09: the visual check of the header and hero is repeated after Q-18, Q-21 and Q-22 are resolved.

### Resolved

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
