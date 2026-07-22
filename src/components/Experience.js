import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { useLanguage } from "../LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const rawExperiences = [
  {
    roleId: "IT Governance Officer",
    roleEn: "IT Governance Officer",
    typeId: "Kontrak",
    typeEn: "Contract",
    company: "PT Link Net Tbk · Tangerang",
    dateId: "Mar 2026 - Jun 2026",
    dateEn: "Mar 2026 - Jun 2026",
    mark: "LN",
    pointsId: [
      "Mendukung implementasi tata kelola TI melalui pengelolaan dokumentasi, administrasi sistem, dan koordinasi dengan vendor maupun tim internal.",
      "Melakukan pengumpulan, validasi, dan pengelolaan data untuk mendukung evaluasi, kepatuhan, dan pengelolaan risiko TI.",
      "Menyusun laporan dan dokumentasi sebagai pendukung operasional, audit, serta peningkatan proses bisnis.",
    ],
    pointsEn: [
      "Supported IT governance implementation through documentation management, system administration, and vendor/team coordination.",
      "Collected, validated, and managed data for evaluation, compliance, and IT risk management.",
      "Prepared reports and documentation to support operational, audit, and business process improvements.",
    ],
  },
  {
    roleId: "IT Governance & System Development",
    roleEn: "IT Governance & System Development",
    typeId: "Magang",
    typeEn: "Internship",
    company: "PTP Non Petikemas · Pelindo Group",
    dateId: "Jan 2025 - Jan 2026",
    dateEn: "Jan 2025 - Jan 2026",
    mark: "PTP",
    pointsId: [
      "Membangun aplikasi internal Tally HBT menggunakan Laravel dengan menerapkan tahapan SDLC.",
      "Mendukung penyusunan SOP, Work Instruction, dan dokumentasi tata kelola TI berbasis COBIT 2019.",
      "Menyusun Post Implementation Review serta mendukung administrasi dan dokumentasi Divisi Sistem Informasi.",
    ],
    pointsEn: [
      "Built internal web application Tally HBT using Laravel implementing SDLC phases.",
      "Supported preparation of SOPs, Work Instructions, and COBIT 2019-based IT governance documentation.",
      "Prepared Post Implementation Reviews and supported IT Division administration.",
    ],
  },
  {
    roleId: "System Analyst · MSIB Batch 5",
    roleEn: "System Analyst · MSIB Batch 5",
    typeId: "Magang",
    typeEn: "Internship",
    company: "PT Kalbe Farma Tbk",
    dateId: "Feb 2024 - Jun 2024",
    dateEn: "Feb 2024 - Jun 2024",
    mark: "KF",
    pointsId: [
      "Menganalisis kebutuhan bisnis dan menyusun Functional Design Specification untuk proyek Waste Management.",
      "Menyusun Operational Qualification untuk mendukung validasi sistem e-Approval.",
    ],
    pointsEn: [
      "Analyzed business requirements and created Functional Design Specifications for Waste Management project.",
      "Prepared Operational Qualifications to support e-Approval system validation.",
    ],
  },
  {
    roleId: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    typeId: "Magang",
    typeEn: "Internship",
    company: "BPTI UHAMKA",
    dateId: "Apr 2023 - Jul 2023",
    dateEn: "Apr 2023 - Jul 2023",
    mark: "BPTI",
    pointsId: [
      "Membangun Sistem Informasi Beasiswa berbasis web menggunakan Laravel dan Bootstrap.",
      "Melakukan analisis kebutuhan, pengembangan fitur, pengujian, serta optimasi website melalui SEO.",
    ],
    pointsEn: [
      "Built web-based Scholarship Information System using Laravel and Bootstrap.",
      "Executed requirements analysis, feature development, testing, and SEO website optimizations.",
    ],
  },
];

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="page-section">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">{t.experience.eyebrow}</span>
          <h2 className="section-title">{t.experience.title}</h2>
        </div>
        <div className="experience-grid">
          {rawExperiences.map((exp, index) => {
            const role = lang === "en" ? exp.roleEn : exp.roleId;
            const type = lang === "en" ? exp.typeEn : exp.typeId;
            const date = lang === "en" ? exp.dateEn : exp.dateId;
            const points = lang === "en" ? exp.pointsEn : exp.pointsId;

            return (
              <motion.article
                className={`card experience-card ${index === 0 ? "featured" : ""}`}
                key={`${exp.company}-${exp.roleId}`}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                variants={cardVariants}
              >
                <div className="experience-card-header">
                  <div className="experience-identity">
                    <span className={`company-mark company-mark-${index + 1}`} aria-label={exp.company}>
                      {exp.mark}
                    </span>

                    <div className="experience-title-block">
                      <h3>{role}</h3>
                      <div className="company">{exp.company}</div>
                    </div>
                  </div>

                  <div className="experience-side-meta">
                    <span className={`experience-status ${type === "Kontrak" || type === "Contract" ? "contract" : "internship"}`}>
                      {type}
                    </span>
                    <span className="date">{date}</span>
                  </div>
                </div>

                <div className="experience-card-body">
                  <div className="experience-divider" />
                  <ul className="experience-points">
                    {points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
