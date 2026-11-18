// Button classes shared by the header, the mobile menu and the hero.
// Radius and padding of the large buttons come from Figma ("Explore courses": radius 8 px,
// padding 14 px / 28 px). The label style is `Desktop/body 1`, inferred on mobile (D-28).

const base =
  "inline-flex items-center justify-center rounded-lg type-desktop-body-1 whitespace-nowrap";

export const primaryButton = `${base} bg-primary-blue px-7 py-3.5 text-white`;

// The 1 px border makes this button 54 px high, as in both references.
export const secondaryButton = `${base} border border-line bg-white px-7 py-3.5 text-text-primary`;

// Header button: about 134 × 44 px in the desktop reference (estimate).
export const headerButton = `${base} bg-primary-blue px-5 py-2.5 text-white`;
