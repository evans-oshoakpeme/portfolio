import Link from 'next/link';
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navbar-background border-t border-gray-200 dark:border-slate-800 py-4 text-foreground">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand or Logo text */}
        <div className="text-sm font-medium">
          Evans Oshoakpeme | Product Designer.
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <Link href="https://www.linkedin.com/in/evans-oshoakpeme/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/evans-oshoakpeme" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
            </Link>
          </li>
          <li>
            <Link href="https://dribbble.com/evans-oshoakpeme" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
              <FaDribbble className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
            </Link>
          </li>
          <li>
            <a href="mailto:ev.oshoakpeme@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-sm text-center">
          © {currentYear} Evans Oshoakpeme. <br />All rights reserved.
        </div>
      </div>
    </footer>
  );
}