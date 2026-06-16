"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { memo, type MouseEvent } from "react";
import { Fingerprint, Cpu, Network } from "lucide-react";

export const HolographicCard = memo(function HolographicCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  // Dynamic glare effect based on mouse position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex items-center justify-center perspective-[1000px] p-8">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden cursor-crosshair group"
      >
        {/* Holographic Glare */}
        <motion.div
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)",
            left: glareX,
            top: glareY,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute w-[200%] h-[200%] pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,120,120,0.1),transparent_50%)]" />

        {/* Top Section */}
        <div style={{ transform: "translateZ(50px)" }} className="relative z-20 flex justify-between items-start">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-md">
            <Fingerprint className="w-6 h-6 text-white/70" />
          </div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-mono backdrop-blur-md">
            ID: SEC-9942
          </div>
        </div>

        {/* Middle Section */}
        <div style={{ transform: "translateZ(80px)" }} className="relative z-20 flex flex-col items-center my-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-white/5 to-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] relative">
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
            <Cpu className="w-12 h-12 text-white/80" />
          </div>
          <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-2">System Core</h3>
          <p className="text-white/40 text-sm text-center font-mono uppercase tracking-wider">
            Ready to initialize new sequence
          </p>
        </div>

        {/* Bottom Section */}
        <div style={{ transform: "translateZ(40px)" }} className="relative z-20 flex justify-between items-end border-t border-white/10 pt-6">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-white/30 uppercase font-mono tracking-wider">Status</span>
              <span className="text-xs text-green-400 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-white/30 uppercase font-mono tracking-wider">Uplink</span>
              <span className="text-xs text-white/70 font-mono">SECURE</span>
            </div>
          </div>
          <Network className="w-5 h-5 text-white/20" />
        </div>
      </motion.div>
    </div>
  );
});
