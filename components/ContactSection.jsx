"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sabirudeensyed@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contactSection"
      className="relative w-full min-h-screen py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#060813] text-[#f5f5f7] flex flex-col items-center justify-center overflow-hidden border-t border-white/20"
      aria-label="Contact and Socials"
    >
      {/* Background Architectural Canvas Grid & Registration Crosshairs */}
      <div className="absolute inset-0 bg-grid-architectural opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] via-[#818cf8] to-[#e879f9]" />

      {/* Crosshair Markers */}
      <span className="absolute top-6 left-6 font-mono text-[10px] text-white/30 tracking-widest pointer-events-none select-none">
        + COMM_STATION // CHENNAI_NODE
      </span>
      <span className="absolute top-6 right-6 font-mono text-[10px] text-white/30 tracking-widest pointer-events-none select-none">
        LAT 13.0827° N / LONG 80.2707° E +
      </span>
      <span className="absolute bottom-6 left-6 font-mono text-[10px] text-white/30 tracking-widest pointer-events-none select-none">
        + STATUS: TRANSMISSION_READY
      </span>
      <span className="absolute bottom-6 right-6 font-mono text-[10px] text-white/30 tracking-widest pointer-events-none select-none">
        SECURITY: VERIFIED_SSL +
      </span>

      {/* Massive Background Typography Watermark */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 font-syne font-black text-[12vw] text-white/[0.018] tracking-tighter uppercase whitespace-nowrap pointer-events-none select-none"
        aria-hidden="true"
      >
        COMMUNICATIONS
      </div>

      {/* Section Header */}
      <div className="relative z-10 w-full max-w-6xl mb-10 sm:mb-14">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/15">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-[#e879f9]/40 font-mono text-xs font-bold text-[#e879f9] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-none bg-[#e879f9] shadow-[0_0_8px_#e879f9]" />
            GET IN TOUCH • COLLABORATIONS & ROLES
          </div>
          <div className="font-mono text-xs text-white/40 tracking-widest uppercase">
            [ DIRECT PROTOCOL · CHENNAI_NODE ]
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-widest block mb-2">
              DISPATCH & SYNCHRONIZATION
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
              LET'S BUILD <span className="text-[#00f0ff] underline decoration-[#e879f9] decoration-4 underline-offset-8">TOGETHER</span>
            </h2>
          </div>
          <p className="font-sans text-white/70 text-xs sm:text-sm md:text-base max-w-md leading-relaxed border-l-2 border-[#00f0ff] pl-4">
            Have an exciting project, full-time engineering role, or research collaboration? Drop a line or connect across direct channels.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Card Dossier */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#080c1f] border-2 border-white/20 shadow-[8px_8px_0_0_rgba(0,240,255,0.15)] flex flex-col gap-6 relative">
          {/* Architectural Registration Accents */}
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff]" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#e879f9]" />

          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] animate-ping" />
              AVAILABLE FOR FULL-TIME ROLES
            </div>
            <span className="font-mono text-[10px] text-white/40 uppercase">STATUS: ACTIVE</span>
          </div>

          <div>
            <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase block mb-1">
              ENGINEER DOSSIER // CHENNAI_HQ
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              Syed Sabirudeen B
            </h3>
            <p className="font-sans text-white/70 text-xs sm:text-sm mt-3 leading-relaxed border-l border-white/20 pl-3">
              Mobile and Web App Developer specializing in Flutter, Firebase, Full-Stack MERN platforms, and Google Gemini AI integration.
            </p>
          </div>

          {/* Contact Methods Ledger */}
          <div className="flex flex-col gap-3">
            {/* Email Block */}
            <div className="p-4 bg-white/[0.03] border border-white/15 hover:border-[#00f0ff] transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] font-mono text-sm font-bold shrink-0">
                    ✉
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] uppercase text-white/50 tracking-wider">Direct Email</span>
                    <a
                      href="mailto:sabirudeensyed@gmail.com"
                      className="font-mono text-xs sm:text-sm font-bold text-white hover:text-[#00f0ff] transition-colors truncate"
                    >
                      sabirudeensyed@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 font-mono text-[11px] font-bold uppercase text-white bg-white/10 hover:bg-[#00f0ff] hover:text-black border border-white/20 transition-all cursor-pointer shrink-0"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* Phone Block */}
            <div className="p-4 bg-white/[0.03] border border-white/15 hover:border-[#00f0ff] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] font-mono text-sm font-bold shrink-0">
                  ☎
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-white/50 tracking-wider">Phone / WhatsApp</span>
                  <a
                    href="tel:+917358578018"
                    className="font-mono text-xs sm:text-sm font-bold text-white hover:text-[#00f0ff] transition-colors"
                  >
                    +91 7358578018
                  </a>
                </div>
              </div>
            </div>

            {/* Location Block */}
            <div className="p-4 bg-white/[0.03] border border-white/15 hover:border-[#818cf8] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#818cf8]/10 border border-[#818cf8]/30 flex items-center justify-center text-[#818cf8] font-mono text-sm font-bold shrink-0">
                  ⌖
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-white/50 tracking-wider">Location</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    Chennai, India • Remote / Relocation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            <a
              href="https://github.com/sabir2006-10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-[#00f0ff] hover:text-black border border-white/20 text-xs font-mono font-bold text-white transition-all uppercase"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/syed-sabirudeen-8081a42b0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-[#818cf8] hover:text-black border border-white/20 text-xs font-mono font-bold text-white transition-all uppercase"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Syed_Sabirudeen_B_Resume.pdf"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-[#e879f9]/15 hover:bg-[#e879f9] hover:text-black border border-[#e879f9]/60 text-xs font-mono font-bold text-[#e879f9] transition-all uppercase shadow-[0_0_15px_rgba(232,121,249,0.25)]"
            >
              <span>Download Resume (PDF)</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form Terminal */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-[#080c1f] border-2 border-white/20 shadow-[8px_8px_0_0_rgba(232,121,249,0.15)] relative">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#e879f9]" />
              <span className="w-2.5 h-2.5 bg-[#fbbf24]" />
              <span className="w-2.5 h-2.5 bg-[#00f0ff]" />
              <span className="font-mono text-xs font-bold text-white tracking-wider ml-2 uppercase">
                DIRECT_TRANSMISSION_INTERFACE
              </span>
            </div>
            <span className="font-mono text-[10px] text-white/40 uppercase">ENCRYPTED // TLS 1.3</span>
          </div>

          {formSubmitted ? (
            <div className="py-16 flex flex-col items-center justify-center text-center gap-4 border-2 border-dashed border-[#00f0ff]/40 p-8 bg-[#00f0ff]/5">
              <span className="w-16 h-16 bg-[#00f0ff] text-black font-syne font-black text-3xl flex items-center justify-center">
                ✓
              </span>
              <h4 className="font-syne text-3xl font-extrabold text-white uppercase tracking-tight">
                Message Transmitted!
              </h4>
              <p className="font-sans text-white/70 max-w-md text-sm leading-relaxed">
                Thank you for getting in touch. I will review your note and respond promptly.
              </p>
              <div className="font-mono text-[11px] text-[#00f0ff] bg-black/60 px-4 py-2 border border-[#00f0ff]/30 mt-2">
                TRANSMISSION CONFIRMED · STATUS 200 OK
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#060813] border border-white/20 focus:border-[#00f0ff] focus:bg-[#00f0ff]/5 focus:outline-none text-white placeholder-white/25 font-sans text-sm transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#060813] border border-white/20 focus:border-[#00f0ff] focus:bg-[#00f0ff]/5 focus:outline-none text-white placeholder-white/25 font-sans text-sm transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-[#060813] border border-white/20 focus:border-[#818cf8] focus:bg-[#818cf8]/5 focus:outline-none text-white placeholder-white/25 font-sans text-sm transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or engineering role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#060813] border border-white/20 focus:border-[#e879f9] focus:bg-[#e879f9]/5 focus:outline-none text-white placeholder-white/25 font-sans text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-3 w-full py-4 px-6 font-syne text-sm font-extrabold uppercase tracking-wider text-black bg-[#00f0ff] hover:bg-[#e879f9] border-2 border-black transition-all duration-200 cursor-pointer shadow-[4px_4px_0_0_#ffffff] hover:shadow-[2px_2px_0_0_#ffffff] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>Send Message</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
