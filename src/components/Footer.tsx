import Image from "next/image";
import { sectionIds } from "@/content/navigation";
import { DemoMessageButton } from "./DemoMessageButton";

const pageMessage = "This is a demo. This page is not available.";
const itemClass = "text-left text-sm leading-6 text-footer-link focus-visible:outline-white";

type Item = { label: string; href?: string };

const groups: { heading: string; items: Item[] }[] = [
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

export function Footer() {
  return (
    <footer className="bg-text-primary">
      <div className="page-container pt-[60px] pb-[19px] lg:pt-20 lg:pb-[38px]">
        <div className="@container lg:grid lg:grid-cols-[minmax(min-content,1fr)_auto] lg:gap-x-12">
          <div>
            <Image src="/brand/logo-light.svg" alt="Luma" width={54} height={17} />
            <p className="mt-3 text-sm leading-6 text-footer-link lg:max-w-[220px]">
              Practical learning for curious people.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 max-lg:@min-[17.5rem]:grid-cols-2 lg:mt-0 lg:grid-cols-[repeat(3,minmax(min-content,192px))] lg:gap-x-12"
          >
            {groups.map((group) => (
              <div key={group.heading} className="@container">
                <h2 className="type-desktop-overline text-footer-heading">{group.heading}</h2>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex">
                      {item.href ? (
                        <a href={item.href} className={itemClass}>
                          {item.label}
                        </a>
                      ) : (
                        <DemoMessageButton
                          message={pageMessage}
                          closeOnFocusOut
                          wrapperClassName="flex"
                          className={itemClass}
                          messageClassName="pointer-events-none absolute bottom-full left-0 z-10 mb-2 w-max max-w-[min(15rem,100cqw)] rounded-lg bg-white px-3 py-2 text-sm leading-5 text-text-primary"
                        >
                          {item.label}
                        </DemoMessageButton>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-9 border-t border-footer-divider pt-[21px] lg:mt-[66px]">
          <p className="text-center text-[13px] leading-6 text-footer-heading lg:text-left">© 2026 Luma Learning</p>
        </div>
      </div>
    </footer>
  );
}
