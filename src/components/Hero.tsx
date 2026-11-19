import Image from "next/image";
import { sectionIds } from "@/content/navigation";
import { primaryButton, secondaryButton } from "./button-styles";

// Sources (docs/design.md): heading 560 px and paragraph 480 px wide, the text styles, the
// primary button and the 500 × 520 photo come from Figma. The mobile overline and button
// labels use the desktop styles (inference, D-28). Spacing, shapes, cards and small texts are
// estimates measured on the references and checked against them visually.
// Enlarged text (D-39): words break only when they do not fit their line, and the card texts may
// wrap. When the photo column is narrower than 11em, which only happens with enlarged text, the
// cards stack below the photo instead of floating over it. At the normal text size the column
// is at least 16.5em wide, so the composition does not change.

const cardShadow = "shadow-[0_8px_24px_rgba(23,27,44,0.08)]";
const stars = [1, 2, 3, 4, 5];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-x-clip bg-cream wrap-break-word">
      <div className="page-container py-[60px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[560px] flex-col lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,560fr)_minmax(0,500fr)] lg:items-start lg:gap-x-[60px]">
          <div className="mt-10 lg:mt-0">
            <p className="type-desktop-overline text-primary-blue">Learn at your own pace</p>
            <h1
              id="hero-heading"
              className="mt-4 type-mobile-h1 text-text-primary lg:type-desktop-h1"
            >
              Build skills that actually move you forward.
            </h1>
            <p className="mt-6 type-mobile-subtitle-1 text-text-secondary lg:max-w-[480px] lg:type-desktop-subtitle-1">
              Practical courses taught by people who do the work every day. Learn design,
              technology, business and more — one focused lesson at a time.
            </p>

            <div className="mt-8 flex flex-col gap-3 lg:flex-row">
              <a href={`#${sectionIds.categories}`} className={primaryButton}>
                Explore courses
              </a>
              <a href={`#${sectionIds.howItWorks}`} className={secondaryButton}>
                See how it works
              </a>
            </div>

            <div className="mt-[30px] flex items-center justify-center gap-3 lg:mt-8 lg:justify-start">
              <Image src="/images/hero-avatars.png" alt="" width={80} height={32} />
              <p className="text-sm leading-6 text-text-secondary">
                <strong className="font-bold text-text-primary">Trusted by 24,000+</strong> learners
              </p>
            </div>
          </div>

          {/* Query container for the card fallback; the shapes stay attached to the photo box. */}
          <div className="@container relative order-first mx-2 lg:order-none lg:mx-0">
            <div className="relative">
              {/* Decorative shapes behind the photo. */}
              <div
                aria-hidden="true"
                className="absolute top-6 right-[-18px] bottom-[14px] w-1/2 rounded-[20px] bg-peach lg:right-[-39px] lg:bottom-[60px]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-3 left-[-18px] size-[63px] rounded-full bg-blue-tint lg:left-[-44px] lg:size-[104px]"
              />

              <Image
                src="/images/hero-student-photo.png"
                alt="Smiling person with glasses and a denim shirt working at a laptop, with sticky notes on the wall behind."
                width={500}
                height={520}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 500px, (min-width: 616px) 544px, calc(100vw - 56px)"
                className="relative aspect-[346/380] w-full rounded-[20px] object-cover lg:aspect-[500/520]"
              />
            </div>

            <div
              className={`absolute top-1.5 left-[-8px] flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 ${cardShadow} lg:top-4 lg:left-[-22px] @max-[11em]:static @max-[11em]:mt-3 @max-[11em]:flex-wrap`}
            >
              <span className="rounded-md bg-blue-tint px-1.5 py-1 text-sm leading-6 font-bold text-primary-blue">
                120+
              </span>
              <span className="text-sm leading-6 text-text-primary">expert-led courses</span>
            </div>

            <div
              className={`absolute right-[-19px] bottom-9 flex items-center gap-2.5 rounded-xl bg-white py-3 pr-4 pl-[18px] ${cardShadow} lg:right-[-57px] @max-[11em]:static @max-[11em]:mt-3 @max-[11em]:flex-wrap`}
            >
              <span aria-hidden="true" className="flex shrink-0 gap-1.5">
                {stars.map((star) => (
                  <Image key={star} src="/icons/icon-star.png" alt="" width={10} height={10} unoptimized />
                ))}
              </span>
              <span className="text-sm leading-6 text-text-primary">4.9 avg rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
