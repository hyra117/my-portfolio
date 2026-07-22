import React from "react";
import "./About.css";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

const photos = [
  ["/images/photo/1.jpg", "Momen kelulusan"],
  ["/images/photo/2.png", "Aktivitas kampus"],
  ["/images/photo/3.png", "Perjalanan organisasi"],
  ["/images/photo/4.jpeg", "Dokumentasi kegiatan"],
];

export default function About() {
  const { t } = useLanguage();

  const contacts = [
    [MapPin, "Lokasi", t.about.location, null],
    [Mail, "Email", "rahmapavita12@gmail.com", "mailto:rahmapavita12@gmail.com"],
    [Linkedin, "LinkedIn", "rahma-pavita", "https://www.linkedin.com/in/rahma-pavita"],
    [Github, "GitHub", "hyra117", "https://github.com/hyra117"],
  ];

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
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">{t.about.title}</h2>        
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
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
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
