import React, { useState } from "react";
import "./Header.css";
import { ArrowDown, Download, Eye, Sparkles, Code2, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showCvModal, setShowCvModal] = useState(false);

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
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="secondary-btn"
              onClick={() => setShowCvModal(true)}
            >
              <Eye size={17} /> Preview CV
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/document/CV - RACHMA PAVITA.pdf"
              download
              className="secondary-btn"
              style={{ background: "rgba(61, 139, 253, 0.08)", borderColor: "rgba(61, 139, 253, 0.25)", color: "var(--blue)" }}
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

      <AnimatePresence>
        {showCvModal && (
          <div className="modal-backdrop" onClick={() => setShowCvModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="modal-panel cv-modal-panel"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "850px", width: "92%", height: "85vh", padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", background: "#ffffff", borderRadius: "20px" }}
            >
              <div style={{ padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", background: "#ffffff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Eye size={18} color="var(--blue)" />
                  <strong style={{ fontSize: "16px", color: "var(--text)" }}>Pratinjau CV - Rachma Pavita</strong>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <a href="/document/CV - RACHMA PAVITA.pdf" download className="primary-btn" style={{ padding: "8px 14px", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <Download size={15} /> Unduh PDF
                  </a>
                  <button onClick={() => setShowCvModal(false)} style={{ background: "none", border: 0, cursor: "pointer", color: "var(--muted)", padding: "4px" }}>
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div style={{ flex: 1, background: "#f8fafc", width: "100%", height: "100%" }}>
                <iframe
                  src="/document/CV - RACHMA PAVITA.pdf#toolbar=0"
                  title="Pratinjau CV Rachma Pavita"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
