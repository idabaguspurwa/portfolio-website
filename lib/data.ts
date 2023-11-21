import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mtgraphy from "@/public/mtgraphy.png";
import portfolioImg from "@/public/portfolioimg.png";
import fakenewsdetectionImg from "@/public/fakenewsDetection.png";
import viewContractor from "@/public/viewContractor.png";
import portfolio3d from "@/public/3dportfolio.png";

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
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2021 - Dec 2021",
  },
  {
    title: "MC of HIMTI Care Movie Day",
    location: "HIMTI BINUS University",
    description: "Officiated HIMTI Care's Movie Day as the Master of Ceremony.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Contestant",
    location: "ICPC - International Collegiate Programming Contest",
    description: "Competing nationally against Top Universities in Indonesia.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Relation Expansion Commision Activist",
    location: "HIMTI BINUS University",
    description:
      "Part of a team that is responsible for managing an internal activity for the members to connect with each others.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "MtGraphy Photography Website",
    description:
      "This is a HCI projects to make a photography website, and this is my take on that.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: mtgraphy,
  },
  {
    title: "Portfolio Website",
    description:
      "This is a portfolio website that i make using vanilla CSS, HTML, and JavaScript file.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolioImg,
  },
  {
    title: "Fake News Detection Paper using Machine Learning Technique",
    description:
      "Fake News Detection using ML technique like Bert, TF-IDF, and GLOVE.",
    tags: ["Machine Learning", "TF-IDF", "Bert", "GLOVE", "NLP"],
    imageUrl: fakenewsdetectionImg,
  },
  {
    title: "Contractor Website UI/UX",
    description:
      "A Software Engineering projects, and our team take on that is to make a Website that help user find a contractor. (This is only the prototype)",
    tags: ["UI/UX", "Figma"],
    imageUrl: viewContractor,
  },
  {
    title: "3d Portfolio Website",
    description:
      "This is a 3d Portfolio Website that i made using ReactJs + Vite",
    tags: ["Vite", "React", "TailwindCSS"],
    imageUrl: portfolio3d,
  },
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
