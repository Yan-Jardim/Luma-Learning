# Specification

## Overview

Luma Learning is a responsive landing page for a fictional online course platform. It presents courses, learning categories, teachers and students, a testimonial, a contact form and calls to action.

## Technical scope

- Next.js (App Router), React, TypeScript in strict mode and Tailwind CSS. Tooling and versions are recorded in [decisions.md](decisions.md).
- All content and data are local or mocked.
- Out of scope: backend, real authentication, database and CMS.

## Sections

The names below are working names. Final headings, order, copy, images and layout come from the design references ([design.md](design.md)).

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

- **Fidelity:** match the desktop and mobile references the owner will provide.
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
- Contact form fields, validation rules, submit behavior and feedback messages.
- Interactive states and animations, if any.
- Metadata content.

## Acceptance criteria

Per-section acceptance criteria will be added after the design references are reviewed.
