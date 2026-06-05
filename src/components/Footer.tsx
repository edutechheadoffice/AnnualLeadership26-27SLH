"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Globe, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-brand-blue-dark text-brand-white pt-16 pb-8 px-6 overflow-hidden border-t border-brand-blue-light/10">
      {/* Decorative Wave Divider at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-yellow-bright via-brand-orange to-brand-blue-light" />

      {/* Background visual accents */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-brand-blue-light/5 blur-3xl pointer-events-none" />
      <div className="absolute top-16 right-0 w-80 h-80 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand Details */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <span className="font-bebas text-3xl tracking-widest text-brand-yellow-bright">
              ANNUAL LEADERSHIP MEETING 2026/2027
            </span>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-white/80">
              Sekolah Diah Harapan Head Office
            </span>
          </div>
          <p className="text-sm text-brand-white/60 max-w-sm leading-relaxed">
            Strengthening leadership capability through Collaboration, Vision, and Innovation. Developing holistic transformational Christian education.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-orange">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>TRUE KNOWLEDGE • FAITH IN CHRIST • GODLY CHARACTER</span>
          </div>
        </div>

        {/* Contact Coordinates */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bebas tracking-wider text-brand-yellow-bright uppercase">
            Contact & Venue
          </h3>
          <ul className="space-y-3 text-sm text-brand-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
              <span>Jl. Daan Mogot KM 11, Jakarta Barat, Indonesia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <span>(021) 5437-0099</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <span>info.sdhdm@sdh.or.id</span>
            </li>
          </ul>
        </div>

        {/* Quick Links & Resources */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bebas tracking-wider text-brand-yellow-bright uppercase">
            School Portals
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a
              href="https://www.sdh.sch.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-white/70 hover:text-brand-yellow-bright flex items-center gap-1.5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              Official Site
            </a>
            <a
              href="#activities"
              className="text-brand-white/70 hover:text-brand-yellow-bright flex items-center gap-1.5 transition-colors"
            >
              Activity Center
            </a>
            <a
              href="#rundown"
              className="text-brand-white/70 hover:text-brand-yellow-bright flex items-center gap-1.5 transition-colors"
            >
              Event Rundown
            </a>
            <a
              href="#venue"
              className="text-brand-white/70 hover:text-brand-yellow-bright flex items-center gap-1.5 transition-colors"
            >
              Location Map
            </a>
          </div>
        </div>
      </div>

      {/* Lower Copyright Area & Scroll to Top */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-brand-white/40 text-center sm:text-left">
          © {new Date().getFullYear()} Sekolah Diah Harapan Daan Mogot. All rights reserved.
        </p>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-brand-blue-light hover:bg-brand-blue text-brand-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
        >
          Back to Top
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>
    </footer>
  );
}
