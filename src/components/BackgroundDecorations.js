import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageThemes = {
  home: {
    primary: "#3d8bfd",
    secondary: "#22c7d8",
    accent: "#8a7cf6",
    orbPaths: [
      { top: "8%", left: "62%", size: 460, path: { x: [0, 60, -30, 0], y: [0, 40, 80, 0] }, duration: 16 },
      { bottom: "-6%", left: "4%", size: 360, path: { x: [0, -40, 20, 0], y: [0, -30, -60, 0] }, duration: 20 },
    ],
  },
  about: {
    primary: "#22c7d8",
    secondary: "#3d8bfd",
    accent: "#41c99b",
    orbPaths: [
      { top: "4%", left: "8%", size: 420, path: { x: [0, 50, 90, 0], y: [0, 60, 10, 0] }, duration: 18 },
      { bottom: "6%", right: "6%", size: 380, path: { x: [0, -60, -20, 0], y: [0, 30, 70, 0] }, duration: 22 },
    ],
  },
  experience: {
    primary: "#ffb86b",
    secondary: "#3d8bfd",
    accent: "#22c7d8",
    orbPaths: [
      { top: "10%", right: "4%", size: 440, path: { x: [0, -50, -90, -40, 0], y: [0, 40, 0, -30, 0] }, duration: 24 },
      { bottom: "0%", left: "18%", size: 320, path: { x: [0, 40, 0, -40, 0], y: [0, -20, -50, -20, 0] }, duration: 19 },
    ],
  },
  organization: {
    primary: "#ff7fa7",
    secondary: "#41c99b",
    accent: "#8a7cf6",
    orbPaths: [
      { top: "0%", left: "30%", size: 400, path: { x: [0, 70, 20, -50, 0], y: [0, 30, 80, 40, 0] }, duration: 21 },
      { bottom: "-4%", right: "0%", size: 360, path: { x: [0, -40, 0, 40, 0], y: [0, -50, -10, -60, 0] }, duration: 17 },
    ],
  },
  projects: {
    primary: "#8a7cf6",
    secondary: "#22c7d8",
    accent: "#3d8bfd",
    orbPaths: [
      { top: "6%", left: "4%", size: 460, path: { x: [0, 90, 40, 0], y: [0, 20, 90, 0] }, duration: 23 },
      { bottom: "4%", right: "10%", size: 340, path: { x: [0, -50, -80, -20, 0], y: [0, -40, 10, -30, 0] }, duration: 20 },
    ],
  },
  skills: {
    primary: "#41c99b",
    secondary: "#ffb86b",
    accent: "#22c7d8",
    orbPaths: [
      { top: "2%", right: "8%", size: 420, path: { x: [0, -60, -10, 0], y: [0, 50, 90, 0] }, duration: 18 },
      { bottom: "-2%", left: "6%", size: 380, path: { x: [0, 50, 90, 30, 0], y: [0, -30, 0, -50, 0] }, duration: 25 },
    ],
  },
};

const genZWidgets = {
  home: [],
  about: [],
  experience: [],
  organization: [],
  projects: [],
  skills: [],
};

function Orb({ color, size, duration, path, style }) {
  return (
    <motion.div
      animate={{
        x: path.x,
        y: path.y,
        scale: [1, 1.15, 0.95, 1],
        opacity: [0.14, 0.24, 0.16, 0.14],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 72%)`,
        filter: "blur(46px)",
        ...style,
      }}
    />
  );
}

function useParticles(seedKey, count = 10) {
  return useMemo(() => {
    let seed = Array.from(seedKey).reduce((a, c) => a + c.charCodeAt(0), 0);
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${8 + rand() * 84}%`,
      left: `${4 + rand() * 92}%`,
      size: 3 + rand() * 4,
      duration: 6 + rand() * 8,
      delay: rand() * 4,
      drift: 20 + rand() * 30,
    }));
  }, [seedKey, count]);
}

export default function BackgroundDecorations({ activeSection = "home" }) {
  const widgets = genZWidgets[activeSection] || genZWidgets.home;
  const theme = pageThemes[activeSection] || pageThemes.home;
  const particles = useParticles(activeSection, 12);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {}
      <AnimatePresence mode="wait">
        <motion.div
          key={`orbs-${activeSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: "absolute", inset: 0 }}
        >
          {theme.orbPaths.map((orb, i) => (
            <Orb
              key={i}
              color={i === 0 ? theme.primary : theme.secondary}
              size={orb.size}
              duration={orb.duration}
              path={orb.path}
              style={{
                top: orb.top,
                left: orb.left,
                right: orb.right,
                bottom: orb.bottom,
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {}
      <AnimatePresence mode="wait">
        <motion.div
          key={`particles-${activeSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: "absolute", inset: 0 }}
        >
          {particles.map((p) => (
            <motion.span
              key={p.id}
              animate={{
                y: [0, -p.drift, 0],
                x: [0, p.drift / 2, 0],
                opacity: [0.15, 0.55, 0.15],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
              style={{
                position: "absolute",
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: theme.accent,
                boxShadow: `0 0 8px ${theme.accent}`,
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {}
      <AnimatePresence mode="wait">
        <motion.div key={`genz-${activeSection}`} style={{ position: "absolute", inset: 0 }}>
          {widgets.map((widget, index) => (
            <motion.div
              key={`${activeSection}-${index}`}
              initial={{ opacity: 0, scale: 0.85, y: 15, rotate: index % 2 === 0 ? -3 : 3 }}
              animate={{
                opacity: 0.92,
                y: [0, -10, 0],
                x: [0, index % 2 === 0 ? 4 : -4, 0],
                rotate: [index % 2 === 0 ? -1.5 : 1.5, index % 2 === 0 ? 1.5 : -1.5, index % 2 === 0 ? -1.5 : 1.5],
                scale: [0.97, 1.03, 0.97],
              }}
              exit={{ opacity: 0, scale: 0.85, y: -15 }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: widget.delay,
              }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: "absolute",
                ...widget.style,
                fontSize: widget.small ? "11.5px" : "13px",
                fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
                fontWeight: 600,
                color: "var(--text, #102a43)",
                background: "rgba(255, 255, 255, 0.85)",
                border: `1px solid ${theme.primary}38`,
                padding: widget.small ? "6px 13px" : "8px 16px",
                borderRadius: "100px",
                boxShadow: `0 10px 28px ${theme.primary}22, 0 2px 6px rgba(0,0,0,0.04)`,
                backdropFilter: "blur(10px)",
                pointerEvents: "auto",
              }}
            >
              {widget.content}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}