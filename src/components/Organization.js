import React from "react";
import "./Organization.css";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

const rawOrganizations = [
  {
    roleId: "Divisi Utama",
    roleEn: "Main Division Member",
    orgId: "Korps Instruktur Cabang Jakarta Timur",
    orgEn: "East Jakarta Branch Instructor Corps",
    dateId: "Sep 2023 - Des 2025",
    dateEn: "Sep 2023 - Dec 2025",
    logo: "/images/organisasi/logo imm.png",
  },
  {
    roleId: "Bendahara Umum",
    roleEn: "Treasurer General",
    orgId: "PC IMM Jakarta Timur",
    orgEn: "PC IMM East Jakarta",
    dateId: "Nov 2024 - Nov 2025",
    dateEn: "Nov 2024 - Nov 2025",
    logo: "/images/organisasi/logo imm.png",
  },
  {
    roleId: "Sekretaris Kementerian Keuangan",
    roleEn: "Secretary of Finance Ministry",
    orgId: "BEM UHAMKA",
    orgEn: "BEM UHAMKA",
    dateId: "Des 2023 - Sep 2024",
    dateEn: "Dec 2023 - Sep 2024",
    logo: "/images/organisasi/logo ftii uhamka.png",
  },
  {
    roleId: "Kepala Bidang Komunikasi dan Informasi",
    roleEn: "Head of Communication & Information",
    orgId: "BEM FTII UHAMKA",
    orgEn: "BEM FTII UHAMKA",
    dateId: "Des 2022 - Okt 2023",
    dateEn: "Dec 2022 - Oct 2023",
    logo: "/images/organisasi/logo ftii uhamka.png",
  },
  {
    roleId: "Sekretaris Umum",
    roleEn: "Secretary General",
    orgId: "PK IMM FTII UHAMKA",
    orgEn: "PK IMM FTII UHAMKA",
    dateId: "Feb 2022 - Agu 2023",
    dateEn: "Feb 2022 - Aug 2023",
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
  const { lang, t } = useLanguage();

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
          <span className="eyebrow">{t.organization.eyebrow}</span>
          <h2 className="section-title">{t.organization.title}</h2>
        </motion.div>

        <div className="organization-layout">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="organization-list"
          >
            {rawOrganizations.map((item, index) => {
              const role = lang === "en" ? item.roleEn : item.roleId;
              const org = lang === "en" ? item.orgEn : item.orgId;
              const date = lang === "en" ? item.dateEn : item.dateId;

              return (
                <motion.article
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="organization-item"
                  key={`${item.roleId}-${item.orgId}`}
                >
                  <div className="organization-card-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <img src={item.logo} alt={`Logo ${org}`} />
                  </div>
                  <div className="organization-content">
                    <h3>{role}</h3>
                    <strong>{org}</strong>
                    <small>{date}</small>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
