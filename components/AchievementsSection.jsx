"use client";

import React, { useState, useRef, useEffect } from "react";

export default function AchievementsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });
  const [activeTab, setActiveTab] = useState("overview");

  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Keyboard Escape for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  // Ambient Floating Canvas (Liquid Particles & Gold Shimmer)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let w = (canvas.width = canvas.offsetWidth || 1200);
    let h = (canvas.height = canvas.offsetHeight || 800);

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth || window.innerWidth;
      h = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const orbs = Array.from({ length: 45 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 20 + Math.random() * 60,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: 0.08 + Math.random() * 0.14,
      color: [
        "rgba(251, 191, 36, ",  // Starlight Gold
        "rgba(0, 240, 255, ",   // Electric Cyan
        "rgba(99, 102, 241, ",  // Ultraviolet
        "rgba(232, 121, 249, "  // Celestial Orchid
      ][Math.floor(Math.random() * 4)]
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.radius) orb.x = w + orb.radius;
        if (orb.x > w + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = h + orb.radius;
        if (orb.y > h + orb.radius) orb.y = -orb.radius;

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        grad.addColorStop(0, orb.color + orb.alpha + ")");
        grad.addColorStop(1, orb.color + "0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Interactive 3D Liquid Tilt & Specular Shine tracking
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    setMouseTilt({
      x: normX * 12,
      y: -normY * 12,
      shineX: (x / rect.width) * 100,
      shineY: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  };

  // Play subtle celebratory award chime
  const playAwardChime = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C Major triumph
      freqs.forEach((freq, idx) => {
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.01, audioCtxRef.current.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(
          0.12,
          audioCtxRef.current.currentTime + idx * 0.08 + 0.04
        );
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + idx * 0.08 + 0.9
        );

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);
        osc.start(audioCtxRef.current.currentTime + idx * 0.08);
        osc.stop(audioCtxRef.current.currentTime + idx * 0.08 + 0.95);
      });
    } catch (e) {}
  };

  return (
    <section
      id="achievementsSection"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 bg-[#060813] text-white flex flex-col items-center border-t border-white/10 overflow-hidden z-20"
      aria-label="Achievements and Hackathon Accolades"
    >
      {/* Background Architectural Grid & Ambient Canvas */}
      <div className="absolute inset-0 bg-grid-architectural opacity-30 pointer-events-none z-0" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-70"
        aria-hidden="true"
      />

      {/* Radiant Ambient Liquid Backdrop - Video-Derived Gold, Ultraviolet & Cyan */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[55vh] bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.1)_0%,rgba(99,102,241,0.06)_35%,rgba(0,240,255,0.04)_65%,transparent_75%)] blur-[95px] pointer-events-none z-[2]"
        aria-hidden="true"
      />

      {/* Header - Monumental Commemorative Masthead */}
      <div className="text-center max-w-3xl mb-10 sm:mb-14 relative z-10 px-2">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#080c1f]/95 border border-[#fbbf24] mb-3 shadow-[2px_2px_0px_0px_#fbbf24]">
          <span className="w-2 h-2 rounded-none bg-[#fbbf24] animate-pulse" />
          <span className="font-mono text-xs font-black text-[#fbbf24] tracking-wider uppercase">
            HONORS & COMPETITIVE SPRINT PODIUMS
          </span>
          <span className="text-white/40">//</span>
          <span className="font-mono text-[10px] text-white/60">VERIFIED ARCHIVE</span>
        </div>

        <h2
          style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white uppercase mb-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
        >
          HACKATHON ACHIEVEMENTS
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-white/75 max-w-xl mx-auto leading-relaxed">
          High-velocity engineering under real-time constraints. Recognized on the podium for architecture, execution, and rapid product delivery.
        </p>
      </div>

      {/* Liquid Glass Showcase Layout */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center z-10">
        {/* Left: 3D Neo-Brutalist Certificate & Medals Showcase Card */}
        <div
          className="lg:col-span-7 flex flex-col items-center [perspective:1200px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            onClick={() => {
              playAwardChime();
              setLightboxOpen(true);
            }}
            style={{
              transform: `rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
              transition: "transform 0.15s ease-out, box-shadow 0.3s ease"
            }}
            className="group relative w-full p-3 bg-[#080c1f] border-2 border-[#fbbf24] shadow-[8px_8px_0px_0px_#fbbf24,0_30px_90px_-20px_rgba(0,0,0,0.98)] cursor-pointer will-change-transform overflow-hidden transition-all duration-300 hover:border-white"
          >
            {/* Corner Registration Crosshairs */}
            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white pointer-events-none z-10" />
            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-white pointer-events-none z-10" />
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-white pointer-events-none z-10" />
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white pointer-events-none z-10" />

            {/* Specular Liquid Cursor Sheen */}
            <div
              style={{
                background: `radial-gradient(circle 320px at ${mouseTilt.shineX}% ${mouseTilt.shineY}%, rgba(251,191,36,0.22), transparent 70%)`
              }}
              className="absolute inset-0 pointer-events-none z-[3] transition-opacity duration-300"
            />

            {/* Image Stage Container */}
            <div className="relative w-full overflow-hidden bg-black/60 border border-white/20 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/achievements/impactathon-hackathon-2nd-runnerup.jpg"
                alt="Impact-a-thon X AMS 24-Hour Hackathon 2nd Runner-Up Certificates and Medals - Syed Sabirudeen B"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Scanline Overlay */}
              <div className="absolute inset-0 opacity-20 scanline-overlay pointer-events-none z-[2]" />

              {/* Floating Liquid Glass Podium Badge - Neo-Brutalist Trophy Tag */}
              <div className="absolute top-4 left-4 z-[5] inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/95 border-2 border-[#fbbf24] shadow-[3px_3px_0px_0px_#fbbf24]">
                <span className="w-2 h-2 rounded-none bg-[#fbbf24] animate-ping" />
                <span className="font-mono text-xs font-black tracking-wider text-[#fbbf24]">
                  🥈 2ND RUNNER-UP
                </span>
                <span className="text-white/40">·</span>
                <span className="font-mono text-[11px] font-bold text-white">
                  PODIUM FINISH
                </span>
              </div>

              {/* Click to Zoom Hint Pill - Tactile Inspection Button */}
              <div className="absolute bottom-4 right-4 z-[5] inline-flex items-center gap-2 px-3.5 py-2 bg-black/90 border border-white/40 group-hover:border-[#fbbf24] text-xs font-mono font-black text-white group-hover:text-[#fbbf24] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                <span>🔍 Click to inspect certificates</span>
                <span className="text-[#fbbf24]">↗</span>
              </div>

              {/* Bottom Subtle Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-[2]" />
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3 pb-1 px-2 flex items-center justify-between font-mono text-[11px] sm:text-xs gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 bg-[#00f0ff] animate-pulse shrink-0" />
                <span className="font-bold text-white/90 truncate max-w-[210px] sm:max-w-none">
                  Official Verification: Verified Hackathon Certificate & Gold Honors Medal
                </span>
              </div>
              <span className="font-black text-[#fbbf24] bg-black/80 px-2 py-0.5 border border-[#fbbf24]/40 shrink-0">
                Sept 2025
              </span>
            </div>
          </div>
        </div>

        {/* Right: Architectural Telemetry & Narrative Breakdown */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Main Award Dossier Card */}
          <div className="relative p-6 sm:p-7 bg-[#0b0f24] border border-white/15 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] flex flex-col gap-4 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="font-mono text-[11px] font-black text-black bg-[#fbbf24] px-3 py-1 uppercase shadow-[2px_2px_0px_0px_#ffffff]">
                24-HOUR HACKATHON
              </span>

              <span className="font-mono text-xs font-bold text-white/60">
                Sept 22–23, 2025
              </span>
            </div>

            <div>
              <h3
                style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
                className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2 uppercase"
              >
                IMPACT-A-THON X AMS
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Awarded <span className="text-[#fbbf24] font-black border-b border-[#fbbf24]/50">Second Runner-Up</span> in an intensive 24-hour hackathon organized by{" "}
                <span className="text-white font-black">The Impacteers</span> in collaboration with{" "}
                <span className="text-white font-black">Aalim Muhammed Salegh College of Engineering (AMS)</span>.
              </p>
            </div>

            {/* Metric Capsules Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-[#080c1f] border border-white/15 flex flex-col gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]">
                <span className="font-mono text-[10px] text-white/50 uppercase font-bold">SPRINT DURATION</span>
                <span className="text-lg font-mono font-black text-[#00f0ff]">24 Hours</span>
                <span className="text-[10px] text-white/60">Non-stop sprint</span>
              </div>

              <div className="p-3.5 bg-[#080c1f] border border-white/15 flex flex-col gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]">
                <span className="font-mono text-[10px] text-white/50 uppercase font-bold">PODIUM RANK</span>
                <span className="text-lg font-mono font-black text-[#fbbf24]">2nd Runner-Up</span>
                <span className="text-[10px] text-white/60">Top tier distinction</span>
              </div>

              <div className="p-3.5 bg-[#080c1f] border border-white/15 flex flex-col gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]">
                <span className="font-mono text-[10px] text-white/50 uppercase font-bold">CONDUCTED BY</span>
                <span className="text-base font-mono font-black text-[#00f0ff]">The Impacteers</span>
                <span className="text-[10px] text-white/60">Find Your Calling</span>
              </div>

              <div className="p-3.5 bg-[#080c1f] border border-white/15 flex flex-col gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]">
                <span className="font-mono text-[10px] text-white/50 uppercase font-bold">VENUE PARTNER</span>
                <span className="text-base font-mono font-black text-[#818cf8]">AMS College</span>
                <span className="text-[10px] text-white/60">College of Engineering</span>
              </div>
            </div>
          </div>

          {/* Team & Collaboration Capsule */}
          <div className="relative p-6 bg-[#0b0f24] border border-white/15 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] flex flex-col gap-3.5">
            <h4 className="font-mono text-xs font-black text-[#fbbf24] tracking-wider uppercase flex items-center gap-2">
              <span>👥</span>
              <span>AWARD RECIPIENTS & TEAM PODIUM</span>
            </h4>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between p-3 bg-[#080c1f] border border-white/15">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 bg-[#fbbf24] text-black font-black flex items-center justify-center text-xs">
                    ★
                  </span>
                  <span className="font-mono text-xs font-black text-white">
                    SYED SABIRUDEEN B
                  </span>
                </div>
                <span className="font-mono text-[10px] font-black text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 border border-[#00f0ff]/40">
                  LEAD & ARCHITECTURE
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#080c1f] border border-white/15">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 bg-white/10 text-white/80 font-bold flex items-center justify-center text-xs">
                    •
                  </span>
                  <span className="font-mono text-xs font-bold text-white/90">
                    SYED SAMEER S
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50 font-bold">
                  CORE CONTRIBUTOR
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#080c1f] border border-white/15">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 bg-white/10 text-white/80 font-bold flex items-center justify-center text-xs">
                    •
                  </span>
                  <span className="font-mono text-xs font-bold text-white/90">
                    SYED RIZWAN A
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50 font-bold">
                  CORE CONTRIBUTOR
                </span>
              </div>
            </div>

            {/* Technical Execution Note */}
            <p className="font-sans text-xs text-white/75 leading-relaxed border-t border-white/15 pt-3">
              Delivered a complete full-stack working solution from scratch within 24 continuous hours, incorporating rapid architectural prototyping, resilient data models, and high-fidelity user experience praised by the jury.
            </p>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN ARCHITECTURAL LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex items-center justify-center p-3 sm:p-8 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Lightbox"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#080c1f] border-2 border-[#fbbf24] p-4 sm:p-6 shadow-[14px_14px_0px_0px_rgba(0,0,0,0.98),0_0_80px_rgba(251,191,36,0.25)] flex flex-col gap-4 overflow-hidden"
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-none bg-[#fbbf24] shadow-[0_0_10px_#fbbf24] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-sm font-black text-white truncate max-w-[200px] sm:max-w-none">
                  IMPACT-A-THON X AMS 2025 · 2ND RUNNER-UP CERTIFICATES & MEDALS
                </span>
              </div>

              {/* Close Button on Header */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="group inline-flex items-center gap-2 px-4 py-1.5 bg-[#111634] hover:bg-[#00f0ff] hover:text-black border-2 border-white/30 hover:border-black text-white font-mono text-xs font-black transition-all duration-150 cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
                aria-label="Close Lightbox"
              >
                <span>Close</span>
                <span className="group-hover:rotate-90 transition-transform">
                  ✕
                </span>
              </button>
            </div>

            {/* Zoomable Image View with Floating Close Button Inside */}
            <div className="relative w-full flex-1 max-h-[75vh] overflow-hidden bg-black/90 border border-white/20 flex items-center justify-center">
              {/* Floating Close / Exit Symbol Directly Inside the Certificate */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="group absolute top-4 right-4 z-20 inline-flex items-center gap-2 px-4 py-2 bg-black/90 hover:bg-[#00f0ff] hover:text-black border-2 border-white/40 hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.95)] text-white text-xs font-mono font-black transition-all duration-150 cursor-pointer"
                aria-label="Exit Certificate View"
                title="Click to exit certificate"
              >
                <span>Exit Certificate</span>
                <span className="group-hover:rotate-90 transition-transform">
                  ✕
                </span>
              </button>

              <img
                src="/images/achievements/impactathon-hackathon-2nd-runnerup.jpg"
                alt="High-resolution certificate and medals - Syed Sabirudeen B"
                className="max-w-full max-h-[74vh] object-contain"
              />
            </div>

            {/* Bottom Lightbox Caption & Exit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 px-2 text-xs font-mono text-white/75">
              <span>Presented to Syed Sabirudeen B, Syed Sameer S & Syed Rizwan A</span>
              <div className="flex items-center gap-3">
                <span className="text-[#fbbf24] font-bold">September 22nd & 23rd, 2025 · Verified Honors</span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="px-3.5 py-1 bg-white/10 hover:bg-[#00f0ff] hover:text-black border border-white/25 hover:border-black text-white font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Exit Certificate</span>
                  <span>✕</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
