import Image from "next/image";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { sectionIds } from "@/content/navigation";
import { sectionContainer, sectionHeading, sectionOverline } from "@/styles/section.styles";
import { formCard, infoItem } from "./Contact.styles";

export function Contact() {
  return (
    <section id={sectionIds.contact} aria-labelledby="contact-heading" className="bg-white wrap-break-word">
      <div className={sectionContainer}>
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,480fr)_minmax(0,540fr)] lg:items-center lg:gap-x-[100px]">
          <div>
            <p className={sectionOverline}>Contact</p>
            <h2 id="contact-heading" className={`mt-4 ${sectionHeading}`}>
              Get in touch
            </h2>
            <p className="mt-4 type-body-sm text-text-secondary lg:type-desktop-subtitle-1">
              Have a question? We’re here to help. Whether you’re looking for the right course, learning with
              your team or interested in teaching with Luma, we’d love to hear from you.
            </p>

            <ul className="mt-8 space-y-4 lg:mt-10">
              <li className={infoItem}>
                <Image src="/icons/icon-message.svg" alt="" width={40} height={40} className="shrink-0" />
                <div className="min-w-0">
                  <p className="type-body-sm text-text-primary">Email</p>
                  <p className="mt-0.5 type-body-sm text-primary-blue lg:mt-1">contact@luma.com</p>
                </div>
              </li>
              <li className={infoItem}>
                <span className="flex size-[40px] shrink-0 items-center justify-center rounded-[8px] bg-blue-tint">
                  <Image src="/icons/icon-clock.svg" alt="" width={20} height={20} />
                </span>
                <div className="min-w-0">
                  <p className="type-body-sm text-text-primary">Response Time</p>
                  <p className="mt-0.5 type-body-sm text-label-gray lg:mt-1">Up to 24 hours on business days</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={formCard}>
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
