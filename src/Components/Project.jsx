import React from 'react';
import Cards from './Cards';

function Project() {
  const projectsData = [
    {
      id: 1,
      title: "ChapterZero - Library Management System",
      category: "Full-Stack MERN",
      info: "Comprehensive digital library solution featuring admin & user dashboards, JWT authentication, and Cloudinary media integration for managing book collections.",
      image: "/project_01.jpg", // Public folder path
      techStack: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/sajaysharma/bookLibrary",
      demoUrl: "https://github.com/sajaysharma/bookLibrary"
    },
    {
      id: 2,
      title: "Smart Career Guidance System",
      category: "ML & Web App",
      info: "Machine learning driven platform providing automated personalized career recommendations, dynamic skill mapping, and industry role analysis.",
      image: "/project_04.png",
      techStack: ["Python", "Flask", "React.js", "Tailwind CSS", "Scikit-Learn"],
      githubUrl: "https://github.com/Ajay-Sharma-20/CareerGuidanceProject",
      demoUrl: "https://github.com/Ajay-Sharma-20/CareerGuidanceProject"
    },
    {
      id: 3,
      title: "TubeMark - YouTube Timestamp Bookmark",
      category: "Chrome Extension",
      info: "Browser extension allowing users to save timestamped notes directly while watching YouTube videos for quick productivity and study reference.",
      image: "/project_02.png",
      techStack: ["JavaScript", "Chrome API", "Tailwind CSS", "Manifest V3"],
      githubUrl: "https://github.com/sajaysharma",
      demoUrl: ""
    },
    {
      id: 4,
      title: "Smart Intruder Detection System",
      category: "IoT & Computer Vision",
      info: "Security surveillance system leveraging OpenCV motion detection logic for real-time intruder monitoring and automated alert triggers.",
      image: "/project_03.jpg",
      techStack: ["Python", "OpenCV", "Computer Vision"],
      githubUrl: "https://github.com/sajaysharma",
      demoUrl: ""
    },

{
  id: 5,
  title: "MarineSoft Vertex CRM",
  category: "Full-Stack Enterprise CRM",
  info: "Enterprise-grade business automation and outbound telecalling CRM featuring role-based dashboards, deterministic lead distribution, bulk lead assignment, high-throughput lead ingestion, and a mobile-optimized telecaller hub.",
  image: "/project_crm.png",
  techStack: [
    "React 18",
    "Laravel 13",
    "PHP 8.3",
    "MySQL 8",
    "Tailwind CSS",
    "REST API"
  ],
  githubUrl: "",
  demoUrl: "",
  isPrivate: true,
  projectType: "Enterprise Application"
},
{
  id: 6,
  title: "Tradescape - Trader Risk Dashboard",
  category: "Full-Stack Trading Dashboard",
  info: "A responsive trading risk management dashboard that dynamically analyzes trade performance, calculates real-time P&L, win rate, drawdown, daily loss limits, and account compliance status with intelligent risk indicators.",
  image: "/project_tradescape.png",
  techStack: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Lucide React",
    "Recharts",
    "JavaScript"
  ],
  githubUrl: "https://github.com/Ajay-Sharma-20/Tradescape-Risk-Dashboard",
  demoUrl: "https://tradescape-risk-dashboard.netlify.app/",
  projectType: "Financial Analytics & Risk Management"
}

  ];

  return (
    <section name="Projects" className="py-24 bg-slate-50 relative dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 dark:text-white">
            Projects & Code Architecture
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed dark:text-slate-300">
            A curated showcase of full-stack web applications, machine learning tools, and open-source utilities built with clean engineering standards.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;