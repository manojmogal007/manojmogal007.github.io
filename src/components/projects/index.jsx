import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";
import audienz from "../../assets/audienz.png";
import uii from "../../assets/uii.png";
import promptflow from "../../assets/promptflow.png";
import aida from "../../assets/aida.png";

const projectsConfig = [
  {
    title: "Audienz.ai",
    description: "AI-driven marketing intelligence platform.",
    longDescription:
      "Combines buyer intent data with automation to help businesses find in-market prospects and convert them into qualified leads.",
    image: audienz,
    link: "https://app.audienz.ai/",
    color: "from-blue-400 to-cyan-300",
    techStack: ["React", "Redux", "MUI"],
  },
  {
    title: "Aida",
    description: "Prospect identification & lead qualification.",
    longDescription:
      "Leverages intent data to identify active prospects and offers AI-driven campaign workflows.",
    image: aida,
    link: "https://aida2-dev.audienz.ai/dashboard",
    color: "from-fuchsia-400 to-pink-300",
    techStack: ["React", "TS", "Redux"],
  },
  {
    title: "Promptflow Live",
    description: "AI Agent workflow automation.",
    longDescription:
      "Enables users to create, execute, and reuse AI agent-driven workflows for multi-step tasks.",
    image: promptflow,
    link: "https://manojmogal007.github.io/prompt-flow/auth/signin",
    color: "from-amber-400 to-orange-300",
    techStack: ["React", "TS", "Tailwind"],
  },
  {
    title: "Cruxstack",
    description: "Real-time user intelligence dashboard.",
    longDescription:
      "Transforms user behavior data into actionable insights for product teams with predictive analytics and adaptive ML.",
    image: uii,
    link: "https://console.cruxstack.com/",
    color: "from-emerald-400 to-teal-300",
    techStack: ["React", "TS", "Tailwind"],
  },
];

const HorizontalProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[300vh] bg-slate-950"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Section Title - Fixed */}
        <div className="absolute top-12 left-12 z-20 mix-blend-difference pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter opacity-20">
            SELECTED WORKS
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-24 px-24">
          {/* Intro Slide */}
          <div className="flex-shrink-0 w-[500px] h-[60vh] flex flex-col justify-center">
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                Digital <br /> Experiences
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Scroll down to explore a curated gallery of my recent technical
              projects.
            </p>
          </div>

          {/* Project Cards */}
          {projectsConfig.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalProjects;
