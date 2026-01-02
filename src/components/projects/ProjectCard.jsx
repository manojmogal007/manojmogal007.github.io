import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  longDescription,
  image,
  link,
  color,
  techStack,
  index
}) => {
  return (
    <div className="group relative h-[60vh] w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-2xl">

      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        {/* Top Right Index */}
        <div className="absolute top-8 right-8 text-6xl font-black text-white/5 font-mono select-none">
          0{index + 1}
        </div>

        <div className="relative z-10 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          {/* Tech Stack Pills */}
          <div className="flex gap-2 mb-4">
            {techStack.map(tech => (
              <span key={tech} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 bg-white/90 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h3>

          <p className="text-lg text-slate-300 max-w-xl mb-8 line-clamp-3 group-hover:line-clamp-none transition-all">
            {longDescription}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-3 text-lg font-bold text-white border-b-2 border-transparent hover:border-white pb-1 transition-all group-hover:ml-2`}
          >
            View Live Project <FiExternalLink />
          </a>
        </div>
      </div>

      {/* Accent Line */}
      <div className={`absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
};

export default ProjectCard;
