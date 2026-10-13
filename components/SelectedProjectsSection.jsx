"use client";

import React, { useState, useEffect, useRef } from "react";

// Project data extracted and refined with deep-dive technical insights
export const selectedProjectsData = [
  {
    id: "million-piece-mission",
    title: "MILLION PIECE MISSION",
    category: "GENERATIVE AI · MASSIVE MOSAIC",
    brand: "U.S. AIR FORCE",
    bpm: 128,
    accent: "#c4b5fd", // Pastel Lilac
    image: "/images/projects/project-0-mission.jpg",
    desc: "Planetary-scale collaborative canvas assembling 1.2M fragmented memories through real-time neural graph clustering.",
    tags: ["WebGL", "Next.js", "WebSockets", "Triton Inference"],
    link: "#",
    insights: {
      subtitle: "Planetary Neural Canvas with Real-Time Cluster Clustering",
      overview: "Designed for high-concurrency collective storytelling, Million Piece Mission synthesizes over 1.2 million user-contributed multimedia assets into an interactive planetary mosaic. Powered by Triton Inference Server and WebGL instanced rendering, the system achieves fluid 120 FPS navigation across millions of rendered fragments.",
      metrics: [
        { label: "Fragments Rendered", value: "1.2M Instanced" },
        { label: "Inference Latency", value: "<18ms Triton" },
        { label: "Framerate Target", value: "120 FPS WebGL" },
        { label: "Concurrent Nodes", value: "85K WebSockets" }
      ],
      architecture: [
        "Hierarchical quad-tree spatial indexing for GPU frustum culling and level-of-detail streaming",
        "Triton Inference Server cluster running real-time multimodal CLIP embeddings",
        "Zero-copy binary WebSocket stream synchronization across distributed clients",
        "Dynamic GLSL shader pipeline with iridescent bloom and depth-of-field post-processing"
      ],
      deliverables: ["Interactive 3D WebGL Canvas", "Real-Time Triton Pipeline", "Distributed Sync Engine"]
    }
  },
  {
    id: "sustainable-horizons",
    title: "SUSTAINABLE HORIZONS",
    category: "CLIMATE TELEMETRY · DIGITAL TWIN",
    brand: "WALL STREET JOURNAL",
    isBrandSerif: true,
    brandMark: "WSJ",
    bpm: 104,
    accent: "#a7f3d0", // Pastel Mint
    image: "/images/projects/project-1-sustainable.jpg",
    desc: "Real-time geospatial Earth monitoring system synthesizing satellite orbital feeds into predictive carbon emission models.",
    tags: ["Three.js", "FastAPI", "TensorFlow", "GLSL Shaders"],
    link: "#",
    insights: {
      subtitle: "Planetary Climate Telemetry & Orbital Emission Simulation",
      overview: "A mission-critical climate monitoring platform developed with Wall Street Journal telemetry feeds. Synthesizes orbital spectroscopy into high-fidelity volumetric GLSL vector field visualizations of global carbon footprints with real-time predictive scenarios.",
      metrics: [
        { label: "Telemetry Feeds", value: "48 Satellites" },
        { label: "Vector Resolution", value: "0.1° Lat/Lon" },
        { label: "Simulation Pipeline", value: "GLSL Compute" },
        { label: "Data Refresh Rate", value: "Real-Time / 1s" }
      ],
      architecture: [
        "Custom GLSL compute shaders calculating advection-diffusion atmospheric equations",
        "TensorFlow climate projection models integrated via asynchronous edge workers",
        "Tile-based geospatial raster decoders streaming multi-terabyte satellite datasets",
        "Sub-pixel vector antialiasing ensuring crisp typography over dynamic planetary 3D globes"
      ],
      deliverables: ["Geospatial Digital Twin", "GLSL Vector Field Engine", "Orbital Telemetry Stream"]
    }
  },
  {
    id: "20-years-of-xbox",
    title: "20 YEARS OF XBOX",
    category: "3D SPATIAL · INTERACTIVE ARCHIVE",
    brand: "XBOX",
    isXboxLogo: true,
    bpm: 118,
    accent: "#34d399", // Cyber Emerald
    image: "/images/projects/project-2-xbox.jpg",
    desc: "Cinematic 3D virtual museum honoring two decades of gaming heritage with interactive artifacts, memory vaults, and spatial exploration.",
    tags: ["WebGL 3D", "GSAP Scrub", "Spatial Audio", "React"],
    link: "#",
    insights: {
      subtitle: "Cinematic 3D Spatial Archive & Interactive Heritage Vault",
      overview: "A celebration of gaming culture spanning two decades, featuring 100+ fully interactive 3D artifacts, spatial exploration mechanics, and interactive memory vaults crafted for millions of global explorers.",
      metrics: [
        { label: "3D Heritage Artifacts", value: "100+ High-Poly" },
        { label: "Draw Call Budget", value: "<45 per Frame" },
        { label: "Memory Footprint", value: "<85MB VRAM" },
        { label: "Global Explorers", value: "2.4M Visits" }
      ],
      architecture: [
        "Automated glTF asset compression using Draco geometry encoding and KTX2 textures",
        "Custom PBR shader system mimicking vintage CRT monitors, matte plastics, and metallic foils",
        "Smooth inertia-based 3D camera navigation with continuous collision avoidance",
        "Zero-dependency progressive texture streaming optimized for low-bandwidth devices"
      ],
      deliverables: ["3D Museum Environment", "Draco Mesh Optimization", "Interactive Memory Vaults"]
    }
  },
  {
    id: "secret-sky",
    title: "SECRET SKY",
    category: "VIRTUAL WORLDS · SYNTHESIZED SKIES",
    brand: "PORTER ROBINSON",
    brandMark: "【=◈︿◈=】",
    bpm: 142,
    accent: "#fda4af", // Pastel Rose
    image: "/images/projects/project-3-secretsky.jpg",
    desc: "Multiplayer celestial festival arena rendering procedurally synthesized audio-reactive aurora skies and custom spatial acoustics.",
    tags: ["WebRTC Mesh", "GLSL Noise", "Three.js", "Spatial BGM"],
    link: "#",
    insights: {
      subtitle: "Multiplayer Virtual Celestial Arena & Procedural Aurora Skies",
      overview: "A digital concert auditorium rendering procedurally generated aurora skies in real-time. Features WebRTC mesh networking enabling thousands of simultaneous visitors to explore shared audio-visual dimensions and reactive light shows.",
      metrics: [
        { label: "Concurrent Avatars", value: "25,000 P2P" },
        { label: "Shader Complexity", value: "Ray-Marched Fog" },
        { label: "Sync Jitter", value: "<8ms WebRTC" },
        { label: "Dynamic Lights", value: "64 Clustered" }
      ],
      architecture: [
        "Ray-marched volumetric skybox shaders reacting in real-time to frequency spectrum telemetry",
        "WebRTC data-channel mesh architecture with client-side dead reckoning interpolation",
        "Spatial 3D binaural positioning with realistic reverberation convolution models",
        "GPU particle instancing powering 50,000 luminescent celestial light motes"
      ],
      deliverables: ["Multiplayer WebRTC Arena", "Volumetric Ray-March Shaders", "Spatial Acoustics Engine"]
    }
  },
  {
    id: "discover-your-patronus",
    title: "DISCOVER YOUR PATRONUS",
    category: "BIOLUMINESCENCE · PARTICLE ENTITY",
    brand: "WIZARDING WORLD",
    brandMark: "Harry Potter",
    isHpFont: true,
    bpm: 92,
    accent: "#67e8f9", // Pastel Cyan
    image: "/images/projects/project-4-patronus.jpg",
    desc: "Interactive luminescent particle experience synthesizing psychological choice vectors into a glowing, living guardian entity.",
    tags: ["25k Particles", "Custom Physics", "Canvas 2D", "Web Audio"],
    link: "#",
    insights: {
      subtitle: "Bioluminescent Particle System & Psychological Vector Synthesis",
      overview: "An ethereal interactive particle experience that analyzes subtle user interaction trajectories to materialize a luminous guardian creature. Features 25,000 autonomous physics-driven bioluminescent particles with reactive force fields.",
      metrics: [
        { label: "Active Particle Count", value: "25,000 Agents" },
        { label: "Physics Simulation", value: "Verlet Integration" },
        { label: "Touch Response Time", value: "<12ms Native" },
        { label: "Visual Fidelity", value: "Sub-Pixel Glow" }
      ],
      architecture: [
        "Verlet integration physics simulation executed via typed array buffers in web workers",
        "Dynamic force-field attraction models driven by mouse cursor trajectory and velocity",
        "Multipass additive bloom compositing producing intense bioluminescent light signatures",
        "Procedural harmonic curves dynamically responding to particle velocity and dispersion"
      ],
      deliverables: ["25K Particle Physics Engine", "Typed Array Worker Pipeline", "Bioluminescent Bloom Shaders"]
    }
  }
];

export default function SelectedProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [modalTab, setModalTab] = useState("architecture");
  const [copiedSpecs, setCopiedSpecs] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleCopySpecs = () => {
    if (!activeModalProject) return;
    const text = `${activeModalProject.title} (${activeModalProject.category})\nBrand: ${activeModalProject.brand}\nSubtitle: ${activeModalProject.insights?.subtitle}\nOverview: ${activeModalProject.insights?.overview}\nKey Metrics:\n${activeModalProject.insights?.metrics.map((m) => `• ${m.label}: ${m.value}`).join("\n")}`;
    navigator.clipboard.writeText(text);
    setCopiedSpecs(true);
    setTimeout(() => setCopiedSpecs(false), 2400);
  };

  // Structural & Interactive Refs
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const progressBarRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRefs = useRef([]);

  // Animation & Smooth Scrubbing Refs
  const virtualProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const lastActiveIndexRef = useRef(0);
  const animTimeRef = useRef(0);
  const mouseTiltRef = useRef({ x: 0, y: 0 });

  // Dragging interaction refs
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);

  // Title Glitch Scramble Decoder (Matching Reference Video)
  const scrambleTitle = (element) => {
    if (!element) return;
    const finalTitle = element.getAttribute("data-original") || element.textContent.trim();
    const glyphs = "01#%*+~_█▓░><";
    let frame = 0;
    const totalFrames = 12;

    if (element._glitchTimer) {
      clearInterval(element._glitchTimer);
    }

    element._glitchTimer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      let display = "";
      for (let i = 0; i < finalTitle.length; i++) {
        if (finalTitle[i] === " ") {
          display += " ";
        } else if (i / finalTitle.length < progress) {
          display += finalTitle[i];
        } else {
          display += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      element.textContent = display;
      if (frame >= totalFrames) {
        clearInterval(element._glitchTimer);
        element.textContent = finalTitle;
      }
    }, 28);
  };

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  // Detect Mobile Viewport
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        cardRefs.current.forEach((card) => {
          if (card) {
            card.style.transform = "";
            card.style.filter = "";
            card.style.opacity = "";
            card.style.zIndex = "";
          }
        });
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lightweight Iridescent Ambient Canvas (Zero CPU/GPU Lag)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let angle = 0;
    let w = (canvas.width = canvas.offsetWidth || 1200);
    let h = (canvas.height = canvas.offsetHeight || 800);

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth || window.innerWidth;
      h = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Optimized particle count: 32 motes for fluid 120 FPS
    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1.5 + Math.random() * 2.5,
      color: [
        "rgba(167, 243, 208, 0.35)",
        "rgba(103, 232, 249, 0.35)",
        "rgba(196, 181, 253, 0.35)",
        "rgba(253, 164, 175, 0.35)"
      ][Math.floor(Math.random() * 4)]
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      angle += 0.006;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
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

  // Main 3D Card Orbit Animation Loop (Zero-Lag GPU Compositing)
  useEffect(() => {
    let animFrameId;

    const updateScrollProgress = () => {
      if (!containerRef.current || isMobile) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      // Scrolled distance within this pinned container
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgressRef.current = progress * (selectedProjectsData.length - 1);
    };

    // Render 3D Cards in perspective space with snappy LERP and hardware-accelerated transforms
    const tick = () => {
      animTimeRef.current += 16;

      if (!isMobile) {
        // Snappy responsive LERP (0.24) eliminating any feeling of lag
        const diff = targetProgressRef.current - virtualProgressRef.current;
        if (Math.abs(diff) > 0.0005) {
          virtualProgressRef.current += diff * 0.24;
        } else {
          virtualProgressRef.current = targetProgressRef.current;
        }

        const currentProg = virtualProgressRef.current;

        // Update each card's 3D transformation (GPU-native properties ONLY, zero expensive filters)
        cardRefs.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          const offset = idx - currentProg;
          const absOffset = Math.abs(offset);

          const translateX = offset * 56; // %
          const floatY = Math.sin(animTimeRef.current * 0.0025 + idx * 1.3) * 5;
          const translateZ =
            -Math.pow(absOffset, 1.3) * 260 +
            (1 - Math.min(1, absOffset)) * 70;
          const rotateY =
            -Math.max(-36, Math.min(36, offset * 22)) + mouseTiltRef.current.x;
          const rotateX = mouseTiltRef.current.y;
          const scale = Math.max(0.65, 1.04 - absOffset * 0.14);
          const opacity = Math.max(0.25, 1 - absOffset * 0.35);
          const zIndex = 30 - Math.round(absOffset * 6);

          cardEl.style.transform = `translate3d(${translateX.toFixed(
            2
          )}%, ${floatY.toFixed(2)}px, ${translateZ.toFixed(
            2
          )}px) rotateY(${rotateY.toFixed(2)}deg) rotateX(${rotateX.toFixed(
            2
          )}deg) scale(${scale.toFixed(3)})`;
          cardEl.style.opacity = opacity.toFixed(3);
          cardEl.style.zIndex = zIndex;
        });

        // Update continuous scroll scrubber progress bar
        if (progressBarRef.current) {
          const pct = Math.max(
            0,
            Math.min(100, (currentProg / (selectedProjectsData.length - 1)) * 100)
          );
          progressBarRef.current.style.width = `${pct.toFixed(1)}%`;
        }

        // Active index change detection
        const nearestIndex = Math.max(
          0,
          Math.min(selectedProjectsData.length - 1, Math.round(currentProg))
        );
        if (nearestIndex !== lastActiveIndexRef.current) {
          lastActiveIndexRef.current = nearestIndex;
          setActiveIndex(nearestIndex);
          if (titleRefs.current[nearestIndex]) {
            scrambleTitle(titleRefs.current[nearestIndex]);
          }
        }
      }

      animFrameId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();
    animFrameId = requestAnimationFrame(tick);

    // Initial title scramble on first load
    if (titleRefs.current[0]) {
      scrambleTitle(titleRefs.current[0]);
    }

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile]);

  // Stage Mouse Parallax Tilt
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseTiltRef.current = { x: normX * 6, y: -normY * 4 };
  };

  const handleMouseLeave = () => {
    mouseTiltRef.current = { x: 0, y: 0 };
  };

  // Drag-to-Scrub on Desktop Stage
  const handleStageMouseDown = (e) => {
    if (isMobile || e.target.closest("button") || e.target.closest("a")) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartProgressRef.current = targetProgressRef.current;
  };

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      if (!isDraggingRef.current || isMobile) return;
      const deltaX = e.clientX - dragStartXRef.current;
      const sensitivity = 0.0035;
      const newProgress = Math.max(
        0,
        Math.min(
          selectedProjectsData.length - 1,
          dragStartProgressRef.current - deltaX * sensitivity
        )
      );
      targetProgressRef.current = newProgress;

      // Sync window scroll
      if (containerRef.current) {
        const totalScrollable =
          containerRef.current.offsetHeight - window.innerHeight;
        const rect = containerRef.current.getBoundingClientRect();
        const currentScrollY =
          window.scrollY || window.pageYOffset || 0;
        const containerDocTop = currentScrollY + rect.top;
        const targetScrollY =
          containerDocTop +
          (newProgress / (selectedProjectsData.length - 1)) * totalScrollable;
        window.scrollTo({ top: targetScrollY });
      }
    };

    const handleWindowMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        navigateToProject(Math.round(targetProgressRef.current));
      }
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [isMobile]);

  // Navigate smoothly to specified project
  const navigateToProject = (targetIdx) => {
    const clamped = Math.max(0, Math.min(selectedProjectsData.length - 1, targetIdx));
    if (isMobile) {
      setActiveIndex(clamped);
      if (trackRef.current && cardRefs.current[clamped]) {
        const card = cardRefs.current[clamped];
        trackRef.current.scrollTo({
          left: card.offsetLeft - trackRef.current.offsetLeft,
          behavior: "smooth"
        });
      }
      return;
    }
    if (!containerRef.current) return;
    const totalScrollable =
      containerRef.current.offsetHeight - window.innerHeight;
    if (totalScrollable <= 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentScrollY =
      window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const containerDocTop = currentScrollY + rect.top;
    const targetScrollY =
      containerDocTop +
      (clamped / (selectedProjectsData.length - 1)) * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth"
    });
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % selectedProjectsData.length;
    navigateToProject(next);
  };

  const handlePrev = () => {
    const prev =
      (activeIndex - 1 + selectedProjectsData.length) %
      selectedProjectsData.length;
    navigateToProject(prev);
  };

  return (
    <section
      ref={containerRef}
      id="projectsSection"
      style={{ height: isMobile ? "auto" : "260vh" }}
      className="relative w-full"
      aria-label="Selected Projects 3D Showcase"
    >
      {/* Sticky Stage Container (Pins on Desktop, Flow on Mobile) */}
      <div
        className={`w-full overflow-hidden flex flex-col items-center justify-between z-20 ${
          isMobile
            ? "relative min-h-screen py-20 px-4 bg-[radial-gradient(circle_at_50%_30%,#0d0a20_0%,#070512_55%,#05040a_100%)]"
            : "sticky top-0 h-screen py-8 md:py-10 px-4 md:px-8 bg-[radial-gradient(circle_at_50%_30%,#0d0a20_0%,#070512_55%,#05040a_100%)]"
        }`}
      >
        {/* Background Canvas & Ambient Lighting */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-75"
          aria-hidden="true"
        />
        <div
          className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1100px] h-[60vh] max-h-[750px] bg-[radial-gradient(ellipse_at_center,rgba(196,181,253,0.18)_0%,rgba(103,232,249,0.12)_35%,rgba(167,243,208,0.06)_60%,transparent_75%)] blur-[70px] pointer-events-none z-[2]"
          aria-hidden="true"
        />

        {/* Header */}
        <div className="text-center max-w-[820px] relative z-10 shrink-0">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[rgba(167,243,208,0.08)] border border-[rgba(167,243,208,0.28)] mb-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_10px_#a7f3d0] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#a7f3d0] tracking-wider">
              SELECTED WORKS · 3D PERSPECTIVE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-[#67e8f9] to-[#c4b5fd] bg-clip-text text-transparent mb-1.5">
            FEATURED PROJECTS{" "}
            <span className="font-mono text-sm sm:text-base md:text-xl font-bold text-[#67e8f9] inline-block px-2.5 py-0.5 rounded-md bg-[rgba(103,232,249,0.1)] border border-[rgba(103,232,249,0.25)] align-middle ml-1.5">
              [ 0{activeIndex + 1} — 05 ]
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-[620px] mx-auto leading-relaxed hidden sm:block">
            Scroll down to orbit through the 3D spatial cards. Click any project to open deep architectural insights.
          </p>
        </div>

        {/* 3D Stage / Mobile Horizontal Track */}
        <div
          ref={trackRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleStageMouseDown}
          className={`relative w-full max-w-[1440px] flex-1 flex items-center justify-center z-10 ${
            isMobile
              ? "overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 scrollbar-none my-4"
              : "[perspective:1350px] [transform-style:preserve-3d] cursor-grab active:cursor-grabbing select-none"
          }`}
        >
          {selectedProjectsData.map((project, idx) => {
            const offset = idx - 0;
            const absOffset = Math.abs(offset);

            // Initial SSR fallback coordinates
            const initialTransform = !isMobile
              ? {
                  transform: `translate3d(${offset * 56}%, 0px, ${
                    -Math.pow(absOffset, 1.3) * 260 +
                    (1 - Math.min(1, absOffset)) * 70
                  }px) rotateY(${-Math.max(-36, Math.min(36, offset * 22))}deg) scale(${Math.max(
                    0.65,
                    1.04 - absOffset * 0.14
                  )})`,
                  opacity: Math.max(0.25, 1 - absOffset * 0.35),
                  zIndex: 30 - Math.round(absOffset * 6)
                }
              : {};

            const isActive = idx === activeIndex;

            return (
              <article
                key={project.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => {
                  if (!isMobile && idx !== activeIndex) {
                    navigateToProject(idx);
                  } else {
                    setActiveModalProject(project);
                  }
                }}
                style={initialTransform}
                className={`rounded-[26px] bg-[rgba(10,8,22,0.78)] backdrop-blur-xl border overflow-hidden select-none shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] ${
                  isMobile
                    ? "relative flex-none w-[86vw] max-w-[380px] h-[480px] snap-center cursor-default border-white/20"
                    : "absolute w-[clamp(340px,44vw,580px)] h-[clamp(370px,49vh,460px)] [transform-style:preserve-3d] cursor-pointer will-change-transform transition-[border-color,box-shadow] duration-200"
                } ${
                  isActive
                    ? "border-white/35 shadow-[0_35px_85px_-12px_rgba(0,0,0,0.96),0_0_40px_rgba(196,181,253,0.25)]"
                    : "border-white/15 hover:border-white/25"
                }`}
              >
                {/* Iridescent Border Rim */}
                <div className="absolute inset-0 rounded-[26px] p-[1.5px] pointer-events-none z-[4] opacity-70 bg-gradient-to-br from-[#a7f3d0]/50 via-[#c4b5fd]/50 to-[#67e8f9]/50 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />

                {/* Specular Glare */}
                <div className="absolute top-0 inset-x-0 h-1/2 rounded-t-[26px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-[3]" />

                {/* Visual Backdrop */}
                <div className="absolute inset-0 z-[1] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 scale-105 transition-transform duration-700 hover:scale-100"
                  />
                  <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/50 via-black/75 to-black/95" />
                  <div className="absolute inset-0 z-[3] opacity-60 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_1px,transparent_1px,transparent_3px)] pointer-events-none" />
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-[5] h-full flex flex-col justify-between p-6 sm:p-7">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
                      {project.isXboxLogo ? (
                        <span className="w-3.5 h-3.5 text-[#34d399] font-bold">
                          ⊗
                        </span>
                      ) : project.brandMark ? (
                        <span
                          className={`text-xs text-white font-bold ${
                            project.isBrandSerif ? "font-serif" : "font-mono"
                          }`}
                        >
                          {project.brandMark}
                        </span>
                      ) : (
                        <span className="text-xs text-[#c4b5fd]">✈</span>
                      )}
                      <span className="font-mono text-[11px] font-bold text-white/80 tracking-wider">
                        {project.brand}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 font-mono text-xs font-bold text-white shadow-md">
                      <span
                        style={{
                          backgroundColor: project.accent,
                          boxShadow: `0 0 8px ${project.accent}`,
                          animationDuration: `${60 / project.bpm}s`
                        }}
                        className="w-1.5 h-1.5 rounded-full animate-ping"
                      />
                      <span>{project.bpm} BPM</span>
                    </div>
                  </div>

                  {/* Main Info */}
                  <div className="flex flex-col gap-1.5 mt-auto mb-2">
                    <div className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-[#67e8f9] uppercase">
                      {project.category}
                    </div>
                    <h3
                      ref={(el) => {
                        titleRefs.current[idx] = el;
                      }}
                      data-original={project.title}
                      className="font-sans text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white uppercase drop-shadow-md leading-tight"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white/90 backdrop-blur"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Action Bar (Hyper-Animated Insights Action) */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(project);
                      }}
                      className="group relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-mono text-xs font-bold text-white bg-gradient-to-r from-[#67e8f9]/20 via-[#c4b5fd]/25 to-[#fda4af]/20 hover:from-[#67e8f9]/40 hover:via-[#c4b5fd]/45 hover:to-[#fda4af]/40 border border-[#67e8f9]/50 hover:border-[#67e8f9] shadow-[0_0_20px_rgba(103,232,249,0.25)] hover:shadow-[0_0_35px_rgba(103,232,249,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
                    >
                      {/* Specular sheen beam running across */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="w-2 h-2 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9] animate-ping" />
                      <span className="relative z-10 bg-gradient-to-r from-white via-[#a7f3d0] to-[#67e8f9] bg-clip-text text-transparent group-hover:text-white transition-colors">
                        View Insights
                      </span>
                      <span className="relative z-10 text-[#67e8f9] group-hover:rotate-180 transition-transform duration-500 font-bold">
                        ✦
                      </span>
                    </button>

                    <a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      className="group font-mono text-xs font-semibold text-white/70 hover:text-white px-3.5 py-2 rounded-full hover:bg-white/10 border border-transparent hover:border-white/15 transition-all flex items-center gap-1.5"
                    >
                      <span>Explore</span>
                      <span className="text-[#67e8f9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Controls & Continuous Progress Bar */}
        <div className="w-full max-w-[620px] px-4 shrink-0 flex flex-col items-center gap-2.5 z-15">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#c4b5fd]/20 border border-white/15 hover:border-[#c4b5fd] flex items-center justify-center text-white transition-all hover:scale-105 cursor-pointer"
              aria-label="Previous Project"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {selectedProjectsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigateToProject(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "w-7 bg-[#67e8f9] shadow-[0_0_12px_#67e8f9]"
                      : "w-2 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="font-mono text-xs sm:text-sm font-bold text-white/70">
              <span className="text-[#67e8f9]">
                0{activeIndex + 1}
              </span>{" "}
              <span className="text-white/30">/</span> 05
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#c4b5fd]/20 border border-white/15 hover:border-[#c4b5fd] flex items-center justify-center text-white transition-all hover:scale-105 cursor-pointer"
              aria-label="Next Project"
            >
              →
            </button>
          </div>

          {/* Real-time Continuous Orbit Scrubber Line */}
          <div className="w-full max-w-[320px] h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-[#a7f3d0] via-[#67e8f9] to-[#c4b5fd] w-0 will-change-[width]"
            />
          </div>
        </div>
      </div>

      {/* Hyper-Animated Deep-Dive Project Insights Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[rgba(10,8,22,0.97)] border border-white/25 p-6 sm:p-8 shadow-[0_35px_90px_rgba(0,0,0,0.95)] flex flex-col gap-6 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: `0 35px 110px -15px rgba(0,0,0,0.98), 0 0 60px ${activeModalProject.accent}35`
            }}
          >
            {/* Top Iridescent Animated Accent Bar */}
            <div
              className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl animate-pulse"
              style={{
                background: `linear-gradient(90deg, #a7f3d0, #67e8f9, ${activeModalProject.accent}, #fda4af, #a7f3d0)`
              }}
            />

            {/* Cybernetic Telemetry Header Badge */}
            <div className="flex items-center justify-between w-full px-3.5 py-1.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-ping" />
                <span className="text-[#a7f3d0] tracking-widest uppercase font-bold text-[10px] sm:text-[11px]">
                  ARCHITECTURAL TELEMETRY · 120 FPS ENGINE VERIFIED
                </span>
              </div>
              <span className="text-white/40 tracking-wider text-[10px] hidden sm:inline">
                ID: {activeModalProject.id.toUpperCase()}
              </span>
            </div>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pt-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white shadow-sm">
                    {activeModalProject.brand}
                  </span>
                  <span
                    className="font-mono text-xs font-bold px-3 py-1 rounded-full border shadow-sm"
                    style={{
                      borderColor: `${activeModalProject.accent}70`,
                      color: activeModalProject.accent,
                      backgroundColor: `${activeModalProject.accent}15`
                    }}
                  >
                    {activeModalProject.category}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 font-mono text-xs text-white/80">
                    <span
                      style={{ backgroundColor: activeModalProject.accent }}
                      className="w-1.5 h-1.5 rounded-full animate-ping"
                    />
                    <span>{activeModalProject.bpm} BPM</span>
                  </div>
                </div>

                {/* Animated Gradient Title */}
                <h3
                  id="modal-project-title"
                  className="font-sans text-2xl sm:text-4xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-[#a7f3d0] via-[#67e8f9] via-[#c4b5fd] to-[#fda4af] bg-[length:200%_auto] animate-pulse bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] mt-1"
                >
                  {activeModalProject.title}
                </h3>

                {/* Animated Subtitle with Cursor */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-sans text-sm sm:text-base text-[#67e8f9] font-bold">
                    {activeModalProject.insights?.subtitle}
                  </span>
                  <span className="inline-block w-2 h-4 sm:h-5 bg-[#67e8f9] animate-pulse shadow-[0_0_8px_#67e8f9]" />
                </div>
              </div>

              {/* Close Button with 90-degree Rotation Hover Animation */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="group w-10 h-10 rounded-full bg-white/10 hover:bg-[#67e8f9] hover:text-black border border-white/20 hover:border-[#67e8f9] flex items-center justify-center text-white text-base transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(103,232,249,0.6)] cursor-pointer shrink-0"
                aria-label="Close Insights Modal"
              >
                ✕
              </button>
            </div>

            {/* Interactive Tab Switcher Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 w-fit overflow-x-auto">
              <button
                onClick={() => setModalTab("architecture")}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  modalTab === "architecture"
                    ? "bg-gradient-to-r from-[#67e8f9]/25 to-[#c4b5fd]/25 text-white border border-[#67e8f9]/60 shadow-[0_0_20px_rgba(103,232,249,0.3)] scale-[1.02]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={modalTab === "architecture" ? "text-[#67e8f9] animate-spin" : "opacity-40"}>✦</span>
                <span>System Architecture</span>
              </button>

              <button
                onClick={() => setModalTab("metrics")}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  modalTab === "metrics"
                    ? "bg-gradient-to-r from-[#a7f3d0]/25 to-[#67e8f9]/25 text-white border border-[#a7f3d0]/60 shadow-[0_0_20px_rgba(167,243,208,0.3)] scale-[1.02]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={modalTab === "metrics" ? "text-[#a7f3d0] animate-bounce" : "opacity-40"}>⚡</span>
                <span>Metrics & Benchmarks</span>
              </button>

              <button
                onClick={() => setModalTab("innovations")}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  modalTab === "innovations"
                    ? "bg-gradient-to-r from-[#fda4af]/25 to-[#c4b5fd]/25 text-white border border-[#fda4af]/60 shadow-[0_0_20px_rgba(253,164,175,0.3)] scale-[1.02]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={modalTab === "innovations" ? "text-[#fda4af] animate-pulse" : "opacity-40"}>★</span>
                <span>Deliverables & Stack</span>
              </button>
            </div>

            {/* TAB CONTENT 1: System Architecture */}
            {modalTab === "architecture" && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                {/* Overview Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-white/85 text-sm sm:text-base leading-relaxed shadow-inner">
                  {activeModalProject.insights?.overview}
                </div>

                {/* Core Architectural Innovations */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#a7f3d0] font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] animate-pulse" />
                    <span>Engineering Pillars & Breakthroughs</span>
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {activeModalProject.insights?.architecture.map((point, idx) => (
                      <li
                        key={idx}
                        className="group flex items-start gap-3 text-xs sm:text-sm text-white/85 bg-white/[0.02] hover:bg-white/[0.06] p-3 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-1.5 shadow-sm"
                      >
                        <span className="text-[#67e8f9] font-bold text-sm mt-0.5 group-hover:rotate-45 transition-transform duration-300">
                          ✦
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: Metrics & Benchmarks */}
            {modalTab === "metrics" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {activeModalProject.insights?.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#67e8f9]/50 flex flex-col gap-1.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(103,232,249,0.25)]"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 group-hover:text-white/80 transition-colors">
                        {m.label}
                      </span>
                      <span
                        className="font-mono text-base sm:text-lg font-black drop-shadow-[0_0_10px_currentColor]"
                        style={{ color: activeModalProject.accent }}
                      >
                        {m.value}
                      </span>
                      <div className="w-8 h-0.5 rounded-full bg-white/20 group-hover:w-full group-hover:bg-[#67e8f9] transition-all duration-300 mt-1" />
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#67e8f9] animate-pulse" />
                    <span>BENCHMARK RIG: Chromium WebGL 2.0 / Apple Metal / Windows Direct3D 12</span>
                  </span>
                  <span className="text-[#a7f3d0] font-bold">100% PASS</span>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: Deliverables & Stack */}
            {modalTab === "innovations" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#67e8f9] font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#67e8f9] animate-pulse" />
                    <span>Verified Project Deliverables</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.insights?.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-[#67e8f9]/10 border border-[#67e8f9]/30 text-[#67e8f9] hover:bg-[#67e8f9]/20 transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>✓</span>
                        <span>{deliv}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pt-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
                    Core Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white/95 transition-all shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Footer with Hyper-Animated Action Buttons */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10 mt-2 flex-wrap">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-full font-mono text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 transition-all hover:scale-105 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleCopySpecs}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#67e8f9] transition-all hover:scale-105 cursor-pointer shadow-md"
                >
                  <span>{copiedSpecs ? "Specs Copied! ✓" : "Copy Specs 📋"}</span>
                </button>
              </div>

              {/* Specular Liquid Animated Prototype Launch Button */}
              <a
                href={activeModalProject.link}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-sans text-xs sm:text-sm font-black text-black bg-gradient-to-r from-[#a7f3d0] via-[#67e8f9] to-[#c4b5fd] shadow-[0_0_25px_rgba(103,232,249,0.5)] hover:shadow-[0_0_40px_rgba(103,232,249,0.85)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Launch Prototype</span>
                <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
                {/* Continuous specular reflection sheen beam */}
                <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
