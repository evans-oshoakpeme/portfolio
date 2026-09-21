export const metadata = {
  title: "About Me | Evans Oshoakpeme",
  description: "Learn more about my technical toolkit, journey, and professional experience.",
};

import Image from "next/image";

// Mock data structure for clean code maintenance
const SKILLS = [
  { category: "Frontend", items: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS"] },
  { category: "UX Design", items: ["Figma", "Adobe XD", "User Research"] },
  { category: "Other Tools", items: ["Git", "Vercel"] },
];

const EXPERIENCES = [
  /*{ role: "Product Designer", company: "TechCorp", period: "2024 - Present" },*/
  { role: "QA Engineer", company: "Gilah Global Limited", period: "2021 - 2023" },
];

const EDUCATION = [
  { degree: "B.Sc. Mathematics andComputer Science", institution: "National Open University of Nigeria", year: "2027" },
  { degree: "Creative Design and Development", institution: "National Institute of Technology", year: "2018" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground py-16 px-4 sm:px-6 lg:px-8 m-8 transitional-colors duration-300">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-0 right-0 -z-10 w-75 h-75 sm:w-150 sm:h-150 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-62.5 h-62.5 sm:w-125 sm:h-125 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl py-12 mx-auto space-y-16">
        
        {/* Intro Section: Responsive Grid (1 col mobile, 2 col desktop) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Avatar Container */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
              <Image
                src="/profile.jpg"
                alt="Evans Oshoakpeme"
                fill
                priority
                className="object-cover"
                sizes="(max-w-768px) 256px, 320px"
              />
            </div>
          </div>

          {/* Text Bio */}
          <div className="md:col-span-7 space-y-4 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Hi, I am <span className="text-foreground">Evans Oshoakpeme</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a passionate product designer and frontend developer with a strong focus on creating user-centric digital experiences. My journey in tech has been driven by curiosity, creativity, and a commitment to continuous learning.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              When I am not designing or developing, you can find me exploring new design trends, or learning about the latest technologies.
            </p>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="mailto:ev.oshoakpeme@gmail.com" 
                className="px-6 py-2.5 bg-button-background hover:bg-slate-800 text-white font-medium rounded-lg shadow-md transition"
              >
                Get in Touch
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="px-6 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section: Responsive Cards Layout */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold border-b border-slate-200 dark:border-slate-800 pb-2">
            Technical Toolkit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup) => (
              <div 
                key={skillGroup.category} 
                className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <li 
                      key={skill} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-sm font-medium rounded-md text-slate-600 dark:text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold border-b border-slate-200 dark:border-slate-800 pb-2">
            Work Experience
          </h2>
          <div className="space-y-4">
            {EXPERIENCES.map((exp, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{exp.company}</p>
                </div>
                <span className="mt-2 sm:mt-0 text-sm font-semibold inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full max-w-max">
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education Section */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold border-b border-slate-200 dark:border-slate-800 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            {EDUCATION.map((edu, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{edu.institution}</p>
                </div>
                <span className="mt-2 sm:mt-0 text-sm font-semibold inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full max-w-max">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}