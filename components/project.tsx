"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import type { Project } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectModal from "./project-modal";
import { FaEye } from "react-icons/fa";

type ProjectProps = Project;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  figmaUrl,
  detailedDescription,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <div className="mt-auto flex justify-center w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                <FaEye /> View Details
              </button>
            </div>
          </div>

          <div className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-full group-even:right-[initial] group-even:-left-40">
            <div className="relative w-full h-[90%] overflow-hidden rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2">
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{
          title,
          description,
          detailedDescription,
          tags,
          imageUrl,
          githubUrl,
          liveUrl,
          figmaUrl,
        }}
      />
    </>
  );
}
