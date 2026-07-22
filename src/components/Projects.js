import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import "./Projects.css";
import { useLanguage } from "../LanguageContext";

const rawProjects = [
  {
    name: "SIB UHAMKA",
    categoryId: "Website Project",
    categoryEn: "Web Application",
    descriptionId:
      "Sistem informasi beasiswa untuk mengelola pendaftaran, seleksi, verifikasi, dan monitoring penerima secara terintegrasi.",
    descriptionEn:
      "Scholarship information system designed to manage student registration, selection process, verification, and recipient monitoring.",
    images: [
      "/images/projects/website/sib-uhamka/sib-uhamka1.png",
      "/images/projects/website/sib-uhamka/sib-uhamka2.png",
      "/images/projects/website/sib-uhamka/sib-uhamka3.png",
      "/images/projects/website/sib-uhamka/sib-uhamka4.png",
    ],
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    name: "Tally HBT",
    categoryId: "Website Project",
    categoryEn: "Web Application",
    descriptionId:
      "Sistem pencatatan dan monitoring waktu curah cair untuk mendukung pelaporan dan analisis data.",
    descriptionEn:
      "Liquid bulk discharge recording and time monitoring system supporting data reporting and operational analytics.",
    images: [
      "/images/projects/website/tally-hbt/tally-hbt1.png",
      "/images/projects/website/tally-hbt/tally-hbt2.png",
      "/images/projects/website/tally-hbt/tally-hbt3.png",
      "/images/projects/website/tally-hbt/tally-hbt4.png",
      "/images/projects/website/tally-hbt/tally-hbt5.png",
      "/images/projects/website/tally-hbt/tally-hbt6.png",
    ],
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    name: "Nolibo E-Library",
    categoryId: "Website Project",
    categoryEn: "Web Application",
    descriptionId:
      "Sistem perpustakaan digital untuk mengelola koleksi buku, pencarian, unduh dokumen, buku favorit, profil pengguna, serta pengelolaan buku oleh administrator secara terintegrasi.",
    descriptionEn:
      "Digital library system managing book collections, search, document downloads, favorite books, user profiles, and administrative catalog management.",
    images: [
      "/images/projects/website/nolibo/Nolibo 1.png",
      "/images/projects/website/nolibo/Nolibo 2.png",
      "/images/projects/website/nolibo/Nolibo 3.png",
      "/images/projects/website/nolibo/Nolibo 4.png",
      "/images/projects/website/nolibo/Nolibo 5.png",
    ],
    tools: ["Django", "Python", "Bootstrap", "PostgreSQL"],
  },
  {
    name: "SIMOPER KIC Jaktim",
    categoryId: "Website Project",
    categoryEn: "Web Application",
    descriptionId:
      "Sistem monitoring perkaderan korps instruktur cabang jakarta timur untuk mengelola pendaftaran, penugasan, dan pelaporan secara terstruktur.",
    descriptionEn:
      "Instructor cadre monitoring system managing registrations, task assignments, and structured reporting.",
    images: [
      "/images/projects/website/simoper/KIC1.png",
      "/images/projects/website/simoper/KIC2.png",
      "/images/projects/website/simoper/KIC3.png",
      "/images/projects/website/simoper/KIC4.png",
      "/images/projects/website/simoper/KIC5.png"
    ],
    tools: ["ASP.NET", "C#", "Tailwind CSS", "PostgreSQL"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (selected) setActiveImage(selected.images[0]);
  }, [selected]);

  return (
    <section id="projects" className="page-section alt">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {rawProjects.map((project) => {
              const category = lang === "en" ? project.categoryEn : project.categoryId;
              const description = lang === "en" ? project.descriptionEn : project.descriptionId;

              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card project-card"
                  key={project.name}
                  onClick={() => setSelected(project)}
                >
                  <div className="project-cover"><img src={project.images[0]} alt={project.name} /></div>
                  <div className="project-body">
                    <div className="project-title-row">
                      <div>
                        <span className="project-category">{category}</span>
                        <h3>{project.name}</h3>
                      </div>
                      <button className="mini-play" aria-label={`Lihat ${project.name}`}><Play size={15} fill="currentColor" /></button>
                    </div>
                    <p>{description}</p>
                    <div className="tag-list">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                  </div>
                </motion.article>
              );
            })}
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
                    <span className="modal-category">{lang === "en" ? selected.categoryEn : selected.categoryId}</span>
                    <div className="modal-title-actions">
                      <h2>{selected.name}</h2>
                    </div>
                  </div>
                  <button className="mini-play" onClick={() => setSelected(null)} aria-label="Tutup"><X size={17} /></button>
                </div>
                <p>{lang === "en" ? selected.descriptionEn : selected.descriptionId}</p>
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