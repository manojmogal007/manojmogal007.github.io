import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

// Skill icons and colors
const skills = [
  {
    name: "React",
    icon: <SiReact className="w-10 h-10 text-cyan-400" />,
    color: "from-cyan-400 to-cyan-600",
    shadow: "shadow-cyan-400/50",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10 text-blue-400" />,
    color: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-400/50",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
    color: "from-yellow-400 to-yellow-600",
    shadow: "shadow-yellow-400/50",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-10 h-10 text-orange-400" />,
    color: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-400/50",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="w-10 h-10 text-blue-400" />,
    color: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-400/50",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-10 h-10 text-green-500" />,
    color: "from-green-500 to-green-700",
    shadow: "shadow-green-500/50",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-10 h-10 text-green-400" />,
    color: "from-green-400 to-green-600",
    shadow: "shadow-green-400/50",
  },
  {
    name: "Express",
    icon: <SiExpress className="w-10 h-10 text-gray-300" />,
    color: "from-gray-400 to-gray-600",
    shadow: "shadow-gray-400/50",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-10 h-10 text-gray-300" />,
    color: "from-gray-300 to-gray-500",
    shadow: "shadow-gray-300/50",
  },
];

// Funny quotes
const skillQuotes = {
  React: [
    "Hooks before looks! 😉",
    "JSX is my love language.",
    "Reacting to everything, literally!",
    "I re-render your heart ❤️",
  ],
  TypeScript: [
    "Types or fights!",
    "I make JavaScript behave! 💪",
    "Error-free or free error?",
    "Typed and dangerous.",
  ],
  JavaScript: [
    "Undefined is my middle name. 😎",
    "Callback hell? Been there!",
    "Async by day, promises by night.",
    "NaN is a feature, not a bug.",
  ],
  HTML5: [
    "I give structure to your chaos!",
    "I’m the skeleton of the web.",
    "Without me, CSS is homeless.",
    "Just a tag away from greatness.",
  ],
  CSS3: [
    "I make things fabulous. 💅",
    "I bring color to your life.",
    "Flex, grid, and chill!",
    "I can center things… sometimes.",
  ],
  MongoDB: [
    "Collections > Tables. Fight me!",
    "No SQL, no problem!",
    "I love documents more than PDFs.",
    "Query me if you can!",
  ],
  "Node.js": [
    "I run everywhere, even on your toaster. 😂",
    "Non-blocking and non-stop!",
    "I speak JavaScript server-side!",
    "Fast and furious backend!",
  ],
  Express: [
    "Minimal, fast, and furious!",
    "I route you to happiness.",
    "Middleware is my middle name.",
    "Server? Consider it handled.",
  ],
  "Next.js": [
    "SSR is my superpower!",
    "Next level rendering, literally.",
    "Static, dynamic – I do it all.",
    "I pre-fetch your dreams.",
  ],
};

const Skills = () => {
  const [hoveredQuote, setHoveredQuote] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState("");

  const handleMouseEnter = (name) => {
    const quotes = skillQuotes[name];
    if (quotes) {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setHoveredQuote(random);
      setHoveredSkill(name);
    }
  };

  return (
    <section id="skills" className="py-0 bg-[#1b1b1b]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(skill.name)}
            >
              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <div
                  className={`absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-tooltip-pop z-20`}
                >
                  <div
                    className={`relative px-4 py-2 rounded-xl text-black text-sm font-bold font-[cursive]
                  bg-white whitespace-nowrap shadow-lg ${skill.shadow}`}
                  >
                    <div>{hoveredQuote}</div>
                    {/* <div className="text-xs italic font-normal mt-1 opacity-80">
                      (Hover again for more sass!)
                    </div> */}
                    <div
                      className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
                      border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"
                    ></div>
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="relative w-full flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-70 blur-xl transition-opacity`}
                ></div>

                <div className="relative z-10">{skill.icon}</div>
                <p className="mt-3 text-sm text-gray-300 group-hover:text-white relative z-10">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
