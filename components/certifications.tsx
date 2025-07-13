"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2024",
    image: "/images/aws-cert.png",
    link: "https://www.credly.com/badges/aws-certified-cloud-practitioner"
  },
  {
    name: "Microsoft Certified: Data Analyst Associate",
    issuer: "Microsoft",
    date: "January 2024",
    image: "/images/microsoft-cert.png",
    link: "https://www.credly.com/badges/microsoft-certified-data-analyst-associate"
  },
  {
    name: "Python for Data Science",
    issuer: "DataCamp",
    date: "October 2023",
    image: "/images/datacamp-cert.png",
    link: "https://www.datacamp.com/certificate/python-data-science"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "August 2023",
    image: "/images/meta-cert.png",
    link: "https://www.coursera.org/account/accomplishments/meta-react-developer"
  }
];

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40 mx-auto px-4"
    >
      <SectionHeading>Certifications</SectionHeading>
      
      <div className="text-center mb-8">
        <p className="text-gray-700 dark:text-white/70">
          Professional certifications and credentials that validate my expertise.
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certifications.map((cert, index) => (
          <motion.a 
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-white/80 border border-gray-200 dark:border-gray-700 flex flex-col hover:scale-[1.02] transition-all duration-300 h-full"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-md overflow-hidden mr-4 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800">
                {/* Fallback icon if image is not available */}
                <span className="text-xl font-bold text-blue-500 dark:text-blue-400">{cert.name.charAt(0)}</span>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={cert.image} 
                  alt={cert.name} 
                  fill 
                  className="object-contain"
                /> */}
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white/90">{cert.name}</h4>
                <p className="text-sm text-gray-600 dark:text-white/60">{cert.issuer}</p>
              </div>
            </div>
            <div className="mt-auto pt-3 text-right border-t border-gray-100 dark:border-gray-700">
              <span className="text-xs inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-white/70">{cert.date}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
