"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_ITEMS } from "@/constants";

export function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10 bg-[#030303] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-white">
            MY JOURNEY
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white uppercase mb-6">
            WORK<br />EXPERIENCE
          </h2>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            A timeline of my professional journey, showcasing my growth in software engineering and application development.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 pl-8 md:pl-16 py-4 space-y-12">
          {EXPERIENCE_ITEMS.map((item, i) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-1 w-3 h-3 rounded-full border-2 border-white bg-[#030303]" />
              
              <h3 className="text-lg md:text-xl font-bold text-white/80 mb-4 tracking-tight">
                {item.period}
              </h3>
              
              <div className="p-6 md:p-8 border border-white/[0.08] rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] group hover:border-white/[0.15] transition-all duration-300" data-magnetic>
                <h4 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1">
                  {item.role}
                </h4>
                <p className="text-white/40 text-sm font-medium mb-6">
                  {item.company}
                </p>
                
                <div className="space-y-3 text-white/60 text-sm leading-relaxed mb-6">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#00ffcc]/50 mt-2 shrink-0" />
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium border border-white/[0.08] text-white/40 rounded-md bg-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
