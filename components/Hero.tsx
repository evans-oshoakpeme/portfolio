import Image from 'next/image';
import { FaLinkedin, FaGithub, FaDribbble, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-6xl min-h-[85vh] flex items-center mx-24 px-16 mb-32 text-foreground overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-0 right-0 -z-10 w-75 h-75 sm:w-150 sm:h-150 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-62.5 h-62.5 sm:w-125 sm:h-125 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
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
              <div className="flex flex-col w-full sm:w-auto">
                <p>Product Designer</p>
                <p className='text-xs'>UX Design, UI Design, User Research, Usability Testing</p>
              </div>
            </div>
          </div>

          {/* Right Side: Responsive Visual Container */}
          <div className="relative w-full aspect-square max-w-112.5 lg:max-w-none mx-auto flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* Section for external links */}
              <p className="text-xs sm:text-xs md:text-xs px-12 mt-56">
                Use the links below to explore my work and connect with me.
              </p>
              <div className="flex flex-col justify-center px-12 gap-4 space-x-6 mt-4">
                <div className="flex flex-row justify-left items-center gap-2">
                  <Link href="https://www.linkedin.com/in/evans-oshoakpeme/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Connect with me on LinkedIn.
                  </p>
                </div>
                <div className="flex flex-row justify-left items-center gap-4">
                  <Link href="https://github.com/evans-oshoakpeme" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Explore my GitHub repositories.
                  </p>
                </div>
                <div className="flex flex-row justify-left items-center gap-4">
                  <Link href="https://dribbble.com/evans-oshoakpeme" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                    <FaDribbble className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Check out my Dribbble portfolio.
                  </p>
                </div>
                <div className="flex flex-row justify-left items-center gap-4">
                  <a href="mailto:ev.oshoakpeme@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <FaEnvelope className="h-6 w-6 text-foreground hover:text-indigo-500 transition-colors" />
                  </a>
                  <p className="text-xs text-muted-foreground">
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