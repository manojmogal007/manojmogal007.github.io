import { useEffect, useState } from "react";

const Navbar = () => {
  const links = ["About", "Skills", "Experience", "Projects"];
  const [activeSection, setActiveSection] = useState("");

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
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800">
      <div
        className="flex justify-between items-center px-20 py-4"
      >
        <div className="flex items-center">
          <span className="text-white text-3xl font-bold tracking-widest">
            {"</>"}
          </span>
        </div>
        <ul className="flex gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
