import { courseMessage } from "@/content/messages";
import { sectionIds } from "@/content/navigation";
import { DemoMessageButton } from "./DemoMessageButton";

// Learning categories (T-05). Text styles: confirmed (`type-desktop-*`, `type-mobile-*`) or
// estimated (D-31). Card sizes and spacing are estimates from the references (D-33).
// Card padding is in px, so enlarged text keeps the space it needs; heights follow the content.
// `wrap-break-word` only breaks a word that does not fit its line (very large text on narrow screens).
// The "Explore" message (D-38) is at most as wide as the card, so it stays in the window, and it
// lets pointer events through, so it never blocks the controls under it; a click there closes it.

const categories = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

export function Categories() {
  return (
    <section id={sectionIds.categories} aria-labelledby="categories-heading" className="bg-white wrap-break-word">
      <div className="page-container py-[60px] lg:py-[100px]">
        <div className="max-w-[560px]">
          <p className="type-desktop-overline text-primary-blue">Find your next skill</p>
          <h2
            id="categories-heading"
            className="mt-4 type-section-heading-mobile text-text-primary lg:type-section-heading-desktop"
          >
            Learn something worth knowing.
          </h2>
          <p className="mt-4 type-mobile-subtitle-1 text-text-secondary lg:type-desktop-subtitle-1">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <li
              key={category.number}
              className="flex min-w-0 flex-col rounded-2xl border border-line bg-white px-[24px] pt-[26px] pb-[21px] lg:px-[28px] lg:pt-[30px] lg:pb-[26px]"
            >
              <span className="inline-flex h-6 w-8 items-center justify-center self-start rounded-md bg-blue-tint type-desktop-overline text-primary-blue">
                {category.number}
              </span>
              <h3 className="mt-5 type-card-title text-text-primary lg:mt-[22px]">{category.title}</h3>
              <p className="mt-3 type-body-sm text-label-gray lg:mt-3.5">{category.description}</p>
              <DemoMessageButton
                message={courseMessage}
                ariaLabel={`Explore ${category.title}`}
                wrapperClassName="mt-auto flex pt-[22px]"
                className="inline-flex items-center gap-3 type-desktop-body-1 text-text-primary"
                messageClassName="pointer-events-none absolute top-full left-0 z-10 mt-2 w-max max-w-[min(15rem,100%)] rounded-lg bg-text-primary px-3 py-2 text-sm leading-5 text-white"
              >
                Explore
                <span aria-hidden="true" className="icon-arrow-right" />
              </DemoMessageButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
