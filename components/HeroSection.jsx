"use client";

import React, { useEffect, useRef } from "react";

const FRAME_COUNT = 40;

export default function HeroSection() {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const heroFrameRef = useRef(null);
  const blushBackdropRef = useRef(null);
  const exploreTextRef = useRef(null);
  const heroContentRef = useRef(null);
  const frameCounterRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = new Array(FRAME_COUNT);
    const isLoaded = new Array(FRAME_COUNT).fill(false);
    let isDisposed = false;

    let targetProgress = 0;
    let currentProgress = 0;
    let currentDrawnIndex = -1;
    let animId = null;
    let animTime = 0;

    // Draw specific frame index with cover ratio
    const drawFrame = (frameIndex) => {
      let img = images[frameIndex];
      const isActual = isLoaded[frameIndex] && img && img.complete && img.naturalWidth > 0;

      // Fallback search to guarantee the canvas is never black
      if (!isActual) {
        for (let off = 1; off < FRAME_COUNT; off++) {
          const prev = frameIndex - off;
          if (prev >= 0 && isLoaded[prev] && images[prev].complete && images[prev].naturalWidth > 0) {
            img = images[prev];
            break;
          }
          const next = frameIndex + off;
          if (next < FRAME_COUNT && isLoaded[next] && images[next].complete && images[next].naturalWidth > 0) {
            img = images[next];
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 1280;
      const ih = img.naturalHeight || 720;

      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const nx = (cw - nw) / 2;
      const ny = (ch - nh) / 2;

      ctx.drawImage(img, 0, 0, iw, ih, nx, ny, nw, nh);
      currentDrawnIndex = frameIndex;

      // Update frame telemetry directly without triggering React re-renders
      if (frameCounterRef.current) {
        frameCounterRef.current.textContent = String(frameIndex + 1).padStart(2, "0");
      }
    };

    // Preload all 40 frames into memory
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const num = String(i + 1).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${num}.jpg`;

      img.onload = () => {
        if (isDisposed) return;
        isLoaded[i] = true;

        // Draw first frame immediately once loaded
        if (i === 0 && currentDrawnIndex === -1) {
          drawFrame(0);
        }
      };
      images[i] = img;
    }

    // High-DPI canvas sizing
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      if (currentDrawnIndex >= 0) {
        drawFrame(currentDrawnIndex);
      } else {
        drawFrame(0);
      }
    };

    // -----------------------------------------------------------------
    // TIMELINE CONTROLLER:
    // 1. STAGE 1 (0.00 to 0.60): Entire 40 frames play from start to finish!
    // 2. STAGE 2 (0.60 to 0.80): Pauses on Frame 40, Hero Profile blooms in!
    // 3. STAGE 3 (0.80 to 0.98): Closes small for Hero Exit!
    // 4. STAGE 4 (0.98 to 1.00+): Hands off into Selected Projects!
    // -----------------------------------------------------------------
    const updateOverlaysAndTransforms = (prog, time) => {
      // --- STAGE 1: Video Playback (Frames 0 to 39) ---
      let targetFrame = 0;
      if (prog <= 0.60) {
        const videoRatio = Math.min(1.0, Math.max(0.0, prog / 0.60));
        targetFrame = Math.min(FRAME_COUNT - 1, Math.floor(videoRatio * FRAME_COUNT));
      } else {
        // Paused on Frame 40 (index 39) for stages 2, 3 and exit!
        targetFrame = FRAME_COUNT - 1;
      }

      if (targetFrame !== currentDrawnIndex) {
        drawFrame(targetFrame);
      }

      // --- Typography: "Let's Explore" (Right Side Bottom with Slight Upward and Downward Motion) ---
      if (exploreTextRef.current) {
        if (prog < 0.50) {
          // Slight upward and downward bobbing motion (±8px)
          const floatBob = Math.sin(time * 0.0028) * 8;

          exploreTextRef.current.style.opacity = "1";
          exploreTextRef.current.style.filter = "blur(0px)";
          exploreTextRef.current.style.transform = `translate3d(0, ${floatBob.toFixed(1)}px, 0)`;
        } else if (prog >= 0.50 && prog < 0.58) {
          // As Frame 40 arrives and hero profile blooms, gently fade out with soft blur
          const fadeRatio = (prog - 0.50) / (0.58 - 0.50);
          const opacity = Math.max(0, 1 - fadeRatio);
          const blurVal = fadeRatio * 10;
          const floatBob = Math.sin(time * 0.0028) * 8;
          const yShift = floatBob + fadeRatio * 15;

          exploreTextRef.current.style.opacity = opacity.toFixed(3);
          exploreTextRef.current.style.filter = `blur(${blurVal.toFixed(1)}px)`;
          exploreTextRef.current.style.transform = `translate3d(0, ${yShift.toFixed(1)}px, 0)`;
        } else {
          // Fully hidden while hero profile ("SYED SABIRUDEEN B") is displayed
          exploreTextRef.current.style.opacity = "0";
          exploreTextRef.current.style.filter = "blur(16px)";
        }
      }

      // --- STAGE 2: Hero Profile Bloom (Paused on Frame 40, 0.60 to 0.80) ---
      if (heroContentRef.current) {
        if (prog < 0.58) {
          heroContentRef.current.style.opacity = "0";
          heroContentRef.current.style.pointerEvents = "none";
          heroContentRef.current.style.transform = "translate3d(0, 20px, 0)";
        } else if (prog >= 0.58 && prog <= 0.80) {
          const enterFactor = Math.min(1.0, (prog - 0.58) / 0.10);
          const yShift = (1 - enterFactor) * 18;
          heroContentRef.current.style.opacity = enterFactor.toFixed(3);
          heroContentRef.current.style.pointerEvents = enterFactor > 0.6 ? "auto" : "none";
          heroContentRef.current.style.transform = `translate3d(0, ${yShift.toFixed(1)}px, 0)`;
        } else {
          // Exiting in Stage 3: lifts up and fades out
          const exitProg = (prog - 0.80) / (0.98 - 0.80);
          const exitFade = Math.max(0, 1 - exitProg * 1.5);
          const yShift = -exitProg * 35;

          heroContentRef.current.style.opacity = exitFade.toFixed(3);
          heroContentRef.current.style.pointerEvents = exitFade > 0.2 ? "auto" : "none";
          heroContentRef.current.style.transform = `translate3d(0, ${yShift.toFixed(1)}px, 0)`;
        }
      }

      // --- STAGE 3: Closes Small for Hero Exit (0.80 to 0.98) ---
      if (heroFrameRef.current && blushBackdropRef.current) {
        if (prog < 0.80) {
          heroFrameRef.current.style.transform = "translate3d(0, 0, 0) scale(1)";
          heroFrameRef.current.style.borderRadius = "0px";
          heroFrameRef.current.style.boxShadow = "none";
          blushBackdropRef.current.style.opacity = "0";
        } else {
          // Closes small: scales down from 1.0 down to 0.76, curves corners to 38px
          const exitRatio = Math.min(1.0, (prog - 0.80) / (0.98 - 0.80));
          const scale = 1.0 - exitRatio * 0.24; // 1.0 -> 0.76
          const radius = Math.round(exitRatio * 38); // 0px -> 38px
          const translateY = -exitRatio * 65; // lifts upward
          const shadowAlpha = (exitRatio * 0.55).toFixed(2);
          const roseAlpha = (exitRatio * 0.35).toFixed(2);

          heroFrameRef.current.style.transform = `translate3d(0, ${translateY.toFixed(
            1
          )}px, 0) scale(${scale.toFixed(3)})`;
          heroFrameRef.current.style.borderRadius = `${radius}px`;
          heroFrameRef.current.style.boxShadow = `0 30px 100px -15px rgba(196, 181, 253, ${shadowAlpha}), 0 0 50px rgba(253, 164, 175, ${roseAlpha}), inset 0 0 0 1px rgba(255, 255, 255, 0.25)`;
          blushBackdropRef.current.style.opacity = (exitRatio * 0.95).toFixed(2);
        }
      }
    };

    const updateScrollProgress = () => {
      if (!trackRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const heroHeight = trackRef.current.offsetHeight - window.innerHeight;
      targetProgress = Math.min(1.0, Math.max(0.0, scrollY / Math.max(heroHeight, 1)));
    };

    // Smooth fluid LERP animation loop with continuous time clock
    const tick = () => {
      animTime += 16;
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0001) {
        currentProgress += diff * 0.16;
      } else {
        currentProgress = targetProgress;
      }

      updateOverlaysAndTransforms(currentProgress, animTime);
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    updateScrollProgress();
    currentProgress = targetProgress;
    updateOverlaysAndTransforms(currentProgress, 0);

    animId = requestAnimationFrame(tick);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projectsSection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={trackRef}
      id="heroScrollTrack"
      className="relative w-full bg-[#020617]"
      style={{ height: "600vh" }}
      aria-label="Interactive Hero Showcase"
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Pale Blush Atmosphere Behind Framed Artifact */}
        <div
          ref={blushBackdropRef}
          className="absolute inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_50%_35%,rgba(253,164,175,0.25)_0%,rgba(196,181,253,0.2)_45%,rgba(5,4,10,0.95)_85%)]"
        />

        {/* Video / Canvas Frame Container with Center Transform Origin */}
        <div
          ref={heroFrameRef}
          className="relative w-full h-full overflow-hidden z-10 will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <canvas
            ref={canvasRef}
            id="heroCanvas"
            className="absolute inset-0 w-full h-full block pointer-events-none"
          />

          {/* Vignette Depth Gradient */}
          <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_50%_50%,rgba(2,6,23,0)_40%,rgba(2,6,23,0.5)_75%,rgba(2,6,23,0.9)_100%)]" />
        </div>

        {/* "Let's Explore" Floating Typography at Right Side Bottom */}
        <div
          ref={exploreTextRef}
          className="absolute right-6 sm:right-10 lg:right-14 bottom-8 sm:bottom-10 lg:bottom-12 flex flex-col items-end z-30 pointer-events-none select-none will-change-transform"
        >
          <div className="flex flex-col items-end text-right">
            {/* Ambient Glowing Action Pill: Always Visible Below Navbar */}
            <button
              onClick={scrollToProjects}
              className="group pointer-events-auto cursor-pointer inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-[#67e8f9]/60 backdrop-blur-md mb-2.5 shadow-[0_0_20px_rgba(103,232,249,0.35)] transition-all duration-300 hover:scale-105"
              aria-label="Scroll down to explore projects"
              title="Click to scroll down"
            >
              <span className="w-2 h-2 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9] animate-ping" />
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#a7f3d0] uppercase">
                SCROLL DOWN TO EXPLORE
              </span>
              <span className="text-[#67e8f9] font-bold transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </button>

            {/* Stacked Large Display Typography */}
            <span className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl xl:text-9xl tracking-tight leading-none bg-gradient-to-r from-white via-[#a7f3d0] to-[#67e8f9] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(167,243,208,0.35)]">
              Let's
            </span>
            <span className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl xl:text-9xl tracking-tight leading-none bg-gradient-to-r from-[#67e8f9] via-[#c4b5fd] to-[#fda4af] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(196,181,253,0.35)]">
              Explore
            </span>

            {/* Subtle Gradient Accent Bar */}
            <div className="w-20 sm:w-24 h-1 rounded-full bg-gradient-to-r from-[#67e8f9] via-[#c4b5fd] to-[#fda4af] mt-3 sm:mt-3.5 shadow-[0_0_15px_#67e8f9]" />
          </div>
        </div>

        {/* Hero Profile Bloom (Reveals at Frame 40, Generous Top Clearance Below Navbar) */}
        <div
          ref={heroContentRef}
          className="absolute inset-0 z-40 flex items-center justify-between px-5 sm:px-12 lg:px-20 pt-24 sm:pt-28 lg:pt-32 pb-8 pointer-events-none opacity-0 transition-opacity duration-300"
        >
          <div className="max-w-3xl lg:max-w-4xl flex flex-col items-start gap-3.5 sm:gap-4 pointer-events-auto">
            {/* Eyebrow with Clear Navbar Clearance */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_10px_#a7f3d0] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#a7f3d0] uppercase">
                COMPUTER SCIENCE ENGINEERING
              </span>
            </div>

            {/* Name Heading: Single Line Guaranteed Across All Displays */}
            <h1 className="font-sans font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-none whitespace-nowrap bg-gradient-to-r from-white via-[#c4b5fd] via-[#67e8f9] to-[#a7f3d0] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] select-none">
              SYED SABIRUDEEN B
            </h1>

            {/* Subtitle with High-Tech Cursor Pulse */}
            <h2 className="font-sans text-sm sm:text-xl lg:text-2xl font-bold text-white/95 flex flex-wrap items-center gap-2">
              <span>Architecting fluid web, 3D spatial & AI platforms.</span>
              <span className="inline-block w-2 h-3.5 sm:h-5 bg-[#67e8f9] animate-pulse" />
            </h2>

            {/* Animated Interactive Role Badges */}
            <div className="flex flex-wrap gap-2.5 my-0.5">
              <div className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#67e8f9]/50 backdrop-blur-md text-xs font-semibold text-white/90 transition-all duration-300 hover:scale-105 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9] group-hover:scale-125 transition-transform" />
                <span>Web Architecture & Systems</span>
              </div>
              <div className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#a7f3d0]/50 backdrop-blur-md text-xs font-semibold text-white/90 transition-all duration-300 hover:scale-105 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] group-hover:scale-125 transition-transform" />
                <span>Mobile & Spatial 3D</span>
              </div>
              <div className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#fda4af]/50 backdrop-blur-md text-xs font-semibold text-white/90 transition-all duration-300 hover:scale-105 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#fda4af] shadow-[0_0_8px_#fda4af] group-hover:scale-125 transition-transform" />
                <span>Agentic AI & Neural Pipelines</span>
              </div>
            </div>

            {/* Description Text */}
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              Exploring the intersection of{" "}
              <span className="text-[#67e8f9] font-bold">fluid reactive interfaces</span>,{" "}
              <span className="text-[#a7f3d0] font-bold">3D spatial graphics</span>, and{" "}
              <span className="text-[#c4b5fd] font-bold">autonomous agent systems</span>. Driven by rapid prototyping and zero-failure engineering.
            </p>

            {/* Interactive Animated Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-1.5">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-sans text-sm font-bold text-black bg-gradient-to-r from-[#a7f3d0] via-[#67e8f9] to-[#c4b5fd] shadow-[0_0_25px_rgba(103,232,249,0.45)] hover:shadow-[0_0_40px_rgba(103,232,249,0.7)] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">View 3D Projects</span>
                <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
                {/* Specular button sheen animation */}
                <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
              </button>

              <a
                href="#contactSection"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#67e8f9] backdrop-blur-xl transition-all duration-300 hover:scale-105 shadow-md"
              >
                <span>Let's Connect</span>
                <span className="text-white/60 group-hover:text-[#67e8f9] transition-colors">
                  ✉
                </span>
              </a>
            </div>
          </div>

          {/* Animated Cybernetic Circuit SVG with Pulsing Energy Grid */}
          <div className="hidden lg:block relative w-[360px] h-[420px] pointer-events-none select-none">
            <svg
              className="w-full h-full drop-shadow-[0_0_25px_rgba(103,232,249,0.35)]"
              viewBox="0 0 460 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>{`
                @keyframes flowTrack1 {
                  0% { stroke-dashoffset: 48; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes flowTrack2 {
                  0% { stroke-dashoffset: 0; }
                  100% { stroke-dashoffset: 48; }
                }
                @keyframes rotateCoreRing {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                .flow-dash-1 {
                  stroke-dasharray: 8 6;
                  animation: flowTrack1 2.2s linear infinite;
                }
                .flow-dash-2 {
                  stroke-dasharray: 10 7;
                  animation: flowTrack2 2.8s linear infinite;
                }
                .flow-dash-3 {
                  stroke-dasharray: 6 5;
                  animation: flowTrack1 1.6s linear infinite;
                }
                .core-ring {
                  transform-origin: 260px 250px;
                  animation: rotateCoreRing 18s linear infinite;
                }
              `}</style>

              {/* Base Circuit Traces (Static Dim Grid) */}
              <path
                d="M110 40 H280 L350 110 V220 L410 280 H440"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M30 180 H190 L260 250 H360 L410 300 V430"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M180 340 H290 L340 390 H430"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M260 80 V170 L220 210 H140"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M300 250 L350 300 H440"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Animated Flowing Laser Energy Beams */}
              <path
                d="M110 40 H280 L350 110 V220 L410 280 H440"
                stroke="url(#circuit-grad1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="flow-dash-1"
              />
              <path
                d="M30 180 H190 L260 250 H360 L410 300 V430"
                stroke="url(#circuit-grad2)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="flow-dash-2"
              />
              <path
                d="M180 340 H290 L340 390 H430"
                stroke="url(#circuit-grad1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="flow-dash-3"
              />
              <path
                d="M260 80 V170 L220 210 H140"
                stroke="url(#circuit-grad3)"
                strokeWidth="2"
                strokeLinecap="round"
                className="flow-dash-1"
              />

              {/* Central Holographic Quantum Core */}
              <g className="core-ring">
                <circle
                  cx="260"
                  cy="250"
                  r="24"
                  stroke="url(#circuit-grad1)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
              </g>

              {/* Core Chip Body */}
              <rect
                x="244"
                y="234"
                width="32"
                height="32"
                rx="8"
                fill="#0a081a"
                stroke="url(#circuit-grad1)"
                strokeWidth="2"
                filter="url(#core-glow)"
              />
              <text
                x="260"
                y="254"
                textAnchor="middle"
                fill="#67e8f9"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
              >
                SSB
              </text>

              {/* Pinging & Pulsing Junction Quantum Logic Nodes */}
              <circle cx="280" cy="40" r="5" fill="#67e8f9" className="animate-ping" />
              <circle cx="280" cy="40" r="3.5" fill="#ffffff" />

              <circle cx="350" cy="110" r="5" fill="#a7f3d0" className="animate-pulse" />
              <circle cx="350" cy="110" r="3" fill="#a7f3d0" />

              <circle cx="190" cy="180" r="4.5" fill="#c4b5fd" className="animate-ping" style={{ animationDuration: "2s" }} />
              <circle cx="190" cy="180" r="3" fill="#ffffff" />

              <circle cx="410" cy="280" r="4" fill="#67e8f9" className="animate-pulse" />
              <circle cx="410" cy="300" r="5" fill="#67e8f9" className="animate-ping" style={{ animationDuration: "2.6s" }} />

              <circle cx="340" cy="390" r="5" fill="#fda4af" className="animate-ping" style={{ animationDuration: "3.2s" }} />
              <circle cx="340" cy="390" r="3" fill="#fda4af" />

              <circle cx="140" cy="210" r="3.5" fill="#a7f3d0" className="animate-pulse" />

              {/* Circuit Micro-Labels */}
              <text x="110" y="30" fill="rgba(103,232,249,0.7)" fontSize="9" fontFamily="monospace" fontWeight="bold">
                CORE_BUS: 120FPS
              </text>
              <text x="350" y="420" fill="rgba(167,243,208,0.7)" fontSize="9" fontFamily="monospace" fontWeight="bold">
                AI_NEURAL_LINK
              </text>

              {/* Gradient Defs */}
              <defs>
                <linearGradient id="circuit-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#fda4af" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="circuit-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#67e8f9" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="circuit-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fda4af" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.9" />
                </linearGradient>
                <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#67e8f9" floodOpacity="0.6" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Real-Time Frame Sequencer Telemetry (Bottom Left) */}
        <div className="absolute bottom-6 left-8 z-30 pointer-events-none flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md font-mono text-[11px] text-white/70 tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67e8f9] animate-pulse" />
            <span>FRAME <span ref={frameCounterRef}>01</span> / 40</span>
          </div>
        </div>

        {/* Scroll Guide Beacon (Bottom Center) - Hidden on mobile for clean screen hierarchy */}
        <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-1.5 pointer-events-none opacity-60">
          <span className="font-mono text-[10px] tracking-widest uppercase text-white/70">
            Scroll to Navigate
          </span>
          <span className="w-1 h-3 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
