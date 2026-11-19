import Image from "next/image";

const metrics = [
  { value: "24K+", caption: "active learners" },
  { value: "120+", caption: "expert-led courses" },
  { value: "92%", caption: "complete their first course" },
];

export function Testimonial() {
  return (
    <section className="bg-white wrap-break-word">
      <div className="page-container py-[60px] lg:py-[100px]">
        <div className="mx-auto max-w-[560px] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,735fr)_minmax(0,385fr)] lg:items-center">
          <figure className="max-w-[600px]">
            <Image src="/icons/icon-quote.svg" alt="" width={24} height={22} className="mb-4" />
            <blockquote>
              <p className="type-quote-mobile text-text-primary lg:type-quote-desktop">
                The lessons are short enough to fit into my week, but detailed enough that I actually leave
                with something I can use.
              </p>
            </blockquote>
            <figcaption className="mt-[33px] flex items-center gap-4 lg:mt-8">
              <Image
                src="/images/testimonial-alex-morgan@2x.png"
                alt=""
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-full"
              />
              <span className="min-w-0">
                <span className="block text-base leading-6 font-bold text-text-primary">Alex Morgan</span>{" "}
                <span className="mt-0.5 block type-body-sm text-text-secondary">Product Manager</span>
              </span>
            </figcaption>
          </figure>

          <div className="@container mt-[59px] lg:mt-0 lg:border-l lg:border-line lg:pl-12">
            <ul className="grid grid-cols-3 @max-[19em]:grid-cols-1 @max-[19em]:gap-y-4 lg:grid-cols-1 lg:gap-y-[19px]">
              {metrics.map((metric) => (
                <li key={metric.caption}>
                  <p className="type-mobile-h1 text-primary-blue lg:type-desktop-h1">{metric.value}</p>
                  <p className="mt-1 type-body-sm text-label-gray lg:mt-1.5 lg:leading-5">{metric.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
