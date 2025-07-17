"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "ACERCA", section: "about" },
    { label: "CARACTERISTICAS", section: "features" },
    { label: "PATROCINADORES", section: "sponsors" },
    { label: "REGISTRO", section: "register" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const handleNavClick = (section: string) => {
  setActiveSection(section);

  const el = document.getElementById(section);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  setTimeout(() => setActiveSection(""), 1000); // Quitar subrayado tras 1s

  setOpen(false);
};


  return (
    <nav className="relative z-50 bg-[#1D3557] text-white">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4 py-4">
        <div className="font-bold text-2xl tracking-widest select-none">
          <a href="https://www.atoyacspaceapps.org/" className="flex items-center space-x-2">
            <Image
              src="/logo-removebg-preview.png"
              alt="NASA Space Apps Atoyac Logo"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className={`hover:text-[#D4471D] transition-colors duration-200 font-medium tracking-widest text-lg ${activeSection === item.section ? "text-[#D4471D] underline underline-offset-8" : ""
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 rounded focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>
      <div
        className={`md:hidden bg-[#1D3557] transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className={`hover:text-[#D4471D] transition-colors duration-200 font-medium tracking-widest text-lg ${activeSection === item.section ? "text-[#D4471D] underline underline-offset-8" : ""
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;