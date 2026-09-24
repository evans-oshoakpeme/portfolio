import Image from 'next/image';
import { FaLinkedin, FaGithub, FaDribbble, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center mx-auto mb-0 md:mb-32 text-foreground overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-32 right-0 -z-10 w-75 h-75 sm:w-120 sm:h-120 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-62.5 h-62.5 sm:w-120 sm:h-120 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl md:w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Evans Oshoakpeme
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl font-medium max-w-xl">
              I am passionate about designing and building experiences that are equitable, enjoyable, and useful.
            </p>
            
            {/* Picture and roles */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Image
                src="/profile.jpg"
                alt="Evans Oshoakpeme"
                width={100}
                height={100}
                className="rounded-2xl border border-slate-700/50 shadow-lg"
              />
              <div className="flex flex-col w-full sm:w-auto md:text-left">
                <p>Product Designer</p>
                <p className='text-xs'>UX Design, UI Design, User Research, Usability Testing</p>
              </div>
            </div>
          </div>

          {/* Right Side: Responsive Visual Container */}
          <div className="relative w-full aspect-square max-w-112.5 lg:max-w-none mx-auto flex items-center justify-center">
            <div className="relative border border-navbar-background shadow-lg w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/quotable2.jpg"
                alt="Evans Oshoakpeme"
                width={450}
                height={160}
                className="border border-navbar-background shadow-lg"
              />
              {/* Section for external links */}
              <p className="text-xs sm:text-xs md:text-xs text-center md:text-left px-4 mt-12">
                Use the links below to explore my work and connect with me.
              </p>
              <div className="flex flex-row md:flex-col justify-center px-4 gap-4 space-x-6 mt-6 lg:mt-4">
                <div className="flex flex-row justify-left items-center gap-4">
                  <Link href="https://www.linkedin.com/in/evans-oshoakpeme/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </Link>
                  <p className="text-xs hidden md:block text-muted-foreground">
                    Connect with me on LinkedIn.
                  </p>
                </div>
                <div className="flex flex-row justify-left items-center gap-4">
                  <Link href="https://github.com/evans-oshoakpeme" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </Link>
                  <p className="text-xs hidden md:block text-muted-foreground">
                    Explore my GitHub repositories.
                  </p>
                </div>
                <div className="flex flex-row justify-left items-center gap-4">
                  <Link href="https://dribbble.com/evans-oshoakpeme" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                    <FaDribbble className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </Link>
                  <p className="text-xs hidden md:block text-muted-foreground">
                    Check out my Dribbble portfolio.
                  </p>
                </div>
                <div className="flex flex-row justify-left items-center gap-4">
                  <a href="mailto:ev.oshoakpeme@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <FaEnvelope className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </a>
                  <p className="text-xs hidden md:block text-muted-foreground">
                    Reach out to me via email for inquiries or collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}