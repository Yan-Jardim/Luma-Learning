import { DemoMessageButton } from "@/components/DemoMessageButton/DemoMessageButton";
import { courseMessage } from "@/content/messages";
import { sectionIds } from "@/content/navigation";
import { sectionContainer, sectionHeading, sectionOverline } from "@/styles/section.styles";
import { categories } from "./Categories.data";
import { categoryCard, categoryNumber, exploreMessage } from "./Categories.styles";

export function Categories() {
  return (
    <section id={sectionIds.categories} aria-labelledby="categories-heading" className="bg-white wrap-break-word">
      <div className={sectionContainer}>
        <div className="max-w-[560px]">
          <p className={sectionOverline}>Find your next skill</p>
          <h2 id="categories-heading" className={`mt-4 ${sectionHeading}`}>
            Learn something worth knowing.
          </h2>
          <p className="mt-4 type-mobile-subtitle-1 text-text-secondary lg:type-desktop-subtitle-1">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <li key={category.number} className={categoryCard}>
              <span className={categoryNumber}>{category.number}</span>
              <h3 className="mt-5 type-card-title text-text-primary lg:mt-[22px]">{category.title}</h3>
              <p className="mt-3 type-body-sm text-label-gray lg:mt-3.5">{category.description}</p>
              <DemoMessageButton
                message={courseMessage}
                ariaLabel={`Explore ${category.title}`}
                wrapperClassName="mt-auto flex pt-[22px]"
                className="inline-flex items-center gap-3 type-desktop-body-1 text-text-primary"
                messageClassName={exploreMessage}
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
