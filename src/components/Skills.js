import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "/images/html.svg" },
  { name: "CSS", img: "/images/CSS.svg" },
  { name: "JavaScript", img: "/images/JS.svg" },

  { name: "Bootstrap", img: "/images/Bootstrap.svg" },
  { name: "Tailwind CSS", img: "/images/Tailwind.svg" },
  { name: "React", img: "/images/React.svg" },

  { name: "Node.js", img: "/images/Nodejs.svg" },
  { name: "Laravel", img: "/images/Laravel.svg" },
  { name: "Django", img: "/images/django.png" },

  { name: "PostgreSQL", img: "/images/Postgresql.png" },
  { name: "PhpMyAdmin", img: "/images/phpmyadmin.png" },

  { name: "Canva", img: "/images/Canva.svg" },
  { name: "CapCut", img: "/images/capcut.png" },

  { name: "Microsoft Office", img: "/images/office.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-7 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold mb-10 text-center text-[#27445D]">
          KETERAMPILAN
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#497D74] p-4 rounded-lg shadow-lg text-center cursor-pointer"
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                <img src={skill.img} alt={skill.name} className="w-12 h-12" />
              </div>
              <p className="mt-2 font-semibold text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
