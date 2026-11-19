"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { primaryButtonWrapping } from "./button-styles";

// Contact form (T-07, D-50). Native validation: the three fields are required and the email field
// checks the format. Submitting sends nothing, stores nothing and logs nothing: it only shows the
// demo message. The fields keep their values, and the message is removed when the user edits again.
// When the message appears partly outside the window, the page scrolls just enough to show it (D-38).

const message = "This is a demo. Your message was not sent.";

// Sizes are estimates from the references (D-54): labels use `Desktop/body 1`; the fields are 48 px
// high (the question field at least 100 / 120 px) and grow with enlarged text.
const labelClass = "block type-desktop-body-1 text-text-primary";
const fieldClass =
  "mt-2 block w-full rounded-lg border border-line bg-cream px-4 type-body-sm text-text-primary placeholder:text-label-gray";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (sent) messageRef.current?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [sent]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Reached only after native validation passes. No request, storage or log.
    event.preventDefault();
    setSent(true);
  };

  return (
    <form
      className="mt-6"
      onSubmit={onSubmit}
      onInput={() => {
        if (sent) setSent(false);
      }}
    >
      <label htmlFor="contact-name" className={labelClass}>
        Full name
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        placeholder="Your name"
        className={`${fieldClass} py-[11px]`}
      />

      <label htmlFor="contact-email" className={`${labelClass} mt-5`}>
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="youremail@example.com"
        className={`${fieldClass} py-[11px]`}
      />

      <label htmlFor="contact-question" className={`${labelClass} mt-5`}>
        Your question
      </label>
      <textarea
        id="contact-question"
        name="question"
        required
        placeholder="Tell us how we can help..."
        className={`${fieldClass} min-h-[100px] resize-y py-3 lg:min-h-[120px]`}
      />

      <button type="submit" className={`${primaryButtonWrapping} mt-6 w-full`}>
        Send message
      </button>
      {/* Always rendered, so screen readers announce the text when it appears. */}
      <p ref={messageRef} role="status" className={sent ? "mt-4 type-body-sm text-text-primary" : "sr-only"}>
        {sent ? message : ""}
      </p>
    </form>
  );
}
