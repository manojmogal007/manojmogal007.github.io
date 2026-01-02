import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinFill } from "react-icons/ri";

function Connect() {
  return (
    <div className="hidden lg:flex fixed bottom-12 left-12 flex-col gap-6 z-40">
      <a
        href="https://github.com/manojmogal007"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
      >
        <LuGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/manoj-mogal-8830341b2/"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
      >
        <RiLinkedinFill size={26} />
      </a>
      <a
        href="mailto:manojpatil7076@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
      >
        <MdOutlineEmail size={26} />
      </a>
      <div className="w-[1px] h-24 bg-slate-700 mx-auto mt-2" />
    </div>
  );
}

export default Connect;
