import React, { useEffect, useState } from "react";

const highlightColors = ["#fde047", "#fda4af", "#86efac", "#c4b5fd"];

export default function BrushHighlights({ text, highlights }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  useEffect(() => {
    highlights.forEach((_, idx) => {
      setTimeout(() => {
        setActiveIndexes((prev) => [...prev, idx]);
      }, idx * 1000);
    });
  }, [highlights]);

  const getHighlightedParts = () => {
    let parts = [text];
    highlights.forEach((word) => {
      parts = parts.flatMap((part) =>
        typeof part === "string"
          ? part
              .split(new RegExp(`(${word})`, "gi"))
              .map((chunk) => (chunk === word ? { highlight: word } : chunk))
          : [part]
      );
    });
    return parts;
  };

  const parts = getHighlightedParts();

  return (
    <p className="leading-relaxed text-gray-400 mb-3">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <span key={i} className="relative inline-block mx-1">
            {/* SVG brush background */}
            {/* <svg
              className={`absolute top-[15%] left-0 -translate-y-1/2 h-[2.5em] w-full transition-all duration-700 ease-out
    ${
      activeIndexes.includes(highlights.indexOf(part.highlight))
        ? "scale-x-100 opacity-100"
        : "scale-x-0 opacity-0"
    }
  `}
              style={{ transformOrigin: "left center", zIndex: 0 }}
              viewBox="0 0 400 40" // adjust based on the coordinates
              preserveAspectRatio="none"
            >
              <path
                d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571"
                fill="none"
                stroke={
                  highlightColors[
                    highlights.indexOf(part.highlight) % highlightColors.length
                  ]
                }
                strokeWidth="15"
                strokeLinecap="round"
              />
            </svg> */}
            <span className="relative z-10 font-semibold text-white">
              {part.highlight}
            </span>
          </span>
        )
      )}
    </p>
  );
}
