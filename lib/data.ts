import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaMoneyBillWave, FaMicrophone } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import mtgraphy from "@/public/mtgraphy.png";
import portfolioImg from "@/public/portfolioimg.png";
import fakenewsdetectionImg from "@/public/fakenewsDetection.png";
import viewContractor from "@/public/viewContractor.png";
import portfolio3d from "@/public/3dportfolio.png";
import beritau from "@/public/beritau_mobile.png";
import maildeletion from "@/public/mail_deletion.jpg";
import dataplatform from "@/public/dataplatform.png";
import stockmarket from "@/public/stockmarket.png";
import f1analytics from "@/public/f1analytics.png";
import nyctaxi from "@/public/nyctaxi.png";
import footballStreaming from "@/public/football-streaming.png";
import reactporto from "@/public/reactporto.png";
import basketballDetection from "@/public/basketball-detection.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Publications",
    hash: "#publications",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sharing Knowledge Event Treasurer",
    location: "Keluarga Mahasiswa Hindu Bina Nusantara",
    description:
      "Responsible for managing KMH budget to find a speaker for the Sharing Knowledge Event. Responsible for managing KMH budget to find and give door prize to selected attendees.",
    icon: React.createElement(FaMoneyBillWave),
    date: "Nov 2021 - Dec 2021",
  },
  {
    title: "MC of HIMTI Care Movie Day",
    location: "HIMTI BINUS University",
    description: "Officiated HIMTI Care's Movie Day as the Master of Ceremony.",
    icon: React.createElement(FaMicrophone),
    date: "2022",
  },
  {
    title: "Contestant",
    location: "ICPC - International Collegiate Programming Contest",
    description: "Represented BINUS University in the national ICPC competition, solving complex algorithmic problems and competing against top-tier universities across Indonesia.",
    icon: React.createElement(BsCodeSlash),
    date: "2022",
  },
  {
    title: "Relation Expansion Commision Activist",
    location: "HIMTI BINUS University",
    description:
      "Collaborated with a team to organize internal events that foster connection and engagement among HIMTI members, enhancing communication and community within the organization.",
    icon: React.createElement(HiUserGroup),
    date: "Mar 2022 - Jan 2024",
  },
  {
    title: "Business Analyst Intern",
    location: "PT Bank Central Asia Tbk",
    description:
      "Analyzed business requirements through stakeholder interviews to optimize operational processes and decision-making.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Feb 2025",
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  detailedDescription: string;
  category: string;
};

export const projectsData = [
  {
    title: "3D Portfolio Website",
    description:
      "A modern portfolio showcasing work through interactive 3D elements and animations. Built with React, Vite, and TailwindCSS to deliver a visually impressive experience across devices.",
    tags: ["Vite", "React", "TailwindCSS"],
    imageUrl: portfolio3d,
    githubUrl: "https://github.com/idabaguspurwa/3d-portfolio",
    liveUrl: "https://idabaguspurwa3d-portfolio.vercel.app/",
    detailedDescription: "This portfolio combines React components with Vite's build system to create an immersive 3D experience. Dynamic models and animations respond to user interaction, enhancing project showcase effectiveness. TailwindCSS enables responsive design with minimal code, ensuring optimal viewing across devices while maintaining performance despite complex 3D elements.",
    category: "Web Development"
  },
  {
    title: "Beritau - Mobile News Application",
    description:
      "Beritau offers Indonesian users a streamlined news experience from diverse sources. The app functions like Line Today, Detik, and Kompas.",
    tags: ["Java", "Mobile Programming"],
    imageUrl: beritau,
    githubUrl: "https://github.com/chelluu/MobProg_Final",
    figmaUrl: "https://www.figma.com/design/MRtoDlIUiQYvvvEDerE7UF/Mob-Prog-Anjay?node-id=0-1&p=f&t=ccUXWxCLTndrB5c6-0",
    detailedDescription: "Beritau features a clean, user-friendly design with simple authentication. It aggregates content from various Indonesian news outlets in an organized format, helping users stay informed without navigating multiple sites. The intuitive interface includes clear login options and a distinctive book icon, providing a convenient one-stop news solution for the Indonesian market.",
    category: "Mobile Development"
  },
  {
    title: "Contractor Website UI/UX",
    description:
      "A contractor platform developed as our SE project. This marketplace combines social and professional features.",
    tags: ["UI/UX", "Figma"],
    imageUrl: viewContractor,
    figmaUrl: "https://www.figma.com/design/sbIo50vnABJ3KFq8LSRJVY/Web-Kontraktor?node-id=0-1&p=f&t=JN4UDOe9oeQreYnw-0",
    detailedDescription: "UI/UX design for a contractor marketplace connecting homeowners with qualified professionals. Created comprehensive user flows, wireframes, and high-fidelity Figma prototypes that prioritize intuitive navigation, clear service categories, and trust-building elements to streamline the contractor discovery process.",
    category: "UI/UX Design"
  },
  {
    title: "Email Cleanup Automation Tool",
    description:
      "Web automation tool that uses Selenium and TestNG to delete unread emails from a user's inbox.",
    tags: ["Java", "Selenium", "Web Automation", "TestNG"],
    imageUrl: maildeletion,
    githubUrl: "https://github.com/idabaguspurwa/MailDeletion",
    detailedDescription: "This web automation tool efficiently cleans inboxes by automatically identifying and deleting unread emails through Selenium WebDriver. TestNG integration ensures reliable execution with comprehensive reporting capabilities. The application handles authentication, targeted filtering, and confirmation processes to deliver a practical solution for email management challenges.",
    category: "Automation"
  },
  {
    title: "Enterprise-Grade Sales & Marketing Data Platform",
    description:
      "GCP based e-commerce analytics platform with automated ELT pipelines and real-time dashboards",
    tags: ["GCP", "BigQuery", "Airflow", "dbt", "Terraform", "Python", "SQL", "Looker Studio"],
    imageUrl: dataplatform,
    githubUrl: "https://github.com/idabaguspurwa/Enterprise-Grade-Sales-and-Marketing-Data-Platform",
    liveUrl: "https://lookerstudio.google.com/reporting/cb541980-d4a0-41bd-97f1-68cc0adecafe",
    detailedDescription: "This enterprise-grade data platform demonstrates complete automation from raw e-commerce data ingestion to business-ready analytics. Built on Google Cloud Platform, it orchestrates ELT workflows using Cloud Composer (Airflow), transforms data with dbt following medallion architecture patterns, and delivers insights through interactive Looker Studio dashboards. Key achievements include Infrastructure as Code with Terraform, comprehensive data quality testing, real-time business intelligence, and production-grade monitoring with automated error handling. The platform processes sales, customer, and product data to generate actionable insights for revenue optimization, customer segmentation, and operational efficiency.",
    category: "Data Engineering"
  },
  {
    title: "F1 Racing Analytics Project",
    description:
      "Comprehensive Formula 1 racing data analytics platform built on Azure Databricks with medallion architecture for end-to-end data engineering and BI reporting.",
    tags: ["Azure Databricks", "PySpark", "Delta Lake", "Azure", "SQL", "Power BI", "Data Engineering"],
    imageUrl: f1analytics,
    githubUrl: "https://github.com/idabaguspurwa/F1-Racing-Analytics",
    detailedDescription: "A comprehensive Formula 1 racing data analytics platform demonstrating enterprise-level data engineering workflows on Azure Databricks. Implements medallion architecture (Bronze-Silver-Gold) for processing F1 racing data from the Ergast API. Features include multi-format data ingestion (CSV, JSON), Delta Lake for ACID transactions, incremental loading with merge operations, and comprehensive data transformations for race results, driver standings, and constructor analytics. The platform provides automated pipeline orchestration through Azure Databricks workflows, robust error handling, data quality validation, and culminates in interactive Power BI dashboards for business intelligence. Key analytics include dominant driver/team identification, championship standings analysis, and circuit-specific performance metrics, showcasing modern cloud-native data engineering practices.",
    category: "Data Analytics"
  },
  {
    title: "Fake News Detection Paper using Machine Learning Technique",
    description:
      "Research paper comparing BERT, TF-IDF, and GloVe embeddings with different ML models using advanced NLP techniques.",
    tags: ["Machine Learning", "TF-IDF", "Bert", "GLOVE", "NLP"],
    imageUrl: fakenewsdetectionImg,
    githubUrl: "https://github.com/idabaguspurwa/fakeNewsDetection-ML",
    detailedDescription: "This research evaluates fake news detection by comparing BERT, TF-IDF, and GloVe embeddings with various machine learning models. Through systematic analysis, the study identifies optimal combinations for detecting misinformation, revealing BERT's superior contextual understanding while highlighting efficiency trade-offs with traditional approaches. The findings contribute practical insights for developing more effective automated detection systems.",
    category: "Machine Learning"
  },
  {
    title: "Basketball Player Face Detection & Recognition",
    description:
      "Computer vision system for detecting and recognizing basketball players using OpenCV and LBPH face recognition with advanced data augmentation techniques.",
    tags: ["OpenCV", "Computer Vision", "Machine Learning", "Python", "LBPH", "Face Detection"],
    imageUrl: basketballDetection,
    githubUrl: "https://github.com/idabaguspurwa/cv_basketball_player_detection",
    detailedDescription: "A comprehensive computer vision project implementing face detection and recognition specifically designed for basketball players. The system utilizes OpenCV's Haar Cascade classifier for robust face detection and LBPH (Local Binary Patterns Histograms) algorithm for player identification. Key features include advanced data augmentation techniques (rotation, flipping, scaling, translation) to enhance training data quality, interactive command-line interface for training and prediction workflows, model persistence for reuse with accuracy calculation and confidence scoring. The system processes training images with histogram equalization and face region extraction, implements train-test split (80/20) for model validation, and provides visual output with bounding boxes, player name identification, and confidence percentages. Technical implementation includes automatic dataset downloading via Google Drive integration, standardized 200x200 pixel face image processing, and comprehensive error handling for robust performance. The project demonstrates practical application of computer vision techniques in sports analytics with scalable architecture for player identification systems.",
    category: "Computer Vision"
  },
  {
    title: "MtGraphy Photography Website",
    description:
      "A photography platform built as a college HCI project, focusing on user-centered design and intuitive navigation to showcase professional photography site",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: mtgraphy,
    githubUrl: "https://github.com/idabaguspurwa/mtgraphy",
    liveUrl: "https://mtgraphy-navy.vercel.app/",
    detailedDescription: "MTgraphy demonstrates practical application of HCI concepts through a visually engaging platform for photography services. The project implements responsive design, accessibility features, and streamlined navigation to enhance user experience. Key elements include image-centric layouts, minimal cognitive load, and clear visual hierarchy. Created using modern frontend technologies, this academic project balances aesthetic appeal with functional usability to serve both photography enthusiasts and potential clients.",
    category: "Web Development"
  },
  {
    title: "Real-Time Football Match Data Streaming Pipeline",
    description:
      "Stream live match events using Kafka → Spark Streaming → BigQuery for instant analytics and insights",
    tags: ["GCP", "Apache Kafka", "Spark Streaming", "BigQuery", "Terraform", "Docker", "Airflow", "Avro", "Looker Studio"],
    imageUrl: footballStreaming,
    githubUrl: "https://github.com/idabaguspurwa/Football_Fixtures_Match_Tracker",
    liveUrl: "https://lookerstudio.google.com/reporting/6cef80f3-5906-46e0-b23d-94f1494c8979",
    detailedDescription: "This real time streaming pipeline, built on Google Cloud Platform, processes live football match data from an external API. It leverages a modern data stack: Apache Kafka for ingestion, PySpark Streaming on Dataproc for processing, and BigQuery as the data warehouse. The pipeline features automated deployment with Terraform and Docker, orchestration via Airflow, schema enforcement with Avro, and live visualization in Looker Studio, achieving sub-minute latency from event to insight",
    category: "Data Engineering"
  },
  {
    title: "NYC Taxi Analytics Project",
    description:
      "NYC taxi analytics on Azure Synapse with medallion architecture for multi-format data processing and BI.",
    tags: ["Azure Synapse", "Serverless SQL", "Apache Spark", "Azure Data Lake", "SQL", "Data Analytics"],
    imageUrl: nyctaxi,
    githubUrl: "https://github.com/idabaguspurwa/NYC-Taxi-Analytics",
    detailedDescription: "End-to-end data solution using Azure Synapse Analytics with medallion architecture (bronze/silver/gold layers). Processes multi-format data (CSV, Parquet, JSON, Delta Lake) with automated ETL pipelines via Azure Data Factory. Features include data quality management, Spark transformations, serverless SQL queries, and BI dashboards for trip volume, payment, and geographic insights.",
    category: "Data Engineering"
  },
  {
    title: "Stock Market Data Pipeline",
    description:
      "Comprehensive stock market data pipeline using Apache Airflow, Spark, and MinIO for real-time stock price extraction and processing.",
    tags: ["Apache Airflow", "Apache Spark", "MinIO", "Docker", "Python", "Data Engineering"],
    imageUrl: stockmarket,
    githubUrl: "https://github.com/idabaguspurwa/stock_market_data_pipeline",
    detailedDescription: "A robust data pipeline that orchestrates stock market data workflows using Apache Airflow for scheduling, Apache Spark for data transformation, and MinIO for object storage. The system extracts NVDA stock price data from Yahoo Finance API, processes and transforms the data through Spark jobs, and stores both raw and processed data in scalable object storage. Features include automated daily pipeline execution, comprehensive error handling with retry mechanisms, real-time stock price extraction, and data format transformation from JSON to CSV. The containerized architecture ensures portability and scalability, while the Airflow UI provides comprehensive monitoring and management capabilities for the entire data workflow.",
    category: "Data Engineering"
  },
  {
    title: "Professional Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing data engineering and analytics expertise.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion", "Vercel"],
    imageUrl: reactporto,
    githubUrl: "https://github.com/idabaguspurwa/portfolio-website",
    liveUrl: "https://idabaguspurwa.vercel.app/",
    detailedDescription: "A comprehensive portfolio website built with modern web technologies to showcase expertise in Data Engineering, Data Analytics, and Machine Learning. Features include dynamic project filtering by categories, smooth animations with Framer Motion, responsive design optimized for all devices, dark/light theme toggle, interactive contact form with email integration, and professional sections for projects, experience, skills, and publications. The site implements best practices including TypeScript for type safety, Tailwind CSS for efficient styling, SEO optimization, and deployment on Vercel for optimal performance. Demonstrates proficiency in modern frontend development while serving as a professional showcase for data engineering capabilities.",
    category: "Web Development"
  },
  {
    title: "Vanilla Portfolio Website",
    description:
      "A clean, minimalist portfolio website built with vanilla web technologies to showcase professional skills and projects in frontend development.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolioImg,
    githubUrl: "https://github.com/idabaguspurwa/vanilla-portfolio?tab=readme-ov-file",
    liveUrl: "https://vanilla-portfolio-mu.vercel.app/",
    detailedDescription: "A minimalist portfolio website built with vanilla HTML, CSS, and JavaScript. Features responsive design, intuitive navigation, and optimized performance without frameworks. Includes downloadable CV functionality and social media integration while showcasing core web development skills through clean, efficient code and thoughtful user experience design.",
    category: "Web Development"
  }
] as const;

export const projectCategories = [
  "All",
  "Automation",
  "Computer Vision",
  "Data Analytics",
  "Data Engineering",
  "Machine Learning",
  "Mobile Development",
  "UI/UX Design",
  "Web Development"
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Java",
  "C/C++",
  "SQL",
  "GCP",
  "BigQuery",
  "Airflow",
  "Apache Kafka",
  "Avro",
  "dbt",
  "Terraform",
  "Azure",
  "Azure Databricks",
  "Azure Synapse",
  "PySpark",
  "Delta Lake",
  "Power BI",
  "Data Engineering",
  "Data Analytics",
  "Tableau",
  "Looker Studio",
  "Git",
  "Critical Thinking",
  "Communication",
] as const;

export const publicationsData = [
  {
    title: "Predicting Anger Proneness Using Deep Learning Techniques",
    authors: "Ida Bagus G. P. M. Adiputra, et al.",
    journal: "2023 IEEE 9th International Conference on Computing, Engineering and Design (ICCED)",
    abstract: "This research explores the application of machine learning algorithms to predict anger proneness in individuals based on physiological and behavioral data, contributing to mental health monitoring and intervention strategies.",
    tags: ["Machine Learning", "NLP", "Mental Health", "Predictive Analysis"],
    url: "https://ieeexplore.ieee.org/document/10425252"
  }
] as const;