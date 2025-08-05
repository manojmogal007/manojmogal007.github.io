import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);

function ContextProvider({ children }) {
  const [terminalOpen, steTerminalOpen] = useState(false);

  const toggelTerminal = () => steTerminalOpen(!terminalOpen);

  const valConfig = {
    terminalOpen,
    toggelTerminal,
  };

  return (
    <AppContext.Provider value={valConfig}>{children}</AppContext.Provider>
  );
}

export default ContextProvider;
