"use client";

import { motion } from "framer-motion";
import { OFFERINGS } from "@/constants";

export function About() {
  return (
    <section id="about" className="py-32 relative z-10 bg-white dark:bg-[#030303] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-black dark:text-white">
              MY EXPERTISE
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-black dark:text-white uppercase">
              WHAT I&apos;M<br />OFFERING
            </h2>
          </div>
          <p className="text-black/60 dark:text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            I design and build end-to-end digital products — from intuitive user interfaces to scalable backend systems. My focus is on creating reliable, high-performance solutions that solve real problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERINGS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-10 border border-black/10 dark:border-white/10 group hover:border-black/30 dark:hover:border-white/30 transition-colors bg-white dark:bg-[#050505] overflow-hidden"
              data-magnetic
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10">
                <item.icon className="w-12 h-12 mb-6 text-black dark:text-white" strokeWidth={1} />
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-black/60 dark:text-white/50 text-sm leading-relaxed mb-12">
                  {item.desc}
                </p>
              </div>
              
              <div className="absolute bottom-6 right-6 text-6xl font-bold text-black/[0.03] dark:text-white/[0.03] group-hover:text-black/[0.08] dark:group-hover:text-white/[0.08] transition-colors pointer-events-none">
                {item.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
