"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 w-full max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col md:flex-row md:even:flex-row-reverse">
        {/* Mobile image (visible only on small screens) */}
        <div className="w-full h-48 relative md:hidden">
          <Image
            src={imageUrl}
            alt={`Project: ${title}`}
            quality={90}
            fill
            className="object-cover object-top"
          />
        </div>
        
        <div className="pt-4 pb-7 px-5 md:px-6 lg:px-8 flex flex-col h-full w-full md:w-1/2 md:py-8">
          <h3 className="text-xl sm:text-2xl font-semibold font-display">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-base">
            {description}
          </p>
          
          <div className="flex gap-3 mt-4">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm">Code</span>
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                <HiExternalLink className="text-lg" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
          
          <ul className="flex flex-wrap mt-4 gap-2 mb-0 mt-auto pt-4">
            {tags.map((tag, index) => (
              <li
                className="bg-primary-600/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop image (hidden on small screens) */}
        <div className="hidden md:block md:w-1/2 relative min-h-[16rem]">
          <Image
            src={imageUrl}
            alt={`Project: ${title}`}
            quality={95}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>
    </motion.div>
  );
}
