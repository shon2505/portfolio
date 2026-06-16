"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { OrbitalBackground } from "@/components/ui/OrbitalBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <OrbitalBackground />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md text-xs font-medium tracking-wide mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          AVAILABLE FOR WORK
        </motion.div>

        {/* Greeting */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-3xl font-light text-black dark:text-white/90 mb-2"
        >
          Hello! I&apos;m Shantanu. A Creative Full-Stack
        </motion.h2>

        {/* Massive Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[140px] font-bold tracking-tight mb-8 text-black dark:text-white"
          style={{ lineHeight: 1 }}
        >
          BUILDER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-lg text-black/60 dark:text-white/50 max-w-2xl mb-12 font-light leading-relaxed"
        >
          I&apos;m a full-stack developer focused on building modern, scalable, and secure web applications. I enjoy working across the stack — from clean, intuitive interfaces to robust backend systems — with an emphasis on performance, reliability, and real-world impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:scale-105 active:scale-95 transition-all text-sm w-full sm:w-auto">
            Let&apos;s Talk
          </a>
          
          <a href="https://drive.google.com/file/d/1EZ3NobhWcfl__s2JA99uxS8hr_00mmAD/view?usp=drive_link" className="group px-8 py-4 bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/5 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm w-full sm:w-auto">
            Download CV
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
