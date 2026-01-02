import React from "react";
import {
  AiOutlineCode,
  AiOutlineProject,
  AiOutlineCoffee,
} from "react-icons/ai";

const StatsCard = ({ icon: Icon, value, label, color }) => (
  <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
    <Icon className={`text-3xl mb-2 ${color}`} />
    <span className="text-2xl font-bold text-white">{value}</span>
    <span className="text-xs text-slate-400 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

function About() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
          Me
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-1000" />

          <div className="relative bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="w-42 h-42 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1 mb-6 shadow-2xl shadow-violet-500/20">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <span className="text-6xl select-none">👨‍💻</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Manoj Mogal</h3>
            <p className="text-fuchsia-400 font-medium mb-8">
              Frontend Developer
            </p>

            <div className="grid grid-cols-3 gap-4 w-full">
              <StatsCard
                icon={AiOutlineCode}
                value="2"
                label="Years"
                color="text-cyan-400"
              />
              <StatsCard
                icon={AiOutlineProject}
                value="4+"
                label="Projects"
                color="text-violet-400"
              />
              <StatsCard
                icon={AiOutlineCoffee}
                value="∞"
                label="Coffee"
                color="text-amber-400"
              />
            </div>

            {/* <a href="#connect" className="mt-8 w-full py-3 rounded-xl bg-white text-slate-950 font-bold hover:scale-105 transition-transform">
              Let's Talk
            </a> */}
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-lg text-slate-300 leading-relaxed font-light">
          <p>
            I'm a Frontend developer driven by a passion for crafting{" "}
            <span className="text-white font-semibold">
              intuitive, accessible, and pixel-perfect
            </span>{" "}
            user interfaces. I thrive at the intersection of design and
            engineering, where aesthetics meet performance.
          </p>
          <p>
            My work is fueled by a deep commitment to building experiences that
            are not just visually striking, but also{" "}
            <span className="text-violet-400 font-medium">
              fast, responsive, and user focused
            </span>
            . Every detail matters—because great design isn’t just seen, it’s
            felt.
          </p>
          <p>
            Currently, I’m building foundations at{" "}
            <span className="text-white font-semibold hover:underline decoration-fuchsia-500 underline-offset-4 cursor-pointer">
              Portqii
            </span>
            , where I specialize in high-quality UI components and modern web
            accessibility standards.
          </p>
          <p className="italic text-slate-400 pl-4 border-l-2 border-slate-700">
            "Outside of coding, you’ll often find me trekking through nature,
            riding bikes on open roads, or just unwinding in the hills."
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
