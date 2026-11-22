// import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Background from "./components/background";
import Connect from "./components/connect/Connect";
import Contact from "./components/contact";
import Terminal from "./components/terminal/Terminal";
import BikeSection from "./components/bike";
import useAppState from "./hooks/useAppState";

function App() {
  const { terminalOpen, terminalWidth, isResizing } = useAppState();
  const offset = terminalOpen ? terminalWidth : 0;

  return (
    <>
      {/* Left column: main content. Its right margin makes room for the
          terminal column so the two sit side by side (no width:100% here,
          otherwise the margin would overflow the viewport). */}
      <div
        className="min-h-screen bg-slate-950 text-slate-200 selection:bg-violet-500/30"
        style={{
          marginRight: offset,
          transition: isResizing ? "none" : "margin-right 300ms ease",
        }}
      >
        <Navbar />
        <Hero />
        <div className="max-w-7xl mx-auto px-6">
          <About />
          <Skills />
          {/* <Experience /> */}
          <Projects />
          <BikeSection />
        </div>
        <Contact />
        <Connect />
      </div>

      {/* Right column: resizable terminal panel. */}
      <Terminal />
    </>
  );
}

export default App;
