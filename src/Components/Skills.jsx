import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiMongodb, SiNodedotjs, SiExpress, 
  SiTailwindcss, SiHtml5, SiJavascript, 
  SiMysql, SiDocker, SiGit, SiPython 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';


function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Databases', 'DevOps & Tools'];

  const skillsData = [
    {
      id: 1,
      name: "React.js",
      category: "Frontend",
      icon: <SiReact className="text-cyan-400 text-3xl" />,
      title: "Building fast, dynamic single-page applications with modern state management."
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      icon: <SiNodedotjs className="text-emerald-500 text-3xl" />,
      title: "Asynchronous server-side event-driven runtime for scalable API services."
    },
    {
      id: 3,
      name: "MongoDB",
      category: "Databases",
      icon: <SiMongodb className="text-emerald-600 text-3xl" />,
      title: "Flexible NoSQL database system for high-performance JSON data handling."
    },
    {
      id: 4,
      name: "Java",
      category: "Backend",
      icon: <FaJava className="text-red-500 text-3xl" />,
      title: "Core OOP language used for backend architectures and competitive DSA."
    },
    {
      id: 5,
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
      title: "Utility-first CSS framework for rapid responsive component design."
    },
    {
      id: 6,
      name: "MySQL",
      category: "Databases",
      icon: <SiMysql className="text-blue-600 text-3xl" />,
      title: "Relational database management system for structured queries and schema integrity."
    },
    {
      id: 7,
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress className="text-slate-800 text-3xl" />,
      title: "Minimalist Node.js framework for crafting robust RESTful APIs."
    },
    {
      id: 8,
      name: "Docker & Cloud",
      category: "DevOps & Tools",
      icon: <SiDocker className="text-blue-500 text-3xl" />,
      title: "Containerizing applications for consistent deployment across cloud environments."
    },
    {
      id: 9,
      name: "JavaScript",
      category: "Frontend",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      title: "ES6+ core web language powering client-side logic and DOM manipulations."
    },
    {
      id: 10,
      name: "Python / Flask",
      category: "Backend",
      icon: <SiPython className="text-blue-400 text-3xl" />,
      title: "Used for API backends, automation scripts, and ML workflow integration."
    },
    {
      id: 11,
      name: "Git & GitHub",
      category: "DevOps & Tools",
      icon: <SiGit className="text-orange-600 text-3xl" />,
      title: "Distributed version control system for collaborative code management."
    },
    {
      id: 12,
      name: "HTML5 & CSS3",
      category: "Frontend",
      icon: <SiHtml5 className="text-orange-500 text-3xl" />,
      title: "Semantic markup and modern styling foundations for web standards."
    }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section name="Skills" className="py-24 bg-slate-100/60 relative  dark:text-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 ">
          <span className="text-indigo-600 font-bold text-xs  tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 dark:text-white">
            Skills & Tech Ecosystem
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
        >
          <AnimatePresence>
            {filteredSkills.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group  dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 ">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors dark:bg-slate-300">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase dark:text-black">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors dark:text-white">
                    {item.name}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed dark:text-slate-300">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;