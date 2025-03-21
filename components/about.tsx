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
        With a degree in{" "}
        <span className="font-medium">Agribusiness Management</span> from the
        University of Nairobi, I’ve built a strong foundation as a Systems and
        Process Officer in the retail industry. My passion for technology led me
        to pursue{" "}
        <span className="font-medium">software engineering</span> at Holberton
        School, where I’m mastering{" "}
        <span className="font-medium">Python, Java, C++, and JavaScript</span>.{" "}
        <span className="italic">What I love most about programming</span> is
        tackling complex challenges and designing efficient solutions. My
        expertise spans{" "}
        <span className="font-medium">credit analysis, management, and customer
        service</span>, complemented by technical skills like web development
        and database management with SQL/NoSQL.
      </p>

      <p>
        <span className="italic">When I’m not working or coding</span>, I enjoy
        researching industry topics as a freelance writer, ensuring precision
        and consistency in my work. I’m committed to{" "}
        <span className="font-medium">continuous learning</span>, currently
        exploring advanced software development methodologies like Scrum and
        Kanban, while honing my emotional intelligence to thrive in team
        settings. I’m seeking opportunities to blend my analytical background
        with my growing tech skills in a{" "}
        <span className="font-medium">software development role</span>.
      </p>
    </motion.section>
  );
}