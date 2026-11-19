import Image from "next/image";
import Link from "next/link";
import { navItems, startLearning } from "@/content/navigation";
import { demoMessage, headerButton } from "./button-styles";
import { LoginButton } from "./LoginButton";
import { MobileMenu } from "./MobileMenu";

const navLink = "text-sm leading-6 text-text-secondary";

export function Header() {
  return (
    <header className="relative border-b border-line bg-cream">
      <div className="page-container flex min-h-[68px] items-center justify-between py-[8px] lg:grid lg:min-h-[69px] lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start">
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
            messageClassName={`${demoMessage} absolute top-full right-0 z-30 mt-3 max-w-60`}
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
