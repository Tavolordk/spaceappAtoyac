'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'ABOUT', section: 'about' },
    { label: 'FEATURES', section: 'features' },
    { label: 'SPONSORS', section: 'sponsors' },
    { label: 'REGISTER', section: 'register' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4 mt-8">
        <div className="text-[#3B2B22] font-bold text-2xl tracking-widest select-none">SPACE APPS</div>
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className={`hover:text-gray-900 transition-colors duration-200 font-medium tracking-widest text-lg ${
                activeSection === item.section ? 'text-gray-900 underline underline-offset-8' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 rounded text-[#3B2B22] focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <i className={`fas fa-${open ? 'times' : 'bars'} text-2xl`} />
        </button>
      </div>
      <div
        className={`md:hidden absolute left-0 right-0 bg-[#FFFCF6] shadow-lg transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } mt-2`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className={`hover:text-gray-900 transition-colors duration-200 font-medium tracking-widest text-lg ${
                activeSection === item.section ? 'text-gray-900 underline underline-offset-8' : ''
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
