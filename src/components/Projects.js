import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

const projects = [
  {
    name: "SIB UHAMKA",
    category: "Website Project",
    description:
      "Sistem informasi beasiswa untuk mengelola pendaftaran, seleksi, verifikasi, dan monitoring penerima secara terintegrasi.",
    images: [
      "/images/projects/website/sib-uhamka/sib-uhamka1.png",
      "/images/projects/website/sib-uhamka/sib-uhamka2.png",
      "/images/projects/website/sib-uhamka/sib-uhamka3.png",
      "/images/projects/website/sib-uhamka/sib-uhamka4.png",
    ],
    liveUrl: "https://sib-demo.up.railway.app/",
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    name: "Tally HBT",
    category: "Website Project",
    description:
      "Sistem pencatatan dan monitoring waktu curah cair untuk mendukung operasional, pelaporan, dan analisis data.",
    liveUrl: "https://demo-wflo.up.railway.app/",
    images: [
      "/images/projects/website/tally-hbt/tally-hbt1.jpeg",
      "/images/projects/website/tally-hbt/tally-hbt2.jpeg",
      "/images/projects/website/tally-hbt/tally-hbt3.jpeg",
      "/images/projects/website/tally-hbt/tally-hbt4.jpeg",
    ],
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    name: "Nolibo E-Library",
    category: "Website Project",
    description:
      "Sistem perpustakaan digital untuk mengelola koleksi buku, pencarian, unduh dokumen, buku favorit, profil pengguna, serta pengelolaan buku oleh administrator secara terintegrasi.",
    images: [
      "/images/projects/website/nolibo/Nolibo 1.png",
      "/images/projects/website/nolibo/Nolibo 2.png",
      "/images/projects/website/nolibo/Nolibo 3.png",
      "/images/projects/website/nolibo/Nolibo 4.png",
      "/images/projects/website/nolibo/Nolibo 5.png",
    ],
    tools: ["Django", "Python", "Bootstrap", "PostgreSQL"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (selected) setActiveImage(selected.images[0]);
  }, [selected]);

  return (
    <section id="projects" className="page-section alt">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">04 · Proyek</span>
          <h2 className="section-title">Pengembangan website</h2>
          <p className="section-copy">
            Proyek aplikasi web yang berfokus pada pengelolaan data, monitoring proses, dan kebutuhan operasional.
          </p>
        </div>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="card project-card"
                key={project.name}
                onClick={() => setSelected(project)}
              >
                <div className="project-cover"><img src={project.images[0]} alt={project.name} /></div>
                <div className="project-body">
                  <div className="project-title-row">
                    <div>
                      <span className="project-category">{project.category}</span>
                      <h3>{project.name}</h3>
                    </div>
                    <button className="mini-play" aria-label={`Lihat ${project.name}`}><Play size={15} fill="currentColor" /></button>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" onClick={() => setSelected(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="project-modal" onClick={(event) => event.stopPropagation()} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
              <div className="modal-image-stage">
                <AnimatePresence mode="wait">
                  <motion.img key={activeImage} className="modal-cover" src={activeImage} alt={selected.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                </AnimatePresence>
              </div>
              <div className="modal-body">
                <div className="project-title-row">
                  <div>
                    <span className="modal-category">{selected.category}</span>
                    <div className="modal-title-actions">
                      <h2>{selected.name}</h2>
                      {selected.liveUrl && (
                        <a className="project-live-link" href={selected.liveUrl} target="_blank" rel="noreferrer">
                          Buka Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <button className="mini-play" onClick={() => setSelected(null)} aria-label="Tutup"><X size={17} /></button>
                </div>
                <p>{selected.description}</p>
                <div className="tag-list">{selected.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                <div className="modal-gallery">
                  {selected.images.map((image, index) => (
                    <button className={`gallery-thumb ${activeImage === image ? "active" : ""}`} key={image} onClick={() => setActiveImage(image)}>
                      <img src={image} alt={`${selected.name} tampilan ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
