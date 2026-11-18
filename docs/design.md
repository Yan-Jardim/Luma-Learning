# Design inputs

Design information for the Luma Learning landing page, mapped from the references listed in [Received](#received).

## Evidence levels

Every value in this file comes from one of these sources:

- **Figma:** read in the Figma file, from screenshots of the inspect panel and canvas provided by the owner. Direct tool access is still unavailable.
- **Inferred:** derived by comparing values read in Figma with the PNG exports, not read directly in Figma. This applies to the frame widths.
- **Image:** observed in the PNG exports of the desktop and mobile frames.
- **Estimate:** measured on the PNG exports at the confirmed 2x scale. Still an estimate, because it is read from an image.
- **Pending:** not shown in the references.

## Reference files

| Reference | PNG size | Metadata |
| --- | --- | --- |
| Desktop frame export | 2560 × 11383 px | 144 dpi |
| Mobile frame export | 804 × 15598 px | 144 dpi |

- **Scale confirmed: 2x**, by comparing dimensions read in Figma with the PNGs on 2026-11-18. All sizes below are in CSS pixels.
  - Figma: the desktop hero section is 1280 (Fill) × 720; in the PNG it is 2560 × 1440.
  - Figma: the mobile content container between header and footer is 402 (Fill) × 7107.95; in the PNG it is 804 × 14216.
- **Inferred:** frame widths of 1280 px (desktop) and 402 px (mobile). The frame node's own size panel was not shown. The widths follow from the Fill elements above, because every section background spans the full PNG width.
- The original PNGs are not stored in the repository. Temporary crops used for the analysis live in `.design-refs/`, which is excluded from Git locally.

## Page structure

The section order is the same on desktop and mobile (Image). Heights are estimates, except the desktop hero height (Figma).

| # | Section | Background | Desktop composition (Image) | Mobile composition (Image) | Height desktop / mobile |
| --- | --- | --- | --- | --- | --- |
| 1 | Header | Cream | Logo left, four nav links in the center, "Log in" and "Start learning" right, bottom border | Logo left, menu button right, bottom border | ≈69 / ≈68 px, plus a 1 px border |
| 2 | Hero | Cream | Text left; image right with two floating cards and two flat background shapes | Image first, then text; buttons full width and stacked; social proof centered | 720 (Figma) / ≈1044 px |
| 3 | Learning categories | White | Left-aligned heading block; four cards in one row | Cards in one column | ≈720 / ≈1296 px |
| 4 | Featured course | Blue | Image with badge left; content right; button and link side by side | Image first; button full width; link centered below it | ≈646 / ≈888 px |
| 5 | How it works | Cream | Centered heading; three steps in a row, icons joined by a horizontal line | Steps stacked, short vertical line above steps 02 and 03 | ≈627 / ≈1001 px |
| 6 | Testimonial and metrics | White | Quote left; three metrics stacked right, after a vertical divider | Quote, then the three metrics in one row, no divider | ≈525 / ≈524 px |
| 7 | Community | Cream | Text and button left; photo collage right, over a light circle | Text and button, then the collage | ≈722 / ≈789 px |
| 8 | Contact | White | Text and two info cards left; form card right | Text, info cards, then the form card | ≈795 / ≈1095 px |
| 9 | Final call to action | Light yellow | Centered content; decorative shapes in the background; buttons side by side | Centered content; no decorative shapes; buttons full width and stacked | ≈470 / ≈469 px |
| 10 | Footer | Navy | Brand column and three link columns; divider; copyright left | Brand; Explore and Company side by side; Support below; copyright centered | ≈395 / ≈622 px |

## Copy (Image)

The texts below are identical on desktop and mobile unless a note says otherwise. The contact form uses the desktop texts ([D-06](decisions.md#approved)).

### Header

- Logo "luma.", nav links "Courses", "For Teams", "Community", "About", then "Log in" and "Start learning".

### Hero

- Eyebrow: LEARN AT YOUR OWN PACE
- Heading: Build skills that actually move you forward.
- Paragraph: Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.
- Buttons: "Explore courses", "See how it works".
- Social proof: three avatars and "**Trusted by 24,000+** learners".
- Floating cards: "120+" badge with "expert-led courses"; five stars with "4.9 avg rating".

### Learning categories

- Eyebrow: FIND YOUR NEXT SKILL
- Heading: Learn something worth knowing.
- Paragraph: Short, practical courses designed around skills you can put to work immediately.
- Cards (number, title, description), each with an "Explore" link and an arrow:
  - 01 Product Design: Turn complex problems into clear, useful experiences.
  - 02 Technology: Build a stronger understanding of the tools shaping digital products.
  - 03 Business: Develop practical skills for better decisions and stronger teams.
  - 04 Creative: Explore new ways to communicate, create and tell stories.

### Featured course

- Badge: FEATURED COURSE
- Eyebrow: MOST POPULAR THIS MONTH
- Heading: Designing products people understand.
- Paragraph: Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.
- Instructor: with Maya Chen · Senior Product Designer
- Pills: "8 lessons", "2h 40min", "Intermediate".
- Actions: "View course" button; "Browse all courses" link with an arrow.

### How it works

- Eyebrow: HOW LUMA WORKS
- Heading: Less browsing. More learning.
- Steps (label, title, description):
  - STEP 01, Choose your focus: Find courses based on the skill you want to build, not endless content categories.
  - STEP 02, Learn from experience: Follow concise lessons created by professionals who use these skills. On mobile: "…professionals who actually use these skills." (divergence 3).
  - STEP 03, Put it into practice: Every course includes practical exercises designed to turn knowledge into action.

### Testimonial and metrics

- Quote: The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.
- Author: Alex Morgan, Product Manager, with an avatar.
- Metrics: "24K+" active learners · "120+" expert-led courses · "92%" complete their first course.

### Community

- Eyebrow: THE PEOPLE
- Heading: Meet international students & teachers
- Paragraph: placeholder Latin text in both references: "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer." ([Q-16](decisions.md#open-questions))
- Button: Explore teachers and students

### Contact

- Eyebrow: CONTACT
- Heading: Get in touch
- Paragraph: Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.
- Info cards: "Email" with `contact@luma.com` (styled as a link); "Response Time" with "Up to 24 hours on business days".
- Form card: "Contact us", "Fill out the fields and we will get in touch."
- Fields (label, placeholder): "Full name", "Your name" · "Email", `youremail@example.com` · "Your question" (multi-line), "Tell us how we can help..."
- Button: Send message

### Final call to action

- Four avatars.
- Heading: What will you learn next?
- Paragraph: Start with one course. Build from there.
- Buttons: "Explore all courses", "Join Luma".

### Footer

- Logo "luma." and "Practical learning for curious people."
- EXPLORE: Courses, Categories, Instructors, For Teams
- COMPANY: About, Careers, Journal
- SUPPORT: Help Center, Contact, Terms, Privacy
- © 2026 Luma Learning
- No social links in either reference.

## Repeated components (Image)

- **Section intro:** eyebrow (uppercase, letter-spaced, blue; white on the featured section) + heading + optional paragraph. Left-aligned, except in How it works and the final call to action, where it is centered.
- **Buttons:** primary (blue fill, white text); secondary (white fill, thin border, dark text); accent (yellow fill, dark text, featured section only). Full width on mobile in the hero, featured course and final call to action.
- **Arrow link:** text with a right arrow ("Explore", "Browse all courses").
- **Category card** (×4): number badge, title, description, arrow link.
- **Badges and pills:** number badge (light blue fill, blue text); "120+" badge; outlined pills on the featured section; "FEATURED COURSE" badge (yellow).
- **Floating card** (×2, hero): white card with shadow.
- **Avatar group:** three avatars in the hero; four avatars with a yellow ring in the final call to action.
- **Step** (×3): illustration, label, title, description.
- **Metric** (×3): large blue number and a caption.
- **Info card** (×2, contact): icon tile, label, value.
- **Form field** (×3): label above a filled input (cream fill, thin border).
- **Footer link group** (×3): uppercase heading and a list of links.

## Colors

Sampled from PNG pixels (Image), except where a Figma variable is named. Sampled values can be shifted by color profiles and antialiasing. All of them are the initial color tokens, and values confirmed in Figma take priority ([D-21](decisions.md#visual-foundation)).

The token column gives the Tailwind color name defined in `src/app/globals.css` (for example `bg-cream`). Names of Figma variables are kept; the other names are project names, not Figma names.

| Color | Token | Observed use |
| --- | --- | --- |
| `#F9F8F3` | `cream` | Cream background (header, hero, how it works, community), info cards, form inputs |
| `#FFFFFF` | `white` (Tailwind default) | White background (categories, testimonial, contact), cards, secondary buttons, floating cards |
| `#171B2C` | `text-primary` | Headings and strong text; footer background. **Figma:** variable `text-primary`, seen on the desktop H1 |
| `#656770` | `text-secondary` | Body paragraphs. **Figma:** variable `text-secondary`, seen on the mobile hero paragraph |
| `#6D7384` | `label-gray` | Step labels |
| `#3157F6` | `primary-blue` | Primary buttons, eyebrows, links, featured background, metrics, quote mark, icons. **Figma:** variable `primary-blue`, seen on the primary button and the overline |
| `#E2E8FF` | `blue-tint` | Number badges, icon tiles, light circles (hero, step 01, community collage) |
| `#DBDFEB` | `line` | Borders and dividers (header, cards, secondary buttons, step connectors, metrics divider) |
| `#FFEE7E` | `yellow` | "FEATURED COURSE" badge, "View course" button, rating stars |
| `#FFF1C2` | `yellow-tint` | Final call to action background, step 03 square |
| `#FFCB9F` | `peach` | Peach shapes (hero, step 02 on desktop, final call to action) |
| `#FF704D` | `coral` | Step 02 circle |
| `#E9D659` | `mustard` | Step 03 circle |
| `#9E9FAA` | `footer-link` | Footer links |
| `#E7E7EC` | `footer-heading` | Footer headings |
| `#5B5D68` | `footer-divider` | Footer divider |
| `#FAE4DB` | `peach-tint` | Step 02 square, mobile only (divergence 4) |

## Type styles

- **Figma:** two families: Plus Jakarta Sans for the hero heading and Inter for the paragraph, the overline and the button label. The file has named text styles per breakpoint.
- **Image:** the section headings, the quote and the metrics look like Plus Jakarta Sans; the card and step titles are bold or semibold; the quote is lighter than the headings. Not confirmed ([Q-10](decisions.md#open-questions)).

Confirmed styles (Figma):

| Style | Family | Weight | Size / line height | Letter spacing | Seen on | Utility |
| --- | --- | --- | --- | --- | --- | --- |
| `Desktop/H1` | Plus Jakarta Sans | 800 | 64 / 70 px | -1.6 px | Hero heading (layer 560 × 210) | `type-desktop-h1` |
| `Mobile/H1` | Plus Jakarta Sans | 800 | 40 / 44 px | -1 px | Hero heading (layer 362 × 132) | `type-mobile-h1` |
| `Desktop/subtitle 1` | Inter | 400 | 18 / 28 px | 0 | Hero paragraph (layer 480 × 84) | `type-desktop-subtitle-1` |
| `Mobile/subtitle 1` | Inter | 400 | 16 / 26 px | 0 | Hero paragraph (layer 362 × 104) | `type-mobile-subtitle-1` |
| `Desktop/body 1` | Inter | 700 | 14 / 24 px | 0 | "See how it works" button label, centered | `type-desktop-body-1` |
| `Desktop/Overline` | Inter | 600 | 12 / 16 px | 1.44 px, uppercase | Eyebrow (layer 193 × 16) | `type-desktop-overline` |

The utilities are defined in `src/app/globals.css`. They set family, weight, size, line height and letter spacing; color is set separately.

The eyebrow text is stored as "Learn at your own pace". The style turns it into uppercase.

Not confirmed yet (Estimate):

| Text | Desktop | Mobile |
| --- | --- | --- |
| Section heading | ≈48 px, line ≈56 px | Pending |
| Card title | ≈20 px | Pending |
| Overline and button label | See the desktop styles | Pending |

## Layout

- **Inferred:** frame width 1280 px desktop and 402 px mobile ([Reference files](#reference-files)).
- **Figma:** desktop hero section 1280 × 720. Desktop hero heading 560 wide; desktop hero paragraph 480 wide.
- **Figma:** mobile content width 362 px: the hero heading, paragraph and primary button fill 362 px. With the inferred 402 px frame, that leaves 20 px per side, symmetric in the image.
- **Estimate, accepted provisionally ([D-22](decisions.md#visual-foundation)):** desktop content width 1120 px with 80 px side margins at the 1280 px reference. The margins are not fixed for every width; the responsive behavior must be checked.
- **Figma:** primary button "Explore courses": radius 8 px, padding 14 px vertical and 28 px horizontal, fill `primary-blue`. Desktop: 167 × 54 (width hugs the label, height fills its row). Mobile: 362 × 52 (full width, height hugs the content).
- **Estimate:** the header button is about 44 px high.
- **Image:** cards, images, inputs and other buttons have rounded corners; their radii are pending.

## Interactions and states

- **Image:** only default states appear. Neither reference shows hover, focus, active, disabled, validation, success, error or open-menu states.
- **Image:** visible interactive elements: nav links, "Log in", "Start learning", the menu button (mobile), hero buttons, category "Explore" links, "View course", "Browse all courses", "Explore teachers and students", the contact email, the three form fields and "Send message", the final call to action buttons, and the footer links.
- **Pending:** how the header behaves on scroll ([Q-19](decisions.md#open-questions)); any animation (static images cannot show it).

## Divergences between the references

| # | Topic | Desktop (Image) | Mobile (Image) | Resolution |
| --- | --- | --- | --- | --- |
| 1 | Step labels | "STEP 01" on all three steps | STEP 01, 02, 03 | [D-05](decisions.md#approved): 01, 02, 03 |
| 2 | Contact form language | English | Portuguese, except the "Contact us" title | [D-06](decisions.md#approved): English |
| 3 | Step 02 description | "…professionals who use these skills." | "…professionals who actually use these skills." | Pending ([Q-13](decisions.md#open-questions)) |
| 4 | Step 02 square color | `#FFCB9F` | `#FAE4DB` | Pending ([Q-14](decisions.md#open-questions)) |
| 5 | Community paragraph color | `#656770` | `#171B2C` | Pending ([Q-15](decisions.md#open-questions)) |

The composition differences listed in [Page structure](#page-structure) follow from the layout and are not treated as divergences.

## Assets to export

The owner exported the assets from Figma on 2026-11-18 into a local folder. The original files stay outside the repository and were not renamed or changed. Suggested names are proposals ([Q-18](decisions.md#open-questions)), except the decoration names, approved in [D-18](decisions.md#design-assets).

### Inventory

27 files: 13 PNG and 14 SVG. No file is empty, no two files are byte-identical, and every real format matches its extension. Pixel sizes compared with the display sizes are in [Raster resolution](#raster-resolution).

| File | Real format and size | Content (Image) | Status |
| --- | --- | --- | --- |
| `logo-dark.svg` | SVG, 54 × 17 | "luma." wordmark, `#171B2C` | OK |
| `logo-light.svg` | SVG, 54 × 17 | Same wordmark, white | OK |
| `hero-student.png` | PNG, 626 × 524 | Hero photo combined with both floating cards (texts included), the peach shape and the light circle | Re-export needed: texts and shapes baked in |
| `featured-course.png` | PNG, 550 × 420 | Featured photo with the "FEATURED COURSE" badge | Re-export needed: badge text baked in |
| `community-collage.png` | PNG, 535 × 530, transparent | Ten photos over the light circle | OK |
| `cta-avatars.png` | PNG, 656 × 40, transparent | Four avatars with yellow rings. Only 136 × 40 is visible; the rest is transparent | Usable; extra transparent area |
| `testimonial-alex-morgan.png` | PNG, 48 × 48, transparent | Round avatar of the testimonial author | OK |
| `step-01.png` | PNG, 56 × 56, transparent | Step 01 illustration | OK |
| `step-02.png` | PNG, 67 × 67, transparent | Step 02 illustration with the desktop colors (`#FFCB9F`, `#FF704D`) | OK |
| `step-03.png` | PNG, 56 × 56 | Step 03 illustration | OK |
| `icon-message.png` | PNG, 40 × 40 | Speech bubble icon on its light blue tile | OK, tile included |
| `icon-clock.png` | PNG, 40 × 40 | Clock icon on its light blue tile | OK, tile included |
| `icon-arrow-right.png` | PNG, 14 × 12, transparent | White arrow | Partial: white variant only |
| `icon-star.png` | PNG, 256 × 96, transparent | Not a star: the whole rating card, with the stars, the "4.9 avg rating" text and the shadow | Wrong content; text baked in |
| `cta-decorations/` | 13 SVG | Final call to action decorations, all `#FFCB9F` | Generic names, see below |

### Final call to action decorations

The thirteen files cover every decoration in the desktop reference. They are used as separate SVGs ([D-17](decisions.md#design-assets)), and the project copies take the suggested names while the originals stay unchanged ([D-18](decisions.md#design-assets)). The files carry no position, so placing them needs positions estimated from the desktop reference.

| Current name | Element identified | Position in the desktop reference (Image) | Suggested name |
| --- | --- | --- | --- |
| `Container.svg` | Outline circle, 108 px, 2 px stroke | Top left | `cta-circle-outline-large.svg` |
| `Container-1.svg` | Filled circle, 120 px, cropped to 120 × 97 | Bottom left, cut by the section edge | `cta-circle-filled.svg` |
| `Container-2.svg` | Filled circle, 40 px, cropped to 40 × 2 | Bottom edge, right of center. About 1 px is visible | `cta-circle-edge.svg`. Kept; whether it is needed is decided in the visual comparison ([Q-20](decisions.md#open-questions)) |
| `Container-3.svg` | Filled rounded square, rotated, cropped to 136 × 113 | Top right, cut by the section edge | `cta-square-filled-top.svg` |
| `Container-4.svg` | Filled rounded square, rotated, cropped to 34 × 67 | Left edge, cut by the section edge | `cta-square-filled-left.svg` |
| `Container-5.svg`, `Container-6.svg` | The same outline circle, 32 px, 2 px stroke. Checked equivalent (see below) | Two small circles: top right of center and bottom right | `cta-circle-outline-small.svg`, one file used twice |
| `Container-7.svg` | Outline rounded square, rotated, 67 px | Top, left of center | `cta-square-outline.svg` |
| `Icon Container.svg` | Bold "B" icon, filled | Bottom, left of center | `cta-icon-bold.svg` |
| `Icon Container-1.svg` | Stacked layers in isometric view, outline, in a 160 px box | Right side, middle | `cta-icon-layers.svg` |
| `Icon Container-2.svg` | Speech bubble with three dots, filled | Left side, middle | `cta-icon-chat.svg` |
| `Icon Container-3.svg` | Drop with rays | Top right, below the filled square | `cta-icon-drop.svg` |
| `Icon Container-4.svg` | Rectangle split in three panels with two half circles, outline | Bottom right | `cta-icon-panels.svg` |

Equivalence of `Container-5.svg` and `Container-6.svg`, checked on 2026-11-18:

- **Files:** they differ only in the generated id of an internal mask. Both are 32 × 32 with the same viewBox, the same path and fill `#FFCB9F`, and neither has an opacity attribute.
- **Image:** in the desktop reference, both circles render as 64 × 64 PNG px rings in solid `#FFCB9F`, with almost the same number of drawn pixels (905 and 902). No instance-level opacity or color change is visible.

### Missing or to re-export

The owner will provide the two photos and the missing assets ([Q-18](decisions.md#open-questions)). Each item is needed before the task that builds its section.

| Item | Reason | Suggested file | Needed before |
| --- | --- | --- | --- |
| Hero photo alone | `hero-student.png` includes the cards, their texts and the shapes, which must be built in HTML and CSS | `hero-student-photo.jpg` | T-04 |
| Star icon | `icon-star.png` is the whole rating card | `icon-star.svg` | T-04 |
| Hero social proof avatars | Not in the folder. `cta-avatars.png` has four avatars with yellow rings, while the hero shows three | `hero-avatars.png` | T-04 |
| Menu icon | Not in the folder | `icon-menu.svg` | T-04 |
| Featured photo alone | `featured-course.png` includes the badge text | `featured-course-photo.jpg` | T-05 |
| Arrow for dark text | Only a white arrow exists, and the category "Explore" links use a dark arrow | `icon-arrow-right.svg`, one SVG for both colors | T-05 |
| Quote mark | Not in the folder | `icon-quote.svg` | T-06 |

Preferences, not blockers:

- SVG for the step illustrations and for the message and clock icons. The PNGs stay as candidates, subject to the quality check ([D-19](decisions.md#design-assets)).
- `cta-avatars.png` has transparent space around the avatars. It can be used as is or trimmed in the project copy.

### Raster resolution

Display sizes are estimates read from the references at the confirmed 2x scale. Density is the number of asset pixels per CSS pixel at that display size. At a density of 1.0, an image is drawn pixel for pixel on a standard screen, while a screen with a device pixel ratio of 2 has to enlarge it.

| File | Pixels | Display size, desktop (Estimate) | Display size, mobile (Estimate) | Density desktop / mobile |
| --- | --- | --- | --- | --- |
| `hero-student.png` | 626 × 524 | ≈600 × 520, photo with cards and shapes | ≈383 × 380, with different proportions | ≈1.0 / ≈1.6 |
| `featured-course.png` | 550 × 420 | ≈538 × 408 photo, plus the badge overhang | ≈362 × 280 photo | ≈1.0 / ≈1.5 |
| `community-collage.png` | 535 × 530 | ≈520 wide | ≈362 wide | ≈1.0 / ≈1.5 |
| `cta-avatars.png` | 656 × 40, of which 136 × 40 visible | ≈136 × 40 | ≈136 × 40 | ≈1.0 / ≈1.0 |
| `testimonial-alex-morgan.png` | 48 × 48 | ≈48 × 48 | ≈48 × 48 | ≈1.0 / ≈1.0 |
| `step-01.png`, `step-03.png` | 56 × 56 | ≈56 × 56 | ≈56 × 56 | ≈1.0 / ≈1.0 |
| `step-02.png` | 67 × 67, of which 64 × 64 visible | ≈64 × 64 | ≈64 × 64 | ≈1.0 / ≈1.0 |
| `icon-message.png`, `icon-clock.png` | 40 × 40 | ≈40 × 40 | ≈40 × 40 | ≈1.0 / ≈1.0 |
| `icon-arrow-right.png` | 14 × 12 | ≈14 × 12 | ≈14 × 12 | ≈1.0 / ≈1.0 |
| `icon-star.png` (rating card) | 256 × 96, shadow included | ≈208 wide card | ≈208 wide card | ≈1.0 / ≈1.0 |

- **Risk:** at a density near 1.0, screens with a device pixel ratio of 2 or more may show these images softer than the reference. The risk is highest for the large photos and for the hard edges of small icons.
- **Observed:** no loss of sharpness has been observed. At their own size the files look sharp, and nothing has been rendered in the browser yet.
- **Next step:** check each image in the visual comparison, and ask for a higher-resolution export only for those that look soft. The hero and featured photos will be exported again anyway, so a 2x export of those two can be considered then.

### Not in the references

- Favicon and social preview image ([Q-07](decisions.md#open-questions)).
- Font files: none in the asset folder ([Q-10](decisions.md#open-questions)).

### Not needed

- Mobile-specific exports: the mobile reference uses the same images, and its final call to action has no decorations.
- The hero background shapes (peach rounded rectangle and light circle): flat colors.

## Checklist

### References

- [x] Desktop reference (PNG export)
- [x] Mobile reference (PNG export)
- [ ] Figma file access: link received, but the tools have no access
- [x] Width of each reference frame: 1280 and 402, inferred from the dimension comparison that confirmed the 2x scale
- [x] Copy for every section, except the community paragraph, which is placeholder text

### Typography

- [x] Font families: Plus Jakarta Sans and Inter confirmed in Figma
- [ ] Weights and styles: six styles confirmed in Figma; the others observed approximately
- [ ] Font sizes and line heights: six styles confirmed in Figma; the others estimated only
- [ ] Font source (files or provider)

### Color, spacing and dimensions

- [x] Color values: `text-primary`, `text-secondary` and `primary-blue` confirmed in Figma; the others sampled from the images and accepted as initial tokens (D-21)
- [ ] Spacing values: estimated only
- [ ] Container widths, grid and section dimensions: mobile content width confirmed; desktop container accepted provisionally as an estimate (D-22); the rest estimated only
- [ ] Border radii, borders and shadows: observed, values pending

### Images, icons and exports

- [x] Logo exported (SVG, dark and light)
- [ ] Images exported: collage, testimonial avatar and final call to action avatars received; hero and featured photos need clean re-exports; hero avatars missing
- [ ] Icons and illustrations exported: steps, contact icons and final call to action decorations received; star, dark arrow, menu and quote missing
- [ ] Favicon and social preview image: not in the references
- [ ] Text alternatives for images (source to be agreed)

### Interactive states and menu

- [ ] Hover, focus, active and disabled states: not in the references
- [ ] Mobile menu: closed state only
- [ ] Form states: not in the references
- [ ] Animations or transitions: none indicated

### Links and buttons

- [ ] Navigation link destinations
- [ ] Button and call-to-action destinations, including login, sign-up and course actions
- [ ] Footer link destinations (no social links in the references)

## Received

| Date | Input | Status |
| --- | --- | --- |
| 2026-11-18 | Figma file link | Not inspected. The Figma tools return "you don't have edit access to this file" for every call. |
| 2026-11-18 | Desktop and mobile reference images, as chat attachments | Not received. They were announced, but no images arrived. |
| 2026-11-18 | PNG exports of the desktop and mobile frames, from a local folder authorized by the owner | Received and examined. Direct Figma access is still unavailable; the owner decided it does not block the visual analysis. Later that day the files were no longer at the authorized path; the local crops in `.design-refs/` remain. |
| 2026-11-18 | Asset exports from the Figma file, from a local folder authorized by the owner | Received and inventoried ([Assets to export](#assets-to-export)). |
| 2026-11-18 | Four screenshots of the Figma file in view mode, shared by the owner in the conversation | Examined. They give the `Desktop/H1` text style, the `text-primary` color, and the dimensions that confirm the 2x scale. One canvas label (560 × 226) belongs to an unidentified selection and was not used. |
| 2026-11-18 | Eight more screenshots of the Figma inspect panel, shared by the owner in the conversation | Examined. They give five more text styles, the `text-secondary` and `primary-blue` colors, the mobile content width and the primary button. |
