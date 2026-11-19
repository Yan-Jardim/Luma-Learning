"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { primaryButtonWrapping } from "@/styles/buttons.styles";
import { formField, formLabel } from "./ContactForm.styles";

const message = "This is a demo. Your message was not sent.";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (sent) messageRef.current?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [sent]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
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
      <label htmlFor="contact-name" className={formLabel}>
        Full name
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        placeholder="Your name"
        className={`${formField} py-[11px]`}
      />

      <label htmlFor="contact-email" className={`${formLabel} mt-5`}>
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="youremail@example.com"
        className={`${formField} py-[11px]`}
      />

      <label htmlFor="contact-question" className={`${formLabel} mt-5`}>
        Your question
      </label>
      <textarea
        id="contact-question"
        name="question"
        required
        placeholder="Tell us how we can help..."
        className={`${formField} min-h-[100px] resize-y py-3 lg:min-h-[120px]`}
      />

      <button type="submit" className={`${primaryButtonWrapping} mt-6 w-full`}>
        Send message
      </button>
      <p ref={messageRef} role="status" className={sent ? "mt-4 type-body-sm text-text-primary" : "sr-only"}>
        {sent ? message : ""}
      </p>
    </form>
  );
}
