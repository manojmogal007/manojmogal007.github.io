import React from "react";
import ProjectCard from "./ProjectCard";
import audienz from "../../assets/audienz.png";
import uii from "../../assets/uii.png";
import promptflow from "../../assets/promptflow.png";
import aida from "../../assets/aida.png";

const projectsConfig = [
  {
    title: "Audienz.ai",
    description: `An AI‑driven marketing and sales intelligence platform that combines buyer intent data with automation to help businesses find 
    in‑market prospects and convert them into qualified leads. I contributed to building key modules including lead discovery and verification,
     AI‑powered outreach workflows, and interactive dashboards for tracking campaigns, performance metrics, and lead quality.`,
    image: audienz,
    link: "https://app.audienz.ai/",
    techStack: [
      "React",
      "Javascript",
      "React Router",
      "Redux Toolkit",
      "Frontegg",
      "Material UI",
      "Stigg",
    ],
  },
  {
    title: "Cruxstack",
    description: `Cruxstack is a real-time user intelligence platform that transforms user behavior data into actionable insights. It helps product teams track user actions, predict behaviors like churn or upgrade readiness, and optimize experiences using a simple SDK, real-time dashboards, and adaptive machine learning—without needing deep ML expertise.`,
    image: uii,
    link: "https://console.cruxstack.com/",
    techStack: [
      "React",
      "Javascript",
      "Typescript",
      "React Router",
      "Redux Toolkit",
      "WorkOS Authkit",
      "TailwindCSS",
    ],
  },
  {
    title: "Aida",
    description: `A marketing and sales intelligence platform powered by AI that leverages buyer intent data to identify prospects actively in the market and turn them into qualified leads. It offers AI-driven campaign workflows and dynamic dashboards to monitor campaigns, measure performance, and evaluate lead quality.`,
    image: aida,
    link: "https://aida2-dev.audienz.ai/dashboard",
    techStack: [
      "React",
      "Javascript",
      "Typescript",
      "React Router",
      "Redux Toolkit",
      "TailwindCSS",
    ],
  },
  {
    title: "Promptflow Live",
    description: `PromptFlow Live is a platform that enables users to create, execute, and reuse AI agent–driven workflows to automate multi-step tasks. It allows seamless real-time collaboration, making workflow design, execution, and iteration faster and more efficient.`,
    image: promptflow,
    link: "https://manojmogal007.github.io/prompt-flow/auth/signin",
    techStack: [
      "React",
      "Javascript",
      "Typescript",
      "React Router",
      "Redux Toolkit",
      "TailwindCSS",
    ],
  },
];

function Projects() {
  return (
    <div id="projects" className="w-full">
      <h2 className="text-3xl font-bold text-white text-center mb-5">
        Projects
      </h2>
      <div className="w-full lg:w-[80%] mx-auto">
        {projectsConfig.map((project, index) => (
          <ProjectCard
            key={project?.title}
            {...project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
