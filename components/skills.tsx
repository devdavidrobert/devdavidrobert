"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40 w-full mx-auto px-4 sm:px-6 md:px-8"
    >
      <SectionHeading>My skills</SectionHeading>
      
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-gray-700 dark:text-white/70 text-sm sm:text-base">
          Here's a comprehensive overview of my technical skills and proficiency levels.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div 
            key={category}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-white/80 border border-gray-200 dark:border-gray-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white/90 font-display">{category}</h3>
            <div className="space-y-3 sm:space-y-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="space-y-1"
                  variants={itemVariants}
                >
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-700 dark:text-white/70 font-medium">{skill.name}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 dark:bg-gray-700">
                    <motion.div 
                      className="h-full rounded-full bg-primary-600 dark:bg-primary-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
