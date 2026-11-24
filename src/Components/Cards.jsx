
import React from 'react';
import { FiGithub, FiExternalLink, FiLock } from 'react-icons/fi';

function Cards({ item }) {
  return (
    <div className="h-full flex">
      <div className="bg-white border border-slate-200/80 dark:border-slate-700/80 dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 w-full">

        {/* Project Thumbnail Header */}
        <div className="relative overflow-hidden h-48 bg-slate-100 dark:bg-slate-800">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
              {item.category || "Full-Stack"}
            </span>
          </div>

          {/* Private Project Badge */}
          {item.isPrivate && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white border border-white/20">
                <FiLock size={11} />
                Private
              </span>
            </div>
          )}
        </div>

        {/* Project Content Body */}
        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">

          <div className="space-y-2">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
              {item.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 dark:text-slate-300">
              {item.info}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {item.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">

            {item.isPrivate ? (
              <div className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-amber-700 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 rounded-xl border border-amber-100 dark:border-amber-500/20">
                <FiLock className="text-sm" />
                <span>Confidential Project</span>
              </div>
            ) : (
              <>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    <FiGithub className="text-sm" />
                    <span>Source Code</span>
                  </a>
                )}

                {item.demoUrl && (
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-500/20 transition-all"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="text-sm" />
                  </a>
                )}
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
