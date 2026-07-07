import React from "react";

const groups = [
  {
    title: "Programming & Development",
    skills: ["PHP", "Laravel", "Next.js", "React.js", "TypeScript", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Database & Data",
    skills: ["MySQL", "Data Analysis"],
  },
  {
    title: "Tools & Software",
    skills: ["GitLab", "GitHub", "VS Code", "PyCharm", "XAMPP", "Visio", "Draw.io"],
  },
  {
    title: "Governance & Professional",
    skills: ["Tata Kelola TI", "Risk Management", "Problem Solving", "Professional Communication"],  },
];

const certifications = [
  ["Data Science Associate", "BNSP Digitalent Kominfo · 2025"],
  ["Microsoft Office Specialist", "Excel Associate · Certiport · 2022"],
  ["Back-End untuk Pemula", "Dicoding · 2025"],
  ["AWS Cloud Practitioner Essentials", "Dicoding · 2021"],
];

export default function Skills() {
  return (
    <section id="skills" className="page-section">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">05 · Keahlian</span>
          <h2 className="section-title">Kompetensi dan sertifikasi</h2>
        </div>
        <div className="skill-groups">
          {groups.map((group) => (
            <article className="card skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="certification-grid">
          {certifications.map(([title, issuer]) => (
            <article className="certification-card" key={title}>
              <span>Certificate</span><strong>{title}</strong><small>{issuer}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
