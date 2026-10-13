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
      className="relative w-full bg-[#030206] border-t border-white/10 text-white pt-16 pb-10 px-6 sm:px-10 lg:px-16 overflow-hidden z-20"
      role="contentinfo"
      aria-label="Portfolio Footer"
    >
      {/* Ambient background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(103,232,249,0.12)_0%,rgba(196,181,253,0.08)_40%,transparent_75%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Identity & Status */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-white via-[#a7f3d0] to-[#67e8f9] bg-clip-text text-transparent">
                SYED SABIRUDEEN B
              </span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Computer Science Engineer architecting fluid web architectures, spatial 3D experiences, and agentic AI systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a7f3d0]/10 border border-[#a7f3d0]/30 text-[#a7f3d0] font-mono text-[11px] font-bold w-fit mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] animate-ping" />
              AVAILABLE FOR HIRE
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-[#67e8f9] tracking-widest uppercase">
              NAVIGATION
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm font-medium text-white/70">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home (Hero Section)
                </button>
              </li>
              <li>
                <a href="#projectsSection" className="hover:text-[#67e8f9] transition-colors">
                  Selected 3D Projects
                </a>
              </li>
              <li>
                <a href="#skillsSection" className="hover:text-[#c4b5fd] transition-colors">
                  Skills & Capabilities
                </a>
              </li>
              <li>
                <a href="#achievementsSection" className="hover:text-[#fef08a] transition-colors">
                  Hackathon Honors
                </a>
              </li>
              <li>
                <a href="#contactSection" className="hover:text-[#fda4af] transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-[#c4b5fd] tracking-widest uppercase">
              DIRECT CHANNELS
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/70">
              <a
                href="mailto:sabirudeensyed@gmail.com"
                className="hover:text-[#67e8f9] transition-colors flex items-center gap-2 group"
              >
                <span className="text-[#67e8f9]">✉</span>
                <span className="truncate">sabirudeensyed@gmail.com</span>
              </a>
              <a
                href="tel:+917358578018"
                className="hover:text-[#a7f3d0] transition-colors flex items-center gap-2"
              >
                <span className="text-[#a7f3d0]">☎</span>
                <span>+91 7358578018</span>
              </a>
              <span className="flex items-center gap-2 text-white/50">
                <span>📍</span>
                <span>Chennai, India (Remote / On-site)</span>
              </span>
            </div>
          </div>

          {/* Col 4: Profiles & Resume */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-[#fda4af] tracking-widest uppercase">
              PROFILES & ASSETS
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium">
              <a
                href="https://github.com/sabir2006-10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>GitHub</span>
                <span className="text-white/40">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/syed-sabirudeen-8081a42b0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#67e8f9] flex items-center gap-1.5 transition-colors"
              >
                <span>LinkedIn</span>
                <span className="text-white/40">↗</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Syed_Sabirudeen_B_Resume.pdf"
                className="text-[#a7f3d0] hover:text-white flex items-center gap-1.5 font-bold transition-colors pt-1"
              >
                <span>Download Resume (PDF)</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 Syed Sabirudeen B.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="text-center text-white/40 font-sans text-[11px]">
            Engineered with Next.js 16, React 19, TailwindCSS, HTML5 Canvas & Web Audio API
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#67e8f9] text-white/80 hover:text-[#67e8f9] transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
