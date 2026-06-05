"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  tag: string;
}

const galleryImages: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&h=400&q=85",
    alt: "Educators Collaborating",
    tag: "Workshops",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&h=400&q=85",
    alt: "Conference Hall Presentation",
    tag: "Plenary",
  },
  {
    src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&h=400&q=85",
    alt: "Team Strategy Session",
    tag: "Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=85",
    alt: "Leadership Panel Q&A",
    tag: "Panel discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&h=400&q=85",
    alt: "Educational Innovation Seminar",
    tag: "Vision keynotes",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&h=400&q=85",
    alt: "Daan Mogot Academic Campus",
    tag: "SDH Campus",
  },
];

// Duplicate list for infinite scroll seamless effect
const doubleImages = [...galleryImages, ...galleryImages];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 mb-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange"
          >
            Memories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Event Gallery
          </motion.h3>
          <div className="w-12 h-1 bg-brand-blue-light mt-4 rounded-full" />
        </div>
      </div>

      {/* Infinite Horizontal Carousel Container */}
      <div className="relative w-full overflow-hidden flex select-none py-4">
        {/* Shadow Overlays to fade edges (Apple aesthetic) */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-white to-transparent z-10 pointer-events-none" />

        {/* Ticker Flex container moving infinitely */}
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex space-x-6 min-w-max"
        >
          {doubleImages.map((img, index) => (
            <div
              key={`${img.alt}-${index}`}
              className="relative w-[300px] sm:w-[350px] h-[220px] sm:h-[260px] rounded-3xl overflow-hidden shadow-md group cursor-pointer border border-brand-blue-light/5"
            >
              {/* Image element (using standard HTML img to avoid Next.js external domain loader configuration issues during initial setup) */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom text info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-brand-blue-dark/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-end text-brand-white z-10">
                <span className="inline-block bg-brand-yellow text-brand-blue-dark text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-max mb-1.5 shadow-sm">
                  {img.tag}
                </span>
                <h4 className="text-sm font-semibold tracking-wide truncate">
                  {img.alt}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Micro Text Prompt for Users */}
      <div className="text-center mt-8 text-xs text-brand-text-muted font-semibold tracking-wide">
        Hover cards to pause ticker and inspect photos.
      </div>
    </section>
  );
}
