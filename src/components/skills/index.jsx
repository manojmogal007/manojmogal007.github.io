import { useState } from "react";
import BentoSkills from "./BentoSkills";
import CylinderSkills from "./CylinderSkills";

const Skills = () => {
  // Use "bento" for original categorized grid, "cylinder" for the 3D sphere
  const [view, setView] = useState("bent");

  return (
    <section id="skills" className="py-0 mb-20 scroll-mt-20">
      {view === "bento" || true ? <BentoSkills /> : <CylinderSkills />}
    </section>
  );
};

export default Skills;
