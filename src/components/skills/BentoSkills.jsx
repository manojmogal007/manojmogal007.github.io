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
  SiRedux,
  SiMui,
  SiRedis,
  SiPostman,
  SiReactrouter,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      {
        name: "React",
        icon: SiReact,
        desc: "UI Architecture",
        color: "text-cyan-400",
        bg: "hover:bg-cyan-400/10",
        border: "group-hover:border-cyan-400/50",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        desc: "Full-stack React",
        color: "text-white",
        bg: "hover:bg-white/5",
        border: "group-hover:border-white/50",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        desc: "Type-safe JS",
        color: "text-blue-500",
        bg: "hover:bg-blue-500/10",
        border: "group-hover:border-blue-500/50",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        desc: "State Management",
        color: "text-purple-500",
        bg: "hover:bg-purple-500/10",
        border: "group-hover:border-purple-500/50",
        colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        desc: "Modern Styling",
        color: "text-teal-400",
        bg: "hover:bg-teal-400/10",
        border: "group-hover:border-teal-400/50",
        colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
      },
      {
        name: "Material UI",
        icon: SiMui,
        desc: "Component Library",
        color: "text-blue-400",
        bg: "hover:bg-blue-400/10",
        border: "group-hover:border-blue-400/50",
        colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        desc: "ES6+ Logic",
        color: "text-yellow-400",
        bg: "hover:bg-yellow-400/10",
        border: "group-hover:border-yellow-400/50",
        colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
      },
      {
        name: "React Router",
        icon: SiReactrouter,
        desc: "Client Side Routing",
        color: "text-red-400",
        bg: "hover:bg-red-400/10",
        border: "group-hover:border-red-400/50",
        colSpan: "col-span-6 md:col-span-6 lg:col-span-6",
      },
      {
        name: "HTML5 & CSS3",
        icon: SiHtml5,
        desc: "Web Fundamentals",
        color: "text-orange-500",
        bg: "hover:bg-orange-500/10",
        border: "group-hover:border-orange-500/50",
        colSpan: "col-span-6 md:col-span-6 lg:col-span-6",
      },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        desc: "Server Runtime",
        color: "text-green-500",
        bg: "hover:bg-green-500/10",
        border: "group-hover:border-green-500/50",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        desc: "Web Framework",
        color: "text-gray-300",
        bg: "hover:bg-gray-300/10",
        border: "group-hover:border-gray-300/50",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        desc: "NoSQL Database",
        color: "text-green-400",
        bg: "hover:bg-green-400/10",
        border: "group-hover:border-green-400/50",
        colSpan: "col-span-12 md:col-span-12 lg:col-span-4",
      },
      {
        name: "Redis",
        icon: SiRedis,
        desc: "Caching/Queues",
        color: "text-red-500",
        bg: "hover:bg-red-500/10",
        border: "group-hover:border-red-500/50",
        colSpan: "col-span-6 md:col-span-6 lg:col-span-6",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        desc: "Relational DB",
        color: "text-blue-400",
        bg: "hover:bg-blue-400/10",
        border: "group-hover:border-blue-400/50",
        colSpan: "col-span-6 md:col-span-6 lg:col-span-6",
      },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      {
        name: "Git & GitHub",
        icon: SiGit,
        desc: "Version Control",
        color: "text-orange-500",
        bg: "hover:bg-orange-500/10",
        border: "group-hover:border-orange-500/50",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
      },
      // {
      //   name: "Docker",
      //   icon: SiDocker,
      //   desc: "Containerization",
      //   color: "text-blue-500",
      //   bg: "hover:bg-blue-500/10",
      //   border: "group-hover:border-blue-500/50",
      //   colSpan: "col-span-6 md:col-span-4 lg:col-span-3",
      // },
      {
        name: "Postman",
        icon: SiPostman,
        desc: "API Testing",
        color: "text-orange-400",
        bg: "hover:bg-orange-400/10",
        border: "group-hover:border-orange-400/50",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
      },
      // {
      //   name: "Figma",
      //   icon: SiFigma,
      //   desc: "UI/UX Design",
      //   color: "text-purple-400",
      //   bg: "hover:bg-purple-400/10",
      //   border: "group-hover:border-purple-400/50",
      //   colSpan: "col-span-12 md:col-span-12 lg:col-span-3",
      // },
    ],
  },
];

const BentoSkills = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
        Technical{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
          Arsenal
        </span>
      </h2>

      <div className="space-y-20">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-300 whitespace-nowrap">
                {category.title}
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-slate-700/50 to-transparent" />
            </div>

            <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(120px,auto)]">
              {category.skills.map((skill, index) => (
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
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg}`}
                  />

                  <div className="relative z-10 flex justify-between items-start">
                    <skill.icon
                      className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  <div className="relative z-10 mt-4">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:tracking-wide transition-all">
                      {skill.name}
                    </h3>
                    <p className="text-slate-400 text-xs">{skill.desc}</p>
                  </div>

                  <div
                    className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${skill.color.replace("text-", "bg-")}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoSkills;
