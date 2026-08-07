import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FiDownload, FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";

import profilePic from '/A3---12pp.jpg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme State Setup (Check LocalStorage or System Preference)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-colr-scheme: dark)').matches);
  });

  // Apply/Remove 'dark' class on <html> element
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [darkMode]);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home", target: "Home" },
    { id: 2, text: "About", target: "About" },
    { id: 3, text: "Education", target: "Education" },
    { id: 4, text: "Certifications", target: "Certifications" },
    { id: 5, text: "Skills", target: "Skills" },
    { id: 6, text: "Projects", target: "Projects" },
    { id: 7, text: "Contact", target: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-slate-800/50 h-16" 
        : "bg-white dark:bg-slate-900 h-20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        
        {/* Left Side Logo */}
        <Link to="Home" smooth={true} duration={500} className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative">
            <img 
              src={profilePic} 
              alt="Ajay Sharma" 
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/80 group-hover:scale-105 transition-transform duration-300 shadow-md"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col dark:text-white">
            <span className="text-lg font-bold bg-gradient-to-r dark:text-white from-slate-900 via-indigo-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent">
              Ajay Sharma
            </span>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider">
              Full-Stack & DevOps
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {navItems.map(({ id, text, target }) => (
              <li key={id}>
                <Link
                  to={target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="!text-indigo-600 dark:!text-indigo-400 !font-bold after:!w-full"
                  className="relative text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-semibold transition-colors duration-200 cursor-pointer py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark / Light Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Resume CTA */}
          <a
            href="/Sharma_Ajay.pdf"
            download="Ajay_Sharma_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-full shadow-md shadow-indigo-500/20 transition-all duration-200"
          >
            <FiDownload className="text-sm" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Dark Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setMenu(!menu)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[64px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out origin-top ${
          menu ? "opacity-100 scale-y-100 py-6" : "opacity-0 scale-y-0 h-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map(({ id, text, target }) => (
            <li key={id} className="w-full text-center">
              <Link
                onClick={() => setMenu(false)}
                to={target}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="!text-indigo-600 dark:!text-indigo-400 !font-bold"
                className="inline-block w-3/4 py-2 text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;