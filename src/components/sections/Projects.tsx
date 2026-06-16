"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "@/constants";

/* ────────────────────────────────────────────────────────────
   Project Preview Mockups
   ──────────────────────────────────────────────────────────── */

function ProjectPreview({ id }: { id: string }) {
  switch (id) {
    case "sahmatipay":
      return (
        <div className="w-full h-full bg-[#060606] flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative z-10 w-full flex items-center justify-center gap-3">
            <div className="w-[105px] shrink-0 bg-[#0c0c0c] border border-white/5 rounded-lg p-2 shadow-md">
              <div className="flex items-center justify-between border-b border-white/5 pb-1 mb-1">
                <span className="text-[6px] font-bold text-teal-400 tracking-wider">SAHMATIPAY</span>
                <span className="text-[5px] text-white/30">Secure</span>
              </div>
              <div className="space-y-1">
                <div className="bg-zinc-900/30 p-1 border border-white/5 rounded-[3px]">
                  <div className="text-[5px] font-bold text-white/40">LOAN AGREEMENT</div>
                  <div className="text-[7px] font-bold text-white">88291-AGR</div>
                </div>
                <div className="space-y-0.5 text-[6px] text-zinc-400">
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-0.5 rounded-full bg-teal-500 shrink-0" />
                    <span>Rate: 10.5% p.a.</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-0.5 rounded-full bg-teal-500 shrink-0" />
                    <span>Fees: 0% Proc.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[100px] bg-[#0c0c0c] border border-white/5 rounded-lg p-2.5 shadow-md h-[80px]">
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  <span className="text-[6px] uppercase tracking-wider font-bold px-1 bg-teal-500/10 text-teal-400 rounded-sm">AA Uplink</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-[6px] text-white/40 leading-normal line-clamp-2">
                  Verifying consent metadata logs.
                </p>
              </div>
              <div className="border-t border-white/5 pt-1 text-[6px] font-bold text-emerald-500">
                ACTIVE COMPLIANCE
              </div>
            </div>
          </div>
        </div>
      );

    case "rescue":
      return (
        <div className="w-full h-full bg-[#060606] flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative z-10 w-full flex gap-3 items-stretch justify-center">
            <div className="w-[110px] bg-[#0c0c0c] border border-white/5 rounded-lg p-2 shadow-md flex flex-col justify-between h-[80px]">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[6px] font-bold text-orange-400 tracking-wider">DISPATCH</span>
                  <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center justify-between text-[7px] p-0.5 bg-zinc-900/30 border border-white/5 rounded-[3px]">
                    <span className="font-bold text-white/80">#1024 - Med</span>
                    <span className="text-emerald-500 font-bold text-[5px] uppercase">Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90px] shrink-0 bg-[#0c0c0c] border border-white/5 rounded-lg p-2 shadow-md flex flex-col items-center justify-center relative h-[80px]">
              <div className="absolute inset-1.5 border border-dashed border-white/5 grid grid-cols-3 grid-rows-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="border-[0.25px] border-dotted border-white/5" />
                ))}
              </div>
              <div className="relative w-8 h-8 rounded-full border border-orange-500/20 flex items-center justify-center">
                <div className="w-1 h-1 bg-orange-500 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
      );

    case "gemai":
      return (
        <div className="w-full h-full bg-[#060606] flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative z-10 w-full max-w-[200px] bg-[#0c0c0c] border border-white/5 rounded-lg shadow-md flex flex-col h-[80px] overflow-hidden">
            <div className="flex items-center justify-between px-2 py-1 border-b border-white/5 bg-zinc-900/30">
              <span className="text-[6px] font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
                GEMAI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex overflow-hidden p-1.5">
              <div className="flex-1 p-1 bg-zinc-900/40 rounded border border-white/5 text-[6px] text-white/40 flex flex-col gap-1 justify-center">
                <div className="h-1 w-16 bg-white/15 rounded" />
                <div className="h-1 w-24 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      );

    case "optiondost":
      return (
        <div className="w-full h-full bg-[#060606] flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative z-10 w-full flex gap-3 items-stretch justify-center">
            <div className="w-[120px] bg-[#0c0c0c] border border-white/5 rounded-lg p-2 shadow-md flex flex-col justify-between h-[80px]">
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[7px] font-bold text-white">NIFTY 50</span>
                  <span className="text-[6px] text-emerald-500 font-bold">+1.2%</span>
                </div>
                <div className="h-6 w-full flex items-end justify-between gap-0.5 border-b border-white/5 pb-0.5 mt-1">
                  <div className="w-full h-3 bg-emerald-500/20 border border-emerald-500/60 rounded-sm" />
                  <div className="w-full h-5 bg-emerald-500/20 border border-emerald-500/60 rounded-sm" />
                  <div className="w-full h-2.5 bg-red-500/20 border border-red-500/60 rounded-sm" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-[80px] bg-[#0c0c0c] border border-white/5 rounded-lg p-2 shadow-md text-[6px] h-[80px]">
              <div className="font-bold border-b border-white/5 pb-0.5 mb-1 text-zinc-400">STRIKE</div>
              <div className="flex justify-between text-white">
                <span>23,500</span>
                <span className="text-emerald-500 font-bold">120.4</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "scramble":
      return (
        <div className="w-full h-full bg-[#060606] flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative z-10 w-full max-w-[180px] bg-[#0c0c0c] border border-white/5 rounded-lg p-2 shadow-md flex flex-col items-center gap-1.5">
            <div className="text-[6px] font-bold text-zinc-400 uppercase tracking-widest">WORD PUZZLE</div>
            <div className="flex gap-0.5">
              {["R", "O", "T", "C", "A"].map((letter, idx) => (
                <div key={idx} className="w-4.5 h-4.5 rounded bg-zinc-900 border border-white/5 flex items-center justify-center font-bold text-[7px] text-white font-mono shadow-sm">
                  {letter}
                </div>
              ))}
            </div>
            <div className="w-full bg-zinc-900/60 border border-white/5 rounded py-0.5 text-center text-[7px] font-bold font-mono text-white">
              C R E A T O R
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ────────────────────────────────────────────────────────────
   Triangle Nav Indicator
   ──────────────────────────────────────────────────────────── */

function TriangleNav({
  total,
  active,
  onSelect,
}: {
  total: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex md:flex-col items-center gap-3 md:gap-4">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            onClick={() => onSelect(i)}
            aria-label={`View project ${i + 1}`}
            className="relative group flex items-center justify-center p-1.5 transition-all duration-300"
          >
            {/* Glow behind active triangle */}
            {isActive && (
              <motion.div
                layoutId="triangle-glow"
                className="absolute inset-[-4px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(0,255,204,0.2) 0%, transparent 70%)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="relative z-10"
              animate={{
                scale: isActive ? 1.3 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                filter: isActive
                  ? "drop-shadow(0 0 6px rgba(0,255,204,0.6))"
                  : "none",
              }}
            >
              <polygon
                points="7,1 13,13 1,13"
                fill={isActive ? "#00ffcc" : "transparent"}
                stroke={isActive ? "#00ffcc" : "rgba(255,255,255,0.2)"}
                strokeWidth="1.2"
                className="transition-all duration-300 group-hover:stroke-[rgba(0,255,204,0.5)]"
              />
            </motion.svg>
          </button>
        );
      })}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Animated Grid Background for Preview
   ──────────────────────────────────────────────────────────── */

function AnimatedGridBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,204,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        animate={{ y: [0, -24] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Main Projects Section
   ──────────────────────────────────────────────────────────── */

export function Projects() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const paginate = useCallback((newIndex: number) => {
    setActiveIndex([newIndex, newIndex > activeIndex ? 1 : -1]);
  }, [activeIndex]);

  const project = PROJECTS[activeIndex];

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative z-10 bg-[#030303]"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 md:mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase mb-1.5 block text-white/40">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[0.9] text-white uppercase">
            FEATURED<br />PROJECTS
          </h2>
        </motion.div>

        {/* Main Card + Triangle Nav */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 md:gap-10">
          
          {/* Triangle Navigation */}
          <div className="flex md:flex-col items-center justify-center md:justify-start md:pt-12 shrink-0">
            <TriangleNav
              total={PROJECTS.length}
              active={activeIndex}
              onSelect={paginate}
            />
          </div>

          {/* Project Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full rounded-[18px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl overflow-hidden group hover:border-white/[0.14] transition-all duration-500 hover:translate-y-[-2px]"
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,255,204,0.03), 0 8px 40px rgba(0,0,0,0.4), 0 0 80px rgba(0,255,204,0.02)",
            }}
          >
            {/* Subtle top-edge cyan glow line */}
            <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/20 to-transparent" />

            <div className="flex flex-col md:flex-row">
              {/* ─── Left: Animated Preview ─── */}
              <div className="relative w-full md:w-[35%] h-[180px] md:h-auto md:min-h-[320px] border-b md:border-b-0 md:border-r border-white/[0.06] overflow-hidden shrink-0">
                <AnimatedGridBg />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.id + "-preview"}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 w-full h-full"
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full h-full"
                    >
                      <ProjectPreview id={project.id} />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Corner accent */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]/60 animate-pulse" />
                  <span className="text-[8px] font-mono text-white/25 uppercase tracking-widest">
                    Preview
                  </span>
                </div>
              </div>

              {/* ─── Right: Project Info ─── */}
              <div className="flex-1 min-w-0 p-6 md:p-8 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.id + "-info"}
                    initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Category */}
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05, duration: 0.4 }}
                      className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#00ffcc]/70 mb-3"
                    >
                      {project.subtitle}
                    </motion.span>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-3 leading-tight"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="text-white/45 text-sm leading-relaxed mb-5 line-clamp-3 max-w-md"
                    >
                      {project.desc}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex flex-wrap gap-1.5 mb-6"
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-medium border border-white/[0.08] text-white/50 bg-white/[0.03] rounded-md tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-black bg-[#00ffcc] rounded-lg hover:bg-[#00e6b8] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,204,0.15)]"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white/70 border border-white/10 rounded-lg hover:border-white/25 hover:text-white hover:bg-white/[0.04] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                          data-magnetic
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          View Code
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Project counter + navigation arrows */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/20 tracking-wider">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => paginate((activeIndex - 1 + PROJECTS.length) % PROJECTS.length)}
                      aria-label="Previous project"
                      className="w-8 h-8 rounded-full border border-white/10 hover:border-white/25 text-white/40 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-white/[0.04] active:scale-90"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M7.5 2.5L4 6L7.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => paginate((activeIndex + 1) % PROJECTS.length)}
                      aria-label="Next project"
                      className="w-8 h-8 rounded-full border border-white/10 hover:border-white/25 text-white/40 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-white/[0.04] active:scale-90"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
