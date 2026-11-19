export const sectionIds = {
  categories: "categories",
  howItWorks: "how-it-works",
  community: "community",
  contact: "contact",
} as const;

type NavItem = {
  label: string;
  href: string;
};

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
