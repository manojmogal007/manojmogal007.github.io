import React from "react";
import { skillCategories } from "./skillsData";

const BentoSkills = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 tracking-tight">
        Technical{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
          Arsenal
        </span>
      </h2>

      <div className="space-y-8">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-slate-300 whitespace-nowrap">
                {category.title}
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-slate-700/50 to-transparent" />
            </div>

            <div className="grid grid-cols-12 gap-3 auto-rows-[minmax(72px,auto)]">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`
                    ${skill.colSpan}
                    relative group p-4 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/10
                    flex items-center gap-4 overflow-hidden
                    ${skill.border}
                  `}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg}`}
                  />

                  <skill.icon
                    className={`relative z-10 text-3xl shrink-0 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                  />

                  <div className="relative z-10 min-w-0">
                    <h3 className="text-base font-bold text-white truncate group-hover:tracking-wide transition-all">
                      {skill.name}
                    </h3>
                    <p className="text-slate-400 text-xs truncate">
                      {skill.desc}
                    </p>
                  </div>

                  <div
                    className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${skill.color.replace("text-", "bg-")}`}
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
