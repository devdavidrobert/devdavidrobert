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
      className="mb-28 max-w-[53rem] text-center leading-7 sm:leading-8 sm:mb-40 scroll-mt-28 w-full mx-auto px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="max-w-[42rem] mx-auto">
        <p className="mb-5 text-sm sm:text-base md:text-lg text-gray-700 dark:text-white/80 font-serif">
          With a degree in{" "}
          <span className="font-medium text-gray-900 dark:text-white">Management</span> from the
          University of Nairobi, I've built a strong foundation as a Systems and
          Process Officer in the retail industry. My passion for technology led me
          to pursue{" "}
          <span className="font-medium text-primary-600 dark:text-primary-400">software engineering</span> at Holberton
          School, where I'm mastering{" "}
          <span className="font-medium text-gray-900 dark:text-white">Python, Java, C++, and JavaScript</span>.{" "}
          <span className="italic">What I love most about programming</span> is
          tackling complex challenges and designing efficient solutions. My
          expertise spans{" "}
          <span className="font-medium text-gray-900 dark:text-white">credit analysis, management, and customer
          service</span>, complemented by technical skills like web development
          and database management with SQL/NoSQL.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-white/80 font-serif">
          <span className="italic">When I'm not working or coding</span>, I enjoy
          researching industry topics as a freelance writer, ensuring precision
          and consistency in my work. I'm committed to{" "}
          <span className="font-medium text-primary-600 dark:text-primary-400">continuous learning</span>, currently
          exploring advanced software development methodologies like Scrum and
          Kanban, while honing my emotional intelligence to thrive in team
          settings. I'm seeking opportunities to blend my analytical background
          with my growing tech skills in a{" "}
          <span className="font-medium text-gray-900 dark:text-white">software development role</span>.
        </p>
      </div>
    </motion.section>
  );
}