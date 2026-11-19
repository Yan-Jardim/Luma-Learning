import Image from "next/image";
import { DemoMessageButton } from "@/components/DemoMessageButton/DemoMessageButton";
import { sectionIds } from "@/content/navigation";
import { primaryButtonWrapping, secondaryButtonWrappingCompact } from "@/styles/buttons.styles";
import { sectionContainer } from "@/styles/section.styles";
import { decorations } from "./FinalCta.data";
import { joinMessage } from "./FinalCta.styles";
import { rem } from "./FinalCta.utils";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="@container relative bg-yellow-tint wrap-break-word">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden @min-[80rem]:block">
        {decorations.map((d, index) => (
          <Image
            key={`${d.file}-${index}`}
            src={`/images/cta/${d.file}.svg`}
            alt=""
            width={d.w}
            height={d.h}
            className="absolute max-w-none"
            style={{ ...d.style, width: rem(d.w), height: rem(d.h) }}
          />
        ))}
      </div>

      <div className={`${sectionContainer} relative text-center`}>
        <div className="relative mx-auto h-[40px] w-[136px] overflow-hidden">
          <Image
            src="/images/cta-avatars@2x.png"
            alt=""
            width={656}
            height={40}
            unoptimized
            className="absolute top-0 left-1/2 max-w-none -translate-x-1/2"
          />
        </div>
        <h2
          id="cta-heading"
          className="mt-8 type-cta-heading-mobile text-text-primary lg:type-cta-heading-desktop"
        >
          What will you learn next?
        </h2>
        <p className="mt-4 type-mobile-subtitle-1 text-text-secondary lg:mt-[15px] lg:type-desktop-subtitle-1">
          Start with one course. Build from there.
        </p>

        <div className="@container mx-auto mt-[37px] flex max-w-[560px] flex-col gap-3 lg:max-w-none lg:flex-row lg:justify-center">
          <a href={`#${sectionIds.categories}`} className={`${primaryButtonWrapping} w-full lg:w-auto`}>
            Explore all courses
          </a>
          <DemoMessageButton
            message="This is a demo. Sign-up is not available."
            wrapperClassName="flex"
            className={`${secondaryButtonWrappingCompact} w-full lg:w-auto`}
            messageClassName={joinMessage}
          >
            Join Luma
          </DemoMessageButton>
        </div>
      </div>
    </section>
  );
}
