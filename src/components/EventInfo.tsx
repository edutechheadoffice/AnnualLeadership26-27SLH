"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Building2, MapPin, Users, Award, ShieldAlert, BookOpen } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1.2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const startTime = Date.now();
    const totalMiliseconds = duration * 1000;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalMiliseconds, 1);
      setCount(Math.floor(progress * end));
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16); // 60 FPS

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function EventInfo() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="details" className="py-24 px-6 bg-brand-cream bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-light"
          >
            Overview
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Event Details & Metrics
          </motion.h3>
          <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
        </div>

        {/* Dashboard grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Schedule Details */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-8 rounded-3xl border border-brand-blue-light/10 card-shadow-premium-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-light/10 flex items-center justify-center text-brand-blue-light mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-3">
                Event Schedule
              </h4>
              <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
                Structured over three intensive days focusing on planning, spiritual alignment, and academic innovations.
              </p>
            </div>
            <div className="border-t border-brand-blue-light/10 pt-4 mt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Dates
              </span>
              <span className="text-sm font-semibold text-brand-blue-dark">
                July 15 - 17, 2026 (Wed - Fri)
              </span>
            </div>
          </motion.div>

          {/* Card 2: Venue Logistics */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-8 rounded-3xl border border-brand-blue-light/10 card-shadow-premium-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-blue-dark mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-3">
                Venue Location
              </h4>
              <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
                Hosted at SDH Daan Mogot, leveraging high-tech conference auditoriums and specialized workshop spaces.
              </p>
            </div>
            <div className="border-t border-brand-blue-light/10 pt-4 mt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Auditorium
              </span>
              <span className="text-sm font-semibold text-brand-blue-dark">
                Main Chapel & Hope Hall
              </span>
            </div>
          </motion.div>

          {/* Card 3: Highlights Dashboard */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-8 rounded-3xl border border-brand-blue-light/10 card-shadow-premium-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center text-brand-orange mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-3">
                Key Metrics
              </h4>
              <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
                Bringing together educators, leaders, and coordinators from multiple regions for academic growth.
              </p>
            </div>
            <div className="border-t border-brand-blue-light/10 pt-4 mt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Focus
              </span>
              <span className="text-sm font-semibold text-brand-blue-dark">
                Leadership, Pedagogy, Synergy
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlight counter boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Participants", value: 150, suffix: "+", icon: Users, color: "text-brand-blue-light" },
            { label: "Keynote Panels", value: 4, suffix: "", icon: BookOpen, color: "text-brand-orange" },
            { label: "Sessions", value: 12, suffix: "", icon: Award, color: "text-brand-yellow" },
            { label: "Committees", value: 8, suffix: "", icon: Building2, color: "text-brand-blue-dark" },
          ].map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={stat.label}
              className="bg-brand-white border border-brand-blue-light/5 p-6 rounded-2xl shadow-md text-center flex flex-col items-center justify-center group hover:border-brand-blue-light/20 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-3xl sm:text-4xl font-bebas text-brand-blue-dark tracking-wide">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-brand-text-muted mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
