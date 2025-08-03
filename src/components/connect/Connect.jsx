import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinFill } from "react-icons/ri";

function Connect() {
  return (
    <div className="fixed bottom-12 left-12 flex flex-col gap-5">
      <a
        href="https://github.com/manojmogal007"
        target="_blank"
        rel="noreferrer"
      >
        <LuGithub
          size={27}
          className="hover:text-yellow-400 hover:scale-115 transition duration-300"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/manoj-mogal-8830341b2/"
        target="_blank"
        rel="noreferrer"
      >
        <RiLinkedinFill
          size={27}
          className="hover:text-yellow-400 hover:scale-115 transition duration-300"
        />
      </a>
      <a
        href="mailto:manojpatil7076@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <MdOutlineEmail
          size={27}
          className="hover:text-yellow-400 hover:scale-115 transition duration-300"
        />
      </a>
    </div>
  );
}

export default Connect;
