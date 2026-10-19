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

    let cachedHeroHeight = 0;
    const recalculateHeroHeight = () => {
      if (trackRef.current) {
        cachedHeroHeight = Math.max(1, trackRef.current.offsetHeight - window.innerHeight);
      }
    };

    const updateScrollProgress = () => {
      if (!cachedHeroHeight) recalculateHeroHeight();
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      targetProgress = Math.min(1.0, Math.max(0.0, scrollY / cachedHeroHeight));
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

    const handleResize = () => {
      recalculateHeroHeight();
      resizeCanvas();
      updateScrollProgress();
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", handleResize);

    recalculateHeroHeight();
    resizeCanvas();
    updateScrollProgress();
    currentProgress = targetProgress;
    updateOverlaysAndTransforms(currentProgress, 0);

    animId = requestAnimationFrame(tick);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", handleResize);
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
      className="relative w-full bg-[#060813]"
      style={{ height: "600vh" }}
      aria-label="Interactive Hero Showcase"
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Pale Blush Atmosphere Behind Framed Artifact - Video-Derived Nebula Glow */}
        <div
          ref={blushBackdropRef}
          className="absolute inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_50%_35%,rgba(0,240,255,0.18)_0%,rgba(99,102,241,0.16)_40%,rgba(232,121,249,0.12)_65%,rgba(6,8,19,0.98)_90%)]"
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

          {/* Architectural Vignette & Scanline Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_50%_50%,rgba(6,8,19,0)_35%,rgba(6,8,19,0.65)_70%,rgba(6,8,19,0.96)_100%)]" />
          <div className="absolute inset-0 pointer-events-none z-20 opacity-20 scanline-overlay" />
        </div>

        {/* "Let's Explore" Floating Typography at Right Side Bottom - Avant-Garde Cover Layout */}
        <div
          ref={exploreTextRef}
          className="absolute right-4 sm:right-8 lg:right-12 bottom-10 sm:bottom-12 lg:bottom-14 flex flex-col items-end z-30 pointer-events-none select-none will-change-transform"
        >
          <div className="flex flex-col items-end text-right">
            {/* Ambient Action Pill: Video-derived Holographic Clickable Pill */}
            <button
              onClick={scrollToProjects}
              className="group pointer-events-auto cursor-pointer inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/85 hover:bg-[#00f0ff] border-2 border-[#00f0ff] text-[#00f0ff] hover:text-black mb-2 sm:mb-3 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(232,121,249,0.4)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Scroll down to explore projects"
              title="Click to scroll down"
            >
              <span className="w-2 h-2 rounded-none bg-[#00f0ff] group-hover:bg-black shadow-[0_0_8px_#00f0ff] animate-ping" />
              <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-widest uppercase">
                SCROLL DOWN TO EXPLORE
              </span>
              <span className="font-bold text-xs sm:text-sm transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </button>

            {/* Architectural Coordinates Meta Tag */}
            <div className="font-mono text-[9px] sm:text-[10px] text-white/50 tracking-widest mb-1 hidden sm:block uppercase">
              [ 13.0827° N // 80.2707° E // ISSUE 2026 ]
            </div>

            {/* Monumental Avant-Garde Display Typography - Video-Derived Hologram Palette */}
            <div className="flex flex-col items-end leading-[0.88] tracking-tight">
              <span
                style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
                className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
              >
                Let's
              </span>
              <span
                style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
                className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#00f0ff] uppercase drop-shadow-[0_12px_30px_rgba(0,240,255,0.4)] -mt-1 sm:-mt-2"
              >
                Explore
              </span>
            </div>

            {/* Industrial Accent Rule & Calibration Ticks */}
            <div className="flex items-center gap-1.5 mt-2 sm:mt-3">
              <span className="font-mono text-[9px] text-[#00f0ff] font-bold">01 // 40</span>
              <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-[#00f0ff] to-[#e879f9] shadow-[0_0_10px_#00f0ff]" />
              <div className="w-2.5 h-1 bg-white" />
              <div className="w-1.5 h-1 bg-[#818cf8]" />
            </div>
          </div>
        </div>

        {/* Hero Profile Bloom (Reveals at Frame 40, Perfectly Sized & Centered with Zero Overflow) */}
        <div
          ref={heroContentRef}
          className="absolute inset-0 z-40 flex items-center justify-center px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-10 sm:pb-12 pointer-events-none opacity-0 transition-opacity duration-300"
        >
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-6 lg:gap-10 pointer-events-auto">
            {/* Left Content Column - Precision Sizing and Alignment */}
            <div className="flex-1 max-w-2xl flex flex-col items-start gap-2.5 sm:gap-3.5">
              {/* Eyebrow - Video Hologram Technical Stamp */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080c1f]/95 border border-[#00f0ff]/60 text-[#00f0ff] font-mono text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-[0_0_10px_rgba(0,240,255,0.25)]">
                <span className="w-1.5 h-1.5 bg-[#00f0ff] animate-pulse" />
                <span>COMPUTER SCIENCE ENGINEERING</span>
                <span className="text-white/40">//</span>
                <span className="text-white text-[10px]">SPEC: 2026</span>
              </div>

              {/* Name Heading: Controlled Monumental Scale with Video Cyan Accent */}
              <div className="flex flex-col gap-1 w-full">
                <h1
                  style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
                  className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.08] text-white uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] select-none"
                >
                  SYED SABIRUDEEN <span className="text-[#00f0ff]">B</span>
                </h1>
                <div className="flex items-center gap-2 w-full max-w-md">
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-[#00f0ff] via-[#818cf8] to-transparent" />
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/50 font-bold uppercase tracking-widest">
                    [ FOLIO // ARCHITECT ]
                  </span>
                </div>
              </div>

              {/* Subtitle with High-Tech Cyan Terminal Cursor */}
              <h2 className="font-mono text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white/90 leading-snug">
                <span>Architecting fluid web, 3D spatial &amp; AI platforms.</span>
                <span className="inline-block w-2 h-3.5 sm:h-4 bg-[#00f0ff] ml-2 align-middle animate-pulse shadow-[0_0_8px_#00f0ff]" />
              </h2>

              {/* Role Badges: Video-Derived Hologram Specimen Tags */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-[#0b0f24] hover:bg-[#00f0ff] hover:text-black border border-[#00f0ff]/40 font-mono text-[10px] sm:text-[11px] md:text-xs font-bold text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,240,255,0.2)] cursor-default">
                  <span className="text-[#00f0ff] font-bold">[ W.01 ]</span>
                  <span>Web Architecture & Systems</span>
                </div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-[#0b0f24] hover:bg-[#818cf8] hover:text-black border border-[#818cf8]/40 font-mono text-[10px] sm:text-[11px] md:text-xs font-bold text-white transition-all shadow-[2px_2px_0px_0px_rgba(129,140,248,0.2)] cursor-default">
                  <span className="text-[#818cf8] font-bold">[ M.02 ]</span>
                  <span>Mobile & Spatial 3D</span>
                </div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-[#0b0f24] hover:bg-[#e879f9] hover:text-black border border-[#e879f9]/40 font-mono text-[10px] sm:text-[11px] md:text-xs font-bold text-white transition-all shadow-[2px_2px_0px_0px_rgba(232,121,249,0.2)] cursor-default">
                  <span className="text-[#e879f9] font-bold">[ A.03 ]</span>
                  <span>Agentic AI & Neural Pipelines</span>
                </div>
              </div>

              {/* Description Text - Crisp, Anchored Left Border, 100% Fully Visible */}
              <p className="font-sans text-xs sm:text-sm md:text-[15px] text-white/85 leading-relaxed max-w-xl border-l-2 border-[#00f0ff] pl-3.5 py-1 bg-white/[0.02]">
                Exploring the intersection of{" "}
                <span className="text-[#00f0ff] font-semibold border-b border-[#00f0ff]/40">fluid reactive interfaces</span>,{" "}
                <span className="text-[#818cf8] font-semibold border-b border-[#818cf8]/40">3D spatial graphics</span>, and{" "}
                <span className="text-[#e879f9] font-semibold border-b border-[#e879f9]/40">autonomous agent systems</span>. Driven by rapid prototyping and zero-failure engineering.
              </p>

              {/* Action Buttons: Video-Derived Tactile Controls */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-black uppercase text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#e879f9] border border-white shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_20px_rgba(232,121,249,0.5)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10">View 3D Projects</span>
                  <span className="relative z-10 text-sm font-black transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                  <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none" />
                </button>

                <a
                  href="#contactSection"
                  className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-bold uppercase text-white bg-[#0f1433] hover:bg-white hover:text-black border-2 border-white/25 hover:border-[#00f0ff] shadow-[2px_2px_0px_0px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200"
                >
                  <span>Let's Connect</span>
                  <span className="text-[#00f0ff] group-hover:text-black transition-colors">
                    ✉
                  </span>
                </a>
              </div>
            </div>

            {/* Animated Cybernetic Circuit SVG with Video-Derived Hologram Palette */}
            <div className="hidden lg:block relative w-[280px] h-[340px] xl:w-[320px] xl:h-[380px] p-3 bg-[#080c1f]/85 border-2 border-[#00f0ff]/30 shadow-[0_0_25px_rgba(0,240,255,0.2)] shrink-0 pointer-events-none select-none">
              {/* HUD Corner Ticks */}
              <div className="absolute top-1 left-1 font-mono text-[9px] text-[#00f0ff] font-bold">
                [ SYSTEM // TELEMETRY ]
              </div>
              <div className="absolute top-1 right-1 font-mono text-[9px] text-white/40">
                SYS::ACTIVE
              </div>
              <div className="absolute bottom-1 left-1 font-mono text-[9px] text-white/40">
                SYS::SSB_2026
              </div>
              <div className="absolute bottom-1 right-1 font-mono text-[9px] text-[#e879f9] font-bold">
                STATUS::ONLINE
              </div>

              <svg
                className="w-full h-full pt-3"
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
                  stroke="rgba(56,189,248,0.2)"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M30 180 H190 L260 250 H360 L410 300 V430"
                  stroke="rgba(99,102,241,0.2)"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M180 340 H290 L340 390 H430"
                  stroke="rgba(232,121,249,0.2)"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M260 80 V170 L220 210 H140"
                  stroke="rgba(56,189,248,0.15)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
                <path
                  d="M300 250 L350 300 H440"
                  stroke="rgba(99,102,241,0.15)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />

                {/* Animated Flowing Laser Energy Beams */}
                <path
                  d="M110 40 H280 L350 110 V220 L410 280 H440"
                  stroke="url(#circuit-grad1)"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  className="flow-dash-1"
                />
                <path
                  d="M30 180 H190 L260 250 H360 L410 300 V430"
                  stroke="url(#circuit-grad2)"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  className="flow-dash-2"
                />
                <path
                  d="M180 340 H290 L340 390 H430"
                  stroke="url(#circuit-grad1)"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  className="flow-dash-3"
                />
                <path
                  d="M260 80 V170 L220 210 H140"
                  stroke="url(#circuit-grad3)"
                  strokeWidth="2"
                  strokeLinecap="square"
                  className="flow-dash-1"
                />

                {/* Central Holographic Quantum Core (Replicating Frame 40 Celestial Orbital Ring) */}
                <g className="core-ring">
                  <circle
                    cx="260"
                    cy="250"
                    r="24"
                    stroke="url(#circuit-grad2)"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    fill="none"
                  />
                  <ellipse
                    cx="260"
                    cy="250"
                    rx="32"
                    ry="14"
                    stroke="#00f0ff"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    fill="none"
                    transform="rotate(-25 260 250)"
                  />
                  <ellipse
                    cx="260"
                    cy="250"
                    rx="32"
                    ry="14"
                    stroke="#e879f9"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    fill="none"
                    transform="rotate(35 260 250)"
                  />
                </g>

                {/* Core Chip Body */}
                <rect
                  x="244"
                  y="234"
                  width="32"
                  height="32"
                  rx="0"
                  fill="#060813"
                  stroke="#00f0ff"
                  strokeWidth="2"
                />
                <text
                  x="260"
                  y="254"
                  textAnchor="middle"
                  fill="#00f0ff"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="900"
                >
                  SSB
                </text>

                {/* Pinging & Pulsing Junction Quantum Logic Nodes */}
                <rect x="277" y="37" width="6" height="6" fill="#00f0ff" className="animate-pulse" />
                <rect x="347" y="107" width="6" height="6" fill="#38bdf8" className="animate-pulse" />
                <rect x="187" y="177" width="6" height="6" fill="#818cf8" className="animate-pulse" />
                <rect x="407" y="277" width="6" height="6" fill="#00f0ff" className="animate-pulse" />
                <rect x="337" y="387" width="6" height="6" fill="#e879f9" className="animate-pulse" />

                {/* Circuit Micro-Labels */}
                <text x="110" y="30" fill="#00f0ff" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  CORE_BUS: 120FPS
                </text>
                <text x="350" y="420" fill="#e879f9" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  AI_NEURAL_LINK
                </text>

                {/* Video-Derived Holographic Gradient Defs */}
                <defs>
                  <linearGradient id="circuit-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="circuit-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#818cf8" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#e879f9" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="circuit-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e879f9" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Real-Time Frame Sequencer Telemetry (Bottom Left) - Technical Studio Readout */}
        <div className="absolute bottom-4 left-4 sm:left-8 z-30 pointer-events-none flex items-center gap-3">
          <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-[#080c1f]/90 border border-[#00f0ff]/30 font-mono text-[10px] sm:text-[11px] text-white/90 tracking-widest flex items-center gap-2 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
            <span className="w-1.5 h-1.5 bg-[#00f0ff] animate-ping" />
            <span>SEQ // FRAME <span ref={frameCounterRef} className="text-[#00f0ff] font-black">01</span> / 40</span>
          </div>
        </div>

        {/* Scroll Guide Beacon (Bottom Center) - Industrial Benchmark Stamp */}
        <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-30 items-center gap-2 px-3 py-1 bg-[#080c1f]/85 border border-white/15 pointer-events-none opacity-80 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-white/70">
          <span>Scroll to Navigate</span>
          <span className="text-[#00f0ff] font-bold animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
