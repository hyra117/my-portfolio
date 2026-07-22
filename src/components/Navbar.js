import React, { useState } from "react";
import "./Navbar.css";
import { BriefcaseBusiness, FolderKanban, Home, Menu, Sparkles, UserRound, UsersRound, X, Languages } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const navIcons = {
  home: Home,
  about: UserRound,
  experience: BriefcaseBusiness,
  organization: UsersRound,
  projects: FolderKanban,
  skills: Sparkles,
};

export default function Navbar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const navigate = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  const navItems = [
    ["home", t.nav.home],
    ["about", t.nav.about],
    ["experience", t.nav.experience],
    ["organization", t.nav.organization],
    ["projects", t.nav.projects],
    ["skills", t.nav.skills],
  ];

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

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          type="button"
          className="lang-switcher-btn"
          onClick={toggleLanguage}
          title="Ganti Bahasa / Switch Language"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "5px 12px",
            borderRadius: "999px",
            border: "1px solid rgba(61, 139, 253, 0.3)",
            background: "rgba(61, 139, 253, 0.08)",
            color: "var(--blue-strong, #3d8bfd)",
            fontSize: "12px",
            fontWeight: "800",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
        >
          <Languages size={14} />
          <span>{lang === "id" ? "ID" : "EN"}</span>
          <span style={{ fontSize: "10px", opacity: 0.6, fontWeight: 400 }}>
            ({lang === "id" ? "EN" : "ID"})
          </span>
        </button>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Buka navigasi">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className={`navbar-menu ${open ? "open" : ""}`} aria-label="Navigasi utama">
        {navItems.map(([id, label]) => {
          const Icon = navIcons[id];
          return (
            <button
              key={id}
              className={`navbar-item ${activeSection === id ? "active" : ""}`}
              onClick={() => navigate(id)}
            >
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
