"use client";

import React, { useState, useRef, TouchEvent } from "react";
import Image from "next/image";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Revolutionizing E-Commerce Scale",
    category: "Development",
    description: "How we helped a global retailer migrate to Next.js and achieve a 40% increase in conversion rates.",
    image: "",
    link: "/case-studies/ecommerce",
  },
  {
    id: 2,
    title: "AI-Powered Financial Insights",
    category: "FinTech",
    description: "Building a secure, real-time data dashboard processing millions of transactions daily.",
    image: "",
    link: "/case-studies/fintech",
  },
  {
    id: 3,
    title: "Designing for the Future Workplace",
    category: "UX/UI Design",
    description: "A complete design system overhaul for a remote-first collaboration platform.",
    image: "",
    link: "/case-studies/design-system",
  },
];

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

   const minSwipeDistance = 50;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onTouchStart = (e: TouchEvent) => {
    touchEndX.current = null; // Reset end touch pointer
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Featured Work</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-200">Discover some of my recent projects and success stories.</p>
        </div>

        <div
        className="flex transition-transform duration-300 ease-out will-change-transform cursor-grab active:cursor-grabbing"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
      </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-4 md:mt-0">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-700"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-700"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel Window */}
      <div className="overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {caseStudies.map((study) => (
            <div key={study.id} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 items-center">
              {/* Image Container */}
              <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover"
                  priority={study.id === 1}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
                  {study.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4">
                  {study.title}
                </h3>
                <p className="text-slate-600 mb-6 text-base md:text-lg">
                  {study.description}
                </p>
                <div>
                  <a
                    href={study.link}
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Read Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-8 bg-slate-900 dark:bg-slate-700" : "w-2 bg-slate-500 dark:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}