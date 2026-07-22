import React from "react";
import "./Header.css";
import { ArrowDown, Download, Sparkles, Code2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: "easeOut" },
  }),
};

const floatAnimation = {
  y: [0, -6, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function Header({ onNavigate }) {
  return (
    <header id="home" className="hero">
      <div className="hero-inner">
        <div>
          <motion.span className="hero-badge" variants={textVariants} initial="hidden" animate="visible" custom={0.05}>
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                color: "#10b981",
                marginRight: "8px",
                textShadow: "0 0 8px #10b981, 0 0 18px rgba(16, 185, 129, 0.95), 0 0 24px rgba(16, 185, 129, 0.8)",
              }}
            >
              ●
            </motion.span>
            TERBUKA UNTUK PELUANG
          </motion.span>
          <motion.h1 variants={textVariants} initial="hidden" animate="visible" custom={0.16}>
            Halo, saya
            <span className="hero-name">Rachma Pavita</span>
          </motion.h1>
          <motion.p className="hero-lead" variants={textVariants} initial="hidden" animate="visible" custom={0.27}>
            Web Developer yang berfokus pada pengembangan aplikasi berbasis web secara efektif,
            aman, dan terstruktur. Terbiasa bekerja secara kolaboratif dalam tim, mengikuti alur
            kerja yang sistematis, serta mengutamakan asas akuntabilitas untuk memastikan setiap
            proyek selesai sesuai dengan target.
          </motion.p>
          <motion.div className="hero-actions" variants={textVariants} initial="hidden" animate="visible" custom={0.38}>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="primary-btn"
              onClick={() => onNavigate?.("projects")}
            >
              Lihat proyek <ArrowDown size={17} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/document/CV - RACHMA PAVITA.pdf"
              download
              className="secondary-btn"
            >
              <Download size={17} /> Unduh CV
            </motion.a>
          </motion.div>
          <motion.div className="hero-meta" variants={textVariants} initial="hidden" animate="visible" custom={0.49}>
            <motion.div animate={floatAnimation} whileHover={{ y: -6, scale: 1.03 }}>
              <strong>3</strong><span><Code2 size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />Proyek digital</span>
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0], transition: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }} whileHover={{ y: -6, scale: 1.03 }}>
              <strong>4</strong><span><CheckCircle2 size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />Pengalaman</span>
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0], transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }} whileHover={{ y: -6, scale: 1.03 }}>
              <strong>21</strong><span><Sparkles size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />Keahlian & teknologi</span>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.65 }}>
          <div className="portrait-backdrop-tl" />
          <div className="portrait-backdrop-br" />
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="portrait"
            src="/images/profile/my-photo.jpg"
            alt="Rachma Pavita"
          />
        </motion.div>
      </div>
    </header>
  );
}
