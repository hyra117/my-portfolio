import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe2, Palette, Play, X } from "lucide-react";

const projects = [
  {
    type: "website",
    name: "SIB UHAMKA",
    description: "Sistem informasi beasiswa untuk mengelola pendaftaran, seleksi, verifikasi, dan monitoring penerima secara terintegrasi.",
    images: [
      "/images/projects/website/sib-uhamka/sib-uhamka1.jpeg",
      "/images/projects/website/sib-uhamka/sib-uhamka2.jpeg",
      "/images/projects/website/sib-uhamka/sib-uhamka3.jpeg",
      "/images/projects/website/sib-uhamka/sib-uhamka4.jpeg",
    ],
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    type: "website",
    name: "Tally HBT",
    description: "Sistem pencatatan dan monitoring waktu curah cair untuk mendukung operasional, pelaporan, dan analisis data.",
    images: [
      "/images/projects/website/tally-hbt/tally-hbt1.jpeg",
      "/images/projects/website/tally-hbt/tally-hbt2.jpeg",
      "/images/projects/website/tally-hbt/tally-hbt3.jpeg",
      "/images/projects/website/tally-hbt/tally-hbt4.jpeg",
    ],
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    type: "design",
    name: "Portfolio UI Design",
    description: "Eksplorasi desain antarmuka portofolio personal dengan susunan informasi yang sederhana, bersih, dan mudah dipindai.",
    images: ["/images/projects/design/portfolio-ui/portfolio-ui.jpeg"],
    tools: ["UI Design", "Responsive Layout", "Visual Design"],
  },
];

const filters = [
  ["website", "Website", Globe2],
  ["design", "Design", Palette],
];

export default function Projects() {
  const [filter, setFilter] = useState("website");
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (selected) setActiveImage(selected.images[0]);
  }, [selected]);

  const filteredProjects = projects.filter((project) => project.type === filter);

  return (
    <section id="projects" className="page-section alt">
      <div className="section-inner">
        <div className="project-heading">
          <div className="section-head">
            <span className="eyebrow">04 · Proyek</span>
            <h2 className="section-title">Pengembangan</h2>
          </div>
          <div className="project-tabs" role="tablist" aria-label="Kategori proyek">
            {filters.map(([id, label, Icon]) => (
              <button key={id} className={`project-tab ${filter === id ? "active" : ""}`} onClick={() => setFilter(id)}>
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>
        </div>
        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
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
                    <h3>{project.name}</h3>
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
                    <span className="modal-category">{selected.type === "website" ? "Website Project" : "Design Project"}</span>
                    <h2>{selected.name}</h2>
                  </div>
                  <button className="mini-play" onClick={() => setSelected(null)} aria-label="Tutup"><X size={17} /></button>
                </div>
                <p>{selected.description}</p>
                <div className="tag-list">{selected.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                {selected.images.length > 1 && (
                  <div className="modal-gallery">
                    {selected.images.map((image, index) => (
                      <button className={`gallery-thumb ${activeImage === image ? "active" : ""}`} key={image} onClick={() => setActiveImage(image)}>
                        <img src={image} alt={`${selected.name} tampilan ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
