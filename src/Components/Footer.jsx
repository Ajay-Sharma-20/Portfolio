import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { id: 1, icon: <FiGithub size={18} />, href: "https://github.com/Ajay-Sharma-20", label: "GitHub" },
    { id: 2, icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/ajay-sharma20/", label: "LinkedIn" },
    { id: 3, icon: <FiTwitter size={18} />, href: "https://twitter.com", label: "Twitter" },
    { id: 4, icon: <FiInstagram size={18} />, href: "https://www.instagram.com/ajaysharmakp/", label: "Instagram" },
  ];

  const navLinks = [
    { id: 1, text: "Home", target: "Home" },
    { id: 2, text: "About", target: "About" },
    { id: 3, text: "Education", target: "Education" },
    { id: 4, text: "Skills", target: "Skills" },
    { id: 5, text: "Projects", target: "Projects" },
    { id: 6, text: "Contact", target: "Contact" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 text-white py-12 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Left Side: Name & Designation */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-bold bg-gradient-to-r dark:text-white from-slate-900 via-indigo-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent">
              Ajay Sharma
            </h3>
            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider">
              Full-Stack & DevOps Developer
            </p>
          </div>

          {/* Center: Quick Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-900 dark:text-white font-semibold">
            {navLinks.map(({ id, text, target }) => (
              <li key={id}>
                <Link
                  to={target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ id, icon, href, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 bg-slate-800/80 hover:bg-indigo-600 hover:text-white text-slate-100 rounded-xl transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-900 dark:text-white font-medium">
          <p>
            &copy; {currentYear} Ajay Sharma. Crafted with React & Tailwind CSS.
          </p>

          <Link
            to="Home"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-lg transition-all cursor-pointer text-[11px] font-bold"
          >
            <span>Back to top</span>
            <FiArrowUp />
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;