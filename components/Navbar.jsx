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
    <header className="fixed top-5 inset-x-0 flex justify-center items-center z-50 px-4 md:px-8 pointer-events-none transition-all duration-300">
      <nav
        className="pointer-events-auto relative flex items-center justify-between w-full max-w-[1180px] py-2.5 px-6 md:px-7 rounded-full bg-[rgba(10,8,20,0.78)] backdrop-blur-2xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.18)]"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Brand & Reload to Hero Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#heroScrollTrack"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname);
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3 no-underline text-white group cursor-pointer"
            aria-label="Syed Sabirudeen B Portfolio - Return to Hero"
          >
            <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-[#a7f3d0] to-[#67e8f9] bg-clip-text text-transparent group-hover:drop-shadow-[0_0_12px_rgba(103,232,249,0.7)] transition-all">
              SSB
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9] animate-pulse" />
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest text-[#a7f3d0] px-2 py-0.5 rounded-full bg-[#a7f3d0]/10 border border-[#a7f3d0]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] animate-ping" />
              AVAILABLE
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
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#67e8f9] text-white/60 hover:text-[#67e8f9] transition-all hover:rotate-180 duration-500 cursor-pointer"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10">
          <a
            href="#projectsSection"
            className={`font-sans text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
              activeSection === "projectsSection"
                ? "bg-[#67e8f9] text-black font-bold shadow-[0_0_15px_rgba(103,232,249,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Projects</span>
          </a>
          <a
            href="#skillsSection"
            className={`font-sans text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
              activeSection === "skillsSection"
                ? "bg-[#c4b5fd] text-black font-bold shadow-[0_0_15px_rgba(196,181,253,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Skills</span>
          </a>
          <a
            href="#achievementsSection"
            className={`font-sans text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
              activeSection === "achievementsSection"
                ? "bg-[#fef08a] text-black font-bold shadow-[0_0_15px_rgba(254,240,138,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Achievements</span>
          </a>
          <a
            href="#contactSection"
            className={`font-sans text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
              activeSection === "contactSection"
                ? "bg-[#fda4af] text-black font-bold shadow-[0_0_15px_rgba(253,164,175,0.4)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Contact</span>
          </a>
        </div>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contactSection"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold text-white bg-gradient-to-r from-white/15 to-white/5 hover:from-[#67e8f9] hover:to-[#a7f3d0] hover:text-black border border-white/20 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(103,232,249,0.4)]"
          >
            <span>Let's Connect</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 md:hidden p-5 rounded-2xl bg-[rgba(10,8,20,0.95)] backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname);
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-left cursor-pointer"
          >
            <span className="font-mono text-xs text-[#a7f3d0]">00</span>
            <span>Home (Hero)</span>
            <span>↑</span>
          </button>
          <a
            href="#projectsSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium"
          >
            <span className="font-mono text-xs text-[#67e8f9]">01</span>
            <span>Projects</span>
            <span>→</span>
          </a>
          <a
            href="#skillsSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium"
          >
            <span className="font-mono text-xs text-[#c4b5fd]">02</span>
            <span>Skills</span>
            <span>→</span>
          </a>
          <a
            href="#achievementsSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium"
          >
            <span className="font-mono text-xs text-[#fef08a]">03</span>
            <span>Achievements</span>
            <span>→</span>
          </a>
          <a
            href="#contactSection"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium"
          >
            <span className="font-mono text-xs text-[#fda4af]">04</span>
            <span>Contact</span>
            <span>→</span>
          </a>
        </div>
      )}
    </header>
  );
}
