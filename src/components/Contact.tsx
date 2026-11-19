import Image from "next/image";
import { sectionIds } from "@/content/navigation";
import { ContactForm } from "./ContactForm";

// Contact (T-07). Copy from docs/design.md, in English on both breakpoints (D-06). Text styles are
// confirmed (`type-desktop-*`) or estimated (D-31, D-54); sizes and spacing are estimates from the
// references. The email address is plain text with the reference color: no `mailto:`, no Tab stop
// and no link cursor (D-51). The icons are decorative; the text next to them carries the meaning.
// Below 1024 px the section is one centered column, at most 560 px wide, as the other sections.

const cardShadow = "shadow-[0_8px_24px_rgba(23,27,44,0.08)]";

export function Contact() {
  return (
    <section id={sectionIds.contact} aria-labelledby="contact-heading" className="bg-white wrap-break-word">
      <div className="page-container py-[60px] lg:py-[100px]">
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,480fr)_minmax(0,540fr)] lg:items-center lg:gap-x-[100px]">
          <div>
            <p className="type-desktop-overline text-primary-blue">Contact</p>
            <h2
              id="contact-heading"
              className="mt-4 type-section-heading-mobile text-text-primary lg:type-section-heading-desktop"
            >
              Get in touch
            </h2>
            <p className="mt-4 type-body-sm text-text-secondary lg:type-desktop-subtitle-1">
              Have a question? We’re here to help. Whether you’re looking for the right course, learning with
              your team or interested in teaching with Luma, we’d love to hear from you.
            </p>

            <ul className="mt-8 space-y-4 lg:mt-10">
              <li className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
                <Image src="/icons/icon-message.png" alt="" width={40} height={40} unoptimized className="shrink-0" />
                {/* min-w-0: with enlarged text the address can wrap instead of leaving the window. */}
                <div className="min-w-0">
                  <p className="type-body-sm text-text-primary">Email</p>
                  <p className="mt-0.5 type-body-sm text-primary-blue lg:mt-1">contact@luma.com</p>
                </div>
              </li>
              <li className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
                <Image src="/icons/icon-clock.png" alt="" width={40} height={40} unoptimized className="shrink-0" />
                <div className="min-w-0">
                  <p className="type-body-sm text-text-primary">Response Time</p>
                  <p className="mt-0.5 type-body-sm text-label-gray lg:mt-1">Up to 24 hours on business days</p>
                </div>
              </li>
            </ul>
          </div>

          <div
            className={`mt-10 rounded-2xl border border-line bg-white px-[19px] pt-[25px] pb-[23px] ${cardShadow} lg:mt-0 lg:px-[39px] lg:pt-[41px] lg:pb-[39px]`}
          >
            <h3 className="type-card-title text-text-primary">Contact us</h3>
            <p className="mt-2.5 type-body-sm text-text-secondary">
              Fill out the fields and we will get in touch.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
