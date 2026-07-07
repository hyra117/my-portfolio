import React from "react";

const experiences = [
  {
    role: "IT Governance · Contract",
    company: "PT Link Net Tbk",
    date: "Mar 2026 - Sekarang",
    mark: "LN",
    description:
      "Mengoordinasikan dokumen kepatuhan dan laporan TPRM, serta mendukung implementasi PAM dan pengelolaan kontrol keamanan informasi.",
  },
  {
    role: "Frontend Developer Intern",
    company: "PT Bank Negara Indonesia (Persero) Tbk",
    date: "Jan 2026 - Mar 2026",
    mark: "BNI",
    description:
      "Mengembangkan fitur dan antarmuka pengguna aplikasi web, mengimplementasikan desain yang responsif dan interaktif, serta mengoptimalkan pengalaman pengguna.",
  },
  {
    role: "Information System Intern",
    company: "PTP Non Petikemas · Pelindo Group",
    date: "Jan 2025 - Jan 2026",
    mark: "PTP",
    description:
      "Mendukung pengembangan sistem informasi operasional, penyusunan tata kelola TI, serta pengelolaan dokumentasi dan administrasi data untuk kebutuhan bisnis.",
  },
  {
    role: "System Analyst Intern · MSIB Batch 5",
    company: "PT Kalbe Farma Tbk",
    date: "Feb 2024 - Jun 2024",
    mark: "Kalbe",
    description:
      "Menganalisis kebutuhan sistem, menyusun dokumentasi fungsional, serta mendukung proses implementasi dan validasi sistem sesuai kebutuhan operasional.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "BPTI UHAMKA",
    date: "Apr 2023 - Jul 2023",
    mark: "BPTI",
    description:
      "Mengembangkan aplikasi berbasis web, merancang struktur data dan alur sistem, serta mendukung peningkatan visibilitas dan aksesibilitas platform digital.",
  },
];

const experiencePhotos = [
  ["/images/pengalaman/1.png", "Dokumentasi pengalaman profesional"],
  ["/images/pengalaman/2.png", "Kegiatan bersama tim profesional"],
];

export default function Experience() {
  return (
    <section id="experience" className="page-section">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">02 · Pengalaman</span>
          <h2 className="section-title">Karier</h2>
        </div>
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <article className={`card experience-card ${index === 0 ? "featured" : ""}`} key={`${experience.company}-${experience.role}`}>
              <div className="experience-card-head">
                <span className={`company-mark company-mark-${index + 1}`} aria-label={experience.company}>
                  {experience.mark}
                </span>
                <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="experience-card-body">
                <span className="date">{experience.date}</span>
                <h3>{experience.role}</h3>
                <div className="company">{experience.company}</div>
                <p className="description">{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="experience-gallery">
          {experiencePhotos.map(([image, label]) => (
            <figure key={image}>
              <img src={image} alt={label} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
