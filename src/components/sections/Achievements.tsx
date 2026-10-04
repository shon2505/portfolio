"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/constants";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: FaTrophy,
  medal: FaMedal,
};

export function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 relative z-10 bg-[#030303] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-white">
            RECOGNITION
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white uppercase mb-6">
            ACHIEVEMENTS
          </h2>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            Key milestones and wins that reflect my passion for building
            impactful solutions and pushing boundaries.
          </p>
        </motion.div>

        {/* ── Achievement Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ACHIEVEMENTS.map((item, i) => {
            const IconComp = iconMap[item.icon] || FaTrophy;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                className="relative p-8 md:p-10 border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-2xl overflow-hidden group hover:border-white/[0.15] transition-all duration-500"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(0,255,204,0.02), 0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                {/* Glow accent */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="w-14 h-14 rounded-2xl bg-[#00ffcc]/[0.08] border border-[#00ffcc]/[0.15] flex items-center justify-center mb-6 group-hover:bg-[#00ffcc]/[0.12] group-hover:border-[#00ffcc]/[0.25] transition-all duration-500"
                >
                  <IconComp className="w-6 h-6 text-[#00ffcc]/70 group-hover:text-[#00ffcc] transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">
                  {item.title}
                </h3>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#00ffcc]/50 block mb-4">
                  {item.subtitle}
                </span>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Background number */}
                <div className="absolute bottom-4 right-6 text-7xl font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Certifications Sub-Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-[#00ffcc]/30" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#00ffcc]/50">
              CERTIFICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className="flex items-start gap-3 p-4 border border-white/[0.06] rounded-xl bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-[#00ffcc]/20 transition-colors duration-300">
                  <FaCertificate className="w-3.5 h-3.5 text-white/30 group-hover:text-[#00ffcc]/60 transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white/70 mb-0.5 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-[10px] text-white/30">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
