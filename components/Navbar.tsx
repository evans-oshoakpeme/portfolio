import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  return (
    <nav className="sticky mx-auto my-6 lg:my-8 top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-navbar-background px-4 lg:mx-80 rounded-full w-full lg:w-2xl h-12 flex justify-around items-center">
          {/* Desktop Navigation Links */}
          {/* hidden by default (mobile), md:flex renders it on medium devices and up */}
          <div className="flex justify-between items-center space-x-16 lg:space-x-32 text-xs font-medium">
            <Link href="/" className="text-foreground hover:text-gray-900 dark:text-foreground dark:hover:text-white">
              HOME
            </Link>
            <Link href="/about" className="text-foreground hover:text-gray-900 dark:text-foreground dark:hover:text-white">
              ABOUT
            </Link>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}