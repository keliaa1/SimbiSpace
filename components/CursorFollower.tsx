"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";

const CursorFollower = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isFacingRight, setIsFacingRight] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lastX = useRef(0);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);

  // Smooth springs for "trailing" effect
  const springConfig = { damping: 20, stiffness: 100 };
  const catX = useSpring(mouseX, springConfig);
  const catY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const currentX = e.clientX;
      if (currentX > lastX.current + 2) {
        setIsFacingRight(true);
      } else if (currentX < lastX.current - 2) {
        setIsFacingRight(false);
      }
      lastX.current = currentX;

      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setIsMoving(false), 100);

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
        top: -16, // Center cat relative to cursor
        left: -16,
        x: catX,
        y: catY,
        pointerEvents: "none",
        zIndex: 9999,
        display: isVisible ? "block" : "none",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
    
      <div
        className={`w-16 h-16 pixelated ${!isFacingRight ? "flip-horizontal" : ""}`}
        style={{
          backgroundImage: `url('/pixel-cat-run-v2.png')`,
          backgroundSize: '256px 64px',
          backgroundRepeat: 'no-repeat',
          animation: isMoving
            ? 'cat-run 0.4s steps(4) infinite'
            : 'bounce-slow 2s infinite ease-in-out'
        }}
      />
    </motion.div>
  );
};

export default CursorFollower;
