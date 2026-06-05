"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-brand-cream pointer-events-none">
      {/* Base Grid Texture with subtle motion */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 animate-grid-move" />

      {/* Dynamic light gradients (Apple-style ambient glows) */}
      <motion.div
        className="absolute w-[30vw] h-[30vw] max-w-[500px] rounded-full bg-brand-blue-light/10 blur-[80px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "15%", left: "10%" }}
      />

      <motion.div
        className="absolute w-[35vw] h-[35vw] max-w-[600px] rounded-full bg-brand-yellow/15 blur-[100px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "15%", right: "10%" }}
      />

      <motion.div
        className="absolute w-[20vw] h-[20vw] max-w-[300px] rounded-full bg-brand-orange/8 blur-[60px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "45%" }}
      />

      {/* Floating Outline Geometric Symbols */}
      {/* Plus Symbol 1 */}
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute text-brand-blue-light/35"
        style={{ top: "25%", right: "20%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 185],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      {/* Plus Symbol 2 */}
      <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute text-brand-orange/40"
        style={{ bottom: "35%", left: "15%" }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path d="M12 5v14M5 12h14" strokeWidth="2.5" strokeLinecap="round" />
      </motion.svg>

      {/* Geometric Circle outline */}
      <motion.div
        className="absolute w-12 h-12 rounded-full border-2 border-brand-yellow/30"
        style={{ top: "60%", right: "12%" }}
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric square outline */}
      <motion.div
        className="absolute w-8 h-8 border border-brand-blue-dark/20 rotate-45"
        style={{ bottom: "20%", right: "30%" }}
        animate={{
          y: [0, 20, 0],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Technical framing lines */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-brand-blue-light/10" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-brand-blue-light/10" />
    </div>
  );
}
