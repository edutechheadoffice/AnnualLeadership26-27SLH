"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ThemeScripture() {
  return (
    <section
      id="theme"
      className="relative py-24 px-6 overflow-hidden bg-brand-white"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-blue-light/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-10 right-10 w-48 h-48 border border-dashed border-brand-orange/15 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange"
          >
            Spiritual Foundation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-brand-blue-light mx-auto mt-2 origin-left"
          />
        </div>

        {/* Paper-cut Layered Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-brand-cream border border-brand-blue-light/10 p-8 sm:p-16 rounded-3xl shadow-xl overflow-hidden group"
        >
          {/* Inner paper outline */}
          <div className="absolute inset-4 border border-brand-blue-light/5 rounded-2xl pointer-events-none" />

          {/* Golden Quote Marks Icon */}
          <div className="absolute top-6 left-6 text-brand-yellow/30 opacity-60 pointer-events-none">
            <Quote className="w-16 h-16 fill-brand-yellow/10" />
          </div>

          <div className="absolute bottom-6 right-6 text-brand-blue-light/10 opacity-40 pointer-events-none rotate-180">
            <Quote className="w-20 h-20 fill-brand-blue-light/5" />
          </div>

          {/* Quote Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-3xl font-serif italic text-brand-blue-dark leading-relaxed font-semibold max-w-3xl"
            >
              "From him the whole body, joined and held together by every supporting ligament, grows and builds itself up in love, as each part does its work."
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-base font-bold uppercase tracking-widest text-brand-orange mt-2">
                Ephesians 4:16
              </span>
              <span className="text-xs uppercase font-semibold text-brand-text-muted mt-1">
                ALM 2026/2027 Core Scripture
              </span>
            </motion.div>
          </div>

          {/* Modern Accent Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-orange/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-orange/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-orange/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-orange/40" />
        </motion.div>

        {/* Small theme detail notes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Collaboration",
              desc: "Working in unity under one body to coordinate goals and build structural synergy.",
              color: "border-brand-blue-light",
            },
            {
              title: "Vision",
              desc: "Aligning strategies for transformational leadership in Christian education.",
              color: "border-brand-yellow",
            },
            {
              title: "Innovation",
              desc: "Adopting modern pedagogical methods to inspire the next generation of students.",
              color: "border-brand-orange",
            },
          ].map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={item.title}
              className={`bg-brand-white border-t-4 ${item.color} p-6 rounded-2xl shadow-md border border-brand-blue-light/5`}
            >
              <h4 className="font-bebas text-2xl text-brand-blue-dark tracking-wide mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
