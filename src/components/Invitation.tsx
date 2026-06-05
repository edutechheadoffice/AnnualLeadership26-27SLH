"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Invitation() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-brand-white overflow-hidden" id="invitation">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-blue-light/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl sm:text-6xl font-bebas text-brand-blue-dark uppercase tracking-wider mb-6">
            You Are Invited
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
            Join us for the Annual Leadership Meeting. We are preparing an incredible experience for you.
            More details about speakers, rundown, venue, and activity center will be revealed soon!.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
