import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[#27445D] p-4 text-[#F7F7F7]">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold font-dancing tracking-wide">
          PORTOFOLIO
        </h1>

        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-[#71BBB2]">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#71BBB2]">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-[#71BBB2]">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#71BBB2]">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
