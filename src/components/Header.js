import React from "react";
import { ArrowDown, Download, Github } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: "easeOut" },
  }),
};

export default function Header({ onNavigate }) {
  return (
    <header id="home" className="hero">
      <div className="hero-inner">
        <div>
          <motion.span className="hero-badge" variants={textVariants} initial="hidden" animate="visible" custom={0.05}>
            ● TERBUKA UNTUK PELUANG
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
            <button type="button" className="primary-btn" onClick={() => onNavigate?.("projects")}>
              Lihat proyek <ArrowDown size={17} />
            </button>
            <a href="/document/CV - RACHMA PAVITA.pdf" download className="secondary-btn">
              <Download size={17} /> Unduh CV
            </a>
            <a href="https://github.com/hyra117" target="_blank" rel="noreferrer" className="secondary-btn">
              <Github size={17} /> GitHub
            </a>
          </motion.div>
          <motion.div className="hero-meta" variants={textVariants} initial="hidden" animate="visible" custom={0.49}>
            <div><strong>3</strong><span>Proyek digital</span></div>
            <div><strong>4</strong><span>Pengalaman</span></div>
            <div><strong>21</strong><span>Keahlian & teknologi</span></div>
          </motion.div>
        </div>
        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.65 }}>
          <img className="portrait" src="/images/profile/my-photo.jpg" alt="Rachma Pavita" />
        </motion.div>
      </div>
    </header>
  );
}
