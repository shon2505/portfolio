"use client";

import { motion } from "framer-motion";
import { SKILL_ICONS } from "@/constants";

export function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 bg-white dark:bg-[#030303] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-black dark:text-white uppercase mb-6">
            WHAT I<br />USE
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            I utilize a comprehensive suite of modern technologies to build robust, scalable, and high-performance digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-8 md:gap-12 items-center justify-items-center">
          {SKILL_ICONS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex items-center justify-center p-2"
              data-magnetic
            >
              <item.Icon className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
