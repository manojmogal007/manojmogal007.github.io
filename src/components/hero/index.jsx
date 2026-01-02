import React from "react";
import TextSwapper from "./TextSwapper";
import InteractiveBackground from "./InteractiveBackground";
import { FileDown, Eye } from "lucide-react";

function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <InteractiveBackground />

      {/* Background Big Text (Static layer) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5 z-0">
        <h1 className="text-[20vw] font-bold text-white tracking-widest leading-none">
          HELLO
        </h1>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-6 mix-blend-screen">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-slate-300 tracking-[0.3em] text-sm md:text-lg font-medium uppercase drop-shadow-lg">
            I am
          </span>
          <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-[0_0_10px_rgba(167,139,250,0.5)]"></div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8">
          <span className="text-white drop-shadow-2xl">MANOJ</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-2xl">
            MOGAL
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-slate-200 font-light mt-2 h-12 flex items-center justify-center">
          <TextSwapper />
        </div>

        {/* Heartbeat Resume Button */}
        <div className="mt-14 relative">
          {/* Heartbeat Ripples */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-full h-full rounded-full border-2 border-violet-400/30 animate-ripple-heart"></div>
            <div className="absolute w-full h-full rounded-full border-2 border-fuchsia-400/20 animate-ripple-heart [animation-delay:0.2s]"></div>
          </div>

          {/* Main Button */}
          <button
            onClick={() => window.open('https://drive.google.com/file/d/1CTveG-V4Mr1x2Q95hv_JmkKRtfiIpFWQ/view?usp=drive_link', '_blank')}
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-out animate-heartbeat hover:scale-105 active:scale-95"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-soft"></div>

            {/* Button Content */}
            <span className="relative flex items-center gap-3 z-10">
              <Eye className="w-5 h-5 group-hover:animate-bounce" />
              <span className="tracking-wide">Resume</span>
            </span>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </div>
          </button>

          {/* <p className="mt-4 text-xs text-slate-400 tracking-wider uppercase animate-fade-in-delayed">
            Click to view
          </p> */}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
