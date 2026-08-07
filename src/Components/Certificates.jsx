import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
// Simple Icons se AWS hatayein
import { SiGoogle } from 'react-icons/si';
import { SiOpenjdk } from "react-icons/si";

// FontAwesome bundle se FaAws import karein
import { FaAws } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';

function Certificates() {
  const certificatesData = [
    {
      id: 1,
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills & Google for Developers",
      duration: "Oct - Dec 2025",
      icon: <SiGoogle className="text-xl text-red-500 dark:text-red-400" />,
      description: "10-week intensive virtual internship covering machine learning algorithms, model training, and AI implementation supported by India Edu Program.",
      skills: ["Machine Learning", "Python", "Artificial Intelligence", "Model Evaluation"],
      credentialUrl: "#" // Replace with direct link/PDF path if available
    },
    {
      id: 2,
      title: "Java Full Stack Developer Virtual Internship",
      issuer: "EduSkills Academy",
      duration: "Jul - Sep 2025",
      icon: <SiOpenjdk className="text-xl text-red-600 dark:text-red-500" />,
      description: "10-week hands-on virtual internship focusing on core Java, full-stack application structure, database connectivity, and enterprise fundamentals.",
      skills: ["Java", "Full Stack Development", "OOPs", "Backend Architecture"],
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "AWS Cloud Computing Workshop",
      issuer: "Amazon Web Services (AWS)",
      duration: "Hands-on Workshop",
      icon: <FaAws className="text-amber-500 text-2xl" />,
      description: "Practical workshop on AWS cloud infrastructure, cloud service deployment, storage management, and scalable cloud compute architecture.",
      skills: ["AWS", "Cloud Infrastructure", "EC2 & S3", "Cloud Security"],
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "Data Communication & Networking",
      issuer: "Academic & Industry Training",
      duration: "Core Certification",
      icon: <FaNetworkWired className="text-xl text-indigo-600 dark:text-indigo-400" />,
      description: "Comprehensive understanding of network protocols, OSI model layers, data transmission methods, packet switching, and IP routing fundamentals.",
      skills: ["Networking Protocols", "TCP/IP", "Data Communication", "Network Security"],
      credentialUrl: "#"
    }
  ];

  return (
    <section name="Certifications" id="Certifications" className="py-24 bg-slate-50 dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-widest uppercase bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            Validated Upskilling
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            Certifications & Industry Internships
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Recognized virtual internships, cloud workshops, and technical credentials.
          </p>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header: Icon, Issuer & Duration */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-100 dark:bg-slate-700/60 rounded-2xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                        {item.issuer}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>

                {/* One Line Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Skills Badges */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Key Skills Covered
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50"
                      >
                        <FiCheckCircle className="text-[10px] text-indigo-500" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Credential CTA */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60 flex justify-end">
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiAward className="text-sm" />
                  <span>Verify Credential</span>
                  <FiExternalLink className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;