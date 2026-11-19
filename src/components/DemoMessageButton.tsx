"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DemoMessageButtonProps = {
  message: string;
  children: ReactNode;
  // Accessible name when the visible label is not enough (it must contain the visible text).
  ariaLabel?: string;
  className?: string;
  messageClassName?: string;
  wrapperClassName?: string;
};

// Button that presents an accessible demo message instead of an action that does not exist
// (D-24, D-35). No authentication, network request or new page.
export function DemoMessageButton({
  message,
  children,
  ariaLabel,
  className = "",
  messageClassName = "",
  wrapperClassName = "",
}: DemoMessageButtonProps) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

  // The message stays until Escape or a click outside, so it is never removed before it can be read.
  // When it appears partly outside the window, the page scrolls just enough to show it (D-38).
  useEffect(() => {
    if (!visible) return;
    messageRef.current?.scrollIntoView({ block: "nearest", inline: "nearest" });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setVisible(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [visible]);

  return (
    <div ref={wrapperRef} className={`relative ${wrapperClassName}`}>
      <button type="button" aria-label={ariaLabel} className={className} onClick={() => setVisible(true)}>
        {children}
      </button>
      {/* The live region is always rendered, so screen readers announce the text when it appears. */}
      <p ref={messageRef} role="status" className={visible ? messageClassName : "sr-only"}>
        {visible ? message : ""}
      </p>
    </div>
  );
}
