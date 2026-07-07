import React from "react";

const organizations = [
  {
    role: "Divisi Utama",
    organization: "Korps Instruktur Cabang Jakarta Timur",
    date: "Sep 2023 - Des 2025",
    description:
      "Menyusun instrumen penilaian, memfasilitasi pelatihan, dan melakukan evaluasi capaian peserta.",
  },
  {
    role: "Bendahara Umum",
    organization: "PC IMM Jakarta Timur",
    date: "Nov 2024 - Nov 2025",
    description:
      "Mengelola anggaran, arus kas, serta menyusun laporan keuangan organisasi secara berkala.",
  },
  {
    role: "Sekretaris Kementerian Keuangan",
    organization: "BEM UHAMKA",
    date: "Des 2023 - Sep 2024",
    description:
      "Menyusun laporan pertanggungjawaban keuangan, mencatat anggaran, dan memverifikasi transaksi organisasi.",
  },
  {
    role: "Kepala Bidang Komunikasi dan Informasi",
    organization: "BEM FTII UHAMKA",
    date: "Des 2022 - Okt 2023",
    description:
      "Mengelola publikasi digital dan mengoordinasikan kerja sama eksternal untuk mendukung kegiatan organisasi.",
  },
  {
    role: "Sekretaris Umum",
    organization: "PK IMM FTII UHAMKA",
    date: "Feb 2022 - Agu 2023",
    description:
      "Mengelola administrasi, surat-menyurat, dokumentasi, dan penyusunan laporan kegiatan organisasi.",
  },
];

const photoGroups = [
  {
    title: "Ikatan Mahasiswa Muhammadiyah",
    tone: "red",
    photos: [
      "/images/organisasi/1.png",
      "/images/organisasi/2.png",
      "/images/organisasi/6.png",
    ],
  },
  {
    title: "Organisasi Kemahasiswaan UHAMKA",
    tone: "green",
    photos: [
      "/images/organisasi/3.png",
      "/images/organisasi/4.png",
      "/images/organisasi/5.png",
    ],
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
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.organization}</strong>
                  <small>{item.date}</small>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="organization-galleries">
            {photoGroups.map((group) => (
              <div className={`organization-group ${group.tone}`} key={group.title}>
                <div className="organization-group-title">
                  <span />
                  <h3>{group.title}</h3>
                </div>
                <div className="organization-gallery">
                  {group.photos.map((photo, index) => (
                    <figure className="organization-photo" key={photo}>
                      <img src={photo} alt={`${group.title} ${index + 1}`} />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
