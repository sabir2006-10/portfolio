"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["contactSection", "achievementsSection", "skillsSection", "projectsSection", "heroScrollTrack"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 flex justify-center items-center z-50 px-3 sm:px-6 md:px-8 pointer-events-none transition-all duration-300">
      <nav
        className="pointer-events-auto relative flex items-center justify-between w-full max-w-[1240px] py-2 sm:py-2.5 px-4 sm:px-6 bg-[#080c1f]/90 backdrop-blur-2xl border-2 border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(56,189,248,0.15)]"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Holographic corner registration crosshairs */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none" />
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#38bdf8] pointer-events-none" />
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#6366f1] pointer-events-none" />
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#e879f9] pointer-events-none" />

        {/* Brand & Reload to Hero Section */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          <a
            href="#heroScrollTrack"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname);
              }
            }}
            className="flex items-center gap-2 sm:gap-3 no-underline text-white group cursor-pointer select-none"
            aria-label="Syed Sabirudeen B Portfolio - Return to Hero"
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#111738] text-white font-black font-mono text-sm tracking-tighter border border-[#38bdf8]/50 shadow-[2px_2px_0px_0px_#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-all duration-200">
              <span>SSB</span>
              <span className="text-[10px] text-white/50 group-hover:text-black/70 font-mono">::2026</span>
            </div>
            
            <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#00f0ff] px-2.5 py-1 bg-[#00f0ff]/10 border border-[#00f0ff]/35">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] animate-ping" />
              AVAILABLE FOR HIRE
            </span>
          </a>

          {/* Quick Reload / Refresh to Hero Button */}
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                if (window.location.hash) {
                  window.history.replaceState(null, "", window.location.pathname);
                }
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                window.location.href = window.location.origin + window.location.pathname;
              }
            }}
            title="Reload to Hero Section"
            aria-label="Reload and show hero section"
            className="p-1.5 bg-[#111738] hover:bg-[#00f0ff] border border-white/20 hover:border-[#00f0ff] text-white/70 hover:text-black transition-all hover:rotate-180 duration-500 cursor-pointer shadow-[2px_2px_0px_0px_rgba(56,189,248,0.25)] active:translate-x-0.5 active:translate-y-0.5"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
          </button>
        </div>

        {/* Desktop Links - Video-Derived Holographic Index Tabs */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-black/50 border border-white/10">
          <a
            href="#projectsSection"
            className={`font-mono text-xs font-bold px-3.5 py-1.5 transition-all duration-200 flex items-center gap-1.5 ${
              activeSection === "projectsSection"
                ? "bg-[#00f0ff] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className={activeSection === "projectsSection" ? "text-black" : "text-[#00f0ff]"}>01/</span>
            <span>Projects</span>
          </a>
          <a
            href="#skillsSection"
            className={`font-mono text-xs font-bold px-3.5 py-1.5 transition-all duration-200 flex items-center gap-1.5 ${
              activeSection === "skillsSection"
                ? "bg-[#818cf8] text-black shadow-[0_0_15px_rgba(129,140,248,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className={activeSection === "skillsSection" ? "text-black" : "text-[#818cf8]"}>02/</span>
            <span>Skills</span>
          </a>
          <a
            href="#achievementsSection"
            className={`font-mono text-xs font-bold px-3.5 py-1.5 transition-all duration-200 flex items-center gap-1.5 ${
              activeSection === "achievementsSection"
                ? "bg-[#fbbf24] text-black shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className={activeSection === "achievementsSection" ? "text-black" : "text-[#fbbf24]"}>03/</span>
            <span>Achievements</span>
          </a>
          <a
            href="#contactSection"
            className={`font-mono text-xs font-bold px-3.5 py-1.5 transition-all duration-200 flex items-center gap-1.5 ${
              activeSection === "contactSection"
                ? "bg-[#e879f9] text-black shadow-[0_0_15px_rgba(232,121,249,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className={activeSection === "contactSection" ? "text-black" : "text-[#e879f9]"}>04/</span>
            <span>Contact</span>
          </a>
        </div>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contactSection"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-black uppercase text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#e879f9] border border-white shadow-[0_0_15px_rgba(0,240,255,0.35)] hover:shadow-[0_0_20px_rgba(232,121,249,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Let's Connect</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-[#111738] border border-[#38bdf8]/40 text-white active:bg-[#00f0ff] active:text-black shadow-[2px_2px_0px_0px_rgba(0,240,255,0.5)]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1 bg-[#00f0ff]" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1 bg-[#00f0ff]" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer - Architectural Dossier Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-3 sm:inset-x-6 md:hidden p-5 bg-[#080c1f] border-2 border-[#00f0ff] shadow-[0_20px_60px_rgba(0,0,0,0.95)] flex flex-col gap-2.5 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between border-b border-white/15 pb-2 font-mono text-[10px] text-white/50 uppercase tracking-widest">
            <span>[ SYSTEM NAVIGATION INDEX ]</span>
            <span className="text-[#00f0ff]">HOLO 2.6</span>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname);
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between p-3 bg-white/5 hover:bg-[#00f0ff] hover:text-black border border-white/10 text-white font-mono font-bold text-left cursor-pointer transition-colors"
          >
            <span className="text-xs text-[#00f0ff] hover:text-black">[ 00 ]</span>
            <span className="font-sans font-bold">Home (Hero)</span>
            <span>↑</span>
          </button>
          <a
            href="#projectsSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 bg-white/5 hover:bg-[#00f0ff] hover:text-black border border-white/10 text-white font-mono font-bold transition-colors"
          >
            <span className="text-xs text-[#00f0ff]">[ 01 ]</span>
            <span className="font-sans font-bold">Projects</span>
            <span>→</span>
          </a>
          <a
            href="#skillsSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 bg-white/5 hover:bg-[#818cf8] hover:text-black border border-white/10 text-white font-mono font-bold transition-colors"
          >
            <span className="text-xs text-[#818cf8]">[ 02 ]</span>
            <span className="font-sans font-bold">Skills</span>
            <span>→</span>
          </a>
          <a
            href="#achievementsSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 bg-white/5 hover:bg-[#fbbf24] hover:text-black border border-white/10 text-white font-mono font-bold transition-colors"
          >
            <span className="text-xs text-[#fbbf24]">[ 03 ]</span>
            <span className="font-sans font-bold">Achievements</span>
            <span>→</span>
          </a>
          <a
            href="#contactSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 bg-white/5 hover:bg-[#e879f9] hover:text-black border border-white/10 text-white font-mono font-bold transition-colors"
          >
            <span className="text-xs text-[#e879f9]">[ 04 ]</span>
            <span className="font-sans font-bold">Contact</span>
            <span>→</span>
          </a>
        </div>
      )}
    </header>
  );
}
