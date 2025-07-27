import React, { useMemo } from "react";
import "./Background.css";

const Background = ({ count = 30 }) => {
  const streaks = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      xShift: `${(Math.random() - 0.5) * 30}px`,
    }));
  }, [count]);

  return (
    <div className="fixed w-full h-full overflow-x-hidden">
      {streaks.map((s) => (
        <span
          key={s.id}
          style={{
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
            "--x": s.xShift,
            animation: `fall ${s.duration} linear ${s.delay} infinite, colorShift 5s linear infinite`,
          }}
          className="absolute top-0 w-px h-20 rotate-[-45deg] rounded-full"
        />
      ))}
    </div>
  );
};

export default Background;
