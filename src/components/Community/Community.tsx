import { getImageProps } from "next/image";
import { DemoMessageButton } from "@/components/DemoMessageButton/DemoMessageButton";
import { sectionIds } from "@/content/navigation";
import { secondaryButtonWrapping } from "@/styles/buttons.styles";
import { sectionContainer, sectionHeading, sectionOverline } from "@/styles/section.styles";
import { collageImage, exploreMessage } from "./Community.styles";

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
      <div className={sectionContainer}>
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,535fr)_minmax(0,535fr)] lg:items-center lg:gap-x-[50px]">
          <div className="@container">
            <p className={sectionOverline}>The people</p>
            <h2 id="community-heading" className={`mt-2 ${sectionHeading}`}>
              Meet international students &amp; teachers
            </h2>
            <p lang="la" className="mt-6 type-mobile-subtitle-1 text-text-secondary lg:mt-8 lg:type-desktop-subtitle-1">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc.
              Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna,
              faucibus aenean lorem faucibus integer.
            </p>
            <DemoMessageButton
              message={message}
              wrapperClassName="mt-6 flex lg:mt-8"
              className={secondaryButtonWrapping}
              messageClassName={exploreMessage}
            >
              Explore teachers and students
            </DemoMessageButton>
          </div>

          <picture className="block">
            <source media="(min-width: 64rem)" srcSet={collageDesktop} sizes="535px" />
            <img {...collage} srcSet={collageMobile} alt={collageAlt} className={collageImage} />
          </picture>
        </div>
      </div>
    </section>
  );
}
