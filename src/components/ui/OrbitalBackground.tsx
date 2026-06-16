"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDiscord } from "react-icons/fa";

function OrbitingItem({ 
  radius, 
  speed, 
  children, 
  startAngle = 0, 
  reverse = false 
}: { 
  radius: number, 
  speed: number, 
  children: React.ReactNode, 
  startAngle?: number,
  reverse?: boolean 
}) {
  const direction = reverse ? -360 : 360;
  
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        x: "-50%",
        y: "-50%",
      }}
      initial={{ rotate: startAngle }}
      animate={{ rotate: startAngle + direction }}
      transition={{ duration: speed, ease: "linear", repeat: Infinity }}
    >
      <motion.div
        className="absolute top-0 left-1/2 flex items-center justify-center text-gray-500/50 dark:text-white/30"
        style={{
          x: "-50%",
          y: "-50%",
        }}
        initial={{ rotate: -startAngle }}
        animate={{ rotate: -(startAngle + direction) }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export const OrbitalBackground = memo(function OrbitalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40 dark:opacity-100 flex items-center justify-center" aria-hidden="true">
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 dark:bg-white/[0.02] rounded-full blur-[100px]" />
      
      {/* Concentric Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-black/10 dark:border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-black/10 dark:border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-black/10 dark:border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-black/10 dark:border-white/10 rounded-full" />
      
      {/* Track 1 (Radius 150) */}
      <OrbitingItem radius={150} speed={25} startAngle={45}>
        <div className="w-8 h-8 flex items-center justify-center bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-md font-bold text-xs text-black dark:text-white border border-black/10 dark:border-white/20">JS</div>
      </OrbitingItem>
      
      {/* Track 2 (Radius 275) */}
      <OrbitingItem radius={275} speed={35} startAngle={180} reverse>
        <FaReact className="w-8 h-8" />
      </OrbitingItem>
      <OrbitingItem radius={275} speed={35} startAngle={0} reverse>
        <div className="w-8 h-8 flex items-center justify-center bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-md font-bold text-xs text-black dark:text-white border border-black/10 dark:border-white/20">TS</div>
      </OrbitingItem>

      {/* Track 3 (Radius 425) */}
      <OrbitingItem radius={425} speed={45} startAngle={90}>
        <FaNodeJs className="w-10 h-10" />
      </OrbitingItem>
      <OrbitingItem radius={425} speed={45} startAngle={270}>
        <div className="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full font-bold text-sm text-black dark:text-white border border-black/10 dark:border-white/20">N</div>
      </OrbitingItem>
      <OrbitingItem radius={425} speed={45} startAngle={20}>
        <FaDiscord className="w-8 h-8" />
      </OrbitingItem>

      {/* Track 4 (Radius 600) */}
      <OrbitingItem radius={600} speed={60} startAngle={135} reverse>
        <FaPython className="w-12 h-12" />
      </OrbitingItem>
      <OrbitingItem radius={600} speed={60} startAngle={315} reverse>
        {/* Fake OpenAI Logo using CSS shapes/SVG */}
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829a.7664.7664 0 0 0-.7806 0L5.974 11.7514v-2.3324a.0804.0804 0 0 1 .0332-.0615l4.854-2.8055a4.4992 4.4992 0 0 1 6.1408 1.6464 4.4708 4.4708 0 0 1 .5346 3.0137l-.142-.0852-4.783-2.7582h-.0001z" />
        </svg>
      </OrbitingItem>
    </div>
  );
});
