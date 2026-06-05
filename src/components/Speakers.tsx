"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, BookOpen } from "lucide-react";

interface Speaker {
  id: string;
  name: string;
  jobTitle: string;
  topic: string;
  imageUrl?: string;
}

const day1Speakers: Speaker[] = [
  {
    id: "d1-1",
    name: "Deny Kiswanto Sinaga",
    jobTitle: "Executive Director for PHG Cluster 2",
    topic: "Unified Leadership in Education",
    imageUrl: "Deny Kiswanto Sinaga (7).jpg",
  },
  {
    id: "d1-2",
    name: "Alvin Wijaya",
    jobTitle: "School System Coordinator of SDH",
    topic: "Pedagogical Innovation",
    imageUrl: "Alvin Wijaya (2).jpg",
  },
];

const day2Speakers: Speaker[] = [
  {
    id: "d2-1",
    name: "Alvin Pardomuan Sebastian",
    jobTitle: "Educational Technology Supervisor",
    topic: "Visionary Christian Leadership",
    imageUrl: "",
  },
  {
    id: "d2-2",
    name: "Obed Tegar Kristiawan",
    jobTitle: "Educational Technology Specialist",
    topic: "Digital Integration",
    imageUrl: "https://i.pravatar.cc/300?u=edtech",
  },
  {
    id: "d2-3",
    name: "Nico Nainggolan",
    jobTitle: "Educational Technology Specialist",
    topic: "Level Synergy",
    imageUrl: "https://i.pravatar.cc/300?u=subject",
  },
];

const day3Speakers: Speaker[] = [
  {
    id: "d3-1",
    name: "Regional Teams",
    jobTitle: "Branch Managers",
    topic: "Group Presentations & Action Plans",
    imageUrl: "https://i.pravatar.cc/300?u=regional",
  },
  {
    id: "d3-2",
    name: "Executive Committee",
    jobTitle: "Board of Directors",
    topic: "Commissioning & Closing Address",
    imageUrl: "https://i.pravatar.cc/300?u=executive",
  },
];

const days = [
  { id: "day1", label: "Day 01", speakers: day1Speakers },
  { id: "day2", label: "Day 02", speakers: day2Speakers },
  { id: "day3", label: "Day 03", speakers: day3Speakers },
];

export default function Speakers() {
  const [activeDay, setActiveDay] = useState("day1");
  const activeSpeakers = days.find((d) => d.id === activeDay)?.speakers || [];

  return (
    <section id="speakers" className="py-24 px-6 bg-brand-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange"
          >
            Featured Voices
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Meet The Speakers
          </motion.h3>
          <div className="w-12 h-1 bg-brand-blue-light mt-4 rounded-full" />
        </div>

        {/* Day Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {days.map((day) => {
            const isActive = activeDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative shadow-sm ${isActive
                  ? "text-brand-white bg-brand-orange"
                  : "text-brand-text-dark bg-brand-cream hover:bg-brand-orange/10 border border-brand-orange/10"
                  }`}
              >
                <span className="relative z-10">{day.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSpeakerDayBg"
                    className="absolute inset-0 bg-brand-orange rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Speakers Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-brand-cream border border-brand-blue-light/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-56 bg-gradient-to-br from-brand-blue-dark/5 to-brand-blue-light/20 flex items-center justify-center relative overflow-hidden">
                    {speaker.imageUrl ? (
                      <img
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <User className="w-20 h-20 text-brand-blue-dark/10 group-hover:scale-110 transition-transform duration-500" />
                    )}
                    {/* A subtle overlay to make it look like a premium placeholder */}
                    <div className="absolute inset-0 bg-brand-blue-dark/10 mix-blend-multiply opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
                    <div className="absolute bottom-2 right-2 bg-brand-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold text-brand-blue-dark uppercase tracking-wider shadow-sm">
                      Speaker
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="p-6 relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-6 w-8 h-1 bg-brand-orange -translate-y-1/2 rounded-full" />

                    <h4 className="text-2xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-1">
                      {speaker.name}
                    </h4>
                    <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-4">
                      {speaker.jobTitle}
                    </p>

                    <div className="border-t border-brand-blue-light/10 pt-4 mt-2">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-brand-blue-light shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                            Topic:
                          </span>
                          <span className="text-sm font-medium text-brand-blue-dark leading-snug">
                            {speaker.topic}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
