"use client";

import { motion } from "framer-motion";
import { SKILL_ICONS } from "@/constants";

/* Split skills into two rows for opposite-direction scrolling */
const ROW_1 = SKILL_ICONS.slice(0, Math.ceil(SKILL_ICONS.length / 2));
const ROW_2 = SKILL_ICONS.slice(Math.ceil(SKILL_ICONS.length / 2));

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: typeof SKILL_ICONS;
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate items enough times to fill the strip seamlessly
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="group relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none" />

      <div
        className="flex items-center gap-10 md:gap-14 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${reverse ? "reverse" : "forward"} ${speed}s linear infinite`,
        }}
      >
        {duplicated.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-3 shrink-0 group/item"
          >
            <item.Icon className="w-7 h-7 md:w-9 md:h-9 text-white/40 group-hover/item:text-[#00ffcc] transition-colors duration-300" />
            <span className="text-xs md:text-sm font-medium text-white/30 group-hover/item:text-white/70 transition-colors duration-300 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 relative z-10 bg-[#030303] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white uppercase mb-6">
            WHAT I<br />USE
          </h2>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            I utilize a comprehensive suite of modern technologies to build
            robust, scalable, and high-performance digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Full-width marquee strips */}
      <div className="flex flex-col gap-2">
        <MarqueeRow items={ROW_1} speed={35} />
        <MarqueeRow items={ROW_2} reverse speed={40} />
      </div>
    </section>
  );
}
