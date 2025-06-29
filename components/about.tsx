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
        As a{" "}
        <span className="font-medium">Data Engineer and Analytics Professional</span> with
        expertise in{" "}
        <span className="font-medium">cloud data platforms</span>, I specialize in
        building enterprise-grade data solutions that transform raw data into actionable business insights. With hands-on experience in{" "}
        <span className="italic">GCP, Azure, Apache Airflow, and dbt</span>,
        I design and implement{" "}
        <span className="underline">end-to-end data pipelines</span> following modern data engineering best practices.
      </p>
      
      <p className="mb-3">
        My expertise spans{" "}
        <span className="font-medium">Data Engineering, Business Intelligence, and Machine Learning</span>.
        I've successfully delivered{" "}
        <span className="italic">real-time analytics platforms, automated ETL workflows, and ML-powered solutions</span>{" "}
        using technologies like{" "}
        <span className="font-medium">BigQuery, Databricks, Power BI, and Apache Spark</span>.
        From medallion architecture implementations to production-grade data quality frameworks,
        I bring both technical depth and business acumen to every project.
      </p>
      
      <p>
        Currently pursuing{" "}
        <span className="font-medium">Computer Science with Intelligent Systems specialization</span>,
        I combine academic rigor with practical industry experience from my{" "}
        <span className="underline">Business Analyst internship at PT Bank Central Asia</span>.
        I'm passionate about{" "}
        <span className="font-medium">continuous learning</span> and staying at the forefront of
        data engineering innovations, always seeking to deliver scalable, reliable solutions
        that drive business value.
      </p>
    </motion.section>
  );
}