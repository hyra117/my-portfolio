import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Organization from "./components/Organization";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const sectionIds = ["home", "about", "experience", "organization", "projects", "skills"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="app-shell">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="content-shell">
        <main>
          <Header />
          <About />
          <Experience />
          <Organization />
          <Projects />
          <Skills />
        </main>
      </div>
      <footer className="footer">© 2026 Rachma Pavita · Portfolio</footer>
    </div>
  );
}
