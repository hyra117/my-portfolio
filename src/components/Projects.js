import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "SIB UHAMKA",
    description:
      "Sistem Informasi Beasiswa Universitas Muhammadiyah Prof. Dr. Hamka yang digunakan untuk mengelola pendaftaran, seleksi, verifikasi berkas, serta monitoring penerima beasiswa secara terintegrasi.",
    images: [
      "/images/sib-uhamka.png",
      "/images/sib-uhamka.png",
      "/images/sib-uhamka.png",
      "/images/sib-uhamka.png",
    ],
    tools: "Laravel, PHP, Bootstrap, phpMyAdmin",
  },
  {
    name: "Nolibo",
    description:
      "Platform perpustakaan digital berbasis web yang memfasilitasi pencarian buku, peminjaman, pengelolaan koleksi, serta manajemen data pengguna secara online.",
    images: [
      "/images/nolibo.png",
      "/images/nolibo.png",
      "/images/nolibo.png",
      "/images/nolibo.png",
    ],
    tools: "Django, Python, Bootstrap, PostgreSQL",
  },
  {
    name: "Tally HBT",
    description:
      "Sistem pencatatan dan monitoring waktu curah cair berbasis web untuk mendukung pencatatan operasional, pelaporan, serta analisis data secara akurat dan efisien.",
    images: [
      "/images/Tally-HBT/tally-hbt1.jpeg",
      "/images/Tally-HBT/tally-hbt2.jpeg",
      "/images/Tally-HBT/tally-hbt3.jpeg",
      "/images/Tally-HBT/tally-hbt4.jpeg",
    ],
    tools: "Laravel, PHP, Bootstrap, phpMyAdmin",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "110%" : "-110%",
  }),
  center: {
    x: "0%",
  },
  exit: (direction) => ({
    x: direction > 0 ? "-110%" : "110%",
  }),
};

const Projects = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 1]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardHeight, setCardHeight] = useState(520);
  const cardRef = React.useRef(null);
  const project = projects[activeIndex];

  const handlePrev = () => {
    setActiveIndex([
      (activeIndex - 1 + projects.length) % projects.length,
      -1,
    ]);
  };

  const handleNext = () => {
    setActiveIndex([
      (activeIndex + 1) % projects.length,
      1,
    ]);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        const height = cardRef.current.offsetHeight;
        setCardHeight(Math.max(height, 520));
      }
    };
    
    updateHeight();
    const timeoutId = setTimeout(updateHeight, 100);
    
    return () => clearTimeout(timeoutId);
  }, [activeIndex, project]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section id="projects" className="py-16 bg-[#F7F7F7] overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-[#4F7C74] mb-10">
        PROJECT
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-[-56px] top-1/2 -translate-y-1/2 text-[#4F7C74] text-4xl font-bold z-10"
        >
          ‹
        </button>

        <div className="relative px-8" style={{ minHeight: `${cardHeight}px` }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 120, damping: 24 },
              }}
              className="absolute inset-x-4 top-0 bg-[#4F7C74] rounded-2xl p-6 shadow-xl"
            >
              <div ref={cardRef}>
                <h3 className="text-center text-white font-semibold text-xl mb-4">
                  {project.name}
                </h3>

              <img
                src={project.images[0]}
                alt={project.name}
                onClick={() => handleImageClick(project.images[0])}
                className="w-full h-auto object-contain rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
              />

              <div className="grid grid-cols-3 gap-3 mb-3">
                {project.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    onClick={() => handleImageClick(img)}
                    className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                ))}
              </div>

              <p className="text-center text-white text-base leading-relaxed mb-1">
                {project.description}
              </p>

              <p className="text-center text-white text-sm font-medium">
                Tools : {project.tools}
              </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-56px] top-1/2 -translate-y-1/2 text-[#4F7C74] text-4xl font-bold z-10"
        >
          ›
        </button>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center max-w-[95vw] max-h-[95vh] w-auto h-auto"
            >
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
                aria-label="Close modal"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Project preview"
                className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg shadow-2xl object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
