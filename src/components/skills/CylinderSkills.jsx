import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
    SiTailwindcss,
    SiGit,
    SiPostgresql,
    SiFigma,
    SiDocker,
    SiRedux,
    SiMui,
    SiRedis,
    SiPostman,
    SiReactrouter
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact, color: "text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
            { name: "Redux", icon: SiRedux, color: "text-purple-500" },
            { name: "Material UI", icon: SiMui, color: "text-blue-400" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-gray-300" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
            { name: "Postgres", icon: SiPostgresql, color: "text-blue-400" },
            { name: "Redis", icon: SiRedis, color: "text-red-500" },
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, color: "text-orange-500" },
            { name: "Docker", icon: SiDocker, color: "text-blue-500" },
            { name: "Postman", icon: SiPostman, color: "text-orange-400" },
            { name: "Figma", icon: SiFigma, color: "text-purple-400" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        ]
    }
];

const allSkills = skillCategories.flatMap(cat => cat.skills);

const CylinderSkills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = activeCategory === "All"
        ? allSkills
        : skillCategories.find(c => c.title === activeCategory).skills;

    const count = filteredSkills.length;
    const radius = 280; // Distance from center
    const rotation = useMotionValue(0);
    const springRotation = useSpring(rotation, { stiffness: 40, damping: 20 });
    const [isHovered, setIsHovered] = useState(false);

    // Auto-rotation logic
    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                rotation.set(rotation.get() - 0.5); // Slow rotation
            }, 16);
        }
        return () => clearInterval(interval);
    }, [isHovered, rotation]);

    const onDrag = (e, info) => {
        rotation.set(rotation.get() + info.delta.x * 0.5);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6 mb-32 select-none overflow-hidden py-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Sphere</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                    Rotate the interactive sphere to explore my core technical tools and frameworks.
                </p>

                {/* Category Controls */}
                <div className="flex flex-wrap justify-center gap-3 mb-20 relative z-20">
                    {["All", "Frontend", "Backend", "Tools"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                rotation.set(0); // Reset rotation on filter
                            }}
                            className={`
                px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300
                ${activeCategory === cat
                                    ? "bg-violet-500/20 border-violet-500 text-white shadow-lg shadow-violet-500/20"
                                    : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"}
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3D Stage */}
            <div
                className="relative h-[400px] flex items-center justify-center perspective-[1200px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    drag="x"
                    onDrag={onDrag}
                    style={{
                        rotateY: springRotation,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                    {filteredSkills.map((skill, i) => {
                        const angle = (i / count) * 360;
                        return (
                            <SkillCard
                                key={`${activeCategory}-${skill.name}`}
                                skill={skill}
                                angle={angle}
                                radius={radius}
                            />
                        );
                    })}
                </motion.div>

                {/* Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/10 blur-[120px] rounded-full -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full -z-10 opacity-20" />
            </div>
        </div>
    );
};

const SkillCard = ({ skill, angle, radius }) => {
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;

    return (
        <motion.div
            style={{
                position: "absolute",
                x,
                z,
                rotateY: angle,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: (angle / 360) * 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="group"
        >
            <div className={`
        w-28 h-32 md:w-36 md:h-40
        relative flex flex-col items-center justify-center p-4 
        rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl
        transition-all duration-300 group-hover:border-violet-500/50 
        group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
      `}>
                <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 rounded-2xl transition-all duration-500" />

                <skill.icon className={`text-4xl md:text-5xl ${skill.color} mb-3 transition-transform duration-500 group-hover:scale-110`} />

                <div className="text-center relative z-10">
                    <span className="text-xs md:text-sm font-bold text-white block opacity-80 group-hover:opacity-100 transition-opacity">
                        {skill.name}
                    </span>
                    <div className="h-0.5 w-0 bg-violet-500 mx-auto mt-1 transition-all duration-300 group-hover:w-full" />
                </div>
            </div>
        </motion.div>
    );
};

export default CylinderSkills;
