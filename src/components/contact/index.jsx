import React from "react";
import Magnetic from "./Magnetic";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-[80vh] bg-slate-950 flex flex-col justify-end overflow-hidden"
    >
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-transparent pointer-events-none">
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <span className="text-violet-400 font-mono tracking-widest uppercase">
              What's Next?
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9]">
              Let's work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                together
              </span>
            </h2>
          </div>

          {/* Magnetic Button */}
          <Magnetic>
            <a
              href="mailto:manojpatil7076@gmail.com"
              className="w-48 h-48 rounded-full bg-violet-600 text-white flex items-center justify-center text-xl font-bold cursor-pointer hover:bg-violet-500 transition-colors shadow-2xl shadow-violet-600/40 border border-white/20 backdrop-blur-md"
            >
              Get in Touch
            </a>
          </Magnetic>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
          <div className="flex gap-8">
            <span className="hover:text-white transition-colors cursor-pointer">
              © 2025 Manoj Mogal
            </span>
            {/* <span className="hover:text-white transition-colors cursor-pointer">Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span> */}
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/manojmogal007"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-mogal-8830341b2/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition-all"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="mailto:manojpatil7076@gmail.com"
              className="hover:text-white hover:scale-110 transition-all"
            >
              <MdOutlineEmail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
