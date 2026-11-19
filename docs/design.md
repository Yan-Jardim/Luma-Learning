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
- The original PNGs are not stored in the repository. Temporary crops used for the analysis live in `.design-refs/`, which is excluded from Git locally. The full exports were provided again on 2026-11-19 for the T-09 full-page comparison ([Received](#received)).

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
- Info cards: "Email" with `contact@luma.com` (styled as a link; shown as plain text, [D-51](decisions.md#contact-call-to-action-and-footer)); "Response Time" with "Up to 24 hours on business days".
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
| `#6C7283` | `label-gray` | Step labels, metric captions, card descriptions, info card values, placeholders. Sampled `#6D7384`; one level darker per channel for 4.5:1 on `cream`, an accessibility adaptation ([D-59](decisions.md#integrated-review)) |
| `#3157F6` | `primary-blue` | Primary buttons, eyebrows, links, featured background, metrics, quote mark, icons. **Figma:** variable `primary-blue`, seen on the primary button and the overline |
| `#E2E8FF` | `blue-tint` | Number badges, icon tiles, light circles (hero, step 01, community collage) |
| `#DBDFEB` | `line` | Borders and dividers (header, cards, secondary buttons, step connectors, metrics divider) |
| `#FFEE7E` | `yellow` | "FEATURED COURSE" badge, "View course" button, rating stars |
| `#FFF1C2` | `yellow-tint` | Final call to action background, step 03 square |
| `#FFCB9F` | `peach` | Peach shapes (hero, step 02 on desktop, final call to action) |
| `#FF704D` | `coral` | Step 02 circle |
| `#E9D659` | `mustard` | Step 03 circle |
| `#9E9FAA` | `footer-link` | Footer links |
| `#E7E7EC` | `footer-heading` | Footer headings and the copyright on both breakpoints; the mobile reference shows the copyright in white (approved adaptation, [D-56](decisions.md#contact-call-to-action-and-footer)). The references also use it for "Browse all courses" on the featured section; the implementation uses white there instead, an approved accessibility adaptation ([D-42](decisions.md#courses-and-how-it-works)) |
| `#5B5D68` | `footer-divider` | Footer divider |
| `#FAE4DB` | `peach-tint` | Step 02 square in the mobile reference only (divergence 4). Not used: [D-36](decisions.md#courses-and-how-it-works) keeps `#FFCB9F` |

## Type styles

- **Figma:** two families: Plus Jakarta Sans for the hero heading and Inter for the paragraph, the overline and the button label. The file has named text styles per breakpoint.
- **Image:** the section headings, the quote and the metrics look like Plus Jakarta Sans; the card and step titles are bold or semibold; the quote is lighter than the headings. Not confirmed; the estimates in use are recorded per task below ([D-31](decisions.md#courses-and-how-it-works), [D-46](decisions.md#testimonial-and-community), [D-54](decisions.md#contact-call-to-action-and-footer)).

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
| Section heading | See [Estimated styles (T-05)](#estimated-styles-t-05) | Same |
| Card title | See [Estimated styles (T-05)](#estimated-styles-t-05) | Same |
| Overline and hero button labels | Confirmed styles above | Desktop styles, inferred ([D-28](decisions.md#header-and-hero)) |

The inference for mobile rests on equal pixel boxes in both references (Image, 2x PNG px): the eyebrow 381 × 17, "Explore courses" 217 × 25, "See how it works" 229 × 21, and the bold "Trusted by 24,000+" 270 × 25. Equal boxes do not prove every typographic property. The other small texts of the header and hero (nav links, "Log in", the "Start learning" label, the social proof and the floating cards) are estimated from the references during T-04 and marked as estimates.

### Estimated styles (T-05)

Measured on the references at 2x and approved as estimates ([D-31](decisions.md#courses-and-how-it-works), [D-32](decisions.md#courses-and-how-it-works)). They are refined in the visual comparison and are not Figma values. Where a value coincides with a confirmed style, the confirmed style is used.

| Text | Desktop (Estimate) | Mobile (Estimate) | Confirmed style reused |
| --- | --- | --- | --- |
| Section heading | Plus Jakarta Sans 800, 48 / 56 px, letter spacing about -1.2 px | 32 / 36 px, about -0.8 px | — |
| Card and step titles | Plus Jakarta Sans 700, about 20 px | Same | — |
| Card description | Inter 400, 14 / 24 px, `label-gray` | Same | — |
| Step description | Inter 400, 16 / 28 px, `text-secondary` | 14 / 24 px | — |
| Featured paragraph | Inter 400, 16 / 28 px, white | 14 / 24 px | — |
| Featured instructor line | Inter 400, 16 px, white | 14 px | — |
| Section overlines, "STEP 01" labels, number badges | Inter 600, 12 / 16 px, 1.44 px, uppercase | Same | `Desktop/Overline` |
| Section intro paragraph | Inter 400, 18 / 28 px | 16 / 26 px | `Desktop/subtitle 1`, `Mobile/subtitle 1` |
| Pills | Inter 400, 14 / 24 px; 38 px high; 1 px `line` border, then padding 6 / 14 (refined in the comparison) | Same | — |
| "Explore", "View course", "Browse all courses" | Inter 700, 14 / 24 px; "Browse all courses" in `#E7E7EC` in the references, white in the implementation ([D-42](decisions.md#courses-and-how-it-works)) | Same | `Desktop/body 1` |

### Estimated styles (T-06)

Measured on the references at 2x and approved as estimates ([D-46](decisions.md#testimonial-and-community)). They are not Figma values.

| Text | Desktop (Estimate) | Mobile (Estimate) | Confirmed style reused |
| --- | --- | --- | --- |
| Quote | Plus Jakarta Sans 600, 30 / 44 px, tracking -0.75 px, `text-primary`, box up to 600 px | 20 / 32 px, no tracking | — |
| Author name | Inter 700, 16 / 24 px, `text-primary` | Same | — |
| Author role | Inter 400, 14 / 24 px, `text-secondary`, 2 px below the name | Same | — |
| Metric numbers | Plus Jakarta Sans 800, 64 / 70 px, -1.6 px, `primary-blue` | 40 / 44 px, -1 px | `Desktop/H1`, `Mobile/H1` values, by inference (equal sizes); not `h1` elements |
| Metric captions | Inter 400, 14 px, `label-gray`, line height 20 px | 14 / 24 px | — |
| Community overline, heading, paragraph, button | As the other sections; paragraph in `text-secondary` ([D-43](decisions.md#testimonial-and-community)) | Same | `Desktop/Overline`, `Desktop/subtitle 1`, `Mobile/subtitle 1`, `Desktop/body 1` |

The quote weight was chosen among 500, 600 and 700: at 20 px, 600 reproduces the four mobile line widths within 0.5 px, while 500 is narrower and 700 wider. On desktop, 30 px with -0.75 px tracking reproduces the three lines, their breaks and their ink height.

### Estimated styles (T-07)

Measured on the references at 2x and used as estimates ([D-54](decisions.md#contact-call-to-action-and-footer)). They are not Figma values. The first mobile reference showed the form in Portuguese (divergence 2); in the export received on 2026-11-19 it is in English, and every mobile form line matches it within 0.5 px, which confirms the 14 px subtitle.

| Text | Desktop (Estimate) | Mobile (Estimate) | Confirmed style reused |
| --- | --- | --- | --- |
| Contact overline and heading | As the other sections | Same | `Desktop/Overline`; section heading (T-05) |
| Contact paragraph | Inter 400, 18 / 28 px, `text-secondary` | 14 / 24 px | `Desktop/subtitle 1` on desktop |
| Info card label and value | Inter 400, 14 / 24 px; label `text-primary`; value `primary-blue` (email) or `label-gray` (response time) | Same | — |
| "Contact us" | Plus Jakarta Sans 700, 20 px | Same | Card title (T-05) |
| Form subtitle | Inter 400, 14 / 24 px, `text-secondary` | Same | — |
| Field labels | Inter 700, 14 / 24 px, `text-primary` | Same | `Desktop/body 1` |
| Field text and placeholders | Inter 400, 14 / 24 px; text `text-primary`, placeholder `label-gray` | Same | — |
| "Send message", "Explore all courses", "Join Luma" | Inter 700, 14 / 24 px | Same | `Desktop/body 1` |
| Call to action heading | Plus Jakarta Sans 800, 56 / 64 px, -1.4 px | 36 / 40 px, -0.9 px | — (`type-cta-heading-desktop`, `type-cta-heading-mobile`) |
| Call to action paragraph | Inter 400, 18 / 28 px | 16 / 26 px | `Desktop/subtitle 1`, `Mobile/subtitle 1` |
| Footer headings | Inter 600, 12 / 16 px, 1.44 px, uppercase, `footer-heading` | Same | `Desktop/Overline` |
| Footer links and tagline | Inter 400, 14 / 24 px, `footer-link` | Same | — |
| Copyright | Inter 400, 13 / 24 px, `footer-heading` ([D-56](decisions.md#contact-call-to-action-and-footer)) | Same, centered | — |
| Demo messages ("Join Luma", footer) | Inter 400, 14 / 20 px | Same | As the earlier messages |

Origin: the sizes were chosen by matching line widths, line breaks and ink heights. The call to action heading at 56 px with -1.4 px tracking (-0.025 em, as the section headings) gives the reference line width within 1 px. On mobile, the contact paragraph at 14 px reproduces the four reference lines and their breaks; the form subtitle has the ink height of a 14 px line. The copyright needs 13 px: at 14 px it is 153.6 px wide, and the reference 139.5 px.

## Layout

- **Inferred:** frame width 1280 px desktop and 402 px mobile ([Reference files](#reference-files)).
- **Figma:** desktop hero section 1280 × 720. Desktop hero heading 560 wide; desktop hero paragraph 480 wide.
- **Figma:** mobile content width 362 px: the hero heading, paragraph and primary button fill 362 px. With the inferred 402 px frame, that leaves 20 px per side, symmetric in the image.
- **Estimate, accepted provisionally ([D-22](decisions.md#visual-foundation)):** desktop content width 1120 px with 80 px side margins at the 1280 px reference. The margins are not fixed for every width; the responsive behavior must be checked.
- **Figma:** primary button "Explore courses": radius 8 px, padding 14 px vertical and 28 px horizontal, fill `primary-blue`. Desktop: 167 × 54 (width hugs the label, height fills its row). Mobile: 362 × 52 (full width, height hugs the content).
- **Image:** cards, images, inputs and other buttons have rounded corners; their radii are pending, except the ones measured for the header, hero and T-05 below. The T-05 card and badge radii were checked by comparing their corner pixels with the references.

### Header and hero measurements (Estimate)

Measured on the references at 2x and used in T-04 ([D-28](decisions.md#header-and-hero)). The implementation was compared with the references by overlay at 402 and 1280 px.

| Item | Desktop | Mobile |
| --- | --- | --- |
| Header bar | 69 px plus a 1 px bottom border; logo at the content edge; nav centered on the page, 32 px between links; "Log in" 24 px before the button | 68 px plus the border; menu button 36 × 36 at the content edge, icon 24 × 24 |
| "Start learning" (header) | 134 × 44, padding 10 / 20, radius 8, `Desktop/body 1` label | In the menu panel |
| Nav links, "Log in", "learners" | Inter 400, 14 / 24 px, `text-secondary` | Same |
| "Trusted by 24,000+" | Inter 700, 14 / 24 px, `text-primary` | Same |
| Hero padding | 100 px top and bottom | 60 px top and bottom |
| Vertical rhythm | Overline, 16, heading, 24, paragraph, 32, buttons, 32, social proof | Same, but 30 px before the social proof; 40 px from the photo to the overline |
| Buttons | Side by side, 12 px apart; the row is 54 px high | Full width, stacked, 12 px apart |
| Columns | Text 560, gap 60, photo 500 | Photo 346 × 380, inset 8 px inside the content |
| Photo | Radius 20 | Radius 20 |
| Peach shape | 24 px below the photo top, 39 px past its right edge | 24 px below the top, 18 px past the right edge, ends 14 px above the bottom |
| Light circle | 104 px, 44 px past the photo's left edge, 12 px above its bottom | 63 px, 18 px past the left edge, 12 px above the bottom |
| "120+" card | 213 × 56, 22 px left of the photo, 16 px below its top; radius 12; badge 32 px high, 10 px before the text | 8 px left of the photo, 6 px below its top |
| Rating card | 208.5 × 48, 57 px past the photo's right edge, 36 px above its bottom; left padding 18, right 16; stars 10 px, 6 px apart, 10 px before the text | 209 × 48, 19 px past the right edge, 36 px above the bottom |
| Card text | Inter 400, 14 / 24 px, `text-primary`; "120+" in Inter 700, `primary-blue` | Same |

Images (T-09, [D-61](decisions.md#visual-check), [D-62](decisions.md#visual-check)): the photo is the 2x desktop export from 1024 px and the 2x mobile export below it, with the same box and radius; the avatars are a 2x export and the stars an SVG file, in the same places.

Enlarged text in the header and the hero buttons ([D-57](decisions.md#integrated-review)): the bar heights are minimums with 8 px of vertical padding, the desktop links may wrap onto more lines while "Log in" stays on one line and the logo keeps its 54 px, and the hero button labels may wrap inside their buttons. At the normal size nothing changes.

Enlarged text (implementation choice, [D-39](decisions.md#header-and-hero)): the heading breaks a word only when it does not fit its line, and the card texts may wrap. When the photo column is narrower than 11em, the cards stack below the photo instead of floating over it. The 11em threshold comes from measuring the floating cards with text at 100% to 250% and widths from 320 to 1280 px: below about 10.5em they overlap each other, and from 11em they are at least 65 px apart. At the normal text size the column is at least 16.5em wide, so the composition does not change.

### Courses and how it works measurements (Estimate)

Measured on the references at 2x; the initial reference for T-05 ([D-33](decisions.md#courses-and-how-it-works)). Heights follow the content. The values for categories and "How it works" were refined in the comparison with the implementation at 402 and 1280 px (2x): every text line is within 1 px of the reference.

| Item | Desktop | Mobile |
| --- | --- | --- |
| Section padding | Categories: 100 px top and bottom. "How it works": 100 px top, about 128 px bottom (about one more 28 px line below the step text) | 60 px top and bottom in both sections |
| Categories heading block | Overline, 16, heading (wraps after "worth"), 16, intro paragraph, at most 560 px wide | Same rhythm |
| Category cards | Four in a row, 265 × 264.5 px, 20 px apart; 1 px `line` border, radius 16; padding about 30 top, 26 bottom, 28 sides; 40 px below the intro | One per row, full width, about 227 px high, 16 px apart; padding about 26 top, 21 bottom, 24 sides |
| Number badge | 32 × 24, radius 6, `blue-tint`, `primary-blue` text | Same |
| Card content | Badge, 22, title, 14, description, at least 22, "Explore" at the bottom of the card; label and arrow 12 apart, arrow 14 × 12 | Badge, 20, title, 12, description, 22, "Explore" |
| How it works heading | Centered overline and heading (one line); 105 px to the steps | Centered; the heading wraps to two lines; 40 px to the steps |
| Steps | Three columns starting 400 px apart (320 px wide, 80 px gaps); icons 56 px (the 67 px step 02 image is centered on the same 56 px box); a 1 px `line` connector through the icon centers; label 24 px below the icon, 10 to the title, 16 to the description | Stacked, 76 px from a description to the next icon; a 1 px vertical connector, 48 px long, starts about 28 px below the previous description and ends at the next icon; label 24 px below the icon, 8 to the title, 15 to the description |
| Featured course | 100 px top and bottom. Photo 538 × 408, radius 16, centered against the text column (522 px from x 678, 60 px gap). Badge 160 × 28, radius 6, 12 px outside the photo's top left corner, `Desktop/Overline` in `text-primary`. Overline, 16, heading, 20, paragraph, 24, instructor line, 24, pills (93, 93 and 114 × 38, 12 apart, radius 8), 32, buttons row: "View course" 142 × 52, radius 8, then "Browse all courses" 29 px to its right; label and arrow 12 apart, the arrow 2 px higher than in "Explore" | 60 px top and bottom. Photo 362 × 280 (same photo, cropped), radius 16, badge as on desktop; 38 px to the overline; same rhythm; "View course" full width; "Browse all courses" centered in a 48 px tall box, 12 px below the button, its label 3 px below the box center |

Intermediate widths (implementation choice, not shown in the references; [D-33](decisions.md#courses-and-how-it-works), approved by the owner in [D-37](decisions.md#courses-and-how-it-works)): the category cards use one column below 640 px, two from 640 px and four from 1024 px. The steps are stacked below 1024 px, in a centered block at most 560 px wide, and use three columns from 1024 px, 48 px apart, or 80 px from 1280 px. The featured section uses one column, at most 560 px wide, below 1024 px, as the hero does ([D-40](decisions.md#courses-and-how-it-works)). Card padding is in px, so enlarged text keeps its room. Words break only when they do not fit their line, which happens only with very large text on narrow screens.

### Testimonial and community measurements (Estimate)

Measured on the references at 2x and refined in the comparison at 402 and 1280 px: every text line is within 1.5 px of the reference.

| Item | Desktop | Mobile |
| --- | --- | --- |
| Testimonial section | 100 px top and bottom; two columns centered vertically: the quote column (735 px track) and the metrics column (385 px) | 60 px top and bottom; quote, author, then the metrics |
| Quote mark | 24 × 22, `primary-blue`, 16 px above the quote (`icon-quote.png`, decorative, [D-49](decisions.md#testimonial-and-community)) | Same |
| Author | Avatar 48 × 48, round, 32 px below the quote; name and role 16 px to its right; they wrap with very large text ([D-58](decisions.md#integrated-review)) | Avatar 33 px below the quote |
| Metrics | Stacked after a 1 px `line` divider (325 px high), 48 px to its right; each number 70 px high, caption 6 px below, 19 px between metrics | One row of three equal columns, 59 px below the author; in one column below 19em ([D-47](decisions.md#testimonial-and-community)) |
| Community section | 100 px top and bottom; text column (535 px) and collage (535 × 530, right edge at the content edge), 50 px apart, centered vertically; the collage overlaps the bottom padding by 8 px | 60 px top and bottom; text, button, then the mobile collage ([D-62](decisions.md#visual-check)), 10 px wider than the column (372 × 330 at 402 px), centered, 22 px below the button and 10 px into the bottom padding; 790 px high, as the reference |
| Community rhythm | Overline, 8, heading, 32, paragraph, 32, button (268 × 54, horizontal padding 29 px) | Overline, 8, heading, 24, paragraph, 24, button |

Intermediate widths (implementation choice within [D-37](decisions.md#courses-and-how-it-works) and [D-40](decisions.md#courses-and-how-it-works)): below 1024 px the testimonial and the community are one centered column at most 560 px wide.

### Contact, call to action and footer measurements (Estimate)

Measured on the references at 2x and refined in the comparison at 402 and 1280 px ([D-54](decisions.md#contact-call-to-action-and-footer)).

| Item | Desktop | Mobile |
| --- | --- | --- |
| Contact section | 100 px top and bottom; text column and form card in a 480 : 540 grid, 100 px apart, centered vertically; 796 px high, as the reference | 60 px top and bottom; text, info cards, then the form card; 1096 px high, as the reference |
| Contact rhythm | Overline, 16, heading, 16, paragraph, 40, info cards, 16 px apart | Same, but 32 before the info cards; 40 from the cards to the form card |
| Info cards | `cream`, radius 12, padding 20, 92 px high; icon 40 × 40, 16 px before the text; label and value 4 px apart | Padding 16, 82 px high; label and value 2 px apart |
| Form card | 540 × 596; white, 1 px `line` border, radius 16, shadow 0 8 24 px `#171B2C` at 8%; inside the border 39 px on the sides, 41 at the top and 39 at the bottom | 362 × 544; inside the border 19 px on the sides, 25 at the top and 23 at the bottom |
| Form rhythm | Title, 10, subtitle, 24, label, 8, field, 20 to the next label; the question field at least 120 px; 24, then "Send message", 52 px high and full width; the demo message 16 px below | Same; the question field at least 100 px |
| Fields | 48 px high, `cream`, 1 px `line` border, radius 8, 16 px side padding; the question field can be resized vertically only | Same |
| Call to action section | `yellow-tint`; 100 px top and bottom; 470 px high (reference 469.5) | 60 px top and bottom; 469 px high, as the reference; no decorations |
| Call to action rhythm | Avatars (136 × 40), 32, heading, 15, paragraph, 37, buttons | Avatars, 32, heading, 16, paragraph, 37, buttons |
| Call to action buttons | Side by side, centered, 12 px apart: 185 × 54 and 128 × 54 | Full width, stacked, 12 px apart |
| Footer | `text-primary` background; 80 px top, 38 bottom; brand column (logo 54 × 17, 12 px to the tagline, at most 220 px wide) and three link columns of 192 px, 48 px apart; 394 px high (reference 394.5) | 60 px top, 19 bottom; brand, 40, then the groups in two columns 40 px apart: Explore and Company, then Support; 622 px high, as the reference |
| Link groups | Heading, 16, links on 24 px lines, 12 px apart | Same |
| Divider and copyright | 1 px `footer-divider`, 66 px below the link columns; copyright 21 px below it, aligned left | 36 px below the groups; copyright centered |

Call to action decorations, placed from the desktop reference (1280 px). Shapes cut by a section edge stay on that edge; the others keep their distance from the page center (x is given at 1280 px, where the center is 640). Every shape is within 1 px of the reference.

| File | Size | x at 1280 px | Vertical position |
| --- | --- | --- | --- |
| `cta-square-filled-top.svg` | 136 × 113 | Right edge | Top 0 |
| `cta-circle-outline-large.svg` | 108 × 108 | 22 | Top 16 |
| `cta-circle-outline-small.svg` | 32 × 32 | 877 | Top 43 |
| `cta-square-outline.svg` | 67 × 67 | 317 | Top 42.5 |
| `cta-icon-drop.svg` | 62 × 62 | 1016.25 | Top 82 |
| `cta-icon-layers.svg` | 160 × 160 | 1079.75 | Top 180.25 |
| `cta-icon-chat.svg` | 32 × 32 | 141.25 | Top 214.25 |
| `cta-square-filled-left.svg` | 34 × 67 | Left edge | Top 230 |
| `cta-icon-bold.svg` | 102 × 102 | 271.75 | Top 360 |
| `cta-icon-panels.svg` | 48 × 48 | 962.75 | Top 380.75 |
| `cta-circle-outline-small.svg` | 32 × 32 | 1208 | Top 429 |
| `cta-circle-filled.svg` | 120 × 97 | 56 | 0.5 px past the bottom edge (96.5 px visible, as in the reference) |
| `cta-circle-edge.svg` | 40 × 2 | 1064 | 0.5 px past the bottom edge (the top 1.5 px visible, as in the reference) |

Intermediate widths and enlarged text (implementation choices, [D-54](decisions.md#contact-call-to-action-and-footer)):

- Below 1024 px the contact section is one centered column at most 560 px wide, as the other two-column sections.
- The decorations are shown when the section is at least 80rem wide (1280 px at the normal text size): below that they would overlap the text, and the mobile reference has none. Their sizes and positions are in rem, and the condition is a container query, which follows the root font size: with enlarged text they grow with the text or are hidden, and never sit behind it.
- The call to action section does not clip its content; only the decorations layer does. So the "Join Luma" message is never cut. On mobile it extends 4 px into the footer, which has the same color.
- Below 1024 px the footer groups use two columns while the footer content is at least 17.5rem wide (280 px at the normal size, so from 320 px), and one column with enlarged text. On desktop the link columns shrink down to their longest word when enlarged text leaves no room for the tagline.
- The info card texts may wrap, so the email address stays inside the window with enlarged text.
- Below 1024 px the call to action buttons are full width but at most 560 px, centered, as the other sections (T-09). At 402 px and from 1024 px nothing changes.
- The avatars image is drawn at its own size (656 × 40) inside a 136 × 40 px window centered on the avatars. The window is in px, so with enlarged text the four avatars keep their size and are not cropped.

## Interactions and states

- **Image:** only default states appear. Neither reference shows hover, focus, active, disabled, validation, success, error or open-menu states.
- **Image:** visible interactive elements: nav links, "Log in", "Start learning", the menu button (mobile), hero buttons, category "Explore" links, "View course", "Browse all courses", "Explore teachers and students", the contact email, the three form fields and "Send message", the final call to action buttons, and the footer links.
- **Decided:** the header scrolls with the page, and the mobile menu behavior is defined in [D-25](decisions.md#header-and-hero).
- **Decided:** every control shows a 2 px `primary-blue` outline, 2 px away, when it receives keyboard focus. When a link in the mobile panel is chosen, the panel content is removed, so focus moves to the target section ([D-25](decisions.md#header-and-hero)). The section can be focused only by script (`tabindex="-1"`) and has no outline: it is not a control, and an outline around a whole section would suggest one. The scroll shows where focus went, screen readers announce the section by its heading, and the next Tab goes to the first control after the start of the section.
- **Decided:** the "Explore" message is a bubble with the conditions of [D-38](decisions.md#courses-and-how-it-works). The "View course" message follows the same conditions and opens above its button, so it never covers "Browse all courses" ([D-40](decisions.md#courses-and-how-it-works)). Controls on the blue featured section use a white focus outline (5.49:1 on `primary-blue`).
- **Decided:** the contact form ([D-50](decisions.md#contact-call-to-action-and-footer)), the plain-text email ([D-51](decisions.md#contact-call-to-action-and-footer)), "Join Luma" ([D-52](decisions.md#contact-call-to-action-and-footer)) and the footer items ([D-53](decisions.md#contact-call-to-action-and-footer)). The "Join Luma" message opens below its button. The footer messages open above theirs and also close when focus leaves the button. A footer message may cover the links just above its button: a click goes through it to them and closes it, and moving focus to them closes it first. On the dark footer, controls use a white focus outline.
- **Checked in T-08:** the page has no animation, transition or smooth scrolling, with or without the reduced-motion preference, so there is nothing to adapt for `prefers-reduced-motion`. The scrolling that shows a demo message is instant.
- **Pending:** any animation (static images cannot show it).

## Divergences between the references

| # | Topic | Desktop (Image) | Mobile (Image) | Resolution |
| --- | --- | --- | --- | --- |
| 1 | Step labels | "STEP 01" on all three steps | STEP 01, 02, 03 | [D-05](decisions.md#approved): 01, 02, 03 |
| 2 | Contact form language | English | Portuguese, except the "Contact us" title. In the export received on 2026-11-19 the form is in English, except the "E-mail" label and the `seuemail@exemplo.com` placeholder | [D-06](decisions.md#approved): English, with "Email" and `youremail@example.com` as on desktop |
| 3 | Step 02 description | "…professionals who use these skills." | "…professionals who actually use these skills." | [D-36](decisions.md#courses-and-how-it-works): the desktop text |
| 4 | Step 02 square color | `#FFCB9F` | `#FAE4DB` | [D-36](decisions.md#courses-and-how-it-works): `#FFCB9F`, with the circle `#FF704D` |
| 5 | Community paragraph color | `#656770` | `#171B2C` | [D-43](decisions.md#testimonial-and-community): `#656770` on both |
| 6 | Hero photo framing | Matches `hero-student-photo.png` exactly (mean pixel difference 4.7 of 765) | Different framing of the same photo: the person is smaller and the hair is cut at the top. No crop of the exported file matches it (best mean difference about 32) | [D-62](decisions.md#visual-check): the mobile export, which matches the mobile reference (mean difference 3.5 of 765 in the central area of the photo) |
| 7 | Community collage | Matches `community-collage.png` at 1x | Same photos in a different arrangement: shorter crops; the scaled file is about 10 px taller at the center | [D-62](decisions.md#visual-check): the mobile export of the collage (mean difference 6.5 of 765 against the reference) |
| 8 | Copyright color | `#E7E7EC` | White | [D-56](decisions.md#contact-call-to-action-and-footer): `#E7E7EC` on both |

The composition differences listed in [Page structure](#page-structure) follow from the layout and are not treated as divergences.

## Assets to export

The owner exported the assets from Figma on 2026-11-18 into a local folder. The original files stay outside the repository and were not renamed or changed. Suggested names are proposals ([Q-18](decisions.md#open-questions)), except the decoration names, approved in [D-18](decisions.md#design-assets).

### Inventory

27 files: 13 PNG and 14 SVG. No file is empty, no two files are byte-identical, and every real format matches its extension. Pixel sizes compared with the display sizes are in [Raster resolution](#raster-resolution).

On 2026-11-18, for T-04, the owner added three files and replaced `icon-star.png`. Those four files are listed at the end of the table, and the folder now has 30 files. Later that day, for T-05, the owner added `featured-course-photo.png`, and on 2026-11-19, for T-06, `icon-quote.png` (last rows); the folder has 32 files. On 2026-11-19, for T-09, the owner added 17 files, the 2x exports and SVG files listed in [Missing or to re-export](#missing-or-to-re-export), and replaced four 1x PNGs with new exports of the same name (`icon-arrow-right.png`, `icon-menu.png`, `icon-message.png` and `icon-star.png`; the new `icon-menu.png` still draws its bars at 75%). Those four are not used, because SVG files replace them. The folder has 49 files. Since T-09 the project uses the 2x and SVG files, and the 1x copies were removed from `public/` (D-61).

| File | Real format and size | Content (Image) | Status |
| --- | --- | --- | --- |
| `logo-dark.svg` | SVG, 54 × 17 | "luma." wordmark, `#171B2C` | OK |
| `logo-light.svg` | SVG, 54 × 17 | Same wordmark, white | OK; copied to `public/brand/` (T-07) |
| `hero-student.png` | PNG, 626 × 524 | Hero photo combined with both floating cards (texts included), the peach shape and the light circle | Re-export needed: texts and shapes baked in |
| `featured-course.png` | PNG, 550 × 420 | Featured photo with the "FEATURED COURSE" badge | Re-export needed: badge text baked in |
| `community-collage.png` | PNG, 535 × 530, transparent | Ten photos over the light circle | OK; copied to `public/images/` (T-06) |
| `cta-avatars.png` | PNG, 656 × 40, transparent | Four avatars with yellow rings. Only 136 × 40 is visible; the rest is transparent | Usable; copied to `public/images/` (T-07). The page shows only the avatars, by CSS ([D-55](decisions.md#contact-call-to-action-and-footer)) |
| `testimonial-alex-morgan.png` | PNG, 48 × 48, transparent | Round avatar of the testimonial author | OK; copied to `public/images/` (T-06) |
| `step-01.png` | PNG, 56 × 56, transparent | Step 01 illustration | OK |
| `step-02.png` | PNG, 67 × 67, transparent | Step 02 illustration with the desktop colors (`#FFCB9F`, `#FF704D`) | OK |
| `step-03.png` | PNG, 56 × 56 | Step 03 illustration | OK |
| `icon-message.png` | PNG, 40 × 40 | Speech bubble icon on its light blue tile | OK, tile included; copied to `public/icons/` (T-07) |
| `icon-clock.png` | PNG, 40 × 40 | Clock icon on its light blue tile | OK, tile included; copied to `public/icons/` (T-07) |
| `icon-arrow-right.png` | PNG, 14 × 12, transparent | White arrow | Partial: white variant only |
| `cta-decorations/` | 13 SVG | Final call to action decorations, all `#FFCB9F` | Generic names; copied to `public/images/cta/` with the approved names (T-07), see below |
| `hero-student-photo.png` (new) | PNG, 500 × 520, transparent rounded corners (radius about 20) | Hero photo alone | OK; copied to `public/images/` |
| `hero-avatars.png` (new) | PNG, 80 × 32 | The three hero avatars, overlapping, with cream rings | OK; copied to `public/images/` |
| `icon-menu.png` (new) | PNG, 24 × 24, transparent | Three bars, 20 × 2 px, `#171B2C` at 75% opacity | OK; copied to `public/icons/`. The bars look lighter than in the reference: the opacity comes from the file ([Q-22](decisions.md#open-questions)) |
| `icon-star.png` (replaced) | PNG, 10 × 10, transparent | Star alone, `#FFEE7E` | OK; copied to `public/icons/`. The earlier file was the whole rating card |
| `featured-course-photo.png` (new) | PNG, 538 × 408, RGBA but fully opaque, square corners | Featured photo alone, without the badge. Same framing as the photo inside `featured-course.png` (offset 12 × 12 px, mean difference 4.1 of 765 outside the badge area) | OK; copied to `public/images/` (same SHA-256) |
| `icon-quote.png` (new) | PNG, 24 × 22, transparent | Quote mark alone, `#3157F6`. Announced as `icon-quote.svg`; the file received is a PNG. It matches the reference mark (mean difference 1.8 of 765) | OK; copied to `public/icons/` (same SHA-256) |
| `logo-dark.svg` (reused) | SVG, 54 × 17 | See above | Copied to `public/brand/` |

### Final call to action decorations

The thirteen files cover every decoration in the desktop reference. They are used as separate SVGs ([D-17](decisions.md#design-assets)), and the project copies take the suggested names while the originals stay unchanged ([D-18](decisions.md#design-assets)). The files carry no position, so placing them needs positions estimated from the desktop reference. The positions used are in [Contact, call to action and footer measurements](#contact-call-to-action-and-footer-measurements-estimate).

| Current name | Element identified | Position in the desktop reference (Image) | Suggested name |
| --- | --- | --- | --- |
| `Container.svg` | Outline circle, 108 px, 2 px stroke | Top left | `cta-circle-outline-large.svg` |
| `Container-1.svg` | Filled circle, 120 px, cropped to 120 × 97 | Bottom left, cut by the section edge | `cta-circle-filled.svg` |
| `Container-2.svg` | Filled circle, 40 px, cropped to 40 × 2 | Bottom edge, right of center. The top 1.5 px is visible | `cta-circle-edge.svg`. Used: the implementation shows the same part as the reference ([D-55](decisions.md#contact-call-to-action-and-footer)) |
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

The owner will provide the remaining assets ([Q-18](decisions.md#open-questions)). Each item is needed before the task that builds its section. The four T-04 items arrived on 2026-11-18 (see [Inventory](#inventory)).

| Item | Reason | Suggested file | Needed before |
| --- | --- | --- | --- |
| Featured photo alone | Received on 2026-11-18 as `featured-course-photo.png` ([Inventory](#inventory)) | — | — |
| Arrow for dark text | No longer needed: the white arrow is used as a CSS mask that follows the text color ([D-34](decisions.md#courses-and-how-it-works)) | — | — |
| Quote mark | Received on 2026-11-19 as `icon-quote.png` ([Inventory](#inventory)) | — | — |

Exports requested on 2026-11-19 for T-09, after the sharpness measurement (see [Raster resolution](#raster-resolution)). The SVG logos and decorations are already adequate and are not requested again. Sizes are in image pixels.

| Element in the Figma file | For | Suggested file | Format and size | Needed before |
| --- | --- | --- | --- | --- |
| Hero photo, desktop, without the cards and shapes | [Q-18](decisions.md#open-questions) | `hero-student-photo@2x.png` | PNG or JPG, 1000 × 1040 | T-09 is completed |
| Hero photo with the framing of the mobile frame (person smaller, hair cut at the top) | [Q-21](decisions.md#open-questions), and Q-18 on mobile | `hero-student-photo-mobile@2x.png` | PNG or JPG, 692 × 760 | T-09 is completed, unless the owner accepts the divergence |
| The three hero avatars next to "Trusted by 24,000+" | Q-18 | `hero-avatars@2x.png` | PNG, transparent, 160 × 64 | T-09 is completed |
| One rating star | Q-18 | `icon-star.svg` | SVG (or PNG 20 × 20) | T-09 is completed |
| Menu icon of the mobile header, with its layer and parent opacity checked (the reference shows 100%, the file 75%) | Q-18 and [Q-22](decisions.md#open-questions) | `icon-menu.svg` | SVG (or PNG 48 × 48) | T-09 is completed |
| Featured course photo, without the badge | Q-18 | `featured-course-photo@2x.png` | PNG or JPG, 1076 × 816 | T-09 is completed |
| Step illustrations 01, 02 (desktop colors) and 03 | Q-18 | `step-01.svg`, `step-02.svg`, `step-03.svg` | SVG (or PNG 112, 134 and 112 px square) | T-09 is completed |
| Arrow of "Explore" and "Browse all courses" | Q-18 | `icon-arrow-right.svg` | SVG (or PNG 28 × 24) | T-09 is completed |
| Testimonial avatar | Q-18 | `testimonial-alex-morgan@2x.png` | PNG, transparent, 96 × 96 | T-09 is completed |
| Quote mark | Q-18 | `icon-quote.svg` | SVG (or PNG 48 × 44) | T-09 is completed |
| Community collage, desktop, with the light circle | Q-18 | `community-collage@2x.png` | PNG, transparent, 1070 × 1060 | T-09 is completed |
| Community collage group of the mobile frame, with its own arrangement | [Q-26](decisions.md#open-questions) | `community-collage-mobile@2x.png` | PNG, transparent, about 734 × 660 (the group bounds; about 367 × 330 in the mobile reference) | T-09 is completed, unless the owner accepts the divergence |
| Email and clock icons, with their light blue tile | Q-18 | `icon-message.svg`, `icon-clock.svg` | SVG (or PNG 80 × 80) | T-09 is completed |
| The four call to action avatars, trimmed to the avatars | Q-18 | `cta-avatars@2x.png` | PNG, transparent, 272 × 80 | T-09 is completed |

All received on 2026-11-19 and integrated ([D-61](decisions.md#visual-check), [D-62](decisions.md#visual-check)). Differences from the request: `icon-clock.svg` has no tile, so the tile is drawn in CSS and matches the reference (mean difference 1.2 to 1.3 of 765 over the 40 × 40 tile); `cta-avatars@2x.png` is not trimmed (1312 × 80) and is drawn through the existing window; `community-collage@2x.png` is 1069 px wide, 1 px less than the exact double; `community-collage-mobile@2x.png` is 744 × 660.

Preferences, not blockers:

- SVG for the step illustrations and for the message and clock icons: received in T-09 ([D-61](decisions.md#visual-check)).
- `cta-avatars.png` has transparent space around the avatars. The project copy is unchanged, and the page shows only the avatars, by CSS ([D-55](decisions.md#contact-call-to-action-and-footer)).

### Raster resolution

Display sizes are estimates read from the references at the confirmed 2x scale. Density is the number of asset pixels per CSS pixel at that display size. At a density of 1.0, an image is drawn pixel for pixel on a standard screen, while a screen with a device pixel ratio of 2 has to enlarge it.

| File | Pixels | Display size, desktop (Estimate) | Display size, mobile (Estimate) | Density desktop / mobile |
| --- | --- | --- | --- | --- |
| `hero-student.png` | 626 × 524 | ≈600 × 520, photo with cards and shapes | ≈383 × 380, with different proportions | ≈1.0 / ≈1.6 |
| `featured-course.png` | 550 × 420 | ≈538 × 408 photo, plus the badge overhang | ≈362 × 280 photo | ≈1.0 / ≈1.5 |
| `featured-course-photo.png` | 538 × 408 | 538 × 408 | 362 × 280, cropped | 1.0 / ≈1.5 |
| `community-collage.png` | 535 × 530 | ≈520 wide | ≈362 wide | ≈1.0 / ≈1.5 |
| `cta-avatars.png` | 656 × 40, of which 136 × 40 visible | ≈136 × 40 | ≈136 × 40 | ≈1.0 / ≈1.0 |
| `testimonial-alex-morgan.png` | 48 × 48 | ≈48 × 48 | ≈48 × 48 | ≈1.0 / ≈1.0 |
| `step-01.png`, `step-03.png` | 56 × 56 | ≈56 × 56 | ≈56 × 56 | ≈1.0 / ≈1.0 |
| `step-02.png` | 67 × 67, of which 64 × 64 visible | ≈64 × 64 | ≈64 × 64 | ≈1.0 / ≈1.0 |
| `icon-message.png`, `icon-clock.png` | 40 × 40 | ≈40 × 40 | ≈40 × 40 | ≈1.0 / ≈1.0 |
| `icon-arrow-right.png` | 14 × 12 | ≈14 × 12 | ≈14 × 12 | ≈1.0 / ≈1.0 |
| `icon-quote.png` | 24 × 22 | 24 × 22 | 24 × 22 | 1.0 / 1.0 |
| `hero-student-photo.png` | 500 × 520 | 500 × 520 | 346 × 380, cropped | 1.0 / ≈1.45 |
| `hero-avatars.png` | 80 × 32 | 80 × 32 | 80 × 32 | 1.0 / 1.0 |
| `icon-star.png` (replaced) | 10 × 10 | 10 × 10 | 10 × 10 | 1.0 / 1.0 |
| `icon-menu.png` | 24 × 24 | Not shown | 24 × 24 | — / 1.0 |

- **Risk:** at a density near 1.0, screens with a device pixel ratio of 2 or more may show these images softer than the reference. The risk is highest for the large photos and for the hard edges of small icons.
- **Observed in T-04:** in Chrome at a device pixel ratio of 2, the hero photo, the stars, the hero avatars and the menu icon look softer than the same areas of the 2x references. At a device pixel ratio of 1 they match. The other images have not been rendered yet.
- **Observed in T-07:** at a device pixel ratio of 2, the contact icons match the 2x references closely (mean difference 8 to 15 of 765; the same comparison shifted by 6 px gives 46 to 50). The call to action avatars are softer (20 to 33), because the file is 1x ([Q-18](decisions.md#open-questions)).
- **Measured in T-09** (2026-11-19, Chrome, device pixel ratio 2, each image compared with the same area of the 2x reference after aligning it): the edge energy of the render divided by that of the reference is 1.00 for the SVG logos and decorations, and 0.76 to 0.92 for the menu icon, the arrow, the stars, the call to action avatars, the email icon, the collage, the featured photo, the hero photo, the hero avatars and the testimonial avatar. Enlarged side by side, every 1x raster image is visibly softer than the reference, also the clock icon, the quote mark and the step illustrations (0.95 to 1.00 by that measure). At a device pixel ratio of 1 the images are drawn at their size. The exports that would remove the softness are listed in [Missing or to re-export](#missing-or-to-re-export).
- **After the T-09 exports** (same measurement, [D-61](decisions.md#visual-check), [D-62](decisions.md#visual-check)): edge-energy ratio 0.88 to 1.28 for the 2x images and 0.99 to 1.02 for the SVG files; mean differences, for example, 40 to 7.4 for the mobile hero photo, 34.3 to 0.7 for the menu icon, 20.4 to 4.0 for the call to action avatars, 15.7 to 3.5 for the stars and 63.6 to 5.7 for the arrow. Enlarged side by side, no image is softer than the reference. The mobile step 02 still differs in color on purpose ([D-36](decisions.md#courses-and-how-it-works)).
- **Next step (T-04 note, resolved in T-09):** for these four files, a 2x export (or SVG for the star and the menu icon) would remove the observed softness ([Q-18](decisions.md#open-questions)). The other images are checked when their sections are built.

### Not in the references

- Favicon and social preview image ([Q-07](decisions.md#open-questions)).
- Font files: none in the asset folder. The fonts are loaded with `next/font/google` ([D-20](decisions.md#visual-foundation)).

### Not needed

- Mobile-specific exports: the mobile reference uses the same images, and its final call to action has no decorations. The one exception found so far is the hero photo framing (divergence 6, [Q-21](decisions.md#open-questions)).
- The hero background shapes (peach rounded rectangle and light circle): flat colors.

## Text alternatives

| Image | Text alternative | Source |
| --- | --- | --- |
| Hero photo | Smiling person with glasses and a denim shirt working at a laptop, with sticky notes on the wall behind. | Draft by the agent from the visible content ([D-29](decisions.md#header-and-hero)), pending review. Used in T-04 |
| Logo | Luma | The wordmark text |
| Hero avatars, rating stars, menu icon, peach shape, light circle | Empty (decorative) | The adjacent text or the button name carries the meaning |
| Step illustrations (01 to 03), "Explore" and "Browse all courses" arrows | Empty (decorative) | The step title and the button or link name carry the meaning. Used in T-05 |
| Featured photo | Person working at a table with papers, tools and trays of colored material samples. | Provided by the owner ([D-41](decisions.md#courses-and-how-it-works)). Used in T-05 |
| Testimonial avatar | Empty (decorative) | The author name is next to it. Used in T-06 |
| Quote mark | Empty (decorative), not exposed to assistive technologies | The quote is marked up as a quotation and read once ([D-49](decisions.md#testimonial-and-community)). Used in T-06 |
| Community collage | Collage of people reading, working at laptops, talking in a group and holding books. | Approved by the owner ([D-48](decisions.md#testimonial-and-community)). Used in T-06 |
| Contact icons (message, clock) | Empty (decorative) | The label next to each icon carries the meaning. Used in T-07 |
| Call to action avatars | Empty (decorative) | Illustrative; no names are given. Used in T-07 |
| Call to action decorations | Empty, in a layer hidden from assistive technologies | Decorative shapes. Used in T-07 |
| Footer logo | Luma | The wordmark text (light version). Used in T-07 |

Every image on the page now has a text alternative or is decorative.

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
- [x] Images exported: collage, testimonial avatar, final call to action avatars, hero photo, hero avatars and the featured photo without the badge received
- [x] Icons and illustrations exported: final call to action decorations (SVG); steps, contact icons, star, menu icon, arrow and quote mark received as SVG in T-09 ([D-61](decisions.md#visual-check))
- [ ] Favicon and social preview image: not in the references
- [ ] Text alternatives for images: hero photo drafted, pending review; featured photo provided by the owner; community collage approved by the owner; avatars, step illustrations, arrows, contact icons and call to action decorations decorative ([Text alternatives](#text-alternatives))

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
| 2026-11-18 | T-04 assets in the authorized asset folder: hero photo, hero avatars, menu icon and the replaced star icon | Checked and copied to `public/` with `logo-dark.svg`; the originals are unchanged ([Inventory](#inventory)). |
| 2026-11-19 | Quote mark in the authorized asset folder, announced as `icon-quote.svg` and received as `icon-quote.png` | Checked and copied to `public/icons/`; the original is unchanged ([Inventory](#inventory)). |
| 2026-11-18 | Featured photo without the badge (`featured-course-photo.png`) in the authorized asset folder | Checked and copied to `public/images/`; the original is unchanged ([Inventory](#inventory)). |
| 2026-11-19 | T-09 exports (2x images and SVG files) in the authorized asset folder | Checked, copied to `public/` and integrated ([D-61](decisions.md#visual-check), [D-62](decisions.md#visual-check)); the originals are unchanged. |
| 2026-11-19 | Full reference PNGs `FE - Desktop.png` (2560 × 11383) and `FE - Mobile.png` (804 × 15598), 144 dpi, at their recorded location | Examined for the T-09 full-page comparison. The desktop file is identical to the earlier export (every local crop matches it, at most 1 level of difference). The mobile file differs only in the contact form, now in English except the "E-mail" label and the email placeholder (divergence 2). |
