import React from "react";
import { motion } from "framer-motion";

const StayTuned: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B2C67] flex items-center justify-center overflow-hidden border-y border-brand-white/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellow-bright/20 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-white/5 backdrop-blur-md border border-brand-white/10 rounded-2xl p-10 md:p-16 shadow-2xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-yellow-bright/10 border border-brand-yellow-bright/20">
            <span className="text-sm font-semibold tracking-wider text-brand-yellow-bright uppercase">
              More Updates to Follow
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-brand-white mb-6 tracking-wide uppercase drop-shadow-sm">
            Coming <span className="text-brand-yellow-bright">Soon</span>
          </h2>
          
          <p className="text-lg md:text-xl text-brand-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Stay tuned to this website for upcoming information regarding speakers, rundown, activities, and venue details.
          </p>
          
          <div className="mt-10 flex justify-center space-x-3">
            <motion.span 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
              className="w-2.5 h-2.5 rounded-full bg-brand-yellow-bright" 
            />
            <motion.span 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
              className="w-2.5 h-2.5 rounded-full bg-brand-yellow-bright" 
            />
            <motion.span 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
              className="w-2.5 h-2.5 rounded-full bg-brand-yellow-bright" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayTuned;
