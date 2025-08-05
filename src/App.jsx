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
import Terminal from "./components/terminal/Terminal";

function App() {
  return (
    <div class="w-full text-white h-dvh">
      <Background count={10} />
      <Hero />
      <div id="home" className="w-full h-dvh bg-tansparent" />
      <div className="bg-[#1b1b1b]">
        <Navbar />
        <About />
        <Terminal />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Footer />
        <Connect />
      </div>
    </div>
  );
}

export default App;
