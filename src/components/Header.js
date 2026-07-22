import React, { useState } from "react";
import "./Header.css";
import { ArrowDown, Download, Eye, Sparkles, Code2, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";

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
  const { lang, t } = useLanguage();
  const [cvLang, setCvLang] = useState(lang);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const cvFiles = {
    id: "/document/CV - RACHMA PAVITA.pdf",
    en: "/document/CV - RACHMA PAVITA - EN.pdf",
  };

  const activeCvFile = cvFiles[cvLang] || cvFiles.id;

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
            {t.hero.badge}
          </motion.span>
          <motion.h1 variants={textVariants} initial="hidden" animate="visible" custom={0.16}>
            {t.hero.greeting}
            <span className="hero-name">Rachma Pavita</span>
          </motion.h1>
          <motion.p className="hero-lead" variants={textVariants} initial="hidden" animate="visible" custom={0.27}>
            {t.hero.lead}
          </motion.p>
          <motion.div className="hero-actions" variants={textVariants} initial="hidden" animate="visible" custom={0.38}>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="primary-btn"
              onClick={() => onNavigate?.("projects")}
            >
              {t.hero.viewProjects} <ArrowDown size={17} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="secondary-btn"
              onClick={() => setShowCvModal(true)}
            >
              <Eye size={17} /> {t.hero.previewCv}
            </motion.button>

            <div style={{ position: "relative", display: "inline-block" }}>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="secondary-btn"
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                style={{ background: "rgba(61, 139, 253, 0.08)", borderColor: "rgba(61, 139, 253, 0.25)", color: "var(--blue)" }}
              >
                <Download size={17} /> {t.hero.downloadCv} ▾
              </motion.button>

              {showDownloadMenu && (
                <div className="cv-dropdown-menu">
                  <a
                    href={cvFiles.id}
                    download="CV - Rachma Pavita (ID).pdf"
                    onClick={() => setShowDownloadMenu(false)}
                    className="cv-dropdown-item"
                  >
                    <Download size={14} />
                    <span>CV Bahasa Indonesia</span>
                  </a>
                  <a
                    href={cvFiles.en}
                    download="CV - Rachma Pavita (EN).pdf"
                    onClick={() => setShowDownloadMenu(false)}
                    className="cv-dropdown-item"
                  >
                    <Download size={14} />
                    <span>CV English (Inggris)</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div className="hero-meta" variants={textVariants} initial="hidden" animate="visible" custom={0.49}>
            <motion.div animate={floatAnimation} whileHover={{ y: -6, scale: 1.03 }}>
              <strong>3</strong><span><Code2 size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />{t.hero.statProjects}</span>
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0], transition: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }} whileHover={{ y: -6, scale: 1.03 }}>
              <strong>4</strong><span><CheckCircle2 size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />{t.hero.statExp}</span>
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0], transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }} whileHover={{ y: -6, scale: 1.03 }}>
              <strong>21</strong><span><Sparkles size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: "4px" }} />{t.hero.statSkills}</span>
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
          <div
            className="modal-backdrop"
            onClick={() => setShowCvModal(false)}
            style={{
              position: "fixed",
              top: "88px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 900,
              padding: "12px 20px 24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="modal-panel cv-modal-panel"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "880px",
                width: "94%",
                height: "calc(100vh - 125px)",
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 24px 60px rgba(16, 42, 67, 0.22)",
              }}
            >
              <div style={{ padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", background: "#ffffff", flexWrap: "wrap", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Eye size={18} color="var(--blue)" />
                  <strong style={{ fontSize: "16px", color: "var(--text)" }}>
                    {t.cvModal.title}
                  </strong>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ display: "inline-flex", background: "#f1f5f9", padding: "3px", borderRadius: "999px", border: "1px solid var(--border)" }}>
                    <button
                      type="button"
                      onClick={() => setCvLang("id")}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 800,
                        border: 0,
                        background: cvLang === "id" ? "var(--blue)" : "transparent",
                        color: cvLang === "id" ? "#ffffff" : "var(--muted)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setCvLang("en")}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 800,
                        border: 0,
                        background: cvLang === "en" ? "var(--blue)" : "transparent",
                        color: cvLang === "en" ? "#ffffff" : "var(--muted)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      EN
                    </button>
                  </div>

                  <button onClick={() => setShowCvModal(false)} style={{ background: "none", border: 0, cursor: "pointer", color: "var(--muted)", padding: "4px" }}>
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div style={{ flex: 1, background: "#f8fafc", width: "100%", height: "100%" }}>
                <iframe
                  key={cvLang}
                  src={`${activeCvFile}#toolbar=0`}
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
