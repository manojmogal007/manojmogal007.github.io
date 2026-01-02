import { useEffect, useState } from "react";
import { RiTerminalLine, RiHomeLine, RiUserLine, RiCodeBoxLine, RiStackLine, RiMailSendLine } from "react-icons/ri";
import { motion } from "framer-motion";
import useAppState from "../../hooks/useAppState";

const Navbar = () => {
  const { toggelTerminal } = useAppState();
  const links = [
    { name: "Home", icon: RiHomeLine, id: "home" },
    { name: "About", icon: RiUserLine, id: "about" },
    { name: "Skills", icon: RiCodeBoxLine, id: "skills" },
    { name: "Projects", icon: RiStackLine, id: "projects" },
    { name: "Contact", icon: RiMailSendLine, id: "contact" }
  ];
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.1, 0.5], rootMargin: "-10% 0px -45% 0px" } // Bias towards top-half of screen
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop: Top Floating Dock */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
        <div className="flex items-center gap-2 px-2 py-2 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/20">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                                    ${isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}
                                `}
              >
                {/* Active Lamp Effect */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}

          <div className="w-[1px] h-6 bg-white/10 mx-2" />

          <button
            onClick={toggelTerminal}
            className="p-2 text-slate-400 hover:text-green-400 hover:bg-green-400/10 rounded-full transition-all"
            aria-label="Open Terminal"
          >
            <RiTerminalLine size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile: Bottom Floating Dock */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex md:hidden w-auto max-w-[90%]">
        <div className="flex items-center justify-between gap-1 px-4 py-3 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all
                                    ${isActive ? "text-violet-400 bg-white/5" : "text-slate-400"}
                                `}
              >
                <link.icon size={22} />
                {/* Optional: Label for accessibility but hide visually if crowded */}
                {/* <span className="text-[10px] mt-1">{link.name}</span> */}
              </button>
            );
          })}
          <button
            onClick={toggelTerminal}
            className="flex flex-col items-center justify-center w-12 h-12 rounded-xl text-slate-400 active:text-green-400"
          >
            <RiTerminalLine size={22} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
