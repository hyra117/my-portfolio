import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer (Internship)",
    company: "PTP Nonpetikemas",
    date: "Jan 2025 – Jan 2026",
    image: "/images/PTP Non.png",
  },
  {
    title: "Digital Communication (Freelance)",
    company: "MDMC Indonesia",
    date: "Nov 2024 – Jan 2025",
    image: "/images/Mdmc.png",
  },
  {
    title: "System Analyst (Internship)",
    company: "PT. Kalbe Farma. Tbk.",
    date: "Feb 2024 – Jun 2024",
    image: "/images/Kalbe.png",
  },
  {
    title: "Web Developer (Internship)",
    company: "BPTI UHAMKA",
    date: "Apr 2023 – Jul 2023",
    image: "/images/bpti.jpg",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-7 bg-[#F7F7F7] flex justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#27445D]">PENGALAMAN</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#497D74] p-8 shadow-lg rounded-xl flex flex-col items-center text-center cursor-pointer transition duration-300"
              whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)" }}
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-24 h-24 object-contain mb-6 rounded-full border-4 border-white bg-white p-2"
              />
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-white text-lg">{exp.company}</p>
              <p className="text-white text-md">{exp.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
