import { container, Container } from "@di/Container";
import { createContext, useContext } from "react";

const DIContext = createContext<Container>(container);

export const DIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <DIContext.Provider value={container}>{children}</DIContext.Provider>;
};

export const useInjection = () => useContext(DIContext);
