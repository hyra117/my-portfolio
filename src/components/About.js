import React from "react";
import "./About.css";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const photos = [
  ["/images/photo/1.jpg", "Momen kelulusan"],
  ["/images/photo/2.png", "Aktivitas kampus"],
  ["/images/photo/3.png", "Perjalanan organisasi"],
  ["/images/photo/4.jpeg", "Dokumentasi kegiatan"],
];

const contacts = [
  [MapPin, "Lokasi", "Bekasi, Jawa Barat", null],
  [Mail, "Email", "rahmapavita12@gmail.com", "mailto:rahmapavita12@gmail.com"],
  [Linkedin, "LinkedIn", "rahma-pavita", "https://www.linkedin.com/in/rahma-pavita"],
  [Github, "GitHub", "hyra117", "https://github.com/hyra117"],
];

export default function About() {
  return (
    <section id="about" className="page-section alt">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <span className="eyebrow">01 · Profil</span>
          <h2 className="section-title">TENTANG SAYA</h2>        
        </motion.div>

        <div className="about-simple-grid">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-intro"
          >
            <div className="about-description-text">
              <p>
                Lulusan Sarjana Teknik Informatika dengan ketertarikan pada pengembangan aplikasi berbasis web dan implementasi solusi digital yang mendukung kebutuhan operasional maupun bisnis. Lingkup pekerjaan meliputi proses pengembangan aplikasi dari tahap identifikasi kebutuhan, perancangan sistem, pengembangan, pengujian, implementasi, hingga pemeliharaan aplikasi sebagai bagian dari siklus pengembangan perangkat lunak.
              </p>
              <p>
                Memiliki ketertarikan pada pengembangan perangkat lunak yang menghasilkan solusi digital yang fungsional, mudah digunakan, dan berkelanjutan, serta mendukung peningkatan kualitas layanan, efisiensi operasional, dan transformasi proses bisnis di lingkungan organisasi.
              </p>
            </div>

            <div className="about-inline-contact">
              {contacts.map(([Icon, label, value, href]) => {
                const content = <><Icon size={15} /><span><small>{label}</small>{value}</span></>;
                return href
                  ? (
                    <motion.a
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="contact-chip"
                      href={href}
                      key={label}
                    >
                      {content}
                    </motion.a>
                  )
                  : (
                    <motion.div
                      whileHover={{ scale: 1.03, y: -3 }}
                      className="contact-chip"
                      key={label}
                    >
                      {content}
                    </motion.div>
                  );
              })}
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-photo-grid"
          >
            {photos.map(([image, label]) => (
              <motion.figure
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="about-photo"
                key={image}
              >
                <img src={image} alt={label} />
              </motion.figure>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
