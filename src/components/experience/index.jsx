import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: [
      "Led the development of a cloud-native microservices architecture.",
      "Optimized database performance, reducing query time by 40%.",
      "Mentored junior developers and conducted code reviews.",
    ],
    skills: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    role: "Software Developer",
    company: "Digital Innovations",
    period: "2021 - 2023",
    description: [
      "Developed interactive user interfaces using React and Redux.",
      "Collaborated with UX/UI designers to implement responsive designs.",
      "Integrated third-party APIs for payment processing and analytics.",
    ],
    skills: ["JavaScript", "React", "CSS3", "Git"],
  },
  {
    role: "Junior Web Developer",
    company: "Creative Web Agency",
    period: "2020 - 2021",
    description: [
      "Built and maintained responsive websites for various clients.",
      "Assisted in backend development using Python and Django.",
      "Participated in daily stand-ups and sprint planning meetings.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Python"],
  },
];

function Experience() {
  return (
    <div id="experience" className="relative w-full min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-800 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-center justify-between w-full relative`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-violet-500 rounded-full border-4 border-slate-950 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-violet-500/50 transition-colors duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm mt-2 md:mt-0">
                        <FaCalendarAlt className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-lg text-slate-300 mb-4 font-semibold">
                      <FaBriefcase className="mr-2 text-violet-500" />
                      {exp.company}
                    </div>

                    <ul className="list-disc list-outside ml-5 space-y-2 text-slate-400 mb-6">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 text-violet-300 text-xs rounded-full border border-slate-700/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
