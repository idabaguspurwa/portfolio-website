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
      className="mb-28 max-w-[50rem] text-left leading-7 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed">
          I am a{" "}
          <span className="font-semibold text-gray-900 dark:text-white">Data Engineer</span>{" "}
          who builds scalable, enterprise grade solutions on cloud platforms, turning raw data into actionable insights.
        </p>
        
        <p className="leading-relaxed">
          Currently pursuing a{" "}
          <span className="font-medium text-gray-900 dark:text-white">Computer Science degree (Intelligent Systems)</span>, 
          I combine academic rigor with industry experience from my internship at{" "}
          <span className="font-medium text-gray-900 dark:text-white">PT Bank Central Asia</span>. 
          I am passionate about building reliable data products that drive business value.
        </p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Core Competencies:
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Data Pipelining & Orchestration:
              </h4>
              <p className="text-sm leading-relaxed">
                Designing and implementing end-to-end ETL/ELT workflows using{" "}
                <span className="font-medium">Apache Airflow, dbt, GCP, and Azure</span>.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Data Warehousing & Analytics:
              </h4>
              <p className="text-sm leading-relaxed">
                Building real time analytics platforms and BI solutions with{" "}
                <span className="font-medium">BigQuery, Databricks, Power BI, Tableau and Looker Studio</span>.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Advanced Data Solutions:
              </h4>
              <p className="text-sm leading-relaxed">
                Developing ML powered features and implementing modern architectural patterns like{" "}
                <span className="font-medium">Medallion Architecture</span> and production-grade data quality frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}