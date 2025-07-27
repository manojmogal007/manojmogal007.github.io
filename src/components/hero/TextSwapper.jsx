import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Creative Coder",
  "Innovative Thinker",
  "UI/UX Craftsman",
  "Problem Solver",
  "Self-Believer",
  "Visionary Builder",
];
const TextSwapper = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  //   presets= gentle, wobbly, stiff, slow, molasses
  return (
    <h1
      className="mt-2 text-yellow-400 uppercase tracking-widest 
                  text-xs sm:text-lg md:text-xl lg:text-2xl"
    >
      <TextTransition
        springConfig={presets.molasses}
        direction="down"
        delay={1}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};

export default TextSwapper;
