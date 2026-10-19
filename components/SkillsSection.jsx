"use client";

import React, { useState, useEffect } from "react";

// Technical Tooling & Competencies + Client Production Stories Data
export const competencyStoriesData = [
  // --- CORE LANGUAGES & MARKUP ---
  {
    id: "html5",
    name: "HTML5",
    category: "SEMANTIC FOUNDATIONS · A11Y",
    type: "languages",
    monogram: "< / >",
    tagline: "Semantic document architecture, accessible landmarks, and modern microdata standards.",
    bgClass: "bg-gradient-to-br from-[#2a1208] via-[#1a0a04] to-[#080302]",
    accent: "#fda4af", // Pastel Rose
    glowColor: "rgba(253, 164, 175, 0.35)",
    bannerBg: "from-[#fda4af] to-[#c4b5fd]",
    story: {
      breadcrumb: "Competencies / HTML5 & Semantic Web",
      title: "How Semantic HTML Delivers 100/100 Lighthouse & Zero-Barrier Accessibility",
      desc: "Architected compliant WAI-ARIA document hierarchies, microdata SEO schemas, and resilient landmark navigation serving over 4.8M unique user sessions with 0 accessibility violations.",
      metrics: [
        { label: "Lighthouse", value: "100/100" },
        { label: "Standard", value: "WCAG AAA" },
        { label: "Hydration", value: "Zero-Layout Shift" },
        { label: "SEO Score", value: "Top 1%" }
      ],
      overview: "Before styles and scripts execute, semantic HTML establishes the foundational blueprint of the web. By utilizing native semantic elements (<article>, <section>, <nav>, <header>, <aside>) and descriptive ARIA live regions instead of generic unsemantic containers, interfaces achieve maximum resilience, screen-reader parity, and superior search-engine indexing.",
      keyPoints: [
        "Semantic landmark hierarchy and keyboard navigation focus management",
        "OpenGraph and JSON-LD structured microdata schemas for rich social previews",
        "Native dialog, form validation, and responsive picture/srcset asset pipelines",
        "Zero Cumulative Layout Shift (CLS) through aspect-ratio bounding reservations"
      ],
      bannerEyebrow: "Semantic Web Standards · 100/100 Accessibility",
      bannerHeading: "Accessible By Design: Clean Semantic Hierarchies Built For Humans & Search Engines",
      bannerBadges: ["W3C Valid", "WCAG 2.1", "SEO Microdata", "A11y Verified"],
      bannerBody: "Semantic markup guarantees that regardless of assistive technology, device viewport, or network conditions, content remains structured, legible, and immediately discoverable.",
      link: "#"
    }
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "STRICT TYPE ARCHITECTURE · AST",
    type: "languages",
    monogram: "TS",
    tagline: "End-to-end type safety, discriminated union state machines, and zero-runtime exceptions.",
    bgClass: "bg-gradient-to-br from-[#0c1a30] via-[#091024] to-[#050614]",
    accent: "#67e8f9", // Pastel Cyan
    glowColor: "rgba(103, 232, 249, 0.35)",
    bannerBg: "from-[#67e8f9] to-[#38bdf8]",
    story: {
      breadcrumb: "Competencies / TypeScript",
      title: "How Strict Type Systems Eliminate Runtime Exceptions Across 50k+ LoC",
      desc: "Engineered strict compiler standards, end-to-end Zod contract validation, and generic state lenses ensuring zero-any policies and instant refactoring confidence.",
      metrics: [
        { label: "Type Coverage", value: "100% Strict" },
        { label: "Regressions", value: "Zero Runtime" },
        { label: "Build Delta", value: "<15ms HMR" },
        { label: "Validation", value: "Zod + tRPC" }
      ],
      overview: "TypeScript is the bedrock of our software engineering philosophy. By treating types as immutable contracts connecting client UI components, server actions, and PostgreSQL schemas, we prevent whole categories of production bugs before compilation even finishes.",
      keyPoints: [
        "Discriminated union state machines for predictable loading, error, and data states",
        "Generic utility types, branded primitive identifiers, and immutable record lenses",
        "Automated AST type checking in GitHub Actions CI pipelines",
        "End-to-end contract synchronization between backend API responses and front-end states"
      ],
      bannerEyebrow: "Strict Typing Architecture · Zero Runtime Regressions",
      bannerHeading: "End-to-End Type Safety: From Database Schemas to WebGL Vertex Buffers",
      bannerBadges: ["TypeScript 5.x", "Zod", "No Implicit Any", "Type-Driven"],
      bannerBody: "Every interactive component, API response, and audio oscillator event is strictly typed, eliminating edge-case runtime crashes across the entire portfolio lifecycle.",
      link: "#"
    }
  },
  {
    id: "nextjs",
    name: "Next.js 16",
    category: "FULL-STACK REACT · TURBOPACK",
    type: "frameworks",
    monogram: "▲",
    tagline: "Server Components, Partial Prerendering (PPR), Edge caching, and streaming hydration.",
    bgClass: "bg-gradient-to-br from-[#180f2b] via-[#100a1f] to-[#06040d]",
    accent: "#c4b5fd", // Pastel Lilac
    glowColor: "rgba(196, 181, 253, 0.35)",
    bannerBg: "from-[#c4b5fd] to-[#a7f3d0]",
    story: {
      breadcrumb: "Competencies / Next.js 16 & React 19",
      title: "Sub-Second Global TTFB with Server Components & Turbopack",
      desc: "Architected modern Next.js 16 App Router structure with parallel streaming hydration, edge rendering, and sub-second asset bundling via Turbopack engine.",
      metrics: [
        { label: "Engine", value: "Turbopack" },
        { label: "Hydration", value: "React 19 PPR" },
        { label: "TTFB", value: "<120ms Global" },
        { label: "Bundle", value: "Zero Waterfall" }
      ],
      overview: "Next.js 16 and React 19 combine the speed of static distribution with dynamic real-time rendering. By rendering static layout chrome on the server and hydrating interactive client islands independently with Suspense boundaries, users experience zero layout delays.",
      keyPoints: [
        "Turbopack compilation delivering instant incremental hot module reloads",
        "Partial Prerendering (PPR) blending static CDN cache with dynamic edge data",
        "React Server Actions for secure direct mutations without boilerplate API handlers",
        "Next/Font and Next/Image automatic optimization eliminating visual shifts"
      ],
      bannerEyebrow: "Next.js 16 Architecture · React 19 Server Components",
      bannerHeading: "Sub-Second Global TTFB with Partial Prerendering and Parallelized Hydration",
      bannerBadges: ["Turbopack", "App Router", "Edge Cache", "Next 16"],
      bannerBody: "The unified portfolio runs on Next.js 16, rendering 40-frame interactive canvas heroes, 3D scroll orbits, and Web Audio synthesizers in a single high-performance bundle.",
      link: "#"
    }
  },
  {
    id: "react19",
    name: "React 19",
    category: "REACTIVE COMPONENT ARCHITECTURE",
    type: "frameworks",
    monogram: "⚛",
    tagline: "Modern Actions, useOptimistic state, Asset Preloading, and Concurrent Fiber scheduler.",
    bgClass: "bg-gradient-to-br from-[#071926] via-[#05111b] to-[#03090e]",
    accent: "#67e8f9",
    glowColor: "rgba(103, 232, 249, 0.35)",
    bannerBg: "from-[#67e8f9] to-[#a7f3d0]",
    story: {
      breadcrumb: "Competencies / React 19 Architecture",
      title: "How React 19 Actions & Concurrent Scheduling Elevate User Experience",
      desc: "Implemented modern React 19 concurrency, optimistic UI updates, and resource preloading for instant micro-interactions and zero-jank screen transitions.",
      metrics: [
        { label: "Scheduler", value: "Concurrent Fiber" },
        { label: "Frame Rate", value: "60 FPS Locked" },
        { label: "State", value: "Optimistic UI" },
        { label: "Hooks", value: "React 19 Core" }
      ],
      overview: "React 19 marks a revolutionary advancement in declarative UI state. With built-in Actions, useTransition concurrency, and automatic memoization, complex interfaces with animated 3D canvases maintain buttery 60fps performance without frame drops.",
      keyPoints: [
        "Concurrent transition scheduling prioritizing user input over background animations",
        "Optimistic state updates for instant tactile button feedback",
        "Asset preloading for 40-frame interactive canvas hero sequences",
        "Clean functional hook compositions maintaining single sources of truth"
      ],
      bannerEyebrow: "Concurrent React 19 · 60 FPS Fluid Scheduling",
      bannerHeading: "Declarative Reactivity with Hardware-Accelerated Micro-Interactions",
      bannerBadges: ["React 19", "Concurrent", "useOptimistic", "Fiber Engine"],
      bannerBody: "Leveraging React 19 enables our application to coordinate complex continuous marquees, 3D orbits, and synthesized audio streams concurrently without UI blocking.",
      link: "#"
    }
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    category: "DESIGN ENGINEERING · ATOMIC CSS",
    type: "frameworks",
    monogram: "≈",
    tagline: "Custom iridescent pastel design tokens, glassmorphism utilities, and GPU-composited styling.",
    bgClass: "bg-gradient-to-br from-[#072418] via-[#04160f] to-[#020b07]",
    accent: "#a7f3d0", // Pastel Mint
    glowColor: "rgba(167, 243, 208, 0.35)",
    bannerBg: "from-[#a7f3d0] to-[#67e8f9]",
    story: {
      breadcrumb: "Competencies / TailwindCSS & Design Systems",
      title: "Crafting Premium Iridescent Glassmorphism with Zero Runtime CSS Overhead",
      desc: "Developed custom pastel design token scales, hardware-accelerated transform utilities, and glowing specular overlays compiled to minimal atomic CSS.",
      metrics: [
        { label: "CSS Runtime", value: "0 KB" },
        { label: "Compositing", value: "GPU Layered" },
        { label: "Design System", value: "Iridescent Tokens" },
        { label: "Responsiveness", value: "Fluid Clamps" }
      ],
      overview: "CSS should be as fast as it is beautiful. By constructing an atomic design system with custom HSL pastel palettes, glassmorphism backdrops, and hardware-accelerated transforms (translate3d, will-change), we achieve stunning visual fidelity without heavy runtime CSS-in-JS libraries.",
      keyPoints: [
        "Curated pastel palettes: Pastel Mint, Pastel Cyan, Pastel Lilac, and Pastel Rose",
        "Glassmorphism specular highlights using CSS linear gradient masking techniques",
        "Fluid typography and layout scaling using modern CSS clamp() functions",
        "Minimal atomic CSS bundle size with purge optimization"
      ],
      bannerEyebrow: "Design Engineering · Hardware Accelerated",
      bannerHeading: "Curated Pastel Glassmorphism with Micro-Interactions & GPU Compositing",
      bannerBadges: ["Tailwind v4", "Zero Runtime", "Pastel Palette", "GPU Layers"],
      bannerBody: "Atomic styling guarantees instant load speeds, zero styling flashes, and complete aesthetic coherence across every component in the portfolio.",
      link: "#"
    }
  },
  {
    id: "webgl",
    name: "WebGL & 3D",
    category: "SPATIAL COMPUTING · GLSL SHADERS",
    type: "frameworks",
    monogram: "◈",
    tagline: "Custom GLSL vertex shaders, procedural particle nebulas, and 3D perspective projection.",
    bgClass: "bg-gradient-to-br from-[#160d26] via-[#0e071a] to-[#05020a]",
    accent: "#c4b5fd",
    glowColor: "rgba(196, 181, 253, 0.35)",
    bannerBg: "from-[#c4b5fd] to-[#fda4af]",
    story: {
      breadcrumb: "Competencies / WebGL & 3D Shaders",
      title: "Interactive 3D Perspective Projection & Particle Nebula Physics",
      desc: "Engineered procedural 2D/3D canvas engines with iridescent spine wave equations, instanced particle orbits, and matrix camera projections.",
      metrics: [
        { label: "Frame Rate", value: "60 FPS Locked" },
        { label: "Particles", value: "Instanced Batch" },
        { label: "Projection", value: "1350px Perspective" },
        { label: "Audio Sync", value: "Real-time FFT" }
      ],
      overview: "Bringing 3D spatial depth into web applications transforms passive browsing into an unforgettable cinematic experience. Using procedural trigonometric math, instanced particle buffers, and custom CSS perspective matrices, 3D cards orbit through space in response to user scroll.",
      keyPoints: [
        "Custom iridescent spine ribbon equations animating multiple harmonic waves",
        "Spatial depth transformations with logarithmic Z-translation and parabolic blur",
        "Interactive mouse parallax tilt tracking and smooth LERP momentum easing",
        "Dynamic canvas resizing with retina display devicePixelRatio compensation"
      ],
      bannerEyebrow: "Spatial WebGL & 3D · Instanced Particle Math",
      bannerHeading: "Procedural Particle Nebulas & 3D Perspective Orchestration on the Web",
      bannerBadges: ["GLSL", "Three.js", "Canvas 2D", "Math Physics"],
      bannerBody: "WebGL mathematics and GPU compositing empower the portfolio's 3D project showcase, spine ribbon canvas, and hero video sequencer.",
      link: "#"
    }
  },
  {
    id: "python",
    name: "Python & AI",
    category: "NEURAL PIPELINES · FASTAPI",
    type: "ai",
    monogram: "🐍",
    tagline: "FastAPI async endpoints, Gemini 2.5 API integration, OpenCV processing, and neural graph models.",
    bgClass: "bg-gradient-to-br from-[#061e1a] via-[#041411] to-[#020a08]",
    accent: "#34d399", // Cyber Emerald
    glowColor: "rgba(52, 211, 153, 0.35)",
    bannerBg: "from-[#34d399] to-[#67e8f9]",
    story: {
      breadcrumb: "Competencies / Python & AI Systems",
      title: "Autonomous Agent Architectures & High-Throughput Neural Pipelines",
      desc: "Developed high-speed async FastAPI services, multimodal Gemini API workflows, and automated video frame extraction systems for creative production.",
      metrics: [
        { label: "Latency", value: "<180ms Inference" },
        { label: "Vision", value: "OpenCV Pipelines" },
        { label: "AI Models", value: "Gemini 2.5 / Torch" },
        { label: "Architecture", value: "Async Event-Driven" }
      ],
      overview: "Python is the core language powering our artificial intelligence and automation toolchain. From OpenCV computer vision scripts analyzing video frames to multimodal LLM reasoning pipelines using Google's Gemini API, Python bridges raw models to client web applications.",
      keyPoints: [
        "FastAPI asynchronous REST & WebSocket backends with Pydantic contract validation",
        "Gemini API structured outputs, tool use, and multi-turn agent interactions",
        "Automated video processing: lossless frame slicing, compression, and analysis",
        "Vector embeddings, neural search indexing, and retrieval-augmented pipelines"
      ],
      bannerEyebrow: "AI & Neural Systems · Sub-180ms Inference",
      bannerHeading: "Autonomous Multimodal Pipelines: Bridging Foundation Models To Web Apps",
      bannerBadges: ["FastAPI", "Gemini API", "OpenCV", "PyTorch"],
      bannerBody: "High-throughput Python backends power complex AI inference, intelligent automation, and asset extraction with high efficiency.",
      link: "#"
    }
  },
  {
    id: "nodejs",
    name: "Node.js & APIs",
    category: "EVENT-DRIVEN BACKENDS · WEBSOCKETS",
    type: "ai",
    monogram: "🟢",
    tagline: "High-concurrency microservices, real-time WebSocket mesh, and robust REST APIs.",
    bgClass: "bg-gradient-to-br from-[#0c2214] via-[#07160d] to-[#030b06]",
    accent: "#a7f3d0",
    glowColor: "rgba(167, 243, 208, 0.35)",
    bannerBg: "from-[#a7f3d0] to-[#34d399]",
    story: {
      breadcrumb: "Competencies / Node.js & Real-time Systems",
      title: "Handling High-Concurrency Real-Time Events with Node.js & WebSockets",
      desc: "Architected event-driven microservices with WebSocket telemetry, streaming data channels, and Redis caching layers for sub-10ms pub/sub throughput.",
      metrics: [
        { label: "Concurrency", value: "10k+ Sockets" },
        { label: "Pub/Sub", value: "Redis Backed" },
        { label: "Runtime", value: "Node 22 LTS" },
        { label: "Latency", value: "<8ms Event Loop" }
      ],
      overview: "Real-time interactivity demands non-blocking asynchronous architectures. Using Node.js with native event loops, cluster load-balancing, and WebSocket protocols, systems transmit live telemetry feeds, multiplayer states, and collaborative inputs with near-zero latency.",
      keyPoints: [
        "Event-driven non-blocking architecture optimized for I/O heavy workloads",
        "Full-duplex WebSocket connections for multiplayer collaborative states",
        "JWT authentication, rate-limiting middleware, and CORS security hardening",
        "Dockerized microservice deployment with graceful shutdown listeners"
      ],
      bannerEyebrow: "Real-time Node.js · Sub-8ms Event Loop",
      bannerHeading: "High-Concurrency WebSocket Pipelines for Real-Time Collaborative Web",
      bannerBadges: ["Node.js", "WebSockets", "Express", "Microservices"],
      bannerBody: "Node.js powers server-side middleware, asset orchestration, and real-time streaming feeds with robust fault tolerance.",
      link: "#"
    }
  },
  {
    id: "docker",
    name: "Cloud & Docker",
    category: "DEVOPS · CI/CD · CONTAINERIZATION",
    type: "tools",
    monogram: "🐳",
    tagline: "Multi-stage Docker builds, GitHub Actions CI/CD pipelines, and global edge deployments.",
    bgClass: "bg-gradient-to-br from-[#091d2c] via-[#05121c] to-[#02080e]",
    accent: "#67e8f9",
    glowColor: "rgba(103, 232, 249, 0.35)",
    bannerBg: "from-[#67e8f9] to-[#c4b5fd]",
    story: {
      breadcrumb: "Competencies / Cloud & DevOps",
      title: "Automated Zero-Downtime Releases with Multi-Stage Docker & GitHub Actions",
      desc: "Built hermetic container images reducing deployment footprint by 70%, backed by automated test suites and instant rollback infrastructure.",
      metrics: [
        { label: "Image Size", value: "<85MB Alpine" },
        { label: "Deploy Time", value: "<90s Pipeline" },
        { label: "Uptime", value: "99.98% SLA" },
        { label: "Security", value: "Rootless Daemon" }
      ],
      overview: "Reliability in modern engineering stems from repeatable, isolated build environments. By architecting multi-stage Docker builds with Alpine bases, caching node_modules layers, and automating GitHub Actions workflows, updates ship to production with 100% confidence.",
      keyPoints: [
        "Multi-stage Docker builds stripping build-time dependencies from production images",
        "Automated CI testing, TypeScript type verification, and lint auditing on every PR",
        "Global edge deployments with instant rollback capability",
        "Environment secret isolation adhering to 12-factor application standards"
      ],
      bannerEyebrow: "Cloud & Containerization · Zero Downtime Releases",
      bannerHeading: "Hermetic Multi-Stage Containers Backed by Automated CI/CD Pipelines",
      bannerBadges: ["Docker", "GitHub Actions", "CI/CD", "Edge Deploy"],
      bannerBody: "Cloud containerization ensures that development, staging, and production environments behave with absolute uniformity.",
      link: "#"
    }
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "RELATIONAL DATA ARCHITECTURE",
    type: "tools",
    monogram: "🐘",
    tagline: "ACID-compliant schemas, B-tree index tuning, Prisma/Drizzle ORM, and JSONB analytics.",
    bgClass: "bg-gradient-to-br from-[#0d162e] via-[#080d1e] to-[#03060d]",
    accent: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.35)",
    bannerBg: "from-[#38bdf8] to-[#a7f3d0]",
    story: {
      breadcrumb: "Competencies / PostgreSQL Architecture",
      title: "High-Performance Relational Data Modeling with Sub-Millisecond Queries",
      desc: "Designed normalized database schemas, partial composite indexes, and connection pooling handling high-frequency write/read traffic with ACID guarantees.",
      metrics: [
        { label: "Query Time", value: "<2ms Indexed" },
        { label: "Reliability", value: "ACID Guaranteed" },
        { label: "ORM", value: "Prisma & Drizzle" },
        { label: "Scale", value: "Connection Pooled" }
      ],
      overview: "Data integrity is non-negotiable. PostgreSQL provides rock-solid ACID relational guarantees, versatile JSONB semi-structured storage, and powerful indexing strategies that allow applications to query millions of rows in milliseconds.",
      keyPoints: [
        "Strict foreign-key constraints, enum types, and check triggers preventing data corruption",
        "B-tree and GiST spatial indexing reducing query execution latency by up to 92%",
        "Connection pooling (PgBouncer) for seamless serverless cold-start resilience",
        "Automated migration pipelines integrated directly into continuous deployment"
      ],
      bannerEyebrow: "Database Engineering · Sub-2ms Query Latency",
      bannerHeading: "ACID-Compliant Relational Schemas Tuned For High-Throughput Analytics",
      bannerBadges: ["Postgres 16", "Prisma", "Drizzle", "SQL Indexing"],
      bannerBody: "Reliable database schemas ensure transactions, user inputs, and project metadata are stored securely and queried with lightning speed.",
      link: "#"
    }
  },

  // --- CLIENT PRODUCTION STORIES (EXACT FROM REFERENCE2.MP4) ---
  {
    id: "typesafe",
    name: "TypeSafe AI",
    category: "CLIENT STORY · SYSTEM LAUNCH",
    type: "stories",
    monogram: "◈",
    tagline: "Strictly typed, end-to-end type-safe artificial intelligence platforms and inference engines.",
    bgClass: "bg-gradient-to-br from-[#3b0f32] via-[#23091e] to-[#0d030b]",
    accent: "#ec4899", // Magenta Pink
    glowColor: "rgba(236, 72, 153, 0.4)",
    bannerBg: "from-[#ec4899] to-[#c4b5fd]",
    story: {
      breadcrumb: "Stories / TypeSafe AI",
      title: "How TypeSafe AI Built Their Site for a Big Launch",
      desc: "Launched Jev's site in four active build days, drew 4.8M unique visitors, and logged 200k+ form submissions in the first three launch days.",
      metrics: [
        { label: "Launch Window", value: "4 Build Days" },
        { label: "Unique Visitors", value: "4.8M Visitors" },
        { label: "Submissions", value: "200k+ Forms" },
        { label: "Uptime", value: "99.99%" }
      ],
      overview: "After two years in stealth, TypeSafe AI needed a site to introduce Jev, an AI model that helps software make decisions with a measure of confidence. With help from agency Fuzzco, the team built it in Framer, giving Jev a distinct visual introduction and TypeSafe a site it could update independently after launch.",
      keyPoints: [
        "Four active build days from concept sign-off to global high-traffic launch",
        "Zero-drop infrastructure handling 4.8M visitors and 200k+ form submissions",
        "Dynamic properties of code visual layout introducing the Jev System One model",
        "Componentized design system allowing independent non-technical updates"
      ],
      bannerEyebrow: "Introducing Jev · Intelligence Beyond Chat",
      bannerHeading: "The First (Public) System One Model; Jev Gives AI The Properties Of Code",
      bannerBadges: ["AI", "11-50", "2024", "40M", "Seed"],
      bannerBody: "After two years in stealth, TypeSafe AI needed a site to introduce Jev, an AI model that helps software make decisions with a measure of confidence. With help from agency Fuzzco, the team built it in Framer, giving Jev a distinct visual introduction and TypeSafe a site it could update independently after launch.",
      link: "#"
    }
  },
  {
    id: "perplexity",
    name: "perplexity",
    category: "CLIENT STORY · NEURAL SEARCH",
    type: "stories",
    monogram: "❊",
    tagline: "Generative search engine with real-time neural web indexing and LLM reasoning.",
    bgClass: "bg-gradient-to-br from-[#0c1c2e] via-[#07111c] to-[#03060a]",
    accent: "#67e8f9",
    glowColor: "rgba(103, 232, 249, 0.4)",
    bannerBg: "from-[#67e8f9] to-[#38bdf8]",
    story: {
      breadcrumb: "Stories / Perplexity",
      title: "How Perplexity Built Ultra-Fast Neural Generative Search",
      desc: "Processes 45M+ queries daily with 99.98% uptime, sub-250ms latency, and streaming neural summaries across global edge endpoints.",
      metrics: [
        { label: "Daily Queries", value: "45M+ Requests" },
        { label: "Latency", value: "<250ms P99" },
        { label: "Uptime", value: "99.98% SLA" },
        { label: "Index", value: "Real-time Neural" }
      ],
      overview: "Perplexity reimagines human knowledge retrieval. Combining real-time web crawler indices with high-performance LLM synthesis clusters, it answers complex inquiries directly with cited sources in milliseconds.",
      keyPoints: [
        "Distributed Triton cluster orchestration streaming token responses under 250ms",
        "Autonomous retrieval-augmented generation (RAG) with verified citation graphs",
        "Edge-cached query deduplication reducing redundant inference costs by 48%",
        "Minimalist keyboard-first interface optimized for instant exploratory workflows"
      ],
      bannerEyebrow: "Real-Time Neural Web Indexing · Latency Under 250ms",
      bannerHeading: "Autonomous Retrieval Augmented Search with End-to-End Triton Cluster Pipelines",
      bannerBadges: ["Search", "LLM", "2024", "Unicorn", "Series B"],
      bannerBody: "Processing tens of millions of complex queries daily, the architecture delivers instant, factual summaries with direct source verification.",
      link: "#"
    }
  },
  {
    id: "legora",
    name: "LEGORA",
    isSerif: true,
    category: "CLIENT STORY · ENTERPRISE DESIGN",
    type: "stories",
    monogram: "L",
    tagline: "Architectural enterprise design system & scalable high-traffic web platform.",
    bgClass: "bg-gradient-to-br from-[#0f1b2b] via-[#08101a] to-[#04080d]",
    accent: "#c4b5fd",
    glowColor: "rgba(196, 181, 253, 0.4)",
    bannerBg: "from-[#c4b5fd] to-[#a7f3d0]",
    story: {
      breadcrumb: "Stories / LEGORA",
      title: "How LEGORA Scaled Global Design Systems to 10M Users",
      desc: "Architected high-performance modular design system reducing deployment overhead by 64% with near-perfect Core Web Vitals.",
      metrics: [
        { label: "Active Users", value: "10M+ Global" },
        { label: "Overhead", value: "-64% Deploy" },
        { label: "Web Vitals", value: "Near-Perfect" },
        { label: "Components", value: "120+ Atomic" }
      ],
      overview: "LEGORA powers enterprise-grade digital architecture. By unifying fractured brand identities into a synchronized, accessible tokenized design system, development velocity increased fourfold while rendering times dropped significantly.",
      keyPoints: [
        "Distributed Next.js edge caching and scalable component framework libraries",
        "Automated Figma-to-code token synchronization pipeline",
        "Zero-CLS layout stability across desktop, tablet, and mobile breakpoints",
        "Micro-animation design standards improving user engagement metrics by 38%"
      ],
      bannerEyebrow: "Modular System Architecture · 10M Active Users",
      bannerHeading: "Distributed Next.js Edge Caching & Scalable Component Frameworks",
      bannerBadges: ["Design System", "Enterprise", "Framer", "Scale"],
      bannerBody: "Empowering millions of daily enterprise interactions, the unified platform ensures visual consistency and sub-second load times worldwide.",
      link: "#"
    }
  },
  {
    id: "mixpanel",
    name: "mixpanel",
    category: "CLIENT STORY · REAL-TIME TELEMETRY",
    type: "stories",
    monogram: "M",
    tagline: "Real-time user behavior analytics, event streaming pipelines & conversion funnels.",
    bgClass: "bg-gradient-to-br from-[#281c3c] via-[#170f24] to-[#08050d]",
    accent: "#c4b5fd",
    glowColor: "rgba(196, 181, 253, 0.4)",
    bannerBg: "from-[#c4b5fd] to-[#67e8f9]",
    story: {
      breadcrumb: "Stories / mixpanel",
      title: "Real-Time Analytics Ingesting 1.2B Events Monthly",
      desc: "Zero-drop ingestion pipeline powering conversion funnels, retention tracking, and millisecond analytical SQL queries.",
      metrics: [
        { label: "Monthly Events", value: "1.2B Ingested" },
        { label: "Query Speed", value: "<15ms Analytical" },
        { label: "Data Drop", value: "0% Loss" },
        { label: "Funnels", value: "Real-Time" }
      ],
      overview: "Mixpanel provides deep product intelligence. Ingesting billions of user interaction events monthly, its distributed column-store architecture empowers engineering teams to build data-driven products with clarity.",
      keyPoints: [
        "Fault-tolerant distributed Kafka streaming architecture with real-time aggregation",
        "Sub-15ms analytical cohort queries across terabytes of historical telemetry",
        "Zero-drop event buffer queues guaranteeing data consistency during peak bursts",
        "Interactive conversion funnel visualizations rendered with hardware acceleration"
      ],
      bannerEyebrow: "Event Stream Pipeline · 1.2B Monthly Events",
      bannerHeading: "Fault-Tolerant Distributed Kafka Architecture & Real-Time Aggregation",
      bannerBadges: ["Analytics", "Big Data", "Kafka", "Product Intel"],
      bannerBody: "Processing massive real-time data streams without dropping a single event, the telemetry engine enables deep behavioral product insights.",
      link: "#"
    }
  },
  {
    id: "zapier",
    name: "_zapier",
    category: "CLIENT STORY · AUTONOMOUS WORKFLOWS",
    type: "stories",
    monogram: "_Z",
    tagline: "Intelligent workflow orchestration connecting 6,000+ APIs with autonomous agent triggers.",
    bgClass: "bg-gradient-to-br from-[#2e1808] via-[#1a0e04] to-[#0a0501]",
    accent: "#fb923c", // Cyber Orange
    glowColor: "rgba(251, 146, 60, 0.4)",
    bannerBg: "from-[#fb923c] to-[#fda4af]",
    story: {
      breadcrumb: "Stories / _zapier",
      title: "Autonomous Multi-Step AI Agent Workflows at Scale",
      desc: "Automated 350k+ monthly task executions, reducing manual overhead by 82% across 6,000+ app connectors.",
      metrics: [
        { label: "Monthly Tasks", value: "350k+ Automated" },
        { label: "Integrations", value: "6,000+ Connectors" },
        { label: "Efficiency", value: "-82% Manual Effort" },
        { label: "Uptime", value: "99.99%" }
      ],
      overview: "Zapier powers the world's automated workflows. Connecting thousands of disconnected SaaS applications and enterprise APIs, it orchestrates automated multi-step decision trees and autonomous agent executions with high reliability.",
      keyPoints: [
        "Asynchronous event-driven webhook automation engine handling massive bursts",
        "Intelligent AI prompt filtering and automated decision logic routing",
        "Resilient retry mechanisms with exponential backoff for third-party API rate limits",
        "Zero-code visual orchestration canvas paired with extensible developer webhooks"
      ],
      bannerEyebrow: "Intelligent Orchestration · 6,000+ App Connectors",
      bannerHeading: "Asynchronous Event-Driven Webhook Automation Engine",
      bannerBadges: ["Automation", "6k+ APIs", "AI Agents", "Workflows"],
      bannerBody: "Orchestrating hundreds of thousands of automated business logic tasks each month, the platform removes repetitive friction across organizations.",
      link: "#"
    }
  }
];

export default function SkillsSection() {
  const [activeStory, setActiveStory] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveStory(null);
      }
    };

    if (activeStory) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStory]);

  // Filter items
  const filteredItems =
    activeCategory === "all"
      ? competencyStoriesData
      : competencyStoriesData.filter((item) => item.type === activeCategory);

  // Divide into two alternating rows for dynamic continuous motion
  const row1 = filteredItems.filter((_, idx) => idx % 2 === 0);
  const row2 = filteredItems.filter((_, idx) => idx % 2 !== 0);

  // Duplicate for seamless infinite marquee loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section
      id="skillsSection"
      className="relative w-full py-20 sm:py-28 px-3 sm:px-6 bg-[#060813] text-white flex flex-col items-center border-t border-white/10 overflow-hidden z-20"
      aria-label="Technical Tooling and Competencies Showcase"
    >
      {/* Background Architectural Grid & Video-Derived Ambient Aura */}
      <div className="absolute inset-0 bg-grid-architectural opacity-30 pointer-events-none z-0" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1200px] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,rgba(99,102,241,0.06)_40%,rgba(232,121,249,0.04)_70%,transparent_80%)] blur-[90px] pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Header - Industrial Engineering Manifest */}
      <div className="text-center max-w-3xl mb-10 sm:mb-14 relative z-10 px-2">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#080c1f]/95 border border-[#00f0ff]/60 mb-2.5 shadow-[2px_2px_0px_0px_#00f0ff]">
          <span className="w-2 h-2 rounded-none bg-[#00f0ff] animate-pulse" />
          <span className="font-mono text-[11px] font-black text-[#00f0ff] tracking-widest uppercase">
            TECHNICAL TOOLING & COMPETENCIES
          </span>
          <span className="text-white/40">//</span>
          <span className="font-mono text-[10px] text-white/60">SYS::VERIFIED</span>
        </div>

        <h2
          style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white uppercase mb-3 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
        >
          CAPABILITIES & CLIENT INSIGHTS
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-white/75 max-w-xl mx-auto leading-relaxed">
          Infinite motion competencies stream. Hover any card to illuminate its visual backdrop; click{" "}
          <span className="text-[#00f0ff] font-mono font-bold border-b border-[#00f0ff]/50">Read insight →</span> to explore architectural metrics and execution details.
        </p>

        {/* Category Filter Pills - Industrial Mechanical Deck */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 p-1.5 bg-[#080c1f]/90 border border-white/15 max-w-2xl mx-auto shadow-[4px_4px_0px_0px_rgba(0,240,255,0.1)]">
          {[
            { id: "all", label: "All Tooling & Stories" },
            { id: "languages", label: "Languages" },
            { id: "frameworks", label: "React & Next.js" },
            { id: "ai", label: "AI & Python" },
            { id: "tools", label: "Cloud & DB" },
            { id: "stories", label: "Client Stories" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 sm:px-3.5 py-1.5 font-mono text-[11px] font-black uppercase transition-all duration-150 cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-[#00f0ff] text-black shadow-[2px_2px_0px_0px_#e879f9]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTINUOUS MOTION MARQUEE - TRACK 1 (MOVING LEFT) */}
      <div className="relative w-full max-w-[100vw] overflow-hidden py-3 z-10 [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
        <div className="animate-marquee-left flex gap-4 sm:gap-6 px-3">
          {marqueeRow1.map((item, idx) => (
            <article
              key={`${item.id}-r1-${idx}`}
              onClick={() => setActiveStory(item)}
              className="group relative w-[240px] sm:w-[270px] h-[260px] sm:h-[285px] bg-[#0b0f24] border border-white/20 hover:border-[#00f0ff] overflow-hidden flex flex-col justify-between p-5 cursor-pointer transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#00f0ff] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] flex-shrink-0 select-none will-change-transform"
            >
              {/* Hover Backdrop Reveal */}
              <div
                className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-100 group-hover:scale-105 pointer-events-none ${item.bgClass}`}
              />

              {/* Specular Scanlines on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 scanline-overlay pointer-events-none z-[1]" />

              {/* Top Badge & Category */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/90 border border-white/25">
                  <span
                    style={{
                      backgroundColor: item.accent
                    }}
                    className="w-2 h-2 rounded-none animate-pulse"
                  />
                  <span className="font-mono text-[11px] font-black text-white">
                    {item.monogram}
                  </span>
                </div>

                <span className="font-mono text-[10px] font-bold tracking-wider text-[#00f0ff] uppercase bg-black/80 px-2 py-0.5 border border-[#00f0ff]/30">
                  {item.category.split("·")[0]}
                </span>
              </div>

              {/* Middle Title & Tagline */}
              <div className="relative z-10 flex flex-col gap-1.5 my-auto">
                <h3
                  style={{ fontFamily: item.isSerif ? "serif" : "var(--font-syne), var(--font-display), sans-serif" }}
                  className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-md group-hover:text-white transition-colors leading-tight uppercase"
                >
                  {item.name}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-white/70 group-hover:text-white/95 line-clamp-2 leading-relaxed transition-colors duration-200">
                  {item.tagline}
                </p>
              </div>

              {/* Bottom "Read insight →" CTA */}
              <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-white/15 group-hover:border-white/30 transition-colors">
                <span className="font-mono text-[11px] font-black text-white/90 group-hover:text-[#00f0ff] flex items-center gap-1.5 transition-all duration-200 uppercase">
                  Read insight{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 font-bold">
                    →
                  </span>
                </span>

                <span className="font-mono text-[9px] font-bold text-white/40 group-hover:text-white/80 uppercase">
                  Spec ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CONTINUOUS MOTION MARQUEE - TRACK 2 (MOVING RIGHT) */}
      <div className="relative w-full max-w-[100vw] overflow-hidden py-3 z-10 [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)] mt-2">
        <div className="animate-marquee-right flex gap-4 sm:gap-6 px-3">
          {marqueeRow2.map((item, idx) => (
            <article
              key={`${item.id}-r2-${idx}`}
              onClick={() => setActiveStory(item)}
              className="group relative w-[240px] sm:w-[270px] h-[260px] sm:h-[285px] bg-[#0b0f24] border border-white/20 hover:border-[#e879f9] overflow-hidden flex flex-col justify-between p-5 cursor-pointer transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#e879f9] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] flex-shrink-0 select-none will-change-transform"
            >
              {/* Hover Backdrop Reveal */}
              <div
                className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-100 group-hover:scale-105 pointer-events-none ${item.bgClass}`}
              />

              {/* Specular Scanlines on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 scanline-overlay pointer-events-none z-[1]" />

              {/* Top Badge & Category */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/90 border border-white/25">
                  <span
                    style={{
                      backgroundColor: item.accent
                    }}
                    className="w-2 h-2 rounded-none animate-pulse"
                  />
                  <span className="font-mono text-[11px] font-black text-white">
                    {item.monogram}
                  </span>
                </div>

                <span className="font-mono text-[9px] font-bold tracking-wider text-[#e879f9] uppercase bg-black/80 px-2 py-0.5 border border-[#e879f9]/30">
                  {item.category.split("·")[0]}
                </span>
              </div>

              {/* Middle Title & Tagline */}
              <div className="relative z-10 flex flex-col gap-1.5 my-auto">
                <h3
                  style={{ fontFamily: item.isSerif ? "serif" : "var(--font-syne), var(--font-display), sans-serif" }}
                  className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-md group-hover:text-white transition-colors leading-tight uppercase"
                >
                  {item.name}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-white/70 group-hover:text-white/95 line-clamp-2 leading-relaxed transition-colors duration-200">
                  {item.tagline}
                </p>
              </div>

              {/* Bottom "Read insight →" CTA */}
              <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-white/15 group-hover:border-white/30 transition-colors">
                <span className="font-mono text-[11px] font-black text-white/90 group-hover:text-[#e879f9] flex items-center gap-1.5 transition-all duration-200 uppercase">
                  Read insight{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 font-bold">
                    →
                  </span>
                </span>

                <span className="font-mono text-[9px] font-bold text-white/40 group-hover:text-white/80 uppercase">
                  Technical ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PAUSE / SPEED HINT - Neo-Brutalist Status Readout */}
      <div className="mt-8 px-4 py-1.5 bg-[#080c1f]/90 border border-white/20 text-center text-[11px] font-mono text-white/70 flex items-center gap-2 z-10 shadow-[2px_2px_0px_0px_#00f0ff]">
        <span className="inline-block w-2 h-2 bg-[#00f0ff] animate-ping" />
        <span>HOVER ANY CARD TO PAUSE MOTION & REVEAL BACKDROP</span>
      </div>

      {/* DEEP-DIVE INSIGHTS / STORY MODAL - ARCHITECTURAL BROADSHEET DOSSIER */}
      {activeStory && (
        <div
          onClick={() => setActiveStory(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#080c1f] border-2 border-[#00f0ff] p-6 sm:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.98),0_0_60px_rgba(0,240,255,0.25)] flex flex-col gap-6 my-auto select-text custom-scrollbar"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-[#111634] hover:bg-[#00f0ff] hover:text-black border-2 border-white/30 hover:border-black flex items-center justify-center text-white text-base font-black transition-all hover:rotate-90 z-20 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] cursor-pointer"
              aria-label="Close Story Insights"
            >
              ✕
            </button>

            {/* Breadcrumb Header */}
            <div className="flex items-center gap-2 text-xs font-mono font-black text-white/50 tracking-wider">
              <span>{activeStory.story.breadcrumb}</span>
              <span className="text-white/25">/</span>
              <span className="text-[#00f0ff]">{activeStory.name}</span>
            </div>

            {/* Main Headline */}
            <h2
              id="story-modal-title"
              style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
              className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight pr-10 uppercase drop-shadow-md"
            >
              {activeStory.story.title}
            </h2>

            {/* High-Level Impact Summary */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl border-l-4 border-[#00f0ff] pl-4 bg-white/[0.02] py-2">
              {activeStory.story.desc}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              {activeStory.story.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#111634] border border-white/15 flex flex-col gap-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)]"
                >
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider font-bold">
                    {metric.label}
                  </span>
                  <span className="text-lg sm:text-xl font-mono font-black text-[#00f0ff]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Deep-Dive Architectural Overview */}
            <div className="flex flex-col gap-3 py-2 text-sm sm:text-base text-white/80 leading-relaxed border-t-2 border-white/10 pt-4">
              <h4 className="font-mono text-xs font-black text-[#00f0ff] tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-none bg-[#00f0ff] animate-pulse" />
                <span>ENGINEERING EXECUTION & PATTERNS</span>
              </h4>
              <p>{activeStory.story.overview}</p>

              {/* Key Capabilities List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                {activeStory.story.keyPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 p-3 bg-[#111634] border border-white/15"
                  >
                    <span className="font-mono text-[#e879f9] font-black text-xs">[ § 0{idx + 1} ]</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* High-Contrast Signature Broadsheet Banner */}
            <div className="w-full bg-[#f5f5f7] text-black border-4 border-black p-6 sm:p-8 flex flex-col gap-3.5 shadow-[6px_6px_0px_0px_#00f0ff] mt-1">
              {/* Banner Eyebrow Header */}
              <div className="flex items-center justify-between border-b-2 border-black/20 pb-3 font-mono text-[11px] font-black text-neutral-700 uppercase">
                <span className="truncate">{activeStory.story.bannerEyebrow}</span>
                <span className="hidden sm:inline bg-black text-[#00f0ff] px-2 py-0.5">Production Ready</span>
              </div>

              {/* Banner Main Title */}
              <h3
                style={{ fontFamily: "var(--font-syne), var(--font-display), sans-serif" }}
                className="text-xl sm:text-3xl font-black tracking-tight leading-snug text-black uppercase"
              >
                {activeStory.story.bannerHeading}
              </h3>

              {/* Banner Tags / Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeStory.story.bannerBadges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="font-mono text-[11px] font-black px-3 py-1 bg-black text-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Banner Body Explanation */}
              <p className="font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed pt-1">
                {activeStory.story.bannerBody}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-3 border-t-2 border-white/10 flex-wrap gap-3">
              <a
                href="#projectsSection"
                onClick={() => {
                  setActiveStory(null);
                }}
                className="font-mono text-xs font-black uppercase text-black bg-[#00f0ff] hover:bg-[#e879f9] border-2 border-white px-6 py-3 shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[5px_5px_0px_0px_#e879f9] flex items-center gap-2 cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <span>Explore Live Projects</span>
                <span>→</span>
              </a>

              <button
                onClick={() => setActiveStory(null)}
                className="font-mono text-xs font-bold text-white/70 hover:text-white px-4 py-2 cursor-pointer transition-colors"
              >
                Close insight [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
