import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
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
] as const;

export const projectsData = [
  {
    title: "Sales Dashboard",
    description:
      "Interactive dashboard visualizing real-time sales data, market trends, and predictive forecasts. Features customizable KPIs, geographic heat maps, and automated reporting that increased decision-making efficiency by 35% for the sales team.",
    tags: ["JavaScript", "React", "D3.js", "Python", "SQL"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/devdavidrobert/sales-dashboard_kenya",
    demoUrl: "https://dr-sales-dashboard-demo.vercel.app"
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio built with Next.js and Tailwind CSS featuring smooth animations, dark mode, and optimized performance (98+ Lighthouse score). Implements best practices for accessibility and SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/devdavidrobert/portfolio_kenya",
    demoUrl: "https://dr-david-robert.vercel.app"
  },
  {
    title: "Credit Risk Analyzer",
    description:
      "Machine learning-powered tool that predicts customer default risk with 92% accuracy. Analyzes repayment patterns, credit history, and demographic data to generate risk scores that reduced bad debt by 18% during my time as Credit Analyst.",
    tags: ["Python", "Scikit-learn", "Pandas", "SQL", "Plotly"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/devdavidrobert/credit-risk-analyzer",
    demoUrl: "https://dr-credit-analyzer-demo.vercel.app"
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with secure payment processing, inventory management, and customer analytics. Features responsive design, user authentication, and an admin dashboard for order management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/devdavidrobert/ecommerce-platform",
    demoUrl: "https://dr-ecommerce-demo.vercel.app"
  }
] as const;

export const skillsData = {
  "Frontend": [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Framer Motion", level: 75 },
    { name: "Redux", level: 80 }
  ],
  "Backend": [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "GraphQL", level: 65 },
    { name: "Apollo", level: 60 }
  ],
  "Database": [
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Prisma", level: 70 },
    { name: "SQL", level: 85 }
  ],
  "DevOps & Tools": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 65 },
    { name: "CI/CD", level: 60 },
    { name: "AWS", level: 55 }
  ],
  "Data Analysis": [
    { name: "Excel", level: 95 },
    { name: "Pandas", level: 80 },
    { name: "Tableau", level: 75 },
    { name: "Power BI", level: 70 },
    { name: "Scikit-learn", level: 65 }
  ]
} as const;