import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function useAppState() {
  const appState = useContext(AppContext);
  if (!appState) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return appState;
}

export default useAppState;
