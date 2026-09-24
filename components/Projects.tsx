"use client";

import { useState } from "react";
import { ExternalLink, Folder } from "lucide-react";

// 1. Define the Project Data Structure
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "Frontend" | "Design";
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack online store featuring real-time inventory, secure Stripe checkout, and a comprehensive admin dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Frontend",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A mobile-first web app to track workouts, log daily nutrition, and visualize fitness progress with dynamic charts.",
    tags: ["React Native", "Expo", "Supabase", "Tailwind"],
    category: "Frontend",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "AI Image Dashboard",
    description: "A SaaS interface integrating generative AI models, featuring smart user workspace management and usage metrics.",
    tags: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    category: "Frontend",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Smart Home UI Kit",
    description: "A modern design system and UI prototype for controlling IoT smart home devices with dark mode optimization.",
    tags: ["Figma", "UI/UX", "Design System"],
    category: "Design",
    liveUrl: "https://example.com",
  },
];

const categories: ("All" | Project["category"])[] = ["All", "Frontend", "Design"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filter projects based on selected tab
  const filteredProjects = projectsData.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-navbar-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left md:text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, spanning web applications, mobile tools, and interface designs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-left md:justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-button-background text-white shadow-md shadow-blue-600/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Card Content Wrapper */}
              <div className="p-6 sm:p-8 flex flex-col grow">
                
                {/* Header Icon & Links */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Titles & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}