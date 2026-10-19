"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative w-full bg-[#060813] border-t border-white/20 text-[#f5f5f7] pt-16 pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden z-20"
      role="contentinfo"
      aria-label="Portfolio Footer"
    >
      {/* Background Architectural Canvas Grid */}
      <div className="absolute inset-0 bg-grid-architectural opacity-20 pointer-events-none" />

      {/* Top Telemetry Running Tape */}
      <div className="w-full border-y border-white/15 py-2 mb-12 overflow-hidden bg-black/40 flex items-center">
        <div className="flex items-center gap-8 whitespace-nowrap font-mono text-[11px] text-white/50 tracking-widest uppercase">
          <span className="text-[#00f0ff] font-bold">● SYSTEM_STATUS: ALL_MODULES_OPTIMAL</span>
          <span>✦</span>
          <span>LOCATION: CHENNAI_NODE (13.0827° N, 80.2707° E)</span>
          <span>✦</span>
          <span className="text-[#00f0ff] font-bold">FRAMEWORK: NEXT.JS 16 // REACT 19 // TURBOPACK</span>
          <span>✦</span>
          <span>AUDIO ENGINE: WEB AUDIO API // 44.1KHZ</span>
          <span>✦</span>
          <span className="text-[#e879f9] font-bold">SPATIAL RENDER: CANVAS 2D // LERP_SMOOTH</span>
          <span>✦</span>
          <span>SYSTEM_STATUS: ALL_MODULES_OPTIMAL</span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12 sm:gap-14">
        {/* Top 4-Column Architectural Ledger Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Identity & Status (Lg: col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase block">
                [ COLOPHON // PROFILE ]
              </span>
            </div>
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-none">
              SYED SABIRUDEEN B
            </h3>
            <p className="font-sans text-white/70 text-xs sm:text-sm leading-relaxed border-l-2 border-[#00f0ff] pl-3">
              Computer Science Engineer architecting fluid web architectures, spatial 3D experiences, and agentic AI systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-mono text-[11px] font-bold w-fit mt-1">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] animate-ping" />
              AVAILABLE FOR HIRE
            </div>
          </div>

          {/* Col 2: Navigation Links (Lg: col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-mono text-xs font-bold text-[#00f0ff] tracking-widest uppercase">
                NAVIGATION
              </h4>
              <span className="font-mono text-[10px] text-white/30">[01]</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/70">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer text-left flex items-center gap-2 group"
                >
                  <span className="text-white/30 group-hover:text-[#00f0ff]">01 //</span>
                  <span>Home (Hero Section)</span>
                </button>
              </li>
              <li>
                <a href="#projectsSection" className="hover:text-[#00f0ff] transition-colors flex items-center gap-2 group">
                  <span className="text-white/30 group-hover:text-[#00f0ff]">02 //</span>
                  <span>Selected 3D Projects</span>
                </a>
              </li>
              <li>
                <a href="#skillsSection" className="hover:text-[#818cf8] transition-colors flex items-center gap-2 group">
                  <span className="text-white/30 group-hover:text-[#818cf8]">03 //</span>
                  <span>Skills & Capabilities</span>
                </a>
              </li>
              <li>
                <a href="#achievementsSection" className="hover:text-[#fbbf24] transition-colors flex items-center gap-2 group">
                  <span className="text-white/30 group-hover:text-[#fbbf24]">04 //</span>
                  <span>Hackathon Honors</span>
                </a>
              </li>
              <li>
                <a href="#contactSection" className="hover:text-[#e879f9] transition-colors flex items-center gap-2 group">
                  <span className="text-white/30 group-hover:text-[#e879f9]">05 //</span>
                  <span>Get In Touch</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Channels (Lg: col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-mono text-xs font-bold text-[#818cf8] tracking-widest uppercase">
                DIRECT CHANNELS
              </h4>
              <span className="font-mono text-[10px] text-white/30">[02]</span>
            </div>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-mono text-white/70">
              <a
                href="mailto:sabirudeensyed@gmail.com"
                className="hover:text-[#00f0ff] transition-colors flex items-center gap-2 group p-2 bg-white/[0.02] border border-white/10 hover:border-[#00f0ff]"
              >
                <span className="text-[#00f0ff]">✉</span>
                <span className="truncate">sabirudeensyed@gmail.com</span>
              </a>
              <a
                href="tel:+917358578018"
                className="hover:text-[#00f0ff] transition-colors flex items-center gap-2 group p-2 bg-white/[0.02] border border-white/10 hover:border-[#00f0ff]"
              >
                <span className="text-[#00f0ff]">☎</span>
                <span>+91 7358578018</span>
              </a>
              <div className="flex items-center gap-2 text-white/50 p-2 bg-white/[0.02] border border-white/5">
                <span className="text-[#818cf8]">⌖</span>
                <span className="text-xs">Chennai, India (Remote / On-site)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Profiles & Resume (Lg: col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-mono text-xs font-bold text-[#e879f9] tracking-widest uppercase">
                PROFILES & ASSETS
              </h4>
              <span className="font-mono text-[10px] text-white/30">[03]</span>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href="https://github.com/sabir2006-10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/[0.03] border border-white/15 hover:border-[#00f0ff] hover:text-[#00f0ff] text-white/80 flex items-center justify-between transition-colors uppercase"
              >
                <span>GitHub</span>
                <span className="text-white/40">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/syed-sabirudeen-8081a42b0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/[0.03] border border-white/15 hover:border-[#818cf8] hover:text-[#818cf8] text-white/80 flex items-center justify-between transition-colors uppercase"
              >
                <span>LinkedIn</span>
                <span className="text-white/40">↗</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Syed_Sabirudeen_B_Resume.pdf"
                className="p-2 bg-[#e879f9]/15 border border-[#e879f9]/60 text-[#e879f9] hover:bg-[#e879f9] hover:text-black flex items-center justify-between font-bold transition-all uppercase"
              >
                <span>Download Resume (PDF)</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Colossal Monolithic Brand Banner */}
        <div className="w-full flex items-center justify-between border-b border-white/15 pb-8 overflow-hidden select-none">
          <span className="font-syne font-black text-4xl sm:text-7xl lg:text-9xl text-white/[0.06] tracking-tighter uppercase whitespace-nowrap">
            SYED SABIRUDEEN
          </span>
          <span className="font-mono text-xs text-white/30 uppercase tracking-widest hidden sm:inline-block">
            PORTFOLIO · 2026
          </span>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60 font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white font-bold">© 2026 Syed Sabirudeen B.</span>
            <span className="text-white/30">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="text-center text-white/40 font-mono text-[11px] max-w-md">
            Engineered with Next.js 16, React 19, TailwindCSS, HTML5 Canvas & Web Audio API
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-[#00f0ff] hover:text-black border border-white/20 hover:border-[#00f0ff] text-white font-mono text-xs font-bold uppercase transition-all duration-200 cursor-pointer shadow-[3px_3px_0_0_#ffffff] hover:shadow-[1px_1px_0_0_#ffffff] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
