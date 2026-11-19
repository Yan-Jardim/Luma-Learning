import Image from "next/image";
import { courseMessage } from "@/content/messages";
import { sectionIds } from "@/content/navigation";
import { accentButton } from "./button-styles";
import { DemoMessageButton } from "./DemoMessageButton";

// Featured course (T-05). Copy from docs/design.md. Text styles: confirmed (`type-desktop-*`) or
// estimated (D-31). Sizes and spacing are estimates from the references (D-33).
// "View course" presents the demo message and "Browse all courses" goes to #categories (D-35).
// The photo is the export without the badge (D-34); the badge is real text over it.
// Controls on the blue background use a white focus outline, so it stays visible.
// "Browse all courses" has a 48 px tall box (touch target); on mobile its label sits 3 px below
// the box center, as in the reference. Its text and arrow are white, an accessibility adaptation
// approved by the owner (D-42): the reference #E7E7EC reaches only 4.46:1 on primary-blue.
// Layout below 1024 px (one column, at most 560 px) and the message placement: D-40. Photo text
// alternative provided by the owner: D-41.

const pills = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <section aria-labelledby="featured-heading" className="bg-primary-blue text-white wrap-break-word">
      <div className="page-container py-[60px] lg:py-[100px]">
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,538fr)_minmax(0,522fr)] lg:items-center lg:gap-x-[60px]">
          <div className="relative">
            {/* Offsets in px: the badge stays 12 px outside the photo corner, also with enlarged text. */}
            <p className="absolute -top-[12px] -left-[12px] z-10 rounded-md bg-yellow px-3 py-1.5 type-desktop-overline text-text-primary">
              Featured course
            </p>
            <Image
              src="/images/featured-course-photo.png"
              alt="Person working at a table with papers, tools and trays of colored material samples."
              width={538}
              height={408}
              sizes="(min-width: 1024px) 538px, (min-width: 600px) 560px, calc(100vw - 40px)"
              className="aspect-[362/280] w-full rounded-2xl object-cover lg:aspect-[538/408]"
            />
          </div>

          {/* Query container: the "View course" message is never wider than this column. */}
          <div className="@container mt-[38px] lg:mt-0">
            <p className="type-desktop-overline">Most popular this month</p>
            <h2
              id="featured-heading"
              className="mt-4 type-section-heading-mobile lg:type-section-heading-desktop"
            >
              Designing products people understand.
            </h2>
            <p className="mt-5 type-body-sm lg:type-body-md">
              Learn how to turn complex workflows into simple, intentional product experiences
              through research, structure and thoughtful interaction design.
            </p>
            <p className="mt-6 type-body-sm lg:type-body-md">with Maya Chen · Senior Product Designer</p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {pills.map((pill) => (
                <li key={pill} className="rounded-lg border border-line px-[14px] py-1.5 type-body-sm">
                  {pill}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-x-[29px]">
              <DemoMessageButton
                message={courseMessage}
                className={`${accentButton} w-full focus-visible:outline-white lg:w-auto`}
                messageClassName="pointer-events-none absolute bottom-full left-0 z-10 mb-2 w-max max-w-[min(15rem,100cqw)] rounded-lg bg-text-primary px-3 py-2 text-sm leading-5 text-white"
              >
                View course
              </DemoMessageButton>
              <a
                href={`#${sectionIds.categories}`}
                className="inline-flex items-center gap-3 self-center pt-[15px] pb-[9px] type-desktop-body-1 text-white focus-visible:outline-white lg:self-auto lg:py-3"
              >
                Browse all courses
                {/* In the references this arrow sits 2 px higher than the "Explore" arrow. */}
                <span aria-hidden="true" className="icon-arrow-right -translate-y-[2px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
