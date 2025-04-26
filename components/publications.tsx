"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { publicationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Publications() {
  const { ref } = useSectionInView("Publications");

  return (
    <section 
      ref={ref} 
      id="publications" 
      className="scroll-mt-28 mb-28 max-w-[45rem]"
    >
      <SectionHeading>My Publications</SectionHeading>
      <div className="flex flex-col gap-8">
        {publicationsData.map((publication, index) => (
          <motion.div 
            key={index}
            className="bg-gray-100 p-6 rounded-lg border border-black/5 dark:bg-white/10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <h3 className="text-xl font-semibold">{publication.title}</h3>
            <p className="mt-1 text-gray-600 dark:text-white/70">{publication.authors}</p>
            <p className="mt-1 italic text-gray-600 dark:text-white/70">{publication.journal}</p>
            <p className="mt-3 text-gray-700 dark:text-white/80">{publication.abstract}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {publication.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            {publication.url && (
              <div className="mt-4 flex justify-center">
                <a 
                  href={publication.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                  View Publication
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}