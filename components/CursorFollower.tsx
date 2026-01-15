"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

const CursorFollower = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor movement
  const springConfig = { damping: 25, stiffness: 150 }; // Slightly adjusted for a tighter feel
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Ensure cursor is visible on move
      if (!isVisible) setIsVisible(true);

      // Update target motion values
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: -8, // Center dot (16px / 2)
        left: -8,
        x: cursorX,
        y: cursorY,
        pointerEvents: "none",
        zIndex: 9999,
        display: isVisible ? "block" : "none",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: "white",
          borderRadius: "50%",
          boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.6), 0 0 20px 5px rgba(255, 255, 255, 0.3)",
        }}
      />
    </motion.div>
  );
};

export default CursorFollower;
