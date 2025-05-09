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
import maildeletion from "@/public/mail_deletion.jpg"

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
    detailedDescription: "This portfolio combines React components with Vite's build system to create an immersive 3D experience. Dynamic models and animations respond to user interaction, enhancing project showcase effectiveness. TailwindCSS enables responsive design with minimal code, ensuring optimal viewing across devices while maintaining performance despite complex visual elements."
  },
  {
    title: "Beritau - Mobile News Application",
    description:
      "Beritau offers Indonesian users a streamlined news experience from diverse sources. The app functions like Line Today, Detik, and Kompas.",
    tags: ["Java", "Mobile Programming"],
    imageUrl: beritau,
    githubUrl: "https://github.com/chelluu/MobProg_Final",
    figmaUrl: "https://www.figma.com/design/MRtoDlIUiQYvvvEDerE7UF/Mob-Prog-Anjay?node-id=0-1&p=f&t=ccUXWxCLTndrB5c6-0",
    detailedDescription: "Beritau features a clean, user-friendly design with simple authentication. It aggregates content from various Indonesian news outlets in an organized format, helping users stay informed without navigating multiple sites. The intuitive interface includes clear login options and a distinctive book icon, providing a convenient one-stop news solution for the Indonesian market."
  },
  {
    title: "Contractor Website UI/UX",
    description:
      "A contractor platform developed as our SE project. This marketplace combines social and professional features.",
    tags: ["UI/UX", "Figma"],
    imageUrl: viewContractor,
    figmaUrl: "https://www.figma.com/design/sbIo50vnABJ3KFq8LSRJVY/Web-Kontraktor?node-id=0-1&p=f&t=JN4UDOe9oeQreYnw-0",
    detailedDescription: "UI/UX design for a contractor marketplace connecting homeowners with qualified professionals. Created comprehensive user flows, wireframes, and high-fidelity Figma prototypes that prioritize intuitive navigation, clear service categories, and trust-building elements to streamline the contractor discovery process."
  },
  {
    title: "Email Cleanup Automation Tool",
    description:
      "Web Automation tool that deletes unread emails from a user's inbox. It uses Selenium to automate the deletion process and TestNG to run the automation.",
    tags: ["Java", "Selenium", "Web Automation", "TestNG"],
    imageUrl: maildeletion,
    githubUrl: "https://github.com/idabaguspurwa/MailDeletion",
    detailedDescription: "This web automation tool efficiently cleans inboxes by automatically identifying and deleting unread emails through Selenium WebDriver. TestNG integration ensures reliable execution with comprehensive reporting capabilities. The application handles authentication, targeted filtering, and confirmation processes to deliver a practical solution for email management challenges."
  },
  {
    title: "Fake News Detection Paper using Machine Learning Technique",
    description:
      "Research paper comparing BERT, TF-IDF, and GloVe embeddings with different ML models using advanced NLP techniques.",
    tags: ["Machine Learning", "TF-IDF", "Bert", "GLOVE", "NLP"],
    imageUrl: fakenewsdetectionImg,
    githubUrl: "https://github.com/idabaguspurwa/fakeNewsDetection-ML",
    detailedDescription: "This research evaluates fake news detection by comparing BERT, TF-IDF, and GloVe embeddings with various machine learning models. Through systematic analysis, the study identifies optimal combinations for detecting misinformation, revealing BERT's superior contextual understanding while highlighting efficiency trade-offs with traditional approaches. The findings contribute practical insights for developing more effective automated detection systems."
  },
  {
    title: "MtGraphy Photography Website",
    description:
      "A photography platform built as a college HCI project, focusing on user-centered design and intuitive navigation to showcase professional photography site",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: mtgraphy,
    githubUrl: "https://github.com/idabaguspurwa/mtgraphy",
    liveUrl: "https://mtgraphy-navy.vercel.app/",
    detailedDescription: "MTgraphy demonstrates practical application of HCI concepts through a visually engaging platform for photography services. The project implements responsive design, accessibility features, and streamlined navigation to enhance user experience. Key elements include image-centric layouts, minimal cognitive load, and clear visual hierarchy. Created using modern frontend technologies, this academic project balances aesthetic appeal with functional usability to serve both photography enthusiasts and potential clients."
  },
  {
    title: "Vanilla Portfolio Website",
    description:
      "A clean, minimalist portfolio website built with vanilla web technologies to showcase professional skills and projects in frontend development.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolioImg,
    githubUrl: "https://github.com/idabaguspurwa/vanilla-portfolio?tab=readme-ov-file",
    liveUrl: "https://vanilla-portfolio-mu.vercel.app/",
    detailedDescription: "A minimalist portfolio website built with vanilla HTML, CSS, and JavaScript. Features responsive design, intuitive navigation, and optimized performance without frameworks. Includes downloadable CV functionality and social media integration while showcasing core web development skills through clean, efficient code and thoughtful user experience design."
  }
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