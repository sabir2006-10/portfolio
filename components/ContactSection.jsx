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
      className="relative w-full min-h-screen py-28 px-6 bg-[#05040a] text-white flex flex-col items-center justify-center overflow-hidden border-t border-white/10"
      aria-label="Contact and Socials"
    >
      {/* Aurora Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[20%] left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#c4b5fd] to-[#67e8f9] blur-[140px] animate-pulse" />
        <div className="absolute -bottom-[20%] right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#fda4af] to-[#a7f3d0] blur-[140px] animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fda4af]/10 border border-[#fda4af]/25 text-[#fda4af] font-mono text-xs font-bold uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#fda4af] shadow-[0_0_10px_#fda4af]" />
          GET IN TOUCH • COLLABORATIONS & ROLES
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-[#c4b5fd] to-[#67e8f9] bg-clip-text text-transparent mb-4">
          LET'S BUILD TOGETHER
        </h2>
        <p className="text-white/70 text-base sm:text-lg">
          Have an exciting project, full-time engineering role, or research collaboration? Drop a line or connect across direct channels.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Card */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-[rgba(15,12,28,0.7)] border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a7f3d0]/10 border border-[#a7f3d0]/30 text-[#a7f3d0] font-mono text-xs font-bold w-fit">
            <span className="w-2 h-2 rounded-full bg-[#a7f3d0] animate-ping" />
            AVAILABLE FOR FULL-TIME ROLES
          </div>

          <div>
            <h3 className="text-2xl font-black text-white">Syed Sabirudeen B</h3>
            <p className="text-white/65 text-sm mt-2 leading-relaxed">
              Mobile and Web App Developer specializing in Flutter, Firebase, Full-Stack MERN platforms, and Google Gemini AI integration.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* Email Block */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#67e8f9]/10 border border-[#67e8f9]/20 flex items-center justify-center text-[#67e8f9]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-white/50">Direct Email</span>
                  <a href="mailto:sabirudeensyed@gmail.com" className="font-sans text-xs sm:text-sm font-semibold text-white hover:text-[#67e8f9] transition-colors">
                    sabirudeensyed@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-full font-mono text-xs font-bold text-white bg-white/10 hover:bg-[#67e8f9] hover:text-black border border-white/15 transition-all cursor-pointer"
              >
                {copied ? "Copied! ✓" : "Copy"}
              </button>
            </div>

            {/* Phone Block */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#a7f3d0]/10 border border-[#a7f3d0]/20 flex items-center justify-center text-[#a7f3d0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-white/50">Phone / WhatsApp</span>
                <a href="tel:+917358578018" className="font-sans text-xs sm:text-sm font-semibold text-white hover:text-[#a7f3d0] transition-colors">
                  +91 7358578018
                </a>
              </div>
            </div>

            {/* Location Block */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#c4b5fd]/10 border border-[#c4b5fd]/20 flex items-center justify-center text-[#c4b5fd]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-white/50">Location</span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-white">Chennai, India • Remote / Relocation</span>
              </div>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <a
              href="https://github.com/sabir2006-10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#67e8f9]/50 text-xs font-semibold text-white transition-all hover:scale-105"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/syed-sabirudeen-8081a42b0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#c4b5fd]/50 text-xs font-semibold text-white transition-all hover:scale-105"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Syed_Sabirudeen_B_Resume.pdf"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#a7f3d0]/20 via-[#67e8f9]/20 to-[#c4b5fd]/20 hover:from-[#a7f3d0]/35 hover:to-[#c4b5fd]/35 border border-[#67e8f9]/50 hover:border-[#67e8f9] text-xs font-bold text-[#67e8f9] transition-all hover:scale-105 shadow-[0_0_15px_rgba(103,232,249,0.25)]"
            >
              <span>Download Resume (PDF)</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-[rgba(15,12,28,0.7)] border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {formSubmitted ? (
            <div className="py-16 flex flex-col items-center justify-center text-center gap-3">
              <span className="w-14 h-14 rounded-full bg-[#a7f3d0]/20 border border-[#a7f3d0] flex items-center justify-center text-[#a7f3d0] text-2xl">
                ✓
              </span>
              <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
              <p className="text-white/70 max-w-md text-sm">
                Thank you for getting in touch. I will review your note and respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-semibold text-white/80">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#67e8f9] focus:outline-none focus:ring-1 focus:ring-[#67e8f9] text-white placeholder-white/30 text-sm transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-semibold text-white/80">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#67e8f9] focus:outline-none focus:ring-1 focus:ring-[#67e8f9] text-white placeholder-white/30 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs font-semibold text-white/80">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#67e8f9] focus:outline-none focus:ring-1 focus:ring-[#67e8f9] text-white placeholder-white/30 text-sm transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs font-semibold text-white/80">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or engineering role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#67e8f9] focus:outline-none focus:ring-1 focus:ring-[#67e8f9] text-white placeholder-white/30 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl font-sans text-sm font-bold text-black bg-gradient-to-r from-[#a7f3d0] via-[#67e8f9] to-[#c4b5fd] hover:shadow-[0_0_25px_rgba(103,232,249,0.5)] transition-all duration-300 hover:scale-[1.01]"
              >
                <span>Send Message</span>
                <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
