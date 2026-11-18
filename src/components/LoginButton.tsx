"use client";

import { useEffect, useRef, useState } from "react";

// Approved behavior (D-24): no authentication, network request or new page.
const message = "This is a demo. Sign-in is not available.";

type LoginButtonProps = {
  className?: string;
  messageClassName?: string;
};

export function LoginButton({ className = "", messageClassName = "" }: LoginButtonProps) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // The message stays until Escape or a click outside, so it is never removed before it can be read.
  useEffect(() => {
    if (!visible) return;
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
    <div ref={wrapperRef} className="relative">
      <button type="button" className={className} onClick={() => setVisible(true)}>
        Log in
      </button>
      {/* The live region is always rendered, so screen readers announce the text when it appears. */}
      <p role="status" className={visible ? messageClassName : "sr-only"}>
        {visible ? message : ""}
      </p>
    </div>
  );
}
