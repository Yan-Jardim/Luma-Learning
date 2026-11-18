# Specification

## Overview

Luma Learning is a responsive landing page for a fictional online course platform. It presents courses, learning categories, teachers and students, a testimonial, a contact form and calls to action.

## Technical scope

- Next.js (App Router), React, TypeScript in strict mode and Tailwind CSS. Tooling and versions are recorded in [decisions.md](decisions.md).
- All content and data are local or mocked.
- Out of scope: backend, real authentication, database and CMS.

## Sections

The names below are working names. The order, copy and composition observed in the references are mapped in [design.md](design.md).

| Section | Notes |
| --- | --- |
| Header and mobile navigation | Link destinations and mobile menu behavior are pending. |
| Hero | |
| Learning categories | |
| Featured course | Course actions are pending. |
| How it works | Steps numbered 01, 02 and 03 ([D-05](decisions.md#approved)). |
| Testimonial and metrics | |
| Teacher and student community | |
| Contact form | In English on desktop and mobile ([D-06](decisions.md#approved)). No real submission, since there is no backend. Form data must not be logged ([CLAUDE.md](../CLAUDE.md)). |
| Final call to action | |
| Footer | Link destinations are pending. |

## General requirements

- **Fidelity:** match the desktop and mobile references ([design.md](design.md)).
- **Responsiveness:** the layout also works at intermediate widths between the two references, not only at the reference widths.
- **Accessibility:**
  - Semantic HTML.
  - Full keyboard navigation with a visible focus indicator.
  - Appropriate text alternatives for images.
  - A label associated with every form field.
- **Performance:** efficient loading of images and fonts.
- **Motion:** if there are animations, respect the user's reduced motion preference (`prefers-reduced-motion`).
- **Metadata:** appropriate page metadata before delivery.
- **Quality gates at delivery:** lint, type check and production build complete without errors.

## Delivery requirements

- Manual check on desktop and mobile, including intermediate widths.
- Public GitHub repository.
- README in English covering installation, running, build, decisions, limitations, approximate time spent, and AI usage with how it was validated.
- Links to the published project and to the demo video, both accessible to the evaluator.
- Disclosure of any failing checks and known issues.

### Source differences

The challenge PDF treats publishing as optional and does not mention a video. The submission form requires a Live Project URL and a Video Demo URL. The delivery will be prepared to meet the submission form.

## Pending behaviors

These are not defined yet. They depend on the design references or on owner decisions. Related questions are tracked in [decisions.md](decisions.md#open-questions).

- Destinations of navigation links, buttons, calls to action and footer links.
- Login and sign-up actions (there is no real authentication).
- Course actions.
- Mobile menu behavior.
- Contact form validation rules, submit behavior and feedback messages. The fields are known.
- Header behavior on scroll.
- Divergences between the references that are not resolved yet ([design.md](design.md#divergences-between-the-references)).
- Interactive states and animations, if any.
- Metadata content.

## Acceptance criteria

The criteria apply at the desktop and mobile references and at intermediate widths. Values marked as estimates in [design.md](design.md) are targets for visual comparison, not exact requirements. Question IDs (Q-xx) refer to [decisions.md](decisions.md#open-questions).

### All sections

- Texts match [design.md](design.md#copy-image), except where an approved decision says otherwise.
- No horizontal scrolling from 320 px ([D-26](decisions.md#header-and-hero)) up to and beyond the desktop reference width.
- Every link, button and form field can be reached and used with the keyboard, with a visible focus indicator.
- Informative images have text alternatives. Decorative images and shapes are hidden from assistive technology.
- The page has one `h1`, the hero heading, and the section headings follow a logical order.

### Header and mobile navigation

- Desktop: logo, the four nav links, "Log in" and "Start learning" as in the reference, with the bottom border.
- Mobile: logo and a menu button. The nav links stay hidden until the menu is opened.
- The menu button is a `button` named "Menu" that exposes its state with `aria-expanded` and points to the panel with `aria-controls`.
- The panel closes with the button, with Escape (focus returns to the button) and when a link is chosen (focus moves to the link's target, or to the menu button while the target does not exist yet). When the layout switches to desktop, the panel closes and focus is not left on a hidden element ([D-25](decisions.md#header-and-hero)).
- The "Log in" message starts hidden every time the panel opens.
- The navigation links are inside a `nav` landmark, and their destinations follow [D-23](decisions.md#header-and-hero).
- "Log in" is a button that presents the accessible message "This is a demo. Sign-in is not available." without a network request or a new page ([D-24](decisions.md#header-and-hero)).
- The header scrolls with the page.

### Hero

- Eyebrow, heading, paragraph, both buttons, social proof, image and both floating cards are present.
- Desktop: text left, image right. Mobile: image above the text, buttons full width and stacked, social proof centered.
- The rating card exposes "4.9 avg rating" as text. The stars are decorative.
- The hero image uses `next/image`, has a text alternative and is not lazy-loaded.
- "Explore courses" and "See how it works" go to the destinations in [D-23](decisions.md#header-and-hero).

### Learning categories

- Four cards in the reference order (01 to 04), each with number, title, description and "Explore" link.
- Desktop: four cards in one row. Mobile: one card per row.
- At intermediate widths, card text is not clipped and does not overflow.
- The accessible name of each "Explore" link identifies its category.

### Featured course

- Blue section with the "FEATURED COURSE" badge over the image, eyebrow, heading, paragraph, instructor line, three pills, "View course" button and "Browse all courses" link.
- Desktop: image left, content right. Mobile: image first, button full width, link centered below it.
- Destinations follow Q-04.

### How it works

- Centered eyebrow and heading.
- Three steps labeled STEP 01, STEP 02 and STEP 03 ([D-05](decisions.md#approved)), each with illustration, title and description, marked up as an ordered list.
- Desktop: three columns with the icons joined by a horizontal line. Mobile: stacked, with the short vertical line between steps.
- The step 02 description and square color follow Q-13 and Q-14.

### Testimonial and metrics

- Quote, author avatar, name and role, and the three metrics with their captions.
- The quote is marked up as a quotation with its attribution.
- Desktop: quote left, metrics stacked on the right after a vertical divider. Mobile: quote, then the metrics in one row without a divider.

### Community

- Eyebrow, heading, paragraph, button and the photo collage over the light circle.
- Desktop: text left, collage right. Mobile: text and button above the collage.
- The paragraph text and color follow Q-16 and Q-15.

### Contact

- Eyebrow, heading, paragraph, both info cards, and the form card with title, subtitle, three fields and "Send message", in English on desktop and mobile ([D-06](decisions.md#approved)).
- Each field has a visible, associated label. The email field uses `type="email"` and the question field is multi-line.
- Desktop: text and info cards left, form card right. Mobile: text, info cards, then the form card.
- Submitting makes no network request and never writes form data to logs. Validation and feedback follow Q-05.
- The contact email follows Q-17.

### Final call to action

- Avatars, heading, paragraph and both buttons, centered.
- Desktop: decorative shapes in the background, buttons side by side. Mobile: no decorative shapes, buttons full width and stacked.

### Footer

- Logo, tagline, the three link groups (Explore, Company, Support) with their links, the divider and "© 2026 Luma Learning".
- Desktop: brand column and three link columns, copyright left. Mobile: Explore and Company side by side, Support below, copyright centered.
- Each link group is a list under its heading, inside the `footer` landmark.
