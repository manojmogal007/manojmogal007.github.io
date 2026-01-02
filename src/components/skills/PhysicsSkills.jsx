import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
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
    SiPostgresql,
    SiTailwindcss,
    SiGit,
} from "react-icons/si";

// Skill data
const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB", level: "Expert" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Advanced" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Expert" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "Expert" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", level: "Advanced" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Intermediate" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Advanced" },
    { name: "Express", icon: SiExpress, color: "#000000", level: "Advanced" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Expert" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: "Expert" },
    { name: "Git", icon: SiGit, color: "#F05032", level: "Indispensable" },
];

const PhysicsSkills = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        // Defines
        const {
            Engine,
            Render,
            World,
            Bodies,
            Mouse,
            MouseConstraint,
            Runner,
            Events,
        } = Matter;

        const engine = Engine.create();
        const world = engine.world;
        engineRef.current = engine;

        // Dimensions
        const width = sceneRef.current.clientWidth;
        const height = 600; // Fixed height for area

        // Renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
                // pixelRatio: window.devicePixelRatio, // Handling pixel ratio manually if needed, but removing for mouse compatibility
            },
        });

        // Boundaries
        const wallOptions = {
            isStatic: true,
            render: { fillStyle: "transparent" },
        };
        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
        const ceiling = Bodies.rectangle(width / 2, -550, width, 100, wallOptions); // High ceiling for drop
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);

        World.add(world, [ground, ceiling, leftWall, rightWall]);

        // Skill Bodies
        const skillBodies = skills.map((skill) => {
            const radius = 45;
            const body = Bodies.circle(
                Math.random() * width * 0.8 + width * 0.1, // Random X
                Math.random() * -500 - 100, // Random Y above screen
                radius,
                {
                    restitution: 0.9, // Bouncy
                    friction: 0.005,
                    frictionAir: 0.02, // Slow down a bit
                    render: {
                        sprite: {
                            // We'll render custom content over these bodies in a separate layer if needed,
                            // but standard Matter.js render can't do React components easily.
                            // So we fake it by matching positions in a loop or using a hook.
                            // For simplicity, let's use the 'afterRender' event to draw icons on canvas.
                        },
                        fillStyle: "rgba(255, 255, 255, 0.1)",
                        strokeStyle: "rgba(255,255,255,0.2)",
                        lineWidth: 1,
                    },
                    label: skill.name,
                    plugin: { skill }, // Attach data
                }
            );
            return body;
        });

        World.add(world, skillBodies);

        // Mouse Interaction
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        // Allow scrolling when not interacting with bodies?
        // Matter.js captures all events by default.
        // We probably want to keep the mousewheel removal but ensure click/drag works.
        // The dragging problem is likely coordinate mismatch.

        World.add(world, mouseConstraint);

        // Custom Rendering Loop for Icons
        Events.on(render, "afterRender", () => {
            const ctx = render.context;

            skillBodies.forEach((body) => {
                const { x, y } = body.position;
                const skill = body.plugin.skill;

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(body.angle);

                // Draw Glass Bubble
                ctx.beginPath();
                ctx.arc(0, 0, 45, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(30, 41, 59, 0.8)"; // Slate-900 with opacity
                ctx.fill();
                ctx.strokeStyle = "rgba(139, 92, 246, 0.5)"; // Violet border
                ctx.lineWidth = 2;
                ctx.stroke();

                // Draw Text (Simple fallback since we can't easily draw generic React components to canvas)
                // ideally we would overlay HTML elements on top, but syncing position is choppy.
                // Let's draw text label for now.
                ctx.font = "bold 14px Inter, sans-serif";
                ctx.fillStyle = "#fff";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(skill.name, 0, 0);

                ctx.restore();
            });
        });

        // Run
        Runner.run(Runner.create(), engine);
        Render.run(render);

        // Cleanup
        return () => {
            Render.stop(render);
            World.clear(world);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-transparent mb-20" style={{ touchAction: 'none' }}>
            <h2 className="text-4xl font-bold text-white text-center mb-8 absolute w-full top-0 pointer-events-none">
                Skills Playground
            </h2>
            <div ref={sceneRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-sm pointer-events-none">
                Drag and throw the bubbles!
            </div>
        </div>
    );
};

export default PhysicsSkills;
