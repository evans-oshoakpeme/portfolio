import React from 'react';
import Image from 'next/image';

interface Section {
  tag?: string;
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}

interface CaseStudyProps {
  title: string;
  description: string;
  heroImage: string;
  client: string;
  role: string;
  timeline: string;
  sections: Section[];
}

export default function CaseStudy({
  title,
  description,
  heroImage,
  client,
  role,
  timeline,
  sections,
}: CaseStudyProps) {
  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Hero Section */}
      <header className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 border-y border-slate-200 py-8 text-center sm:grid-cols-3">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Client</span>
            <span className="mt-2 block text-base font-medium text-slate-800">{client}</span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Role</span>
            <span className="mt-2 block text-base font-medium text-slate-800">{role}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Timeline</span>
            <span className="mt-2 block text-base font-medium text-slate-800">{timeline}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
          <Image
            src={heroImage}
            alt={`${title} project preview`}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </header>

      {/* Case Study Dynamic Sections */}
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-24 md:space-y-32">
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={index}
                className={`flex flex-col gap-12 lg:items-center lg:gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Block */}
                <div className="w-full lg:w-1/2 space-y-4">
                  {section.tag && (
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      {section.tag}
                    </span>
                  )}
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>

                {/* Image Block */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100 shadow-md transition-transform duration-300 hover:scale-[1.01]">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-w-1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </article>
  );
}