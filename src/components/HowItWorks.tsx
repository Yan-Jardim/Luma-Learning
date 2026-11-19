import Image from "next/image";
import { sectionIds } from "@/content/navigation";

// "How it works" (T-05). Text styles: confirmed (`type-desktop-*`) or estimated (D-31).
// Spacing and the connector lines are estimates from the references (D-33).
// Step 02 uses the desktop text and colors on every breakpoint (D-36).
// `wrap-break-word` only breaks a word that does not fit its line (very large text on narrow screens).

const steps = [
  {
    number: "01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
    image: { src: "/images/step-01.svg", size: 56 },
  },
  {
    number: "02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    image: { src: "/images/step-02.svg", size: 67 },
  },
  {
    number: "03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    image: { src: "/images/step-03.svg", size: 56 },
  },
];

export function HowItWorks() {
  return (
    <section id={sectionIds.howItWorks} aria-labelledby="how-it-works-heading" className="bg-cream wrap-break-word">
      <div className="page-container py-[60px] lg:pt-[100px] lg:pb-[128px]">
        <div className="text-center">
          <p className="type-desktop-overline text-primary-blue">How Luma works</p>
          <h2
            id="how-it-works-heading"
            className="mt-4 type-section-heading-mobile text-text-primary lg:type-section-heading-desktop"
          >
            Less browsing. More learning.
          </h2>
        </div>

        {/* --steps-gap also sizes the desktop connector, which runs from one icon center to the next. */}
        <ol className="mx-auto mt-10 max-w-[560px] lg:mt-[105px] lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-(--steps-gap) lg:[--steps-gap:3rem] xl:[--steps-gap:5rem]">
          {steps.map((step, index) => (
            <li key={step.number} className={`relative ${index > 0 ? "pt-[76px] lg:pt-0" : ""}`}>
              {index > 0 && (
                <span aria-hidden="true" className="absolute top-7 left-7 h-12 w-px bg-line lg:hidden" />
              )}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-7 left-7 hidden h-px w-[calc(100%+var(--steps-gap))] bg-line lg:block"
                />
              )}
              <div className="relative size-14">
                <Image
                  src={step.image.src}
                  alt=""
                  width={step.image.size}
                  height={step.image.size}
                  unoptimized
                  className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="mt-6 type-desktop-overline text-label-gray">Step {step.number}</p>
              <h3 className="mt-2 type-card-title text-text-primary lg:mt-2.5">{step.title}</h3>
              <p className="mt-[15px] type-body-sm text-text-secondary lg:mt-4 lg:type-body-md">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
