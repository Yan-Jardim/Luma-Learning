import { getImageProps } from "next/image";
import { sectionIds } from "@/content/navigation";
import { secondaryButtonWrapping } from "./button-styles";
import { DemoMessageButton } from "./DemoMessageButton";

// Teacher and student community (T-06). Copy from docs/design.md. The paragraph keeps the
// placeholder text of the references and uses text-secondary on both breakpoints (D-43).
// The collage is one image that already includes the light circle (D-44); its text alternative was
// approved by the owner (D-48).
// "Explore teachers and students" presents a demo message under the conditions of D-38 (D-45).
// Sizes and spacing are estimates from the references. The desktop collage has a transparent
// margin of 11 px on top, and on desktop it overlaps the bottom padding by 8 px,
// as the 522 px frame of the reference does.
// Images (T-09): the 2x desktop export from 1024 px, and below it the 2x export of the mobile frame's
// collage, which arranges the photos differently (D-62). As in the mobile reference, that group is
// 10 px wider than the content (372 px at 402 px), centered, and it scales with the column.

const collageAlt = "Collage of people reading, working at laptops, talking in a group and holding books.";
const {
  props: { srcSet: collageDesktop },
} = getImageProps({ alt: collageAlt, src: "/images/community-collage@2x.png", width: 535, height: 530, sizes: "535px" });
const {
  props: { srcSet: collageMobile, ...collage },
} = getImageProps({
  alt: collageAlt,
  src: "/images/community-collage-mobile@2x.png",
  width: 372,
  height: 330,
  sizes: "(min-width: 600px) 570px, calc(100vw - 30px)",
});

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

          <picture className="block">
            <source media="(min-width: 64rem)" srcSet={collageDesktop} sizes="535px" />
            <img
              {...collage}
              srcSet={collageMobile}
              alt={collageAlt}
              className="-mx-[5px] mt-[22px] -mb-[10px] block aspect-[372/330] h-auto w-[calc(100%+10px)] max-w-none lg:mx-auto lg:mt-0 lg:-mb-2 lg:aspect-[535/530] lg:w-full lg:max-w-[535px]"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
