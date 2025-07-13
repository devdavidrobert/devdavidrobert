"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className={`fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 ${links.length <= 6 ? 'sm:w-[36rem]' : links.length <= 7 ? 'sm:w-[42rem]' : links.length <= 8 ? 'sm:w-[48rem]' : 'sm:w-[56rem]'}`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className={`flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-display font-medium text-gray-500 ${links.length <= 6 ? 'w-[22rem] sm:gap-6' : links.length <= 7 ? 'w-[26rem] sm:gap-5' : links.length <= 8 ? 'w-[30rem] sm:gap-4' : 'w-[34rem] sm:gap-3'} sm:flex-nowrap`}>
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  `flex w-full items-center justify-center ${links.length <= 6 ? 'px-4' : links.length <= 7 ? 'px-3' : 'px-2'} py-3 hover:text-primary-600 transition-colors duration-300 dark:text-gray-400 dark:hover:text-primary-400 tracking-wide ${links.length > 7 ? 'text-[0.85rem]' : 'text-[0.9rem]'}`,
                  {
                    "text-primary-700 dark:text-primary-400 font-semibold":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-primary-50 rounded-full absolute inset-0 -z-10 dark:bg-primary-900/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
