"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "ACERCA", section: "about" },
    { label: "CARACTERISTICAS", section: "features" },
    { label: "PATROCINADORES", section: "sponsors" },
    { label: "REGISTRO", section: "register" },
    { label: "CONVOCATORIA", href: "/convocatoria" }, // página aparte
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScrollTo = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setActiveSection(""), 1000);
    setOpen(false);
  };

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: string
  ) => {
    // Si ya estamos en Home, prevenimos la navegación y hacemos scroll suave.
    if (pathname === "/") {
      e.preventDefault();
      smoothScrollTo(section);
    } else {
      // Si estamos en otra ruta, dejamos que Link vaya a /#section
      setOpen(false);
    }
  };

  return (
    <nav className="relative z-50 bg-[#1D3557] text-white">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4 py-4">
        <div className="font-bold text-2xl tracking-widest select-none">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-removebg-preview.png"
              alt="NASA Space Apps Atoyac Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#D4471D] transition-colors duration-200 font-medium tracking-widest text-lg"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.section}
                href={`/#${item.section}`} // siempre apunta al home + ancla
                onClick={(e) => handleSectionClick(e, item.section!)}
                className={`hover:text-[#D4471D] transition-colors duration-200 font-medium tracking-widest text-lg ${
                  activeSection === item.section
                    ? "text-[#D4471D] underline underline-offset-8"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden bg-[#1D3557] transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#D4471D] transition-colors duration-200 font-medium tracking-widest text-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.section}
                href={`/#${item.section}`}
                onClick={(e) => handleSectionClick(e, item.section!)}
                className={`hover:text-[#D4471D] transition-colors duration-200 font-medium tracking-widest text-lg ${
                  activeSection === item.section
                    ? "text-[#D4471D] underline underline-offset-8"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
