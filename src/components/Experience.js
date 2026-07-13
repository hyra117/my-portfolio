import React from "react";

const experiences = [
  {
    role: "IT Governance Officer",
    type: "Kontrak",
    company: "PT Link Net Tbk · Tangerang",
    date: "Mar 2026 - Jun 2026",
    mark: "LN",
    points: [
      "Mendukung implementasi tata kelola TI melalui pengelolaan dokumentasi, administrasi sistem, dan koordinasi dengan vendor maupun tim internal.",
      "Melakukan pengumpulan, validasi, dan pengelolaan data untuk mendukung evaluasi, kepatuhan, dan pengelolaan risiko TI.",
      "Menyusun laporan dan dokumentasi sebagai pendukung operasional, audit, serta peningkatan proses bisnis.",
    ],
  },
  {
    role: "IT Governance & System Development",
    type: "Magang",
    company: "PTP Non Petikemas · Pelindo Group",
    date: "Jan 2025 - Jan 2026",
    mark: "PTP",
    points: [
      "Membangun aplikasi internal Tally HBT menggunakan Laravel dengan menerapkan tahapan SDLC.",
      "Mendukung penyusunan SOP, Work Instruction, dan dokumentasi tata kelola TI berbasis COBIT 2019.",
      "Menyusun Post Implementation Review serta mendukung administrasi dan dokumentasi Divisi Sistem Informasi.",
    ],
  },
  {
    role: "System Analyst · MSIB Batch 5",
    type: "Magang",
    company: "PT Kalbe Farma Tbk",
    date: "Feb 2024 - Jun 2024",
    mark: "KF",
    points: [
      "Menganalisis kebutuhan bisnis dan menyusun Functional Design Specification untuk proyek Waste Management.",
      "Menyusun Operational Qualification untuk mendukung validasi sistem e-Approval.",
    ],
  },
  {
    role: "Full Stack Developer",
    type: "Magang",
    company: "BPTI UHAMKA",
    date: "Apr 2023 - Jul 2023",
    mark: "BPTI",
    points: [
      "Membangun Sistem Informasi Beasiswa berbasis web menggunakan Laravel dan Bootstrap.",
      "Melakukan analisis kebutuhan, pengembangan fitur, pengujian, serta optimasi website melalui SEO.",
    ],
  },
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
              <div className="experience-card-header">
                <div className="experience-identity">
                  <span className={`company-mark company-mark-${index + 1}`} aria-label={experience.company}>
                    {experience.mark}
                  </span>

                  <div className="experience-title-block">
                    <h3>{experience.role}</h3>
                    <div className="company">{experience.company}</div>
                  </div>
                </div>

                <div className="experience-side-meta">
                  <span className={`experience-status ${experience.type === "Kontrak" ? "contract" : "internship"}`}>
                    {experience.type}
                  </span>
                  <span className="date">{experience.date}</span>
                </div>
              </div>

              <div className="experience-card-body">
                <div className="experience-divider" />
                <ul className="experience-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
