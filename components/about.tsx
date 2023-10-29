"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an undergraduate{" "}
        <span className="font-medium">Binus University</span> student majoring
        in Computer Science,{" "}
        <span className="font-medium">specializing in Intelligent System</span>.{" "}
        <span className="italic">I have a strong interest</span> in Deep
        Learning, NLP, and{" "}
        <span className="underline">Mobile/App Development</span>. I have a
        strong commitment and communication skills for a{" "}
        <span className="font-medium">team-based project</span>. I'm eager to
        learn new technologies and many things. I am currently learning more
        about <span className="font-medium">Application Developer</span>{" "}
        specifically and are trying to improve my skills.
      </p>
    </motion.section>
  );
}
