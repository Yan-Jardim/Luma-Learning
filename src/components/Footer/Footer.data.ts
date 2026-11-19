import { sectionIds } from "@/content/navigation";
import type { FooterGroup } from "./Footer.types";

export const footerGroups: FooterGroup[] = [
  {
    heading: "Explore",
    items: [
      { label: "Courses", href: `#${sectionIds.categories}` },
      { label: "Categories", href: `#${sectionIds.categories}` },
      { label: "Instructors" },
      { label: "For Teams", href: `#${sectionIds.contact}` },
    ],
  },
  {
    heading: "Company",
    items: [{ label: "About", href: `#${sectionIds.howItWorks}` }, { label: "Careers" }, { label: "Journal" }],
  },
  {
    heading: "Support",
    items: [{ label: "Help Center" }, { label: "Contact", href: `#${sectionIds.contact}` }, { label: "Terms" }, { label: "Privacy" }],
  },
];
