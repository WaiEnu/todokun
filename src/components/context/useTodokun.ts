import { createContext, ReactNode, useState } from "react";
import jotaiLength from "../types/jotai"

interface IdContextType {
  id: number;
  generateId: () => number;
}

const IdContext = createContext<IdContextType>();

export const IdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [id, setId] = useState(rand());
  const rand = () => {
    return Math.floor(Math.random() * (jotaiLength - 1))
  }
  const generateId = (rand()) => {
      const id = ;
      setId(id)
      return id;
  };

  const value = {
    id,
    generateId
  };

  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
};

export const useId = () => {
  const context = useContext(IdContext);
  if (context === undefined) {
    throw new Error("useTodokun must be used within a IdProvider");
  }
  return context;
};