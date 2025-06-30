"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectCategories } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = [...(selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory))]
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center">
        {filteredProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
