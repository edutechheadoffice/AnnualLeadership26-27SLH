"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, MessageSquare, FolderGit2, FolderHeart, Image, ExternalLink, ArrowRight } from "lucide-react";

interface ActivityCard {
  title: string;
  desc: string;
  icon: any;
  actionLabel: string;
  href: string;
  isExternal: boolean;
  glowColor: string;
}

const activities: ActivityCard[] = [
  {
    title: "Attendance Form",
    desc: "Submit your daily attendance check-in and session verification forms.",
    icon: ClipboardCheck,
    actionLabel: "Check In",
    href: "#",
    isExternal: true,
    glowColor: "from-brand-blue-light to-brand-blue",
  },
  {
    title: "Mentimeter Polls",
    desc: "Join real-time interactive polls, QA panels, and feedback sessions.",
    icon: MessageSquare,
    actionLabel: "Join Poll",
    href: "#",
    isExternal: true,
    glowColor: "from-brand-yellow-bright to-brand-yellow",
  },
  {
    title: "Collaborative Padlet",
    desc: "Share your ideas, brainstorm with colleagues, and list team outcomes.",
    icon: FolderGit2,
    actionLabel: "Open Board",
    href: "#",
    isExternal: true,
    glowColor: "from-brand-orange to-brand-yellow-bright",
  },
  {
    title: "SharePoint Materials",
    desc: "Access slides, template documents, and school regional planning resources.",
    icon: FolderHeart,
    actionLabel: "Access Files",
    href: "#",
    isExternal: true,
    glowColor: "from-brand-blue-dark to-brand-blue-light",
  },
  {
    title: "Session Gallery",
    desc: "Browse high-resolution photographs taken throughout the ALM sessions.",
    icon: Image,
    actionLabel: "View Gallery",
    href: "#gallery",
    isExternal: false,
    glowColor: "from-brand-orange to-brand-blue-light",
  },
];

export default function ActivityCenter() {
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
    <section id="activities" className="py-24 px-6 bg-brand-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl -translate-y-1/2" />
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-brand-blue-light/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-light"
          >
            Resources
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Activity Center
          </motion.h3>
          <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <motion.div
                variants={cardVariants}
                key={act.title}
                className="relative group rounded-3xl p-0.5 transition-all duration-300"
              >
                {/* Glowing border element */}
                <div className={`absolute inset-0 bg-gradient-to-r ${act.glowColor} rounded-3xl blur-[8px] opacity-20 group-hover:opacity-80 transition duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${act.glowColor} rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500`} />
                
                {/* Main Card Content */}
                <div className="relative h-full bg-brand-cream border border-brand-blue-light/5 p-8 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-white border border-brand-blue-light/10 flex items-center justify-center text-brand-blue-dark mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand-blue-light" />
                    </div>

                    <h4 className="text-2xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-2">
                      {act.title}
                    </h4>
                    <p className="text-xs text-brand-text-muted leading-relaxed mb-6">
                      {act.desc}
                    </p>
                  </div>

                  <div className="border-t border-brand-blue-light/5 pt-4 mt-4">
                    <a
                      href={act.href}
                      target={act.isExternal ? "_blank" : undefined}
                      rel={act.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue-dark group-hover:text-brand-orange transition-colors"
                    >
                      {act.actionLabel}
                      {act.isExternal ? (
                        <ExternalLink className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
