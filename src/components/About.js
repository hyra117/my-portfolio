import React from 'react';
import { Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-8 bg-[#F7F7F7]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
        
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img 
            src="/images/my-photo.jpg" 
            alt="Portrait of Rachma Pavita" 
            className="rounded-full w-72 h-72 mx-auto object-cover bg-white p-2" 
          />
        </div>

        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3 text-[#27445D]">Hai, Saya Rachma Pavita</h2>
          <p className="text-[#497D74] mb-4 text-justify">
            Lulusan S1 Teknik Informatika dengan pengalaman dalam pengembangan website dan sistem informasi, mencakup perancangan alur sistem, pengembangan fitur, 
            serta optimalisasi tampilan antarmuka. Terlibat dalam mendukung implementasi dasar IT Governance dan penerapan prinsip COBIT 2019 dalam proses audit dan pengelolaan TI. 
            Memiliki pengalaman magang dan freelance dalam mengerjakan proyek aplikasi internal yang digunakan untuk meningkatkan efektivitas proses operasional di lingkungan perusahaan.          
            </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="/document/CV - RACHMA PAVITA.pdf"
              className="bg-[#71BBB2] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md transform transition hover:translate-y-1 hover:shadow-lg"
              download
            >
              Download CV
            </a>

            <a
              href="tel:081287692520"
              className="bg-[#497D74] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md transform transition hover:translate-y-1 hover:shadow-lg"
            >
              <Phone size={18} /> Telepon
            </a>

            <a
              href="mailto:rahmapavita12@gmail.com"
              className="bg-[#27445D] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md transform transition hover:translate-y-1 hover:shadow-lg"
            >
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
