// import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Background from "./components/background";

function App() {
  return (
    <div class="w-full bg-[#1b1b1b] text-white h-dvh">
      <Background count={5} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
