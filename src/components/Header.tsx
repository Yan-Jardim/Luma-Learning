import Image from "next/image";
import Link from "next/link";
import { navItems, startLearning } from "@/content/navigation";
import { headerButton } from "./button-styles";
import { LoginButton } from "./LoginButton";
import { MobileMenu } from "./MobileMenu";

// Bar heights (68 px mobile, 69 px desktop, plus the 1 px border), nav link style and spacing
// are estimates from the references (docs/design.md).
const navLink = "text-sm leading-6 text-text-secondary";

export function Header() {
  return (
    <header className="relative border-b border-line bg-cream">
      <div className="page-container flex h-[68px] items-center justify-between lg:grid lg:h-[69px] lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start">
          <Image src="/brand/logo-dark.svg" alt="Luma" width={54} height={17} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
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
            className={navLink}
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
