"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ZoomIn, ZoomOut, Compass } from "lucide-react";

export default function VenueMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setZoomScale(1); // reset zoom on close/open
  };

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.max(prev - 0.25, 0.75));
  };

  // Styled Campus Map Graphic using HTML/SVG
  const CampusMapGraphic = ({ detailed = false }: { detailed?: boolean }) => (
    <div className={`relative w-full h-full bg-[#15396B] rounded-2xl overflow-hidden p-6 border border-brand-yellow-bright/20 flex flex-col justify-between ${detailed ? "" : "cursor-pointer"}`}>
      
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #F3D54E 1px, transparent 1px), linear-gradient(to bottom, #F3D54E 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      {/* Compass rose decoration */}
      <div className="absolute top-4 right-4 text-brand-yellow-bright/35 flex items-center gap-1.5 text-xs font-mono">
        <Compass className="w-5 h-5 animate-spin-slow" />
        <span>N</span>
      </div>

      {/* Graphic Content */}
      <div className="relative z-10 flex-1 grid grid-cols-3 gap-4 items-center mt-6">
        
        {/* Row 1 */}
        <div className="border border-dashed border-brand-yellow-bright/40 p-4 rounded-xl text-center bg-brand-blue-dark/40 flex flex-col justify-center h-28 group-hover:bg-brand-blue-dark/60 transition-colors">
          <span className="font-bebas text-lg text-brand-yellow-bright">Auditorium</span>
          <span className="text-[9px] text-brand-white/60 font-mono">2nd Floor</span>
        </div>

        <div className="border border-dashed border-brand-yellow-bright/40 p-4 rounded-xl text-center bg-brand-blue-dark/40 flex flex-col justify-center h-28">
          <span className="font-bebas text-lg text-brand-yellow-bright">Hope Hall</span>
          <span className="text-[9px] text-brand-white/60 font-mono">Main Hall</span>
        </div>

        <div className="border border-dashed border-brand-yellow-bright/40 p-4 rounded-xl text-center bg-brand-blue-dark/40 flex flex-col justify-center h-28">
          <span className="font-bebas text-lg text-brand-yellow-bright">Chapel Room</span>
          <span className="text-[9px] text-brand-white/60 font-mono">1st Floor</span>
        </div>

        {/* Row 2 */}
        <div className="col-span-2 border border-dashed border-brand-yellow-bright/30 p-3 rounded-xl text-center bg-[#F28B42]/10 flex flex-col justify-center h-20">
          <span className="font-bebas text-lg text-brand-orange">Collaborative Breakout Area</span>
          <span className="text-[9px] text-brand-white/60 font-mono">Foyer & Garden</span>
        </div>

        <div className="border border-dashed border-brand-yellow-bright/40 p-4 rounded-xl text-center bg-brand-blue-dark/40 flex flex-col justify-center h-20">
          <span className="font-bebas text-lg text-brand-yellow-bright">Refectory</span>
          <span className="text-[9px] text-brand-white/60 font-mono">Dining area</span>
        </div>
      </div>

      {/* Blueprint Title Labels */}
      <div className="relative z-10 border-t border-brand-yellow-bright/20 pt-4 mt-6 flex justify-between items-center text-brand-yellow-bright font-mono text-[10px]">
        <span>ALM CAMPUS BLUEPRINT v1.0</span>
        <span>SDH DM BUILDING</span>
      </div>

      {/* Inner visual markings */}
      <div className="absolute top-2 left-2 text-[8px] font-mono text-brand-yellow-bright/40">X: 106.721 | Y: -6.149</div>
      <div className="absolute bottom-2 right-2 text-[8px] font-mono text-brand-yellow-bright/40">SCALE: 1 : 500</div>
    </div>
  );

  return (
    <section id="map" className="py-24 px-6 bg-brand-cream bg-grid-pattern relative">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-light"
          >
            Campus Layout
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Venue Floor Plan
          </motion.h3>
          <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
        </div>

        {/* Blueprint display card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onClick={toggleModal}
          className="relative bg-brand-white p-6 rounded-3xl shadow-lg border border-brand-blue-light/10 card-shadow-premium-hover group"
        >
          <div className="h-[350px] relative">
            <CampusMapGraphic />
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-brand-blue-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center pointer-events-none">
              <div className="bg-brand-white text-brand-blue-dark px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
                Expand Plan
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bebas text-brand-blue-dark tracking-wide uppercase">
                Interactive Campus Blueprint
              </h4>
              <p className="text-xs text-brand-text-muted mt-1">
                Click on the blueprint card above to expand, pan, and zoom the seminar room layout.
              </p>
            </div>
            <button
              onClick={toggleModal}
              className="inline-flex items-center gap-1.5 bg-brand-blue-dark hover:bg-brand-blue text-brand-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Maximize
            </button>
          </div>
        </motion.div>

        {/* Expandable Zoom/Pan Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="fixed inset-0 bg-brand-blue-dark/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-10"
            >
              {/* Close Hotkey Hint */}
              <div className="absolute top-6 left-6 text-brand-white/40 text-xs font-mono hidden md:block">
                ESC to close
              </div>

              {/* Close Button */}
              <button
                onClick={toggleModal}
                className="absolute top-6 right-6 bg-brand-white/10 hover:bg-brand-white/20 text-brand-white p-2.5 rounded-full border border-brand-white/10 transition-colors focus:outline-none"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Zoom Controls inside Modal */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-brand-blue-dark/90 border border-brand-white/15 px-4 py-2 rounded-full flex items-center gap-4 z-55 shadow-2xl">
                <button
                  onClick={zoomOut}
                  className="text-brand-white/70 hover:text-brand-yellow-bright p-1"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-brand-white text-xs font-mono min-w-12 text-center select-none">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  className="text-brand-white/70 hover:text-brand-yellow-bright p-1"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Map Content container */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl h-[70vh] max-h-[600px] relative rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Scrollable zoom panel */}
                <div className="w-full h-full overflow-auto p-4 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: zoomScale }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-full h-full min-w-[500px] min-h-[350px]"
                  >
                    <CampusMapGraphic detailed={true} />
                  </motion.div>
                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
