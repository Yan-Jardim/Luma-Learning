import Image from "next/image";
import Link from "next/link";
import { navItems, startLearning } from "@/content/navigation";
import { headerButton } from "./button-styles";
import { LoginButton } from "./LoginButton";
import { MobileMenu } from "./MobileMenu";

// Bar heights (68 px mobile, 69 px desktop, plus the 1 px border), nav link style and spacing
// are estimates from the references (docs/design.md).
// Enlarged text (D-57): the heights are minimums, so the bar grows with its content and the
// focus outline of "Menu" stays inside it. When the root font size grows but the breakpoints do not,
// the desktop links wrap onto more lines instead of pushing "Start learning" out of the window, and
// "Log in" stays on one line. At the normal size everything fits on one line, as before.
const navLink = "text-sm leading-6 text-text-secondary";

export function Header() {
  return (
    <header className="relative border-b border-line bg-cream">
      <div className="page-container flex min-h-[68px] items-center justify-between py-[8px] lg:grid lg:min-h-[69px] lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start">
          {/* max-w-none: the logo keeps its 54 px when the columns are tight (enlarged text). */}
          <Image src="/brand/logo-dark.svg" alt="Luma" width={54} height={17} className="max-w-none" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 justify-self-end lg:flex">
          <LoginButton
            className={`${navLink} whitespace-nowrap`}
            messageClassName="absolute top-full right-0 z-30 mt-3 w-max max-w-60 rounded-lg bg-text-primary px-3 py-2 text-sm leading-5 text-white"
          />
          <a href={startLearning.href} className={headerButton}>
            {startLearning.label}
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
