// Button classes shared by the header, the mobile menu, the hero, the featured section, the
// community, the contact form and the final call to action.
// Radius and padding of the large buttons come from Figma ("Explore courses": radius 8 px,
// padding 14 px / 28 px). The label style is `Desktop/body 1`, inferred on mobile (D-28).

const shape = "inline-flex items-center justify-center rounded-lg type-desktop-body-1";
const base = `${shape} whitespace-nowrap`;

// Labels that may wrap when they do not fit, which happens only with enlarged text on narrow
// screens; at the normal size they stay on one line.
const wrapping = `${shape} text-center`;
const primaryLook = "bg-primary-blue px-7 py-3.5 text-white";
// The 1 px border makes the secondary buttons 54 px high, as in both references.
const secondaryLook = "border border-line bg-white py-3.5 text-text-primary";

// "Start learning" in the mobile menu.
export const primaryButton = `${base} ${primaryLook}`;

// Header button: about 134 × 44 px in the desktop reference (estimate).
export const headerButton = `${base} bg-primary-blue px-5 py-2.5 text-white`;

// "View course": same size as the primary button (52 px high in both references), yellow fill,
// dark label (estimates from the references, T-05).
export const accentButton = `${base} bg-yellow px-7 py-3.5 text-text-primary`;

// Secondary look for "Explore teachers and students" (T-06), 29 px horizontal padding, so the
// button is 268 px wide, as in both references (estimate).
export const secondaryButtonWrapping = `${wrapping} ${secondaryLook} px-[29px]`;

// "Explore courses" (hero), "Send message" and "Explore all courses" (T-07, T-08).
export const primaryButtonWrapping = `${wrapping} ${primaryLook}`;

// "See how it works" (hero) and "Join Luma": 28 px horizontal padding; "Join Luma" is 128 px wide
// in the desktop reference (estimate).
export const secondaryButtonWrappingCompact = `${wrapping} ${secondaryLook} px-7`;
