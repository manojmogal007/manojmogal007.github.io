import React from "react";
import ProjectCard from "./ProjectCard";
import audienz from "../../assets/audienz.png";
import uii from "../../assets/uii.png";

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
      "React Router",
      "Javascript",
      "Frontegg",
      "Material UI",
      "Stigg",
    ],
  },
  {
    title: "UII Console",
    description: `Integrated WorkOS AuthKit to implement secure authentication and SSO capabilities, enabling enterprise-grade login workflows with minimal friction.
     This involved configuring OAuth/SAML providers, handling session management, and ensuring smooth user onboarding within the dashboard environment.`,
    image: uii,
    link: "https://uii-console.portqii.com/",
    techStack: [
      "React",
      "React Router",
      "Javascript",
      "Authkit",
      "TailwindCSS",
    ],
    reverse: true,
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
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
