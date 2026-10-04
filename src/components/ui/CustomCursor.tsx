"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [data-magnetic], input, textarea, select";

// Smooth spring for the outer glow ring
const RING_SPRING = { damping: 25, stiffness: 400, mass: 0.4 };
// Snappy spring for size changes
const SIZE_SPRING = { damping: 20, stiffness: 500, mass: 0.2 };

const DEFAULT_SIZE = 16;
const HOVER_SIZE = 48;

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const isHoveringRef = useRef(false);
  const lastTargetRef = useRef<Element | null>(null);

  // Dot position — instant
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Ring position — springs
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringSize = useMotionValue(DEFAULT_SIZE);

  const springRingX = useSpring(ringX, RING_SPRING);
  const springRingY = useSpring(ringY, RING_SPRING);
  const springRingSize = useSpring(ringSize, SIZE_SPRING);

  const updateDefault = useCallback(
    (cx: number, cy: number) => {
      ringX.set(cx);
      ringY.set(cy);
      ringSize.set(DEFAULT_SIZE);
    },
    [ringX, ringY, ringSize]
  );

  const updateHover = useCallback(
    (cx: number, cy: number) => {
      ringX.set(cx);
      ringY.set(cy);
      ringSize.set(HOVER_SIZE);
    },
    [ringX, ringY, ringSize]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const onPointerMove = (e: PointerEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      const interactiveEl = target?.closest(INTERACTIVE_SELECTOR) ?? null;

      if (interactiveEl) {
        if (interactiveEl !== lastTargetRef.current) {
          lastTargetRef.current = interactiveEl;
          isHoveringRef.current = true;
        }
        updateHover(e.clientX, e.clientY);
      } else {
        if (isHoveringRef.current || lastTargetRef.current !== null) {
          lastTargetRef.current = null;
          isHoveringRef.current = false;
        }
        updateDefault(e.clientX, e.clientY);
      }
    };

    const onPointerDown = () => setIsClicking(true);
    const onPointerUp = () => setIsClicking(false);
    const onPointerLeave = () => setIsVisible(false);
    const onPointerEnter = () => setIsVisible(true);

    const onScroll = () => {
      if (isHoveringRef.current) {
        lastTargetRef.current = null;
        isHoveringRef.current = false;
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("pointerenter", onPointerEnter);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerenter", onPointerEnter);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dotX, dotY, updateDefault, updateHover]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Dot — follows instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.6 : 1,
            opacity: isClicking ? 0.8 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-2 h-2 rounded-full bg-[#00ffcc]"
          style={{
            boxShadow: "0 0 8px rgba(0,255,204,0.6), 0 0 20px rgba(0,255,204,0.2)",
          }}
        />
      </motion.div>

      {/* Magnetic Ring — follows with spring physics */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#00ffcc]/30 mix-blend-difference"
        style={{
          x: springRingX,
          y: springRingY,
          width: springRingSize,
          height: springRingSize,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform, width, height",
        }}
        animate={{
          scale: isClicking ? 0.85 : 1,
          borderColor: isHoveringRef.current
            ? "rgba(0,255,204,0.5)"
            : "rgba(0,255,204,0.15)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
