import React from "react";
import useAppState from "../../hooks/useAppState";
import TerminalSection from "./TerminalSection";

function Terminal() {
  const { terminalOpen } = useAppState();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 backdrop-blur transform transition-transform duration-300 z-40 ${
        terminalOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <TerminalSection />
    </div>
  );
}

export default Terminal;
