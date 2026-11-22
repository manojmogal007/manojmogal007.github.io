import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

const DEFAULT_TERMINAL_WIDTH = 520;

function ContextProvider({ children }) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  // Width of the terminal column (px) — controlled by the draggable divider.
  const [terminalWidth, setTerminalWidth] = useState(DEFAULT_TERMINAL_WIDTH);
  // True while the user is dragging the divider, so transitions can be paused.
  const [isResizing, setIsResizing] = useState(false);

  const toggelTerminal = () => setTerminalOpen((prev) => !prev);

  const valConfig = {
    terminalOpen,
    toggelTerminal,
    setTerminalOpen,
    terminalWidth,
    setTerminalWidth,
    isResizing,
    setIsResizing,
  };

  return (
    <AppContext.Provider value={valConfig}>{children}</AppContext.Provider>
  );
}

export default ContextProvider;
