import React, { useState } from "react";
import "./Sidebar.css";
import { Home, UserRound, BriefcaseBusiness, UsersRound, FolderKanban, Sparkles, Menu, X } from "lucide-react";

const items = [
  ["home", "Beranda", Home],
  ["about", "Tentang", UserRound],
  ["experience", "Pengalaman", BriefcaseBusiness],
  ["organization", "Organisasi", UsersRound],
  ["projects", "Proyek", FolderKanban],
  ["skills", "Keahlian", Sparkles],
];

export default function Sidebar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);
  const activeIndex = Math.max(0, items.findIndex(([id]) => id === activeSection));

  const navigate = (id) => {
    setActiveSection(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Buka navigasi">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}
      <aside className={`side-nav ${open ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-photo">
            <img src="/images/profile/my-photo.jpg" alt="Rachma Pavita" />
          </div>
          <div>
            <div className="brand-name">Rachma Pavita</div>
            <div className="brand-role">Programmer & IT Governance</div>
          </div>
        </div>
        <nav className="nav-list" aria-label="Navigasi utama">
          <span className="nav-active-indicator" style={{ transform: `translateY(${activeIndex * 53}px)` }} />
          {items.map(([id, label, Icon]) => (
            <button key={id} className={`nav-item ${activeSection === id ? "active" : ""}`} onClick={() => navigate(id)}>
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>
        <div className="side-status">
          <div className="status-row"><span className="status-dot" />Terbuka untuk peluang</div>
          Pengembangan web, tata kelola TI, dan kolaborasi organisasi.
        </div>
      </aside>
    </>
  );
}
