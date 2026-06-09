"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-brand-white py-8 px-6 border-t border-brand-blue-light/10">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-xs text-brand-white/40 text-center">
          © {new Date().getFullYear()} Sekolah Lentera Harapan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
