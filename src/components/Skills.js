import React from "react";
import "./Skills.css";
import { Code2, Database, Wrench, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
  {
    icon: Code2,
    title: "Programming & Development",
    skills: ["PHP", "ASP.NET", "Laravel", "Next.js", "React.js", "TypeScript", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Database & Data",
    skills: ["MySQL", "PostgreSQL", "Data Analysis"],
  },
  {
    icon: Wrench,
    title: "Tools & Software",
    skills: ["GitLab", "GitHub", "VS Code", "PyCharm", "XAMPP", "Visio", "Draw.io"],
  },
  {
    icon: ShieldCheck,
    title: "Governance & Professional",
    skills: ["Tata Kelola TI", "Risk Management", "Problem Solving", "Professional Communication"],
  },
];

const certifications = [
  ["Data Science Associate", "BNSP Digitalent Kominfo · 2025"],
  ["Microsoft Office Specialist", "Excel Associate · Certiport · 2022"],
  ["Back-End untuk Pemula", "Dicoding · 2025"],
  ["AWS Cloud Practitioner Essentials", "Dicoding · 2021"],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="page-section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <span className="eyebrow">05 · Keahlian</span>
          <h2 className="section-title">Kompetensi dan sertifikasi</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skill-groups"
        >
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card skill-group"
                key={group.title}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Icon size={18} color="#3d8bfd" />
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-pills">
                  {group.skills.map((skill) => (
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      key={skill}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="certification-grid"
        >
          {certifications.map(([title, issuer]) => (
            <motion.article
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="certification-card"
              key={title}
            >
              <span><Award size={12} style={{ display: "inline", verticalAlign: "-1px", marginRight: "4px" }} />Certificate</span>
              <strong>{title}</strong>
              <small>{issuer}</small>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
