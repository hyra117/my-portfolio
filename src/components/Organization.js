import React from "react";

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

export default function Organization() {
  return (
    <section id="organization" className="page-section alt">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">03 · Organisasi</span>
          <h2 className="section-title">Kolaborasi</h2>
        </div>

        <div className="organization-layout">
          <div className="organization-list">
            {organizations.map((item, index) => (
              <article className="organization-item" key={`${item.role}-${item.organization}`}>
                <div className="organization-card-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <img src={item.logo} alt={`Logo ${item.organization}`} />
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.organization}</strong>
                  <small>{item.date}</small>
                </div>
              </article>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
