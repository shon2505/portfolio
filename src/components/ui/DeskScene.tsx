"use client";

import { motion } from "framer-motion";
import { memo } from "react";

/**
 * An animated "developer at desk" scene built entirely with SVG + Framer Motion.
 * Matches the dark cyber-fintech aesthetic with cyan neon accents.
 * Replaces the HolographicCard in the Contact section.
 */
export const DeskScene = memo(function DeskScene() {
  return (
    <div className="w-full flex items-center justify-center p-6 md:p-10">
      <div className="relative w-full max-w-[440px] aspect-square">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, rgba(0,255,204,0.15), transparent 70%)",
          }}
        />

        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          {/* ── Floor / ground reflection ── */}
          <ellipse
            cx="200"
            cy="345"
            rx="140"
            ry="12"
            fill="url(#floorGrad)"
            opacity="0.3"
          />

          {/* ── Desk ── */}
          {/* Desk top surface */}
          <rect
            x="80"
            y="240"
            width="240"
            height="8"
            rx="3"
            fill="#1a1a1a"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
          {/* Desk top highlight */}
          <rect
            x="82"
            y="240"
            width="236"
            height="2"
            rx="1"
            fill="rgba(255,255,255,0.04)"
          />
          {/* Desk legs */}
          <rect x="105" y="248" width="4" height="70" rx="2" fill="#111" />
          <rect x="291" y="248" width="4" height="70" rx="2" fill="#111" />
          {/* Desk shelf */}
          <rect
            x="105"
            y="290"
            width="190"
            height="3"
            rx="1"
            fill="#111"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
          />

          {/* ── Chair ── */}
          {/* Chair seat */}
          <rect
            x="155"
            y="270"
            width="90"
            height="8"
            rx="4"
            fill="#0d0d0d"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
          {/* Chair back */}
          <rect
            x="165"
            y="215"
            width="70"
            height="55"
            rx="8"
            fill="#0a0a0a"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
          {/* Chair back headrest */}
          <rect
            x="175"
            y="208"
            width="50"
            height="12"
            rx="6"
            fill="#0d0d0d"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
          />
          {/* Chair armrests */}
          <rect x="157" y="255" width="20" height="4" rx="2" fill="#111" />
          <rect x="223" y="255" width="20" height="4" rx="2" fill="#111" />
          {/* Chair base pole */}
          <rect x="197" y="278" width="6" height="25" rx="2" fill="#111" />
          {/* Chair wheels */}
          <circle cx="185" cy="310" r="5" fill="#0d0d0d" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx="215" cy="310" r="5" fill="#0d0d0d" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <rect x="183" y="303" width="4" height="8" rx="1" fill="#111" />
          <rect x="213" y="303" width="4" height="8" rx="1" fill="#111" />

          {/* ── Person (sitting) ── */}
          <g>
            {/* Body / torso */}
            <motion.g
              animate={{ y: [0, -1.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Torso */}
              <path
                d="M185 235 Q185 200, 190 185 L210 185 Q215 200, 215 235 Z"
                fill="#111"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
              />
              {/* Shoulders */}
              <path
                d="M175 195 Q185 185, 200 183 Q215 185, 225 195 L225 205 Q215 198, 200 196 Q185 198, 175 205 Z"
                fill="#111"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
              />

              {/* Neck */}
              <rect x="194" y="165" width="12" height="20" rx="6" fill="#d4a574" />

              {/* Head */}
              <motion.g
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "200px 150px" }}
              >
                <ellipse cx="200" cy="148" rx="18" ry="22" fill="#d4a574" />
                {/* Hair */}
                <path
                  d="M182 140 Q182 120, 200 118 Q218 120, 218 140 Q215 130, 200 128 Q185 130, 182 140 Z"
                  fill="#1a1a1a"
                />
                {/* Hair sides */}
                <path d="M182 140 Q180 135, 182 128" stroke="#1a1a1a" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M218 140 Q220 135, 218 128" stroke="#1a1a1a" strokeWidth="4" fill="none" strokeLinecap="round" />
                {/* Glasses */}
                <rect x="189" y="144" width="10" height="7" rx="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
                <rect x="201" y="144" width="10" height="7" rx="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
                <line x1="199" y1="147" x2="201" y2="147" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                {/* Eyes (looking at screen) */}
                <circle cx="194" cy="148" r="1.2" fill="#222" />
                <circle cx="206" cy="148" r="1.2" fill="#222" />
                {/* Subtle smile */}
                <path d="M196 155 Q200 157, 204 155" stroke="#b8845a" strokeWidth="0.8" fill="none" strokeLinecap="round" />
              </motion.g>

              {/* ── Arms reaching to laptop ── */}
              {/* Left arm */}
              <path
                d="M178 200 Q165 215, 150 228 Q145 232, 148 235"
                stroke="#d4a574"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Right arm */}
              <motion.g
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M222 200 Q235 215, 250 228 Q255 232, 252 235"
                  stroke="#d4a574"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Right hand */}
                <circle cx="252" cy="236" r="4" fill="#d4a574" />
              </motion.g>

              {/* Left hand */}
              <circle cx="148" cy="236" r="4" fill="#d4a574" />
            </motion.g>
          </g>

          {/* ── Laptop ── */}
          <g>
            {/* Laptop base */}
            <rect
              x="115"
              y="232"
              width="100"
              height="8"
              rx="2"
              fill="#1a1a1a"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
            {/* Laptop screen back */}
            <rect
              x="120"
              y="178"
              width="90"
              height="56"
              rx="4"
              fill="#111"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
            {/* Laptop screen */}
            <rect
              x="124"
              y="182"
              width="82"
              height="48"
              rx="2"
              fill="#0a0f12"
            />

            {/* ── Screen content: animated email composition ── */}
            {/* Top bar */}
            <rect x="124" y="182" width="82" height="8" rx="2" fill="#0d1117" />
            <circle cx="130" cy="186" r="1.5" fill="#ff5f57" />
            <circle cx="136" cy="186" r="1.5" fill="#febc2e" />
            <circle cx="142" cy="186" r="1.5" fill="#28c840" />

            {/* "To" field */}
            <rect x="128" y="193" width="12" height="3" rx="1" fill="rgba(0,255,204,0.3)" />
            <rect x="143" y="193" width="40" height="3" rx="1" fill="rgba(255,255,255,0.08)" />

            {/* "Subject" field */}
            <rect x="128" y="199" width="18" height="3" rx="1" fill="rgba(0,255,204,0.2)" />
            <rect x="149" y="199" width="50" height="3" rx="1" fill="rgba(255,255,255,0.06)" />

            {/* Divider */}
            <line x1="128" y1="205" x2="202" y2="205" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

            {/* Email body lines - animated typing */}
            <motion.rect
              x="128" y="209" height="2.5" rx="1"
              fill="rgba(255,255,255,0.1)"
              initial={{ width: 0 }}
              animate={{ width: [0, 65, 65] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeOut" }}
            />
            <motion.rect
              x="128" y="214" height="2.5" rx="1"
              fill="rgba(255,255,255,0.07)"
              initial={{ width: 0 }}
              animate={{ width: [0, 50, 50] }}
              transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatDelay: 3, ease: "easeOut" }}
            />
            <motion.rect
              x="128" y="219" height="2.5" rx="1"
              fill="rgba(255,255,255,0.05)"
              initial={{ width: 0 }}
              animate={{ width: [0, 38, 38] }}
              transition={{ duration: 2, delay: 1.2, repeat: Infinity, repeatDelay: 3, ease: "easeOut" }}
            />

            {/* Blinking cursor */}
            <motion.rect
              x="128"
              y="224"
              width="1.5"
              height="3"
              rx="0.5"
              fill="#00ffcc"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />

            {/* Screen glow */}
            <rect
              x="124"
              y="182"
              width="82"
              height="48"
              rx="2"
              fill="none"
              stroke="rgba(0,255,204,0.08)"
              strokeWidth="1"
            />
          </g>

          {/* ── Coffee mug ── */}
          <g>
            <rect x="240" y="224" width="14" height="16" rx="3" fill="#1a1a1a" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            {/* Handle */}
            <path d="M254 228 Q260 228, 260 232 Q260 236, 254 236" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
            {/* Steam */}
            <motion.g
              animate={{ opacity: [0.08, 0.15, 0.08], y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M244 222 Q245 216, 243 210"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
              />
            </motion.g>
            <motion.g
              animate={{ opacity: [0.06, 0.12, 0.06], y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <path
                d="M249 222 Q250 215, 248 208"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
              />
            </motion.g>
          </g>

          {/* ── Small plant ── */}
          <g>
            <rect x="285" y="228" width="12" height="12" rx="2" fill="#111" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <motion.g
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "291px 228px" }}
            >
              <path d="M291 228 L289 215 Q285 208, 280 210" stroke="#166534" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M291 228 L293 218 Q297 212, 300 214" stroke="#166534" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M291 228 L291 212 Q289 206, 286 208" stroke="#15803d" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              {/* Leaves */}
              <ellipse cx="280" cy="210" rx="4" ry="2.5" fill="#166534" transform="rotate(-20 280 210)" />
              <ellipse cx="300" cy="214" rx="4" ry="2.5" fill="#166534" transform="rotate(15 300 214)" />
              <ellipse cx="286" cy="208" rx="3.5" ry="2" fill="#15803d" transform="rotate(-30 286 208)" />
            </motion.g>
          </g>

          {/* ── Floating email/notification icons ── */}
          {/* Email envelope floating */}
          <motion.g
            animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="85" y="140" width="20" height="14" rx="2" fill="none" stroke="#00ffcc" strokeWidth="0.8" opacity="0.4" />
            <path d="M87 142 L95 149 L103 142" stroke="#00ffcc" strokeWidth="0.8" fill="none" opacity="0.4" />
          </motion.g>

          {/* @ symbol floating */}
          <motion.text
            x="300"
            y="155"
            fill="#00ffcc"
            fontSize="16"
            fontFamily="monospace"
            opacity="0.2"
            animate={{ y: [155, 148, 155], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            @
          </motion.text>

          {/* Send icon floating */}
          <motion.g
            animate={{ y: [0, -6, 0], x: [0, 3, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <path
              d="M320 175 L335 168 L325 180 L328 172 Z"
              fill="none"
              stroke="#00ffcc"
              strokeWidth="0.8"
              opacity="0.3"
            />
          </motion.g>

          {/* Small chat bubbles */}
          <motion.g
            animate={{ y: [0, -5, 0], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <rect x="70" y="185" width="16" height="10" rx="5" fill="none" stroke="#00ffcc" strokeWidth="0.6" opacity="0.25" />
            <circle cx="75" cy="190" r="1" fill="#00ffcc" opacity="0.2" />
            <circle cx="78" cy="190" r="1" fill="#00ffcc" opacity="0.2" />
            <circle cx="81" cy="190" r="1" fill="#00ffcc" opacity="0.2" />
          </motion.g>

          {/* ── Particle dots ── */}
          {[
            { cx: 95, cy: 120, delay: 0 },
            { cx: 310, cy: 130, delay: 1.5 },
            { cx: 330, cy: 200, delay: 0.7 },
            { cx: 75, cy: 210, delay: 2.2 },
            { cx: 340, cy: 245, delay: 1 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              fill="#00ffcc"
              initial={{ r: 1.5 }}
              animate={{ opacity: [0.1, 0.4, 0.1], r: [1.2, 1.8, 1.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}

          {/* ── Gradients ── */}
          <defs>
            <radialGradient id="floorGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,255,204,0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>

        {/* ── Screen glow reflection on desk ── */}
        <div
          className="absolute bottom-[28%] left-[30%] w-[25%] h-[3%] rounded-full blur-md pointer-events-none"
          style={{ background: "rgba(0,255,204,0.06)" }}
        />
      </div>
    </div>
  );
});
