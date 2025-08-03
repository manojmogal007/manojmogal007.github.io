import { useEffect, useState } from "react";

const Navbar = () => {
  const links = ["About", "Skills", "Experience", "Projects"];
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((link) =>
      document.getElementById(link.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center" onClick={() => handleScroll("hero")}>
          <span className="text-white text-3xl font-bold tracking-widest">
            {"</>"}
          </span>
        </div>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={link}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`uppercase text-sm tracking-widest transition-colors ${
                    activeSection === id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden flex flex-col justify-between w-9 h-7 group z-50 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[3px] bg-white rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          {/* <span
            className={`h-[4px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "translate-x-10 opacity-0" : "opacity-100"
            }`}
          /> */}
          <span
            className={`h-[3px] bg-white rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 backdrop-blur transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center mt-20 space-y-8">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={link}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`uppercase text-lg tracking-widest transition-colors ${
                    activeSection === id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
