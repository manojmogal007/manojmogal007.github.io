import React from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiPostgresql,
  SiFigma,
  SiDocker,
  SiPython
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    desc: "Component-based UI architecture",
    color: "text-cyan-400",
    bg: "hover:bg-cyan-400/10",
    border: "group-hover:border-cyan-400/50",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    desc: "Typed JavaScript at scale",
    color: "text-blue-500",
    bg: "hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    desc: "Full-stack React framework",
    color: "text-white",
    bg: "hover:bg-white/5",
    border: "group-hover:border-white/50",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    desc: "ES6+ Modern Syntax",
    color: "text-yellow-400",
    bg: "hover:bg-yellow-400/10",
    border: "group-hover:border-yellow-400/50",
    colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    desc: "Utility-first CSS",
    color: "text-teal-400",
    bg: "hover:bg-teal-400/10",
    border: "group-hover:border-teal-400/50",
    colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    desc: "Scalable backend runtime",
    color: "text-green-500",
    bg: "hover:bg-green-500/10",
    border: "group-hover:border-green-500/50",
    colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    desc: "NoSQL Database",
    color: "text-green-400",
    bg: "hover:bg-green-400/10",
    border: "group-hover:border-green-400/50",
    colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
  },
  {
    name: "Express",
    icon: SiExpress,
    desc: "Minimalist web framework",
    color: "text-gray-400",
    bg: "hover:bg-gray-400/10",
    border: "group-hover:border-gray-400/50",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    name: "Git",
    icon: SiGit,
    desc: "Version Control",
    color: "text-orange-500",
    bg: "hover:bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
  },
];

const BentoSkills = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Arsenal</span>
      </h2>

      <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(120px,auto)]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              ${skill.colSpan}
              relative group p-6 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md
              transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10
              flex flex-col justify-between overflow-hidden
              ${skill.border}
            `}
          >
            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg}`} />

            <div className="relative z-10 flex justify-between items-start">
              <skill.icon className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
              <span className="text-5xl font-bold text-white/5 absolute -right-2 -top-2 select-none group-hover:text-white/10 transition-colors">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:tracking-wide transition-all">{skill.name}</h3>
              <p className="text-slate-400 text-sm">{skill.desc}</p>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${skill.color.replace('text-', 'bg-')}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoSkills;
