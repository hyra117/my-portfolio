import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Organization from "./components/Organization";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const pages = {
  home: Header,
  about: About,
  experience: Experience,
  organization: Organization,
  projects: Projects,
  skills: Skills,
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const ActivePage = pages[activeSection] || Header;

  const changePage = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="app-shell single-page-shell">
      <Navbar activeSection={activeSection} setActiveSection={changePage} />
      <div className="content-shell">
        <main className="page-switcher">
          <AnimatePresence mode="wait">
            <motion.div
              className="page-view"
              key={activeSection}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <ActivePage onNavigate={changePage} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <footer className="footer">© 2026 Rachma Pavita · Portfolio</footer>
    </div>
  );
}
