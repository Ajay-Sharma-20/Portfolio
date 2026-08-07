import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCloud, FiLayout, FiCpu, FiCheckCircle } from 'react-icons/fi';
import photo from '/Profile_pic.png'; // Directly served from public folder

function Aboutme() {
  const highlights = [
    {
      icon: <FiCode className="text-xl text-indigo-600" />,
      title: "Full-Stack Development",
      desc: "Specialized in MERN stack, crafting performant SPA frontends with React & Tailwind CSS."
    },
    {
      icon: <FiCloud className="text-xl text-indigo-600" />,
      title: "DevOps & Cloud Engineering",
      desc: "Hands-on experience with Docker, automated deployment pipelines, and cloud workshops."
    },
    {
      icon: <FiCpu className="text-xl text-indigo-600" />,
      title: "Core Logic & CS Fundamentals",
      desc: "Strong problem-solving mindset using Java, Data Structures, and efficient algorithms."
    },
    {
      icon: <FiLayout className="text-xl text-indigo-600" />,
      title: "UI/UX & Visual Branding",
      desc: "Blending design sensitivity with clean code to build intuitive user-centric products."
    }
  ];

  return (
    <section name="About" className="py-24 bg-slate-100/70 relative dark:text-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 dark:text-white">
            Architecting Code with Design Precision
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card with Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Card Background */}
              <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform rotate-3 opacity-10" />
              
              <div className="relative bg-white border border-slate-200/80 p-6 rounded-3xl shadow-xl dark:text-white dark:bg-slate-900">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-inner mb-6">
                  <img
                    src={photo}
                    alt="Ajay Sharma"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between ">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider dark:text-white">Education</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 ">
                      Final Year MCA
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Postgraduate CS Student</h3>
                  <p className="text-xs text-slate-600 leading-relaxed dark:text-white">
                    Pursuing Master of Computer Applications (MCA) with a strong focus on full-stack web applications, cloud deployment, and system architecture.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Focus Areas */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 ">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Bridging Software Engineering & Seamless UI
              </h3>
              <p className="text-slate-700 text-base leading-relaxed dark:text-white">
                I am a passionate software developer specializing in building modern web systems. My expertise spans building scalable backends with Node.js & Python to designing interactive, responsive frontends with React and Tailwind CSS.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed dark:text-white ">
                Beyond full-stack coding, I actively explore cloud computing solutions, DevOps workflows, and system optimization. Combining my technical foundation with graphic design experience, I ensure every digital product I build is both engineering-sound and visually engaging.
              </p>
            </div>

            {/* Structured Highlight Bullet Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 ">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow "
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-50 rounded-xl dark:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Commitments */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-700 dark:text-white">
              <div className="flex items-center gap-1.5 ">
                <FiCheckCircle className="text-indigo-600 text-sm" />
                <span>Clean Code Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-indigo-600 text-sm" />
                <span>Continuous Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-indigo-600 text-sm" />
                <span>Agile Problem Solver</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Aboutme;