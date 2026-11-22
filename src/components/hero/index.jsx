import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Eye, ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import TextSwapper from "./TextSwapper";
import InteractiveBackground from "./InteractiveBackground";

const RESUME_URL =
  "https://drive.google.com/file/d/1CTveG-V4Mr1x2Q95hv_JmkKRtfiIpFWQ/view?usp=drive_link";

// The command "types" out, then the hero "compiles" into view.
const COMMAND = "who am i";
const SESSION_KEY = "hero-booted";

function Hero() {
  const reduceMotion = useReducedMotion();

  // Skip the boot sequence if we've already played it this session,
  // or if the user prefers reduced motion.
  const alreadyBooted =
    typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY);
  const [phase, setPhase] = useState(
    reduceMotion || alreadyBooted ? "done" : "typing"
  );
  const [typed, setTyped] = useState(
    reduceMotion || alreadyBooted ? COMMAND : ""
  );
  const timers = useRef([]);

  useEffect(() => {
    // Run the boot sequence once on mount. Keying this to `phase` would let
    // the cleanup clear pending timers the moment the phase changes.
    if (reduceMotion || alreadyBooted) return;

    // Type the command character by character.
    COMMAND.split("").forEach((_, i) => {
      timers.current.push(
        setTimeout(() => setTyped(COMMAND.slice(0, i + 1)), 90 * (i + 1))
      );
    });

    const typingDone = 90 * COMMAND.length;
    // Brief "compiling" beat, then reveal.
    timers.current.push(setTimeout(() => setPhase("compiling"), typingDone + 350));
    timers.current.push(
      setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem(SESSION_KEY, "1");
      }, typingDone + 900)
    );

    const scheduled = timers.current;
    return () => scheduled.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const revealed = phase === "done";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <InteractiveBackground />

      {/* Faint background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.09] z-0">
        <h1 className="text-[20vw] font-bold text-white tracking-widest leading-none">
          HELLO
        </h1>
      </div>

      <div className="z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl">
        {/* Terminal boot line */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="mb-8 font-mono text-sm md:text-base flex items-center gap-2 text-slate-400"
        >
          <span className="text-violet-400">manoj@portfolio</span>
          <span className="text-slate-600">:</span>
          <span className="text-fuchsia-400">~</span>
          <span className="text-slate-500">$</span>
          <span className="text-slate-200">
            {typed}
            {!revealed && (
              <span className="inline-block w-[9px] h-[1.1em] -mb-[2px] ml-[2px] bg-violet-400 animate-pulse" />
            )}
          </span>
          {phase === "compiling" && (
            <span className="text-emerald-400 ml-2 animate-pulse">
              compiling…
            </span>
          )}
        </motion.div>

        {/* Everything below "compiles" into view together */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="hero-body"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 24, filter: "blur(12px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-slate-300 tracking-[0.3em] text-sm md:text-lg font-medium uppercase">
                  I am
                </span>
                <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 whitespace-nowrap">
                <span className="text-white drop-shadow-2xl">MANOJ</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-2xl">
                  MOGAL
                </span>
              </h1>

              <div className="text-lg md:text-xl text-slate-200 font-light h-10 flex items-center justify-center mb-10 mt-4">
                <TextSwapper />
              </div>

              {/* Dual CTA with clear hierarchy */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(167,139,250,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-slate-200 font-medium hover:border-violet-400/50 hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Eye className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll hint */}
      {revealed && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
        </motion.div>
      )}
    </section>
  );
}

export default Hero;
