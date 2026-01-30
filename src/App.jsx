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

function App() {
  
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-200 selection:bg-violet-500/30">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6">
        <About />
        <Terminal />
        <Skills />
        <Projects />
        <BikeSection />
      </div>
      <Contact />
      <Connect />
    </div>
  );
}

export default App;
