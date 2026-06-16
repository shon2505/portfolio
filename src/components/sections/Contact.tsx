"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { DeskScene } from "@/components/ui/DeskScene";
import { useState } from "react";
import { CONTACT_PILLS, MINI_PROJECTS, SOCIAL_LINKS } from "@/constants";

/* ─────────────────────────────────────────────────────────── */
/*  Animated Terminal Component                                */
/* ─────────────────────────────────────────────────────────── */

function MiniTerminal() {
  const lines = [
    { prompt: true, text: "whoami" },
    { prompt: false, text: "Shantanu Shahane — Full Stack Developer" },
    { prompt: true, text: "cat status.txt" },
    { prompt: false, text: '→ Available for freelance & collaboration' },
    { prompt: true, text: "ls ./stack" },
    { prompt: false, text: "React  Next.js  Node  TypeScript  Python  Java" },
  ];

  return (
    <div className="font-mono text-[11px] leading-relaxed space-y-1">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
          className="flex items-start gap-1.5"
        >
          {line.prompt ? (
            <>
              <span className="text-[#00ffcc] shrink-0 select-none">❯</span>
              <span className="text-white/70">{line.text}</span>
            </>
          ) : (
            <span className="text-white/40 pl-3">{line.text}</span>
          )}
        </motion.div>
      ))}
      {/* Blinking cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="flex items-center gap-1.5"
      >
        <span className="text-[#00ffcc] select-none">❯</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
          className="inline-block w-[7px] h-[14px] bg-[#00ffcc]/80"
        />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Glass Card Wrapper                                         */
/* ─────────────────────────────────────────────────────────── */

function GlassCard({
  children,
  className = "",
  delay = 0,
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.3 } }}
      className={`relative rounded-2xl border border-white/[0.07] overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/[0.14] group ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        boxShadow: glow
          ? "0 0 0 1px rgba(0,255,204,0.04), 0 8px 32px rgba(0,0,0,0.3), 0 0 60px rgba(0,255,204,0.03)"
          : "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Top-edge glow */}
      {glow && (
        <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/15 to-transparent" />
      )}
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Main Contact Component                                     */
/* ─────────────────────────────────────────────────────────── */

export function Contact() {
  const [selectedPills, setSelectedPills] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const togglePill = (pill: string) => {
    setSelectedPills((prev) =>
      prev.includes(pill) ? prev.filter((p) => p !== pill) : [...prev, pill]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setSubmitStatus("error");
      setFeedback("Please fill out both Name and Email.");
      setTimeout(() => {
        setSubmitStatus("idle");
        setFeedback("");
      }, 4000);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey || accessKey === "your_access_key_here") {
      setSubmitStatus("error");
      setFeedback("Web3Forms API key is missing. Please configure your .env.local file.");
      setTimeout(() => {
        setSubmitStatus("idle");
        setFeedback("");
      }, 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          interests: selectedPills.join(", "),
          from_name: "Developer Portfolio Form",
        }),
      });

      const data = await response.json();

      if (response.status === 200 || data.success) {
        setSubmitStatus("success");
        setFeedback("Message sent successfully! I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
        setSelectedPills([]);
      } else {
        setSubmitStatus("error");
        setFeedback(data.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setFeedback("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
        setFeedback("");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#030303]">
      {/* =========================================
          PAGE 1: "LET'S WORK TOGETHER" FORM
          ========================================= */}
      <section
        id="contact"
        className="py-24 md:py-32 relative z-10 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 min-h-screen border-b border-white/10"
      >
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-white" />
            <span className="text-xs font-bold tracking-widest uppercase text-white">
              GET IN TOUCH
            </span>
          </div>

          <div className="flex justify-between items-start mb-16">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase">
              LET&apos;S WORK
              <br />
              TOGETHER
            </h2>
            <p className="hidden md:block text-white/60 max-w-[200px] text-sm text-right mt-2 font-medium">
              I&apos;m here to help you bring your ideas to life. Whether you
              need a website, app, or just want to chat, let&apos;s connect and
              make something amazing together.
            </p>
          </div>

          <form
            className="flex flex-col gap-10 w-full"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-bold text-white flex items-center gap-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Hello..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-transparent border-b border-white/20 px-0 py-3 outline-none focus:border-white transition-colors text-white placeholder-white/30 w-full rounded-none font-medium disabled:opacity-55"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-bold text-white flex items-center gap-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Where can I reply"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-transparent border-b border-white/20 px-0 py-3 outline-none focus:border-white transition-colors text-white placeholder-white/30 w-full rounded-none font-medium disabled:opacity-55"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-sm font-bold text-white"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={1}
                placeholder="Tell me about your project, opportunity, or idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                className="bg-transparent border-b border-white/20 px-0 py-3 outline-none focus:border-white transition-colors text-white placeholder-white/30 w-full resize-none rounded-none font-medium disabled:opacity-55"
              />
            </div>

            <fieldset className="flex flex-col gap-4 mt-4">
              <legend className="text-sm font-bold text-white flex items-center gap-1 mb-3">
                What&apos;s on your mind?{" "}
                <span className="text-red-500">*</span>
              </legend>
              <div className="flex flex-wrap gap-3">
                {CONTACT_PILLS.map((pill) => (
                  <button
                    key={pill}
                    type="button"
                    onClick={() => !isSubmitting && togglePill(pill)}
                    aria-pressed={selectedPills.includes(pill)}
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-sm border transition-all text-sm font-medium disabled:opacity-55 ${
                      selectedPills.includes(pill)
                        ? "border-white bg-white text-black"
                        : "border-white/20 bg-transparent text-white/70 hover:border-white hover:text-white"
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-8 self-start px-8 py-4 font-bold rounded-sm hover:scale-105 active:scale-95 transition-all duration-350 ${
                  submitStatus === "success"
                    ? "bg-emerald-500 text-white"
                    : submitStatus === "error"
                    ? "bg-rose-500 text-white"
                    : "bg-white text-black hover:bg-[#00ffcc] hover:text-black"
                } disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none`}
              >
                {isSubmitting
                  ? "Sending..."
                  : submitStatus === "success"
                  ? "Message Sent! ✓"
                  : submitStatus === "error"
                  ? "Failed to Send"
                  : "Send Me"}
              </button>

              {feedback && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs mt-2 font-mono ${
                    submitStatus === "success" ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {feedback}
                </motion.p>
              )}
            </div>
          </form>
        </div>

        {/* Right: Animated Desk Scene */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <DeskScene />
        </div>
      </section>

      {/* =========================================
          PAGE 2: PREMIUM GLASSMORPHISM FINALE
          ========================================= */}
      <section className="w-full bg-[#030303] relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-[0.04]"
            style={{ background: "radial-gradient(circle, #00ffcc, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[100px] opacity-[0.03]"
            style={{ background: "radial-gradient(circle, #00ffcc, transparent)" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative z-10">
          {/* ── Section Label ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="w-8 h-[1px] bg-[#00ffcc]/40" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#00ffcc]/60">
              THE DEVELOPER
            </span>
          </motion.div>

          {/* ── Row 1: Identity + Photo + Status ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            {/* Name / Identity Card — spans 6 cols */}
            <div className="md:col-span-6">
              <GlassCard className="p-8 md:p-10 h-full" delay={0} glow>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Mini decorative label */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-pulse" />
                    <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/30">
                      FULL STACK DEVELOPER
                    </span>
                  </div>

                  {/* Name */}
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[0.95] mb-3">
                      <span className="inline-block">SHANTANU</span>
                      <br />
                      <span className="inline-block bg-gradient-to-r from-white via-[#00ffcc]/80 to-white bg-clip-text text-transparent">
                        SHAHANE
                      </span>
                    </h2>
                    <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                      Building modern digital experiences with
                      clean code and creative thinking.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {["Developer", "Builder", "Problem Solver"].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[9px] font-bold tracking-wider uppercase border border-white/[0.06] rounded-full text-white/30 bg-white/[0.02]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Photo Card — spans 3 cols */}
            <div className="md:col-span-3">
              <GlassCard className="h-full min-h-[280px] md:min-h-0 p-0" delay={0.1} glow>
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  {/* Decorative rings behind photo */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-[160px] h-[160px] rounded-full border border-dashed border-white/[0.04]"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[200px] h-[200px] rounded-full border border-dotted border-[#00ffcc]/[0.06]"
                    />
                  </div>

                  {/* Photo container */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <div
                      className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-white/[0.1] relative group-hover:border-[#00ffcc]/20 transition-all duration-500"
                      style={{
                        boxShadow:
                          "0 0 30px rgba(0,255,204,0.06), 0 0 60px rgba(0,0,0,0.3)",
                      }}
                    >
                      {/* Replace /shantanu.png with your photo */}
                      <img
                        src="/shantanu.png"
                        alt="Shantanu Shahane"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback: show initials if image not found
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#111] items-center justify-center hidden"
                      >
                        <span className="text-3xl font-black text-white/20 tracking-widest">
                          SS
                        </span>
                      </div>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#030303] flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-[8px] font-mono text-white/15 tracking-widest uppercase">
                      @shantanu
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Status / Developer Card — spans 3 cols */}
            <div className="md:col-span-3">
              <GlassCard className="p-6 h-full" delay={0.2}>
                <div className="flex flex-col justify-between h-full">
                  {/* Status badge */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-bold tracking-widest uppercase text-emerald-400/80">
                        AVAILABLE
                      </span>
                    </div>
                    <p className="text-white/30 text-[11px] leading-relaxed mb-5">
                      Open to freelance projects, collaborations, and full-time opportunities.
                    </p>
                  </div>

                  {/* Currently Building */}
                  <div className="border-t border-white/[0.06] pt-4">
                    <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/20 block mb-2.5">
                      CURRENTLY BUILDING
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["FinTech", "AI", "Full Stack"].map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[9px] font-medium border border-[#00ffcc]/10 text-[#00ffcc]/50 rounded bg-[#00ffcc]/[0.03]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* ── Row 2: Social Links ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* GitHub */}
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard className="p-6 h-full cursor-pointer" delay={0.1}>
                <div className="flex flex-col justify-between h-full min-h-[140px]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.15] transition-colors">
                      <FaGithub className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-white/20 group-hover:text-[#00ffcc]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <path
                        d="M4 10L10 4M10 4H5M10 4V9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#00ffcc] transition-colors duration-300">
                      GitHub
                    </h3>
                    <p className="text-[10px] text-white/30">
                      Code & Open Source
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>

            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard className="p-6 h-full cursor-pointer" delay={0.15}>
                <div className="flex flex-col justify-between h-full min-h-[140px]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.15] transition-colors">
                      <FaLinkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-white/20 group-hover:text-[#00ffcc]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <path
                        d="M4 10L10 4M10 4H5M10 4V9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#00ffcc] transition-colors duration-300">
                      LinkedIn
                    </h3>
                    <p className="text-[10px] text-white/30">
                      Professional Journey
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>

            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard className="p-6 h-full cursor-pointer" delay={0.2}>
                <div className="flex flex-col justify-between h-full min-h-[140px]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.15] transition-colors">
                      <FaInstagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-white/20 group-hover:text-[#00ffcc]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <path
                        d="M4 10L10 4M10 4H5M10 4V9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#00ffcc] transition-colors duration-300">
                      Instagram
                    </h3>
                    <p className="text-[10px] text-white/30">
                      Creative Side
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>

            {/* Email */}
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="block">
              <GlassCard className="p-6 h-full cursor-pointer" delay={0.25}>
                <div className="flex flex-col justify-between h-full min-h-[140px]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00ffcc]/[0.06] border border-[#00ffcc]/[0.1] flex items-center justify-center group-hover:border-[#00ffcc]/20 transition-colors">
                      <Mail className="w-5 h-5 text-[#00ffcc]/70 group-hover:text-[#00ffcc] transition-colors" />
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-white/20 group-hover:text-[#00ffcc]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <path
                        d="M4 10L10 4M10 4H5M10 4V9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#00ffcc] transition-colors duration-300">
                      Email
                    </h3>
                    <p className="text-[10px] text-white/30">
                      Let&apos;s Build Together
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>
          </div>

          {/* ── Row 3: GitHub Projects + Terminal + Anime ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            {/* GitHub Mini Projects — spans 5 cols */}
            <div className="md:col-span-5">
              <GlassCard className="p-6 h-full" delay={0.15}>
                <div className="flex items-center gap-2.5 mb-5">
                  <FaGithub className="w-4 h-4 text-white/50" />
                  <span className="text-[11px] font-bold text-white/60">
                    github/{SOCIAL_LINKS.github.username}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {MINI_PROJECTS.slice(0, 4).map((proj) => (
                    <div
                      key={proj.title}
                      className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-3 hover:border-white/[0.1] transition-colors"
                    >
                      <h4 className="text-[11px] font-bold text-white/70 mb-0.5 truncate">
                        {proj.title}
                      </h4>
                      <p className="text-[9px] text-white/30 leading-tight truncate">
                        {proj.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={SOCIAL_LINKS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-bold tracking-wider uppercase text-white/30 hover:text-[#00ffcc]/60 transition-colors"
                >
                  View All Repositories
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M3 7L7 3M7 3H4M7 3V6"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </GlassCard>
            </div>

            {/* Terminal — spans 4 cols */}
            <div className="md:col-span-4">
              <GlassCard className="p-0 h-full" delay={0.2} glow>
                {/* Terminal header bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.05]">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[9px] font-mono text-white/20 ml-2">
                    terminal — zsh
                  </span>
                </div>
                <div className="p-5">
                  <MiniTerminal />
                </div>
              </GlassCard>
            </div>


            {/* F1 Loop — Premium Cinematic Card — spans 3 cols */}
            <div className="md:col-span-3">
              <GlassCard className="p-0 h-full overflow-hidden" delay={0.25}>
                <div
                  className="relative w-full h-full min-h-[220px] group/anime cursor-pointer"
                >
                  {/* F1 looping GIF */}
                  <img
                    src="/f1_loop.gif"
                    alt="F1 racing loop"
                    loading="lazy"
                    className="w-full h-full object-cover absolute inset-0 filter grayscale contrast-[1.15] brightness-[0.85] group-hover/anime:grayscale-0 group-hover/anime:contrast-100 group-hover/anime:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />

                  {/* Cinematic gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/30 z-[1]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/20 to-transparent z-[1]" />

                  {/* Cyan glow breathing effect — visible on hover */}
                  <div
                    className="absolute inset-0 z-[2] opacity-0 group-hover/anime:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 80%, rgba(0,255,204,0.06) 0%, transparent 60%)",
                    }}
                  />

                  {/* Subtle vignette */}
                  <div
                    className="absolute inset-0 z-[2] pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 50%, rgba(3,3,3,0.5) 100%)",
                    }}
                  />

                  {/* Floating particles */}
                  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden opacity-0 group-hover/anime:opacity-100 transition-opacity duration-1000">
                    {[
                      { left: "15%", top: "20%", delay: "0s", size: "2px" },
                      { left: "75%", top: "40%", delay: "1.2s", size: "1.5px" },
                      { left: "40%", top: "70%", delay: "0.6s", size: "2px" },
                      { left: "85%", top: "15%", delay: "1.8s", size: "1px" },
                      { left: "25%", top: "85%", delay: "0.3s", size: "1.5px" },
                    ].map((p, i) => (
                      <span
                        key={i}
                        className="absolute rounded-full bg-[#00ffcc]/40 animate-pulse"
                        style={{
                          left: p.left,
                          top: p.top,
                          width: p.size,
                          height: p.size,
                          animationDelay: p.delay,
                          animationDuration: "3s",
                        }}
                      />
                    ))}
                  </div>

                  {/* Top-edge glow line on hover */}
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/20 to-transparent z-[3] opacity-0 group-hover/anime:opacity-100 transition-opacity duration-700" />

                  {/* Bottom label */}
                  {/* <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00ffcc]/50 group-hover/anime:bg-[#00ffcc] transition-colors duration-700 animate-pulse" />
                    <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/30 group-hover/anime:text-[#00ffcc]/50 transition-colors duration-700">
                      F1 PASSION
                    </span>
                  </div> */}

                  {/* Cinematic corner brackets */}
                  <div className="absolute top-3 left-3 z-[3] opacity-0 group-hover/anime:opacity-40 transition-opacity duration-700">
                    <div className="w-4 h-4 border-l border-t border-[#00ffcc]/30" />
                  </div>
                  <div className="absolute top-3 right-3 z-[3] opacity-0 group-hover/anime:opacity-40 transition-opacity duration-700">
                    <div className="w-4 h-4 border-r border-t border-[#00ffcc]/30" />
                  </div>
                  <div className="absolute bottom-3 left-3 z-[3] opacity-0 group-hover/anime:opacity-40 transition-opacity duration-700">
                    <div className="w-4 h-4 border-l border-b border-[#00ffcc]/30" />
                  </div>
                  <div className="absolute bottom-3 right-3 z-[3] opacity-0 group-hover/anime:opacity-40 transition-opacity duration-700">
                    <div className="w-4 h-4 border-r border-b border-[#00ffcc]/30" />
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* ── Footer Bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-white/15 tracking-wider">
                © {new Date().getFullYear()}
              </span>
              <div className="w-[1px] h-3 bg-white/[0.08]" />
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/20">
                Shantanu Shahane
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[9px] font-mono text-white/10 tracking-wider">
                Designed & Built with precision
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#00ffcc]/30" />
                <span className="w-1 h-1 rounded-full bg-[#00ffcc]/20" />
                <span className="w-1 h-1 rounded-full bg-[#00ffcc]/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
