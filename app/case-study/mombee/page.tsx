import CaseStudy from '@/components/case-study';

const sampleProject = {
  title: "A maternal health platform for underserved communities",
  description: "How I designed a user-centered solution to address the unique needs of expectant mothers in Nigeria.",
  heroImage: "/images/hero-mombee.jpg",
  client: "Mombee",
  role: "Lead Product Designer",
  timeline: "3 Months (Q3 2026)",
  sections: [
    {
      tag: "01. The Challenge",
      title: "Cluttered dashboards and user drop-off",
      content: "Users were overwhelmed by dense financial tables and confusing navigation. Our research revealed that users spent an average of 4 minutes trying to find their monthly spending summary, causing massive bounce rates on the main dashboard portal.",
      imageSrc: "/images/challenge-analytics.jpg",
      imageAlt: "A graph highlighting drop-off points in the legacy application dashboard"
    },
    {
      tag: "02. The Discovery Phase",
      title: "Talking directly to the investors",
      content: "We conducted 15 deep-dive interviews across three user personas. The feedback was unanimous: they didn't want more metrics; they wanted actionable hierarchy. We used these insights to sketch raw wireframes focusing on clarity and whitespace.",
      imageSrc: "/images/user-research.jpg",
      imageAlt: "UX research sticky notes and wireframe iterations on a whiteboard"
    },
    {
      tag: "03. The Solution",
      title: "A clean, modular data experience",
      content: "We introduced a customizable widget system, clear typographic hierarchy, and interactive visual data blocks. Complex tables were replaced with simple, filterable chart cards that let users absorb their financial standing in milliseconds.",
      imageSrc: "/images/final-design.jpg",
      imageAlt: "High-fidelity UI mockups of the new responsive mobile and web layouts"
    }
  ]
};

export default function ProjectPage() {
  return <CaseStudy {...sampleProject} />;
}