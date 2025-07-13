"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const checkCursor = () => {
      const target = document.querySelector(":hover") as HTMLElement;
      if (target) {
        const cursorStyle = window.getComputedStyle(target).cursor;
        setIsPointer(cursorStyle === "pointer");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousemove", checkCursor);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousemove", checkCursor);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1,
    },
    pointer: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.3,
    },
  };

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-blue-500 dark:border-blue-400 pointer-events-none z-50"
      variants={variants}
      animate={isPointer ? "pointer" : "default"}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: isPointer ? 0 : 1 }}
      />
    </motion.div>
  );
}
