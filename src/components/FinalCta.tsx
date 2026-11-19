import Image from "next/image";
import type { CSSProperties } from "react";
import { sectionIds } from "@/content/navigation";
import { primaryButtonWrapping, secondaryButtonWrappingCompact } from "./button-styles";
import { DemoMessageButton } from "./DemoMessageButton";

// Final call to action (T-07). Copy from docs/design.md. "Explore all courses" goes to #categories
// and "Join Luma" presents the demo message (D-52). The heading style is an estimate (D-54).
// Decorations (D-17, D-18): the separate SVG files, placed from the desktop reference, which is 1280 px
// wide. Shapes cut by the section edges stay on those edges; the others keep their distance from the
// center, so the composition holds on wider screens. They are shown only when the section is at least
// 80rem wide (1280 px with normal text): below that they would overlap the text, and the mobile
// reference has none. Sizes and positions are in rem (the reference px / 16), and the condition is a
// container query, which also follows the root font size: with enlarged text the decorations grow with
// the text or are hidden, and never sit behind it. The two shapes cut by the bottom edge show the same
// part as in the reference, whose section is 0.5 px shorter: `cta-circle-filled` 96.5 px and
// `cta-circle-edge` the top 1.5 px of its circle (D-55). Only the decorations layer clips its
// content: the section does not, so the "Join Luma" message, which may extend below the section,
// is never cut.

type Decoration = { file: string; w: number; h: number; style: CSSProperties };

const rem = (px: number) => `${px / 16}rem`;
const fromCenter = (x: number) => `calc(50% + ${rem(x - 640)})`;

const decorations: Decoration[] = [
  { file: "cta-square-filled-top", w: 136, h: 113, style: { right: 0, top: 0 } },
  { file: "cta-circle-outline-large", w: 108, h: 108, style: { left: fromCenter(22), top: rem(16) } },
  { file: "cta-circle-outline-small", w: 32, h: 32, style: { left: fromCenter(877), top: rem(43) } },
  { file: "cta-square-outline", w: 67, h: 67, style: { left: fromCenter(317), top: rem(42.5) } },
  { file: "cta-icon-drop", w: 62, h: 62, style: { left: fromCenter(1016.25), top: rem(82) } },
  { file: "cta-icon-layers", w: 160, h: 160, style: { left: fromCenter(1079.75), top: rem(180.25) } },
  { file: "cta-icon-chat", w: 32, h: 32, style: { left: fromCenter(141.25), top: rem(214.25) } },
  { file: "cta-square-filled-left", w: 34, h: 67, style: { left: 0, top: rem(230) } },
  { file: "cta-icon-bold", w: 102, h: 102, style: { left: fromCenter(271.75), top: rem(360) } },
  { file: "cta-icon-panels", w: 48, h: 48, style: { left: fromCenter(962.75), top: rem(380.75) } },
  { file: "cta-circle-outline-small", w: 32, h: 32, style: { left: fromCenter(1208), top: rem(429) } },
  { file: "cta-circle-filled", w: 120, h: 97, style: { left: fromCenter(56), bottom: rem(-0.5) } },
  { file: "cta-circle-edge", w: 40, h: 2, style: { left: fromCenter(1064), bottom: rem(-0.5) } },
];

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

      <div className="page-container relative py-[60px] text-center lg:py-[100px]">
        {/* The avatars file (2x: 1312 × 80) is drawn at 656 × 40 px, with the four avatars centered in its middle 136 px. The
            image keeps its own size and proportion; a 136 × 40 px window centered on it shows only
            the avatars (D-55). The window is in px, so enlarged text does not change the crop. */}
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

        {/* Query container: the "Join Luma" message is never wider than this row. Below 1024 px the
            buttons are full width but at most 560 px, centered, as the other sections (D-54, T-09). */}
        <div className="@container mx-auto mt-[37px] flex max-w-[560px] flex-col gap-3 lg:max-w-none lg:flex-row lg:justify-center">
          <a href={`#${sectionIds.categories}`} className={`${primaryButtonWrapping} w-full lg:w-auto`}>
            Explore all courses
          </a>
          <DemoMessageButton
            message="This is a demo. Sign-up is not available."
            wrapperClassName="flex"
            className={`${secondaryButtonWrappingCompact} w-full lg:w-auto`}
            messageClassName="pointer-events-none absolute top-full left-0 z-10 mt-2 w-max max-w-[min(15rem,100cqw)] rounded-lg bg-text-primary px-3 py-2 text-left text-sm leading-5 text-white"
          >
            Join Luma
          </DemoMessageButton>
        </div>
      </div>
    </section>
  );
}
