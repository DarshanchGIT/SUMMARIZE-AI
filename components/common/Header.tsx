import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export async function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 w-full border-b border-border bg-background/40 px-4 backdrop-blur-lg font-sans">
      <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="#header" className="flex items-center gap-2">
            <span className="text-lg font-medium">Summarize</span>
          </Link>
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className="text-sm hover:text-foreground/80">
              <Link href="#hero">About us</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="#howitworks">How it works</Link>
            </li>

            <li className="text-sm hover:text-foreground/80">
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="#pricing">Pricing</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 font-sans">
          <SignedOut>
            <Link
              href="/sign-up"
              className={buttonVariants({
                size: "sm",
                className: "hidden md:flex",
              })}
            >
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-5">
              <Link
                className="text-sm hover:text-foreground/80"
                href="/summaries"
              >
                Your summaries
              </Link>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
