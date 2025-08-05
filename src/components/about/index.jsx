import React from "react";
import AnimatedHighlights from "./AnimatedHighlights";

const paras = [
  `I'm a frontend developer driven by a passion for crafting intuitive, accessible, and pixel-perfect user interfaces. I thrive at the intersection of design and engineering—where aesthetics meet performance. My work is fueled by a deep commitment to building experiences that are not just visually striking, but also fast, responsive, and user focused. Every detail matters—because great design isn’t just seen, it’s felt.`,
  `Currently, I’m a Frontend developer at Portqii, where I specialize in building accessible, high-quality UI components that form the foundation of our platform’s user interface. My focus is on ensuring that every interaction meets modern web accessibility standards delivering inclusive, performant, and seamless experiences for all users.`,
  `Outside of coding, you’ll often find me trekking through nature, riding bike on roads, or just unwinding in the hills.`,
];

const highlights = [
  [],
  [
    "Frontend",
    "Portqii,",
    "inclusive,",
    "performant,",
    "seamless experiences",
  ],
  [],
];

function About() {
  return (
    <div id="about" className="w-[80%] mx-auto mb-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">About</h2>
      {paras?.map((para, index) => (
        <AnimatedHighlights text={para} highlights={highlights[index]} />
      ))}
    </div>
  );
}

export default About;
