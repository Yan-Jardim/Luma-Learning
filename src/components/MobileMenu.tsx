"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navItems, startLearning } from "@/content/navigation";
import { primaryButton } from "./button-styles";
import { LoginButton } from "./LoginButton";

const desktopQuery = "(min-width: 64rem)";
const panelId = "mobile-menu";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia(desktopQuery);
    const onChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      setOpen(false);
      const active = document.activeElement;
      const focusIsHidden =
        active instanceof HTMLElement &&
        (active === buttonRef.current || (panelRef.current?.contains(active) ?? false));
      if (focusIsHidden) active.blur();
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const selectLink = (href: string) => {
    setOpen(false);
    const target = href.startsWith("#") ? document.getElementById(href.slice(1)) : null;
    if (!target) {
      buttonRef.current?.focus();
      return;
    }
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus();
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-9 items-center justify-center rounded-lg lg:hidden"
      >
        <Image src="/icons/icon-menu.svg" alt="" width={24} height={24} />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 border-y border-line bg-cream lg:hidden"
      >
        {open && (
          <nav aria-label="Main" className="page-container pt-2 pb-5">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => selectLink(item.href)}
                    className="block py-2.5 text-sm leading-6 text-text-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <LoginButton
                className="w-full py-2.5 text-left text-sm leading-6 text-text-secondary"
                messageClassName="mt-1 text-sm leading-6 text-text-primary"
              />
              <a
                href={startLearning.href}
                onClick={() => selectLink(startLearning.href)}
                className={`${primaryButton} w-full`}
              >
                {startLearning.label}
              </a>
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
