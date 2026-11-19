"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DemoMessageButtonProps = {
  message: string;
  children: ReactNode;
  ariaLabel?: string;
  className: string;
  messageClassName: string;
  wrapperClassName?: string;
  closeOnFocusOut?: boolean;
};

export function DemoMessageButton({
  message,
  children,
  ariaLabel,
  className,
  messageClassName,
  wrapperClassName = "",
  closeOnFocusOut = false,
}: DemoMessageButtonProps) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

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
    <div
      ref={wrapperRef}
      className={`relative ${wrapperClassName}`}
      onBlur={
        closeOnFocusOut
          ? (event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setVisible(false);
            }
          : undefined
      }
    >
      <button type="button" aria-label={ariaLabel} className={className} onClick={() => setVisible(true)}>
        {children}
      </button>
      <p ref={messageRef} role="status" className={visible ? messageClassName : "sr-only"}>
        {visible ? message : ""}
      </p>
    </div>
  );
}
