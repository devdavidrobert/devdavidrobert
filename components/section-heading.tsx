import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize mb-6 sm:mb-8 md:mb-10 text-center font-display text-gray-800 dark:text-white/90 relative inline-block mx-auto after:content-[''] after:block after:w-1/2 after:h-1 after:bg-primary-500 after:absolute after:-bottom-2 after:left-1/4 after:rounded-full">
      {children}
    </h2>
  );
}
