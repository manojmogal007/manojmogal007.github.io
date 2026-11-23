import { useState } from "react";
import BentoSkills from "./BentoSkills";
import SkillsField from "./SkillsField";

const Skills = () => {
  // "grid" = original categorized grid, "field" = interactive physics field.
  const [view, setView] = useState("grid");

  return (
    <section id="skills" className="py-0 mb-20 scroll-mt-20">
      {/* View toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-full bg-slate-900/60 border border-white/10">
          {/* {[
            { id: "grid", label: "Grid" },
            { id: "field", label: "Interactive" },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setView(opt.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                view === opt.id
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))} */}
        </div>
      </div>

      {view === "grid" ? <BentoSkills /> : <SkillsField />}
    </section>
  );
};

export default Skills;
