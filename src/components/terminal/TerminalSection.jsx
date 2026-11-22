import { useRef, useState, useEffect } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { FaPhoneAlt, FaLink } from "react-icons/fa";

// Turn URLs, emails and phone numbers inside terminal output into clickable
// links. Everything else is rendered as plain text. Links open in a new tab.
const LINK_REGEX =
  /(https?:\/\/[^\s]+)|([\w.+-]+@[\w-]+\.[\w.-]+)|(\+?\d[\d\s-]{7,}\d)/g;

// Pick a brand icon (and colour) based on the link's type/host.
const iconFor = (full, { url, email, phone }) => {
  if (email) return { Icon: SiGmail, color: "text-red-400" };
  if (phone) return { Icon: FaPhoneAlt, color: "text-green-400" };
  if (/linkedin\.com/i.test(full))
    return { Icon: SiLinkedin, color: "text-sky-400" };
  if (/github\.com/i.test(full))
    return { Icon: SiGithub, color: "text-slate-200" };
  return { Icon: FaLink, color: "text-cyan-400" };
};

const linkify = (text) => {
  const nodes = [];
  let lastIndex = 0;
  let match;
  LINK_REGEX.lastIndex = 0;

  while ((match = LINK_REGEX.exec(text)) !== null) {
    const [full, url, email, phone] = match;
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    let href;
    if (url) href = url;
    else if (email) href = `mailto:${email}`;
    else href = `tel:${phone.replace(/\s/g, "")}`;

    const { Icon, color } = iconFor(full, { url, email, phone });

    nodes.push(
      <a
        key={`${match.index}-${full}`}
        href={href}
        target={url ? "_blank" : undefined}
        rel={url ? "noopener noreferrer" : undefined}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 text-cyan-400 underline underline-offset-2 hover:text-cyan-300 cursor-pointer break-all align-middle"
      >
        <Icon className={`${color} text-base shrink-0 no-underline`} />
        {full}
      </a>
    );
    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};

const RESUME_URL =
  "https://drive.google.com/file/d/1CTveG-V4Mr1x2Q95hv_JmkKRtfiIpFWQ/view?usp=drive_link";

// Sections on the page that `cd` can jump to.
const SECTIONS = ["home", "about", "skills", "projects", "contact"];

// Static text outputs.
const STATIC = {
  about: `I'm a Frontend developer💻 driven by a passion for crafting intuitive, accessible, and pixel-perfect user interfaces. I thrive at the intersection of design and engineering—where aesthetics meet performance. My work is fueled by a deep commitment to building experiences that are not just visually striking, but also fast, responsive, and user focused.\nCurrently, I'm a Frontend developer at Portqii, building accessible, high-quality UI components to modern web accessibility standards.\nOutside of coding, you'll often find me trekking through nature🏞️, riding bikes on open roads, or unwinding in the hills⛰️.`,
  skills:
    "React · TypeScript · Tailwind CSS · Framer Motion · Redux · MUI · Accessibility · Web Performance",
  projects:
    "- Audienz.ai\n- Aida\n- Promptflow Live\n- Cruxstack\n- Security & Compliance",
  contact:
    "manojpatil7076@gmail.com\n+91 7219547076\nhttps://www.linkedin.com/in/manoj-mogal-8830341b2/",
  socials:
    "https://github.com/manojmogal007\nhttps://www.linkedin.com/in/manoj-mogal-8830341b2/",
  whoami: "Manoj Mogal — Frontend Developer @ Portqii",
};

const GITHUB_URL = "https://github.com/manojmogal007";
const LINKEDIN_URL = "https://www.linkedin.com/in/manoj-mogal-8830341b2/";

// Everything discoverable via `help` and Tab-completion.
const COMMANDS = [
  "help", "about", "skills", "projects", "contact", "socials",
  "whoami", "resume", "neofetch", "gh", "li", "ls", "cd", "date", "clear",
];

const HELP = `Available commands:\n${[
  "help      — this message",
  "about     — who I am",
  "skills    — my tech stack",
  "projects  — selected work",
  "contact   — reach me",
  "socials   — GitHub & LinkedIn",
  "gh        — open my GitHub",
  "li        — open my LinkedIn",
  "resume    — open my resume",
  "neofetch  — system info",
  "ls        — list page sections",
  "cd <name> — jump to a section",
  "date      — current time",
  "clear     — clear the terminal",
]
  .map((l) => "  " + l)
  .join("\n")}\n\nTip: press Tab to autocomplete · ↑/↓ for history.`;

// Years of experience since Jan 2024 (keeps neofetch's "uptime" current).
const yearsUp = () =>
  Math.max(
    1,
    Math.floor((Date.now() - new Date(2024, 0, 1).getTime()) / 3.15576e10)
  );

const neofetch = () => {
  const logo = [
    "  ______   ",
    " |  >_  |  ",
    " |      |  ",
    " |______|  ",
    "           ",
    "  < / >    ",
    "           ",
  ];
  const info = [
    "manoj@portfolio",
    "----------------",
    "Role:    Frontend Developer",
    "Company: Portqii",
    `Uptime:  ${yearsUp()}+ years`,
    "Stack:   React · TS · Tailwind",
    "Editor:  VS Code · Coffee ∞",
  ];
  return logo.map((l, i) => l + (info[i] ? "  " + info[i] : "")).join("\n");
};

// Levenshtein distance → power the "did you mean?" hint.
const editDistance = (a, b) => {
  const dp = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
};

const suggest = (cmd) => {
  let best = null;
  let bestDist = 99;
  for (const c of COMMANDS) {
    const d = editDistance(cmd, c);
    if (d < bestDist) {
      bestDist = d;
      best = c;
    }
  }
  return bestDist <= 2 ? best : null;
};

const commonPrefix = (arr) => {
  if (!arr.length) return "";
  let p = arr[0];
  for (const s of arr) while (!s.startsWith(p)) p = p.slice(0, -1);
  return p;
};

// Resolve a raw command line to its text output. Side effects (scroll, open
// tab) happen here too; state-mutating commands (clear/bike) are handled in
// the component before this runs.
const runCommand = (raw) => {
  const parts = raw.trim().split(/\s+/);
  const cmd = (parts[0] || "").toLowerCase();
  const arg = (parts[1] || "").toLowerCase().replace(/\/+$/, "");

  switch (cmd) {
    case "help":
      return HELP;
    case "about":
    case "skills":
    case "projects":
    case "contact":
    case "socials":
    case "whoami":
      return STATIC[cmd];
    case "gh":
      window.open(GITHUB_URL, "_blank", "noopener");
      return "Opening GitHub ↗";
    case "li":
      window.open(LINKEDIN_URL, "_blank", "noopener");
      return "Opening LinkedIn ↗";
    case "ls":
      return SECTIONS.filter((s) => s !== "home").join("   ") + "\n(try: cd projects)";
    case "cd":
      if (!arg)
        return "usage: cd <section>  —  about | skills | projects | contact | home";
      if (SECTIONS.includes(arg)) {
        document.getElementById(arg)?.scrollIntoView({ behavior: "smooth" });
        return `↳ navigating to ${arg}…`;
      }
      return `cd: no such section: ${arg}`;
    case "resume":
      window.open(RESUME_URL, "_blank", "noopener");
      return "Opening resume ↗";
    case "neofetch":
      return neofetch();
    case "date":
      return new Date().toString();
    case "sudo":
      return "Nice try 😏  permission denied: you are not Manoj.";
    default: {
      const s = suggest(cmd);
      return `bash: ${cmd}: command not found${s ? `\nDid you mean '${s}'?` : ""}`;
    }
  }
};

const intialState = {
  cmd: "welcome",
  output: `Hi👋, I'm Manoj Mogal, a Frontend Developer💻.\n\n Welcome to my interactive portfolio terminal!\n Type 'help' to see available commands.`,
};
export default function TerminalSection() {
  const [history, setHistory] = useState([intialState]);
  const [input, setInput] = useState("");
  // Commands the user has entered, plus a cursor into it for ↑/↓ recall.
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histPos, setHistPos] = useState(-1); // -1 = editing a fresh line
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const idRef = useRef(0);

  const typeOut = (raw, fullOutput) => {
    // Stable id so this entry is updated by identity — concurrent typing of
    // rapidly-entered commands can't clobber each other.
    const id = ++idRef.current;
    setHistory((prev) => [...prev, { id, cmd: raw, output: "" }]);
    setInput("");

    // Adaptive speed: long outputs (neofetch) reveal in more chars per tick so
    // everything finishes in roughly the same time.
    const step = Math.max(1, Math.ceil(fullOutput.length / 120));
    let index = 0;
    const interval = setInterval(() => {
      index += step;
      setHistory((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, output: fullOutput.slice(0, index) } : item
        )
      );
      if (index >= fullOutput.length) clearInterval(interval);
    }, 15);
  };

  const handleCommand = (raw) => {
    const cmd = raw.trim();
    const lower = cmd.toLowerCase();

    if (cmd) setCmdHistory((h) => [...h, cmd]);
    setHistPos(-1);

    if (lower === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    if (lower === "bike" || lower === "unbike") {
      const on = lower === "bike";
      localStorage.setItem("bike", on ? "true" : "false");
      window.dispatchEvent(new Event("bikeModeChange"));
      typeOut(raw, on ? "🚴 bike mode on" : "bike mode off");
      return;
    }

    typeOut(raw, runCommand(raw));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const frag = input.trim().toLowerCase();
      if (!frag) return;
      const matches = COMMANDS.filter((c) => c.startsWith(frag));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setInput(commonPrefix(matches));
        setHistory((prev) => [
          ...prev,
          { cmd: "", output: matches.join("   "), noPrompt: true },
        ]);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdHistory.length) return;
      const pos = histPos === -1 ? cmdHistory.length - 1 : Math.max(0, histPos - 1);
      setHistPos(pos);
      setInput(cmdHistory[pos]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histPos === -1) return;
      const pos = histPos + 1;
      if (pos >= cmdHistory.length) {
        setHistPos(-1);
        setInput("");
      } else {
        setHistPos(pos);
        setInput(cmdHistory[pos]);
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="p-4 font-mono text-sm text-white h-full overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {!item.noPrompt && (
              <p>
                <span className="text-blue-400 mr-2">
                  manojmogal@portfolio:~
                </span>
                <span className="text-green-400">{item.cmd}</span>
              </p>
            )}
            <p className="whitespace-pre-wrap">{linkify(item.output)}</p>
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
