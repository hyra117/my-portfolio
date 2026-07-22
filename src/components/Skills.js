import React from "react";
import "./Skills.css";
import { Code2, Database, Wrench, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

const groups = [
  {
    icon: Code2,
    title: "Programming & Development",
    skills: ["PHP", "ASP.NET", "Laravel", "Django", "Next.js", "React.js", "TypeScript", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
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
    skills: ["Tata Kelola TI", "Risk Management", "Problem Solving"],
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

const skillLogos = {
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "ASP.NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Data Analysis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "PyCharm": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
  "XAMPP": "https://cdn.simpleicons.org/xampp",
  "Draw.io": "https://cdn.simpleicons.org/diagramsdotnet/F08705",
  "Visio": "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/microsoftvisio.svg",
};

export default function Skills() {
  const { t } = useLanguage();

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
          <span className="eyebrow">{t.skills.eyebrow}</span>
          <h2 className="section-title">{t.skills.title}</h2>
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
                  {group.skills.map((skill) => {
                    const logoUrl = skillLogos[skill];
                    return (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        key={skill}
                        className="skill-pill"
                      >
                        {logoUrl && (
                          <img
                            src={logoUrl}
                            alt={skill}
                            className="skill-pill-icon"
                          />
                        )}
                        <span className="skill-pill-text">{skill}</span>
                      </motion.div>
                    );
                  })}
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
