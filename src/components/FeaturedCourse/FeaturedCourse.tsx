import Image from "next/image";
import { DemoMessageButton } from "@/components/DemoMessageButton/DemoMessageButton";
import { courseMessage } from "@/content/messages";
import { sectionIds } from "@/content/navigation";
import { accentButton } from "@/styles/buttons.styles";
import { sectionContainer } from "@/styles/section.styles";
import { browseLink, featuredBadge, viewCourseMessage } from "./FeaturedCourse.styles";

const pills = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <section aria-labelledby="featured-heading" className="bg-primary-blue text-white wrap-break-word">
      <div className={sectionContainer}>
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,538fr)_minmax(0,522fr)] lg:items-center lg:gap-x-[60px]">
          <div className="relative">
            <p className={featuredBadge}>Featured course</p>
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
                messageClassName={viewCourseMessage}
              >
                View course
              </DemoMessageButton>
              <a href={`#${sectionIds.categories}`} className={browseLink}>
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
