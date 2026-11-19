import Image from "next/image";
import { courseMessage } from "@/content/messages";
import { sectionIds } from "@/content/navigation";
import { accentButton, demoMessage } from "./button-styles";
import { DemoMessageButton } from "./DemoMessageButton";

const pills = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <section aria-labelledby="featured-heading" className="bg-primary-blue text-white wrap-break-word">
      <div className="page-container py-[60px] lg:py-[100px]">
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,538fr)_minmax(0,522fr)] lg:items-center lg:gap-x-[60px]">
          <div className="relative">
            <p className="absolute -top-[12px] -left-[12px] z-10 rounded-md bg-yellow px-3 py-1.5 type-desktop-overline text-text-primary">
              Featured course
            </p>
            <Image
              src="/images/featured-course-photo@2x.png"
              alt="Person working at a table with papers, tools and trays of colored material samples."
              width={538}
              height={408}
              sizes="(min-width: 1024px) 538px, (min-width: 600px) 560px, calc(100vw - 40px)"
              className="aspect-[362/280] w-full rounded-2xl object-cover lg:aspect-[538/408]"
            />
          </div>

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
                messageClassName={`${demoMessage} pointer-events-none absolute bottom-full left-0 z-10 mb-2 max-w-[min(15rem,100cqw)]`}
              >
                View course
              </DemoMessageButton>
              <a
                href={`#${sectionIds.categories}`}
                className="inline-flex items-center gap-3 self-center pt-[15px] pb-[9px] type-desktop-body-1 text-white focus-visible:outline-white lg:self-auto lg:py-3"
              >
                Browse all courses
                <span aria-hidden="true" className="icon-arrow-right -translate-y-[2px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
