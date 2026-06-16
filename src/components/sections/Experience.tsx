"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_ITEMS } from "@/constants";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10 bg-white dark:bg-[#030303] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-black dark:text-white">
            MY JOURNEY
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-black dark:text-white uppercase mb-6">
            WORK<br />EXPERIENCE
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            A timeline of my professional journey, showcasing my growth in software engineering and application development.
          </p>
        </motion.div>

        <div className="relative border-l border-black/10 dark:border-white/10 ml-3 md:ml-6 pl-8 md:pl-16 py-8">
          {EXPERIENCE_ITEMS.map((item) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-1 w-3 h-3 rounded-full border-2 border-black dark:border-white bg-white dark:bg-[#030303]" />
              
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-6">
                {item.period}
              </h3>
              
              <div className="p-8 border border-black/10 dark:border-white/10 rounded-sm bg-white dark:bg-[#050505] group hover:border-black/30 dark:hover:border-white/30 transition-colors" data-magnetic>
                <h4 className="text-xl font-bold text-black dark:text-white tracking-tight mb-1">
                  {item.role}
                </h4>
                <p className="text-black/50 dark:text-white/50 text-sm font-medium mb-8">
                  {item.company}
                </p>
                
                <div className="space-y-4 text-black/70 dark:text-white/70 text-sm md:text-base leading-relaxed mb-8">
                  {item.bullets.map((bullet) => (
                    <p key={bullet}>{bullet}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 rounded-sm bg-transparent">
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
