"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Coffee, Users, Compass, BookOpen, Sun, Moon } from "lucide-react";

interface Session {
  time: string;
  title: string;
  speaker: string;
  location: string;
  type: "keynote" | "breakout" | "social" | "devotion";
  icon: any;
}

const day1Sessions: Session[] = [
  {
    time: "08:00 - 09:00",
    title: "Registration & Morning Tea",
    speaker: "Committee",
    location: "Foyer",
    type: "social",
    icon: Coffee,
  },
  {
    time: "09:00 - 10:30",
    title: "Opening Ceremony & Worship",
    speaker: "ALM Worship Team",
    location: "Main Chapel",
    type: "devotion",
    icon: Compass,
  },
  {
    time: "10:30 - 12:00",
    title: "Keynote 1: Unified Leadership in Education",
    speaker: "Dr. Jonathan L. (Executive Director)",
    location: "Main Chapel",
    type: "keynote",
    icon: BookOpen,
  },
  {
    time: "12:00 - 13:00",
    title: "Networking Lunch",
    speaker: "Participants",
    location: "Refectory",
    type: "social",
    icon: Coffee,
  },
  {
    time: "13:00 - 15:00",
    title: "Breakout Session A: Pedagogical Innovation",
    speaker: "Coordinators Group",
    location: "Seminar Rooms",
    type: "breakout",
    icon: Users,
  },
];

const day2Sessions: Session[] = [
  {
    time: "08:30 - 09:00",
    title: "Devotion & Worship",
    speaker: "Chapel Team",
    location: "Main Chapel",
    type: "devotion",
    icon: Compass,
  },
  {
    time: "09:00 - 10:30",
    title: "Keynote 2: Visionary Christian Leadership",
    speaker: "Dr. Clara R. (Guest Speaker)",
    location: "Main Chapel",
    type: "keynote",
    icon: BookOpen,
  },
  {
    time: "10:30 - 12:00",
    title: "Panel Discussion: Digital Integration",
    speaker: "EdTech Panelists",
    location: "Main Chapel",
    type: "keynote",
    icon: Users,
  },
  {
    time: "13:00 - 15:00",
    title: "Breakout Session B: Level Synergy",
    speaker: "Subject Heads",
    location: "Breakout Rooms",
    type: "breakout",
    icon: Users,
  },
];

const day3Sessions: Session[] = [
  {
    time: "08:30 - 09:00",
    title: "Morning Devotion",
    speaker: "Chapel Team",
    location: "Main Chapel",
    type: "devotion",
    icon: Compass,
  },
  {
    time: "09:00 - 11:00",
    title: "Group Presentations & Action Plans",
    speaker: "Regional Teams",
    location: "Hope Hall",
    type: "breakout",
    icon: Users,
  },
  {
    time: "11:00 - 12:30",
    title: "Commissioning & Closing Address",
    speaker: "Executive Committee",
    location: "Main Chapel",
    type: "keynote",
    icon: BookOpen,
  },
];

const days = [
  { id: "day1", label: "Day 01", date: "July 15, 2026", sessions: day1Sessions },
  { id: "day2", label: "Day 02", date: "July 16, 2026", sessions: day2Sessions },
  { id: "day3", label: "Day 03", date: "July 17, 2026", sessions: day3Sessions },
];

export default function Rundown() {
  const [activeDay, setActiveDay] = useState("day1");
  const activeSessions = days.find((d) => d.id === activeDay)?.sessions || [];

  const getTypeStyles = (type: Session["type"]) => {
    switch (type) {
      case "keynote":
        return "bg-brand-blue-light/10 text-brand-blue border-brand-blue-light/20";
      case "breakout":
        return "bg-brand-orange/10 text-brand-orange border-brand-orange/20";
      case "social":
        return "bg-brand-yellow/15 text-brand-blue-dark border-brand-yellow/20";
      case "devotion":
        return "bg-brand-blue-dark/5 text-brand-blue-dark border-brand-blue-dark/15";
    }
  };

  return (
    <section id="rundown" className="py-24 px-6 bg-brand-cream relative">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-light"
          >
            Schedule
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Event Rundown
          </motion.h3>
          <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {days.map((day) => {
            const isActive = activeDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative shadow-sm ${isActive
                    ? "text-brand-white bg-brand-blue-dark"
                    : "text-brand-text-dark bg-brand-white hover:bg-brand-blue-light/5 border border-brand-blue-light/10"
                  }`}
              >
                <span className="relative z-10">{day.label}</span>
                <span className="block text-[9px] opacity-60 relative z-10 font-normal normal-case">
                  {day.date}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeDayBg"
                    className="absolute inset-0 bg-brand-blue-dark rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central connector line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-blue-light/10 -translate-x-1/2 pointer-events-none" />

          {/* Sessions List */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {activeSessions.map((session, index) => {
                const SessionIcon = session.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${activeDay}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Time Label on one side */}
                    <div className="w-full md:w-1/2 flex items-center md:justify-center px-8 mb-2 md:mb-0">
                      <div className="flex items-center gap-2 text-brand-orange font-bold font-mono text-sm">
                        <Clock className="w-4 h-4" />
                        {session.time}
                      </div>
                    </div>

                    {/* Timeline Dot Indicator */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-brand-white border-2 border-brand-blue flex items-center justify-center -translate-x-1/2 z-10 shadow-sm pointer-events-none">
                      <SessionIcon className="w-3.5 h-3.5 text-brand-blue" />
                    </div>

                    {/* Session Details Card on the other side */}
                    <div className="w-full md:w-1/2 px-8">
                      <div className="bg-brand-white border border-brand-blue-light/10 p-6 rounded-2xl shadow-md card-shadow-premium-hover relative">
                        {/* Session Type Badge */}
                        <span
                          className={`absolute top-4 right-4 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getTypeStyles(
                            session.type
                          )}`}
                        >
                          {session.type}
                        </span>

                        <h4 className="text-xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-1 max-w-[80%]">
                          {session.title}
                        </h4>

                        <span className="text-xs font-semibold text-brand-orange block mb-3">
                          Presenter: {session.speaker}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-brand-text-muted border-t border-brand-blue-light/5 pt-3 mt-3">
                          <MapPin className="w-3.5 h-3.5 text-brand-blue-light shrink-0" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
