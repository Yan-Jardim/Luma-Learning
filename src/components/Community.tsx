import Image from "next/image";
import { sectionIds } from "@/content/navigation";
import { secondaryButtonWrapping } from "./button-styles";
import { DemoMessageButton } from "./DemoMessageButton";

// Teacher and student community (T-06). Copy from docs/design.md. The paragraph keeps the
// placeholder text of the references and uses text-secondary on both breakpoints (D-43).
// The collage is one image that already includes the light circle (D-44); its text alternative was
// approved by the owner (D-48).
// "Explore teachers and students" presents a demo message under the conditions of D-38 (D-45).
// Sizes and spacing are estimates from the references. The exported collage has transparent
// margins (11 px on top, 4 px at the bottom), so on desktop it overlaps the bottom padding by 8 px,
// as the 522 px frame of the reference does. The mobile reference arranges the photos differently
// (shorter crops); the single exported image is scaled there instead.

const message = "This is a demo. Teacher and student profiles are not available.";

export function Community() {
  return (
    <section id={sectionIds.community} aria-labelledby="community-heading" className="bg-cream wrap-break-word">
      <div className="page-container py-[60px] lg:py-[100px]">
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,535fr)_minmax(0,535fr)] lg:items-center lg:gap-x-[50px]">
          {/* Query container: the message is never wider than this column. */}
          <div className="@container">
            <p className="type-desktop-overline text-primary-blue">The people</p>
            <h2
              id="community-heading"
              className="mt-2 type-section-heading-mobile text-text-primary lg:type-section-heading-desktop"
            >
              Meet international students &amp; teachers
            </h2>
            {/* Placeholder Latin text (D-43), marked as Latin (D-60) so screen readers do not read it as English. */}
            <p lang="la" className="mt-6 type-mobile-subtitle-1 text-text-secondary lg:mt-8 lg:type-desktop-subtitle-1">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc.
              Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna,
              faucibus aenean lorem faucibus integer.
            </p>
            <DemoMessageButton
              message={message}
              wrapperClassName="mt-6 flex lg:mt-8"
              className={secondaryButtonWrapping}
              messageClassName="pointer-events-none absolute top-full left-0 z-10 mt-2 w-max max-w-[min(15rem,100cqw)] rounded-lg bg-text-primary px-3 py-2 text-sm leading-5 text-white"
            >
              Explore teachers and students
            </DemoMessageButton>
          </div>

          <Image
            src="/images/community-collage.png"
            alt="Collage of people reading, working at laptops, talking in a group and holding books."
            width={535}
            height={530}
            sizes="(min-width: 1024px) 535px, (min-width: 600px) 535px, calc(100vw - 40px)"
            className="mx-auto mt-4 w-full max-w-[535px] lg:mt-0 lg:-mb-2"
          />
        </div>
      </div>
    </section>
  );
}
