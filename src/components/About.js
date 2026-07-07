import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const photos = [
  ["/images/photo/1.jpg", "Momen kelulusan"],
  ["/images/photo/2.png", "Aktivitas kampus"],
  ["/images/photo/3.png", "Perjalanan organisasi"],
];

const contacts = [
  [Mail, "Email", "rahmapavita12@gmail.com", "mailto:rahmapavita12@gmail.com"],
  [Phone, "Telepon", "0838 9039 0900", "tel:083890390900"],
  [MapPin, "Lokasi", "Bekasi, Jawa Barat", null],
  [Linkedin, "LinkedIn", "rahma-pavita", "https://www.linkedin.com/in/rahma-pavita"],
];

export default function About() {
  return (
    <section id="about" className="page-section alt">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">01 · Profil</span>
          <h2 className="section-title">TENTANG SAYA</h2>        
      </div>

        <div className="about-simple-grid">
          <article className="about-intro">
            <p>
              Saya Rachma Pavita berfokus pada pengembangan aplikasi web dengan performa optimal 
              dan penerapan tata kelola TI. Kompetensi utama meliputi transformasi 
              kebutuhan bisnis menjadi solusi digital yang fungsional, aman, dan memiliki 
              arsitektur kode yang terstruktur.
            </p>
            <p>
              Memiliki pengalaman dalam pengembangan perangkat lunak dengan pendekatan kerja yang terstruktur, 
              teliti, dan berorientasi pada standar industri. Didukung kemampuan komunikasi teknis yang baik, 
              adaptif terhadap perkembangan teknologi, serta mampu bekerja sama secara efektif dalam tim pengembang.
            </p>
          </article>

          <div className="about-photo-grid">
            {photos.map(([image, label]) => (
              <figure className="about-photo" key={image}>
                <img src={image} alt={label} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="about-contact">
          <div>
            <span className="eyebrow">Kontak</span>
            <h3>Mari terhubung dan berdiskusi.</h3>
          </div>
          <div className="about-contact-links">
            {contacts.map(([Icon, label, value, href]) => {
              const content = <><Icon size={17} /><span><small>{label}</small>{value}</span></>;
              return href
                ? <a className="contact-chip" href={href} key={label}>{content}</a>
                : <div className="contact-chip" key={label}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
