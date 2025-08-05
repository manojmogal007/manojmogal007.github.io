import { useRef, useState, useEffect } from "react";

const intialState = {
  cmd: "welcome",
  output: `Hi, I'm Manoj Mogal, a Frontend Developer.\n\n Welcome to my interactive portfolio terminal!\n Type 'help' to see available commands.`,
};
export default function TerminalSection() {
  const [history, setHistory] = useState([intialState]);
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const commands = {
    about:
      `I'm a frontend developer driven by a passion for crafting intuitive, accessible, and pixel-perfect user interfaces. I thrive at the intersection of design
       and engineering—where aesthetics meet performance. My work is fueled by a deep commitment to building experiences that are not just visually striking, but also fast, responsive, and user focused. Every detail matters—because great design isn’t just seen, it’s felt.\nCurrently, I’m a Frontend developer at Portqii, where I specialize in building accessible, high-quality UI components that form the foundation of our platform’s user interface. My focus is on ensuring that every interaction meets modern web accessibility standards delivering inclusive, performant, and seamless experiences for all users.\nOutside of coding, you’ll often find me trekking through nature, riding bike on roads, or just unwinding in the hills.`,
    projects: "Project 1: Audienz.ai\nProject 2: UII Console",
    contact: "Email: manojpatil7076@gmail.com",
  };

  const availableCommands = ["help", ...Object.keys(commands)];

  const intiateClear = () => {
    setHistory([]);
    setInput("");
  };

  const handleCommand = (cmd) => {
    if (cmd === "clear") {
      intiateClear();
      return;
    }
    const trimmed = cmd.trim().toLowerCase();
    const fullOutput =
      trimmed === "help"
        ? `Available commands: \n- ${availableCommands.join("\n- ")} \n- clear`
        : commands[trimmed] || `bash: ${trimmed}: command not found`;

    // Add entry with empty output first
    setHistory((prev) => [...prev, { cmd, output: "" }]);
    setInput("");
    setCurrentIndex(history.length + 1);

    // Focus back
    // requestAnimationFrame(() => {
    //   inputRef.current?.focus();
    // });

    // Typing effect
    let index = 0;
    const interval = setInterval(() => {
      setHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          cmd,
          output: fullOutput.slice(0, index + 1),
        };
        return updated;
      });

      index++;
      if (index === fullOutput.length) {
        clearInterval(interval);
      }
    }, 15);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp" && currentIndex > 0) {
      setInput(history[currentIndex - 1].cmd);
      setCurrentIndex((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && currentIndex < history.length - 1) {
      setInput(history[currentIndex + 1].cmd);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="relative backdrop-blur rounded-xl w-[100%] mx-auto mt-15 shadow-lg z-70 h-[100%]">
      {/* <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-t-xl">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div> */}

      <div
        ref={containerRef}
        className="p-4 font-mono text-white h-[90%] overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <p>
              <span className="text-blue-400 mr-2">manojmogal@portfolio:~</span>
              <span className="text-green-400">{item.cmd}</span>
            </p>
            <p className="whitespace-pre-line">{item.output}</p>
          </div>
        ))}
        <div className="flex">
          <span className="mr-2 text-blue-400">manojmogal@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent outline-none flex-1 text-green-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {/* <div className="flex flex-1">
          <div
            className="relative flex-1"
            onClick={() => inputRef.current?.focus()}
          >
            <input
              ref={inputRef}
              type="text"
              className="bg-transparent outline-none flex-1 text-green-400 w-full caret-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ position: "absolute", inset: 0 }}
            />
            <span className="text-green-400">
              {input}
              <span className="bg-green-400 w-2 h-5 inline-block animate-blink align-middle"></span>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
