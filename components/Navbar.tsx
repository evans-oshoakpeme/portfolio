/*"use client";

import { useState } from "react";*/
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  /*const [isOpen, setIsOpen] = useState(false);*/

  return (
    <nav className="sticky m-8 left-0 top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-navbar-background mx-80 rounded-full w-2xl h-12 flex justify-around items-center">
          {/* Desktop Navigation Links */}
          {/* hidden by default (mobile), md:flex renders it on medium devices and up */}
          <div className="flex justify-between items-center space-x-32 text-xs font-medium">
            <Link href="/" className="text-foreground hover:text-gray-900 dark:text-foreground dark:hover:text-white">
              HOME
            </Link>
            <Link href="/about" className="text-foreground hover:text-gray-900 dark:text-foreground dark:hover:text-white">
              ABOUT
            </Link>
            
            <ThemeToggle />
          </div>

          {/* Hamburger Menu Button (Mobile Only)
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-foreground dark:text-foreground hover:text-gray-700 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  // "X" Close Icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Menu Icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>*/}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {/* Conditionally rendered based on state, hidden on desktop via md:hidden
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}*/}
    </nav>
  );
}