import React from "react";
import "./Organization.css";
import { motion } from "framer-motion";

const organizations = [
  {
    role: "Divisi Utama",
    organization: "Korps Instruktur Cabang Jakarta Timur",
    date: "Sep 2023 - Des 2025",
    logo: "/images/organisasi/logo imm.png",
  },
  {
    role: "Bendahara Umum",
    organization: "PC IMM Jakarta Timur",
    date: "Nov 2024 - Nov 2025",
    logo: "/images/organisasi/logo imm.png",
  },
  {
    role: "Sekretaris Kementerian Keuangan",
    organization: "BEM UHAMKA",
    date: "Des 2023 - Sep 2024",
    logo: "/images/organisasi/logo ftii uhamka.png",
  },
  {
    role: "Kepala Bidang Komunikasi dan Informasi",
    organization: "BEM FTII UHAMKA",
    date: "Des 2022 - Okt 2023",
    logo: "/images/organisasi/logo ftii uhamka.png",
  },
  {
    role: "Sekretaris Umum",
    organization: "PK IMM FTII UHAMKA",
    date: "Feb 2022 - Agu 2023",
    logo: "/images/organisasi/logo imm.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Organization() {
  return (
    <section id="organization" className="page-section alt">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <span className="eyebrow">03 · Organisasi</span>
          <h2 className="section-title">Kolaborasi</h2>
        </motion.div>

        <div className="organization-layout">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="organization-list"
          >
            {organizations.map((item, index) => (
              <motion.article
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="organization-item"
                key={`${item.role}-${item.organization}`}
              >
                <div className="organization-card-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <img src={item.logo} alt={`Logo ${item.organization}`} />
                </div>
                <div className="organization-content">
                  <h3>{item.role}</h3>
                  <strong>{item.organization}</strong>
                  <small>{item.date}</small>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
