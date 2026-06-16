"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [data-magnetic]";

// Snappier spring config — reduces perceived lag significantly
const SPRING_CONFIG = { damping: 30, stiffness: 700, mass: 0.3 };

// Default viewfinder size
const DEFAULT_SIZE = 40;
const HOVER_PADDING = 16;

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const lastTargetRef = useRef<Element | null>(null);
  const isHoveringRef = useRef(false);

  // Center dot — follows mouse instantly (no spring on dot)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Viewfinder box — follows with spring physics
  const boxX = useMotionValue(-100);
  const boxY = useMotionValue(-100);
  const boxWidth = useMotionValue(DEFAULT_SIZE);
  const boxHeight = useMotionValue(DEFAULT_SIZE);

  const springBoxX = useSpring(boxX, SPRING_CONFIG);
  const springBoxY = useSpring(boxY, SPRING_CONFIG);
  const springBoxW = useSpring(boxWidth, SPRING_CONFIG);
  const springBoxH = useSpring(boxHeight, SPRING_CONFIG);

  const updateDefaultPosition = useCallback(
    (clientX: number, clientY: number) => {
      boxX.set(clientX - DEFAULT_SIZE / 2);
      boxY.set(clientY - DEFAULT_SIZE / 2);
      boxWidth.set(DEFAULT_SIZE);
      boxHeight.set(DEFAULT_SIZE);
    },
    [boxX, boxY, boxWidth, boxHeight]
  );

  const updateHoverPosition = useCallback(
    (el: Element) => {
      const rect = el.getBoundingClientRect();
      boxX.set(rect.left - HOVER_PADDING / 2);
      boxY.set(rect.top - HOVER_PADDING / 2);
      boxWidth.set(rect.width + HOVER_PADDING);
      boxHeight.set(rect.height + HOVER_PADDING);
    },
    [boxX, boxY, boxWidth, boxHeight]
  );

  useEffect(() => {
    // Only show on fine pointer devices (desktop)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const onPointerMove = (e: PointerEvent) => {
      // Update dot position instantly (no spring)
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Detect hover target — only recalculate rect when target changes
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const interactiveEl = target?.closest(INTERACTIVE_SELECTOR) ?? null;

      if (interactiveEl) {
        // Only recalculate bounding rect when the hovered element changes
        if (interactiveEl !== lastTargetRef.current) {
          lastTargetRef.current = interactiveEl;
          isHoveringRef.current = true;
          updateHoverPosition(interactiveEl);
        }
      } else {
        if (isHoveringRef.current || lastTargetRef.current !== null) {
          lastTargetRef.current = null;
          isHoveringRef.current = false;
        }
        updateDefaultPosition(e.clientX, e.clientY);
      }
    };

    const onPointerLeave = () => setIsVisible(false);
    const onPointerEnter = () => setIsVisible(true);

    const onScroll = () => {
      // Reset hover state on scroll — element positions shift
      if (isHoveringRef.current) {
        lastTargetRef.current = null;
        isHoveringRef.current = false;
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("pointerenter", onPointerEnter);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerenter", onPointerEnter);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dotX, dotY, updateDefaultPosition, updateHoverPosition]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-teal-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      />

      {/* Viewfinder Bounding Box */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: springBoxX,
          y: springBoxY,
          width: springBoxW,
          height: springBoxH,
          willChange: "transform, width, height",
        }}
      >
        {/* Top Left Corner */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-teal-400" />
        {/* Top Right Corner */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-teal-400" />
        {/* Bottom Left Corner */}
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-teal-400" />
        {/* Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-teal-400" />
      </motion.div>
    </>
  );
}
