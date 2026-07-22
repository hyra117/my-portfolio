import React, { useState } from "react";
import "./Navbar.css";
import { BriefcaseBusiness, FolderKanban, Home, Menu, Sparkles, UserRound, UsersRound, X } from "lucide-react";

const items = [
  ["home", "Beranda", Home],
  ["about", "Tentang", UserRound],
  ["experience", "Pengalaman", BriefcaseBusiness],
  ["organization", "Organisasi", UsersRound],
  ["projects", "Proyek", FolderKanban],
  ["skills", "Keahlian", Sparkles],
];

export default function Navbar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);

  const navigate = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="top-navbar">
      <a className="navbar-brand" href="#home" onClick={(event) => {
        event.preventDefault();
        navigate("home");
      }}>
        <span className="navbar-photo">
          <img src="/images/profile/my-photo.jpg" alt="Rachma Pavita" />
        </span>
        <span>
          <strong>Rachma Pavita</strong>
          <small>Programmer & IT Governance</small>
        </span>
      </a>

      <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Buka navigasi">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={`navbar-menu ${open ? "open" : ""}`} aria-label="Navigasi utama">
        {items.map(([id, label, Icon]) => (
          <button
            key={id}
            className={`navbar-item ${activeSection === id ? "active" : ""}`}
            onClick={() => navigate(id)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
