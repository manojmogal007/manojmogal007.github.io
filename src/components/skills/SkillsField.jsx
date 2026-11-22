import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { fieldSkills as SKILLS } from "./skillsData";

const CHIP_HEIGHT = 46;
const chipWidth = (name) => Math.round(66 + name.length * 8.5);

const SkillsField = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const chipRefs = useRef([]);
  const pointer = useRef({ x: null, y: null, attractUntil: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return; // static fallback layout is rendered instead

    const { Engine, Composite, Bodies, Body } = Matter;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const engine = Engine.create();
    engine.gravity.x = 0;
    engine.gravity.y = 0; // zero-g float

    // Bodies for each chip.
    const bodies = SKILLS.map((s, i) => {
      const w = chipWidth(s.name);
      const body = Bodies.rectangle(
        60 + Math.random() * (width - 120),
        60 + Math.random() * (height - 120),
        w,
        CHIP_HEIGHT,
        {
          chamfer: { radius: CHIP_HEIGHT / 2 },
          restitution: 0.85,
          frictionAir: 0.02,
          friction: 0,
        }
      );
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      });
      body.chipW = w;
      body.chipIndex = i;
      return body;
    });

    // Container walls (thick so fast chips can't tunnel out).
    const wallOpts = { isStatic: true };
    const t = 200;
    const walls = [
      Bodies.rectangle(width / 2, -t / 2, width + 2 * t, t, wallOpts), // top
      Bodies.rectangle(width / 2, height + t / 2, width + 2 * t, t, wallOpts), // bottom
      Bodies.rectangle(-t / 2, height / 2, t, height + 2 * t, wallOpts), // left
      Bodies.rectangle(width + t / 2, height / 2, t, height + 2 * t, wallOpts), // right
    ];

    Composite.add(engine.world, [...bodies, ...walls]);

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const sizeCanvas = () => {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    sizeCanvas();

    const REPEL_RADIUS = 190;
    const MAX_SPEED = 9;
    let raf;

    const frame = () => {
      const p = pointer.current;
      const attract = performance.now() < p.attractUntil;

      bodies.forEach((b) => {
        // Gentle brownian drift keeps the field alive when idle.
        Body.applyForce(b, b.position, {
          x: (Math.random() - 0.5) * 0.00008 * b.mass,
          y: (Math.random() - 0.5) * 0.00008 * b.mass,
        });

        // Cursor repulsion (or attraction on click).
        if (p.x !== null) {
          const dx = b.position.x - p.x;
          const dy = b.position.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < REPEL_RADIUS) {
            const strength = (1 - dist / REPEL_RADIUS) * 0.0016 * b.mass;
            const dir = attract ? -1 : 1;
            Body.applyForce(b, b.position, {
              x: (dx / dist) * strength * dir,
              y: (dy / dist) * strength * dir,
            });
          }
        }
      });

      Engine.update(engine, 1000 / 60);

      // Clamp speed so nothing explodes off-screen.
      bodies.forEach((b) => {
        const speed = Math.hypot(b.velocity.x, b.velocity.y);
        if (speed > MAX_SPEED) {
          const s = MAX_SPEED / speed;
          Body.setVelocity(b, { x: b.velocity.x * s, y: b.velocity.y * s });
        }
      });

      // Draw connector lines between nearby chips (hero-style).
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i].position;
          const c = bodies[j].position;
          const d = Math.hypot(a.x - c.x, a.y - c.y);
          if (d < 170) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.25 * (1 - d / 170)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
      }

      // Sync DOM chips to their bodies.
      bodies.forEach((b) => {
        const el = chipRefs.current[b.chipIndex];
        if (el) {
          el.style.transform = `translate(${b.position.x}px, ${b.position.y}px) translate(-50%, -50%) rotate(${b.angle}rad)`;
        }
      });

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // Pointer interaction.
    const rectPoint = (e) => {
      const r = container.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMove = (e) => {
      const { x, y } = rectPoint(e);
      pointer.current.x = x;
      pointer.current.y = y;
    };
    const onLeave = () => {
      pointer.current.x = null;
      pointer.current.y = null;
    };
    const onDown = () => {
      pointer.current.attractUntil = performance.now() + 450;
    };
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);
    container.addEventListener("pointerdown", onDown);

    // Keep the scene sized to the container.
    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      sizeCanvas();
      Body.setPosition(walls[0], { x: width / 2, y: -t / 2 });
      Body.setPosition(walls[1], { x: width / 2, y: height + t / 2 });
      Body.setPosition(walls[2], { x: -t / 2, y: height / 2 });
      Body.setPosition(walls[3], { x: width + t / 2, y: height / 2 });
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      container.removeEventListener("pointerdown", onDown);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] md:h-[480px] rounded-3xl border border-white/10 bg-slate-900/30 overflow-hidden select-none"
    >
      {/* Connector lines */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Hint */}
      <span className="absolute top-4 left-5 text-xs font-mono text-slate-500 pointer-events-none">
        move your cursor · click to pull
      </span>

      {/* Chips (positioned by physics; static-wrap fallback for reduced motion) */}
      {SKILLS.map((s, i) => (
        <div
          key={s.name}
          ref={(el) => (chipRefs.current[i] = el)}
          style={{
            width: chipWidth(s.name),
            height: CHIP_HEIGHT,
            willChange: "transform",
          }}
          className="absolute left-0 top-0 flex items-center gap-2.5 px-4 rounded-full
                     bg-slate-800/80 backdrop-blur-sm border border-white/10 shadow-lg
                     text-slate-100 text-sm font-medium"
        >
          <s.Icon style={{ color: s.color }} className="text-lg shrink-0" />
          <span className="whitespace-nowrap">{s.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsField;
