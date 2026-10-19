"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SelectedProjectsSection from "../components/SelectedProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AchievementsSection from "../components/AchievementsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  // Ensure page reload/refresh always resets scroll position to the top (Hero Section)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If user reloaded with an anchor hash in the URL, clear it to stay on Hero
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      window.scrollTo(0, 0);

      // Defeat browser late-scroll restoration after paint
      const rId = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
      const tId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);

      const handleBeforeUnload = () => {
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        window.scrollTo(0, 0);
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        cancelAnimationFrame(rId);
        clearTimeout(tId);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#060813] text-white selection:bg-[#00f0ff] selection:text-black">
      {/* Floating Cybernetic Navbar */}
      <Navbar />

      {/* 40-Frame Interactive Canvas Hero Sequencer + Framed Artifact */}
      <HeroSection />

      {/* Redesigned 3D Projects Showcase */}
      <SelectedProjectsSection />

      {/* Technical Tooling & Competencies Continuous Marquee + Insights */}
      <SkillsSection />

      {/* Competitive Hackathon Achievements & Honors (Liquid Glassmorphism) */}
      <AchievementsSection />

      {/* Interactive Contact & Direct Channels */}
      <ContactSection />

      {/* Cybernetic Footer */}
      <Footer />
    </main>
  );
}
