import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FiDownload, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiDocker } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import pic from '/Profile_pic.png'; // Ensure this path is correct based on your project structure

function Banner() {
  return (
    <section name="Home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:text-white dark:bg-slate-900">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 space-y-6 text-center lg:text-left"
          >
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
              <span>Welcome to my Digital Workspace</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-white">
                Hey, I'm <span className="text-indigo-600">Ajay Sharma</span>
              </h1>
              
              {/* Dynamic Typed Text */}
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 min-h-[48px] flex items-center justify-center lg:justify-start flex-wrap gap-2">
                <span className="text-slate-600 font-medium">I build as a</span>
                <ReactTyped
                  className="text-indigo-600 font-extrabold"
                  strings={[
                    "Full-Stack Developer",
                    "AngularJs Developer",
                    "ReactJs Developer",
                    "DevOps Enthusiast",
                    "MERN Stack Engineer",
                    "Creative UI/UX Designer"
                  ]}
                  typeSpeed={50}
                  backSpeed={40}
                  loop={true}
                />
              </div>
            </div>

            {/* High Contrast Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 dark:text-white">
              I specialize in crafting high-performance full-stack web applications and scalable cloud-ready architectures. Passionate about turning complex real-world problems into clean, efficient code with intuitive user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                href="#Projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/25 transition-all"
              >
                <span>Explore My Work</span>
                <FiArrowUpRight className="text-lg" />
              </motion.a>

              <motion.a
                href="/Sharma_Ajay.pdf"
                download="Ajay_Sharma_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
              >
                <FiDownload className="text-lg text-indigo-400" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-600 dark:text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white ">Connect:</span>
              <a href="https://github.com/Ajay-Sharma-20" target="_blank" rel="noreferrer" className="p-2 hover:text-indigo-600 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ajay-sharma20/" target="_blank" rel="noreferrer" className="p-2 hover:text-indigo-600 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:ajasharma9761@gmail.com" className="p-2 hover:text-indigo-600 transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 to-blue-500 rotate-6 opacity-30 blur-lg animate-pulse" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                <img 
                  src={pic} 
                  alt="Ajay Sharma Profile" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-slate-900 text-white px-3 py-2 rounded-xl shadow-xl flex items-center gap-2"
              >
                <SiReact className="text-cyan-400 text-xl" />
                <span className="text-xs font-bold">React.js</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-slate-900 text-white px-3 py-2 rounded-xl shadow-xl flex items-center gap-2"
              >
                <SiNodedotjs className="text-emerald-400 text-xl" />
                <span className="text-xs font-bold">Node.js</span>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-5 bg-slate-900 text-white p-2.5 rounded-xl shadow-xl"
              >
                <SiDocker className="text-blue-400 text-xl" />
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* High Contrast Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-300 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600">10+</h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">Full-Stack Projects</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600">MERN & Java</h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">Core Tech Stack</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600">DevOps & Cloud</h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">Deployment Focus</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600">100%</h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">Clean & Responsive UI</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;