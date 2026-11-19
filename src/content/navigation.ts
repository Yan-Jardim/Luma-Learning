// Shared navigation data (D-27). Destinations approved in D-23 (docs/decisions.md).
// `#categories` and `#how-it-works` exist since T-05; `#community` and `#contact` come in T-06 and T-07.

export const sectionIds = {
  categories: "categories",
  howItWorks: "how-it-works",
  community: "community",
  contact: "contact",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

// "About" and "For Teams" use destinations adapted by the owner, not given by the design.
export const navItems: readonly NavItem[] = [
  { label: "Courses", href: `#${sectionIds.categories}` },
  { label: "For Teams", href: `#${sectionIds.contact}` },
  { label: "Community", href: `#${sectionIds.community}` },
  { label: "About", href: `#${sectionIds.howItWorks}` },
];

export const startLearning: NavItem = {
  label: "Start learning",
  href: `#${sectionIds.categories}`,
};
