import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function Education() {
    const educationData = [
        {
            id: 1,
            degree: "Master of Computer Applications (MCA)",
            category: "Post Graduation",
            institution: "Galgotias University",
            location: "Greater Noida, UP",
            duration: "2024 - Present",
            status: "Pursuing (Final Year)",
            details: "Focusing on Advanced Full-Stack Architecture, Cloud Computing, System Design, and Machine Learning applications.",
            badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
        },
        {
            id: 2,
            degree: "Bachelor of Computer Applications (BCA)",
            category: "Graduation",
            institution: "RBMI Group of Institutions",
            location: "Bareilly, UP",
            duration: "2021 - 2024",
            status: "Completed",
            details: "Gained strong CS fundamentals in Data Structures & Algorithms, OOPs (Java), Database Systems (DBMS), and Web Technologies.",
            badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200"
        },
        {
            id: 3,
            degree: "Intermediate (12th Grade)",
            category: "Senior Secondary",
            institution: "SRM Inter College",
            location: "Milak, Rampur, UP",
            duration: "2019 - 2021",
            status: "Completed",
            details: "Completed Higher Secondary Education focusing on Science and Mathematics stream.",
            badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
        },
        {
            id: 4,
            degree: "High School (10th Grade)",
            category: "Secondary Education",
            institution: "Pt. Ram Pd Vaidya Smarak IC",
            location: "Milak, Rampur, UP",
            duration: "2018 - 2019",
            status: "Completed",
            details: "Foundational schooling with strong emphasis on Mathematics and General Science.",
            badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
        }
    ];

    return (
        <section name="Education" className="py-24 bg-slate-50 relative overflow-hidden dark:text-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                        Academic Background
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 dark:text-white">
                        Education & Qualifications
                    </h2>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto ">

                    {/* Vertical Connecting Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-indigo-500 via-indigo-300 to-slate-300 rounded-full " />

                    {/* Timeline Cards */}
                    <div className="space-y-12 ">
                        {educationData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                >

                                    {/* Timeline Node Icon Center Indicator */}
                                    <div className=" absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white shadow-lg border-4 border-white">
                                        {index === 0 ? <FaGraduationCap className="text-lg" /> : <FaSchool className="text-sm" />}
                                    </div>

                                    {/* Content Card Wrapper */}
                                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full ">
                                        <div className="bg-white p-6 rounded-2xl border dark:bg-slate-800 border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300">

                                            {/* Top Header & Duration */}
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 ">
                                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border  ${item.badgeColor}`}>
                                                    {item.category}
                                                </span>
                                                <div className="flex items-center text-xs font-semibold text-slate-500 gap-1.5 dark:text-white">
                                                    <FaCalendarAlt className="text-indigo-500" />
                                                    <span>{item.duration}</span>
                                                </div>
                                            </div>

                                            {/* Title & College Name */}
                                            <h3 className="text-lg font-bold text-slate-900 leading-snug dark:text-white">
                                                {item.degree}
                                            </h3>

                                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mt-1 dark:text-white">
                                                <span className="text-indigo-600 font-bold">{item.institution}</span>
                                                <span>•</span>
                                                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-300">
                                                    <FaMapMarkerAlt className="text-xs" />
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>

                                            {/* Detailed Description */}
                                            <p className="text-xs text-slate-600 mt-3 leading-relaxed dark:text-slate-300 ">
                                                {item.details}
                                            </p>

                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>

                </div>

               

            </div>
        </section>
    );
}

export default Education;