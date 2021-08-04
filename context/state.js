import { createContext, useContext } from "react";
import data from "../data/resume.json";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = { ...data };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
