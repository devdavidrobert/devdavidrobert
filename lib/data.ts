import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Sales Analyst",
    location: "Kenafric Industries Ltd, Nairobi County, Kenya",
    description:
      "Compile, analyze, and report sales data to provide actionable insights. Monitor competitive activity, customer trends, and market dynamics. Forecast demand, revenue, and expenses to guide sales strategies.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2024 - Present",
  },
  {
    title: "Software Engineering Student",
    location: "alx_africa",
    description:
      "Mastering Python, Java, C++, and JavaScript, with a focus on data structures, algorithms, and web development (HTML, CSS). Applying Scrum and Kanban methodologies for efficient project workflows.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023 - Present",
  },
  {
    title: "Online Writer",
    location: "Self Employed",
    description:
      "Research industry-related topics using online sources, interviews, and studies. Write, proofread, and edit research papers and blog posts, ensuring consistency in style and tone.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2019 - Present",
  },
  {
    title: "Credit Analyst",
    location: "Bboxx, Nairobi County, Kenya",
    description:
      "Analyzed customer repayment patterns to assess credit quality. Prepared daily, weekly, and monthly portfolio performance reports. Supported business decisions with data-driven insights.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - November 2024",
  },
  {
    title: "Systems and Process Officer",
    location: "Bboxx, Nairobi County, Kenya",
    description:
      "Designed process frameworks and supported field staff in implementation. Collaborated with cross-functional teams to troubleshoot issues and conducted system reviews to improve efficiencies.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - January 2024",
  },
  {
    title: "Shop Manager",
    location: "Bboxx, Kisii, Kisii County, Kenya",
    description:
      "Managed daily shop operations, including stock, petty cash, and customer service. Liaised with retail teams to ensure smooth operations and customer satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2021 - May 2022",
  },
  {
    title: "B.Sc. in Agribusiness Management",
    location: "University of Nairobi, Nairobi County, Kenya",
    description:
      "Graduated with a degree in Agribusiness Management, building a strong foundation in agricultural business and management principles.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Sales Dashboard",
    description:
      "Developed a web-based dashboard to visualize sales data trends and forecasts. Built during my time as a Sales Analyst to assist in monitoring market dynamics and providing actionable insights.",
    tags: ["JavaScript", "HTML", "CSS", "Python", "SQL"],
    imageUrl: corpcommentImg, // Replace with an actual sales dashboard image if available
  },
  {
    title: "Portfolio Website",
    description:
      "Created a personal portfolio site as part of my software engineering studies. Features a responsive design to showcase my skills, experience, and projects, with a focus on clean UI and functionality.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    imageUrl: rmtdevImg, // Replace with an actual portfolio site screenshot if available
  },
  {
    title: "Credit Risk Analyzer",
    description:
      "Built a tool to analyze customer repayment patterns and assess credit quality. Developed during my Credit Analyst role to support portfolio performance reporting and business decisions.",
    tags: ["Python", "SQL", "JavaScript"],
    imageUrl: wordanalyticsImg, // Replace with an actual credit tool image if available
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;