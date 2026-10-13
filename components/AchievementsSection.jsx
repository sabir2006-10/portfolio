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
        "rgba(254, 240, 138, ", // Gold
        "rgba(167, 243, 208, ", // Mint
        "rgba(103, 232, 249, ", // Cyan
        "rgba(196, 181, 253, "  // Lilac
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
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 bg-[#06040d] text-white flex flex-col items-center border-t border-white/10 overflow-hidden z-20"
      aria-label="Achievements and Hackathon Accolades"
    >
      {/* Background Ambient Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-75"
        aria-hidden="true"
      />

      {/* Radiant Ambient Liquid Backdrop */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[55vh] bg-[radial-gradient(ellipse_at_center,rgba(254,240,138,0.1)_0%,rgba(167,243,208,0.08)_30%,rgba(103,232,249,0.06)_60%,transparent_75%)] blur-[95px] pointer-events-none z-[2]"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(254,240,138,0.08)] border border-[rgba(254,240,138,0.3)] mb-3 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#fef08a] shadow-[0_0_10px_#fef08a] animate-pulse" />
          <span className="font-mono text-xs font-bold text-[#fef08a] tracking-wider uppercase">
            HONORS & COMPETITIVE SPRINT PODIUMS
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-[#fef08a] to-[#a7f3d0] bg-clip-text text-transparent mb-3.5">
          HACKATHON ACHIEVEMENTS
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
          High-velocity engineering under real-time constraints. Recognized on the podium for architecture, execution, and rapid product delivery.
        </p>
      </div>

      {/* Liquid Glass Showcase Layout */}
      <div className="relative w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        {/* Left: 3D Liquid Glass Certificate & Medals Showcase Card */}
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
            className="group relative w-full rounded-[28px] p-2.5 sm:p-3 bg-[rgba(15,10,30,0.65)] backdrop-blur-3xl border border-white/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_45px_rgba(254,240,138,0.12)] cursor-pointer will-change-transform overflow-hidden transition-all duration-300 hover:border-white/40"
          >
            {/* Liquid Flowing Iridescent Border Rim */}
            <div className="absolute inset-0 rounded-[28px] p-[1.5px] pointer-events-none z-[4] opacity-80 bg-gradient-to-br from-[#fef08a]/60 via-[#a7f3d0]/60 to-[#67e8f9]/60 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />

            {/* Specular Liquid Cursor Sheen */}
            <div
              style={{
                background: `radial-gradient(circle 320px at ${mouseTilt.shineX}% ${mouseTilt.shineY}%, rgba(255,255,255,0.22), transparent 70%)`
              }}
              className="absolute inset-0 rounded-[28px] pointer-events-none z-[3] transition-opacity duration-300"
            />

            {/* Image Stage Container */}
            <div className="relative w-full rounded-[22px] overflow-hidden bg-black/40 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/achievements/impactathon-hackathon-2nd-runnerup.jpg"
                alt="Impact-a-thon X AMS 24-Hour Hackathon 2nd Runner-Up Certificates and Medals - Syed Sabirudeen B"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Liquid Gloss Sheen Bar */}
              <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none z-[1]" />

              {/* Floating Liquid Glass Podium Badge */}
              <div className="absolute top-4 left-4 z-[5] inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(10,8,20,0.82)] border border-[rgba(254,240,138,0.4)] backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#fef08a] animate-ping" />
                <span className="font-mono text-xs font-black tracking-wider text-[#fef08a]">
                  🥈 2ND RUNNER-UP
                </span>
                <span className="text-white/40">·</span>
                <span className="font-mono text-[11px] font-bold text-white/80">
                  PODIUM FINISH
                </span>
              </div>

              {/* Click to Zoom Hint Pill */}
              <div className="absolute bottom-4 right-4 z-[5] inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 border border-white/20 backdrop-blur-md opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all text-xs font-mono font-bold text-white">
                <span>🔍 Click to inspect certificates</span>
                <span className="text-[#67e8f9]">↗</span>
              </div>

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-[2]" />
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3.5 pb-1 px-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                <span className="font-mono text-xs font-bold text-white/90">
                  Official Verification: Verified Hackathon Certificate & Gold Honors Medal
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#fef08a]">
                Sept 2025
              </span>
            </div>
          </div>
        </div>

        {/* Right: Liquid Glass Telemetry & Narrative Breakdown */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Main Award Glass Card */}
          <div className="relative rounded-[26px] p-6 sm:p-7 bg-[rgba(16,12,32,0.68)] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-4 overflow-hidden">
            {/* Iridescent Accent Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[radial-gradient(circle,#fef08a_0%,transparent_70%)] blur-[40px] opacity-25 pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold text-[#67e8f9] tracking-widest uppercase bg-[#67e8f9]/10 px-3 py-1 rounded-full border border-[#67e8f9]/20">
                24-HOUR HACKATHON
              </span>

              <span className="font-mono text-xs text-white/50">
                Sept 22–23, 2025
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2">
                IMPACT-A-THON X AMS
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Awarded <span className="text-[#fef08a] font-bold">Second Runner-Up</span> in an intensive 24-hour hackathon organized by{" "}
                <span className="text-white font-bold">The Impacteers</span> in collaboration with{" "}
                <span className="text-white font-bold">Aalim Muhammed Salegh College of Engineering (AMS)</span>.
              </p>
            </div>

            {/* Metric Capsules Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur flex flex-col gap-0.5">
                <span className="font-mono text-[10px] text-white/50 uppercase">SPRINT DURATION</span>
                <span className="text-lg font-black text-[#a7f3d0]">24 Hours</span>
                <span className="text-[10px] text-white/60">Non-stop sprint</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur flex flex-col gap-0.5">
                <span className="font-mono text-[10px] text-white/50 uppercase">PODIUM RANK</span>
                <span className="text-lg font-black text-[#fef08a]">2nd Runner-Up</span>
                <span className="text-[10px] text-white/60">Top tier distinction</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur flex flex-col gap-0.5">
                <span className="font-mono text-[10px] text-white/50 uppercase">CONDUCTED BY</span>
                <span className="text-base font-black text-[#67e8f9]">The Impacteers</span>
                <span className="text-[10px] text-white/60">Find Your Calling</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur flex flex-col gap-0.5">
                <span className="font-mono text-[10px] text-white/50 uppercase">VENUE PARTNER</span>
                <span className="text-base font-black text-[#c4b5fd]">AMS College</span>
                <span className="text-[10px] text-white/60">College of Engineering</span>
              </div>
            </div>
          </div>

          {/* Team & Collaboration Liquid Glass Capsule */}
          <div className="relative rounded-[26px] p-6 bg-[rgba(16,12,32,0.68)] backdrop-blur-2xl border border-white/15 shadow-xl flex flex-col gap-3.5">
            <h4 className="font-mono text-xs font-bold text-[#a7f3d0] tracking-wider uppercase flex items-center gap-2">
              <span>👥</span>
              <span>AWARD RECIPIENTS & TEAM PODIUM</span>
            </h4>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#fef08a]/20 border border-[#fef08a]/40 flex items-center justify-center text-xs font-bold text-[#fef08a]">
                    ★
                  </span>
                  <span className="font-mono text-xs font-bold text-white">
                    SYED SABIRUDEEN B
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-[#a7f3d0] bg-[#a7f3d0]/10 px-2 py-0.5 rounded border border-[#a7f3d0]/25">
                  LEAD & ARCHITECTURE
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">
                    •
                  </span>
                  <span className="font-mono text-xs font-bold text-white/80">
                    SYED SAMEER S
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50">
                  CORE CONTRIBUTOR
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">
                    •
                  </span>
                  <span className="font-mono text-xs font-bold text-white/80">
                    SYED RIZWAN A
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50">
                  CORE CONTRIBUTOR
                </span>
              </div>
            </div>

            {/* Technical Execution Note */}
            <p className="text-xs text-white/70 leading-relaxed border-t border-white/10 pt-3">
              Delivered a complete full-stack working solution from scratch within 24 continuous hours, incorporating rapid architectural prototyping, resilient data models, and high-fidelity user experience praised by the jury.
            </p>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN LIQUID GLASS LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Lightbox"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] rounded-[28px] bg-[rgba(10,8,22,0.85)] border border-white/25 p-4 sm:p-6 shadow-[0_30px_120px_rgba(0,0,0,0.98)] flex flex-col gap-4 overflow-hidden"
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#fef08a] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-sm font-bold text-white truncate max-w-[180px] sm:max-w-none">
                  IMPACT-A-THON X AMS 2025 · 2ND RUNNER-UP CERTIFICATES & MEDALS
                </span>
              </div>

              {/* Close Button on Header */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#fda4af] hover:text-black border border-white/20 hover:border-[#fda4af] text-white font-mono text-xs font-bold transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
                aria-label="Close Lightbox"
              >
                <span>Close</span>
                <span className="w-5 h-5 rounded-full bg-white/15 group-hover:bg-black/20 flex items-center justify-center text-xs group-hover:rotate-90 transition-transform">
                  ✕
                </span>
              </button>
            </div>

            {/* Zoomable Image View with Floating Close Button Inside */}
            <div className="relative w-full flex-1 max-h-[75vh] rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center">
              {/* Floating Close / Exit Symbol Directly Inside the Certificate */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="group absolute top-4 right-4 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 hover:bg-[#fda4af] hover:text-black border border-white/30 hover:border-[#fda4af] backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.95)] text-white text-xs font-mono font-bold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Exit Certificate View"
                title="Click to exit certificate"
              >
                <span>Exit Certificate</span>
                <span className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-black/20 flex items-center justify-center text-xs font-black group-hover:rotate-90 transition-transform">
                  ✕
                </span>
              </button>

              <img
                src="/images/achievements/impactathon-hackathon-2nd-runnerup.jpg"
                alt="High-resolution certificate and medals - Syed Sabirudeen B"
                className="max-w-full max-h-[74vh] object-contain rounded-xl"
              />
            </div>

            {/* Bottom Lightbox Caption & Exit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 px-2 text-xs font-mono text-white/70">
              <span>Presented to Syed Sabirudeen B, Syed Sameer S & Syed Rizwan A</span>
              <div className="flex items-center gap-3">
                <span className="text-[#a7f3d0]">September 22nd & 23rd, 2025 · Verified Honors</span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="px-3.5 py-1 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-[#fda4af] text-white hover:text-[#fda4af] font-mono text-xs font-bold transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5"
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
