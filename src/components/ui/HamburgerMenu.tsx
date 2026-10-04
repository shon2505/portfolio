"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    // Small delay so animation plays before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <>
      {/* Hamburger Button — fixed top-right, no background */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed top-6 right-6 z-[9990] flex flex-col items-center justify-center w-10 h-10 gap-[5px] transition-all duration-300 group ${
          scrolled && !isOpen ? "opacity-90" : "opacity-100"
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        data-magnetic
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="block w-6 h-[2px] bg-white group-hover:bg-[#00ffcc] transition-colors origin-center"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2 }}
          className="block w-6 h-[2px] bg-white group-hover:bg-[#00ffcc] transition-colors origin-center"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="block w-6 h-[2px] bg-white group-hover:bg-[#00ffcc] transition-colors origin-center"
        />
      </button>

      {/* Full-screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9980] flex items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(0,255,204,0.03) 0%, transparent 50%), rgba(3,3,3,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/10 to-transparent" />
            <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => handleNavClick(link.href)}
                  className="group relative px-6 py-3 text-4xl md:text-5xl font-bold tracking-tighter text-white/60 hover:text-white transition-colors duration-300 uppercase"
                >
                  {/* Hover underline */}
                  <span className="absolute bottom-2 left-6 right-6 h-[2px] bg-[#00ffcc] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  {/* Number */}
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-[#00ffcc]/50 tracking-wider absolute -left-4 top-3 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6 text-[10px] font-mono text-white/20 tracking-widest uppercase"
            >
              <span>Shantanu Shahane</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Full Stack Engineer</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
